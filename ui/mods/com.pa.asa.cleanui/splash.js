var splash = {};
splash.document = document.createElement("div");
splash.parent = document.getElementById("content-wrapper").children[1];
splash.interval =
    setInterval(function () {
        if (document.readyState == "complete") {
            clearInterval(splash.interval);
            splash.parent.appendChild(splash.document);
        }
    }, 100);

splash.array = [
    "Tried Bugs?",
    "Documented!",
    "That's no moon!",
    "On steam!",
    "Awesome community!",
    "discord.gg/pa"
]

splash.text = splash.array[Math.floor(Math.random() * splash.array.length)].replace(/\s/g, "&nbsp;");

splash.document.innerHTML = '<div id="splash">' + splash.text + '</div>';
splash.document.id = "tilt";