
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/CollectFlyBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQ29sbGVjdEZseUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RCw4REFBOEQ7QUFDOUQsK0NBQStDO0FBQy9DLDBFQUFvRTtBQUNwRSxtRUFBK0Q7QUFDL0Q7SUFBd0Msc0NBQWlCO0lBQXpEO1FBQUEscUVBdUhDO1FBdEhDLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsd0JBQWtCLEdBQUcsSUFBSSxDQUFDOztJQXFINUIsQ0FBQztJQXBIQyxrQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FB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Q2hCLENBQUM7SUFDRCxvQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsaUJBQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQXZIQSxBQXVIQyxDQXZIdUMscUNBQWlCLEdBdUh4RDtBQXZIWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmltcG9ydCB7IEFuaVRpbWVTY2FsZSB9IGZyb20gJy4uL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5pbXBvcnQgeyBQb29sTmFtZSB9IGZyb20gJy4uL2NvbnN0YW50L2VudW1SZXMnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuZXhwb3J0IGNsYXNzIENvbGxlY3RGbHlCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgX3RpbWVvdXQgPSAyMDAwO1xuICBfdHJhaWxQYXJ0aWNsZU5vZGUgPSBudWxsO1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbyA9IGUuZGF0YTtcbiAgICAgIGlmICghby5jb2xsZWN0S2V5KSB7XG4gICAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBuID0gdGhpcy5jb250ZXh0LmdldExhc3RDb2xsaXNpb25Xb3JsZFBvcygpO1xuICAgICAgaWYgKCFuKSB7XG4gICAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBpID0gdGhpcy5jb250ZXh0LmdldENvbGxlY3RUYXJnZXRQb3NpdGlvbihvLmNvbGxlY3RLZXkpO1xuICAgICAgaWYgKCFpKSB7XG4gICAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucGxheUZseUF1ZGlvKGUuZGF0YS50aWxlVHlwZSk7XG4gICAgICB2YXIgYSA9IGNjLnYzKG4ueCwgbi55LCAwKSxcbiAgICAgICAgbCA9IGksXG4gICAgICAgIGMgPSBvLnBhcnRpY2xlUG9vbE5hbWUgfHwgUG9vbE5hbWUuU2NvcmVGbHlUcmFpbCxcbiAgICAgICAgdSA9IHZvaWQgMCAhPT0gby50cmFpbE9mZnNldFkgPyBvLnRyYWlsT2Zmc2V0WSA6IDA7XG4gICAgICB0aGlzLmNyZWF0ZVRyYWlsUGFydGljbGUoYSwgYyk7XG4gICAgICBpZiAoIXRoaXMuX3RyYWlsUGFydGljbGVOb2RlKSB7XG4gICAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBwID0gdGhpcy5jYWxjdWxhdGVUcmFpbFRhcmdldFBvc2l0aW9uKGEsIGwsIHUpLFxuICAgICAgICBmID0gby5mbGlnaHRUaW1lO1xuICAgICAgaWYgKCFmIHx8IGYgPD0gMCkge1xuICAgICAgICB2YXIgZCA9IHRoaXMuY2FsY3VsYXRlRGlzdGFuY2UoYSwgcCk7XG4gICAgICAgIGYgPSB0aGlzLmNhbGN1bGF0ZUZsaWdodFRpbWUoZCk7XG4gICAgICB9XG4gICAgICB2YXIgaCA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5lZmZlY3ROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHApO1xuICAgICAgY2MudHdlZW4odGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUpLnRvKGYsIHtcbiAgICAgICAgcG9zaXRpb246IGhcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5zdG9wVHJhaWxQYXJ0aWNsZSgpO1xuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuY2xlYW51cFRyYWlsUGFydGljbGUoKTtcbiAgICAgICAgdC5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5jbGVhbnVwVHJhaWxQYXJ0aWNsZSgpO1xuICAgICAgdGhpcy5mYWlsKFwi5pS26ZuG6aOe6KGM5pWI5p6c5omn6KGM5aSx6LSlXCIpO1xuICAgIH1cbiAgfVxuICBwbGF5Rmx5QXVkaW8oZSkge1xuICAgIHZhciB0ID0gMDtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLlJvbGxDYXJkOlxuICAgICAgICB0ID0gRUF1ZGlvSUQuVGFyZ2V0Zmx5MztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5Zb2dhOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRVRpbGVUeXBlLkNvbG9yQ2FyZDpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHQgPSBFQXVkaW9JRC5UYXJnZXRmbHkzO1xuICAgIH1cbiAgICB0ICYmIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KHQpO1xuICB9XG4gIGNyZWF0ZVRyYWlsUGFydGljbGUoZSwgdCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl90cmFpbFBhcnRpY2xlTm9kZSA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5nYW1lT2JqZWN0UG9vbC5nZXQoUG9vbE5hbWVbdF0pO1xuICAgICAgaWYgKCF0aGlzLl90cmFpbFBhcnRpY2xlTm9kZSkgcmV0dXJuO1xuICAgICAgdGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3RyYWlsUGFydGljbGVOb2RlLnBhcmVudCA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5lZmZlY3ROb2RlO1xuICAgICAgdGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUucG9zaXRpb24gPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZWZmZWN0Tm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihlKTtcbiAgICAgIHRoaXMuX3RyYWlsUGFydGljbGVOb2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLlBhcnRpY2xlU3lzdGVtKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucmVzZXRTeXN0ZW0oKTtcbiAgICAgICAgZS5zcGVlZCAqPSBBbmlUaW1lU2NhbGUuZ2V0KCk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIGNhbGN1bGF0ZVRyYWlsVGFyZ2V0UG9zaXRpb24oZSwgdCwgbyA9IDYwKSB7XG4gICAgaWYgKCFlIHx8ICF0KSByZXR1cm4gY2MudjMoKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQueCkgfHwgMCwgKChudWxsID09IHQgPyB2b2lkIDAgOiB0LnkpIHx8IDApIC0gbywgMCk7XG4gICAgdmFyIG4gPSBjYy52Myh0LnggLSBlLngsIHQueSAtIGUueSwgMCk7XG4gICAgaWYgKE1hdGguc3FydChuLnggKiBuLnggKyBuLnkgKiBuLnkpIDwgMC4wMDEpIHJldHVybiBjYy52Myh0LngsIHQueSAtIG8sIDApO1xuICAgIHZhciBpID0gMDtcbiAgICBNYXRoLmFicyhuLnkpID4gMC4wMDEgJiYgKGkgPSAtKGkgPSBuLnggLyBuLnkgKiBvKSk7XG4gICAgaSA9IE1hdGgubWF4KC01MCwgTWF0aC5taW4oNTAsIGkpKTtcbiAgICByZXR1cm4gY2MudjModC54ICsgaSwgdC55IC0gbywgMCk7XG4gIH1cbiAgY2FsY3VsYXRlRGlzdGFuY2UoZSwgdCkge1xuICAgIHZhciBvID0gdC54IC0gZS54LFxuICAgICAgbiA9IHQueSAtIGUueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KG8gKiBvICsgbiAqIG4pO1xuICB9XG4gIGNhbGN1bGF0ZUZsaWdodFRpbWUoZSkge1xuICAgIHZhciB0ID0gZSAvIDgwMDtcbiAgICByZXR1cm4gTWF0aC5tYXgoMC4xLCBNYXRoLm1pbigwLjgsIHQpKTtcbiAgfVxuICBzdG9wVHJhaWxQYXJ0aWNsZSgpIHtcbiAgICBpZiAodGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLl90cmFpbFBhcnRpY2xlTm9kZSkpIHRyeSB7XG4gICAgICB0aGlzLl90cmFpbFBhcnRpY2xlTm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5QYXJ0aWNsZVN5c3RlbSkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnN0b3BTeXN0ZW0oKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgY2xlYW51cFRyYWlsUGFydGljbGUoKSB7XG4gICAgaWYgKHRoaXMuX3RyYWlsUGFydGljbGVOb2RlICYmIGNjLmlzVmFsaWQodGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUpKSB0cnkge1xuICAgICAgdGhpcy5fdHJhaWxQYXJ0aWNsZU5vZGUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oY2MuUGFydGljbGVTeXN0ZW0pLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wU3lzdGVtKCk7XG4gICAgICB9KTtcbiAgICAgIHZhciBlID0gUG9vbE5hbWUuU2NvcmVGbHlUcmFpbDtcbiAgICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5nYW1lT2JqZWN0UG9vbC5wdXNoKGUsIHRoaXMuX3RyYWlsUGFydGljbGVOb2RlKTtcbiAgICAgIHRoaXMuX3RyYWlsUGFydGljbGVOb2RlID0gbnVsbDtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIG9uQWJvcnQoKSB7XG4gICAgdGhpcy5jbGVhbnVwVHJhaWxQYXJ0aWNsZSgpO1xuICAgIHN1cGVyLm9uQWJvcnQuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==