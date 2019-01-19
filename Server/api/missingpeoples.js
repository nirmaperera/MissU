const router = require('express').Router()
const { MissingPeople } = require('../models');

module.exports = router;

/***   Get all missing people's records      ***/
router.get('/', async (req,res) => {
    const missingpeoples = await MissingPeople.findAll();
    console.log(missingpeoples);
    res.send(missingpeoples);
});

/***  Add a missing people's record       ***/
router.post('/add', async(req,res) => {
  const { name, imageUrl, address, description } = req.body;
  const newMissingPeople =  await MissingPeople.create({
                            name: name,
                            imageUrl: imageUrl,
                            address: address,
                            description: description,
                        });
  res.status(201).send(newMissingPeople);
});

/***   Get one missing people's record by searching their ID       ***/
router.get('/:inputID', async (req,res) => {
    const inputID = req.params.inputID;
    const missingpeople = await MissingPeople.findById(inputID);
    console.log(missingpeople);
    res.send(missingpeople);
});

/***   Update a missing people's record       ***/
router.put('/update', async (req,res) => {
    const { id, name, imageUrl, address, description } = req.body;
    const updateMissingPeople =  await MissingPeople.update({
                              name: name,
                              imageUrl: imageUrl,
                              address: address,
                              description: description,
                          },{ where: {id: id} });
    // console.log(updateMissingpeople);
    res.status(201).send('successfully updated');
});

/***   Delete a student's record       ***/
router.delete('/:inputID', async (req,res) => {
    const inputID = req.params.inputID;
    const updateMissingPeople =  await MissingPeople.destroy({
                              where: {
                                id: inputID
                              }
                          });
    // console.log(updateMissingpeople);
    res.status(201).send('successfully deleted');
});
