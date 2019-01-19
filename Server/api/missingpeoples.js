const router = require('express').Router()
const { MissingPeople } = require('../models');

module.exports = router;

router.get('/', async (req,res) => {
    const missingpeoples = await MissingPeople.findAll();
    console.log(missingpeoples);
    res.send(missingpeoples);
});

router.post('/add', async (req,res) => {
    const missingpeoples = await MissingPeople.findAll();
    console.log(missingpeoples);
    res.send(missingpeoples);
});
