
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelBox/Scripts/LevelBoxTenFourTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93c299DYz1PGJ8UJ4Kzfmvy', 'LevelBoxTenFourTrait');
// subpackages/l_levelBox/Scripts/LevelBoxTenFourTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var LevelBoxTypes_1 = require("./LevelBoxTypes");
var LevelBoxTenFourTrait = /** @class */ (function (_super) {
    __extends(LevelBoxTenFourTrait, _super);
    function LevelBoxTenFourTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelBoxTenFourTrait.prototype.onLvBoxPrgs_initCpts = function (t, e) {
        this.initBoxAnim(t.ins);
        e();
    };
    LevelBoxTenFourTrait.prototype.initBoxAnim = function (t) {
        if (t && cc.isValid(t.boxBtn) && cc.isValid(t.conditionTip)) {
            t.boxAnimProxy = BaseSpine_1.default.create("spine/boxReward/result_boxBar", "in", 1, null, false);
            var e = t.boxAnimProxy.node;
            t.boxBtn.addChild(e);
            e.setSiblingIndex(0);
            e.active = false;
            t.boxAnim = e;
            var i = cc.instantiate(t.conditionTip);
            i.setAnchorPoint(cc.v2(0.5, 0.5));
            i.color = cc.color(234, 205, 115);
            var o = i.getComponent(cc.Label);
            o.fontSize = 28;
            o.lineHeight = 40;
            o.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
            o.verticalAlign = cc.Label.VerticalAlign.CENTER;
            t.levelTip = i;
            t.levelTip.setPosition(cc.v3(0, 0, 0));
            t.levelTip.active = false;
        }
    };
    LevelBoxTenFourTrait.prototype.onLvBoxPrgs_upBoxReward = function (t, e) {
        this.updateBoxReward(t.ins, t.args[0]);
        e();
    };
    LevelBoxTenFourTrait.prototype.updateBoxReward = function (t, e) {
        if (cc.isValid(t.boxAnim) && cc.isValid(t.boxAnimProxy) && cc.isValid(t.levelTip) && cc.isValid(t.chestIcon) && cc.isValid(t.boxTipAnim)) {
            var i = e.progress.condType;
            t.boxAnim.active = true;
            t.boxAnimProxy.attachNode("hook_num", function () {
                return t.levelTip;
            });
            t.boxAnim.active = false;
            if (i === LevelBoxTypes_1.ELevelBoxCondType.Level) {
                t.chestIcon.active = false;
                t.boxAnim.active = true;
                t.boxTipAnim.setPosition(cc.v3(0, 80, 0));
            }
            else {
                t.chestIcon.active = true;
                t.boxAnim.active = false;
                t.boxTipAnim.setPosition(cc.v3(0, 53.21, 0));
            }
        }
    };
    LevelBoxTenFourTrait.prototype.onLvBoxPrgs_upProgLabel = function (t, e) {
        this.updateProgressLabel(t.ins, t.args[0]);
        e();
    };
    LevelBoxTenFourTrait.prototype.updateProgressLabel = function (t, e) {
        if (t && cc.isValid(t.conditionTip) && cc.isValid(t.levelTip)) {
            var i = e.progress.condValue, o = e.progress.condType === LevelBoxTypes_1.ELevelBoxCondType.Level;
            t.conditionTip.active = !o;
            t.levelTip.active = o;
            o && I18NStrings_1.default.setText(t.levelTip, "Lv." + i[0], "MahjongTiles_MainPage_TargetLevel", [i[0]]);
        }
    };
    LevelBoxTenFourTrait.prototype.onLvBoxPrgs_playCurBarHigh = function (t, e) {
        var i = t.ins;
        if (i.levelBox.progress.condType === LevelBoxTypes_1.ELevelBoxCondType.Level) {
            var o = i.boxAnimProxy;
            cc.isValid(o) && o.setAnimation("in", 1, function () { });
        }
        e();
    };
    LevelBoxTenFourTrait.prototype.onLvBoxPrgs_getCompDelay = function (t, e) {
        if (t.ins.levelBox.progress.condType === LevelBoxTypes_1.ELevelBoxCondType.Level) {
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: 0.75
            });
        }
        else {
            e();
        }
    };
    LevelBoxTenFourTrait.traitKey = "LevelBoxTenFour";
    LevelBoxTenFourTrait = __decorate([
        mj.trait,
        mj.class("LevelBoxTenFourTrait")
    ], LevelBoxTenFourTrait);
    return LevelBoxTenFourTrait;
}(Trait_1.default));
exports.default = LevelBoxTenFourTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsQm94L1NjcmlwdHMvTGV2ZWxCb3hUZW5Gb3VyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFzRTtBQUN0RSxnRUFBMkQ7QUFDM0QseUVBQW9FO0FBQ3BFLGlEQUFvRDtBQUdwRDtJQUFrRCx3Q0FBSztJQUF2RDs7SUFrRkEsQ0FBQztJQWhGQyxtREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsMENBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMzRCxDQUFDLENBQUMsWUFBWSxHQUFHLG1CQUFTLENBQUMsTUFBTSxDQUFDLCtCQUErQixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENB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QUM7SUFDTixDQUFDO0lBQ0QsdURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxpQ0FBaUIsQ0FBQyxLQUFLLEVBQUU7WUFDaEUsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFoRk0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQURqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBa0Z4QztJQUFELDJCQUFDO0NBbEZELEFBa0ZDLENBbEZpRCxlQUFLLEdBa0Z0RDtrQkFsRm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRUxldmVsQm94Q29uZFR5cGUgfSBmcm9tICcuL0xldmVsQm94VHlwZXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJMZXZlbEJveFRlbkZvdXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxCb3hUZW5Gb3VyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTGV2ZWxCb3hUZW5Gb3VyXCI7XG4gIG9uTHZCb3hQcmdzX2luaXRDcHRzKHQsIGUpIHtcbiAgICB0aGlzLmluaXRCb3hBbmltKHQuaW5zKTtcbiAgICBlKCk7XG4gIH1cbiAgaW5pdEJveEFuaW0odCkge1xuICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodC5ib3hCdG4pICYmIGNjLmlzVmFsaWQodC5jb25kaXRpb25UaXApKSB7XG4gICAgICB0LmJveEFuaW1Qcm94eSA9IEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS9ib3hSZXdhcmQvcmVzdWx0X2JveEJhclwiLCBcImluXCIsIDEsIG51bGwsIGZhbHNlKTtcbiAgICAgIHZhciBlID0gdC5ib3hBbmltUHJveHkubm9kZTtcbiAgICAgIHQuYm94QnRuLmFkZENoaWxkKGUpO1xuICAgICAgZS5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgICBlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdC5ib3hBbmltID0gZTtcbiAgICAgIHZhciBpID0gY2MuaW5zdGFudGlhdGUodC5jb25kaXRpb25UaXApO1xuICAgICAgaS5zZXRBbmNob3JQb2ludChjYy52MigwLjUsIDAuNSkpO1xuICAgICAgaS5jb2xvciA9IGNjLmNvbG9yKDIzNCwgMjA1LCAxMTUpO1xuICAgICAgdmFyIG8gPSBpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICBvLmZvbnRTaXplID0gMjg7XG4gICAgICBvLmxpbmVIZWlnaHQgPSA0MDtcbiAgICAgIG8uaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcbiAgICAgIG8udmVydGljYWxBbGlnbiA9IGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSO1xuICAgICAgdC5sZXZlbFRpcCA9IGk7XG4gICAgICB0LmxldmVsVGlwLnNldFBvc2l0aW9uKGNjLnYzKDAsIDAsIDApKTtcbiAgICAgIHQubGV2ZWxUaXAuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIG9uTHZCb3hQcmdzX3VwQm94UmV3YXJkKHQsIGUpIHtcbiAgICB0aGlzLnVwZGF0ZUJveFJld2FyZCh0LmlucywgdC5hcmdzWzBdKTtcbiAgICBlKCk7XG4gIH1cbiAgdXBkYXRlQm94UmV3YXJkKHQsIGUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0LmJveEFuaW0pICYmIGNjLmlzVmFsaWQodC5ib3hBbmltUHJveHkpICYmIGNjLmlzVmFsaWQodC5sZXZlbFRpcCkgJiYgY2MuaXNWYWxpZCh0LmNoZXN0SWNvbikgJiYgY2MuaXNWYWxpZCh0LmJveFRpcEFuaW0pKSB7XG4gICAgICB2YXIgaSA9IGUucHJvZ3Jlc3MuY29uZFR5cGU7XG4gICAgICB0LmJveEFuaW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHQuYm94QW5pbVByb3h5LmF0dGFjaE5vZGUoXCJob29rX251bVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0LmxldmVsVGlwO1xuICAgICAgfSk7XG4gICAgICB0LmJveEFuaW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICBpZiAoaSA9PT0gRUxldmVsQm94Q29uZFR5cGUuTGV2ZWwpIHtcbiAgICAgICAgdC5jaGVzdEljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHQuYm94QW5pbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0LmJveFRpcEFuaW0uc2V0UG9zaXRpb24oY2MudjMoMCwgODAsIDApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQuY2hlc3RJY29uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHQuYm94QW5pbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdC5ib3hUaXBBbmltLnNldFBvc2l0aW9uKGNjLnYzKDAsIDUzLjIxLCAwKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTHZCb3hQcmdzX3VwUHJvZ0xhYmVsKHQsIGUpIHtcbiAgICB0aGlzLnVwZGF0ZVByb2dyZXNzTGFiZWwodC5pbnMsIHQuYXJnc1swXSk7XG4gICAgZSgpO1xuICB9XG4gIHVwZGF0ZVByb2dyZXNzTGFiZWwodCwgZSkge1xuICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodC5jb25kaXRpb25UaXApICYmIGNjLmlzVmFsaWQodC5sZXZlbFRpcCkpIHtcbiAgICAgIHZhciBpID0gZS5wcm9ncmVzcy5jb25kVmFsdWUsXG4gICAgICAgIG8gPSBlLnByb2dyZXNzLmNvbmRUeXBlID09PSBFTGV2ZWxCb3hDb25kVHlwZS5MZXZlbDtcbiAgICAgIHQuY29uZGl0aW9uVGlwLmFjdGl2ZSA9ICFvO1xuICAgICAgdC5sZXZlbFRpcC5hY3RpdmUgPSBvO1xuICAgICAgbyAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KHQubGV2ZWxUaXAsIFwiTHYuXCIgKyBpWzBdLCBcIk1haGpvbmdUaWxlc19NYWluUGFnZV9UYXJnZXRMZXZlbFwiLCBbaVswXV0pO1xuICAgIH1cbiAgfVxuICBvbkx2Qm94UHJnc19wbGF5Q3VyQmFySGlnaCh0LCBlKSB7XG4gICAgdmFyIGkgPSB0LmlucztcbiAgICBpZiAoaS5sZXZlbEJveC5wcm9ncmVzcy5jb25kVHlwZSA9PT0gRUxldmVsQm94Q29uZFR5cGUuTGV2ZWwpIHtcbiAgICAgIHZhciBvID0gaS5ib3hBbmltUHJveHk7XG4gICAgICBjYy5pc1ZhbGlkKG8pICYmIG8uc2V0QW5pbWF0aW9uKFwiaW5cIiwgMSwgZnVuY3Rpb24gKCkge30pO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25MdkJveFByZ3NfZ2V0Q29tcERlbGF5KHQsIGUpIHtcbiAgICBpZiAodC5pbnMubGV2ZWxCb3gucHJvZ3Jlc3MuY29uZFR5cGUgPT09IEVMZXZlbEJveENvbmRUeXBlLkxldmVsKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IDAuNzVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG59Il19