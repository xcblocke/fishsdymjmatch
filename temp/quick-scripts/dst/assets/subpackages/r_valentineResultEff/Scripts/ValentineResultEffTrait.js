
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineResultEff/Scripts/ValentineResultEffTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47fa4u+/PJP3ILhosfEYQT1', 'ValentineResultEffTrait');
// subpackages/r_valentineResultEff/Scripts/ValentineResultEffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = require("../../../Scripts/component/Adapter");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ValentineResultEffTrait = /** @class */ (function (_super) {
    __extends(ValentineResultEffTrait, _super);
    function ValentineResultEffTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValentineResultEffTrait_1 = ValentineResultEffTrait;
    ValentineResultEffTrait.prototype.onWinVw_onLoad = function (t, e) {
        e();
        if (this.isValentineResultEffActive()) {
            var n = t.ins;
            this.addResultEff(n);
        }
    };
    ValentineResultEffTrait.prototype.onTLWinVw_onLoad = function (t, e) {
        e();
        if (this.isValentineResultEffActive()) {
            var n = t.ins;
            this.addResultEff(n);
        }
    };
    ValentineResultEffTrait.prototype.onDCWinVw_onLoad = function (t, e) {
        e();
        if (this.isValentineResultEffActive()) {
            var n = t.ins;
            this.addResultEff(n);
        }
    };
    ValentineResultEffTrait.prototype.createNode = function () {
        var t = new cc.Node();
        t.name = "ValentineResultEff";
        var e = t.addComponent(cc.Widget);
        e.isAlignTop = true;
        e.isAlignBottom = false;
        e.isAlignLeft = false;
        e.isAlignRight = false;
        e.top = 0;
        return t;
    };
    ValentineResultEffTrait.prototype.addResultEff = function (t) {
        var e = cc.find("content", t.node), i = this.createNode();
        i.parent = e;
        i.setSiblingIndex(0);
        var r = BaseSpine_1.default.create("spine/result_boxBar_qrj", "in", 1, null, true, ValentineResultEffTrait_1.BundleName);
        r.node.parent = i;
        cc.sys.getSafeAreaRect();
        var o = Adapter_1.default.getSafeY();
        r.node.setPosition(0, o);
    };
    ValentineResultEffTrait.prototype.isValentineResultEffActive = function () {
        if (null != this._traitData.valentineResultEff)
            return this._traitData.valentineResultEff;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineResultEffTrait_1;
    ValentineResultEffTrait.traitKey = "ValentineResultEff";
    ValentineResultEffTrait.BundleName = "r_valentineResultEff";
    ValentineResultEffTrait = ValentineResultEffTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineResultEffTrait")
    ], ValentineResultEffTrait);
    return ValentineResultEffTrait;
}(Trait_1.default));
exports.default = ValentineResultEffTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZVJlc3VsdEVmZi9TY3JpcHRzL1ZhbGVudGluZVJlc3VsdEVmZlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsZ0VBQTJEO0FBQzNELHlFQUFvRTtBQUdwRTtJQUFxRCwyQ0FBSztJQUExRDs7SUFtREEsQ0FBQztnQ0FuRG9CLHVCQUF1QjtJQUcxQyxnREFBYyxHQUFkLFVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDakIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUNELGtEQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBQ0Qsa0RBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFDRCw0Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNWLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELDhDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUNoQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUseUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0csQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELDREQUEwQixHQUExQjtRQUNFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCO1lBQUUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO1FBQzFGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZELENBQUM7O0lBakRNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFDaEMsa0NBQVUsR0FBRyxzQkFBc0IsQ0FBQztJQUZ4Qix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBbUQzQztJQUFELDhCQUFDO0NBbkRELEFBbURDLENBbkRvRCxlQUFLLEdBbUR6RDtrQkFuRG9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGFwdGVyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29tcG9uZW50L0FkYXB0ZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlZhbGVudGluZVJlc3VsdEVmZlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxlbnRpbmVSZXN1bHRFZmZUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJWYWxlbnRpbmVSZXN1bHRFZmZcIjtcbiAgc3RhdGljIEJ1bmRsZU5hbWUgPSBcInJfdmFsZW50aW5lUmVzdWx0RWZmXCI7XG4gIG9uV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgaWYgKHRoaXMuaXNWYWxlbnRpbmVSZXN1bHRFZmZBY3RpdmUoKSkge1xuICAgICAgdmFyIG4gPSB0LmlucztcbiAgICAgIHRoaXMuYWRkUmVzdWx0RWZmKG4pO1xuICAgIH1cbiAgfVxuICBvblRMV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgaWYgKHRoaXMuaXNWYWxlbnRpbmVSZXN1bHRFZmZBY3RpdmUoKSkge1xuICAgICAgdmFyIG4gPSB0LmlucztcbiAgICAgIHRoaXMuYWRkUmVzdWx0RWZmKG4pO1xuICAgIH1cbiAgfVxuICBvbkRDV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgaWYgKHRoaXMuaXNWYWxlbnRpbmVSZXN1bHRFZmZBY3RpdmUoKSkge1xuICAgICAgdmFyIG4gPSB0LmlucztcbiAgICAgIHRoaXMuYWRkUmVzdWx0RWZmKG4pO1xuICAgIH1cbiAgfVxuICBjcmVhdGVOb2RlKCkge1xuICAgIHZhciB0ID0gbmV3IGNjLk5vZGUoKTtcbiAgICB0Lm5hbWUgPSBcIlZhbGVudGluZVJlc3VsdEVmZlwiO1xuICAgIHZhciBlID0gdC5hZGRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICBlLmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgIGUuaXNBbGlnbkJvdHRvbSA9IGZhbHNlO1xuICAgIGUuaXNBbGlnbkxlZnQgPSBmYWxzZTtcbiAgICBlLmlzQWxpZ25SaWdodCA9IGZhbHNlO1xuICAgIGUudG9wID0gMDtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBhZGRSZXN1bHRFZmYodCkge1xuICAgIHZhciBlID0gY2MuZmluZChcImNvbnRlbnRcIiwgdC5ub2RlKSxcbiAgICAgIGkgPSB0aGlzLmNyZWF0ZU5vZGUoKTtcbiAgICBpLnBhcmVudCA9IGU7XG4gICAgaS5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgdmFyIHIgPSBCYXNlU3BpbmUuY3JlYXRlKFwic3BpbmUvcmVzdWx0X2JveEJhcl9xcmpcIiwgXCJpblwiLCAxLCBudWxsLCB0cnVlLCBWYWxlbnRpbmVSZXN1bHRFZmZUcmFpdC5CdW5kbGVOYW1lKTtcbiAgICByLm5vZGUucGFyZW50ID0gaTtcbiAgICBjYy5zeXMuZ2V0U2FmZUFyZWFSZWN0KCk7XG4gICAgdmFyIG8gPSBBZGFwdGVyLmdldFNhZmVZKCk7XG4gICAgci5ub2RlLnNldFBvc2l0aW9uKDAsIG8pO1xuICB9XG4gIGlzVmFsZW50aW5lUmVzdWx0RWZmQWN0aXZlKCkge1xuICAgIGlmIChudWxsICE9IHRoaXMuX3RyYWl0RGF0YS52YWxlbnRpbmVSZXN1bHRFZmYpIHJldHVybiB0aGlzLl90cmFpdERhdGEudmFsZW50aW5lUmVzdWx0RWZmO1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJWYWxlbnRpbmVNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCAhPSB0ICYmIHQuZ2V0SW5zdGFuY2UoKS5pc0VmZmVjdEFjdGl2ZSgpO1xuICB9XG59Il19