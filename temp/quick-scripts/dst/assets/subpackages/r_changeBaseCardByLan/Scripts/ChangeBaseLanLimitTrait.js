
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseLanLimitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '116c6aHaw9Ii7ci63YznPXg', 'ChangeBaseLanLimitTrait');
// subpackages/r_changeBaseCardByLan/Scripts/ChangeBaseLanLimitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var ChangeBaseLanLimitTrait = /** @class */ (function (_super) {
    __extends(ChangeBaseLanLimitTrait, _super);
    function ChangeBaseLanLimitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeBaseLanLimitTrait.prototype.onLangSelTrt_changeLang = function (t, e) {
        if (1 != this._traitData.limit) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
    };
    ChangeBaseLanLimitTrait.prototype.onChCardByLanTt_getLBdle = function (t, e) {
        var a, r = null === (a = t.args) || void 0 === a ? void 0 : a[0];
        if (r) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else {
            e();
        }
    };
    ChangeBaseLanLimitTrait.prototype.onLangSelUI_checkIsSel = function (t, e) {
        var a, r, n = null === (a = t.args) || void 0 === a ? void 0 : a[1];
        if (n = CommonUtils_1.formatLanguageCodeToString(n)) {
            var i = mj.getClassByName("ChangeBaseCardByLanTrait"), o = null === (r = null == i ? void 0 : i.getInstance) || void 0 === r ? void 0 : r.call(i);
            if (o) {
                var s = o.getLanActiveSkin(), c = o.getBundleByLang(n), u = !!s && s === c;
                e({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: u
                });
            }
            else
                e({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return,
                    returnVal: false
                });
        }
        else
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: false
            });
    };
    ChangeBaseLanLimitTrait.traitKey = "ChangeBaseLanLimit";
    ChangeBaseLanLimitTrait = __decorate([
        mj.trait,
        mj.class("LanguageNotOpenTrait")
    ], ChangeBaseLanLimitTrait);
    return ChangeBaseLanLimitTrait;
}(Trait_1.default));
exports.default = ChangeBaseLanLimitTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZUJhc2VDYXJkQnlMYW4vU2NyaXB0cy9DaGFuZ2VCYXNlTGFuTGltaXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDRFQUEwRjtBQUcxRjtJQUFxRCwyQ0FBSztJQUExRDs7SUFvREEsQ0FBQztJQWxEQyx5REFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDOUIsQ0FBQyxFQUFFLENBQUM7U0FDTDthQUFNO1lBQ0wsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELDBEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0Qsd0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEdBQUcsd0NBQTBCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxFQUNuRCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQztvQkFDQSxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDMUMsU0FBUyxFQUFFLENBQUM7aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7O2dCQUFNLENBQUMsQ0FBQztvQkFDUCxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDMUMsU0FBUyxFQUFFLEtBQUs7aUJBQ2pCLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsQ0FBQztnQkFDUCxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWxETSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWix1QkFBdUIsQ0FvRDNDO0lBQUQsOEJBQUM7Q0FwREQsQUFvREMsQ0FwRG9ELGVBQUssR0FvRHpEO2tCQXBEb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IGZvcm1hdExhbmd1YWdlQ29kZVRvU3RyaW5nIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJMYW5ndWFnZU5vdE9wZW5UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlQmFzZUxhbkxpbWl0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlQmFzZUxhbkxpbWl0XCI7XG4gIG9uTGFuZ1NlbFRydF9jaGFuZ2VMYW5nKHQsIGUpIHtcbiAgICBpZiAoMSAhPSB0aGlzLl90cmFpdERhdGEubGltaXQpIHtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uQ2hDYXJkQnlMYW5UdF9nZXRMQmRsZSh0LCBlKSB7XG4gICAgdmFyIGEsXG4gICAgICByID0gbnVsbCA9PT0gKGEgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGFbMF07XG4gICAgaWYgKHIpIHtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogclxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25MYW5nU2VsVUlfY2hlY2tJc1NlbCh0LCBlKSB7XG4gICAgdmFyIGEsXG4gICAgICByLFxuICAgICAgbiA9IG51bGwgPT09IChhID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhWzFdO1xuICAgIGlmIChuID0gZm9ybWF0TGFuZ3VhZ2VDb2RlVG9TdHJpbmcobikpIHtcbiAgICAgIHZhciBpID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJDaGFuZ2VCYXNlQ2FyZEJ5TGFuVHJhaXRcIiksXG4gICAgICAgIG8gPSBudWxsID09PSAociA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkuZ2V0SW5zdGFuY2UpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuY2FsbChpKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHZhciBzID0gby5nZXRMYW5BY3RpdmVTa2luKCksXG4gICAgICAgICAgYyA9IG8uZ2V0QnVuZGxlQnlMYW5nKG4pLFxuICAgICAgICAgIHUgPSAhIXMgJiYgcyA9PT0gYztcbiAgICAgICAgZSh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgcmV0dXJuVmFsOiB1XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn0iXX0=