// Displays the list of highscores
class HighscoreDisplay {
    constructor() {
        // const data = jQuery.getJSON("frontend/dummy_highscores.json");
        // const data = JSON.parse("frontend/dummy_highscores.json")
        this.data = jQuery.getJSON("/hello")
            // "highscores": [
            //     {
            //         "name": "Apples",
            //         "score": 1024
            //     },
            //     {
            //         "name": "Bobby",
            //         "score": 2048
            //     },
            //     {
            //         "name": "Cindy",
            //         "score": 4096
            //     }
            // ]
        console.log(typeof(this.data))
        console.log(this.data);
        this.responseText = this.data.responseText;
        console.log(this.responseText)
    }

    toHTML() {
        console.log(this.data);
        console.log(this.data.responseText);
        console.log(this.responseText);
        const highscoresArr = this.data.responseText.highscores;

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
