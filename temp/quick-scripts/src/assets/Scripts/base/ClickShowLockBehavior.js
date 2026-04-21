"use strict";
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