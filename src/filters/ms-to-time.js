const msToTime = {}

const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    //ES6 interpolated literals/template literals 
    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

const millisToTime = (s) => {
    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    let time;

    if (parseInt(hrs) > 0) {
        time = pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
    } else {
        time = pad(mins) + ':' + pad(secs);
    }

    return time;
}

msToTime.install = function (Vue) {
    Vue.filter('mstotime', (val) => {
        return millisToTime(val)
    })
}

export default msToTime;