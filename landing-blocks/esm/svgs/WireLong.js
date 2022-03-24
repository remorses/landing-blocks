var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
function SvgWireLong(props) {
    return (React.createElement("svg", __assign({ stroke: "#512DA8", viewBox: "0 0 1144 280" }, props),
        React.createElement("path", { d: "M1 96.742S124.672-.295 178.34 1.013c22.604.546-11.875 36.444.238 38.232 12.114 1.789 46.262-33.498 88.355-20.25 65.317 20.553-7.241 147.499 130.81 189.025 138.05 41.526 197.698-32.663 276.94-35.892 79.24-3.228 250.86 112.856 315.783 106.63 64.924-6.226-139.902-180.307-99.692-213.99 22.976-19.244 76.468 11.947 97.448 7.036 20.979-4.912-8.107-49.18 10.017-52.869C1016.363 15.247 1143 84.77 1143 84.77", strokeWidth: 2, fill: "none" })));
}
export default SvgWireLong;
