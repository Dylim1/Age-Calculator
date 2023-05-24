function calculate() {
    setInterval(() => {
        // get birthday
        let birthdate = new Date(document.getElementById('birthdate').value);

        // get date now
        let now = new Date();
        // convert to milliseconds
        let ageInMs = now.getTime() - birthdate.getTime();


        if (isNaN(ageInMs)) {
            window.location.reload();
        }

        else {

            // calculations for respective time
            let ageInSec = ageInMs / 1000;
            let ageInMin = ageInSec / 60;
            let ageInHrs = ageInMin / 60;
            let ageInDays = ageInHrs / 24;
            let ageInMonths = ageInDays / 30.4375;
            let ageInYears = ageInMonths / 12;


            // display age
            document.querySelector('#years').innerHTML = Math.floor(ageInYears);
            document.querySelector('#months').innerHTML = Math.floor(ageInMonths % 12);
            document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375);
            document.querySelector('#hours').innerHTML = Math.floor(ageInHrs % 24);
            document.querySelector('#minutes').innerHTML = Math.floor(ageInMin % 60);
            document.querySelector('#seconds').innerHTML = Math.floor(ageInSec % 60);
            document.querySelector('#seconds').style.borderBottom = '1px grey solid';

            //display next birthday
            document.querySelector('#months2').innerHTML = Math.floor(12 - (ageInMonths % 12));
            document.querySelector('#days2').innerHTML = Math.floor(30 - (ageInDays % 30.4375));
            document.querySelector('#hours2').innerHTML = Math.floor(24 - (ageInHrs % 24));
            document.querySelector('#minutes2').innerHTML = Math.floor(60 - (ageInMin % 60));
            document.querySelector('#seconds2').innerHTML = Math.floor(60 - (ageInSec % 60));
            document.querySelector('#seconds2').style.borderBottom = '1px grey solid';
        }
    }, 1000);

}

function displayTime() {
    let now = new Date();
    const currentTime = now.toLocaleTimeString();
    const timeElement = document.getElementById("time");
    timeElement.textContent = currentTime;
}
setInterval(displayTime, 1000);

function reset() {
    window.location.reload();
}