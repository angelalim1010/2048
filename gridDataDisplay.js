// Represents the display of the data of the 2048 grid in an HTML table format
class GridDataDisplay {

    constructor(gridData) {
        this.gridData = gridData;
    }

    // toHTML: returns this.gridData in a HTML table format
    toHTML() {
        let data = this.gridData;
        let size = data.getSize();
        var res = "<div class='grid'>";
        for (let row = 0; row < size; row++) {
            res += "<div class='row'>";
            for (let col = 0; col < size; col++) {
                res += "<div>" + data.getCell(row, col).getValue() + "</div>";
            }
            res += "</div>";
        }
        res += "</div>";
        return res;
    }

}
// End GridDataDisplay.js
