"use strict";
cc._RF.push(module, 'bcc4bsFwbNC/q4/Rul7zNWV', 'I18NStrings');
// Scripts/framework/data/I18NStrings.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NComponent_1 = require("../../component/I18NComponent");
var ConfigType_1 = require("../../gamePlay/base/data/ConfigType");
var LoginModel_1 = require("../../gamePlay/login/model/LoginModel");
var CommonUtils_1 = require("../utils/CommonUtils");
var DataReader_1 = require("./DataReader");
var I18NStrings = /** @class */ (function () {
    function I18NStrings() {
    }
    I18NStrings.get = function (e, t) {
        if (t === void 0) { t = e; }
        if (!e)
            return t || "";
        var o = LoginModel_1.default.getInstance().language, n = CommonUtils_1.formatLanguageCodeToString(o);
        -1 == ConfigType_1.ConfigType.tableList.indexOf("i18n_config_" + n) && (n = "EN_US");
        var s = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.i18n_config, e, n);
        return s ? s.Value : t || e;
    };
    I18NStrings.getCN = function (e, t) {
        if (t === void 0) { t = e; }
        if (!e)
            return t || "";
        var o = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.i18n_config, e, "ZH_CN");
        return o ? o.Value : t || e;
    };
    I18NStrings.setText = function (e, t, o, i) {
        if (o === void 0) { o = ""; }
        if (i === void 0) { i = []; }
        if (!cc.isValid(e))
            return false;
        var r = e.getComponent(I18NComponent_1.default);
        if (r) {
            r.setTranslateId(o, t, i);
            return true;
        }
        var a = e.getComponent(cc.Label), l = e.getComponent(cc.RichText);
        if (a) {
            a.string = t;
            return true;
        }
        if (l) {
            l.string = t;
            return true;
        }
        return false;
    };
    I18NStrings.stringFormat = function (e) {
        for (var t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        return e.replace(/{(\d+)}/g, function (e, o) {
            var n = parseInt(o);
            return "undefined" != typeof t[n] ? t[n] : e;
        });
    };
    I18NStrings.stringsCfg = [];
    I18NStrings.defaultLanguage = "en-US";
    return I18NStrings;
}());
exports.default = I18NStrings;

cc._RF.pop();