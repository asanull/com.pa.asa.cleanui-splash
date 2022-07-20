var splash = {};
splash.document = document.createElement("div");
splash.expansions = [
    "Bug Faction",
    "Legion Expansion",
    "Second Wave",
    "Section 17",
    "Aurora-Artillery",
    "Galactic War Overhaul",
    "Queller AI",
    "More Pew Pew"
]
splash.othergames = [
    "Total Annihilation",
    "Beyond All Reason",
    "BAR",
    "Supreme Commander",
    "SupCom"
]
splash.document.id = "tilt";
splash.interval = setInterval(function () {
    if (document.readyState == "complete") {
        splash.player = document.getElementById("player-display-name").innerText;
        splash.splashes = [
            "Tried "+splash.expansions[Math.floor(Math.random()*splash.expansions.length)]+"?",
            "Tried "+splash.othergames[Math.floor(Math.random()*splash.othergames.length)]+"?",
            "Documented!",
            "That's no moon!",
            "On steam!",
            "gg ez",
            "Awesome community!",
            "discord.gg/pa",
            "100% more yellow text!",
            "Quite Indie!",
            "Endless!",
            "Multithreaded!",
            "Technically good!",
            "Tell your friends!",
            "Livestreamed!",
            "Now with Titans!",
            "Annihilate everything",
            "Beware of Bugs! (The Faction)",
            splash.player + " IS YOU",
            "Hi Ben!",
            "Planet to Planet!",
            "Ferrets!",
            "all your base are belong to us!"
        ]
        clearInterval(splash.interval);
        splash.document.innerHTML = '<div id="splash">' + splash.splashes[Math.floor(Math.random() * splash.splashes.length)].replace(/\s/g, "&nbsp;") + '</div>';
        splash.parent = document.getElementById("content-wrapper").children[1];
        splash.parent.appendChild(splash.document);
    }
}, 100);