
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowerClearTile2/Scripts/Tile2FlowerClearTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '185b1kmfvRJLYp8FmupGO3o', 'Tile2FlowerClearTrait');
// subpackages/l_flowerClearTile2/Scripts/Tile2FlowerClearTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var Tile2ClearEffectEffect_1 = require("../../../Scripts/Tile2ClearEffectEffect");
var Tile2FlowerClearTrait = /** @class */ (function (_super) {
    __extends(Tile2FlowerClearTrait, _super);
    function Tile2FlowerClearTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FlowerClearTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2FlowerClearTrait.prototype.getClearCondition = function () {
        return null;
    };
    Tile2FlowerClearTrait.prototype.onClearT2Hlp_newClrEffEff = function (t, e) {
        var r = this.createTile2ClearEffectEffect(t);
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
    Tile2FlowerClearTrait.prototype.onClearT4Hlp_newClrEffEff = function (t, e) {
        var r = this.createTile2ClearEffectEffect(t);
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
    Tile2FlowerClearTrait.prototype.createTile2ClearEffectEffect = function (t) {
        var e, r, o, i, n = this.getClearCondition();
        if (!n)
            return null;
        var l = null === (e = t.args) || void 0 === e ? void 0 : e[0], u = null === (r = t.args) || void 0 === r ? void 0 : r[1], f = null === (o = t.args) || void 0 === o ? void 0 : o[2];
        if (!l || !u || !f)
            return null;
        if (l && !CardUtil_1.default.isFlowerCardId(l.cardId))
            return null;
        var p = null === (i = t.ins._gameContext) || void 0 === i ? void 0 : i.tile2SlotBarData, s = f.slotBarSnapshotBefore, d = !s.includes(l.id) && !s.includes(u.id);
        if (n.notRightClearEnable && d)
            return null;
        var y = n.stepCount && n.stepCount > 0, _ = Math.max(p.getTileStep(l.id), p.getTileStep(u.id));
        if (y && _ < n.stepCount)
            return null;
        var C = new Tile2ClearEffectEffect_1.Tile2ClearEffectEffect({
            tileIds: [l.id, u.id],
            cardIds: [l.cardId, u.cardId]
        });
        n.notRightClearEnable && (C.data.isRightClear = false);
        C.data.noClearStep = y ? n.stepCount : 0;
        return C;
    };
    Tile2FlowerClearTrait.prototype.onFlowerCS_chkFlowerEff = function (t, e) {
        t.ins;
        var r, o, i, n, l, c = null === (r = t.args) || void 0 === r ? void 0 : r[0], u = true;
        if (CardUtil_1.default.isFlowerCardId(null === (i = null === (o = null == c ? void 0 : c.data) || void 0 === o ? void 0 : o.cardIds) || void 0 === i ? void 0 : i[0])) {
            var f = null === (n = c.data) || void 0 === n ? void 0 : n.noClearStep, p = null === (l = c.data) || void 0 === l ? void 0 : l.isRightClear, s = null != f, d = null != p;
            u = d && s ? !p && f >= 0 : d ? !p : !s || f >= 0;
        }
        else
            u = false;
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: u
        });
    };
    Tile2FlowerClearTrait.traitKey = "Tile2FlowerClear";
    __decorate([
        mj.traitEvent("T2FlowerClr_clearCon")
    ], Tile2FlowerClearTrait.prototype, "getClearCondition", null);
    Tile2FlowerClearTrait = __decorate([
        mj.trait,
        mj.class("Tile2FlowerClearTrait")
    ], Tile2FlowerClearTrait);
    return Tile2FlowerClearTrait;
}(Trait_1.default));
exports.default = Tile2FlowerClearTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dlckNsZWFyVGlsZTIvU2NyaXB0cy9UaWxlMkZsb3dlckNsZWFyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxvRUFBK0Q7QUFDL0Qsa0ZBQWlGO0FBR2pGO0lBQW1ELHlDQUFLO0lBQXhEOztJQWtGQSxDQUFDO0lBaEZDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCx5REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxFQUFFO1lBQ0wsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELHlEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQzFDLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsNERBQTRCLEdBQTVCLFVBQTZCLENBQUM7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QUcsQ0FBQztRQUNOLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pELENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWCxJQUFJLGtCQUFRLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDM0osSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUNwRSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUNuRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsRUFDYixDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuRDs7WUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDO0lBaEZNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFLckM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO2tFQUdyQztJQVJrQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBa0Z6QztJQUFELDRCQUFDO0NBbEZELEFBa0ZDLENBbEZrRCxlQUFLLEdBa0Z2RDtrQkFsRm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCB7IFRpbGUyQ2xlYXJFZmZlY3RFZmZlY3QgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL1RpbGUyQ2xlYXJFZmZlY3RFZmZlY3QnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaWxlMkZsb3dlckNsZWFyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyRmxvd2VyQ2xlYXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMkZsb3dlckNsZWFyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyRmxvd2VyQ2xyX2NsZWFyQ29uXCIpXG4gIGdldENsZWFyQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG9uQ2xlYXJUMkhscF9uZXdDbHJFZmZFZmYodCwgZSkge1xuICAgIHZhciByID0gdGhpcy5jcmVhdGVUaWxlMkNsZWFyRWZmZWN0RWZmZWN0KHQpO1xuICAgIGlmIChyKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uQ2xlYXJUNEhscF9uZXdDbHJFZmZFZmYodCwgZSkge1xuICAgIHZhciByID0gdGhpcy5jcmVhdGVUaWxlMkNsZWFyRWZmZWN0RWZmZWN0KHQpO1xuICAgIGlmIChyKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIGNyZWF0ZVRpbGUyQ2xlYXJFZmZlY3RFZmZlY3QodCkge1xuICAgIHZhciBlLFxuICAgICAgcixcbiAgICAgIG8sXG4gICAgICBpLFxuICAgICAgbiA9IHRoaXMuZ2V0Q2xlYXJDb25kaXRpb24oKTtcbiAgICBpZiAoIW4pIHJldHVybiBudWxsO1xuICAgIHZhciBsID0gbnVsbCA9PT0gKGUgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGVbMF0sXG4gICAgICB1ID0gbnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbMV0sXG4gICAgICBmID0gbnVsbCA9PT0gKG8gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bMl07XG4gICAgaWYgKCFsIHx8ICF1IHx8ICFmKSByZXR1cm4gbnVsbDtcbiAgICBpZiAobCAmJiAhQ2FyZFV0aWwuaXNGbG93ZXJDYXJkSWQobC5jYXJkSWQpKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgcCA9IG51bGwgPT09IChpID0gdC5pbnMuX2dhbWVDb250ZXh0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLnRpbGUyU2xvdEJhckRhdGEsXG4gICAgICBzID0gZi5zbG90QmFyU25hcHNob3RCZWZvcmUsXG4gICAgICBkID0gIXMuaW5jbHVkZXMobC5pZCkgJiYgIXMuaW5jbHVkZXModS5pZCk7XG4gICAgaWYgKG4ubm90UmlnaHRDbGVhckVuYWJsZSAmJiBkKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgeSA9IG4uc3RlcENvdW50ICYmIG4uc3RlcENvdW50ID4gMCxcbiAgICAgIF8gPSBNYXRoLm1heChwLmdldFRpbGVTdGVwKGwuaWQpLCBwLmdldFRpbGVTdGVwKHUuaWQpKTtcbiAgICBpZiAoeSAmJiBfIDwgbi5zdGVwQ291bnQpIHJldHVybiBudWxsO1xuICAgIHZhciBDID0gbmV3IFRpbGUyQ2xlYXJFZmZlY3RFZmZlY3Qoe1xuICAgICAgdGlsZUlkczogW2wuaWQsIHUuaWRdLFxuICAgICAgY2FyZElkczogW2wuY2FyZElkLCB1LmNhcmRJZF1cbiAgICB9KTtcbiAgICBuLm5vdFJpZ2h0Q2xlYXJFbmFibGUgJiYgKEMuZGF0YS5pc1JpZ2h0Q2xlYXIgPSBmYWxzZSk7XG4gICAgQy5kYXRhLm5vQ2xlYXJTdGVwID0geSA/IG4uc3RlcENvdW50IDogMDtcbiAgICByZXR1cm4gQztcbiAgfVxuICBvbkZsb3dlckNTX2Noa0Zsb3dlckVmZih0LCBlKSB7XG4gICAgdC5pbnM7XG4gICAgdmFyIHIsXG4gICAgICBvLFxuICAgICAgaSxcbiAgICAgIG4sXG4gICAgICBsLFxuICAgICAgYyA9IG51bGwgPT09IChyID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByWzBdLFxuICAgICAgdSA9IHRydWU7XG4gICAgaWYgKENhcmRVdGlsLmlzRmxvd2VyQ2FyZElkKG51bGwgPT09IChpID0gbnVsbCA9PT0gKG8gPSBudWxsID09IGMgPyB2b2lkIDAgOiBjLmRhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uY2FyZElkcykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaVswXSkpIHtcbiAgICAgIHZhciBmID0gbnVsbCA9PT0gKG4gPSBjLmRhdGEpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4ubm9DbGVhclN0ZXAsXG4gICAgICAgIHAgPSBudWxsID09PSAobCA9IGMuZGF0YSkgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbC5pc1JpZ2h0Q2xlYXIsXG4gICAgICAgIHMgPSBudWxsICE9IGYsXG4gICAgICAgIGQgPSBudWxsICE9IHA7XG4gICAgICB1ID0gZCAmJiBzID8gIXAgJiYgZiA+PSAwIDogZCA/ICFwIDogIXMgfHwgZiA+PSAwO1xuICAgIH0gZWxzZSB1ID0gZmFsc2U7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB1XG4gICAgfSk7XG4gIH1cbn0iXX0=