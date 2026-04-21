"use strict";
cc._RF.push(module, 'e9383F5wtFDxpi7MGcFoPlD', 'Tile2MagnetSlotStepTrait');
// subpackages/l_magnet/Scripts/Tile2MagnetSlotStepTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var Tile2MagnetSlotStepTrait = /** @class */ (function (_super) {
    __extends(Tile2MagnetSlotStepTrait, _super);
    function Tile2MagnetSlotStepTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._magnetItemNode = null;
        return _this;
    }
    Tile2MagnetSlotStepTrait.prototype.isMagnetNodeAlive = function () {
        return this._magnetItemNode && cc.isValid(this._magnetItemNode) && this._magnetItemNode.activeInHierarchy;
    };
    Tile2MagnetSlotStepTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2MagnetSlotStepTrait.prototype.isPreconMet = function () {
        return true;
    };
    Tile2MagnetSlotStepTrait.prototype.isBreakCon = function () {
        return true;
    };
    Tile2MagnetSlotStepTrait.prototype.getMatchPair = function () {
        return this.traitData.matchPair || 1;
    };
    Tile2MagnetSlotStepTrait.prototype.getStepCount = function () {
        return this.localData.stepCount || 0;
    };
    Tile2MagnetSlotStepTrait.prototype.getStepLimit = function () {
        return this.traitData.stepCount || 0;
    };
    Tile2MagnetSlotStepTrait.prototype.getSlotBarLimit = function () {
        return this.traitData.slotBarCount || 0;
    };
    Tile2MagnetSlotStepTrait.prototype.onT2MagnetItem_enterAni = function (t, e) {
        var r = t.ins;
        if (r && cc.isValid(r.node)) {
            this._magnetItemNode = r.node;
            this.localData.stepCount = 0;
        }
        e();
    };
    Tile2MagnetSlotStepTrait.prototype.onT2MagnetItem_onDestroy = function (t, e) {
        this._magnetItemNode = null;
        e();
    };
    Tile2MagnetSlotStepTrait.prototype.onClearT2Hlp_modifyStepCnt = function (t, e) {
        this.modifyStepCount();
        e();
    };
    Tile2MagnetSlotStepTrait.prototype.onClearT4Hlp_modifyStepCnt = function (t, e) {
        this.modifyStepCount();
        e();
    };
    Tile2MagnetSlotStepTrait.prototype.modifyStepCount = function () {
        if (!this.isMagnetNodeAlive()) {
            var t = UserModel_1.default.getInstance().getCurrentGameData().slotBarIds || [], e = this.getSlotBarLimit();
            if (t.length >= e) {
                this.localData.stepCount = (this.localData.stepCount || 0) + 1;
            }
            else {
                this.localData.stepCount = 0;
            }
        }
    };
    Tile2MagnetSlotStepTrait.prototype.onT2MagnetChk_chkCon = function (t, e) {
        var r = this.isPreconMet();
        r && (r = this.checkCanShow(t.ins));
        if (this.isBreakCon()) {
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: r
            });
        }
        else {
            e();
        }
    };
    Tile2MagnetSlotStepTrait.prototype.checkCanShow = function (t) {
        var e = AdManager_1.default.getInstance().checkVideoAdIsReady(), r = t.context, o = null == r ? void 0 : r.getGameData(), n = (null == o ? void 0 : o.slotBarIds) || [], a = this.getStepLimit(), i = this.getSlotBarLimit();
        return this.localData.stepCount >= a && n.length >= i && e;
    };
    Tile2MagnetSlotStepTrait.traitKey = "Tile2MagnetSlotStep";
    __decorate([
        mj.traitEvent("T2MagSlotStep_preMet")
    ], Tile2MagnetSlotStepTrait.prototype, "isPreconMet", null);
    __decorate([
        mj.traitEvent("T2MagSlotStep_breakCon")
    ], Tile2MagnetSlotStepTrait.prototype, "isBreakCon", null);
    Tile2MagnetSlotStepTrait = __decorate([
        mj.trait,
        mj.class("Tile2MagnetSlotStepTrait")
    ], Tile2MagnetSlotStepTrait);
    return Tile2MagnetSlotStepTrait;
}(Trait_1.default));
exports.default = Tile2MagnetSlotStepTrait;

cc._RF.pop();