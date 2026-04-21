"use strict";
cc._RF.push(module, 'a74a7CFt15Bwr9gsqLUhApn', 'MaterialCardOpt2Trait');
// subpackages/l_materialCardOpt/Scripts/MaterialCardOpt2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardOptBaseTrait_1 = require("./MaterialCardOptBaseTrait");
var MaterialCardOptListTrait_1 = require("./MaterialCardOptListTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCardOpt2Trait = /** @class */ (function (_super) {
    __extends(MaterialCardOpt2Trait, _super);
    function MaterialCardOpt2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 10;
        _this._intervalRange = [3, 5];
        _this._gameModes = [GameTypeEnums_1.MjGameType.Normal];
        return _this;
    }
    MaterialCardOpt2Trait_1 = MaterialCardOpt2Trait;
    MaterialCardOpt2Trait.prototype.onLoad = function () {
        var e, r, a, i, o, n;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 10;
        this._intervalRange = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.intervalRange) && void 0 !== i ? i : [3, 5];
        this._gameModes = null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o.gameModes) && void 0 !== n ? n : [GameTypeEnums_1.MjGameType.Normal];
        this.isLocalEmpty(this.localData.modeData) && (this.localData.modeData = {});
    };
    MaterialCardOpt2Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isGameModeMatch(this._gameModes)) {
                e();
                return;
            }
            var a = this.getCurrentGameDataLevel();
            if (a >= this._getNextTriggerLevel()) {
                var i = this._generateRandomInterval();
                this._setNextTriggerLevel(a + i);
                this._triggerMaterialChange();
            }
            else
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
            e();
        }
        catch (t) {
            console.error("[" + MaterialCardOpt2Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardOpt2Trait.prototype._getNextTriggerLevel = function () {
        var t, e = this.getCurrentGameType();
        return null !== (t = this.localData.modeData[e]) && void 0 !== t ? t : this._startLevel;
    };
    MaterialCardOpt2Trait.prototype._setNextTriggerLevel = function (t) {
        var e = this.getCurrentGameType();
        this.localData.modeData[e] = t;
        this.localData.modeData = this.localData.modeData;
    };
    MaterialCardOpt2Trait.prototype._generateRandomInterval = function () {
        var t = __read(this._intervalRange, 2), e = t[0], r = t[1];
        return e + Math.floor(Math.random() * (r - e + 1));
    };
    MaterialCardOpt2Trait.prototype._triggerMaterialChange = function () {
        var t = MaterialCardOptListTrait_1.default.getInstance();
        t && t.switchToNextMaterialCard();
    };
    var MaterialCardOpt2Trait_1;
    MaterialCardOpt2Trait.traitKey = "MaterialCardOpt2";
    MaterialCardOpt2Trait = MaterialCardOpt2Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCardOpt2Trait")
    ], MaterialCardOpt2Trait);
    return MaterialCardOpt2Trait;
}(MaterialCardOptBaseTrait_1.default));
exports.default = MaterialCardOpt2Trait;

cc._RF.pop();