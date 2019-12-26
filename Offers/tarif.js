const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */

router.get('/offers', (req, res) => {
    res.render('offers', 
        { "items": "немного инфы"
        }
    );
});

router.get('/advanced', (req, res) => {
  var st = {"forAdvanced":faker.random.number({min:16, max:24})};
    
    res.render('forAdvanced',{"forAdvanced": st});
});

router.get('/standart', (req, res) => {
  var st = {"forStandart":faker.random.number({min:8, max:16})};
    
    res.render('forStandart',{"forStandart": st});
});


module.exports = router;
