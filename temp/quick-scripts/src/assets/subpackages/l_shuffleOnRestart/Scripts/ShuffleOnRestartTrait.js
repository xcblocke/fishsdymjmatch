"use strict";
cc._RF.push(module, 'd4e1aonjCxJ0ICg4FYd8oWC', 'ShuffleOnRestartTrait');
// subpackages/l_shuffleOnRestart/Scripts/ShuffleOnRestartTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ShuffleOnRestartTrait = /** @class */ (function (_super) {
    __extends(ShuffleOnRestartTrait, _super);
    function ShuffleOnRestartTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.needAutoShuffle = false;
        _this.maxCount = 2;
        _this.minLevel = 2;
        return _this;
    }
    ShuffleOnRestartTrait_1 = ShuffleOnRestartTrait;
    ShuffleOnRestartTrait.prototype.onLoad = function () {
        var e, r, o, i;
        _super.prototype.onLoad.call(this);
        this.maxCount = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.maxCount) && void 0 !== r ? r : 2;
        this.minLevel = null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.minLevel) && void 0 !== i ? i : 2;
        if (this.isLocalEmpty(this.localData.lvID)) {
            this.localData.lvID = 0;
            this.localData.count = 0;
        }
    };
    ShuffleOnRestartTrait.prototype.onIptRestart_excute = function (t, e) {
        try {
            var o = t.ins, i = null == o ? void 0 : o.gameContext;
            if (!i) {
                e();
                return;
            }
            if (i.gameType !== GameTypeEnums_1.MjGameType.Normal) {
                e();
                return;
            }
            var n = UserModel_1.default.getInstance().normalData.getLevelId();
            if (n < this.minLevel) {
                e();
                return;
            }
            if (this.localData.lvID !== n) {
                this.localData.lvID = n;
                this.localData.count = 0;
            }
            if (this.localData.count >= this.maxCount) {
                e();
                return;
            }
            this.localData.count++;
            this.needAutoShuffle = true;
        }
        catch (t) {
            console.error("[" + ShuffleOnRestartTrait_1.traitKey + "] 重玩处理异常: " + (t.message || t));
        }
        e();
    };
    ShuffleOnRestartTrait.prototype.onIptInitView_pushEff = function (t, e) {
        if (this.needAutoShuffle) {
            this.needAutoShuffle = false;
            var r = t.ins;
            if (r && r.gameContext) {
                var o = r.gameContext, i = o.getTileMapObject();
                o.shuffleModifier.shuffle();
                i.updateCanMatchTiles();
                o.gameModifier.modifyShuffle();
                e();
            }
            else
                e();
        }
        else
            e();
    };
    ShuffleOnRestartTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    var ShuffleOnRestartTrait_1;
    ShuffleOnRestartTrait.traitKey = "ShuffleOnRestart";
    ShuffleOnRestartTrait = ShuffleOnRestartTrait_1 = __decorate([
        mj.trait,
        mj.class("ShuffleOnRestartTrait")
    ], ShuffleOnRestartTrait);
    return ShuffleOnRestartTrait;
}(Trait_1.default));
exports.default = ShuffleOnRestartTrait;

cc._RF.pop();