import React, { forwardRef, useRef, useState, useMemo, useCallback, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var scss = {"font-size":"16px","black":"#040404","white":"#ffffff","gray-dark":"#373742","gray":"#707070","gray-light":"#e1e1e1","gray-misty":"#f6f7fb","orange-dark":"#dfa700","orange":"#fec601","orange-light":"#ffd174","orange-misty":"#fff69e","blue-dark":"#1256aa","blue":"#2a70c8","blue-light":"#65a1ee","blue-misty":"#8bb5eb","indigo":"#25025d","green-dark":"#2d9031","green":"#4caf50","green-light":"#6bce6f","green-misty":"#b3ebaa","red-dark":"#af0008","red":"#ed1b22","red-light":"#ed3046","red-misty":"#eb7678","yellow-dark":"#eabe4f","yellow":"#fccc51","yellow-misty":"#fdfac8","rose-dark":"#50263a","rose":"#a8899d","rose-light":"#f5f0f9","rose-misty":"#eddbec","pink":"#bb5285","violet-dark":"#482c42","violet":"#6a385f","violet-light":"#865e7e","violet-misty":"#bebcdc","graphite-dark":"#1b242f","graphite":"#2c3e50","border":"#a8a8a8","xxs":"320px","small":"360px","xs":"480px","mob":"560px","sm":"640px","md":"768px","tab":"880px","lg":"960px","medium":"1150px","xl":"1200px","xxl":"1440px","inputWidget":"InputWidget_inputWidget__fk4hp","input":"InputWidget_input__1jvHY","error":"InputWidget_error__UtZlF","label":"InputWidget_label__ZYS-I","currency":"InputWidget_currency__KlXwA","notEmpty":"InputWidget_notEmpty__ZeVH1","soft":"InputWidget_soft__DXfyr","placeholder":"InputWidget_placeholder__oPRa-","hr":"InputWidget_hr__Z0SCY","fontSize":"16px","grayDark":"#373742","grayLight":"#e1e1e1","grayMisty":"#f6f7fb","orangeDark":"#dfa700","orangeLight":"#ffd174","orangeMisty":"#fff69e","blueDark":"#1256aa","blueLight":"#65a1ee","blueMisty":"#8bb5eb","greenDark":"#2d9031","greenLight":"#6bce6f","greenMisty":"#b3ebaa","redDark":"#af0008","redLight":"#ed3046","redMisty":"#eb7678","yellowDark":"#eabe4f","yellowMisty":"#fdfac8","roseDark":"#50263a","roseLight":"#f5f0f9","roseMisty":"#eddbec","violetDark":"#482c42","violetLight":"#865e7e","violetMisty":"#bebcdc","graphiteDark":"#1b242f"};

var LAYOUT;
(function (LAYOUT) {
    LAYOUT["DEFAULT"] = "default";
    LAYOUT["SOFT"] = "soft";
})(LAYOUT || (LAYOUT = {}));
var INPUT_TYPE;
(function (INPUT_TYPE) {
    INPUT_TYPE["TEXT"] = "text";
    INPUT_TYPE["NUMBER"] = "number";
    INPUT_TYPE["EMAIL"] = "email";
    INPUT_TYPE["TEL"] = "tel";
    INPUT_TYPE["CHECKBOX"] = "checkbox";
    INPUT_TYPE["HIDDEN"] = "hidden";
    INPUT_TYPE["CURRENCY"] = "currency";
})(INPUT_TYPE || (INPUT_TYPE = {}));
function InputWidgetComponent(props, ref) {
    var _a, _b;
    var _c = props.placeholderEmbedded, placeholderEmbedded = _c === void 0 ? false : _c, _d = props.layout, layout = _d === void 0 ? LAYOUT.DEFAULT : _d, inlineStyle = props.style, className = props.className, inputClassName = props.inputClassName, label = props.label, invalid = props.invalid, placeholder = props.placeholder, value = props.value, type = props.type, onChange = props.onChange, onFocus = props.onFocus, restProps = __rest(props, ["placeholderEmbedded", "layout", "style", "className", "inputClassName", "label", "invalid", "placeholder", "value", "type", "onChange", "onFocus"]);
    var innerRef = useRef(null);
    var _e = useState(value), inputValue = _e[0], setInputValue = _e[1];
    var _f = useState(null), styleClass = _f[0], setStyleClass = _f[1];
    var currency = useMemo(function () { return " ${gt.gettext('Currency')}"; }, []);
    var inputProps = useMemo(function () {
        switch (type) {
            case INPUT_TYPE.NUMBER:
                return {
                    type: INPUT_TYPE.NUMBER,
                    value: String(inputValue).replace(/[^\d/./,]/g, ''),
                };
            case INPUT_TYPE.CURRENCY:
                return {
                    type: INPUT_TYPE.TEL,
                    value: inputValue,
                };
            default:
                return { type: type, inputValue: inputValue };
        }
    }, [type, inputValue]);
    var onChangeHandler = useCallback(function (event) {
        var currentValue = event.currentTarget.value;
        switch (inputProps.type) {
            case INPUT_TYPE.NUMBER:
                if (!currentValue) {
                    currentValue = inputProps.inputValue;
                }
                break;
        }
        event.currentTarget.value = currentValue;
        if (onChange) {
            onChange(event);
        }
        setInputValue(event.currentTarget.value);
    }, [inputProps.type, inputProps.inputValue, onChange]);
    var onFocusHandler = useCallback(function (event) {
        var currentValue = event.currentTarget.value;
        switch (type) {
            case INPUT_TYPE.CURRENCY:
                event.currentTarget.value = currentValue.replace(currency, '');
        }
        if (onFocus) {
            onFocus(event);
        }
    }, [currency, onFocus, type]);
    useEffect(function () {
        var target = innerRef.current;
        if (target) {
            if (ref) {
                if (_.isFunction(ref)) {
                    ref(target);
                }
                else {
                    ref.current = target;
                }
            }
        }
    }, [ref, type]);
    useEffect(function () {
        var _a;
        setStyleClass(classNames('input-widget', scss.inputWidget, scss[layout], className, (_a = {},
            _a[scss.placeholder] = placeholder && !placeholderEmbedded,
            _a)));
    }, [className]);
    return (React.createElement("div", { className: styleClass, style: inlineStyle },
        React.createElement("input", __assign({}, restProps, { className: classNames('input-widget__input', scss.input, inputClassName, (_a = {}, _a[scss.error] = invalid, _a)), value: inputProps.inputValue, placeholder: placeholder && placeholderEmbedded ? placeholder : void 0, onChange: function (event) { return onChangeHandler(event); }, onFocus: function (event) { return onFocusHandler(event); }, ref: innerRef, type: inputProps.type })),
        type == INPUT_TYPE.CURRENCY && (React.createElement("div", { className: classNames('currency', scss.currency) }, currency)),
        placeholder && !placeholderEmbedded && (React.createElement("label", { className: classNames('input-widget__label', scss.label, (_b = {},
                _b[scss.error] = invalid,
                _b[scss.notEmpty] = inputProps.inputValue,
                _b)), htmlFor: props.id || void 0 }, label || placeholder)),
        layout == LAYOUT.SOFT && (React.createElement("hr", { className: classNames('input-widget__hr', scss.hr) }))));
}
var InputWidget = forwardRef(InputWidgetComponent);

export { INPUT_TYPE, InputWidget, LAYOUT };
