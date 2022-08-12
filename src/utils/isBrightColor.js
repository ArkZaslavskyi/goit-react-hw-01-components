export function isBrightColor(hexColor) {
    hexColor = hexColor.slice(1);

    const red   = Number('0x' + hexColor.slice(0, 2));
    const green = Number('0x' + hexColor.slice(2, 4));
    const blue  = Number('0x' + hexColor.slice(4, 6));

    const lightness =
        1 - (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

    return lightness < 0.5;
};
