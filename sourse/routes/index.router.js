const router = require('express').Router();
const bcrypt = require('bcrypt');
const authorisation = require('../middleware/isAuth');
const Home = require('../views/Home');
const Registration = require('../views/Registration');
const Login = require('../views/Login');
const NewCompany = require('../views/NewCompany');
const renderTemplate = require('../lib/renderTemplate');
const { User, Company, Favourite } = require('../../db/models');
const { raw } = require('express');

router.get('/', async (req, res) => {
  const companies = await Company.findAll({raw:true});
  for (let i = 0; i < companies.length; i += 1) {
    const company = await Favourite.findAll({ where: { company_id: i + 1 } });
    companies[i].company = company;
  }
  companies.sort((a, b) => (`${a.name}`).localeCompare(b.name));
  renderTemplate(Home, { user: req.session.user, companies }, res);
});

router.get('/registration', (req, res) => {
  renderTemplate(Registration, {}, res);
});

router.post('/registration', async (req, res) => {
  try {
    const {
      name, password, email,
    } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name, password: hashPassword, email,
    });
    const rawData = user.get({ plain: true });
    console.log(rawData);
    req.session.user = {
      id: user.id,
      name: user.name,
    };
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
});

router.get('/login', (req, res) => {
  renderTemplate(Login, {}, res);
});

router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name }, raw: true });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (checkPassword) {
      req.session.user = {
        id: user.id,
        name: user.name,
      };
      res.redirect('/');
    } else {
      res.redirect('/login');
    }
  } catch (err) {
    console.log(err);
  }
});

router.get('/logout', authorisation, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.redirect('/');
    } else {
      res.clearCookie('Examen');
      res.redirect('/');
    }
  });
});

router.get('/newcompany', authorisation, (req, res) => {
  renderTemplate(NewCompany, { user: req.session.user }, res);
});

router.post('/newcompany', authorisation, async (req, res) => {
  try {
    const { name, telephone } = req.body;
    const phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (phone.test(telephone) === true) {
      await Company.findOrCreate({ where: { name, telephone, user_id: req.session.user.id} });
      res.redirect('/');
    } else {
      res.redirect('/newcompany');
    }
  } catch (err) { console.log(err); }
});

router.patch('/favour', authorisation, async (req, res) => {
  try {
    const { id } = req.body;
    await Favourite.findOrCreate({ where: { company_id: id, user_id: req.session.user.id } });
    res.sendStatus(200);
  } catch (err) { console.log(err); }
});

router.delete('/remove', authorisation, async (req, res) => {
  try {
    const user = req.session.user.id;
    const { id } = req.body;
    await Favourite.destroy({ where: { user_id: user, company_id: Number(id) } });
    res.sendStatus(200);
  } catch (err) { console.log(err); }
});

module.exports = router;
