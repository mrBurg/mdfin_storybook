import React, { useMemo, useRef, useState, useCallback } from 'react';
import _ from 'lodash';
import htmlParser from 'html-react-parser';
import { SimpleInput } from 'mdfin-simple-input';
import { ButtonWidget } from 'mdfin-button-widget';
import { CheckboxWidget } from 'mdfin-checkbox-widget';

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var scss = {"font-size":"16px","black":"#040404","white":"#ffffff","gray-dark":"#373742","gray":"#707070","gray-light":"#e1e1e1","gray-misty":"#f6f7fb","orange-dark":"#dfa700","orange":"#fec601","orange-light":"#ffd174","orange-misty":"#fff69e","blue-dark":"#1256aa","blue":"#2a70c8","blue-light":"#65a1ee","blue-misty":"#8bb5eb","indigo":"#25025d","green-dark":"#2d9031","green":"#4caf50","green-light":"#6bce6f","green-misty":"#b3ebaa","red-dark":"#af0008","red":"#ed1b22","red-light":"#ed3046","red-misty":"#eb7678","yellow-dark":"#eabe4f","yellow":"#fccc51","yellow-misty":"#fdfac8","rose-dark":"#50263a","rose":"#a8899d","rose-light":"#f5f0f9","rose-misty":"#eddbec","pink":"#bb5285","violet-dark":"#482c42","violet":"#6a385f","violet-light":"#865e7e","violet-misty":"#bebcdc","graphite-dark":"#1b242f","graphite":"#2c3e50","border":"#a8a8a8","xxs":"320px","small":"360px","xs":"480px","mob":"560px","sm":"640px","md":"768px","tab":"880px","lg":"960px","medium":"1150px","xl":"1200px","xxl":"1440px","questionInnerWrap":"QuestionForm_questionInnerWrap__X2fJI","sentFormTitle":"QuestionForm_sentFormTitle__SKcVM","title":"QuestionForm_title__FAIZl","subtitle":"QuestionForm_subtitle__WddAB","form":"QuestionForm_form__RbGyM","inputsBlock":"QuestionForm_inputsBlock__Op3Kq","submitForm":"QuestionForm_submitForm__c06BF","buttonComponent":"QuestionForm_buttonComponent__pWgia","message":"QuestionForm_message__9WGCD","submitImageWrap":"QuestionForm_submitImageWrap__MJYnt","submitImage":"QuestionForm_submitImage__zcnRj","input":"QuestionForm_input__6mEHB","textField":"QuestionForm_textField__mhpK9","fontSize":"16px","grayDark":"#373742","grayLight":"#e1e1e1","grayMisty":"#f6f7fb","orangeDark":"#dfa700","orangeLight":"#ffd174","orangeMisty":"#fff69e","blueDark":"#1256aa","blueLight":"#65a1ee","blueMisty":"#8bb5eb","greenDark":"#2d9031","greenLight":"#6bce6f","greenMisty":"#b3ebaa","redDark":"#af0008","redLight":"#ed3046","redMisty":"#eb7678","yellowDark":"#eabe4f","yellowMisty":"#fdfac8","roseDark":"#50263a","roseLight":"#f5f0f9","roseMisty":"#eddbec","violetDark":"#482c42","violetLight":"#865e7e","violetMisty":"#bebcdc","graphiteDark":"#1b242f"};

