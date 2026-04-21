
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/data/I18NStrings.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsa0VBQWlFO0FBQ2pFLG9FQUErRDtBQUMvRCxvREFBa0U7QUFDbEUsMkNBQTBDO0FBQzFDO0lBQUE7SUEwQ0EsQ0FBQztJQXZDUSxlQUFHLEdBQVYsVUFBVyxDQUFDLEVBQUUsQ0FBSztRQUFMLGtCQUFBLEVBQUEsS0FBSztRQUNqQixJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFDdkMsQ0FBQyxHQUFHLHdDQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxJQUFJLHVCQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTSxpQkFBSyxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUs7UUFBTCxrQkFBQSxFQUFBLEtBQUs7UUFDbkIsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTSxtQkFBTyxHQUFkLFVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFNLEVBQUUsQ0FBTTtRQUFkLGtCQUFBLEVBQUEsTUFBTTtRQUFFLGtCQUFBLEVBQUEsTUFBTTtRQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQzlCLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ00sd0JBQVksR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsT0FBTyxXQUFXLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXhDTSxzQkFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQiwyQkFBZSxHQUFHLE9BQU8sQ0FBQztJQXdDbkMsa0JBQUM7Q0ExQ0QsQUEwQ0MsSUFBQTtrQkExQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSTE4TkNvbXBvbmVudCBmcm9tICcuLi8uLi9jb21wb25lbnQvSTE4TkNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWdUeXBlIH0gZnJvbSAnLi4vLi4vZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IExvZ2luTW9kZWwgZnJvbSAnLi4vLi4vZ2FtZVBsYXkvbG9naW4vbW9kZWwvTG9naW5Nb2RlbCc7XG5pbXBvcnQgeyBmb3JtYXRMYW5ndWFnZUNvZGVUb1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL0NvbW1vblV0aWxzJztcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuL0RhdGFSZWFkZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSTE4TlN0cmluZ3Mge1xuICBzdGF0aWMgc3RyaW5nc0NmZyA9IFtdO1xuICBzdGF0aWMgZGVmYXVsdExhbmd1YWdlID0gXCJlbi1VU1wiO1xuICBzdGF0aWMgZ2V0KGUsIHQgPSBlKSB7XG4gICAgaWYgKCFlKSByZXR1cm4gdCB8fCBcIlwiO1xuICAgIHZhciBvID0gTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmxhbmd1YWdlLFxuICAgICAgbiA9IGZvcm1hdExhbmd1YWdlQ29kZVRvU3RyaW5nKG8pO1xuICAgIC0xID09IENvbmZpZ1R5cGUudGFibGVMaXN0LmluZGV4T2YoXCJpMThuX2NvbmZpZ19cIiArIG4pICYmIChuID0gXCJFTl9VU1wiKTtcbiAgICB2YXIgcyA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5pMThuX2NvbmZpZywgZSwgbik7XG4gICAgcmV0dXJuIHMgPyBzLlZhbHVlIDogdCB8fCBlO1xuICB9XG4gIHN0YXRpYyBnZXRDTihlLCB0ID0gZSkge1xuICAgIGlmICghZSkgcmV0dXJuIHQgfHwgXCJcIjtcbiAgICB2YXIgbyA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5pMThuX2NvbmZpZywgZSwgXCJaSF9DTlwiKTtcbiAgICByZXR1cm4gbyA/IG8uVmFsdWUgOiB0IHx8IGU7XG4gIH1cbiAgc3RhdGljIHNldFRleHQoZSwgdCwgbyA9IFwiXCIsIGkgPSBbXSkge1xuICAgIGlmICghY2MuaXNWYWxpZChlKSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByID0gZS5nZXRDb21wb25lbnQoSTE4TkNvbXBvbmVudCk7XG4gICAgaWYgKHIpIHtcbiAgICAgIHIuc2V0VHJhbnNsYXRlSWQobywgdCwgaSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIGEgPSBlLmdldENvbXBvbmVudChjYy5MYWJlbCksXG4gICAgICBsID0gZS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgIGlmIChhKSB7XG4gICAgICBhLnN0cmluZyA9IHQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGwpIHtcbiAgICAgIGwuc3RyaW5nID0gdDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhdGljIHN0cmluZ0Zvcm1hdChlKSB7XG4gICAgZm9yICh2YXIgdCA9IFtdLCBvID0gMTsgbyA8IGFyZ3VtZW50cy5sZW5ndGg7IG8rKykgdFtvIC0gMV0gPSBhcmd1bWVudHNbb107XG4gICAgcmV0dXJuIGUucmVwbGFjZSgveyhcXGQrKX0vZywgZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgIHZhciBuID0gcGFyc2VJbnQobyk7XG4gICAgICByZXR1cm4gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgdFtuXSA/IHRbbl0gOiBlO1xuICAgIH0pO1xuICB9XG59Il19