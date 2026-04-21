"use strict";
cc._RF.push(module, '21a1a1QqwRIe4uRigMu9tqD', 'ScoreFloatBehavior');
// Scripts/base/ScoreFloatBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreFloatBehavior = void 0;
var CommonUtils_1 = require("../framework/utils/CommonUtils");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var enumRes_1 = require("../constant/enumRes");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ScoreFloatBehavior = /** @class */ (function (_super) {
    __extends(ScoreFloatBehavior, _super);
    function ScoreFloatBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._trailParticleNode = null;
        return _this;
    }
    ScoreFloatBehavior.prototype.start = function (e) {
        var t = this, o = e.data.addScore, n = e.data.isCombo, i = this.context.getTileNodeMap().get(e.data.tileId);
        if (i || e.data.size) {
            var r = this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0);
            if (e.data.size) {
                this._tileNodeSize = e.data.size;
            }
            else {
                this._tileNodeSize = i.info.tileObject.getContentSize();
            }
            var a = this.context.gameView.nodeTopEffectRoot, c = n ? enumRes_1.PoolName.ScoreFloatCombo : enumRes_1.PoolName.ScoreFloatNormal, u = this.context.gameView.gameObjectPool.get(c);
            if (u) {
                u.active = true;
                u.parent = a;
                var p = a.convertToNodeSpaceAR(r);
                u.position = cc.v3(p.x, p.y + 180, 0);
                var f = u.getChildByName("labelScore").getComponent(cc.Label);
                f && (f.string = "+" + o);
                u.scale = 0;
                var d = this.stayTime(), h = this.getScale();
                cc.tween(u).to(0.2, {
                    scale: h.inScale
                }, {
                    easing: "sineIn"
                }).to(0.1, {
                    scale: h.outScale
                }, {
                    easing: "sineOut"
                }).delay(d).call(function () {
                    if (cc.isValid(u)) {
                        t.startFlightAnimation(u, c, n);
                    }
                    else {
                        t.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    }
                }).start();
            }
            else
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    ScoreFloatBehavior.prototype.stayTime = function () {
        return 0;
    };
    ScoreFloatBehavior.prototype.getScale = function () {
        return {
            inScale: 1.1,
            outScale: 1
        };
    };
    ScoreFloatBehavior.prototype.startFlightAnimation = function (e, t, o) {
        if (o === void 0) { o = false; }
        var n = this;
        if (cc.isValid(e)) {
            var i = this.getTopScorePosition();
            if (i) {
                var r = e.position, a = e.parent.convertToNodeSpaceAR(i), s = this.calculateDistance(r, a), c = this.calculateFlightTime(s);
                cc.tween(e).parallel(cc.tween(e).to(c, {
                    position: a
                }, {
                    easing: "sineInOut"
                }), cc.tween(e).to(c, {
                    scale: 0
                }, {
                    easing: "linear"
                })).call(function () {
                    n.context.gameView.gameObjectPool.push(t, e);
                    n.finish(GameInputEnum_1.EBehaviorEnum.Success);
                }).start();
                if (o) {
                    this.createTrailParticle(e);
                    if (this._trailParticleNode) {
                        var u = this.calculateTrailTargetPosition(r, a, 0), p = this.calculateDistance(r, u), f = this.calculateFlightTime(p);
                        cc.tween(this._trailParticleNode).to(f, {
                            position: u
                        }, {
                            easing: "sineInOut"
                        }).call(function () {
                            n.stopTrailParticle();
                        }).delay(0.25).call(function () {
                            n.cleanupTrailParticle();
                        }).start();
                    }
                }
            }
            else {
                this.context.gameView.gameObjectPool.push(t, e);
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    ScoreFloatBehavior.prototype.getTopScorePosition = function () {
        try {
            var e = this.context.gameView.scoreItemNode;
            if (!e || !cc.isValid(e))
                return null;
            var t = e.convertToWorldSpaceAR(cc.v2(0, 0));
            return cc.v3(t.x, t.y, 0);
        }
        catch (e) {
            return null;
        }
    };
    ScoreFloatBehavior.prototype.calculateDistance = function (e, t) {
        var o = t.x - e.x, n = t.y - e.y;
        return Math.sqrt(o * o + n * n);
    };
    ScoreFloatBehavior.prototype.calculateFlightTime = function (e) {
        var t = this._tileNodeSize.height, o = Math.ceil(e / t);
        return Math.max(0.1, Math.min(0.5, 0.1 + 0.1 * (o - 1)));
    };
    ScoreFloatBehavior.prototype.createTrailParticle = function (e) {
        try {
            this._trailParticleNode = this.context.gameView.gameObjectPool.get(enumRes_1.PoolName.ScoreFlyTrail);
            if (!this._trailParticleNode)
                return;
            this._trailParticleNode.active = true;
            this._trailParticleNode.parent = e.parent;
            this._trailParticleNode.position = e.position;
            this._trailParticleNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
                e.resetSystem();
                e.speed *= CommonUtils_1.AniTimeScale.get();
            });
        }
        catch (e) { }
    };
    ScoreFloatBehavior.prototype.calculateTrailTargetPosition = function (e, t, o) {
        if (o === void 0) { o = 60; }
        if (!e || !t)
            return cc.v3((null == t ? void 0 : t.x) || 0, ((null == t ? void 0 : t.y) || 0) - o, 0);
        var n = cc.v3(t.x - e.x, t.y - e.y, 0);
        if (Math.sqrt(n.x * n.x + n.y * n.y) < 0.001)
            return cc.v3(t.x, t.y - o, 0);
        Math.atan2(n.y, n.x);
        var i = 0;
        i = Math.abs(n.y) > 0.001 ? -(i = n.x / n.y * o) : 0;
        i = Math.max(-50, Math.min(50, i));
        return cc.v3(t.x + i, t.y - o, 0);
    };
    ScoreFloatBehavior.prototype.stopTrailParticle = function () {
        if (this._trailParticleNode && cc.isValid(this._trailParticleNode))
            try {
                this._trailParticleNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
                    e.stopSystem();
                });
            }
            catch (e) { }
    };
    ScoreFloatBehavior.prototype.cleanupTrailParticle = function () {
        if (this._trailParticleNode && cc.isValid(this._trailParticleNode))
            try {
                this._trailParticleNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
                    e.stopSystem();
                });
                this.context.gameView.gameObjectPool.push(enumRes_1.PoolName.ScoreFlyTrail, this._trailParticleNode);
                this._trailParticleNode = null;
            }
            catch (e) { }
    };
    __decorate([
        mj.traitEvent("ScrFloatBhv_stayTime")
    ], ScoreFloatBehavior.prototype, "stayTime", null);
    __decorate([
        mj.traitEvent("ScrFloatBhv_getScale")
    ], ScoreFloatBehavior.prototype, "getScale", null);
    __decorate([
        mj.traitEvent("ScrFloatBhv_getTopPos")
    ], ScoreFloatBehavior.prototype, "getTopScorePosition", null);
    return ScoreFloatBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ScoreFloatBehavior = ScoreFloatBehavior;

cc._RF.pop();