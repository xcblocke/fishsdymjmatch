"use strict";
cc._RF.push(module, '3c401mNlhVCO5uiVu6zjima', 'NoMatchTipsTrait');
// subpackages/l_noMatchTips/Scripts/NoMatchTipsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var NoMatchTipsTrait = /** @class */ (function (_super) {
    __extends(NoMatchTipsTrait, _super);
    function NoMatchTipsTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            checkTime: NoMatchTipsTrait_1.DEFAULT_CHECK_MS,
            moveTime: NoMatchTipsTrait_1.DRAG_MAX_MS
        };
        _this._pending = null;
        _this._timer = null;
        _this._lastClickMs = 0;
        _this._lastDragStartMs = 0;
        _this._isDragging = false;
        _this._mode = "idle";
        _this._waitTimerCb = null;
        _this._dragTimerCb = null;
        _this._countdownStarted = false;
        _this._gameCtr = null;
        _this._hasPreloadedFailView = false;
        return _this;
    }
    NoMatchTipsTrait_1 = NoMatchTipsTrait;
    NoMatchTipsTrait.prototype.onLoad = function () {
        var i, r, n, o;
        _super.prototype.onLoad.call(this);
        this._config = {
            checkTime: Math.max(0, Number(null !== (r = null === (i = this._traitData) || void 0 === i ? void 0 : i.checkTime) && void 0 !== r ? r : NoMatchTipsTrait_1.DEFAULT_CHECK_MS)),
            moveTime: null !== (o = null === (n = this._traitData) || void 0 === n ? void 0 : n.moveTime) && void 0 !== o ? o : NoMatchTipsTrait_1.DRAG_MAX_MS
        };
    };
    NoMatchTipsTrait.prototype.onInitViewBhv_crtTls = function (t, i) {
        var e, r, n, o, a, l = null === (n = null === (r = null === (e = t.ins) || void 0 === e ? void 0 : e.context) || void 0 === r ? void 0 : r.gameView) || void 0 === n ? void 0 : n.timerComponent;
        this._timer = l || null;
        this._gameCtr = (null === (a = null === (o = t.ins) || void 0 === o ? void 0 : o.context) || void 0 === a ? void 0 : a.gameCtr) || null;
        this._hasPreloadedFailView = false;
        this.resetState("initView");
        this.preloadFailView();
        i();
    };
    NoMatchTipsTrait.prototype.onClrNormHlp_tryExcFail = function (t, i) {
        if (this.tryExcFail(t)) {
            i({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            i();
        }
    };
    NoMatchTipsTrait.prototype.onClrDailyHlp_tryExcFail = function (t, i) {
        if (this.tryExcFail(t)) {
            i({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            i();
        }
    };
    NoMatchTipsTrait.prototype.onClrTravelHlp_tryExcFail = function (t, i) {
        if (this.tryExcFail(t)) {
            i({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            i();
        }
    };
    NoMatchTipsTrait.prototype.onIptTchMove_startMove = function (t, i) {
        this._pending && "dragging" !== this._mode && this.enterDragging();
        if (!this._isDragging) {
            this._isDragging = true;
            this._lastDragStartMs = Date.now();
        }
        i();
    };
    NoMatchTipsTrait.prototype.onIptBTchEnd_moveEnd = function (t, i) {
        this._pending && "dragging" === this._mode && this.tryShowFailNow("dragEnd");
        this._isDragging = false;
        i();
    };
    NoMatchTipsTrait.prototype.onIptTchEnd_Success = function (t, i) {
        this._lastClickMs = Date.now();
        this._pending && "dragging" !== this._mode && this.enterClicking();
        i();
    };
    NoMatchTipsTrait.prototype.onClearEffBhv_playCollision = function (t, i) {
        if (this._pending) {
            this._countdownStarted || (this._countdownStarted = true);
            "waiting" !== this._mode && "clicking" !== this._mode || this.scheduleWaitTimer();
            i();
        }
        else
            i();
    };
    NoMatchTipsTrait.prototype.preloadFailView = function () {
        if (!this._hasPreloadedFailView) {
            var t = this._gameCtr;
            if (t && "function" == typeof t.loadRes) {
                this._hasPreloadedFailView = true;
                t.loadRes("prefabs/ui/FailView", cc.Prefab, "mainRes").catch(function () { });
            }
        }
    };
    NoMatchTipsTrait.prototype.getCheckTime = function () {
        var t, i, r = Math.max(0, Number(null !== (i = null === (t = this._config) || void 0 === t ? void 0 : t.checkTime) && void 0 !== i ? i : NoMatchTipsTrait_1.DEFAULT_CHECK_MS));
        return Math.max(NoMatchTipsTrait_1.DEFAULT_CHECK_MS, r);
    };
    NoMatchTipsTrait.prototype.startPending = function (t) {
        this.resetState("startPending");
        this._pending = {
            tileIds: t
        };
        this._mode = "waiting";
    };
    NoMatchTipsTrait.prototype.enterClicking = function () {
        this._mode = "clicking";
        this._countdownStarted && this.scheduleWaitTimer();
    };
    NoMatchTipsTrait.prototype.enterDragging = function () {
        var t, i = this;
        if ("dragging" !== this._mode) {
            this._mode = "dragging";
            this.clearWaitTimer();
            this.clearDragTimer();
            var e = this._config.moveTime / 1000, r = function r() {
                return i.tryShowFailNow("dragTimeout");
            };
            this._dragTimerCb = r;
            null === (t = this._timer) || void 0 === t || t.doOnce(e, r, this);
        }
    };
    NoMatchTipsTrait.prototype.scheduleWaitTimer = function () {
        var t, i = this;
        this.clearWaitTimer();
        var e = this.getCheckTime() / 1000, r = function r() {
            return i.tryShowFailNow("clicking" === i._mode ? "clickTimeout" : "waitTimeout");
        };
        this._waitTimerCb = r;
        null === (t = this._timer) || void 0 === t || t.doOnce(e, r, this);
    };
    NoMatchTipsTrait.prototype.tryShowFailNow = function (t) {
        if (this._pending) {
            this.executeNoMatchFailInput(this._pending.tileIds, t);
        }
        else {
            this.resetState(t);
        }
    };
    NoMatchTipsTrait.prototype.executeNoMatchFailInput = function (t, i) {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.NoMatchFail,
            tileIds: t
        });
        this.resetState("noMatchFailInput:" + i);
    };
    NoMatchTipsTrait.prototype.tryExcFail = function (t) {
        var i, e, r, n, o, a = t.ins, l = null == a ? void 0 : a._baseInput, s = null == a ? void 0 : a._gameContext, c = (null === (i = null == a ? void 0 : a._options) || void 0 === i ? void 0 : i.tileIds) || [];
        if (!l)
            return false;
        if (this.getCheckTime() <= 0)
            return false;
        if (!(null !== (o = null === (n = null === (r = null === (e = null == s ? void 0 : s.getTileMapObject) || void 0 === e ? void 0 : e.call(s)) || void 0 === r ? void 0 : r.checkIsDead) || void 0 === n ? void 0 : n.call(r, c)) && void 0 !== o && o))
            return false;
        this.startPending(c);
        return true;
    };
    NoMatchTipsTrait.prototype.clearWaitTimer = function () {
        var t;
        if (this._waitTimerCb) {
            null === (t = this._timer) || void 0 === t || t.clearTimer(this._waitTimerCb);
            this._waitTimerCb = null;
        }
    };
    NoMatchTipsTrait.prototype.clearDragTimer = function () {
        var t;
        if (this._dragTimerCb) {
            null === (t = this._timer) || void 0 === t || t.clearTimer(this._dragTimerCb);
            this._dragTimerCb = null;
        }
    };
    NoMatchTipsTrait.prototype.resetState = function () {
        this.clearWaitTimer();
        this.clearDragTimer();
        this._pending = null;
        this._mode = "idle";
        this._countdownStarted = false;
    };
    var NoMatchTipsTrait_1;
    NoMatchTipsTrait.traitKey = "NoMatchTips";
    NoMatchTipsTrait.DRAG_MAX_MS = 10000;
    NoMatchTipsTrait.DEFAULT_CHECK_MS = 50;
    NoMatchTipsTrait = NoMatchTipsTrait_1 = __decorate([
        mj.trait,
        mj.class("NoMatchTipsTrait")
    ], NoMatchTipsTrait);
    return NoMatchTipsTrait;
}(Trait_1.default));
exports.default = NoMatchTipsTrait;

cc._RF.pop();