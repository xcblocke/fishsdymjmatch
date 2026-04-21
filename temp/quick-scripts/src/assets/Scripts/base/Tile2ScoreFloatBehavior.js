"use strict";
cc._RF.push(module, 'b834c/2GC5NWpW+q4Km2mRS', 'Tile2ScoreFloatBehavior');
// Scripts/base/Tile2ScoreFloatBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ScoreFloatBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2ScoreFloatItem_1 = require("../items/Tile2ScoreFloatItem");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ScoreFloatBehavior = /** @class */ (function (_super) {
    __extends(Tile2ScoreFloatBehavior, _super);
    function Tile2ScoreFloatBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ScoreFloatBehavior.prototype.start = function (e) {
        var t = this, o = e.data, n = o.addScore, i = o.isCombo, r = o.isMagnetMerge;
        (i ? Tile2ScoreFloatItem_1.default.createCombo() : Tile2ScoreFloatItem_1.default.createNormal()).then(function (e) {
            if (e) {
                var o = t.context.gameView.nodeTopEffectRoot;
                e.node.parent = o;
                var i = t.getWorldPos(r);
                e.node.position = t.getFloatPosition(o, r);
                e.setScore(n);
                var l = t.getHolderLocalPosition(o);
                if (l) {
                    var s = t.getSpawnZone(i);
                    e.playFlyToHolderAnimation(l, s, function () {
                        return t.onArriveAtHolder();
                    }, function () {
                        return t.onComplete();
                    });
                }
                else {
                    t.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    e.node.destroy();
                }
            }
            else
                t.finish(GameInputEnum_1.EBehaviorEnum.Success);
        });
    };
    Tile2ScoreFloatBehavior.prototype.getWorldPos = function (e) {
        if (!e)
            return this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0);
        var t = this.getOffset(true), o = this.context.gameView, n = null == o ? void 0 : o.getSlotBarNode();
        if (!n || !cc.isValid(n))
            return cc.v3(0, 0, 0);
        var i = n.convertToWorldSpaceAR(t);
        return cc.v3(i.x, i.y, 0);
    };
    Tile2ScoreFloatBehavior.prototype.getOffset = function () {
        return cc.v2(0, 0);
    };
    Tile2ScoreFloatBehavior.prototype.getFloatPosition = function (e, t) {
        var o = this.getWorldPos(t), n = e.convertToNodeSpaceAR(o), i = this.getFloatOffset();
        return cc.v3(n.x + i.x, n.y + i.y, 0);
    };
    Tile2ScoreFloatBehavior.prototype.getFloatOffset = function () {
        return cc.v2(0, 100);
    };
    Tile2ScoreFloatBehavior.prototype.getSpawnZone = function (e) {
        var t, o = null === (t = cc.Canvas.instance) || void 0 === t ? void 0 : t.node;
        if (!o || !cc.isValid(o))
            return 5;
        var n = o.convertToNodeSpaceAR(e), i = o.getContentSize(), r = o.anchorY, a = i.height * (1 - r), l = -i.height * r, s = (a - n.y) / (a - l);
        return Math.min(10, Math.max(1, Math.floor(10 * s) + 1));
    };
    Tile2ScoreFloatBehavior.prototype.getHolderLocalPosition = function (e) {
        var t, o, n = null === (o = null === (t = this.context.gameView.nodeTopView) || void 0 === t ? void 0 : t.scoreItem) || void 0 === o ? void 0 : o.node;
        if (!n || !cc.isValid(n))
            return null;
        var i = n.convertToWorldSpaceAR(cc.v2(0, 0));
        return e.convertToNodeSpaceAR(i);
    };
    Tile2ScoreFloatBehavior.prototype.onArriveAtHolder = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2ScoreFloatBehavior.prototype.onComplete = function () { };
    __decorate([
        mj.traitEvent("T2ScoreFloatBhv_worldPos")
    ], Tile2ScoreFloatBehavior.prototype, "getWorldPos", null);
    __decorate([
        mj.traitEvent("T2ScoreFloatBhv_offset")
    ], Tile2ScoreFloatBehavior.prototype, "getOffset", null);
    return Tile2ScoreFloatBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ScoreFloatBehavior = Tile2ScoreFloatBehavior;

cc._RF.pop();