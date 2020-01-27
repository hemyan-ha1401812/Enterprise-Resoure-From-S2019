import React ,{useState} from 'react';
import HifizList = require('./HifzList');
import SurahExplorer = require('./SurahExplorer');

function HifzForm ({hif, onSubmit}) {
    const [hifz, setHifz] = useState(hif);


    async function getSurahs(type) {
        let url = 'http://localhost:8090/api/surahs';
        if(type){
            url = `${url}?type=${type}`
        }

        const response = await fetch(url);
        const data = await response.json();
        setHifz(data);
    }




    async function fillSurahDropddown() {
        const surahs = await getSurahs();
        console.log("fillSurahDropddown", surahs);
        let list = document.getElementById('surah');
        list.innerHTML = '';
        surahs.forEach(s => {
            let option = document.createElement('option');
            option.value = option.text = s.englishName;
            list.appendChild(option);
        });

    }

    async function handleAddHifz(event) {
        try {

            const url = 'http://localhost:8090/api/hifz';
            const form = event.target.form;
            const isFormValid = form.checkValidity();
            if (!isFormValid) return;

            event.preventDefault();
            onSubmit(hifz);

            await fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json",
                    },
                    body: JSON.stringify(hifz)
                });
            window.location.href = 'index.html'
        } catch (e) {
            console.log(e);
        }
    }

    function formToObject(form) {
        const formData = new FormData(form);
        let formObject = {};

        // Convert key/value pairs to an object
        formData.forEach( (value, key) => {
            formObject[key] = value;
        });

        return formObject;
    }



    return (<>

        <form>
            <label htmlFor="surah">Surah</label>
            <select id="surah" name="surah" required>
                <option> </option>
                <option value="Al-Fatiha">Al-Fatiha</option>
                <option value="Al-Baqara">Al-Baqara</option>
                <option value="Aal-e-Imran">Aal-e-Imran</option>
            </select>

            <label htmlFor="fromAya">From Aya</label>
            <input type="text" id="fromAya" name="fromAya" required>

                <label htmlFor="toAya">From Aya</label>
                <input type="text" id="toAya" name="toAya" required>

                    <label htmlFor="masteryLevel">Mastery Level</label>
                    <select id="masteryLevel" name="masteryLevel" required>
                        <option> </option>
                        <option value="5">Excellent</option>
                        <option value="4">Very Good</option>
                        <option value="3">Good</option>
                        <option value="2">Fair</option>
                        <option value="1">Poor</option>
                    </select>

                    <button type="Submit" onClick="handleAddHifz(event)">Submit</button>
        </form>

      </>)



}








export default HifzForm;
