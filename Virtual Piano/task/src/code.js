let keys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];

document.addEventListener("keydown", function (event) {
    let msg = "Wrong key pressed!"
    keys.forEach(function (value) {
        if (event.code == value) {
            // msg = "The '" + value[3] +"' key is pressed.";
            let sound = new Audio("../white_keys/" + value[3] + ".mp3");
            sound.play();
        }
    })
    console.log(msg)
})