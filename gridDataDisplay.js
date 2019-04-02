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
                let cell = new Cell(row, col);
                // If cell if a 0 (empty), draw whitespace (&nbsp;) on board
                if (data.getCellValue(cell) == 0) {
                    res += "<div>&nbsp;</div>";
                }
                else {
                    res += "<div>" + data.getCellValue(cell) + "</div>";
                }
            }
            res += "</div>";
        }
        res += "</div>";
        return res;
    }

}
// End GridDataDisplay.js
