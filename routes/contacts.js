const express = require('express');
const router = express.Router();

//@route  GET  api/contacts
//@desc   Get all user contacts
//@acess  Private
router.get('/', (req, res) => {
  res.send('get all contacts');
});

//@route  POST  api/contacts
//@desc  Add new contacts
//@acess  Private
router.post('/', (req, res) => {
  res.send(' add new contacts');
});

//@route  POST  api/contacts:id
//@desc  update contact
//@acess  Private
router.put('/:id', (req, res) => {
  res.send(' update contact');
});

//@route  POST  api/contacts:id
//@desc  delete contact
//@acess  Private
router.delete('/:id', (req, res) => {
  res.send(' delete contact');
});
module.exports = router;
