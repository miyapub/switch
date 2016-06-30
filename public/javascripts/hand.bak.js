if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
} else {
    alert('本设备不支持devicemotion事件');
}

function deviceMotionHandler(eventData) {
    var acceleration = eventData.accelerationIncludingGravity,
        x, y, z;
    x = acceleration.x;
    y = acceleration.y;
    z = acceleration.z;
    document.getElementById("status").innerHTML = "x:"+x+"<br />y:"+y+"<br />z:"+z;
}