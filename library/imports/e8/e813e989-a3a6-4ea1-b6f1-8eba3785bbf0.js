"use strict";
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