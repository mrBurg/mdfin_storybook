import React, { useState, useCallback, useEffect } from 'react';
import { ButtonWidget, BUTTON_TYPE } from 'mdfin-button-widget';
import _ from 'lodash';
import classNames from 'classnames';

var scss = {"font-size":"16px","black":"#040404","white":"#ffffff","gray-dark":"#373742","gray":"#707070","gray-light":"#e1e1e1","gray-misty":"#f6f7fb","orange-dark":"#dfa700","orange":"#fec601","orange-light":"#ffd174","orange-misty":"#fff69e","blue-dark":"#1256aa","blue":"#2a70c8","blue-light":"#65a1ee","blue-misty":"#8bb5eb","indigo":"#25025d","green-dark":"#2d9031","green":"#4caf50","green-light":"#6bce6f","green-misty":"#b3ebaa","red-dark":"#af0008","red":"#ed1b22","red-light":"#ed3046","red-misty":"#eb7678","yellow-dark":"#eabe4f","yellow":"#fccc51","yellow-misty":"#fdfac8","rose-dark":"#50263a","rose":"#a8899d","rose-light":"#f5f0f9","rose-misty":"#eddbec","pink":"#bb5285","violet-dark":"#482c42","violet":"#6a385f","violet-light":"#865e7e","violet-misty":"#bebcdc","graphite-dark":"#1b242f","graphite":"#2c3e50","border":"#a8a8a8","xxs":"320px","small":"360px","xs":"480px","mob":"560px","sm":"640px","md":"768px","tab":"880px","lg":"960px","medium":"1150px","xl":"1200px","xxl":"1440px","cookies":"Cookies_cookies__pg3tL","link":"Cookies_link__VdhHB","button":"Cookies_button__CsVzA","fontSize":"16px","grayDark":"#373742","grayLight":"#e1e1e1","grayMisty":"#f6f7fb","orangeDark":"#dfa700","orangeLight":"#ffd174","orangeMisty":"#fff69e","blueDark":"#1256aa","blueLight":"#65a1ee","blueMisty":"#8bb5eb","greenDark":"#2d9031","greenLight":"#6bce6f","greenMisty":"#b3ebaa","redDark":"#af0008","redLight":"#ed3046","redMisty":"#eb7678","yellowDark":"#eabe4f","yellowMisty":"#fdfac8","roseDark":"#50263a","roseLight":"#f5f0f9","roseMisty":"#eddbec","violetDark":"#482c42","violetLight":"#865e7e","violetMisty":"#bebcdc","graphiteDark":"#1b242f"};

var isBrowser = typeof window != void 0;
function setCookie(name, value, cookieData) {
    var date = new Date();
    var data = "".concat(name, "=").concat(value);
    var cookiePath = 'path=/';
    var dateExpires = '';
    var cookie = {
        path: '',
        expires: 0,
    };
    if (cookieData) {
        switch (true) {
            case _.isString(cookieData):
                cookiePath = "path=".concat(cookieData);
                break;
            case _.isNumber(cookieData):
                date.setTime(date.getTime() + +cookieData * 24 * 60 * 60 * 1000);
                dateExpires = "expires=".concat(date.toUTCString());
                break;
            case _.isPlainObject(cookieData):
                cookie = cookieData;
                if (cookie.path) {
                    cookiePath = cookie.path;
                }
                if (cookie.expires) {
                    date.setTime(date.getTime() + cookie.expires * 24 * 60 * 60 * 1000);
                    dateExpires = "expires=".concat(date.toUTCString());
                }
                break;
        }
    }
    document.cookie = "".concat(data, ";").concat(cookiePath, ";").concat(dateExpires, ";SameSite=None;Secure");
}
function getCookie(name) {
    var cookies = {};
    if (isBrowser) {
        var cookiesData = decodeURIComponent(document.cookie).split('; ');
        _.each(cookiesData, function (part) {
            var _a = part.split('='), name = _a[0], data = _a[1];
            cookies[name] = data;
        });
        if (Object.hasOwnProperty.call(cookies, name)) {
            return cookies[name];
        }
    }
    return '';
}
function delCookie(name) {
    document.cookie = "".concat(name, "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;");
}

var COOKIE;
(function (COOKIE) {
    COOKIE["COOKIES_ACCESS"] = "Cookies_Access";
})(COOKIE || (COOKIE = {}));
function Cookies(props) {
    var _a = props.visibility, visibility = _a === void 0 ? true : _a, text = props.text, buttonText = props.buttonText, className = props.className, buttonAction = props.buttonAction, style = props.style;
    var _b = useState(visibility), display = _b[0], setDisplay = _b[1];
    var _c = useState(null), styleClass = _c[0], setStyleClass = _c[1];
    var closePopup = useCallback(function () {
        setCookie(COOKIE.COOKIES_ACCESS, 1, 365);
        setDisplay(false);
        buttonAction();
    }, []);
    useEffect(function () {
        setStyleClass(classNames(className, scss.cookies));
    }, [className]);
    if (display) {
        return (React.createElement("div", { style: style, className: styleClass },
            React.createElement("p", null, text),
            React.createElement(ButtonWidget, { className: scss.button, onClick: closePopup, type: BUTTON_TYPE.BUTTON }, buttonText)));
    }
    return null;
}

export { COOKIE, Cookies, delCookie, getCookie, isBrowser, setCookie };
