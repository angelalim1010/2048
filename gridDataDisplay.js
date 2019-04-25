// Represents the display of the data of the 2048 grid in an HTML table format
class GridDataDisplay {

    constructor(gridData) {
        this.gridData = gridData;
    }

    // toHTML: returns this.gridData in a HTML table format
    toHTML() {
        let size = this.gridData.getSize();
        var res = "<div class='wrapper'>";
        for (let row = 0; row < size; row++) {
            // res += "<tr>";
            for (let col = 0; col < size; col++) {
                let cell = new Cell(row, col);
                // If cell if a 0 (empty), draw whitespace (&nbsp;) on board
                res += "<div class='cell'>";
                if (this.gridData.getCellValue(cell) == 0) {
                    res += "&nbsp;";
                }
                else {
                    res += this.gridData.getCellValue(cell);
                }
                res += "</div>"
            }
            // res += "</tr>";
        }
        res += "</div>";
        return res;
    }

}
// End GridDataDisplay.js
