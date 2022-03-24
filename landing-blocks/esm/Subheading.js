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
import { Heading as H } from '@chakra-ui/react';
import React, { Fragment } from 'react';
export function Subheading(props) {
    if (!props.children) {
        return React.createElement(Fragment, null);
    }
    var as = typeof props.children === 'string' ? 'h2' : 'span';
    return (React.createElement(H, __assign({ as: as, 
        //
        opacity: 0.64, fontWeight: 'medium', lineHeight: '1.4em', fontSize: 'subheading' }, props)));
}
