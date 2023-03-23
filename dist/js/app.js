"use strict";
window.onload = function () {
    var attractTime = (60 * 1000) * 5;
    var ui = new UI();
    var attract = false;
    var attractTimeout = setTimeout(buildAttract, attractTime);
    function buildAttract() {
        console.info("Attract be like: I need atention!! Look at me and play with me!!!");
        var attractScreen = ui.makeAttractScreen();
        attractScreen.addEventListener('click', function () {
            attractScreen.remove();
            attract = false;
            attractTimeout = setTimeout(buildAttract, attractTime);
        });
        attract = true;
    }
};
var UI = (function () {
    function UI() {
        this.language = 'NL';
    }
    UI.prototype.makeAttractScreen = function () {
        var attractWrapper = document.createElement('div');
        attractWrapper.id = 'attract';
        var languageToggle = document.createElement('language-selector');
        var languageNL = document.createElement('button');
        languageNL.innerHTML = "NL";
        languageNL.className = "active";
        languageNL.addEventListener('click', function (e) {
            console.log("attract, clicked NL");
        });
        var languageEN = document.createElement('button');
        languageEN.innerHTML = "EN";
        languageEN.addEventListener('click', function (e) {
            console.log("attract, clicked EN");
        });
        languageToggle.append(languageNL, languageEN);
        var attractScreen = document.createElement('div');
        attractScreen.id = 'attract-content';
        attractScreen.append(languageToggle);
        attractScreen.innerHTML += "<p>I need attention</p>";
        attractWrapper.append(attractScreen);
        document.querySelector('body').prepend(attractWrapper);
        return attractWrapper;
    };
    return UI;
}());
//# sourceMappingURL=app.js.map