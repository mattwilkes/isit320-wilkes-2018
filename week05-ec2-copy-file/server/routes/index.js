var express = require('express');
var router = express.Router();

router.get('/copy-script', function(request, response) { 'use strict';
    response.send({ result: 'success' });
});

module.exports = router;
