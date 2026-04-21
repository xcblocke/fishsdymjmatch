
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ClickShowLockBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a89dex7lkxJnr1VY4nyoo7x', 'ClickShowLockBehavior');
// Scripts/base/ClickShowLockBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickShowLockBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var enumRes_1 = require("../constant/enumRes");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ClickShowLockBehavior = /** @class */ (function (_super) {
    __extends(ClickShowLockBehavior, _super);
    function ClickShowLockBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClickShowLockBehavior.prototype.start = function (e) {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        var t = this.getTileNode(e.data.tileId);
        if (t) {
            var o = this.getOrCreateLocks(t), n = o.leftLock, i = o.rightLock;
            this.setupLocksAndPlayAnimation(t, n, i);
        }
    };
    ClickShowLockBehavior.prototype.getTileNode = function (e) {
        var t;
        return (null === (t = this.context.getTileNodeMap().get(e)) || void 0 === t ? void 0 : t.cardNode) || null;
    };
    ClickShowLockBehavior.prototype.getOrCreateLocks = function (e) {
        if (2 === ClickShowLockBehavior.activeLocks.length) {
            var o = __read(ClickShowLockBehavior.activeLocks, 2), n = o[0], i = o[1];
            if (!cc.isValid(n) || !cc.isValid(i))
                return this.createNewLocks(e);
            this.resetExistingLocks(n, i, e);
            return {
                leftLock: n,
                rightLock: i
            };
        }
        return this.createNewLocks(e);
    };
    ClickShowLockBehavior.prototype.createNewLocks = function (e) {
        this.clearActiveLocks();
        return this.createLockPair(e.parent);
    };
    ClickShowLockBehavior.prototype.resetExistingLocks = function (e, o, n) {
        cc.Tween.stopAllByTarget(e);
        cc.Tween.stopAllByTarget(o);
        [e, o].forEach(function (e) {
            e.opacity = 0;
            e.scale = 0;
            e.angle = 0;
            e.parent = n.parent;
            e.zIndex = ClickShowLockBehavior.LOCK_Z_INDEX;
        });
    };
    ClickShowLockBehavior.prototype.setupLocksAndPlayAnimation = function (e, t, o) {
        this.setLockPositions(e, t, o);
        this.playLockAnimation(t);
        this.playLockAnimation(o);
    };
    ClickShowLockBehavior.prototype.clearActiveLocks = function () {
        var e = this.context.gameView.gameObjectPool;
        ClickShowLockBehavior.activeLocks.forEach(function (t) {
            if (cc.isValid(t)) {
                cc.Tween.stopAllByTarget(t);
                e.push(enumRes_1.PoolName.LockSide, t);
            }
        });
        ClickShowLockBehavior.activeLocks = [];
    };
    ClickShowLockBehavior.prototype.createLockPair = function (e) {
        var o = this.context.gameView.gameObjectPool, n = o.get(enumRes_1.PoolName.LockSide), i = o.get(enumRes_1.PoolName.LockSide);
        n.parent = e;
        i.parent = e;
        n.zIndex = ClickShowLockBehavior.LOCK_Z_INDEX;
        i.zIndex = ClickShowLockBehavior.LOCK_Z_INDEX;
        n.opacity = 0;
        i.opacity = 0;
        n.scale = 0;
        i.scale = 0;
        ClickShowLockBehavior.activeLocks.push(n, i);
        return {
            leftLock: n,
            rightLock: i
        };
    };
    ClickShowLockBehavior.prototype.setLockPositions = function (e, o, n) {
        var i = e.convertToWorldSpaceAR(cc.v2(0, 0)), r = e.getContentSize().width * ClickShowLockBehavior.LOCK_OFFSET_RATIO, a = cc.v2(i.x - r, i.y), l = cc.v2(i.x + r, i.y), s = o.parent.convertToNodeSpaceAR(a), c = n.parent.convertToNodeSpaceAR(l);
        o.position = cc.v3(s.x, s.y, 0);
        n.position = cc.v3(c.x, c.y, 0);
    };
    ClickShowLockBehavior.prototype.createLockAnimation = function (e) {
        return cc.tween(e).parallel(cc.tween().to(0.125, {
            scale: 1
        }), cc.tween().to(0.125, {
            opacity: 255
        })).to(0.1, {
            angle: 13
        }).to(0.1, {
            angle: -13
        }).to(0.1, {
            angle: 13
        }).to(0.1, {
            angle: -13
        }).to(0.1, {
            angle: 13
        }).to(0.1, {
            angle: 0
        }).parallel(cc.tween().to(0.025, {
            scale: 0.9
        }).to(0.075, {
            scale: 0
        }), cc.tween().to(0.025, {
            opacity: 230
        }).to(0.075, {
            opacity: 0
        }));
    };
    ClickShowLockBehavior.prototype.playLockAnimation = function (e) {
        var o = this.context.gameView.gameObjectPool;
        this.createLockAnimation(e).call(function () {
            if (cc.isValid(e)) {
                var n = ClickShowLockBehavior.activeLocks.indexOf(e);
                -1 !== n && ClickShowLockBehavior.activeLocks.splice(n, 1);
                o.push(enumRes_1.PoolName.LockSide, e);
            }
        }).start();
    };
    ClickShowLockBehavior.activeLocks = [];
    ClickShowLockBehavior.LOCK_OFFSET_RATIO = 0.5;
    ClickShowLockBehavior.LOCK_Z_INDEX = 9999;
    __decorate([
        mj.traitEvent("ClickSwLkBhv_playLockAni")
    ], ClickShowLockBehavior.prototype, "playLockAnimation", null);
    return ClickShowLockBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ClickShowLockBehavior = ClickShowLockBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQ2xpY2tTaG93TG9ja0JlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLCtDQUErQztBQUMvQyx5REFBd0Q7QUFDeEQ7SUFBMkMseUNBQWlCO0lBQTVEOztJQWdJQSxDQUFDO0lBNUhDLHFDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFDOUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbEIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBQ0QsMkNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzdHLENBQUM7SUFDRCxnREFBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lB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b3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IFBvb2xOYW1lIH0gZnJvbSAnLi4vY29uc3RhbnQvZW51bVJlcyc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIENsaWNrU2hvd0xvY2tCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhdGljIGFjdGl2ZUxvY2tzID0gW107XG4gIHN0YXRpYyBMT0NLX09GRlNFVF9SQVRJTyA9IDAuNTtcbiAgc3RhdGljIExPQ0tfWl9JTkRFWCA9IDk5OTk7XG4gIHN0YXJ0KGUpIHtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgIHZhciB0ID0gdGhpcy5nZXRUaWxlTm9kZShlLmRhdGEudGlsZUlkKTtcbiAgICBpZiAodCkge1xuICAgICAgdmFyIG8gPSB0aGlzLmdldE9yQ3JlYXRlTG9ja3ModCksXG4gICAgICAgIG4gPSBvLmxlZnRMb2NrLFxuICAgICAgICBpID0gby5yaWdodExvY2s7XG4gICAgICB0aGlzLnNldHVwTG9ja3NBbmRQbGF5QW5pbWF0aW9uKHQsIG4sIGkpO1xuICAgIH1cbiAgfVxuICBnZXRUaWxlTm9kZShlKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChlKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jYXJkTm9kZSkgfHwgbnVsbDtcbiAgfVxuICBnZXRPckNyZWF0ZUxvY2tzKGUpIHtcbiAgICBpZiAoMiA9PT0gQ2xpY2tTaG93TG9ja0JlaGF2aW9yLmFjdGl2ZUxvY2tzLmxlbmd0aCkge1xuICAgICAgdmFyIG8gPSBfX3JlYWQoQ2xpY2tTaG93TG9ja0JlaGF2aW9yLmFjdGl2ZUxvY2tzLCAyKSxcbiAgICAgICAgbiA9IG9bMF0sXG4gICAgICAgIGkgPSBvWzFdO1xuICAgICAgaWYgKCFjYy5pc1ZhbGlkKG4pIHx8ICFjYy5pc1ZhbGlkKGkpKSByZXR1cm4gdGhpcy5jcmVhdGVOZXdMb2NrcyhlKTtcbiAgICAgIHRoaXMucmVzZXRFeGlzdGluZ0xvY2tzKG4sIGksIGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdExvY2s6IG4sXG4gICAgICAgIHJpZ2h0TG9jazogaVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTmV3TG9ja3MoZSk7XG4gIH1cbiAgY3JlYXRlTmV3TG9ja3MoZSkge1xuICAgIHRoaXMuY2xlYXJBY3RpdmVMb2NrcygpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUxvY2tQYWlyKGUucGFyZW50KTtcbiAgfVxuICByZXNldEV4aXN0aW5nTG9ja3MoZSwgbywgbikge1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChlKTtcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobyk7XG4gICAgW2UsIG9dLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgICBlLnNjYWxlID0gMDtcbiAgICAgIGUuYW5nbGUgPSAwO1xuICAgICAgZS5wYXJlbnQgPSBuLnBhcmVudDtcbiAgICAgIGUuekluZGV4ID0gQ2xpY2tTaG93TG9ja0JlaGF2aW9yLkxPQ0tfWl9JTkRFWDtcbiAgICB9KTtcbiAgfVxuICBzZXR1cExvY2tzQW5kUGxheUFuaW1hdGlvbihlLCB0LCBvKSB7XG4gICAgdGhpcy5zZXRMb2NrUG9zaXRpb25zKGUsIHQsIG8pO1xuICAgIHRoaXMucGxheUxvY2tBbmltYXRpb24odCk7XG4gICAgdGhpcy5wbGF5TG9ja0FuaW1hdGlvbihvKTtcbiAgfVxuICBjbGVhckFjdGl2ZUxvY2tzKCkge1xuICAgIHZhciBlID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdhbWVPYmplY3RQb29sO1xuICAgIENsaWNrU2hvd0xvY2tCZWhhdmlvci5hY3RpdmVMb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodCk7XG4gICAgICAgIGUucHVzaChQb29sTmFtZS5Mb2NrU2lkZSwgdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgQ2xpY2tTaG93TG9ja0JlaGF2aW9yLmFjdGl2ZUxvY2tzID0gW107XG4gIH1cbiAgY3JlYXRlTG9ja1BhaXIoZSkge1xuICAgIHZhciBvID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdhbWVPYmplY3RQb29sLFxuICAgICAgbiA9IG8uZ2V0KFBvb2xOYW1lLkxvY2tTaWRlKSxcbiAgICAgIGkgPSBvLmdldChQb29sTmFtZS5Mb2NrU2lkZSk7XG4gICAgbi5wYXJlbnQgPSBlO1xuICAgIGkucGFyZW50ID0gZTtcbiAgICBuLnpJbmRleCA9IENsaWNrU2hvd0xvY2tCZWhhdmlvci5MT0NLX1pfSU5ERVg7XG4gICAgaS56SW5kZXggPSBDbGlja1Nob3dMb2NrQmVoYXZpb3IuTE9DS19aX0lOREVYO1xuICAgIG4ub3BhY2l0eSA9IDA7XG4gICAgaS5vcGFjaXR5ID0gMDtcbiAgICBuLnNjYWxlID0gMDtcbiAgICBpLnNjYWxlID0gMDtcbiAgICBDbGlja1Nob3dMb2NrQmVoYXZpb3IuYWN0aXZlTG9ja3MucHVzaChuLCBpKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGVmdExvY2s6IG4sXG4gICAgICByaWdodExvY2s6IGlcbiAgICB9O1xuICB9XG4gIHNldExvY2tQb3NpdGlvbnMoZSwgbywgbikge1xuICAgIHZhciBpID0gZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLFxuICAgICAgciA9IGUuZ2V0Q29udGVudFNpemUoKS53aWR0aCAqIENsaWNrU2hvd0xvY2tCZWhhdmlvci5MT0NLX09GRlNFVF9SQVRJTyxcbiAgICAgIGEgPSBjYy52MihpLnggLSByLCBpLnkpLFxuICAgICAgbCA9IGNjLnYyKGkueCArIHIsIGkueSksXG4gICAgICBzID0gby5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoYSksXG4gICAgICBjID0gbi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobCk7XG4gICAgby5wb3NpdGlvbiA9IGNjLnYzKHMueCwgcy55LCAwKTtcbiAgICBuLnBvc2l0aW9uID0gY2MudjMoYy54LCBjLnksIDApO1xuICB9XG4gIGNyZWF0ZUxvY2tBbmltYXRpb24oZSkge1xuICAgIHJldHVybiBjYy50d2VlbihlKS5wYXJhbGxlbChjYy50d2VlbigpLnRvKDAuMTI1LCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0pLCBjYy50d2VlbigpLnRvKDAuMTI1LCB7XG4gICAgICBvcGFjaXR5OiAyNTVcbiAgICB9KSkudG8oMC4xLCB7XG4gICAgICBhbmdsZTogMTNcbiAgICB9KS50bygwLjEsIHtcbiAgICAgIGFuZ2xlOiAtMTNcbiAgICB9KS50bygwLjEsIHtcbiAgICAgIGFuZ2xlOiAxM1xuICAgIH0pLnRvKDAuMSwge1xuICAgICAgYW5nbGU6IC0xM1xuICAgIH0pLnRvKDAuMSwge1xuICAgICAgYW5nbGU6IDEzXG4gICAgfSkudG8oMC4xLCB7XG4gICAgICBhbmdsZTogMFxuICAgIH0pLnBhcmFsbGVsKGNjLnR3ZWVuKCkudG8oMC4wMjUsIHtcbiAgICAgIHNjYWxlOiAwLjlcbiAgICB9KS50bygwLjA3NSwge1xuICAgICAgc2NhbGU6IDBcbiAgICB9KSwgY2MudHdlZW4oKS50bygwLjAyNSwge1xuICAgICAgb3BhY2l0eTogMjMwXG4gICAgfSkudG8oMC4wNzUsIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDbGlja1N3TGtCaHZfcGxheUxvY2tBbmlcIilcbiAgcGxheUxvY2tBbmltYXRpb24oZSkge1xuICAgIHZhciBvID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdhbWVPYmplY3RQb29sO1xuICAgIHRoaXMuY3JlYXRlTG9ja0FuaW1hdGlvbihlKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIHZhciBuID0gQ2xpY2tTaG93TG9ja0JlaGF2aW9yLmFjdGl2ZUxvY2tzLmluZGV4T2YoZSk7XG4gICAgICAgIC0xICE9PSBuICYmIENsaWNrU2hvd0xvY2tCZWhhdmlvci5hY3RpdmVMb2Nrcy5zcGxpY2UobiwgMSk7XG4gICAgICAgIG8ucHVzaChQb29sTmFtZS5Mb2NrU2lkZSwgZSk7XG4gICAgICB9XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxufSJdfQ==