
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2Revert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f7b4Kl7CxDfZdb4vtczyFX', 'InputTile2Revert');
// Scripts/input/InputTile2Revert.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("../gamePlay/dot/DGameUseItem");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2NotEnoughItemsEffect_1 = require("../Tile2NotEnoughItemsEffect");
var Tile2RevertEffect_1 = require("../Tile2RevertEffect");
var Tile2RevertVibrateEffect_1 = require("../Tile2RevertVibrateEffect");
var Tile2UpdateRevertItemEffect_1 = require("../Tile2UpdateRevertItemEffect");
var Tile2UpdateSlotBarEffect_1 = require("../Tile2UpdateSlotBarEffect");
var InputBase_1 = require("../inputbase/InputBase");
var Tile2NoValidTilesEffect_1 = require("../Tile2NoValidTilesEffect");
var Tile2RollCardEffect_1 = require("../Tile2RollCardEffect");
var Tile2NormalBackEffect_1 = require("../Tile2NormalBackEffect");
var Tile2SlotCardNumChangeEffect_1 = require("../Tile2SlotCardNumChangeEffect");
var InputTile2Revert = /** @class */ (function (_super) {
    __extends(InputTile2Revert, _super);
    function InputTile2Revert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2Revert.prototype.excute = function (e) {
        var t, o, n, i, r = this.gameContext.getGameData().getRevertNums();
        if (this.gameContext.getGameData().isRevertEnough()) {
            if (0 !== this.gameContext.getGameData().slotBarIds.length) {
                var p = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot(), f = this.gameContext.tile2RollCardModifier.getRvertIgnoreIds(), y = this.gameContext.tile2SlotBarModifier.revertLastTile();
                if (y) {
                    var v = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot(), g = this.gameContext.tile2RollCardModifier.modifyRollCardDatas(f);
                    this.gameContext.getGameData().changeRevertNums(-1);
                    this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Revert);
                    this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Revert, -1);
                    this.gameContext.tile2DotTrackerModifier.recordUseRevert();
                    this.onPropUsed();
                    var _ = this.gameContext.getGameData().getRevertNums();
                    DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                        itemId: GameTypeEnums_1.EItemId.Revert,
                        afterNum: _,
                        beforeNum: r
                    });
                    var T = this.gameContext.tile2SlotBarChecker.getSlotBarChangeList(p, v), C = this.gameContext.tile2NormalBackModifier.modifyStatus(), b = this.pushNewRootEffect(e, "Tile2RevertEffect");
                    this.pushEffect(new Tile2UpdateRevertItemEffect_1.Tile2UpdateRevertItemEffect({
                        curNum: _
                    }), BehaviorsEnum_1.EInsertType.Parallel, b.newEffectId, false);
                    if (T.length > 0)
                        try {
                            for (var E = __values(T), S = E.next(); !S.done; S = E.next()) {
                                var I = S.value;
                                this.pushEffect(new Tile2UpdateSlotBarEffect_1.Tile2UpdateSlotBarEffect({
                                    changeInfo: I
                                }), BehaviorsEnum_1.EInsertType.Parallel, b.newEffectId);
                            }
                        }
                        catch (e) {
                            t = {
                                error: e
                            };
                        }
                        finally {
                            try {
                                S && !S.done && (o = E.return) && o.call(E);
                            }
                            finally {
                                if (t)
                                    throw t.error;
                            }
                        }
                    this.pushTile2SlotCardNumChangeEffect(null !== (n = null == p ? void 0 : p.length) && void 0 !== n ? n : 0, null !== (i = null == v ? void 0 : v.length) && void 0 !== i ? i : 0);
                    this.pushRevertEffect(y, b.newEffectId);
                    this.pushNormalBackEffects(C);
                    var w = this.pushNewRootEffect(this.input, "roll");
                    this.pushRollCardEffects(w, g);
                    this.revetEnd();
                }
            }
            else
                this.pushEffect(new Tile2NoValidTilesEffect_1.Tile2NoValidTilesEffect({}), BehaviorsEnum_1.EInsertType.Parallel);
        }
        else
            this.pushEffect(new Tile2NotEnoughItemsEffect_1.Tile2NotEnoughItemsEffect({
                from: "revert"
            }), BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTile2Revert.prototype.revetEnd = function () { };
    InputTile2Revert.prototype.pushNormalBackEffects = function (e) {
        if (e && 0 != e.length) {
            var t = this.pushNewRootEffect(this.input, "Tile2NormalBackEffect"), o = new Tile2NormalBackEffect_1.Tile2NormalBackEffect({
                normalBackList: e
            });
            this.pushEffect(o, BehaviorsEnum_1.EInsertType.Serial, t.newEffectId, false);
        }
    };
    InputTile2Revert.prototype.onPropUsed = function () { };
    InputTile2Revert.prototype.pushRollCardEffects = function (e, t) {
        var o, n;
        try {
            for (var i = __values(t), r = i.next(); !r.done; r = i.next()) {
                var l = r.value, c = new Tile2RollCardEffect_1.Tile2RollCardEffect({
                    tileId: l.tileId,
                    frontToBack: l.frontToBack
                });
                this.pushEffect(c, BehaviorsEnum_1.EInsertType.Parallel, e.newEffectId, false);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (n = i.return) && n.call(i);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    InputTile2Revert.prototype.pushRevertEffect = function (e, t) {
        var o = new Tile2RevertEffect_1.Tile2RevertEffect({
            tileId: e
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel, t, false);
        var n = new Tile2RevertVibrateEffect_1.Tile2RevertVibrateEffect({});
        this.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel, t, false);
    };
    InputTile2Revert.prototype.pushTile2SlotCardNumChangeEffect = function (e, t) {
        var o = this.pushNewRootEffect(this.input, "Tile2SlotCardNumChangeEffect"), n = new Tile2SlotCardNumChangeEffect_1.Tile2SlotCardNumChangeEffect({
            startSlotBarCardCount: e,
            endSlotBarCardCount: t
        });
        this.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel, o.newEffectId, false);
    };
    __decorate([
        mj.traitEvent("IptT2Revert_exec")
    ], InputTile2Revert.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptT2Revert_revetEnd")
    ], InputTile2Revert.prototype, "revetEnd", null);
    __decorate([
        mj.traitEvent("IptT2Revert_used")
    ], InputTile2Revert.prototype, "onPropUsed", null);
    return InputTile2Revert;
}(InputBase_1.InputBase));
exports.default = InputTile2Revert;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJSZXZlcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE4RDtBQUM5RCwyREFBd0Q7QUFDeEQsMEVBQW1FO0FBQ25FLDBFQUF5RTtBQUN6RSwwREFBeUQ7QUFDekQsd0VBQXVFO0FBQ3ZFLDhFQUE2RTtBQUM3RSx3RUFBdUU7QUFDdkUsb0RBQW1EO0FBQ25ELHNFQUFxRTtBQUNyRSw4REFBNkQ7QUFDN0Qsa0VBQWlFO0FBQ2pFLGdGQUErRTtBQUMvRTtJQUE4QyxvQ0FBUztJQUF2RDs7SUFtSEEsQ0FBQztJQWpIQyxpQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLEVBQUUsRUFDaEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLEVBQUUsRUFDOUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzdELElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLEVBQUUsRUFDaEUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMscUJB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OlsiaW1wb3J0IHsgRG90R2FtZVVzZUl0ZW0gfSBmcm9tICcuLi9nYW1lUGxheS9kb3QvREdhbWVVc2VJdGVtJztcbmltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBFSXRlbUlkIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBUaWxlMk5vdEVub3VnaEl0ZW1zRWZmZWN0IH0gZnJvbSAnLi4vVGlsZTJOb3RFbm91Z2hJdGVtc0VmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlJldmVydEVmZmVjdCB9IGZyb20gJy4uL1RpbGUyUmV2ZXJ0RWZmZWN0JztcbmltcG9ydCB7IFRpbGUyUmV2ZXJ0VmlicmF0ZUVmZmVjdCB9IGZyb20gJy4uL1RpbGUyUmV2ZXJ0VmlicmF0ZUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlVwZGF0ZVJldmVydEl0ZW1FZmZlY3QgfSBmcm9tICcuLi9UaWxlMlVwZGF0ZVJldmVydEl0ZW1FZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJVcGRhdGVTbG90QmFyRWZmZWN0IH0gZnJvbSAnLi4vVGlsZTJVcGRhdGVTbG90QmFyRWZmZWN0JztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuaW1wb3J0IHsgVGlsZTJOb1ZhbGlkVGlsZXNFZmZlY3QgfSBmcm9tICcuLi9UaWxlMk5vVmFsaWRUaWxlc0VmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlJvbGxDYXJkRWZmZWN0IH0gZnJvbSAnLi4vVGlsZTJSb2xsQ2FyZEVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMk5vcm1hbEJhY2tFZmZlY3QgfSBmcm9tICcuLi9UaWxlMk5vcm1hbEJhY2tFZmZlY3QnO1xuaW1wb3J0IHsgVGlsZTJTbG90Q2FyZE51bUNoYW5nZUVmZmVjdCB9IGZyb20gJy4uL1RpbGUyU2xvdENhcmROdW1DaGFuZ2VFZmZlY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUaWxlMlJldmVydCBleHRlbmRzIElucHV0QmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJSZXZlcnRfZXhlY1wiKVxuICBleGN1dGUoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgciA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRSZXZlcnROdW1zKCk7XG4gICAgaWYgKHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5pc1JldmVydEVub3VnaCgpKSB7XG4gICAgICBpZiAoMCAhPT0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLnNsb3RCYXJJZHMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBwID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlNsb3RCYXJNb2RpZmllci5nZXRTbG90QmFyU25hcHNob3QoKSxcbiAgICAgICAgICBmID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlJvbGxDYXJkTW9kaWZpZXIuZ2V0UnZlcnRJZ25vcmVJZHMoKSxcbiAgICAgICAgICB5ID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlNsb3RCYXJNb2RpZmllci5yZXZlcnRMYXN0VGlsZSgpO1xuICAgICAgICBpZiAoeSkge1xuICAgICAgICAgIHZhciB2ID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlNsb3RCYXJNb2RpZmllci5nZXRTbG90QmFyU25hcHNob3QoKSxcbiAgICAgICAgICAgIGcgPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyUm9sbENhcmRNb2RpZmllci5tb2RpZnlSb2xsQ2FyZERhdGFzKGYpO1xuICAgICAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5jaGFuZ2VSZXZlcnROdW1zKC0xKTtcbiAgICAgICAgICB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkucmVjb3JkVG9vbFVzZShFSXRlbUlkLlJldmVydCk7XG4gICAgICAgICAgdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLnRvb2xDaGFuZ2UoRUl0ZW1JZC5SZXZlcnQsIC0xKTtcbiAgICAgICAgICB0aGlzLmdhbWVDb250ZXh0LnRpbGUyRG90VHJhY2tlck1vZGlmaWVyLnJlY29yZFVzZVJldmVydCgpO1xuICAgICAgICAgIHRoaXMub25Qcm9wVXNlZCgpO1xuICAgICAgICAgIHZhciBfID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFJldmVydE51bXMoKTtcbiAgICAgICAgICBEb3RHYW1lVXNlSXRlbS5kb3QodGhpcy5nYW1lQ29udGV4dCwge1xuICAgICAgICAgICAgaXRlbUlkOiBFSXRlbUlkLlJldmVydCxcbiAgICAgICAgICAgIGFmdGVyTnVtOiBfLFxuICAgICAgICAgICAgYmVmb3JlTnVtOiByXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIFQgPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyU2xvdEJhckNoZWNrZXIuZ2V0U2xvdEJhckNoYW5nZUxpc3QocCwgdiksXG4gICAgICAgICAgICBDID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMk5vcm1hbEJhY2tNb2RpZmllci5tb2RpZnlTdGF0dXMoKSxcbiAgICAgICAgICAgIGIgPSB0aGlzLnB1c2hOZXdSb290RWZmZWN0KGUsIFwiVGlsZTJSZXZlcnRFZmZlY3RcIik7XG4gICAgICAgICAgdGhpcy5wdXNoRWZmZWN0KG5ldyBUaWxlMlVwZGF0ZVJldmVydEl0ZW1FZmZlY3Qoe1xuICAgICAgICAgICAgY3VyTnVtOiBfXG4gICAgICAgICAgfSksIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCBiLm5ld0VmZmVjdElkLCBmYWxzZSk7XG4gICAgICAgICAgaWYgKFQubGVuZ3RoID4gMCkgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIEUgPSBfX3ZhbHVlcyhUKSwgUyA9IEUubmV4dCgpOyAhUy5kb25lOyBTID0gRS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgdmFyIEkgPSBTLnZhbHVlO1xuICAgICAgICAgICAgICB0aGlzLnB1c2hFZmZlY3QobmV3IFRpbGUyVXBkYXRlU2xvdEJhckVmZmVjdCh7XG4gICAgICAgICAgICAgICAgY2hhbmdlSW5mbzogSVxuICAgICAgICAgICAgICB9KSwgRUluc2VydFR5cGUuUGFyYWxsZWwsIGIubmV3RWZmZWN0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHQgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBTICYmICFTLmRvbmUgJiYgKG8gPSBFLnJldHVybikgJiYgby5jYWxsKEUpO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucHVzaFRpbGUyU2xvdENhcmROdW1DaGFuZ2VFZmZlY3QobnVsbCAhPT0gKG4gPSBudWxsID09IHAgPyB2b2lkIDAgOiBwLmxlbmd0aCkgJiYgdm9pZCAwICE9PSBuID8gbiA6IDAsIG51bGwgIT09IChpID0gbnVsbCA9PSB2ID8gdm9pZCAwIDogdi5sZW5ndGgpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiAwKTtcbiAgICAgICAgICB0aGlzLnB1c2hSZXZlcnRFZmZlY3QoeSwgYi5uZXdFZmZlY3RJZCk7XG4gICAgICAgICAgdGhpcy5wdXNoTm9ybWFsQmFja0VmZmVjdHMoQyk7XG4gICAgICAgICAgdmFyIHcgPSB0aGlzLnB1c2hOZXdSb290RWZmZWN0KHRoaXMuaW5wdXQsIFwicm9sbFwiKTtcbiAgICAgICAgICB0aGlzLnB1c2hSb2xsQ2FyZEVmZmVjdHModywgZyk7XG4gICAgICAgICAgdGhpcy5yZXZldEVuZCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgdGhpcy5wdXNoRWZmZWN0KG5ldyBUaWxlMk5vVmFsaWRUaWxlc0VmZmVjdCh7fSksIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgICB9IGVsc2UgdGhpcy5wdXNoRWZmZWN0KG5ldyBUaWxlMk5vdEVub3VnaEl0ZW1zRWZmZWN0KHtcbiAgICAgIGZyb206IFwicmV2ZXJ0XCJcbiAgICB9KSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSXB0VDJSZXZlcnRfcmV2ZXRFbmRcIilcbiAgcmV2ZXRFbmQoKSB7fVxuICBwdXNoTm9ybWFsQmFja0VmZmVjdHMoZSkge1xuICAgIGlmIChlICYmIDAgIT0gZS5sZW5ndGgpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5wdXNoTmV3Um9vdEVmZmVjdCh0aGlzLmlucHV0LCBcIlRpbGUyTm9ybWFsQmFja0VmZmVjdFwiKSxcbiAgICAgICAgbyA9IG5ldyBUaWxlMk5vcm1hbEJhY2tFZmZlY3Qoe1xuICAgICAgICAgIG5vcm1hbEJhY2tMaXN0OiBlXG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5wdXNoRWZmZWN0KG8sIEVJbnNlcnRUeXBlLlNlcmlhbCwgdC5uZXdFZmZlY3RJZCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdFQyUmV2ZXJ0X3VzZWRcIilcbiAgb25Qcm9wVXNlZCgpIHt9XG4gIHB1c2hSb2xsQ2FyZEVmZmVjdHMoZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXModCksIHIgPSBpLm5leHQoKTsgIXIuZG9uZTsgciA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gci52YWx1ZSxcbiAgICAgICAgICBjID0gbmV3IFRpbGUyUm9sbENhcmRFZmZlY3Qoe1xuICAgICAgICAgICAgdGlsZUlkOiBsLnRpbGVJZCxcbiAgICAgICAgICAgIGZyb250VG9CYWNrOiBsLmZyb250VG9CYWNrXG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHVzaEVmZmVjdChjLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgZS5uZXdFZmZlY3RJZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICByICYmICFyLmRvbmUgJiYgKG4gPSBpLnJldHVybikgJiYgbi5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1c2hSZXZlcnRFZmZlY3QoZSwgdCkge1xuICAgIHZhciBvID0gbmV3IFRpbGUyUmV2ZXJ0RWZmZWN0KHtcbiAgICAgIHRpbGVJZDogZVxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgdCwgZmFsc2UpO1xuICAgIHZhciBuID0gbmV3IFRpbGUyUmV2ZXJ0VmlicmF0ZUVmZmVjdCh7fSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KG4sIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCB0LCBmYWxzZSk7XG4gIH1cbiAgcHVzaFRpbGUyU2xvdENhcmROdW1DaGFuZ2VFZmZlY3QoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5wdXNoTmV3Um9vdEVmZmVjdCh0aGlzLmlucHV0LCBcIlRpbGUyU2xvdENhcmROdW1DaGFuZ2VFZmZlY3RcIiksXG4gICAgICBuID0gbmV3IFRpbGUyU2xvdENhcmROdW1DaGFuZ2VFZmZlY3Qoe1xuICAgICAgICBzdGFydFNsb3RCYXJDYXJkQ291bnQ6IGUsXG4gICAgICAgIGVuZFNsb3RCYXJDYXJkQ291bnQ6IHRcbiAgICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChuLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgby5uZXdFZmZlY3RJZCwgZmFsc2UpO1xuICB9XG59Il19