
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2HitTipsBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e813emJo6ZOobbxjro3hbvw', 'Tile2HitTipsBehavior');
// Scripts/base/Tile2HitTipsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HitTipsBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var Tile2HitTipsBehavior = /** @class */ (function (_super) {
    __extends(Tile2HitTipsBehavior, _super);
    function Tile2HitTipsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2HitTipsBehavior.prototype.start = function (e) {
        var t, o, n = e.data.isClearHit, i = this.context.getTileNodeMap();
        if (n) {
            var r = e.data.tileId1, s = e.data.tileId2;
            null === (t = i.get(r)) || void 0 === t || t.hidePropHint();
            null === (o = i.get(s)) || void 0 === o || o.hidePropHint();
            this.removeFlipHand();
            this.onClearHint(e);
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else {
            var c = e.data.tileId1, u = e.data.tileId2, p = e.data.flipId;
            if (c && u) {
                var f = i.get(c), d = i.get(u);
                null == f || f.showPropHint();
                null == d || d.showPropHint();
                this.triggerShowHintEvent(e);
                p && this.showFlipHand(p);
            }
            else
                this.showNoHintTips();
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Hint);
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
    };
    Tile2HitTipsBehavior.prototype.triggerShowHintEvent = function () { };
    Tile2HitTipsBehavior.prototype.onClearHint = function () { };
    Tile2HitTipsBehavior.prototype.showFlipHand = function (e) {
        var t, o = this.context.getTileNodeWorldPosition(e);
        if (o) {
            var n = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.node;
            if (cc.isValid(n)) {
                var i = BaseSpine_1.default.create("spine/guide/gameplay_guide_finger", "in", 1, function () {
                    cc.isValid(i.node) && GameUtils_1.default.playSpine(i.getSkeleton(), "init", true);
                }, false);
                n.addChild(i.node, 9999);
                var r = n.convertToNodeSpaceAR(cc.v3(o.x, o.y, 0));
                i.node.position = r;
                i.node.setSiblingIndex(0);
                i.node.name = "HitTipsFlipHand";
            }
        }
    };
    Tile2HitTipsBehavior.prototype.removeFlipHand = function () {
        var e, t, o, n = null === (o = null === (t = null === (e = this._context) || void 0 === e ? void 0 : e.gameView) || void 0 === t ? void 0 : t.node) || void 0 === o ? void 0 : o.getChildByName("HitTipsFlipHand");
        cc.isValid(n) && n.destroy();
    };
    Tile2HitTipsBehavior.prototype.showNoHintTips = function () {
        var e = I18NStrings.get("Tile4_tip_tool_cannot_use", "Try using other props to solve this challenge");
        mj.EventManager.emit("SHOWTILE2TIPS", e);
    };
    __decorate([
        mj.traitEvent("Tile2HitTipsBhv_trgHint")
    ], Tile2HitTipsBehavior.prototype, "triggerShowHintEvent", null);
    __decorate([
        mj.traitEvent("Tile2HitTipsBhv_clrHint")
    ], Tile2HitTipsBehavior.prototype, "onClearHint", null);
    return Tile2HitTipsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2HitTipsBehavior = Tile2HitTipsBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJIaXRUaXBzQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUsMEVBQW9FO0FBQ3BFLDhEQUF5RDtBQUN6RCx5REFBd0Q7QUFDeEQsMkRBQXNEO0FBQ3REO0lBQTBDLHdDQUFpQjtJQUEzRDs7SUE4REEsQ0FBQztJQTdEQyxvQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNyQixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDNUQsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3BCLENBQUMs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SyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4TSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsNkNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsK0NBQStDLENBQUMsQ0FBQztRQUN0RyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQTlCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7b0VBQ2hCO0lBRXpCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzsyREFDekI7SUE2QmxCLDJCQUFDO0NBOURELEFBOERDLENBOUR5QyxxQ0FBaUIsR0E4RDFEO0FBOURZLG9EQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5leHBvcnQgY2xhc3MgVGlsZTJIaXRUaXBzQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuID0gZS5kYXRhLmlzQ2xlYXJIaXQsXG4gICAgICBpID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCk7XG4gICAgaWYgKG4pIHtcbiAgICAgIHZhciByID0gZS5kYXRhLnRpbGVJZDEsXG4gICAgICAgIHMgPSBlLmRhdGEudGlsZUlkMjtcbiAgICAgIG51bGwgPT09ICh0ID0gaS5nZXQocikpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmhpZGVQcm9wSGludCgpO1xuICAgICAgbnVsbCA9PT0gKG8gPSBpLmdldChzKSkgfHwgdm9pZCAwID09PSBvIHx8IG8uaGlkZVByb3BIaW50KCk7XG4gICAgICB0aGlzLnJlbW92ZUZsaXBIYW5kKCk7XG4gICAgICB0aGlzLm9uQ2xlYXJIaW50KGUpO1xuICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGMgPSBlLmRhdGEudGlsZUlkMSxcbiAgICAgICAgdSA9IGUuZGF0YS50aWxlSWQyLFxuICAgICAgICBwID0gZS5kYXRhLmZsaXBJZDtcbiAgICAgIGlmIChjICYmIHUpIHtcbiAgICAgICAgdmFyIGYgPSBpLmdldChjKSxcbiAgICAgICAgICBkID0gaS5nZXQodSk7XG4gICAgICAgIG51bGwgPT0gZiB8fCBmLnNob3dQcm9wSGludCgpO1xuICAgICAgICBudWxsID09IGQgfHwgZC5zaG93UHJvcEhpbnQoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyU2hvd0hpbnRFdmVudChlKTtcbiAgICAgICAgcCAmJiB0aGlzLnNob3dGbGlwSGFuZChwKTtcbiAgICAgIH0gZWxzZSB0aGlzLnNob3dOb0hpbnRUaXBzKCk7XG4gICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5IaW50KTtcbiAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJIaXRUaXBzQmh2X3RyZ0hpbnRcIilcbiAgdHJpZ2dlclNob3dIaW50RXZlbnQoKSB7fVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUySGl0VGlwc0Jodl9jbHJIaW50XCIpXG4gIG9uQ2xlYXJIaW50KCkge31cbiAgc2hvd0ZsaXBIYW5kKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVXb3JsZFBvc2l0aW9uKGUpO1xuICAgIGlmIChvKSB7XG4gICAgICB2YXIgbiA9IG51bGwgPT09ICh0ID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm5vZGU7XG4gICAgICBpZiAoY2MuaXNWYWxpZChuKSkge1xuICAgICAgICB2YXIgaSA9IEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS9ndWlkZS9nYW1lcGxheV9ndWlkZV9maW5nZXJcIiwgXCJpblwiLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2MuaXNWYWxpZChpLm5vZGUpICYmIEdhbWVVdGlscy5wbGF5U3BpbmUoaS5nZXRTa2VsZXRvbigpLCBcImluaXRcIiwgdHJ1ZSk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgbi5hZGRDaGlsZChpLm5vZGUsIDk5OTkpO1xuICAgICAgICB2YXIgciA9IG4uY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjMoby54LCBvLnksIDApKTtcbiAgICAgICAgaS5ub2RlLnBvc2l0aW9uID0gcjtcbiAgICAgICAgaS5ub2RlLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgaS5ub2RlLm5hbWUgPSBcIkhpdFRpcHNGbGlwSGFuZFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW1vdmVGbGlwSGFuZCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgbiA9IG51bGwgPT09IChvID0gbnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuX2NvbnRleHQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubm9kZSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRDaGlsZEJ5TmFtZShcIkhpdFRpcHNGbGlwSGFuZFwiKTtcbiAgICBjYy5pc1ZhbGlkKG4pICYmIG4uZGVzdHJveSgpO1xuICB9XG4gIHNob3dOb0hpbnRUaXBzKCkge1xuICAgIHZhciBlID0gSTE4TlN0cmluZ3MuZ2V0KFwiVGlsZTRfdGlwX3Rvb2xfY2Fubm90X3VzZVwiLCBcIlRyeSB1c2luZyBvdGhlciBwcm9wcyB0byBzb2x2ZSB0aGlzIGNoYWxsZW5nZVwiKTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChcIlNIT1dUSUxFMlRJUFNcIiwgZSk7XG4gIH1cbn0iXX0=