
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_languageFilter/Scripts/LanguageFilterTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d0d2AjmM1DNpsy7EB5CM3J', 'LanguageFilterTrait');
// subpackages/l_languageFilter/Scripts/LanguageFilterTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LanguageFilterTrait = /** @class */ (function (_super) {
    __extends(LanguageFilterTrait, _super);
    function LanguageFilterTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._excludedLanguageCodes = ["ja", "ko", "ru", "zh-CN", "zh-TW"];
        _this._excludedSupportedCodes = ["JA", "KO", "RU", "ZH_CN", "ZH_TW", "ZH_HK"];
        return _this;
    }
    LanguageFilterTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LanguageFilterTrait.prototype.onLangSelTrait_getLangs = function (t, e) {
        var r = this, n = (t.beforReturnVal || []).filter(function (t) {
            return !r._excludedLanguageCodes.includes(t.code);
        });
        e({
            isBreak: false,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: n
        });
    };
    LanguageFilterTrait.prototype.onLangSelTrait_getSptLng = function (t, e) {
        var r = this, n = (t.beforReturnVal || []).filter(function (t) {
            return !r._excludedSupportedCodes.includes(t);
        });
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: n
        });
    };
    LanguageFilterTrait.prototype.onLangSelUI_initTV = function (t, e) {
        var r = t.ins.node.getChildByName("content");
        r && (r.height = 1100);
        e();
    };
    LanguageFilterTrait.traitKey = "LanguageFilter";
    LanguageFilterTrait = __decorate([
        mj.trait,
        mj.class("LanguageFilterTrait")
    ], LanguageFilterTrait);
    return LanguageFilterTrait;
}(Trait_1.default));
exports.default = LanguageFilterTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmd1YWdlRmlsdGVyL1NjcmlwdHMvTGFuZ3VhZ2VGaWx0ZXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQWlDQztRQWhDQyw0QkFBc0IsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RCw2QkFBdUIsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7O0lBK0IxRSxDQUFDO0lBN0JDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxxREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUM3QyxPQUFPLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7WUFDQSxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHNEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsZ0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQTdCTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBSGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0FpQ3ZDO0lBQUQsMEJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ2dELGVBQUssR0FpQ3JEO2tCQWpDb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTGFuZ3VhZ2VGaWx0ZXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZ3VhZ2VGaWx0ZXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2V4Y2x1ZGVkTGFuZ3VhZ2VDb2RlcyA9IFtcImphXCIsIFwia29cIiwgXCJydVwiLCBcInpoLUNOXCIsIFwiemgtVFdcIl07XG4gIF9leGNsdWRlZFN1cHBvcnRlZENvZGVzID0gW1wiSkFcIiwgXCJLT1wiLCBcIlJVXCIsIFwiWkhfQ05cIiwgXCJaSF9UV1wiLCBcIlpIX0hLXCJdO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxhbmd1YWdlRmlsdGVyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkxhbmdTZWxUcmFpdF9nZXRMYW5ncyh0LCBlKSB7XG4gICAgdmFyIHIgPSB0aGlzLFxuICAgICAgbiA9ICh0LmJlZm9yUmV0dXJuVmFsIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuICFyLl9leGNsdWRlZExhbmd1YWdlQ29kZXMuaW5jbHVkZXModC5jb2RlKTtcbiAgICAgIH0pO1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogZmFsc2UsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IG5cbiAgICB9KTtcbiAgfVxuICBvbkxhbmdTZWxUcmFpdF9nZXRTcHRMbmcodCwgZSkge1xuICAgIHZhciByID0gdGhpcyxcbiAgICAgIG4gPSAodC5iZWZvclJldHVyblZhbCB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiAhci5fZXhjbHVkZWRTdXBwb3J0ZWRDb2Rlcy5pbmNsdWRlcyh0KTtcbiAgICAgIH0pO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBuXG4gICAgfSk7XG4gIH1cbiAgb25MYW5nU2VsVUlfaW5pdFRWKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuaW5zLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xuICAgIHIgJiYgKHIuaGVpZ2h0ID0gMTEwMCk7XG4gICAgZSgpO1xuICB9XG59Il19