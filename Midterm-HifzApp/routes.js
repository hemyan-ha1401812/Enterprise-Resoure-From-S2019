const express = require('express');
const router = express.Router();


const hifzService = require('./services/HifzService');

router.get('surahs',hifzService.getSurahs );
router.get('hifz',hifzService.getHafiz );



module.exports = router;