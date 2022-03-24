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
function SvgWire2(props) {
    return (React.createElement("svg", __assign({ viewBox: "0 0 120 160" }, props),
        React.createElement("g", { fill: "none", fillRule: "evenodd", strokeLinejoin: "round", strokeWidth: 2 },
            React.createElement("path", { d: "M56.247 6.734c39.286-13.399 67.173 25.028 57.997 59.302-10.6 39.597-56.535 30.094-16.254 72.858 20.746 22.025 6.767 22.781-41.937 2.269", stroke: "#ffb300" }),
            React.createElement("path", { d: "M37.215 16.936c6.555-4.79 12.93-8.121 19.032-10.202m-.194 134.429c-9.56-4.027-26.911-11.91-52.053-23.651", stroke: "#FFF" }))));
}
export default SvgWire2;
