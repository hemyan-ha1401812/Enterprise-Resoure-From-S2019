import React from 'react'



function SurahExplorer({surah}) {


    return (<>
        <tr id="row-${surah.id}">
            <td>${surah.id}</td>
            <td>${surah.name}</td>
            <td>${surah.englishName}</td>
            <td>${surah.ayaCount}</td>
            <td>${surah.type}</td>
        </tr>

        </>
    );
}


export default SurahExplorer;
