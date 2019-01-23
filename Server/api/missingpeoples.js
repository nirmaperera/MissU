const router = require('express').Router()
const { MissingPeople, Tip } = require('../models');


module.exports = router;

/***   Get all missing people's records      ***/
router.get('/', async (req,res) => {
    const missingpeoples = await MissingPeople.findAll();
    console.log(missingpeoples);
    res.send(missingpeoples);
});

/***  Add a missing people's record       ***/
// router.post('/add', async(req,res) => {
//   const { firstName, lastName, caseNumber } = req.body;
//   const newMissingPeople =  await MissingPeople.create({
//                             firstName: firstName,
//                             lastName: lastName,
//                             caseNumber: caseNumber
//                         });
//   res.status(201).send(newMissingPeople);
// });

/***  Add a tip for a missing people record       ***/
router.post('/add', async(req,res) => {
  const { firstName, lastName, caseNumber, tipGiverId, tip } = req.body;
  console.log(req.body);
  const newTip =  await Tip.create({
                            caseNumber: caseNumber,
                            tipGiverId: tipGiverId,
                            tip: tip
                        });
  res.status(201).send(newTip);
});

router.get('/tips', async (req,res) => {
    const allTips = await Tip.findAll();
    console.log(allTips);
    res.send(allTips);
});

/***  Add a tip for a missing people record       ***/
// router.post('/addtip', async(req,res) => {
//   const { firstName, lastName, caseNumber, tipGiverId, tip } = req.body;
//   const existingMissingPeople = await MissingPeople.findOne( {where: {caseNumber: caseNumber} });
//   if(existingMissingPeople){
//     const newTip =  await Tip.create({
//                               caseNumber: caseNumber,
//                               tipGiverId: tipGiverId,
//                               tip: tip
//                           });
//     res.status(201).send(newTip);
//   }
//   else{
//     const newTip =  await Tip.create({
//                               caseNumber: caseNumber,
//                               tipGiverId: tipGiverId,
//                               tip: tip
//                           });
//     const newMissingPeople = await MissingPeople.create({
//                               firstName: firstName,
//                               lastName: lastName,
//                               caseNumber: caseNumber
//                           });
//     res.status(201).send(newTip);
//   }
//
// });

/***   Get one missing people's tip by searching their caseNumber       ***/
router.get('/tip/:caseNumber', async (req,res) => {
    const caseNumber = req.params.caseNumber;
    const tips = await Tip.findAll( {where: {caseNumber: caseNumber}});
    console.log(tips);
    res.send(tips);
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
