"use strict";
cc._RF.push(module, 'ab284cwnedGyYiII7URg3+P', 'GameOverInterAdTrait');
// subpackages/l_gameOverInterAd/Scripts/GameOverInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameOverInterAdTrait = /** @class */ (function (_super) {
    __extends(GameOverInterAdTrait, _super);
    function GameOverInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameOverInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GameOverInterAdTrait.prototype.playInterAd = function (t, e, r, n) {
        DGameAdShowStage_1.DotGameAdShowStage.dot(true, "clickAdLock");
        AdManager_1.default.getInstance().playInterAd(e, {
            onSuccess: function () {
                r && r();
            },
            onFailed: function () {
                n && n();
            }
        }, t, {
            adTimeType: "afterInterAd"
        });
    };
    GameOverInterAdTrait.prototype.onWinVw_playBtnAni = function (t, e) {
        UserModel_1.default.getInstance().getCurrentGameType(), GameTypeEnums_1.MjGameType.Classic, e();
    };
    GameOverInterAdTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isBlockInterAdShow()) {
                e();
            }
            else {
                this.playInterAd("result_show", DGameAdShow_1.EAdPosition.RearInsertScreen_Success, function () {
                    e();
                }, function () {
                    e();
                });
            }
        }
        else {
            e();
        }
    };
    GameOverInterAdTrait.prototype.onTLWinCtrl_viewShow = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isBlockInterAdShow()) {
                e();
            }
            else {
                this.playInterAd("result_show", DGameAdShow_1.EAdPosition.RearInsertScreen_TravelSuccess, function () {
                    e();
                }, function () {
                    e();
                });
            }
        }
        else {
            e();
        }
    };
    GameOverInterAdTrait.prototype.onDCWinCtrl_viewShow = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isBlockInterAdShow()) {
                e();
            }
            else {
                this.playInterAd("result_show", DGameAdShow_1.EAdPosition.RearInsertScreen_DcSuccess, function () {
                    e();
                }, function () {
                    e();
                });
            }
        }
        else {
            e();
        }
    };
    GameOverInterAdTrait.prototype.onTile2WinCtrl_viewShow = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this.isBlockInterAdShow()) {
                e();
            }
            else {
                this.playInterAd("result_show", DGameAdShow_1.EAdPosition.RearInsertScreen_Tile2Success, function () {
                    e();
                }, function () {
                    e();
                });
            }
        }
        else {
            e();
        }
    };
    GameOverInterAdTrait.prototype.isBlockInterAdShow = function () {
        return GameUtils_1.default.isRatingDialogReady();
    };
    GameOverInterAdTrait.traitKey = "GameOverInterAd";
    GameOverInterAdTrait.nextTimeOut = 900;
    __decorate([
        mj.traitEvent("GOInterAd_isBlocked")
    ], GameOverInterAdTrait.prototype, "isBlockInterAdShow", null);
    GameOverInterAdTrait = __decorate([
        mj.trait,
        mj.class("GameOverInterAdTrait")
    ], GameOverInterAdTrait);
    return GameOverInterAdTrait;
}(Trait_1.default));
exports.default = GameOverInterAdTrait;

cc._RF.pop();