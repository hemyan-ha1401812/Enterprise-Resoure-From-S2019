const fs = require('fs-extra');
const path = require('path');
const surahFilePath = path.join(__dirname, '../data/surah.json');
const hifzFilePath = path.join(__dirname, '../data/hifz.json');
const Hifz = require ('../models/hifz');
const Surah = require ('../models/surah');


class HifzRepository {
    //ToDo: Implement using MongoDB. You must filter data using a database query.
    async getSurahs(surahType) {
        if(surahType)
            return await Surah.find({type: surahType});
    }


    async getHifz(){
        return await Hifz.find();
    }

    async addHifz(hifz) {
        return await Hifz.create(hifz);
    }

    async addSurah(surah){
        return await Surah.create(surah);
    }


    async initSurahDb() {
        try {
            const surahCount = await this.getSurahs().length;
            if (surahCount == 0) {
                await this.loadDataFromJsonFiles();
            }
        }
        catch (e) {
            console.log(e);
        }



    }

    async loadDataFromJsonFiles() {

        const surahs = await fs.readJson(surahFilePath);

        for (const surah of surahs) {
            await this.addSurah(surah);
        }
    }

    async initHifzDB() {
        try {
            const hifzCount = await this.getHifz().length;
            if (hifzCount == 0) {
                await this.loadDataFromJsonFiles();
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = new HifzRepository();