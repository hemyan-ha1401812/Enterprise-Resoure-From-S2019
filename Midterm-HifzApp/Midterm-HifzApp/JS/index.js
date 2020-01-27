//After the document is loaded in the browser
document.addEventListener("DOMContentLoaded", async () => {
    await handleLoadSurahs();
});

async function getSurahs(surahsType) {
    let url = '/api/surahs/';
    if (surahsType) {
        url = `${url}?type=${surahsType}`;
    }
    const response = await fetch(url);
    return response.json();
}

async function handleLoadSurahs(surahsType) {
    try {
        const surahs = await getSurahs(surahsType);

        document.querySelector('#surahs-table').innerHTML =
            `<table id="surahs">
                ${surahs.map(surah => surahToHTMLRow(surah)).join('')} 
            <table>`;
    } catch (e) {
        console.log(e);
    }
}

function surahToHTMLRow(surah) {
    return `
        <tr id="row-${surah.id}">
            <td>${surah.id}</td>
            <td>${surah.name}</td>
            <td>${surah.englishName}</td>
          <td>${surah.ayaCount}</td>
          <td>${surah.type}</td>
          
        </tr>   
    `
}


async function fillSurahsDD() {
    try {
        const surahs = await getSurahs('All');
        document.querySelector('#surahType').innerHTML +=
            `${ surahs.map(surah => surahToHtmlOption(surah)).join('') }`;

    } catch (e) {
        console.log(e);
    }
}
function surahToHtmlOption(surah) {
    return  `<option value='${surah.id}'>
                #${surah.id} - ${surah.type}
             </option>`;
}




function formToObject(form) {
    // Construct key/value pairs representing form fields and their values,
    const formData = new FormData(form);
    let formObject = {};

    // Convert key/value pairs to an object
    formData.forEach( (value, key) => {
        formObject[key] = value;
    });

    return formObject;
}