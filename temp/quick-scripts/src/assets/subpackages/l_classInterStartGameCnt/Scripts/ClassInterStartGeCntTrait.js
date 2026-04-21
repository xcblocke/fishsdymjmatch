"use strict";
cc._RF.push(module, '7b0ebEcNWVPbZW1FPoBkN1I', 'ClassInterStartGeCntTrait');
// subpackages/l_classInterStartGameCnt/Scripts/ClassInterStartGeCntTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ClassInterStartGeCntTrait = /** @class */ (function (_super) {
    __extends(ClassInterStartGeCntTrait, _super);
    function ClassInterStartGeCntTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._skipAdGameCount = 2;
        return _this;
    }
    ClassInterStartGeCntTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData;
        this._skipAdGameCount = (null == e ? void 0 : e.skipAdGameCount) || 2;
        void 0 !== this.localData.playedGameCount && null !== this.localData.playedGameCount && "" !== this.localData.playedGameCount || (this.localData.playedGameCount = 0);
    };
    ClassInterStartGeCntTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic) {
            if (this.localData.playedGameCount <= this._skipAdGameCount) {
                e({
                    returnVal: false,
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    ClassInterStartGeCntTrait.prototype.onGsListener_onNewGame = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic) {
            this.localData.playedGameCount++;
            this.localData = this.localData;
        }
        e();
    };
    ClassInterStartGeCntTrait.prototype.onGsListener_onReplayGame = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Classic) {
            this.localData.playedGameCount++;
            this.localData = this.localData;
        }
        e();
    };
    ClassInterStartGeCntTrait.traitKey = "ClassInterStartGeCnt";
    ClassInterStartGeCntTrait = __decorate([
        mj.trait,
        mj.class("ClassInterStartGeCntTrait")
    ], ClassInterStartGeCntTrait);
    return ClassInterStartGeCntTrait;
}(Trait_1.default));
exports.default = ClassInterStartGeCntTrait;

cc._RF.pop();