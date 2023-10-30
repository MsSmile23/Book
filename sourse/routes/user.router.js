const router = require('express').Router();
const UserPage = require('../views/UserPage');
const authorisation = require('../middleware/isAuth');
const renderTemplate = require('../lib/renderTemplate');
const { User, Company, Favourite } = require('../../db/models');

router.get('/', authorisation, async (req, res) => {
  try {
    const companies = await Company.findAll({ where: { user_id: req.session.user.id } });
    companies.sort((a, b) => (`${a.name}`).localeCompare(b.name));
    const favourites = await Favourite.findAll({
      where: { user_id: req.session.user.id }, include: Company, nest: true, raw: true,
    });
    favourites.sort((a, b) => (`${a.Company.name}`).localeCompare(b.Company.name));
    renderTemplate(UserPage, { user: req.session.user, companies, favourites }, res);
  } catch (err) { console.log(err); }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = req.session.user.id;
    const { id } = req.body;
    const company = await Company.findOne({ where: { id: Number(id) } });
    if (company.user_id === user) {
      await Favourite.destroy({ where: { company_id: Number(id) } });
      await Company.destroy({ where: { id: Number(id) } });
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (err) { console.log(err); }
});

router.patch('/update', async (req, res) => {
  try {
    const phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const { id, name, telephone } = req.body;
    console.log(id, name, telephone);
    if (phone.test(telephone) === true) {
      await Company.update({ name, telephone }, { where: { id } });
      const company = await Company.findOne({ where: { id } });
      res.send(company);
    } else {
      res.sendStatus(400);
    }
  } catch (err) { console.log(err); }
});

module.exports = router;
