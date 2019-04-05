class CellColor {
    constructor(value) {
        this.color = getColor(value);
    }

    // Returns a hexadecimal color based on the value
    // 2-2048 follows a gradient from lightgray (#D3D3D3) to gold (#FFD700)
    getColor(value) {
        // 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048
        // 11 numbers
        let color;
        const lightgray = 0xD3D3D3,
            gold = 0xFFD700,
            colorRange = gold - lightgray

        if (value >= 2 && value <= 2048) {
            // color = 
        }
        else {

        }
        return color;
    }

    // Converts a #ffffff hex string into an [r,g,b] array
    // var h2r = function (hex) {
    //     var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    //     return result ? [
    //         parseInt(result[1], 16),
    //         parseInt(result[2], 16),
    //         parseInt(result[3], 16)
    //     ] : null;
    // };

    // // Inverse of the above
    // var r2h = function (rgb) {
    //     return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    // };

    // // Interpolates two [r,g,b] colors and returns an [r,g,b] of the result
    // // Taken from the awesome ROT.js roguelike dev library at
    // // https://github.com/ondras/rot.js
    // var _interpolateColor = function (color1, color2, factor) {
    //     if (arguments.length < 3) { factor = 0.5; }
    //     var result = color1.slice();
    //     for (var i = 0; i < 3; i++) {
    //         result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    //     }
    //     return result;
    // };

}
