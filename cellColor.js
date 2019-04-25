class CellColor {
    constructor(value) {
        // this.color: hexadecimal color based on value
        this.color = getColor(value);
        this.LIGHTGRAY_RGB = [211,211,211];
        this.GOLD_RGB = [255,215,0];
    }

    // Returns a hexadecimal color based on the value
    // 2-2048 follows a gradient from lightgray (#D3D3D3) to gold (#FFD700)
    getColor(value) {
        let colorRGB;
        // 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048
        // gradient factor: 11 (11 numbers between 2-2048, inclusive)
        if (value >= 2 && value <= 2048) {
            colorRGB =  _generateGradientColor(this.LIGHTGRAY_RGB, this.GOLD_RGB, 11);
        }
        else {
            colorRGB = [0,0,255]; // blue
        }
        return colorRGB;
    }

    // Takes in two [r,g,b] color arrays and a factor
    // (factor: the number of elements we want to create a gradient of)
    // Returns an [r,g,b] color array of the result based on the factor
    _generateGradientColor = function (color1, color2, factor) {
        var result = color1.slice();
        for (let i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result;
    };

}
