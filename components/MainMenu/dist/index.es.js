import classNames from 'classnames';
import * as React from 'react';
import React__default, { useState, useMemo, useCallback, useEffect } from 'react';
import _ from 'lodash';
import { ButtonWidget, BUTTON_TYPE } from 'mdfin-button-widget';
import { LinkWidget } from 'mdfin-link-widget';

var scss = {"font-size":"16px","black":"#040404","white":"#ffffff","gray-dark":"#373742","gray":"#707070","gray-light":"#e1e1e1","gray-misty":"#f6f7fb","orange-dark":"#dfa700","orange":"#fec601","orange-light":"#ffd174","orange-misty":"#fff69e","blue-dark":"#1256aa","blue":"#2a70c8","blue-light":"#65a1ee","blue-misty":"#8bb5eb","indigo":"#25025d","green-dark":"#2d9031","green":"#4caf50","green-light":"#6bce6f","green-misty":"#b3ebaa","red-dark":"#af0008","red":"#ed1b22","red-light":"#ed3046","red-misty":"#eb7678","yellow-dark":"#eabe4f","yellow":"#fccc51","yellow-misty":"#fdfac8","rose-dark":"#50263a","rose":"#a8899d","rose-light":"#f5f0f9","rose-misty":"#eddbec","pink":"#bb5285","violet-dark":"#482c42","violet":"#6a385f","violet-light":"#865e7e","violet-misty":"#bebcdc","graphite-dark":"#1b242f","graphite":"#2c3e50","border":"#a8a8a8","xxs":"320px","small":"360px","xs":"480px","mob":"560px","sm":"640px","md":"768px","tab":"880px","lg":"960px","medium":"1150px","xl":"1200px","xxl":"1440px","mainMenu":"MainMenu_mainMenu__79-Oe","button":"MainMenu_button__dJ5yW","buttonHolder":"MainMenu_buttonHolder__En8JF","buttonHolderleft":"MainMenu_buttonHolderleft__UHnJe","buttonHolderright":"MainMenu_buttonHolderright__DYW4Q","nav":"MainMenu_nav__4a-6Z","navDevice":"MainMenu_navDevice__vtNY5","navleft":"MainMenu_navleft__iALAs","navright":"MainMenu_navright__Zdtew","link":"MainMenu_link__rP6j5"};

var _path, _path2, _path3;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgHamburger = function SvgHamburger(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 44,
    height: 34,
    xmlSpace: "preserve"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    className: "hamburger_svg__square",
    d: "M3 33.5A2.5 2.5 0 0 1 .5 31V3A2.5 2.5 0 0 1 3 .5h38A2.5 2.5 0 0 1 43.5 3v28a2.5 2.5 0 0 1-2.5 2.5H3z"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    className: "hamburger_svg__border",
    d: "M41 1c1.1 0 2 .9 2 2v28c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h38m0-1H3C1.35 0 0 1.35 0 3v28c0 1.65 1.35 3 3 3h38c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3z"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M11 10h22v2H11zM11 16h22v2H11zM11 22h22v2H11z"
  })));
};

var thisIsDevice = (function () {
    if (typeof window != String(void 0)) {
        return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))|Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(navigator.userAgent);
    }
})();

var ALIGNMENT;
(function (ALIGNMENT) {
    ALIGNMENT["LEFT"] = "left";
    ALIGNMENT["RIGHT"] = "right";
})(ALIGNMENT || (ALIGNMENT = {}));
function MainMenu(props) {
    var _a = props.alignment, alignment = _a === void 0 ? ALIGNMENT.LEFT : _a, items = props.items, className = props.className;
    var isDevice = useState(props.isDevice || thisIsDevice)[0];
    var _b = useState(true), showMenu = _b[0], setShowMenu = _b[1];
    var _c = useState(''), styleClass = _c[0], setStyleClass = _c[1];
    var _d = useState(null), hamburger = _d[0], setHamburger = _d[1];
    var _e = useState(null), menu = _e[0], setMenu = _e[1];
    var isDeviceClass = useMemo(function () {
        var _a;
        return (_a = {}, _a[scss.navDevice] = isDevice, _a);
    }, [isDevice]);
    var alignmentPosition = useCallback(function (data) { return data && scss["buttonHolder".concat(alignment)]; }, [alignment]);
    var onClickHandler = useCallback(function () {
        if (isDevice) {
            setShowMenu(!showMenu);
        }
    }, [isDevice, showMenu]);
    var renderMenu = useCallback(function () {
        if (showMenu) {
            return (React__default.createElement("nav", { className: classNames(scss.nav, alignmentPosition(!isDevice), isDeviceClass) }, _.sortBy(items, function (item) { return item.index; }).map(function (item, key) { return (React__default.createElement(LinkWidget, { key: key, href: item.href, className: scss.link }, item.title)); })));
        }
    }, [showMenu, alignmentPosition, isDevice, isDeviceClass, items]);
    var renderHamburger = useCallback(function () {
        return (React__default.createElement("div", { className: classNames(scss.buttonHolder, alignmentPosition(Boolean(isDevice))) },
            React__default.createElement(ButtonWidget, { type: BUTTON_TYPE.BUTTON_TYPE, className: scss.button, onClick: function () { return onClickHandler(); } },
                React__default.createElement(SvgHamburger, null))));
    }, [isDevice, alignmentPosition]);
    useEffect(function () {
        if (!menu) {
            setMenu(renderMenu());
        }
        if (isDevice && !hamburger) {
            setHamburger(renderHamburger());
        }
    }, [showMenu, menu, renderMenu, isDevice, renderHamburger]);
    useEffect(function () {
        setStyleClass(classNames('main-menu', className, scss.mainMenu));
    }, [className]);
    console.log('Work!!!');
    return (React__default.createElement("div", { className: styleClass },
        menu,
        hamburger));
}

export { ALIGNMENT, MainMenu };
