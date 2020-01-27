const hifzRepo = require('../repositories/HifzRepository');


class HifzService {

    async getSurahs(req, res) {
        try {
            const type = req.query.type;
            const surahs = await hifzRepo.getSurahs(type);
            res.json(surahs);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    async getHafiz(req, res) {
        try {
            const Hafiz = await hifzRepo.getHafiz(type);
            res.json(Hafiz);
        } catch (err) {
            res.status(500).send(err);
        }
    }




}

module.exports = new HifzService();