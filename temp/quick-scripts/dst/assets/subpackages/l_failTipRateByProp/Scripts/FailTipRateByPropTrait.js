
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_failTipRateByProp/Scripts/FailTipRateByPropTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0d05zVnfVLTbq9GUqF4Q+C', 'FailTipRateByPropTrait');
// subpackages/l_failTipRateByProp/Scripts/FailTipRateByPropTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var FailTipRateByPropTrait = /** @class */ (function (_super) {
    __extends(FailTipRateByPropTrait, _super);
    function FailTipRateByPropTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.I18N_KEY = "Booster_Shuffle_text1";
        _this.DEFAULT_TEXT = "{0}% of people used shuffle \nto pass this level";
        _this.RANDOM_MIN = 10;
        _this.RANDOM_MAX = 20;
        _this.PROP_MAX_BONUS = 80;
        _this.PROP_MULTIPLIER = 10;
        return _this;
    }
    FailTipRateByPropTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FailTipRateByPropTrait.prototype.onFailVw_show = function (t, e) {
        var o, r, n = t.ins, i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
        if (n && i) {
            try {
                var a = null !== (r = i.shuffleNum) && void 0 !== r ? r : 0, p = this.calculateRatio(a);
                this.updateDescText(n, p);
            }
            catch (t) { }
            e();
        }
        else
            e();
    };
    FailTipRateByPropTrait.prototype.calculateRatio = function (t) {
        return this.getRandomInt(this.RANDOM_MIN, this.RANDOM_MAX) + Math.min(this.PROP_MAX_BONUS, t * this.PROP_MULTIPLIER);
    };
    FailTipRateByPropTrait.prototype.getRandomInt = function (t, e) {
        return Math.floor(Math.random() * (e - t) * 10) / 10 + t;
    };
    FailTipRateByPropTrait.prototype.updateDescText = function (t, e) {
        var o, r = null === (o = t.node) || void 0 === o ? void 0 : o.getChildByName("content_node");
        if (r) {
            var n = r.getChildByName("desc");
            if (n) {
                var i = n.getComponent(cc.Label);
                if (i) {
                    i.fontSize;
                    i.fontSize = 40;
                    i.lineHeight = 60;
                    var a = n.getComponent(I18NComponent_1.default);
                    a || (a = n.addComponent(I18NComponent_1.default));
                    a.setTranslateId(this.I18N_KEY, this.DEFAULT_TEXT, [e + "%"]);
                }
            }
        }
    };
    FailTipRateByPropTrait.traitKey = "FailTipRateByProp";
    FailTipRateByPropTrait = __decorate([
        mj.trait,
        mj.class("FailTipRateByPropTrait")
    ], FailTipRateByPropTrait);
    return FailTipRateByPropTrait;
}(Trait_1.default));
exports.default = FailTipRateByPropTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhaWxUaXBSYXRlQnlQcm9wL1NjcmlwdHMvRmFpbFRpcFJhdGVCeVByb3BUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDBFQUFxRTtBQUdyRTtJQUFvRCwwQ0FBSztJQUF6RDtRQUFBLHFFQWlEQztRQWhEQyxjQUFRLEdBQUcsdUJBQXVCLENBQUM7UUFDbkMsa0JBQVksR0FBRyxrREFBa0QsQ0FBQztRQUNsRSxnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixvQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixxQkFBZSxHQUFHLEVBQUUsQ0FBQzs7SUEyQ3ZCLENBQUM7SUF6Q0MsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDhDQUFhLEdBQWIsVUFBYyxDQUFDLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN6RCxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDM0I7WUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1lBQ2QsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwrQ0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2SCxDQUFDO0lBQ0QsNkNBQVksR0FBWixVQUFhLENBQUMsRUFBRSxDQUFDO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCwrQ0FBYyxHQUFkLFVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxFQUFFO29CQUNMLENBQUMsQ0FBQyxRQUFRLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQztvQkFDdEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQy9EO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUF6Q00sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQVBuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBaUQxQztJQUFELDZCQUFDO0NBakRELEFBaURDLENBakRtRCxlQUFLLEdBaUR4RDtrQkFqRG9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgSTE4TkNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbXBvbmVudC9JMThOQ29tcG9uZW50JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmFpbFRpcFJhdGVCeVByb3BUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFpbFRpcFJhdGVCeVByb3BUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgSTE4Tl9LRVkgPSBcIkJvb3N0ZXJfU2h1ZmZsZV90ZXh0MVwiO1xuICBERUZBVUxUX1RFWFQgPSBcInswfSUgb2YgcGVvcGxlIHVzZWQgc2h1ZmZsZSBcXG50byBwYXNzIHRoaXMgbGV2ZWxcIjtcbiAgUkFORE9NX01JTiA9IDEwO1xuICBSQU5ET01fTUFYID0gMjA7XG4gIFBST1BfTUFYX0JPTlVTID0gODA7XG4gIFBST1BfTVVMVElQTElFUiA9IDEwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkZhaWxUaXBSYXRlQnlQcm9wXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkZhaWxWd19zaG93KHQsIGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIHIsXG4gICAgICBuID0gdC5pbnMsXG4gICAgICBpID0gbnVsbCA9PT0gKG8gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bMF07XG4gICAgaWYgKG4gJiYgaSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGEgPSBudWxsICE9PSAociA9IGkuc2h1ZmZsZU51bSkgJiYgdm9pZCAwICE9PSByID8gciA6IDAsXG4gICAgICAgICAgcCA9IHRoaXMuY2FsY3VsYXRlUmF0aW8oYSk7XG4gICAgICAgIHRoaXMudXBkYXRlRGVzY1RleHQobiwgcCk7XG4gICAgICB9IGNhdGNoICh0KSB7fVxuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgY2FsY3VsYXRlUmF0aW8odCkge1xuICAgIHJldHVybiB0aGlzLmdldFJhbmRvbUludCh0aGlzLlJBTkRPTV9NSU4sIHRoaXMuUkFORE9NX01BWCkgKyBNYXRoLm1pbih0aGlzLlBST1BfTUFYX0JPTlVTLCB0ICogdGhpcy5QUk9QX01VTFRJUExJRVIpO1xuICB9XG4gIGdldFJhbmRvbUludCh0LCBlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlIC0gdCkgKiAxMCkgLyAxMCArIHQ7XG4gIH1cbiAgdXBkYXRlRGVzY1RleHQodCwgZSkge1xuICAgIHZhciBvLFxuICAgICAgciA9IG51bGwgPT09IChvID0gdC5ub2RlKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdldENoaWxkQnlOYW1lKFwiY29udGVudF9ub2RlXCIpO1xuICAgIGlmIChyKSB7XG4gICAgICB2YXIgbiA9IHIuZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjXCIpO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgdmFyIGkgPSBuLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgaS5mb250U2l6ZTtcbiAgICAgICAgICBpLmZvbnRTaXplID0gNDA7XG4gICAgICAgICAgaS5saW5lSGVpZ2h0ID0gNjA7XG4gICAgICAgICAgdmFyIGEgPSBuLmdldENvbXBvbmVudChJMThOQ29tcG9uZW50KTtcbiAgICAgICAgICBhIHx8IChhID0gbi5hZGRDb21wb25lbnQoSTE4TkNvbXBvbmVudCkpO1xuICAgICAgICAgIGEuc2V0VHJhbnNsYXRlSWQodGhpcy5JMThOX0tFWSwgdGhpcy5ERUZBVUxUX1RFWFQsIFtlICsgXCIlXCJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==