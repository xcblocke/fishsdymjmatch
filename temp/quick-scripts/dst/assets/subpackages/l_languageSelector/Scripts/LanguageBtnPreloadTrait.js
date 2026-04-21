
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_languageSelector/Scripts/LanguageBtnPreloadTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2e2ddVukBDMKcqywMG73co', 'LanguageBtnPreloadTrait');
// subpackages/l_languageSelector/Scripts/LanguageBtnPreloadTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UILanguageSwitch_1 = require("./UILanguageSwitch");
var LanguageBtnPreloadTrait = /** @class */ (function (_super) {
    __extends(LanguageBtnPreloadTrait, _super);
    function LanguageBtnPreloadTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LanguageBtnPreloadTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LanguageBtnPreloadTrait.prototype.onUISetDlgCtrl_initDRes = function (t, e) {
        this.addPreloadRes(t);
        e();
    };
    LanguageBtnPreloadTrait.prototype.onUISetHomeCtrl_initDRes = function (t, e) {
        this.addPreloadRes(t);
        e();
    };
    LanguageBtnPreloadTrait.prototype.addPreloadRes = function (t) {
        var e = t.ins;
        e && "function" == typeof e.addPreloadRes && e.addPreloadRes("Prefab", UILanguageSwitch_1.UILanguageSwitch.getUrl());
    };
    LanguageBtnPreloadTrait.traitKey = "LanguageBtnPreload";
    LanguageBtnPreloadTrait = __decorate([
        mj.trait,
        mj.class("LanguageBtnPreloadTrait")
    ], LanguageBtnPreloadTrait);
    return LanguageBtnPreloadTrait;
}(Trait_1.default));
exports.default = LanguageBtnPreloadTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmd1YWdlU2VsZWN0b3IvU2NyaXB0cy9MYW5ndWFnZUJ0blByZWxvYWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHVEQUFzRDtBQUd0RDtJQUFxRCwyQ0FBSztJQUExRDs7SUFpQkEsQ0FBQztJQWZDLHdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx5REFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCwwREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCwrQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxDQUFDLElBQUksVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxtQ0FBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFmTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FpQjNDO0lBQUQsOEJBQUM7Q0FqQkQsQUFpQkMsQ0FqQm9ELGVBQUssR0FpQnpEO2tCQWpCb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFVJTGFuZ3VhZ2VTd2l0Y2ggfSBmcm9tICcuL1VJTGFuZ3VhZ2VTd2l0Y2gnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJMYW5ndWFnZUJ0blByZWxvYWRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZ3VhZ2VCdG5QcmVsb2FkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTGFuZ3VhZ2VCdG5QcmVsb2FkXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblVJU2V0RGxnQ3RybF9pbml0RFJlcyh0LCBlKSB7XG4gICAgdGhpcy5hZGRQcmVsb2FkUmVzKHQpO1xuICAgIGUoKTtcbiAgfVxuICBvblVJU2V0SG9tZUN0cmxfaW5pdERSZXModCwgZSkge1xuICAgIHRoaXMuYWRkUHJlbG9hZFJlcyh0KTtcbiAgICBlKCk7XG4gIH1cbiAgYWRkUHJlbG9hZFJlcyh0KSB7XG4gICAgdmFyIGUgPSB0LmlucztcbiAgICBlICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5hZGRQcmVsb2FkUmVzICYmIGUuYWRkUHJlbG9hZFJlcyhcIlByZWZhYlwiLCBVSUxhbmd1YWdlU3dpdGNoLmdldFVybCgpKTtcbiAgfVxufSJdfQ==