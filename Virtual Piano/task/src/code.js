let keys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];

document.addEventListener("keydown", function (event) {
    let msg = "Wrong key pressed!"
    keys.forEach(function (value) {
        if (event.code == value) {
            msg = "The '" + value[3] +"' key is pressed.";
        }
    })
    console.log(msg)
})