var title = "Got a question?<br/>We are here to help";
var subtitle = "Feel free to send us your request on how RecognID could solve your business goals, and we’ll come back with a prompt reply. Complete the form below:";
var firstName = {
	placeholder: "First name*",
	id: "firstName"
};
var workEmail = {
	placeholder: "Work Email*",
	id: "workEmail"
};
var lastName = {
	placeholder: "Last name*",
	id: "lastName"
};
var companyName = {
	placeholder: "Company name*",
	id: "companyName"
};
var request = {
	placeholder: "Type your request",
	id: "request",
	size: "big"
};
var policyCheckboxText = "By sending this request I agree with the <a href=\"/docs/RecognID_Privacy_Policy_20220505.pdf\" target=\"_blank\">privacy policy</a> and ready to receive relevant information via email";
var validFormMessage = "Your request has been sent";
var validFormDescription = "Our team will contact you shortly";
var validButtonText = "Ok";
var invalidWorkEmailMessage = "Please enter a valid email";
var invalidPolicyCheckboxMessage = "You must agree Privacy Policy to proceed";
var invalidFormMessage = "Something went wrong";
var invalidFormDescription = "Please try again later";
var invalidButtonText = "Try again";
var defaultStaticData = {
	title: title,
	subtitle: subtitle,
	firstName: firstName,
	workEmail: workEmail,
	lastName: lastName,
	companyName: companyName,
	request: request,
	policyCheckboxText: policyCheckboxText,
	validFormMessage: validFormMessage,
	validFormDescription: validFormDescription,
	validButtonText: validButtonText,
	invalidWorkEmailMessage: invalidWorkEmailMessage,
	invalidPolicyCheckboxMessage: invalidPolicyCheckboxMessage,
	invalidFormMessage: invalidFormMessage,
	invalidFormDescription: invalidFormDescription,
	invalidButtonText: invalidButtonText
};

