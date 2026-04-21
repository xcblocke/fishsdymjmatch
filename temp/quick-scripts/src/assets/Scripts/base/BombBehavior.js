"use strict";
cc._RF.push(module, 'fd619qvgbJKioeTMLkC4vH5', 'BombBehavior');
// Scripts/base/BombBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BombBehavior = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var FadeNodeStateAni_1 = require("../tilenodes/fsm/ani/FadeNodeStateAni");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var BombBehavior = /** @class */ (function (_super) {
    __extends(BombBehavior, _super);
    function BombBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BombBehavior.prototype.start = function (e) {
        if (e.data.bombIds && 2 === e.data.bombIds.length) {
            var t = this.context.gameView.nodeTopEffectRoot, o = e.data.pos1, n = e.data.pos2, i = this.context.getTileNodeManager().getFirstLayer(), r = i.convertToWorldSpaceAR(o), a = i.convertToWorldSpaceAR(n), s = t.convertToNodeSpaceAR(r), c = t.convertToNodeSpaceAR(a), u = s.add(c).mul(0.5), p = e.data.bombIds[0], f = e.data.bombIds[1], d = this.context.getTileNodeByTileId(p), h = this.context.getTileNodeByTileId(f), y = null == d ? void 0 : d.cardNode, m = null == h ? void 0 : h.cardNode;
            if (d && h && y && m) {
                var v = y.parent.convertToWorldSpaceAR(y.position), g = m.parent.convertToWorldSpaceAR(m.position), _ = t.convertToNodeSpaceAR(v), T = t.convertToNodeSpaceAR(g);
                this.playBomb(t, u, _, T, d, h);
            }
            else
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    BombBehavior.prototype.getSpineAndBundleName = function () {
        return {
            name: "spine/bomb/gameplay_props",
            bundleName: "mainRes"
        };
    };
    BombBehavior.prototype.playBomb = function (e, t, o, n, i, r) {
        var l = this, s = this.getSpineAndBundleName(), c = s.name, u = s.bundleName, p = BaseSpine_1.default.create(c, "in_hammer", 1, function () {
            var e = p.getComponent(sp.Skeleton);
            e && e.destroy();
        }, false, u), f = BaseSpine_1.default.create(c, "in_hammer", 1, function () {
            var e = p.getComponent(sp.Skeleton);
            e && e.destroy();
        }, false, u);
        p.node.parent = e;
        p.node.position = t;
        f.node.parent = e;
        f.node.position = t;
        p.node.name = "bombNode1";
        f.node.name = "bombNode2";
        this.playMove(p, o, i, function () {
            mj.triggerInternalEvent("BombBhv_finish", l, [o, n]) || l.finish();
        });
        this.playMove(f, n, r, function () { });
    };
    BombBehavior.prototype.getDelayTime = function () {
        return 0.2;
    };
    BombBehavior.prototype.getMoveTime = function () {
        return 0.2;
    };
    BombBehavior.prototype.playMove = function (e, t, o, n) {
        var i = this;
        cc.tween(e.node).to(this.getMoveTime(), {
            position: t
        }).delay(this.getDelayTime()).call(function () {
            var e = new FadeNodeStateAni_1.FadeNodeStateAni(o.cardNode, o);
            o.attachNodeStateAnis([e]);
            o.forceExitPlayAttachExitAni(null, function () {
                i.context.removeTileNodeByTileId(o.tileObject.id);
            });
            i.context.gameView.playShake();
            var r = i.context.gameView.nodeTopEffectRoot, l = i.getSpineAndBundleName(), s = l.name, u = l.bundleName, p = BaseSpine_1.default.create(s, "in_broken", 1, null, true, u);
            p.node.parent = r;
            p.node.position = t;
            i.playAudio();
            null == n || n();
        }).delay(2).call(function () {
            cc.isValid(e.node) && e.node.destroy();
        }).start();
    };
    BombBehavior.prototype.playAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Hammer);
    };
    __decorate([
        mj.traitEvent("BombBhv_spineBundleName")
    ], BombBehavior.prototype, "getSpineAndBundleName", null);
    __decorate([
        mj.traitEvent("BombBhv_playBomb")
    ], BombBehavior.prototype, "playBomb", null);
    __decorate([
        mj.traitEvent("BombBhv_moveTime")
    ], BombBehavior.prototype, "getMoveTime", null);
    __decorate([
        mj.traitEvent("BombBhv_playAudio")
    ], BombBehavior.prototype, "playAudio", null);
    return BombBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BombBehavior = BombBehavior;

cc._RF.pop();