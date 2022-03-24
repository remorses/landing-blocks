/**
 * Composes a variable number of CSS helper functions.
 * Returns a function that accepts all the original arguments
 * of the functions it composed. If the original function
 * accepted multiple arguments, they must be passed as
 * an array.
 * @example
 * const translateXandRotateY = compose(translateX, rotateY);
 * const cssValue = translateXandRotateY('-5px', '30deg');
 */
export var compose = function () {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return function () {
        var styleArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            styleArgs[_i] = arguments[_i];
        }
        var result = funcs.reduce(function (acc, func, i) {
            var arg = styleArgs[i];
            return "".concat(acc, " ").concat(Array.isArray(arg) ? func.apply(void 0, arg) : func(arg));
        }, '');
        return result.trim();
    };
};
export function getNextPercentage(i, total, limit) {
    if (limit === void 0) { limit = 100; }
    if (i == 0) {
        return '0%';
    }
    return (i / total) * limit + '%';
}
export var cubicBezier = function (a, b, c, d) { return "cubic-bezier(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ")"); };
export var translate3d = function (a, b, c) {
    return "translate3d(".concat(a, ", ").concat(b, ", ").concat(c, ")");
};
export var translateX = function (a) { return "translateX(".concat(a, ")"); };
export var scale3d = function (a, b, c) {
    return "scale3d(".concat(a, ", ").concat(b, ", ").concat(c, ")");
};
export var scale = function (a) { return "scale(".concat(a, ")"); };
export var skewX = function (deg) { return "skewX(".concat(deg, "deg)"); };
export var skewY = function (deg) { return "skewY(".concat(deg, "deg)"); };
export var skewXY = function (x, y) {
    return "".concat(skewX(x), " ").concat(skewY(y));
};
export var rotateY = function (a) { return "rotateY(".concat(a, ")"); };
export var rotate3d = function (a, b, c, d) {
    return "rotate3d(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, "deg)");
};
export var perspective = function (a) { return "perspective(".concat(a, ")"); };
