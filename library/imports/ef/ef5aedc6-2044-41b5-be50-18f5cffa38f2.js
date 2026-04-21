"use strict";
cc._RF.push(module, 'ef5ae3GIERBtb5QGPXP+jjy', 'CollectFlyBehavior');
// Scripts/base/CollectFlyBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectFlyBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var CommonUtils_1 = require("../framework/utils/CommonUtils");
var enumRes_1 = require("../constant/enumRes");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var CollectFlyBehavior = /** @class */ (function (_super) {
    __extends(CollectFlyBehavior, _super);
    function CollectFlyBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 2000;
        _this._trailParticleNode = null;
        return _this;
    }
    CollectFlyBehavior.prototype.start = function (e) {
        var t = this;
        try {
            var o = e.data;
            if (!o.collectKey) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            var n = this.context.getLastCollisionWorldPos();
            if (!n) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            var i = this.context.getCollectTargetPosition(o.collectKey);
            if (!i) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            this.playFlyAudio(e.data.tileType);
            var a = cc.v3(n.x, n.y, 0), l = i, c = o.particlePoolName || enumRes_1.PoolName.ScoreFlyTrail, u = void 0 !== o.trailOffsetY ? o.trailOffsetY : 0;
            this.createTrailParticle(a, c);
            if (!this._trailParticleNode) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            var p = this.calculateTrailTargetPosition(a, l, u), f = o.flightTime;
            if (!f || f <= 0) {
                var d = this.calculateDistance(a, p);
                f = this.calculateFlightTime(d);
            }
            var h = this.context.gameView.effectNode.convertToNodeSpaceAR(p);
            cc.tween(this._trailParticleNode).to(f, {
                position: h
            }, {
                easing: "sineInOut"
            }).call(function () {
                t.stopTrailParticle();
            }).call(function () {
                t.cleanupTrailParticle();
                t.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }).start();
        }
        catch (e) {
            this.cleanupTrailParticle();
            this.fail("收集飞行效果执行失败");
        }
    };
    CollectFlyBehavior.prototype.playFlyAudio = function (e) {
        var t = 0;
        switch (e) {
            case TileTypeEnum_1.ETileType.RollCard:
                t = GameTypeEnums_1.EAudioID.Targetfly3;
                break;
            case TileTypeEnum_1.ETileType.Yoga:
                break;
            case TileTypeEnum_1.ETileType.ColorCard:
            default:
                t = GameTypeEnums_1.EAudioID.Targetfly3;
        }
        t && mj.audioManager.playEffect(t);
    };
    CollectFlyBehavior.prototype.createTrailParticle = function (e, t) {
        try {
            this._trailParticleNode = this.context.gameView.gameObjectPool.get(enumRes_1.PoolName[t]);
            if (!this._trailParticleNode)
                return;
            this._trailParticleNode.active = true;
            this._trailParticleNode.parent = this.context.gameView.effectNode;
            this._trailParticleNode.position = this.context.gameView.effectNode.convertToNodeSpaceAR(e);
            this._trailParticleNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
                e.resetSystem();
                e.speed *= CommonUtils_1.AniTimeScale.get();
            });
        }
        catch (e) { }
    };
    CollectFlyBehavior.prototype.calculateTrailTargetPosition = function (e, t, o) {
        if (o === void 0) { o = 60; }
        if (!e || !t)
            return cc.v3((null == t ? void 0 : t.x) || 0, ((null == t ? void 0 : t.y) || 0) - o, 0);
        var n = cc.v3(t.x - e.x, t.y - e.y, 0);
        if (Math.sqrt(n.x * n.x + n.y * n.y) < 0.001)
            return cc.v3(t.x, t.y - o, 0);
        var i = 0;
        Math.abs(n.y) > 0.001 && (i = -(i = n.x / n.y * o));
        i = Math.max(-50, Math.min(50, i));
        return cc.v3(t.x + i, t.y - o, 0);
    };
    CollectFlyBehavior.prototype.calculateDistance = function (e, t) {
        var o = t.x - e.x, n = t.y - e.y;
        return Math.sqrt(o * o + n * n);
    };
    CollectFlyBehavior.prototype.calculateFlightTime = function (e) {
        var t = e / 800;
        return Math.max(0.1, Math.min(0.8, t));
    };
    CollectFlyBehavior.prototype.stopTrailParticle = function () {
        if (this._trailParticleNode && cc.isValid(this._trailParticleNode))
            try {
                this._trailParticleNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
                    e.stopSystem();
                });
            }
            catch (e) { }
    };
    CollectFlyBehavior.prototype.cleanupTrailParticle = function () {
        if (this._trailParticleNode && cc.isValid(this._trailParticleNode))
            try {
                this._trailParticleNode.getComponentsInChildren(cc.ParticleSystem).forEach(function (e) {
                    e.stopSystem();
                });
                var e = enumRes_1.PoolName.ScoreFlyTrail;
                this.context.gameView.gameObjectPool.push(e, this._trailParticleNode);
                this._trailParticleNode = null;
            }
            catch (e) { }
    };
    CollectFlyBehavior.prototype.onAbort = function () {
        this.cleanupTrailParticle();
        _super.prototype.onAbort.call(this);
    };
    return CollectFlyBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.CollectFlyBehavior = CollectFlyBehavior;

cc._RF.pop();