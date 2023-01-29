var express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
var router = express.Router();

let ingredients = [];

fs.createReadStream('./data/ingredients.csv')
    .pipe(csv())
    .on('data', (data) => {
        ingredients.push(data);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

let ingredientsDropdown = [];

for (let k = 0; k < ingredients.length; k++) {
    drown.push({
        "value": ingredientsDropdown[k]['ingredient'],
        "label": ingredientsDropdown[k]['ingredient']
    })
}

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(ingredientsDropdown);
});

module.exports = router;
