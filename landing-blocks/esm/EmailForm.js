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
import { Input, useColorMode } from '@chakra-ui/react';
import { Box, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Button } from './Button';
import { Col } from './layout';
export function EmailForm(_a) {
    var _b = _a.cta, cta = _b === void 0 ? 'Notify me' : _b, _c = _a.placeholder, placeholder = _c === void 0 ? 'Enter your email' : _c, _d = _a.animate, animate = _d === void 0 ? undefined : _d, _e = _a.fingerprint, fingerprint = _e === void 0 ? '' : _e, _f = _a.value, value = _f === void 0 ? '' : _f, _g = _a.onChange, onChange = _g === void 0 ? console.log : _g, _h = _a.onSubmit, onSubmit = _h === void 0 ? console.log : _h, rest = __rest(_a, ["cta", "placeholder", "animate", "fingerprint", "value", "onChange", "onSubmit"]);
    var colorMode = useColorMode().colorMode;
    return (React.createElement(Stack, __assign({ as: 'form', justify: 'flex-start', width: 'auto', direction: ['column', null, 'row'], 
        // align='center'
        spacing: '20px', fontSize: 'text' }, rest),
        React.createElement(Input, { focusBorderColor: 'primary', onChange: function (e) { return onChange(e.target.value); }, value: value, shadow: 'sm', bg: {
                dark: 'rgba(255,255,255, .2)',
                // light: 'rgba(0,0,0,.03)',
                light: '#fff',
            }[colorMode], minW: '250px', minH: '40px', type: 'email', name: 'email', placeholder: placeholder }),
        React.createElement(Col, { w: ['100%', null, 'auto'] },
            React.createElement(Button, { animate: false, onClick: function (e) {
                    e.preventDefault();
                    onSubmit();
                }, shadow: 'sm', px: '20px', textAlign: 'center' }, cta))));
}
var MessageBox = function (props) {
    return React.createElement(Box, __assign({ minH: '1em' }, props));
};
export function MailchimpForm(_a) {
    var url = _a.url, rest = __rest(_a, ["url"]);
    var _b = useState(''), email = _b[0], setEmail = _b[1];
    var colorMode = useColorMode().colorMode;
    return (React.createElement(MailchimpSubscribe, { url: url, render: function (_a) {
            var subscribe = _a.subscribe, status = _a.status, message = _a.message;
            return (React.createElement(Stack, { spacing: '10px' },
                React.createElement(EmailForm, __assign({ value: email, onSubmit: function () { return subscribe({ EMAIL: email }); }, onChange: setEmail }, rest)),
                status === 'sending' && (React.createElement(MessageBox, { color: { light: 'blue.600', dark: 'blue.300' }[colorMode] }, "sending...")),
                status === 'error' && (React.createElement(MessageBox, { color: { light: 'red.500', dark: 'red.300' }[colorMode], dangerouslySetInnerHTML: { __html: message } })),
                status === 'success' && (React.createElement(MessageBox, { color: { light: 'green.500', dark: 'green.300' }[colorMode], dangerouslySetInnerHTML: { __html: message } }))));
        } }));
}
