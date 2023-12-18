const clock = document.querySelector('#clock');

function updateTime() {
    const now = new Date();
    let ampm;
    let hours = now.getHours();
    if (hours >= 12) {
        ampm = 'PM';
    } else {
        ampm = 'AM'
    }
    hours = hours % 12;
    hours = (hours ? hours : 12);
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    clock.innerText = clockStr;
    console.log(clockStr);
}
setInterval(updateTime, 1000);
