"use strict";
cc._RF.push(module, '924dcOstJ5HgpaGxvVNnWxl', 'FlowAbilityTrait');
// subpackages/l_flowAbility/Scripts/FlowAbilityTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
this && this.__read;
this && this.__spread;
var FlowAbilityTrait = /** @class */ (function (_super) {
    __extends(FlowAbilityTrait, _super);
    function FlowAbilityTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlowAbilityTrait.prototype.onLoad = function () {
        var a, e, r, i, o, l, n, s;
        _super.prototype.onLoad.call(this);
        this._introLevels = null !== (a = this._traitData.introLevels) && void 0 !== a ? a : 10;
        this._minStage = null !== (e = this._traitData.minStage) && void 0 !== e ? e : 1;
        this._maxStage = null !== (r = this._traitData.maxStage) && void 0 !== r ? r : 10;
        this._initialStage = Math.max(null !== (i = this._traitData.initialStage) && void 0 !== i ? i : 1, this._minStage);
        this._expertThreshold = null !== (o = this._traitData.expertThreshold) && void 0 !== o ? o : 6;
        this._noviceThreshold = null !== (l = this._traitData.noviceThreshold) && void 0 !== l ? l : 12;
        this._upgradeStep = null !== (n = this._traitData.upgradeStep) && void 0 !== n ? n : 2;
        this._downgradeStep = null !== (s = this._traitData.downgradeStep) && void 0 !== s ? s : 1;
        (!this.localData.faStage || this.localData.faStage < this._minStage) && (this.localData.faStage = this._initialStage);
    };
    FlowAbilityTrait.prototype.onDotGmClk_dot = function (t, a) {
        var e, r, i, o, n, s;
        try {
            if (!UserModel_1.default.getInstance().isGuideFinished()) {
                a();
                return;
            }
            var c = t.args[0], h = t.args[1], f = t.args[2];
            if (!c || !f) {
                a();
                return;
            }
            var d = null === (n = c.getTile2DotTracker) || void 0 === n ? void 0 : n.call(c);
            if (!d) {
                a();
                return;
            }
            var p = c.getGameData(), _ = p.slotBarIds || [], v = new Set();
            try {
                for (var y = __values(_), g = y.next(); !g.done; g = y.next()) {
                    var D = g.value, S = null === (s = h.getTileObjectByPosId) || void 0 === s ? void 0 : s.call(h, D);
                    S && v.add(S.cardId);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    g && !g.done && (r = y.return) && r.call(y);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            if (0 === v.size) {
                a();
                return;
            }
            var m = this._getOperableCardIds(h), w = false;
            try {
                for (var O = __values(m), b = O.next(); !b.done; b = O.next()) {
                    var T = b.value;
                    if (v.has(T)) {
                        w = true;
                        break;
                    }
                }
            }
            catch (t) {
                i = {
                    error: t
                };
            }
            finally {
                try {
                    b && !b.done && (o = O.return) && o.call(O);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
            var x = p.getRealPlayTime() - d.lastStepTime;
            if (w)
                ;
            else {
                this.localData.faOpDurSum = (this.localData.faOpDurSum || 0) + x;
                this.localData.faOpCount = (this.localData.faOpCount || 0) + 1;
                this.localData.faOpDurSum = this.localData.faOpDurSum;
                this.localData.faOpCount = this.localData.faOpCount;
            }
        }
        catch (t) { }
        a();
    };
    FlowAbilityTrait.prototype.onFlwLv_getAbilStg = function (t, a) {
        var e = t.args[0] || 0;
        if (e > 0 && e <= this._introLevels) {
            this.localData.faOpDurSum = 0;
            this.localData.faOpCount = 0;
            a();
        }
        else {
            e > 0 && this.localData.faLevelId && this.localData.faLevelId !== e && this._evaluateAndAdjust();
            e > 0 && (this.localData.faLevelId = e);
            var r = this.localData.faStage || this._initialStage;
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: r - 1
            });
        }
    };
    FlowAbilityTrait.prototype._getOperableCardIds = function (t) {
        var a, e;
        try {
            var r = t.aliveTiles().filter(function (t) {
                return !t.getIsInSlotBar();
            }), i = new Set();
            try {
                for (var o = __values(r), n = o.next(); !n.done; n = o.next()) {
                    var s = n.value;
                    0 === s.isCardLock() && i.add(s.cardId);
                }
            }
            catch (t) {
                a = {
                    error: t
                };
            }
            finally {
                try {
                    n && !n.done && (e = o.return) && e.call(o);
                }
                finally {
                    if (a)
                        throw a.error;
                }
            }
            return i;
        }
        catch (t) {
            return new Set();
        }
    };
    FlowAbilityTrait.prototype._evaluateAndAdjust = function () {
        var t = this.localData.faOpDurSum || 0, a = this.localData.faOpCount || 0;
        this.localData.faOpDurSum = 0;
        this.localData.faOpCount = 0;
        if (!(a <= 0)) {
            var e = t / a, r = this.localData.faStage || this._initialStage;
            if (e <= this._expertThreshold) {
                r = Math.min(this._maxStage, r + this._upgradeStep);
            }
            else {
                e > this._noviceThreshold && (r = Math.max(this._minStage, r - this._downgradeStep));
            }
            this.localData.faStage = r;
        }
    };
    FlowAbilityTrait.traitKey = "FlowAbility";
    FlowAbilityTrait = __decorate([
        mj.trait,
        mj.class("FlowAbilityTrait")
    ], FlowAbilityTrait);
    return FlowAbilityTrait;
}(Trait_1.default));
exports.default = FlowAbilityTrait;

cc._RF.pop();