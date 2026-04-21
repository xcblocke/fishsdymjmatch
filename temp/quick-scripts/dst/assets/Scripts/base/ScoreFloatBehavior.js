
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ScoreFloatBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvU2NvcmVGbG9hdEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQThEO0FBQzlELHFFQUFvRTtBQUNwRSwrQ0FBK0M7QUFDL0MseURBQXdEO0FBQ3hEO0lBQXdDLHNDQUFpQjtJQUF6RDtRQUFBLHFFQWdLQztRQS9KQyx3QkFBa0IsR0FBRyxJQUFJLENBQUM7O0lBK0o1QixDQUFDO0lBOUpDLGtDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDbkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3pEO1lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxrQkFBUSxDQUFDLGdCQUFnQixFQUM1RCxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsRUFBRTtnQkFDTCxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5RCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTztpQkFDakIsRUFBRTtvQkFDRCxNQUFNLEVBQUUsUUFBUTtpQkFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRO2lCQUNsQixFQUFFO29CQUNELE1BQU0sRUFBRSxTQUFTO2lCQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDZixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pCLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNqQzt5QkFBTTt3QkFDTCxDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ2pDO2dCQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ1o7O2dCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQzs7WUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsT0FBTztZQUNMLE9BQU8sRUFBRSxHQUFHO1lBQ1osUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDO0lBQ0osQ0FBQztJQUNELGlEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQVM7UUFBVCxrQkFBQSxFQUFBLFNBQVM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUNwQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDaEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUNyQyxRQUFRLEVBQUUsQ0FBQztpQkFDWixFQUFFO29CQUNELE1BQU0sRUFBRSxXQUFXO2lCQUNwQixDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUNwQixLQUFLLEVBQUUsQ0FBQztpQkFDVCxFQUFFO29CQUNELE1BQU0sRUFBRSxRQUFRO2lCQUNqQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTt3QkFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ2hELENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNoQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNsQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7NEJBQ3RDLFFBQVEsRUFBRSxDQUFDO3lCQUNaLEVBQUU7NEJBQ0QsTUFBTSxFQUFFLFdBQVc7eUJBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ04sQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7d0JBQ3hCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ2xCLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO3dCQUMzQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDWjtpQkFDRjthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7U0FDRjs7WUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGdEQUFtQixHQUFuQjtRQUNFLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDNUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBQ0QsOENBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsZ0RBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQy9CLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDRCxnREFBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixJQUFJO1lBQ0YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzRixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtnQkFBRSxPQUFPO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDOUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUNwRixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxLQUFLLElBQUksMEJBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtJQUNoQixDQUFDO0lBQ0QseURBQTRCLEdBQTVCLFVBQTZCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBTTtRQUFOLGtCQUFBLEVBQUEsTUFBTTtRQUN2QyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLO1lBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCw4Q0FBaUIsR0FBakI7UUFDRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUFFLElBQUk7Z0JBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztvQkFDcEYsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQzthQUNKO1lBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtJQUNoQixDQUFDO0lBQ0QsaURBQW9CLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFBRSxJQUFJO2dCQUN0RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7b0JBQ3BGLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDM0YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQzthQUNoQztZQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7SUFDaEIsQ0FBQztJQWpIRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7c0RBR3JDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3NEQU1yQztJQThDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7aUVBVXRDO0lBa0RILHlCQUFDO0NBaEtELEFBZ0tDLENBaEt1QyxxQ0FBaUIsR0FnS3hEO0FBaEtZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaVRpbWVTY2FsZSB9IGZyb20gJy4uL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5pbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgUG9vbE5hbWUgfSBmcm9tICcuLi9jb25zdGFudC9lbnVtUmVzJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgU2NvcmVGbG9hdEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBfdHJhaWxQYXJ0aWNsZU5vZGUgPSBudWxsO1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IGUuZGF0YS5hZGRTY29yZSxcbiAgICAgIG4gPSBlLmRhdGEuaXNDb21ibyxcbiAgICAgIGkgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKS5nZXQoZS5kYXRhLnRpbGVJZCk7XG4gICAgaWYgKGkgfHwgZS5kYXRhLnNpemUpIHtcbiAgICAgIHZhciByID0gdGhpcy5jb250ZXh0LmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpIHx8IGNjLnYzKDAsIDAsIDApO1xuICAgICAgaWYgKGUuZGF0YS5zaXplKSB7XG4gICAgICAgIHRoaXMuX3RpbGVOb2RlU2l6ZSA9IGUuZGF0YS5zaXplO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGlsZU5vZGVTaXplID0gaS5pbmZvLnRpbGVPYmplY3QuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3Lm5vZGVUb3BFZmZlY3RSb290LFxuICAgICAgICBjID0gbiA/IFBvb2xOYW1lLlNjb3JlRmxvYXRDb21ibyA6IFBvb2xOYW1lLlNjb3JlRmxvYXROb3JtYWwsXG4gICAgICAgIHUgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZ2FtZU9iamVjdFBvb2wuZ2V0KGMpO1xuICAgICAgaWYgKHUpIHtcbiAgICAgICAgdS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB1LnBhcmVudCA9IGE7XG4gICAgICAgIHZhciBwID0gYS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihyKTtcbiAgICAgICAgdS5wb3NpdGlvbiA9IGNjLnYzKHAueCwgcC55ICsgMTgwLCAwKTtcbiAgICAgICAgdmFyIGYgPSB1LmdldENoaWxkQnlOYW1lKFwibGFiZWxTY29yZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBmICYmIChmLnN0cmluZyA9IFwiK1wiICsgbyk7XG4gICAgICAgIHUuc2NhbGUgPSAwO1xuICAgICAgICB2YXIgZCA9IHRoaXMuc3RheVRpbWUoKSxcbiAgICAgICAgICBoID0gdGhpcy5nZXRTY2FsZSgpO1xuICAgICAgICBjYy50d2Vlbih1KS50bygwLjIsIHtcbiAgICAgICAgICBzY2FsZTogaC5pblNjYWxlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwic2luZUluXCJcbiAgICAgICAgfSkudG8oMC4xLCB7XG4gICAgICAgICAgc2NhbGU6IGgub3V0U2NhbGVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJzaW5lT3V0XCJcbiAgICAgICAgfSkuZGVsYXkoZCkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQodSkpIHtcbiAgICAgICAgICAgIHQuc3RhcnRGbGlnaHRBbmltYXRpb24odSwgYywgbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHQuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfSBlbHNlIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgfSBlbHNlIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJTY3JGbG9hdEJodl9zdGF5VGltZVwiKVxuICBzdGF5VGltZSgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNjckZsb2F0Qmh2X2dldFNjYWxlXCIpXG4gIGdldFNjYWxlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpblNjYWxlOiAxLjEsXG4gICAgICBvdXRTY2FsZTogMVxuICAgIH07XG4gIH1cbiAgc3RhcnRGbGlnaHRBbmltYXRpb24oZSwgdCwgbyA9IGZhbHNlKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0VG9wU2NvcmVQb3NpdGlvbigpO1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgdmFyIHIgPSBlLnBvc2l0aW9uLFxuICAgICAgICAgIGEgPSBlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihpKSxcbiAgICAgICAgICBzID0gdGhpcy5jYWxjdWxhdGVEaXN0YW5jZShyLCBhKSxcbiAgICAgICAgICBjID0gdGhpcy5jYWxjdWxhdGVGbGlnaHRUaW1lKHMpO1xuICAgICAgICBjYy50d2VlbihlKS5wYXJhbGxlbChjYy50d2VlbihlKS50byhjLCB7XG4gICAgICAgICAgcG9zaXRpb246IGFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJzaW5lSW5PdXRcIlxuICAgICAgICB9KSwgY2MudHdlZW4oZSkudG8oYywge1xuICAgICAgICAgIHNjYWxlOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwibGluZWFyXCJcbiAgICAgICAgfSkpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG4uY29udGV4dC5nYW1lVmlldy5nYW1lT2JqZWN0UG9vbC5wdXNoKHQsIGUpO1xuICAgICAgICAgIG4uZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVUcmFpbFBhcnRpY2xlKGUpO1xuICAgICAgICAgIGlmICh0aGlzLl90cmFpbFBhcnRpY2xlTm9kZSkge1xuICAgICAgICAgICAgdmFyIHUgPSB0aGlzLmNhbGN1bGF0ZVRyYWlsVGFyZ2V0UG9zaXRpb24ociwgYSwgMCksXG4gICAgICAgICAgICAgIHAgPSB0aGlzLmNhbGN1bGF0ZURpc3RhbmNlKHIsIHUpLFxuICAgICAgICAgICAgICBmID0gdGhpcy5jYWxjdWxhdGVGbGlnaHRUaW1lKHApO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUpLnRvKGYsIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHVcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgbi5zdG9wVHJhaWxQYXJ0aWNsZSgpO1xuICAgICAgICAgICAgfSkuZGVsYXkoMC4yNSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIG4uY2xlYW51cFRyYWlsUGFydGljbGUoKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZ2FtZU9iamVjdFBvb2wucHVzaCh0LCBlKTtcbiAgICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlNjckZsb2F0Qmh2X2dldFRvcFBvc1wiKVxuICBnZXRUb3BTY29yZVBvc2l0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5zY29yZUl0ZW1Ob2RlO1xuICAgICAgaWYgKCFlIHx8ICFjYy5pc1ZhbGlkKGUpKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciB0ID0gZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgcmV0dXJuIGNjLnYzKHQueCwgdC55LCAwKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgY2FsY3VsYXRlRGlzdGFuY2UoZSwgdCkge1xuICAgIHZhciBvID0gdC54IC0gZS54LFxuICAgICAgbiA9IHQueSAtIGUueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KG8gKiBvICsgbiAqIG4pO1xuICB9XG4gIGNhbGN1bGF0ZUZsaWdodFRpbWUoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fdGlsZU5vZGVTaXplLmhlaWdodCxcbiAgICAgIG8gPSBNYXRoLmNlaWwoZSAvIHQpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLjEsIE1hdGgubWluKDAuNSwgMC4xICsgMC4xICogKG8gLSAxKSkpO1xuICB9XG4gIGNyZWF0ZVRyYWlsUGFydGljbGUoZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl90cmFpbFBhcnRpY2xlTm9kZSA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5nYW1lT2JqZWN0UG9vbC5nZXQoUG9vbE5hbWUuU2NvcmVGbHlUcmFpbCk7XG4gICAgICBpZiAoIXRoaXMuX3RyYWlsUGFydGljbGVOb2RlKSByZXR1cm47XG4gICAgICB0aGlzLl90cmFpbFBhcnRpY2xlTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUucGFyZW50ID0gZS5wYXJlbnQ7XG4gICAgICB0aGlzLl90cmFpbFBhcnRpY2xlTm9kZS5wb3NpdGlvbiA9IGUucG9zaXRpb247XG4gICAgICB0aGlzLl90cmFpbFBhcnRpY2xlTm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5QYXJ0aWNsZVN5c3RlbSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnJlc2V0U3lzdGVtKCk7XG4gICAgICAgIGUuc3BlZWQgKj0gQW5pVGltZVNjYWxlLmdldCgpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICBjYWxjdWxhdGVUcmFpbFRhcmdldFBvc2l0aW9uKGUsIHQsIG8gPSA2MCkge1xuICAgIGlmICghZSB8fCAhdCkgcmV0dXJuIGNjLnYzKChudWxsID09IHQgPyB2b2lkIDAgOiB0LngpIHx8IDAsICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC55KSB8fCAwKSAtIG8sIDApO1xuICAgIHZhciBuID0gY2MudjModC54IC0gZS54LCB0LnkgLSBlLnksIDApO1xuICAgIGlmIChNYXRoLnNxcnQobi54ICogbi54ICsgbi55ICogbi55KSA8IDAuMDAxKSByZXR1cm4gY2MudjModC54LCB0LnkgLSBvLCAwKTtcbiAgICBNYXRoLmF0YW4yKG4ueSwgbi54KTtcbiAgICB2YXIgaSA9IDA7XG4gICAgaSA9IE1hdGguYWJzKG4ueSkgPiAwLjAwMSA/IC0oaSA9IG4ueCAvIG4ueSAqIG8pIDogMDtcbiAgICBpID0gTWF0aC5tYXgoLTUwLCBNYXRoLm1pbig1MCwgaSkpO1xuICAgIHJldHVybiBjYy52Myh0LnggKyBpLCB0LnkgLSBvLCAwKTtcbiAgfVxuICBzdG9wVHJhaWxQYXJ0aWNsZSgpIHtcbiAgICBpZiAodGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLl90cmFpbFBhcnRpY2xlTm9kZSkpIHRyeSB7XG4gICAgICB0aGlzLl90cmFpbFBhcnRpY2xlTm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5QYXJ0aWNsZVN5c3RlbSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BTeXN0ZW0oKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgY2xlYW51cFRyYWlsUGFydGljbGUoKSB7XG4gICAgaWYgKHRoaXMuX3RyYWlsUGFydGljbGVOb2RlICYmIGNjLmlzVmFsaWQodGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUpKSB0cnkge1xuICAgICAgdGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuUGFydGljbGVTeXN0ZW0pLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wU3lzdGVtKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5nYW1lT2JqZWN0UG9vbC5wdXNoKFBvb2xOYW1lLlNjb3JlRmx5VHJhaWwsIHRoaXMuX3RyYWlsUGFydGljbGVOb2RlKTtcbiAgICAgIHRoaXMuX3RyYWlsUGFydGljbGVOb2RlID0gbnVsbDtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59Il19