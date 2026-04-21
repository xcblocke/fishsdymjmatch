"use strict";
cc._RF.push(module, '31582/SEelDCrKpJjTheXj8', 'MaterialCardOpt3Trait');
// subpackages/l_materialCardOpt/Scripts/MaterialCardOpt3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardOptBaseTrait_1 = require("./MaterialCardOptBaseTrait");
var MaterialCardOptListTrait_1 = require("./MaterialCardOptListTrait");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCardOpt3Trait = /** @class */ (function (_super) {
    __extends(MaterialCardOpt3Trait, _super);
    function MaterialCardOpt3Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 10;
        _this._baseProb = 50;
        _this._probIncrement = 0;
        _this._gameModes = [GameTypeEnums_1.MjGameType.Normal];
        return _this;
    }
    MaterialCardOpt3Trait_1 = MaterialCardOpt3Trait;
    MaterialCardOpt3Trait.prototype.onLoad = function () {
        var e, r, a, i, o, n, l, s;
        _super.prototype.onLoad.call(this);
        var u = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.prob) && void 0 !== r ? r : [50];
        this._startLevel = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.startLevel) && void 0 !== i ? i : 10;
        this._baseProb = null !== (o = u[0]) && void 0 !== o ? o : 50;
        this._probIncrement = null !== (n = u[1]) && void 0 !== n ? n : 0;
        this._gameModes = null !== (s = null === (l = this._traitData) || void 0 === l ? void 0 : l.gameModes) && void 0 !== s ? s : [GameTypeEnums_1.MjGameType.Normal];
        this.isLocalEmpty(this.localData.accumProb) && (this.localData.accumProb = {});
    };
    MaterialCardOpt3Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isGameModeMatch(this._gameModes)) {
                e();
                return;
            }
            var a = this.getCurrentGameType(), i = this.getCurrentGameDataLevel();
            if (i < this._startLevel) {
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
                e();
                return;
            }
            if (this._isHardLevel(i)) {
                this._ensureAccumProbInitialized(a);
                this._tryTrigger(a);
            }
            else
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
            e();
        }
        catch (t) {
            console.error("[" + MaterialCardOpt3Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardOpt3Trait.prototype._ensureAccumProbInitialized = function (t) {
        if (null == this.localData.accumProb[t]) {
            this.localData.accumProb[t] = 0;
            this.localData.accumProb = this.localData.accumProb;
        }
    };
    MaterialCardOpt3Trait.prototype._isHardLevel = function (t) {
        return GameUtils_1.default.isTypeHardLevel(this.getCurrentGameType(), t);
    };
    MaterialCardOpt3Trait.prototype._tryTrigger = function (t) {
        var e = this.localData.accumProb[t], r = Math.min(100, this._baseProb + e);
        if (100 * Math.random() < r) {
            this._triggerMaterialChange();
            this.localData.accumProb[t] = 0;
            this.localData.accumProb = this.localData.accumProb;
        }
        else {
            var a = e + this._probIncrement;
            this.localData.accumProb[t] = a;
            this.localData.accumProb = this.localData.accumProb;
        }
    };
    MaterialCardOpt3Trait.prototype._triggerMaterialChange = function () {
        var t = MaterialCardOptListTrait_1.default.getInstance();
        t && t.switchToNextMaterialCard();
    };
    var MaterialCardOpt3Trait_1;
    MaterialCardOpt3Trait.traitKey = "MaterialCardOpt3";
    MaterialCardOpt3Trait = MaterialCardOpt3Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCardOpt3Trait")
    ], MaterialCardOpt3Trait);
    return MaterialCardOpt3Trait;
}(MaterialCardOptBaseTrait_1.default));
exports.default = MaterialCardOpt3Trait;

cc._RF.pop();