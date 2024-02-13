import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

var scss = {"header":"Header_header__-lDMd"};

function Header(props) {
    var Logo = props.Logo, MainMenu = props.MainMenu, className = props.className;
    var _a = useState(null), styleClass = _a[0], setStyleClass = _a[1];
    useEffect(function () {
        setStyleClass(classNames('header', className, scss.header));
    }, [className]);
    return (React.createElement("div", { className: styleClass },
        Logo,
        MainMenu));
}

export { Header };
