// Displays the list of highscores
class HighscoreDisplay {
    constructor(container) {
        this.container = container;
    }

    init() {
        var container = this.container;
        var setHtmlFunction = this._toHTML;
        $.getJSON("/highscores", 'foo', function(data, status, jgxhr){
            console.log("\"/highscores\" endpoint: server replied");
            console.log("data retrieved from \"/highscores\" endpoint: ", data);
            container.innerHTML = setHtmlFunction(data);
        });
        console.log("\"/highscores\" endpoint: server contacted");
    }

    _toHTML(data) {
        const highscoresArr = data.highscores;
        var res = "<table>";
        res += "<tr><th>Name</th><th>Score</th></tr>"
        highscoresArr.forEach(function(highscore) {
            res += "<tr>";
            res += "<td>" + highscore.name + "</td>";
            res += "<td>" + highscore.score + "</td>";
            res += "</tr>";
        })
        res += "</table>";
        return res;
    }

}
