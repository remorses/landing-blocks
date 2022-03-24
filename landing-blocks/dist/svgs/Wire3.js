"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function SvgWire3(props) {
    return (React.createElement("svg", __assign({ viewBox: "0 0 120 160" }, props),
        React.createElement("g", { fill: "none", fillRule: "evenodd", strokeWidth: 2 },
            React.createElement("path", { d: "M56 31c-19.813 9.866-32.816 18.746-33.376 26.407C21.75 69.472 43.312 68.907 44.727 80 46.142 91.093 4 102.081 4 136.698c0 23.574 31.68 24.135 52 4.302", stroke: "#ffb300" }),
            React.createElement("path", { d: "M116 4c-22.05 9.87-43.445 18.756-60 27m0 110c5.665-5.529 10.557-12.28 13.5-21", stroke: "#FFF" }))));
}
exports.default = SvgWire3;
