import React from 'react'



function HifzList ({hifz}) {


    return (<>
            <tr id="row-${hifz.id}">
                <td>${hifz.id}</td>
                <td>${hifz.name}</td>
                <td>${hifz.englishName}</td>
                <td>${hifz.ayaCount}</td>
                <td>${hifz.type}</td>
            </tr>

        </>
    );


}


export default HifzList;
