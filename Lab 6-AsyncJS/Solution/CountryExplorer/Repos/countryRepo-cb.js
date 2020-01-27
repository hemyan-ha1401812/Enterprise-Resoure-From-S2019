
function download(){
    let sum =1;

    for (let i=0 ;i<100000;i++){
        sum+=i;
    }
    console.log( sum);

}

function password(password, callback){

if (password === "Expected")
    callback(null, "Good to log in");
else
    callback("incorrect password",null);

}

function display(err, data){
    if (err)
        console.log(err);
    else
        console.log(data);
}


password("Expected",display);


// setTimeout(download,1000);
// console.log("This should be displayed very quickly")


class countryRepoCB{
    constructor(){
        this.fs= require('fs');
    }

    readFileUsingCallback(filePath){
        this.fs.readFile(filePath,"UTF-8",(err,data)=>{
            if(err){
                console.log(err);

            }
            else{
                let countries = JSON.parse(data);
                console.log(countries);

            }

        });
    }

    getCapitalCity(countryName){
        this.fs.readFileUsingCallback();



    }











}





let countryRepoCB =new countryRepoCB();
countryRepoCB.readFile


















