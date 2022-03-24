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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailchimpForm = exports.EmailForm = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("@chakra-ui/react");
var react_3 = __importStar(require("react"));
var react_mailchimp_subscribe_1 = __importDefault(require("react-mailchimp-subscribe"));
var Button_1 = require("./Button");
var layout_1 = require("./layout");
function EmailForm(_a) {
    var _b = _a.cta, cta = _b === void 0 ? 'Notify me' : _b, _c = _a.placeholder, placeholder = _c === void 0 ? 'Enter your email' : _c, _d = _a.animate, animate = _d === void 0 ? undefined : _d, _e = _a.fingerprint, fingerprint = _e === void 0 ? '' : _e, _f = _a.value, value = _f === void 0 ? '' : _f, _g = _a.onChange, onChange = _g === void 0 ? console.log : _g, _h = _a.onSubmit, onSubmit = _h === void 0 ? console.log : _h, rest = __rest(_a, ["cta", "placeholder", "animate", "fingerprint", "value", "onChange", "onSubmit"]);
    var colorMode = (0, react_1.useColorMode)().colorMode;
    return (react_3.default.createElement(react_2.Stack, __assign({ as: 'form', justify: 'flex-start', width: 'auto', direction: ['column', null, 'row'], 
        // align='center'
        spacing: '20px', fontSize: 'text' }, rest),
        react_3.default.createElement(react_1.Input, { focusBorderColor: 'primary', onChange: function (e) { return onChange(e.target.value); }, value: value, shadow: 'sm', bg: {
                dark: 'rgba(255,255,255, .2)',
                // light: 'rgba(0,0,0,.03)',
                light: '#fff',
            }[colorMode], minW: '250px', minH: '40px', type: 'email', name: 'email', placeholder: placeholder }),
        react_3.default.createElement(layout_1.Col, { w: ['100%', null, 'auto'] },
            react_3.default.createElement(Button_1.Button, { animate: false, onClick: function (e) {
                    e.preventDefault();
                    onSubmit();
                }, shadow: 'sm', px: '20px', textAlign: 'center' }, cta))));
}
exports.EmailForm = EmailForm;
var MessageBox = function (props) {
    return react_3.default.createElement(react_2.Box, __assign({ minH: '1em' }, props));
};
function MailchimpForm(_a) {
    var url = _a.url, rest = __rest(_a, ["url"]);
    var _b = (0, react_3.useState)(''), email = _b[0], setEmail = _b[1];
    var colorMode = (0, react_1.useColorMode)().colorMode;
    return (react_3.default.createElement(react_mailchimp_subscribe_1.default, { url: url, render: function (_a) {
            var subscribe = _a.subscribe, status = _a.status, message = _a.message;
            return (react_3.default.createElement(react_2.Stack, { spacing: '10px' },
                react_3.default.createElement(EmailForm, __assign({ value: email, onSubmit: function () { return subscribe({ EMAIL: email }); }, onChange: setEmail }, rest)),
                status === 'sending' && (react_3.default.createElement(MessageBox, { color: { light: 'blue.600', dark: 'blue.300' }[colorMode] }, "sending...")),
                status === 'error' && (react_3.default.createElement(MessageBox, { color: { light: 'red.500', dark: 'red.300' }[colorMode], dangerouslySetInnerHTML: { __html: message } })),
                status === 'success' && (react_3.default.createElement(MessageBox, { color: { light: 'green.500', dark: 'green.300' }[colorMode], dangerouslySetInnerHTML: { __html: message } }))));
        } }));
}
exports.MailchimpForm = MailchimpForm;
