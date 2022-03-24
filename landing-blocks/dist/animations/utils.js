"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perspective = exports.rotate3d = exports.rotateY = exports.skewXY = exports.skewY = exports.skewX = exports.scale = exports.scale3d = exports.translateX = exports.translate3d = exports.cubicBezier = exports.getNextPercentage = exports.compose = void 0;
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
var compose = function () {
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
exports.compose = compose;
function getNextPercentage(i, total, limit) {
    if (limit === void 0) { limit = 100; }
    if (i == 0) {
        return '0%';
    }
    return (i / total) * limit + '%';
}
exports.getNextPercentage = getNextPercentage;
var cubicBezier = function (a, b, c, d) { return "cubic-bezier(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ")"); };
exports.cubicBezier = cubicBezier;
var translate3d = function (a, b, c) {
    return "translate3d(".concat(a, ", ").concat(b, ", ").concat(c, ")");
};
exports.translate3d = translate3d;
var translateX = function (a) { return "translateX(".concat(a, ")"); };
exports.translateX = translateX;
var scale3d = function (a, b, c) {
    return "scale3d(".concat(a, ", ").concat(b, ", ").concat(c, ")");
};
exports.scale3d = scale3d;
var scale = function (a) { return "scale(".concat(a, ")"); };
exports.scale = scale;
var skewX = function (deg) { return "skewX(".concat(deg, "deg)"); };
exports.skewX = skewX;
var skewY = function (deg) { return "skewY(".concat(deg, "deg)"); };
exports.skewY = skewY;
var skewXY = function (x, y) {
    return "".concat((0, exports.skewX)(x), " ").concat((0, exports.skewY)(y));
};
exports.skewXY = skewXY;
var rotateY = function (a) { return "rotateY(".concat(a, ")"); };
exports.rotateY = rotateY;
var rotate3d = function (a, b, c, d) {
    return "rotate3d(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, "deg)");
};
exports.rotate3d = rotate3d;
var perspective = function (a) { return "perspective(".concat(a, ")"); };
exports.perspective = perspective;
