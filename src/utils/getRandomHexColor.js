import { isBrightColor } from 'utils';

export const getRandomHexColor = () => {
    const randomColor = '#' +
            Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, 0);
    
    return {
        bgColor: randomColor,
        isBgBright: isBrightColor(randomColor),
    };
}

