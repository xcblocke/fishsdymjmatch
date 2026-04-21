
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InputTile2Revive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3803diYXdI/ZUBrLEkfNtx', 'InputTile2Revive');
// Scripts/InputTile2Revive.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("./gamePlay/dot/DGameUseItem");
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var DaxiaoClearEffectEffect_1 = require("./DaxiaoClearEffectEffect");
var Tile2RemoveHitTipsEffect_1 = require("./Tile2RemoveHitTipsEffect");
var Tile2ReviveEffect_1 = require("./Tile2ReviveEffect");
var Tile2RollCardEffect_1 = require("./Tile2RollCardEffect");
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var Tile2NormalBackEffect_1 = require("./Tile2NormalBackEffect");
var Tile2SlotCardNumChangeEffect_1 = require("./Tile2SlotCardNumChangeEffect");
var InputTile2Revive = /** @class */ (function (_super) {
    __extends(InputTile2Revive, _super);
    function InputTile2Revive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2Revive.prototype.excute = function (e) {
        var t, o, n = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot(), i = this.gameContext.getGameData().getReviveNums();
        this.gameContext.getGameData().changeReviveNums(-1);
        this.onPropUsed();
        this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Revive, e.from);
        this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Revive, -1);
        this.gameContext.tile2DotTrackerModifier.recordUseRevive();
        DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
            itemId: GameTypeEnums_1.EItemId.Revive,
            afterNum: this.gameContext.getGameData().getReviveNums(),
            beforeNum: i
        });
        var r = false;
        this.canMagnetRevive() && (r = this.pushMagnetReviveEffect(e));
        r || this.pushReviveEffect(e);
        var a = this.gameContext.tile2SlotBarModifier.getSlotBarSnapshot();
        this.pushTile2SlotCardNumChangeEffect(null !== (t = null == n ? void 0 : n.length) && void 0 !== t ? t : 0, null !== (o = null == a ? void 0 : a.length) && void 0 !== o ? o : 0);
        this.reviveEnd();
    };
    InputTile2Revive.prototype.reviveEnd = function () { };
    InputTile2Revive.prototype.onPropUsed = function () { };
    InputTile2Revive.prototype.pushTile2SlotCardNumChangeEffect = function (e, t) {
        var o = this.pushNewRootEffect(this.input, "Tile2SlotCardNumChangeEffect"), n = new Tile2SlotCardNumChangeEffect_1.Tile2SlotCardNumChangeEffect({
            startSlotBarCardCount: e,
            endSlotBarCardCount: t
        });
        this.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel, o.newEffectId, false);
    };
    InputTile2Revive.prototype.getReviveAnimType = function () {
        return 0;
    };
    InputTile2Revive.prototype.pushReturnEffects = function (e) {
        this.pushEffect(new Tile2ReviveEffect_1.Tile2ReviveEffect({
            returnedTileIds: e
        }), BehaviorsEnum_1.EInsertType.Root);
    };
    InputTile2Revive.prototype.pushClearEffects = function (e, t) {
        var o = this.buildClearMatchInfos(t);
        if (0 !== o.length) {
            this.gameContext.daxiaoModifier.modifyDaxiaoCard(e, o);
            this.pushEffect(new Tile2ReviveEffect_1.Tile2ReviveEffect({
                returnedTileIds: t,
                reviveType: "clear"
            }), BehaviorsEnum_1.EInsertType.Root);
            var n = o.flatMap(function (e) {
                return [e.tileId1, e.tileId2];
            });
            this.pushEffect(new DaxiaoClearEffectEffect_1.DaxiaoClearEffectEffect({
                tileIds: n,
                finalMatchInfos: o
            }), BehaviorsEnum_1.EInsertType.Root);
        }
        else
            this.pushReturnEffects(t);
    };
    InputTile2Revive.prototype.buildClearMatchInfos = function (e) {
        var t, o, n, i, r = this.gameContext.getTileMapObject(), l = new Set(e), s = new Map();
        try {
            for (var c = __values(r.aliveTiles()), u = c.next(); !u.done; u = c.next()) {
                var p = u.value;
                if (!l.has(p.id)) {
                    var f = p.cardId;
                    s.has(f) || s.set(f, []);
                    s.get(f).push(p.id);
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                u && !u.done && (o = c.return) && o.call(c);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        var d = [], h = new Set();
        try {
            for (var y = __values(e), m = y.next(); !m.done; m = y.next()) {
                var v = m.value, g = r.getTileObject(v);
                if (g) {
                    var _ = (s.get(g.cardId) || []).filter(function (e) {
                        return !h.has(e);
                    });
                    if (0 !== _.length) {
                        var T = _[Math.floor(Math.random() * _.length)];
                        h.add(T);
                        d.push({
                            tileId1: v,
                            tileId2: T,
                            isFix: false
                        });
                    }
                }
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (i = y.return) && i.call(y);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        return d;
    };
    InputTile2Revive.prototype.pushRollCardEffects = function (e, t) {
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
    InputTile2Revive.prototype.pushReviveEffect = function (e) {
        var t = this.gameContext.tile2SlotBarModifier.returnSlotBarToBoard(), o = this.gameContext.tile2RollCardModifier.modifyRollCardDatas(), n = this.gameContext.getCanHitTips();
        n.length >= 2 && this.gameContext.setCanHitTips();
        if (1 === this.getReviveAnimType()) {
            this.pushClearEffects(e, t);
        }
        else {
            this.pushReturnEffects(t);
        }
        var i = this.gameContext.tile2NormalBackModifier.modifyStatus();
        this.pushNormalBackEffects(i);
        var r = this.pushNewRootEffect(this.input, "roll");
        this.pushRollCardEffects(r, o);
        this.pushEffect(new Tile2RemoveHitTipsEffect_1.Tile2RemoveHitTipsEffect({
            tileId1: n[0],
            tileId2: n[1]
        }), BehaviorsEnum_1.EInsertType.Root);
    };
    InputTile2Revive.prototype.pushNormalBackEffects = function (e) {
        if (e && 0 != e.length) {
            var t = this.pushNewRootEffect(this.input, "Tile2NormalBackEffect"), o = new Tile2NormalBackEffect_1.Tile2NormalBackEffect({
                normalBackList: e
            });
            this.pushEffect(o, BehaviorsEnum_1.EInsertType.Serial, t.newEffectId, false);
        }
    };
    InputTile2Revive.prototype.canMagnetRevive = function () {
        return false;
    };
    InputTile2Revive.prototype.getMagnetCnt = function () {
        return 0;
    };
    InputTile2Revive.prototype.pushMagnetReviveEffect = function (e) {
        var t = this.getMagnetCnt();
        if (t <= 0)
            return false;
        var o = this.gameContext.tile2MagnetChecker.findMagnetTiles(t);
        if (!o || 0 === o.length)
            return false;
        var n = o.slice();
        ClearHelper_1.default.runClear(this.gameContext, e, this, {
            tileIds: o,
            outTiles: n,
            magnetPair: t
        });
        return true;
    };
    __decorate([
        mj.traitEvent("T2Revive_reviveEnd")
    ], InputTile2Revive.prototype, "reviveEnd", null);
    __decorate([
        mj.traitEvent("T2Revive_used")
    ], InputTile2Revive.prototype, "onPropUsed", null);
    __decorate([
        mj.traitEvent("T2Revive_animType")
    ], InputTile2Revive.prototype, "getReviveAnimType", null);
    __decorate([
        mj.traitEvent("T2Revive_pushReturn")
    ], InputTile2Revive.prototype, "pushReturnEffects", null);
    __decorate([
        mj.traitEvent("T2Revive_pushClear")
    ], InputTile2Revive.prototype, "pushClearEffects", null);
    __decorate([
        mj.traitEvent("T2Revive_magnetRevive")
    ], InputTile2Revive.prototype, "canMagnetRevive", null);
    __decorate([
        mj.traitEvent("T2Revive_magnetCnt")
    ], InputTile2Revive.prototype, "getMagnetCnt", null);
    return InputTile2Revive;
}(InputBase_1.InputBase));
exports.default = InputTile2Revive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lucHV0VGlsZTJSZXZpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUE2RDtBQUM3RCwwREFBdUQ7QUFDdkQseUVBQWtFO0FBQ2xFLHFFQUFvRTtBQUNwRSx1RUFBc0U7QUFDdEUseURBQXdEO0FBQ3hELDZEQUE0RDtBQUM1RCxtREFBa0Q7QUFDbEQsNkNBQXdDO0FBQ3hDLGlFQUFnRTtBQUNoRSwrRUFBOEU7QUFDOUU7SUFBOEMsb0NBQVM7SUFBdkQ7O0lBcU1BLENBQUM7SUFwTUMsaUNBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsa0JBQWtCLEVBQUUsRUFDOUQsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyx1QkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNELDZCQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkMsTUFBTSxFQUFFLHVCQUFPLENBQUMsTUFBTTtZQUN0QixRQUFRLEVBQUUsSUFB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QUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFO1lBQzlDLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQTVLRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7cURBQ3RCO0lBRWQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztzREFDaEI7SUFVZjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7NkRBR2xDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDOzZEQUtwQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzs0REFpQm5DO0lBbUhEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzsyREFHdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7d0RBR25DO0lBY0gsdUJBQUM7Q0FyTUQsQUFxTUMsQ0FyTTZDLHFCQUFTLEdBcU10RDtrQkFyTW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvdEdhbWVVc2VJdGVtIH0gZnJvbSAnLi9nYW1lUGxheS9kb3QvREdhbWVVc2VJdGVtJztcbmltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IEVJdGVtSWQgfSBmcm9tICcuL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3QgfSBmcm9tICcuL0RheGlhb0NsZWFyRWZmZWN0RWZmZWN0JztcbmltcG9ydCB7IFRpbGUyUmVtb3ZlSGl0VGlwc0VmZmVjdCB9IGZyb20gJy4vVGlsZTJSZW1vdmVIaXRUaXBzRWZmZWN0JztcbmltcG9ydCB7IFRpbGUyUmV2aXZlRWZmZWN0IH0gZnJvbSAnLi9UaWxlMlJldml2ZUVmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlJvbGxDYXJkRWZmZWN0IH0gZnJvbSAnLi9UaWxlMlJvbGxDYXJkRWZmZWN0JztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5pbXBvcnQgQ2xlYXJIZWxwZXIgZnJvbSAnLi9DbGVhckhlbHBlcic7XG5pbXBvcnQgeyBUaWxlMk5vcm1hbEJhY2tFZmZlY3QgfSBmcm9tICcuL1RpbGUyTm9ybWFsQmFja0VmZmVjdCc7XG5pbXBvcnQgeyBUaWxlMlNsb3RDYXJkTnVtQ2hhbmdlRWZmZWN0IH0gZnJvbSAnLi9UaWxlMlNsb3RDYXJkTnVtQ2hhbmdlRWZmZWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJSZXZpdmUgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyU2xvdEJhck1vZGlmaWVyLmdldFNsb3RCYXJTbmFwc2hvdCgpLFxuICAgICAgaSA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRSZXZpdmVOdW1zKCk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmNoYW5nZVJldml2ZU51bXMoLTEpO1xuICAgIHRoaXMub25Qcm9wVXNlZCgpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5yZWNvcmRUb29sVXNlKEVJdGVtSWQuUmV2aXZlLCBlLmZyb20pO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS50b29sQ2hhbmdlKEVJdGVtSWQuUmV2aXZlLCAtMSk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMkRvdFRyYWNrZXJNb2RpZmllci5yZWNvcmRVc2VSZXZpdmUoKTtcbiAgICBEb3RHYW1lVXNlSXRlbS5kb3QodGhpcy5nYW1lQ29udGV4dCwge1xuICAgICAgaXRlbUlkOiBFSXRlbUlkLlJldml2ZSxcbiAgICAgIGFmdGVyTnVtOiB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0UmV2aXZlTnVtcygpLFxuICAgICAgYmVmb3JlTnVtOiBpXG4gICAgfSk7XG4gICAgdmFyIHIgPSBmYWxzZTtcbiAgICB0aGlzLmNhbk1hZ25ldFJldml2ZSgpICYmIChyID0gdGhpcy5wdXNoTWFnbmV0UmV2aXZlRWZmZWN0KGUpKTtcbiAgICByIHx8IHRoaXMucHVzaFJldml2ZUVmZmVjdChlKTtcbiAgICB2YXIgYSA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJTbG90QmFyTW9kaWZpZXIuZ2V0U2xvdEJhclNuYXBzaG90KCk7XG4gICAgdGhpcy5wdXNoVGlsZTJTbG90Q2FyZE51bUNoYW5nZUVmZmVjdChudWxsICE9PSAodCA9IG51bGwgPT0gbiA/IHZvaWQgMCA6IG4ubGVuZ3RoKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMCwgbnVsbCAhPT0gKG8gPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLmxlbmd0aCkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDApO1xuICAgIHRoaXMucmV2aXZlRW5kKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlJldml2ZV9yZXZpdmVFbmRcIilcbiAgcmV2aXZlRW5kKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlJldml2ZV91c2VkXCIpXG4gIG9uUHJvcFVzZWQoKSB7fVxuICBwdXNoVGlsZTJTbG90Q2FyZE51bUNoYW5nZUVmZmVjdChlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLnB1c2hOZXdSb290RWZmZWN0KHRoaXMuaW5wdXQsIFwiVGlsZTJTbG90Q2FyZE51bUNoYW5nZUVmZmVjdFwiKSxcbiAgICAgIG4gPSBuZXcgVGlsZTJTbG90Q2FyZE51bUNoYW5nZUVmZmVjdCh7XG4gICAgICAgIHN0YXJ0U2xvdEJhckNhcmRDb3VudDogZSxcbiAgICAgICAgZW5kU2xvdEJhckNhcmRDb3VudDogdFxuICAgICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KG4sIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCBvLm5ld0VmZmVjdElkLCBmYWxzZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlJldml2ZV9hbmltVHlwZVwiKVxuICBnZXRSZXZpdmVBbmltVHlwZSgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyUmV2aXZlX3B1c2hSZXR1cm5cIilcbiAgcHVzaFJldHVybkVmZmVjdHMoZSkge1xuICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJSZXZpdmVFZmZlY3Qoe1xuICAgICAgcmV0dXJuZWRUaWxlSWRzOiBlXG4gICAgfSksIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJSZXZpdmVfcHVzaENsZWFyXCIpXG4gIHB1c2hDbGVhckVmZmVjdHMoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5idWlsZENsZWFyTWF0Y2hJbmZvcyh0KTtcbiAgICBpZiAoMCAhPT0gby5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZGF4aWFvTW9kaWZpZXIubW9kaWZ5RGF4aWFvQ2FyZChlLCBvKTtcbiAgICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJSZXZpdmVFZmZlY3Qoe1xuICAgICAgICByZXR1cm5lZFRpbGVJZHM6IHQsXG4gICAgICAgIHJldml2ZVR5cGU6IFwiY2xlYXJcIlxuICAgICAgfSksIEVJbnNlcnRUeXBlLlJvb3QpO1xuICAgICAgdmFyIG4gPSBvLmZsYXRNYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIFtlLnRpbGVJZDEsIGUudGlsZUlkMl07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHVzaEVmZmVjdChuZXcgRGF4aWFvQ2xlYXJFZmZlY3RFZmZlY3Qoe1xuICAgICAgICB0aWxlSWRzOiBuLFxuICAgICAgICBmaW5hbE1hdGNoSW5mb3M6IG9cbiAgICAgIH0pLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgICB9IGVsc2UgdGhpcy5wdXNoUmV0dXJuRWZmZWN0cyh0KTtcbiAgfVxuICBidWlsZENsZWFyTWF0Y2hJbmZvcyhlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICByID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBsID0gbmV3IFNldChlKSxcbiAgICAgIHMgPSBuZXcgTWFwKCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhyLmFsaXZlVGlsZXMoKSksIHUgPSBjLm5leHQoKTsgIXUuZG9uZTsgdSA9IGMubmV4dCgpKSB7XG4gICAgICAgIHZhciBwID0gdS52YWx1ZTtcbiAgICAgICAgaWYgKCFsLmhhcyhwLmlkKSkge1xuICAgICAgICAgIHZhciBmID0gcC5jYXJkSWQ7XG4gICAgICAgICAgcy5oYXMoZikgfHwgcy5zZXQoZiwgW10pO1xuICAgICAgICAgIHMuZ2V0KGYpLnB1c2gocC5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdSAmJiAhdS5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZCA9IFtdLFxuICAgICAgaCA9IG5ldyBTZXQoKTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgeSA9IF9fdmFsdWVzKGUpLCBtID0geS5uZXh0KCk7ICFtLmRvbmU7IG0gPSB5Lm5leHQoKSkge1xuICAgICAgICB2YXIgdiA9IG0udmFsdWUsXG4gICAgICAgICAgZyA9IHIuZ2V0VGlsZU9iamVjdCh2KTtcbiAgICAgICAgaWYgKGcpIHtcbiAgICAgICAgICB2YXIgXyA9IChzLmdldChnLmNhcmRJZCkgfHwgW10pLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuICFoLmhhcyhlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoMCAhPT0gXy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBUID0gX1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfLmxlbmd0aCldO1xuICAgICAgICAgICAgaC5hZGQoVCk7XG4gICAgICAgICAgICBkLnB1c2goe1xuICAgICAgICAgICAgICB0aWxlSWQxOiB2LFxuICAgICAgICAgICAgICB0aWxlSWQyOiBULFxuICAgICAgICAgICAgICBpc0ZpeDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG4gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBtICYmICFtLmRvbmUgJiYgKGkgPSB5LnJldHVybikgJiYgaS5jYWxsKHkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkO1xuICB9XG4gIHB1c2hSb2xsQ2FyZEVmZmVjdHMoZSwgdCkge1xuICAgIHZhciBvLCBuO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBpID0gX192YWx1ZXModCksIHIgPSBpLm5leHQoKTsgIXIuZG9uZTsgciA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gci52YWx1ZSxcbiAgICAgICAgICBjID0gbmV3IFRpbGUyUm9sbENhcmRFZmZlY3Qoe1xuICAgICAgICAgICAgdGlsZUlkOiBsLnRpbGVJZCxcbiAgICAgICAgICAgIGZyb250VG9CYWNrOiBsLmZyb250VG9CYWNrXG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucHVzaEVmZmVjdChjLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCwgZS5uZXdFZmZlY3RJZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG8gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICByICYmICFyLmRvbmUgJiYgKG4gPSBpLnJldHVybikgJiYgbi5jYWxsKGkpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG8uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1c2hSZXZpdmVFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlNsb3RCYXJNb2RpZmllci5yZXR1cm5TbG90QmFyVG9Cb2FyZCgpLFxuICAgICAgbyA9IHRoaXMuZ2FtZUNvbnRleHQudGlsZTJSb2xsQ2FyZE1vZGlmaWVyLm1vZGlmeVJvbGxDYXJkRGF0YXMoKSxcbiAgICAgIG4gPSB0aGlzLmdhbWVDb250ZXh0LmdldENhbkhpdFRpcHMoKTtcbiAgICBuLmxlbmd0aCA+PSAyICYmIHRoaXMuZ2FtZUNvbnRleHQuc2V0Q2FuSGl0VGlwcygpO1xuICAgIGlmICgxID09PSB0aGlzLmdldFJldml2ZUFuaW1UeXBlKCkpIHtcbiAgICAgIHRoaXMucHVzaENsZWFyRWZmZWN0cyhlLCB0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdXNoUmV0dXJuRWZmZWN0cyh0KTtcbiAgICB9XG4gICAgdmFyIGkgPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyTm9ybWFsQmFja01vZGlmaWVyLm1vZGlmeVN0YXR1cygpO1xuICAgIHRoaXMucHVzaE5vcm1hbEJhY2tFZmZlY3RzKGkpO1xuICAgIHZhciByID0gdGhpcy5wdXNoTmV3Um9vdEVmZmVjdCh0aGlzLmlucHV0LCBcInJvbGxcIik7XG4gICAgdGhpcy5wdXNoUm9sbENhcmRFZmZlY3RzKHIsIG8pO1xuICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJSZW1vdmVIaXRUaXBzRWZmZWN0KHtcbiAgICAgIHRpbGVJZDE6IG5bMF0sXG4gICAgICB0aWxlSWQyOiBuWzFdXG4gICAgfSksIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHB1c2hOb3JtYWxCYWNrRWZmZWN0cyhlKSB7XG4gICAgaWYgKGUgJiYgMCAhPSBlLmxlbmd0aCkge1xuICAgICAgdmFyIHQgPSB0aGlzLnB1c2hOZXdSb290RWZmZWN0KHRoaXMuaW5wdXQsIFwiVGlsZTJOb3JtYWxCYWNrRWZmZWN0XCIpLFxuICAgICAgICBvID0gbmV3IFRpbGUyTm9ybWFsQmFja0VmZmVjdCh7XG4gICAgICAgICAgbm9ybWFsQmFja0xpc3Q6IGVcbiAgICAgICAgfSk7XG4gICAgICB0aGlzLnB1c2hFZmZlY3QobywgRUluc2VydFR5cGUuU2VyaWFsLCB0Lm5ld0VmZmVjdElkLCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJSZXZpdmVfbWFnbmV0UmV2aXZlXCIpXG4gIGNhbk1hZ25ldFJldml2ZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlJldml2ZV9tYWduZXRDbnRcIilcbiAgZ2V0TWFnbmV0Q250KCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHB1c2hNYWduZXRSZXZpdmVFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRNYWduZXRDbnQoKTtcbiAgICBpZiAodCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG8gPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyTWFnbmV0Q2hlY2tlci5maW5kTWFnbmV0VGlsZXModCk7XG4gICAgaWYgKCFvIHx8IDAgPT09IG8ubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIG4gPSBvLnNsaWNlKCk7XG4gICAgQ2xlYXJIZWxwZXIucnVuQ2xlYXIodGhpcy5nYW1lQ29udGV4dCwgZSwgdGhpcywge1xuICAgICAgdGlsZUlkczogbyxcbiAgICAgIG91dFRpbGVzOiBuLFxuICAgICAgbWFnbmV0UGFpcjogdFxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59Il19