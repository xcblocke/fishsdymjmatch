"use strict";
cc._RF.push(module, 'db6abxDQXBMU4nBc9haVkSR', 'FailFreeShuffleTrait');
// subpackages/l_failFreeShuffle/Scripts/FailFreeShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var FailFreeShuffleTrait = /** @class */ (function (_super) {
    __extends(FailFreeShuffleTrait, _super);
    function FailFreeShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            freeCount: 4
        };
        return _this;
    }
    FailFreeShuffleTrait.prototype.onLoad = function () {
        var t, o;
        _super.prototype.onLoad.call(this);
        this._config = {
            freeCount: null !== (o = null === (t = this._traitData) || void 0 === t ? void 0 : t.freeCount) && void 0 !== o ? o : 4
        };
        this.isLocalEmpty(this.localData.usedFreeShuffleCount) && (this.localData.usedFreeShuffleCount = 0);
    };
    FailFreeShuffleTrait.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    FailFreeShuffleTrait.prototype.getRemainingFreeCount = function () {
        return Math.max(0, this._config.freeCount - this.localData.usedFreeShuffleCount);
    };
    FailFreeShuffleTrait.prototype.hasFreeCount = function () {
        return this.getRemainingFreeCount() > 0;
    };
    FailFreeShuffleTrait.prototype.consumeFreeCount = function () {
        this.localData.usedFreeShuffleCount = this.localData.usedFreeShuffleCount + 1;
    };
    FailFreeShuffleTrait.prototype.onGameUI_onBtnShuffle = function (e, t) {
        t();
    };
    FailFreeShuffleTrait.prototype.onFailBhv_start = function (e, t) {
        var o, r, n;
        if (this.hasFreeCount()) {
            var i = e.ins, l = null === (n = null === (r = null === (o = e.args) || void 0 === o ? void 0 : o[0]) || void 0 === r ? void 0 : r.data) || void 0 === n ? void 0 : n.isGM;
            if ((null == i ? void 0 : i.context) && !l && !i.context.getTileMapObject().checkIsDead([])) {
                t();
                return;
            }
            this.showFreeShuffleDialog();
            i && "function" == typeof i.finish && i.finish();
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    FailFreeShuffleTrait.prototype.showFreeShuffleDialog = function () {
        var e = this;
        ControllerManager_1.default.getInstance().closeViewByName("WatchAdGetPropController");
        this.pushController("FailFreeShuffleDialogController", {
            onFreeShuffle: function () {
                e.executeFreeShuffleAndConsume();
            },
            onClose: function () { },
            bgStyle: null
        });
    };
    FailFreeShuffleTrait.prototype.executeFreeShuffleAndConsume = function () {
        this.consumeFreeCount();
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
            from: GameInputEnum_1.EShuffleFrom.Free
        });
    };
    FailFreeShuffleTrait.traitKey = "FailFreeShuffle";
    FailFreeShuffleTrait = __decorate([
        mj.trait,
        mj.class("FailFreeShuffleTrait")
    ], FailFreeShuffleTrait);
    return FailFreeShuffleTrait;
}(Trait_1.default));
exports.default = FailFreeShuffleTrait;

cc._RF.pop();