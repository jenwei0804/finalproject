let express = require('express');
let router = express.Router();
let OKhospital = require('./OKhospital.js');
let NICEhospital = require('./NICEhospital.js');
let GOODhospital = require('./GOODhospital.js');
router.get('/', (req, res) => {
    let options = {
        root: __dirname,
        dotfiles: 'deny'
    }
    res.sendFile("index.html", options)
})
router.use('/OKhospital', OKhospital);
router.use('/NICEhospital', NICEhospital);
router.use('/GOODhospital', GOODhospital);

module.exports = router;