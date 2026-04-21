"use strict";
cc._RF.push(module, 'a02bbct6uZGx6E0MR0D2I2F', 'Match1PropTipsBehavior');
// Scripts/base/Match1PropTipsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Match1PropTipsBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Match1PropTipsBehavior = /** @class */ (function (_super) {
    __extends(Match1PropTipsBehavior, _super);
    function Match1PropTipsBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    Match1PropTipsBehavior.prototype.start = function (e) {
        var t = e.data, o = t.action, n = t.delayTime, i = t.willBeDead;
        if ("stop" === o) {
            this.handleStop();
        }
        else {
            "start" === o && this.handleStart(null != n ? n : 10, i);
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Match1PropTipsBehavior.prototype.handleStart = function (e, t) {
        var o, n, i, r = this;
        this.handleStop();
        this._willBeDead = t;
        var a = null === (o = this.context.gameView) || void 0 === o ? void 0 : o.timerComponent;
        if (a) {
            var l = this.context.gameView, s = null == l ? void 0 : l.bottomRootNode, c = null == s ? void 0 : s.getChildByName("btnShuffle");
            if (c && cc.isValid(c)) {
                var p = this.context.getTileMapObject();
                if (!((null !== (i = null === (n = null == p ? void 0 : p.getCurTilesCnt) || void 0 === n ? void 0 : n.call(p)) && void 0 !== i ? i : 0) <= 2)) {
                    this.context;
                    var f = function f() {
                        c.__match1PropTipsTimerCb__ = null;
                        r.checkAndStartBouncing();
                    };
                    c.__match1PropTipsTimerCb__ = f;
                    a.doOnce(Math.max(0, e), f, c);
                }
            }
        }
    };
    Match1PropTipsBehavior.prototype.handleStop = function () {
        var e, t;
        this._willBeDead = void 0;
        var o = this.context.gameView, n = null == o ? void 0 : o.bottomRootNode, i = null == n ? void 0 : n.getChildByName("btnShuffle"), r = i ? i.__match1PropTipsTimerCb__ : null;
        if (r) {
            null === (t = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.timerComponent) || void 0 === t || t.clearTimer(r);
            i.__match1PropTipsTimerCb__ = null;
        }
        n && cc.isValid(n) && this.stopButtonBouncing(n);
    };
    Match1PropTipsBehavior.prototype.stopButtonBouncing = function (e) {
        var t, o, n = [e.getChildByName("btnShuffle"), e.getChildByName("btnPropHint")];
        try {
            for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                if (l && cc.isValid(l)) {
                    var s = l.__match1PropTipsBounceData__;
                    if (s) {
                        cc.Tween.stopAllByTarget(l);
                        s.originalPos && l.setPosition(s.originalPos);
                        l.setScale(1, 1, 1);
                        delete l.__match1PropTipsBounceData__;
                    }
                }
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    Match1PropTipsBehavior.prototype.checkAndStartBouncing = function () {
        var e, t, o = this.context.getTileMapObject();
        if (o && !((null !== (t = null === (e = o.getCurTilesCnt) || void 0 === e ? void 0 : e.call(o)) && void 0 !== t ? t : 0) <= 2) && 1 === o.getCanMatchCardPairNum() && null != this._willBeDead) {
            var n = this.context.gameView, i = null == n ? void 0 : n.bottomRootNode;
            if (i && cc.isValid(i)) {
                var r = i.getChildByName("btnShuffle"), a = i.getChildByName("btnPropHint"), l = this._willBeDead ? r : a;
                if (l && cc.isValid(l)) {
                    var s = {
                        isBouncing: true,
                        originalPos: l.position.clone()
                    };
                    l.__match1PropTipsBounceData__ = s;
                    this.playButtonBounceAnimation(l);
                }
            }
        }
    };
    Match1PropTipsBehavior.prototype.playButtonBounceAnimation = function (e) {
        var t = this, o = e.__match1PropTipsBounceData__;
        if (o && o.isBouncing && cc.isValid(e)) {
            var n = o.originalPos, i = n.x, r = n.y, a = n.z;
            cc.Tween.stopAllByTarget(e);
            e.setPosition(i, r, a);
            e.setScale(1, 1, 1);
            cc.tween(e).to(0.3, {
                position: cc.v3(i, r + 50, a),
                scaleX: 1,
                scaleY: 1.05
            }, {
                easing: cc.easing.quadOut
            }).to(0.1, {
                position: cc.v3(i, r, a),
                scaleX: 1.05,
                scaleY: 1
            }).to(0.1, {
                position: cc.v3(i, r + 20, a),
                scaleX: 1,
                scaleY: 1.05
            }).to(0.1, {
                position: cc.v3(i, r, a),
                scaleX: 1.05,
                scaleY: 1
            }).to(0.1, {
                position: cc.v3(i, r + 10, a),
                scaleX: 1,
                scaleY: 1.05
            }).to(0.1, {
                position: cc.v3(i, r, a),
                scaleX: 1,
                scaleY: 1
            }).to(0.7, {
                position: cc.v3(i, r, a),
                scaleX: 1,
                scaleY: 1
            }).call(function () {
                var o = e.__match1PropTipsBounceData__;
                (null == o ? void 0 : o.isBouncing) && cc.isValid(e) && t.playButtonBounceAnimation(e);
            }).start();
        }
    };
    __decorate([
        mj.traitEvent("Match1PropTipsBhv_start")
    ], Match1PropTipsBehavior.prototype, "start", null);
    return Match1PropTipsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Match1PropTipsBehavior = Match1PropTipsBehavior;

cc._RF.pop();