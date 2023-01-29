var express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
var router = express.Router();

let ingredients = [];
let options = [];

fs.createReadStream('./data/ingredients.csv')
    .pipe(csv())
    .on('data', (data) => {
        ingredients.push(data);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
        options = ingredients.map(({ ingredient }) => ({
            value: ingredient,
            label: ingredient
        }))
    });

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(options);
});

module.exports = router;
