const hifzService = require('./services/HifzService');
const router = require('express').Router();

router.route('/surahs')
    .get(hifzService.getSurahs)
    .post(hifzService.addSurah);


router.route('/hifz')
    .get(hifzService.getHifz)
    .post(hifzService.addHifz);

module.exports = router;