function QuestionForm(props) {
    var _this = this;
    var staticData = useMemo(function () { return Object.assign({}, defaultStaticData, props); }, [props]);
    var initialState = useRef({
        firstName: { value: '', id: 'firstName' },
        workEmail: { value: '', id: 'workEmail' },
        lastName: { value: '', id: 'lastName' },
        companyName: { value: '', id: 'companyName' },
        request: { value: '', id: 'request' },
        checkBox: { value: false, id: 'checkBox' },
    });
    var _a = useState(initialState.current), formState = _a[0], setFormState = _a[1];
    var _b = useState(false), checkbox = _b[0], setCheckbox = _b[1];
    var _c = useState([]), invalidFields = _c[0], setInvalidFields = _c[1];
    var _d = useState(false), showSentForm = _d[0], setShowSentForm = _d[1];
    var setCurrentValue = function (currentValue, id) {
        var _a;
        setFormState(__assign(__assign({}, formState), (_a = {}, _a[id] = { value: currentValue, id: id }, _a)));
    };
    var _e = useState(false), validForm = _e[0], setValidForm = _e[1];
    var _f = useState(false), isDisabled = _f[0], setIsDisabled = _f[1];
    var validateForm = useCallback(function () {
        var invalidFieldsInner = invalidFields;
        _.forEach(formState, function (item) {
            invalidFieldsInner = validateItem(item.value, item.id, invalidFieldsInner);
        });
        setInvalidFields(invalidFieldsInner);
        if (invalidFieldsInner.length == 0) {
            return true;
        }
        return false;
    }, []);
    var validateItem = useCallback(function (currentValue, id, invalidFieldsInner) {
        var containedField = function () {
            if (id != invalidFields.filter(function (item) { return item == id; })[0]) {
                if (invalidFieldsInner) {
                    return (invalidFieldsInner = __spreadArray(__spreadArray([], invalidFieldsInner, true), [id], false));
                }
                return setInvalidFields(__spreadArray(__spreadArray([], invalidFields, true), [id], false));
            }
        };
        if (id == 'request') {
            if (invalidFieldsInner) {
                return invalidFieldsInner;
            }
            return;
        }
        if (id == 'checkBox' && !formState.checkBox.value) {
            containedField();
            if (invalidFieldsInner) {
                return invalidFieldsInner;
            }
            return;
        }
        if (id == 'workEmail' && typeof currentValue === 'string') {
            var emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegEx.test(currentValue)) {
                containedField();
                if (invalidFieldsInner) {
                    return invalidFieldsInner;
                }
                return;
            }
        }
        if (typeof currentValue === 'string' && currentValue.length < 1) {
            containedField();
            if (invalidFieldsInner) {
                return invalidFieldsInner;
            }
            return;
        }
        var removedInvalidFields = invalidFields.filter(function (item) { return item != id; });
        if (invalidFieldsInner) {
            return (invalidFieldsInner = removedInvalidFields);
        }
        setInvalidFields(removedInvalidFields);
    }, [formState.checkBox.value, invalidFields]);
    var submitForm = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ({
                workEmail: formState.workEmail.value,
                firstName: formState.firstName.value,
                lastName: formState.lastName.value,
                companyName: formState.companyName.value,
                request: formState.request.value,
            });
            try {
                setIsDisabled(true);
            }
            catch (err) {
                console.log('~ Error:', err);
                setValidForm(false);
                setShowSentForm(true);
                setIsDisabled(false);
            }
            return [2];
        });
    }); }, []);
    var onSubmitHandler = useCallback(function () {
        if (!!validateForm()) {
            submitForm();
        }
    }, []);
    var closeSentForm = useCallback(function () {
        setShowSentForm(false);
    }, []);
    return (React.createElement("div", { className: scss.questionInnerWrap },
        !showSentForm && (React.createElement(React.Fragment, null,
            React.createElement("h2", { className: scss.title }, htmlParser(staticData.title)),
            React.createElement("span", { className: scss.subtitle }, staticData.subtitle),
            React.createElement("form", { className: scss.form, onSubmit: function (event) {
                    event.preventDefault();
                    onSubmitHandler();
                } },
                React.createElement("div", { className: scss.inputsBlock },
                    React.createElement(SimpleInput, { placeholder: staticData.firstName.placeholder, value: formState.firstName.value, error: invalidFields.includes('firstName'), callBack: function (event) {
                            return setCurrentValue(event.target.value, 'firstName');
                        }, id: 'firstName', className: scss.input, onBlur: function (event) {
                            return validateItem(event.target.value, 'firstName');
                        } }),
                    React.createElement(SimpleInput, { placeholder: staticData.workEmail.placeholder, value: formState.workEmail.value, error: invalidFields.includes('workEmail'), errorMessage: staticData.invalidWorkEmailMessage, callBack: function (event) {
                            return setCurrentValue(event.target.value, 'workEmail');
                        }, id: 'workEmail', className: scss.input, onBlur: function (event) {
                            return validateItem(event.target.value, 'workEmail');
                        } }),
                    React.createElement(SimpleInput, { placeholder: staticData.lastName.placeholder, value: formState.lastName.value, error: invalidFields.includes('lastName'), callBack: function (event) {
                            return setCurrentValue(event.target.value, 'lastName');
                        }, id: 'lastName', className: scss.input, onBlur: function (event) {
                            return validateItem(event.target.value, 'lastName');
                        } }),
                    React.createElement(SimpleInput, { placeholder: staticData.companyName.placeholder, value: formState.companyName.value, error: invalidFields.includes('companyName'), callBack: function (event) {
                            return setCurrentValue(event.target.value, 'companyName');
                        }, id: 'companyName', className: scss.input, onBlur: function (event) {
                            return validateItem(event.target.value, 'companyName');
                        } })),
                React.createElement("div", { className: scss.inputsBlock },
                    React.createElement("div", { className: scss.textField }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis repellat nesciunt at provident corporis eum debitis pariatur. Explicabo aliquam voluptates aliquid sapiente exercitationem optio molestiae ab perspiciatis, deleniti architecto a."),
                    React.createElement("div", { className: scss.submitForm },
                        React.createElement(CheckboxWidget, { checked: checkbox, label: React.createElement("span", { className: "CheckBoxComponent_text__PnI2k" },
                                "By sending this request I agree with the",
                                ' ',
                                React.createElement("a", { href: "/docs/RecognID_Privacy_Policy_20220505.pdf", target: "_blank" }, "privacy policy"),
                                ' ',
                                "and ready to receive relevant information via email"), onChange: function () { return setCheckbox(!checkbox); } }),
                        React.createElement(ButtonWidget, { disabled: isDisabled, className: scss.buttonComponent }, "Submit")))))),
        showSentForm && (React.createElement(React.Fragment, null,
            React.createElement("h2", { className: scss.sentFormTitle }, validForm
                ? staticData.validFormMessage
                : staticData.invalidFormMessage),
            React.createElement("span", { className: scss.message }, validForm
                ? staticData.validFormDescription
                : staticData.invalidFormDescription),
            React.createElement("div", { className: scss.submitImageWrap },
                React.createElement("div", { className: scss.submitImage, style: {
                        backgroundImage: "url('".concat(validForm
                            ? '/images/form/submit.png'
                            : '/images/form/error.png', "')"),
                    } })),
            closeSentForm))));
}

export { QuestionForm };
