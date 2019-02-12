// Represents the data of the 2048 grid
class GridData {

    constructor() {
        // data - 4x4 2d array; prepopulate with 0's by default
        this.data = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ];
    }

    // Mutators
    setData(newData) { return this.data = newData; }

    // Accessors
    getData() { return this.data; }

}
// End gridData.js
