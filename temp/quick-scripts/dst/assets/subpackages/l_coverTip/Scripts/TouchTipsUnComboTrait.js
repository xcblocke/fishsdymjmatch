
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_coverTip/Scripts/TouchTipsUnComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b50cCViCVPEbQzHsu0pps8', 'TouchTipsUnComboTrait');
// subpackages/l_coverTip/Scripts/TouchTipsUnComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ClickShowLockEffect_1 = require("../../../Scripts/ClickShowLockEffect");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var ClickCoverLockTipEffect_1 = require("./ClickCoverLockTipEffect");
var TouchTipsUnComboTrait = /** @class */ (function (_super) {
    __extends(TouchTipsUnComboTrait, _super);
    function TouchTipsUnComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchTipsUnComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TouchTipsUnComboTrait.prototype.onIptBTchEnd_runTLock = function (t, e) {
        var o, r, i, c, n, a, s = t.args[0], p = t.args[1], l = null === (i = null === (r = null === (o = t.ins) || void 0 === o ? void 0 : o.gameContext) || void 0 === r ? void 0 : r.tileSelector) || void 0 === i ? void 0 : i.getLockTileId(null == s ? void 0 : s.pos, p);
        if (l) {
            var u = null === (n = null === (c = t.ins) || void 0 === c ? void 0 : c.gameController) || void 0 === n ? void 0 : n.tileMapObject.getTileObject(l);
            if (!u) {
                e();
                return;
            }
            if (null === (a = t.ins) || void 0 === a ? void 0 : a.gameController.tileMapObject.isHasCover(u)) {
                this.pushHasCoverEffects(t, l);
            }
            else {
                this.pushClickShowLockEffect(t, l);
            }
        }
        e();
    };
    TouchTipsUnComboTrait.prototype.pushClickShowLockEffect = function (t, e) {
        var o, r = new ClickShowLockEffect_1.ClickShowLockEffect({
            tileId: e
        });
        null === (o = t.ins) || void 0 === o || o.pushEffect(r, BehaviorsEnum_1.EInsertType.Parallel);
    };
    TouchTipsUnComboTrait.prototype.pushHasCoverEffects = function (t, e) {
        var o, r = new ClickCoverLockTipEffect_1.ClickCoverLockTipEffect({
            tileId: e,
            coverLockTipTrait: null
        });
        null === (o = t.ins) || void 0 === o || o.pushEffect(r, BehaviorsEnum_1.EInsertType.Parallel);
    };
    TouchTipsUnComboTrait.traitKey = "TouchTipsUnCombo";
    TouchTipsUnComboTrait = __decorate([
        mj.trait,
        mj.class("TouchTipsUnComboTrait")
    ], TouchTipsUnComboTrait);
    return TouchTipsUnComboTrait;
}(Trait_1.default));
exports.default = TouchTipsUnComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NvdmVyVGlwL1NjcmlwdHMvVG91Y2hUaXBzVW5Db21ib1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsNEVBQTJFO0FBQzNFLHlFQUFzRTtBQUN0RSxxRUFBb0U7QUFHcEU7SUFBbUQseUNBQUs7SUFBeEQ7O0lBNENBLENBQUM7SUExQ0Msc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHFEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ROLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BKLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sQ0FBQyxFQUFFLENBQUM7Z0JBQ0osT0FBTzthQUNSO1lBQ0QsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx1REFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUkseUNBQW1CLENBQUM7WUFDMUIsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFDLENBQUM7UUFDTCxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFDRCxtREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksaURBQXVCLENBQUM7WUFDOUIsTUFBTSxFQUFFLENBQUM7WUFDVCxpQkFBaUIsRUFBRSxJQUFJO1NBQ3hCLENBQUMsQ0FBQztRQUNMLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQTFDTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0E0Q3pDO0lBQUQsNEJBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q2tELGVBQUssR0E0Q3ZEO2tCQTVDb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IENsaWNrU2hvd0xvY2tFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0NsaWNrU2hvd0xvY2tFZmZlY3QnO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgQ2xpY2tDb3ZlckxvY2tUaXBFZmZlY3QgfSBmcm9tICcuL0NsaWNrQ292ZXJMb2NrVGlwRWZmZWN0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVG91Y2hUaXBzVW5Db21ib1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaFRpcHNVbkNvbWJvVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVG91Y2hUaXBzVW5Db21ib1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25JcHRCVGNoRW5kX3J1blRMb2NrKHQsIGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIHIsXG4gICAgICBpLFxuICAgICAgYyxcbiAgICAgIG4sXG4gICAgICBhLFxuICAgICAgcyA9IHQuYXJnc1swXSxcbiAgICAgIHAgPSB0LmFyZ3NbMV0sXG4gICAgICBsID0gbnVsbCA9PT0gKGkgPSBudWxsID09PSAociA9IG51bGwgPT09IChvID0gdC5pbnMpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2FtZUNvbnRleHQpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIudGlsZVNlbGVjdG9yKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdldExvY2tUaWxlSWQobnVsbCA9PSBzID8gdm9pZCAwIDogcy5wb3MsIHApO1xuICAgIGlmIChsKSB7XG4gICAgICB2YXIgdSA9IG51bGwgPT09IChuID0gbnVsbCA9PT0gKGMgPSB0LmlucykgfHwgdm9pZCAwID09PSBjID8gdm9pZCAwIDogYy5nYW1lQ29udHJvbGxlcikgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi50aWxlTWFwT2JqZWN0LmdldFRpbGVPYmplY3QobCk7XG4gICAgICBpZiAoIXUpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAobnVsbCA9PT0gKGEgPSB0LmlucykgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LmlzSGFzQ292ZXIodSkpIHtcbiAgICAgICAgdGhpcy5wdXNoSGFzQ292ZXJFZmZlY3RzKHQsIGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wdXNoQ2xpY2tTaG93TG9ja0VmZmVjdCh0LCBsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZSgpO1xuICB9XG4gIHB1c2hDbGlja1Nob3dMb2NrRWZmZWN0KHQsIGUpIHtcbiAgICB2YXIgbyxcbiAgICAgIHIgPSBuZXcgQ2xpY2tTaG93TG9ja0VmZmVjdCh7XG4gICAgICAgIHRpbGVJZDogZVxuICAgICAgfSk7XG4gICAgbnVsbCA9PT0gKG8gPSB0LmlucykgfHwgdm9pZCAwID09PSBvIHx8IG8ucHVzaEVmZmVjdChyLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgcHVzaEhhc0NvdmVyRWZmZWN0cyh0LCBlKSB7XG4gICAgdmFyIG8sXG4gICAgICByID0gbmV3IENsaWNrQ292ZXJMb2NrVGlwRWZmZWN0KHtcbiAgICAgICAgdGlsZUlkOiBlLFxuICAgICAgICBjb3ZlckxvY2tUaXBUcmFpdDogbnVsbFxuICAgICAgfSk7XG4gICAgbnVsbCA9PT0gKG8gPSB0LmlucykgfHwgdm9pZCAwID09PSBvIHx8IG8ucHVzaEVmZmVjdChyLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbn0iXX0=