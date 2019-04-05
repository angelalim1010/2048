class CellColor {
    constructor(value) {
        // this.color: hexadecimal color based on value
        this.color = getColor(value);
    }

    // Returns a hexadecimal color based on the value
    // 2-2048 follows a gradient from lightgray (#D3D3D3) to gold (#FFD700)
    getColor(value) {
        let colorHex;
        const lightgrayHex = 0xD3D3D3,
            goldHex = 0xFFD700
        const lightgrayRgb = _hexToRgb(lightgrayHex),
            goldRgb = _hexToRgb(goldHex)

        // 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048
        // gradient factor: 11 (11 numbers between 2-2048, inclusive)
        if (value >= 2 && value <= 2048) {
            const colorRgb = _generateGradientColor(lightgrayRgb, goldRgb, 11);
            colorHex = _rgbToHex(colorRgb);
        }
        else {
            colorHex = 0x0000FF; // blue
        }
        return colorHex;
    }

    // Takes in a string hexadecimal color value (#000000 - #FFFFFF)
    // Returns an [r,g,b] color array of the hexadecimal string converted to integers 
    _hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
         ] : null;
    }

    // _rgbToHex helper function
    // Takes in a single integer value
    // Returns the value converted to a base 64 hexadecimal string
    _componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    
    // Takes in an [r,g,b] color array
    // Returns a string color value in hexadecimal (#000000 - #FFFFFF)
    _rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    // Takes in two [r,g,b] color arrays and a factor
    // (factor: the number of elements we want to create a gradient of)
    // Returns an [r,g,b] color array of the result based on the factor
    _generateGradientColor = function (color1, color2, factor) {
        var result = color1.slice();
        for (var i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result;
    };

}
