"use strict";
cc._RF.push(module, '6b9a1jxQEVBXoedKZXGpxx/', 'Tile2ClearBehavior');
// Scripts/base/Tile2ClearBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ClearBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2Interface_1 = require("../simulator/constant/Tile2Interface");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2ClearBehavior = /** @class */ (function (_super) {
    __extends(Tile2ClearBehavior, _super);
    function Tile2ClearBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flyTimeStep1Min = 0.18;
        _this.flyTimeStep1Max = 0.25;
        _this.flyTimeStep2Min = 0.035;
        _this.flyTimeStep2Max = 0.15;
        _this.halfWidthDev = 2;
        _this._type = TileTypeEnum_1.ETileType.Normal;
        return _this;
    }
    Tile2ClearBehavior.prototype.start = function (e) {
        var t, o = this, n = e.data.tileIds;
        if (!n || n.length < 2)
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        else {
            var i = this.context.getTileNodeMap(), r = i.get(n[0]), u = i.get(n[1]);
            if (r && u && r.cardNode && u.cardNode) {
                this._type = null === (t = null == r ? void 0 : r.tileObject) || void 0 === t ? void 0 : t.type;
                r.onClear();
                u.onClear();
                var p = this.context.gameView.nodeDragCardRoot, f = this.context.gameView.slotBarView;
                this.moveNodeToDragRoot(r, p);
                this.moveNodeToDragRoot(u, p);
                null == f || f.removeSlotBar([n[0], n[1]]);
                var d = r.cardNode.position.x >= u.cardNode.position.x;
                this.applyZIndex(r, d);
                this.applyZIndex(u, !d);
                var h = r.tileObject.checkHasType(TileTypeEnum_1.ETileType.RankCard), y = r.cardNode.convertToWorldSpaceAR(cc.v2(0, 0)), m = u.cardNode.convertToWorldSpaceAR(cc.v2(0, 0)), v = cc.v3((y.x + m.x) / 2, (y.y + m.y) / 2, 0);
                this.context.setLastCollisionWorldPos(v);
                var g = this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3, _ = e.data.clearType;
                if (g && _ == Tile2Interface_1.ETile2ClearType.OutSlotBar) {
                    this.playMatchAudio(h);
                    this.onTileClearCollision();
                    this.context.removeTileNodeByTileIds([n[0], n[1]]);
                    this.finish();
                }
                else {
                    this.playKillCardAnimation(r.cardNode, u.cardNode, r.cardNode.width, r.cardNode.height, function (e) {
                        o.context.setLastCollisionWorldPos(e);
                        o.playMatchAudio(h);
                        o.onTileClearCollision();
                        o.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    }, function () {
                        o.context.removeTileNodeByTileIds([n[0], n[1]]);
                    });
                    var T = r.shadowCardNode, C = u.shadowCardNode;
                    cc.isValid(T) && cc.isValid(C) && this.playKillCardAnimation(T, C, r.cardNode.width, r.cardNode.height);
                }
            }
            else
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
    };
    Tile2ClearBehavior.prototype.moveNodeToDragRoot = function (e, t) {
        var o = function o(e) {
            var o = e.convertToWorldSpaceAR(cc.v2(0, 0));
            return t.convertToNodeSpaceAR(o);
        }, n = e.cardNode, i = e.shadowCardNode, r = o(n);
        n.parent = t;
        n.zIndex = 8000;
        n.position = cc.v3(r.x, r.y, 0);
        if (i && cc.isValid(i)) {
            var a = o(i);
            i.parent = t;
            i.position = cc.v3(a.x, a.y, 0);
            i.zIndex = 7000;
            i._shadowOffset = cc.v3(i.position.x - n.position.x, i.position.y - n.position.y, 0);
        }
    };
    Tile2ClearBehavior.prototype.applyZIndex = function (e, t) {
        e.cardNode.zIndex = t ? 1 : 0;
        e.shadowCardNode && cc.isValid(e.shadowCardNode) && (e.shadowCardNode.zIndex = t ? -1 : -2);
    };
    Tile2ClearBehavior.prototype.playKillCardAnimation = function (e, t, o, n, i, r) {
        if (o === void 0) { o = 216; }
        if (n === void 0) { n = 268; }
        var a, l, s = e.getPosition(), c = t.getPosition();
        if (Math.abs(s.x - c.x) < 0.01) {
            a = s.y <= c.y ? e : t;
            l = s.y > c.y ? e : t;
        }
        else {
            a = s.x < c.x ? e : t;
            l = s.x >= c.x ? e : t;
        }
        var u = a.getPosition().add(l.getPosition()).mulSelf(0.5), p = cc.v3(u.x, u.y, 0), f = this.getTargetPosList(a, p, o, true), d = this.getTargetPosList(l, p, o, false), h = e.parent.convertToWorldSpaceAR(p);
        this.playKillAnimation(a, f);
        this.playKillAnimation(l, d, function () {
            return null == i ? void 0 : i(h);
        }, r);
    };
    Tile2ClearBehavior.prototype.getTargetPosList = function (e, t, o, n) {
        var i = n ? -1 : 1, r = e.getPosition().clone();
        r.x += 0.5 * o * this.halfWidthDev * i * e.scaleX;
        r.y = t.y;
        return [cc.v3(r.x, r.y), t.clone()];
    };
    Tile2ClearBehavior.prototype.playKillAnimation = function (e, t, o, n) {
        if (e && cc.isValid(e) && t.length) {
            var i = cc.v2(e.width, 3 * e.height).len(), r = e.width, a = cc.Vec2.distance(t[0], e.position), l = cc.misc.clampf((a - r) / (i - r), 0, 1), s = cc.misc.lerp(this.flyTimeStep1Min, this.flyTimeStep1Max, l), c = 3 * e.width, u = e.width, p = Math.abs(t[1].x - t[0].x), f = cc.misc.clampf((p - u) / (c - u), 0, 1), d = cc.misc.lerp(this.flyTimeStep2Min, this.flyTimeStep2Max, f);
            cc.tween(e).to(s, {
                position: t[0]
            }, {
                easing: cc.easing.circOut
            }).to(d, {
                position: t[1]
            }, {
                easing: cc.easing.cubicIn
            }).call(function () {
                null == o || o();
                null == n || n();
            }).start();
        }
        else {
            null == o || o();
            null == n || n();
        }
    };
    Tile2ClearBehavior.prototype.onTileClearCollision = function () { };
    Tile2ClearBehavior.prototype.onAbort = function () {
        var e = this.effect.data.tileIds;
        if (e && 2 == e.length) {
            this.context.removeTileNodeByTileIds(e);
            var t = this.context.gameView.slotBarView;
            null == t || t.removeSlotBar(e);
        }
    };
    Tile2ClearBehavior.prototype.playMatchAudio = function (e) {
        if (e) {
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.SpecialTouch);
        }
        else {
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Match);
        }
    };
    __decorate([
        mj.traitEvent("T2ClearBhv_collision")
    ], Tile2ClearBehavior.prototype, "onTileClearCollision", null);
    return Tile2ClearBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ClearBehavior = Tile2ClearBehavior;

cc._RF.pop();