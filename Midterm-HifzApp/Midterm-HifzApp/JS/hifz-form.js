//After the document is loaded in the browser
document.addEventListener("DOMContentLoaded", async () => {
    await handleAddHifz();
});


async function handleAddHifz(event) {
    try {
        const form = event.target.form;
        const isFormValid = form.checkValidity();
        if (!isFormValid) return;

        event.preventDefault();

        const hifz = formToObject(form);
        console.log('hifz', hifz);
        await fetch('/api/hifz',
            {
                method: 'POST',
                headers: {
                    'Content-Type': "hifz-register/json",
                },
                body: JSON.stringify(hifz)
            });
        window.location.href = '/';
    } catch (e) {
        console.log(e);
    }
}

async function getSurahs(surahsType) {
    let url = '/api/surahs/';
      const response = await fetch(url);
    return response.json();
}

async function handleurahChange(event) {
    const surah = event.target.value;
    console.log(surah);
    const surahs = await getSurahs(surah);
    console.log(surahs);

    const surahsUL = document.querySelector('#surah');
    surahsUL.innerHTML = '';
    surahs.forEach(ss => {
        const li = `<li>${ss.name} </li>`;

        surahsUL.innerHTML += li;
    })


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
}