"use strict";
cc._RF.push(module, '146b0RYTIJFSbq65HIFwVU+', 'MultiFlipTimerTrait');
// subpackages/l_multiFlipTimer/Scripts/MultiFlipTimerTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var MultiFlipTimerTrait = /** @class */ (function (_super) {
    __extends(MultiFlipTimerTrait, _super);
    function MultiFlipTimerTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._totalBudget = 6000;
        _this._minDisplayTime = 500;
        _this._state = {
            openedTileIds: new Set(),
            flippingTileIds: new Set(),
            tileNodeMap: new Map(),
            timer: null,
            remainingBudget: 6000,
            lastCalculateTime: 0,
            currentCardCount: 0
        };
        return _this;
    }
    MultiFlipTimerTrait.prototype.onLoad = function () {
        var e, i;
        _super.prototype.onLoad.call(this);
        var a = (null === (e = this._traitData) || void 0 === e ? void 0 : e.totalBudgetSeconds) || 6, r = (null === (i = this._traitData) || void 0 === i ? void 0 : i.minDisplayTime) || 0.5;
        this._totalBudget = 1000 * a;
        this._minDisplayTime = 1000 * r;
        this._state.remainingBudget = this._totalBudget;
        mj.EventManager.on(GameEvent_1.EGameEvent.TileNode_SelectedFinish, this.onTileSelectedFinish, this);
    };
    MultiFlipTimerTrait.prototype.onTileNodeObj_BeginSelected = function (t, e) {
        var i, a = t.ins, r = null == a ? void 0 : a.tileObject;
        if (r && r.type === TileTypeEnum_1.ETileType.RollCard) {
            var s = r.id;
            (null === (i = a) || void 0 === i ? void 0 : i.isBack) && this._state.flippingTileIds.add(s);
        }
        e();
    };
    MultiFlipTimerTrait.prototype.onTileSelectedFinish = function (t) {
        var e = null == t ? void 0 : t.tileObject;
        if (e && e.type === TileTypeEnum_1.ETileType.RollCard) {
            var i = e.id;
            if (this._state.flippingTileIds.has(i)) {
                this._state.flippingTileIds.delete(i);
                this._state.tileNodeMap.set(i, t);
                if (0 === this._state.openedTileIds.size && null === this._state.timer) {
                    this.startTimer(i);
                }
                else {
                    this.addCardAndRecalculate(i);
                }
            }
        }
    };
    MultiFlipTimerTrait.prototype.startTimer = function (t) {
        var e = this;
        this._state.openedTileIds.add(t);
        this._state.remainingBudget = this._totalBudget;
        this._state.lastCalculateTime = Date.now();
        this._state.currentCardCount = 1;
        this._state.timer = setTimeout(function () {
            e.flipBackAllCards();
        }, this._totalBudget);
    };
    MultiFlipTimerTrait.prototype.addCardAndRecalculate = function (t) {
        if (!this._state.openedTileIds.has(t)) {
            var e = Date.now(), i = (e - this._state.lastCalculateTime) * this._state.currentCardCount;
            this._state.remainingBudget -= i;
            if (this._state.remainingBudget <= 0)
                this.flipBackAllCards();
            else {
                this._state.openedTileIds.add(t);
                this._state.currentCardCount++;
                this._state.lastCalculateTime = e;
                var a = this._state.remainingBudget / this._state.currentCardCount, r = Math.max(a, this._minDisplayTime);
                this.restartTimer(r);
            }
        }
    };
    MultiFlipTimerTrait.prototype.restartTimer = function (t) {
        var e = this;
        this._state.timer && clearTimeout(this._state.timer);
        this._state.timer = setTimeout(function () {
            e.flipBackAllCards();
        }, t);
    };
    MultiFlipTimerTrait.prototype.flipBackAllCards = function () {
        var t = this, e = Array.from(this._state.openedTileIds);
        if (0 !== e.length) {
            this._state.flippingTileIds.size;
            var i = new Map(this._state.tileNodeMap);
            this.clearState();
            e.forEach(function (e) {
                t.flipBackCard(e, i);
            });
        }
        else
            this.clearState();
    };
    MultiFlipTimerTrait.prototype.flipBackCard = function (t, e) {
        var i = (e || this._state.tileNodeMap).get(t);
        if (i && cc.isValid(i.cardNode)) {
            var a = i._tileFlipStateCtl;
            a && a.playExitAni();
        }
    };
    MultiFlipTimerTrait.prototype.onRollCTNode_keepOpen = function (t, e) {
        var i = t.ins, a = null == i ? void 0 : i.tileObject;
        if (a && a.type === TileTypeEnum_1.ETileType.RollCard) {
            var r = a.id, s = this._state.openedTileIds.has(r);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: s
            });
        }
        else
            e();
    };
    MultiFlipTimerTrait.prototype.clearState = function () {
        if (this._state.timer) {
            clearTimeout(this._state.timer);
            this._state.timer = null;
        }
        this._state.openedTileIds.clear();
        this._state.tileNodeMap.clear();
        this._state.remainingBudget = this._totalBudget;
        this._state.lastCalculateTime = 0;
        this._state.currentCardCount = 0;
    };
    MultiFlipTimerTrait.prototype.onIptSetLv_newGComp = function (t, e) {
        this.clearState();
        this._state.flippingTileIds.clear();
        e();
    };
    MultiFlipTimerTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        this.clearState();
        this._state.flippingTileIds.clear();
        e();
    };
    MultiFlipTimerTrait.traitKey = "MultiFlipTimer";
    MultiFlipTimerTrait = __decorate([
        mj.trait,
        mj.class("MultiFlipTimerTrait")
    ], MultiFlipTimerTrait);
    return MultiFlipTimerTrait;
}(Trait_1.default));
exports.default = MultiFlipTimerTrait;

cc._RF.pop();