
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankCDLocalization/Scripts/RankCDLocalizationTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24739Luok5O/atIDLny13l4', 'RankCDLocalizationTrait');
// subpackages/l_rankCDLocalization/Scripts/RankCDLocalizationTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var RankCDLocalizationTrait = /** @class */ (function (_super) {
    __extends(RankCDLocalizationTrait, _super);
    function RankCDLocalizationTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankCDLocalizationTrait.prototype.formatFunc = function (t, o) {
        var n = function n(t) {
            return t.toString().padStart(2, "0");
        }, r = I18NStrings_1.default.get("Common_CountDown_Second", "{0}H {1}M");
        return I18NStrings_1.default.stringFormat(r, n(t), n(o));
    };
    RankCDLocalizationTrait.prototype.onRankIntroVw_show = function (t, o) {
        var n = t.ins.getCDComp();
        if (cc.isValid(n)) {
            this.addI18NComp(n.node);
            n.setFormatFunc(this.formatFunc);
        }
        o();
    };
    RankCDLocalizationTrait.prototype.onRankVw_show = function (t, o) {
        var n = t.ins.getCDComp();
        if (cc.isValid(n)) {
            this.addI18NComp(n.node);
            n.setFormatFunc(this.formatFunc);
        }
        o();
    };
    RankCDLocalizationTrait.prototype.onRankBonusVw_show = function (t, o) {
        var n = t.ins.getCDComp();
        if (cc.isValid(n)) {
            this.addI18NComp(n.node);
            n.setFormatFunc(this.formatFunc);
        }
        o();
    };
    RankCDLocalizationTrait.prototype.addI18NComp = function (t) {
        if (cc.isValid(t) && !t.getComponent(I18NComponent_1.default)) {
            t.addComponent(I18NComponent_1.default);
            I18NStrings_1.default.setText(t, "{0}H {1}M", "Common_CountDown_Second");
        }
    };
    RankCDLocalizationTrait.traitKey = "RankCDLocalization";
    RankCDLocalizationTrait = __decorate([
        mj.trait,
        mj.class("RankCDLocalizationTrait")
    ], RankCDLocalizationTrait);
    return RankCDLocalizationTrait;
}(Trait_1.default));
exports.default = RankCDLocalizationTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtDRExvY2FsaXphdGlvbi9TY3JpcHRzL1JhbmtDRExvY2FsaXphdGlvblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsMkVBQXNFO0FBQ3RFLDBFQUFxRTtBQUdyRTtJQUFxRCwyQ0FBSztJQUExRDs7SUF1Q0EsQ0FBQztJQXJDQyw0Q0FBVSxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUNELENBQUMsR0FBRyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5RCxPQUFPLHFCQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELG9EQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNsQztRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELCtDQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNsQztRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELG9EQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNsQztRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDZDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLEVBQUU7WUFDbkQsQ0FBQyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUM7WUFDOUIscUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQztJQXJDTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0F1QzNDO0lBQUQsOEJBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q29ELGVBQUssR0F1Q3pEO2tCQXZDb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBJMThOQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29tcG9uZW50L0kxOE5Db21wb25lbnQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSYW5rQ0RMb2NhbGl6YXRpb25UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0NETG9jYWxpemF0aW9uVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmFua0NETG9jYWxpemF0aW9uXCI7XG4gIGZvcm1hdEZ1bmModCwgbykge1xuICAgIHZhciBuID0gZnVuY3Rpb24gbih0KSB7XG4gICAgICAgIHJldHVybiB0LnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgfSxcbiAgICAgIHIgPSBJMThOU3RyaW5ncy5nZXQoXCJDb21tb25fQ291bnREb3duX1NlY29uZFwiLCBcInswfUggezF9TVwiKTtcbiAgICByZXR1cm4gSTE4TlN0cmluZ3Muc3RyaW5nRm9ybWF0KHIsIG4odCksIG4obykpO1xuICB9XG4gIG9uUmFua0ludHJvVndfc2hvdyh0LCBvKSB7XG4gICAgdmFyIG4gPSB0Lmlucy5nZXRDRENvbXAoKTtcbiAgICBpZiAoY2MuaXNWYWxpZChuKSkge1xuICAgICAgdGhpcy5hZGRJMThOQ29tcChuLm5vZGUpO1xuICAgICAgbi5zZXRGb3JtYXRGdW5jKHRoaXMuZm9ybWF0RnVuYyk7XG4gICAgfVxuICAgIG8oKTtcbiAgfVxuICBvblJhbmtWd19zaG93KHQsIG8pIHtcbiAgICB2YXIgbiA9IHQuaW5zLmdldENEQ29tcCgpO1xuICAgIGlmIChjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICB0aGlzLmFkZEkxOE5Db21wKG4ubm9kZSk7XG4gICAgICBuLnNldEZvcm1hdEZ1bmModGhpcy5mb3JtYXRGdW5jKTtcbiAgICB9XG4gICAgbygpO1xuICB9XG4gIG9uUmFua0JvbnVzVndfc2hvdyh0LCBvKSB7XG4gICAgdmFyIG4gPSB0Lmlucy5nZXRDRENvbXAoKTtcbiAgICBpZiAoY2MuaXNWYWxpZChuKSkge1xuICAgICAgdGhpcy5hZGRJMThOQ29tcChuLm5vZGUpO1xuICAgICAgbi5zZXRGb3JtYXRGdW5jKHRoaXMuZm9ybWF0RnVuYyk7XG4gICAgfVxuICAgIG8oKTtcbiAgfVxuICBhZGRJMThOQ29tcCh0KSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkgJiYgIXQuZ2V0Q29tcG9uZW50KEkxOE5Db21wb25lbnQpKSB7XG4gICAgICB0LmFkZENvbXBvbmVudChJMThOQ29tcG9uZW50KTtcbiAgICAgIEkxOE5TdHJpbmdzLnNldFRleHQodCwgXCJ7MH1IIHsxfU1cIiwgXCJDb21tb25fQ291bnREb3duX1NlY29uZFwiKTtcbiAgICB9XG4gIH1cbn0iXX0=