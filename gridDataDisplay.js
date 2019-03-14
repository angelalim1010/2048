// Represents the display of the data of the 2048 grid in an HTML table format
class GridDataDisplay {

    constructor(gridData) {
        this.gridData = gridData;
    }

    // toString: returns this.gridData in a HTML table format
    toString() {
        let data = this.gridData.getData();
        var res = "<div class='grid'>";
        for (let row = 0; row < data.length; row++) {
            res += "<div class='row'>";
            for (let col = 0; col < data[row].length; col++) {
                res += "<div>" + data[row][col].toString() + "</div>";
            }
            res += "</div>";
        }
        res += "</div>";
        return res;
    }

}
// End GridDataDisplay.js