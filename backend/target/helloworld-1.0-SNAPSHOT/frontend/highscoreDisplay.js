// Displays the list of highscores
class HighscoreDisplay {
    constructor(container) {
        this.container = container;
    }

    init() {
        var container = this.container;
        var setHtmlFunction = this._toHTML;
        $.getJSON("/hello", 'foo', function(data, status, jgxhr){
            console.log("Server replied" );
            console.log(data);
            container.innerHTML = setHtmlFunction(data);
        });
        console.log(' server contacted' );
    }

    _toHTML(data) {
        console.log("data in toHTML():", data);
        // console.log(this.data.responseText);
        // console.log(this.responseText);
        const highscoresArr = data.highscores;

        console.log(highscoresArr);
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
