"use strict";
cc._RF.push(module, '09d7bQrDqtHMZG9JzCftC8X', 'MaterialCardOpt1Trait');
// subpackages/l_materialCardOpt/Scripts/MaterialCardOpt1Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardOptBaseTrait_1 = require("./MaterialCardOptBaseTrait");
var MaterialCardOptListTrait_1 = require("./MaterialCardOptListTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var MaterialCardOpt1Trait = /** @class */ (function (_super) {
    __extends(MaterialCardOpt1Trait, _super);
    function MaterialCardOpt1Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 10;
        _this._intervals = [3, 5, 6];
        _this._gameModes = [GameTypeEnums_1.MjGameType.Normal];
        return _this;
    }
    MaterialCardOpt1Trait_1 = MaterialCardOpt1Trait;
    MaterialCardOpt1Trait.prototype.onLoad = function () {
        var e, r, a, i, o, n;
        _super.prototype.onLoad.call(this);
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 10;
        this._intervals = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.intervals) && void 0 !== i ? i : [3, 5, 6];
        this._gameModes = null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o.gameModes) && void 0 !== n ? n : [GameTypeEnums_1.MjGameType.Normal];
    };
    MaterialCardOpt1Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isGameModeMatch(this._gameModes)) {
                e();
                return;
            }
            var a = this.getCurrentGameDataLevel();
            if (this._shouldTrigger(a)) {
                this._triggerMaterialChange();
            }
            else {
                0 !== this.getCurMaterialCard() && this.setCurMaterialCard(0);
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCardOpt1Trait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCardOpt1Trait.prototype._shouldTrigger = function (t) {
        if (t < this._startLevel)
            return false;
        if (t === this._startLevel)
            return true;
        for (var e = t - this._startLevel, r = 0; r < this._intervals.length; r++) {
            var a = this._intervals[r];
            if (r === this._intervals.length - 1)
                return e > 0 && e % a == 0;
            if (e === a)
                return true;
            if (!(e > a))
                return false;
            e -= a;
        }
        return false;
    };
    MaterialCardOpt1Trait.prototype._triggerMaterialChange = function () {
        var t = MaterialCardOptListTrait_1.default.getInstance();
        t && t.switchToNextMaterialCard();
    };
    var MaterialCardOpt1Trait_1;
    MaterialCardOpt1Trait.traitKey = "MaterialCardOpt1";
    MaterialCardOpt1Trait = MaterialCardOpt1Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCardOpt1Trait")
    ], MaterialCardOpt1Trait);
    return MaterialCardOpt1Trait;
}(MaterialCardOptBaseTrait_1.default));
exports.default = MaterialCardOpt1Trait;

cc._RF.pop();