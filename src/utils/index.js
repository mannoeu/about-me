function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function interpolate(xInterval, yInterval) {
    let [x0, x1] = xInterval;
    let [y0, y1] = yInterval;

    return function (xA) {
        if (xA > x1) xA = x1;
        else if (xA < x0) xA = x0;

        const yA = y0 + (y1 - y0) * ((xA - x0) / (x1 - x0));

        return yA;
    };
}

export {
    randomNumber,
    interpolate
}