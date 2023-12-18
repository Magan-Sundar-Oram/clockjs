//References to DOM elements
const body = document.querySelector('body');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');
const modeSwitch = document.querySelector('.mode-switch');


//check if the mode is already set to "Dark Mode" in LocalStorage
if (localStorage.getItem('mode') === 'Dark Mode') {
    //add "dark" class to body and set modeSwitch text to "Light Mode"
    body.classList.toggle('dark')
    modeSwitch.textContent = 'Light Mode';
}

//Add EventListener for Drak Mode
modeSwitch.addEventListener('click', () => {
    //toggle the "dark" class on the body element
    body.classList.toggle('dark')
    //checks if the "dark" class is currently present on the body element
    const isDarkMode = body.classList.contains('dark');
    //set modeSwitch text based on "dark" class presence
    modeSwitch.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    //set localStorage "mode" item based on "dark" class presence
    localStorage.setItem('mode', isDarkMode ? 'Dark Mode' : 'Light Mode')
})


//Time Funtion()
const updateTime = () => {
    console.log('time');
    const date = new Date();
    const secToDeg = (date.getSeconds() / 60) * 360;
    const minToDeg = (date.getMinutes() / 60) * 360;
    const hrToDeg = (date.getHours() / 12) * 360;
    //setting second hand Rotaion align to secToDeg value
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
}

//Call updateTime to set Clock hands every Second
setInterval(updateTime, 1000);

//call UpdateTime() on Page Load
updateTime();