const express = require('express');
const router = express.Router();
const Pilar = require('../models/Pilar');

router.get('/',(req,res)=>{
  res.send('Halaman Pilar');
});

router.post('/',(req,res)=>{
  const pilar = new Pilar({
    pilar: req.body.pilar,
    deskripsi: req.body.deskripsi
  });
  pilar.save()
  .then(data => {
    res.json(data);
  })
  .catch(err =>{
    res.json({message: err});
  });
});

module.exports = router;
