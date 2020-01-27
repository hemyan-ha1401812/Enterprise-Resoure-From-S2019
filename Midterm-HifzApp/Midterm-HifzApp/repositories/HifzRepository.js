const fs = require('fs-extra');
const path = require('path');
const surahFilePath = path.join(__dirname, '../data/surah.json');
const hifzFilePath = path.join(__dirname, '../data/hifz-register.json');

class HifzRepository {

    async getSurahs(surahType) {
        let surahs = await fs.readJSON(surahFilePath);

        if (surahType && surahType != 'All') {
            surahs = surahs.filter(surah => surah.type === surahType);


        for (const surah of surahs) {
            if (surah.type === "Meccan")
                Object.setPrototypeOf(surah, surah.prototype);
            else
                Object.setPrototypeOf(surah, surah.prototype);
        }
        return surahs;
    }

     async function getHafiz() {
            let hafiz = await fs.readJSON(hifzFilePathFilePath);
                return hafiz;
            }

        async function addHafiz(hafiz) {
            try {
                const hafizs = await this.getHafiz();
                hafizs.push(hafiz);
                return await this.saveHafiz(hafizs);
            } catch (err) {
                console.log(err);
            }
        }
        async function saveHafiz(hafiz) {
            return await fs.writeJSON(hifzFilePath, hafiz);
        }

}

}
    module.exports = new HifzRepository();