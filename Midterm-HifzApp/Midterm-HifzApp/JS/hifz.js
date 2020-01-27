//After the document is loaded in the browser
document.addEventListener("DOMContentLoaded", async () => {
    await handleLoadHafiz();
});


async function getHafiz() {
    let url = '/api/hafiz/';
    const response = await fetch(url);
    return response.json();
}

async function handleLoadHafiz() {
    try {
        const hafizs = await getHafiz();

        document.querySelector('#hafizs-table').innerHTML =
            `<table id="hafizs">
                ${hafizs.map(hafiz => hafizToHTMLRow(hafiz)).join('')} 
            <table>`;
    } catch (e) {
        console.log(e);
    }
}

function hafizToHTMLRow(hafiz) {
    return `
        <tr id="row-${hafiz.surah}">
            <td>${hafiz.surah}</td>
            <td>${hafiz.fromAya}</td>
            <td>${hafiz.toAya}</td>
          <td>${hafiz.masteryLevel}</td>         
        </tr>   
    `
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