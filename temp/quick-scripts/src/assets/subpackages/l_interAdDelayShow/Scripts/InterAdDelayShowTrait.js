"use strict";
cc._RF.push(module, '73ae78/FuxLOLNWKNqBsycV', 'InterAdDelayShowTrait');
// subpackages/l_interAdDelayShow/Scripts/InterAdDelayShowTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var InterAdDelayShowTrait = /** @class */ (function (_super) {
    __extends(InterAdDelayShowTrait, _super);
    function InterAdDelayShowTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._beforeInterAdDelayTime = 0;
        _this._restartFrom = null;
        _this._delayTimerId = null;
        _this._allowBackDuringDelay = false;
        _this._isOnlyReplay = false;
        _this._isOnlyTile2Replay = false;
        _this._hasClearInCurrentGame = false;
        return _this;
    }
    InterAdDelayShowTrait.prototype.onLoad = function () {
        var e, a, n, r;
        _super.prototype.onLoad.call(this);
        void 0 !== (null === (e = this._traitData) || void 0 === e ? void 0 : e.beforeInterAdDelayTime) && (this._beforeInterAdDelayTime = 1000 * this._traitData.beforeInterAdDelayTime);
        void 0 !== (null === (a = this._traitData) || void 0 === a ? void 0 : a.allowBackDuringDelay) && (this._allowBackDuringDelay = this._traitData.allowBackDuringDelay);
        void 0 !== (null === (n = this._traitData) || void 0 === n ? void 0 : n.isOnlyReplay) && (this._isOnlyReplay = this._traitData.isOnlyReplay);
        void 0 !== (null === (r = this._traitData) || void 0 === r ? void 0 : r.isOnlyTile2Replay) && (this._isOnlyTile2Replay = this._traitData.isOnlyTile2Replay);
    };
    InterAdDelayShowTrait.prototype.onIptRestart_excute = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var a = t.args[0];
            this._restartFrom = (null == a ? void 0 : a.callFrom) || null;
            e();
        }
        else
            e();
    };
    InterAdDelayShowTrait.prototype.onEntAniFiBhv_start = function (t, e) {
        var a, n = this;
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var r = t.ins, i = null === (a = null == r ? void 0 : r.context) || void 0 === a ? void 0 : a.gameView, l = this._restartFrom;
            this._restartFrom = null;
            null === l && (this._hasClearInCurrentGame = false);
            if (null !== this._delayTimerId) {
                clearTimeout(this._delayTimerId);
                this._delayTimerId = null;
            }
            !this._allowBackDuringDelay && this._beforeInterAdDelayTime > 0 && this.disableBackBtnInteractable(i);
            this._delayTimerId = setTimeout(function () {
                n._delayTimerId = null;
                n._allowBackDuringDelay || n.enableBackBtnInteractable(i);
                if (n._isOnlyTile2Replay) {
                    UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal && null !== l && ("setting" === l ? n.playInterAd("settings_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_ActiveRestart, function () { }, function () { }) : "fail" === l && n.playInterAd("fail_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_FailRestart, function () { }, function () { }));
                }
                else if (n._isOnlyReplay) {
                    null !== l && n._hasClearInCurrentGame && ("setting" === l ? n.playInterAd("settings_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_ActiveRestart, function () { }, function () { }) : "fail" === l && n.playInterAd("fail_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_FailRestart, function () { }, function () { }));
                }
                else {
                    if ("setting" === l) {
                        n.playInterAd("settings_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_ActiveRestart, function () { }, function () { });
                    }
                    else {
                        if ("fail" === l) {
                            n.playInterAd("fail_replay", DGameAdShow_1.EAdPosition.FrontInsertScreen_FailRestart, function () { }, function () { });
                        }
                        else {
                            n.playInterAd("new_game", DGameAdShow_1.EAdPosition.FrontInsertScreen_GameNew, function () { }, function () { });
                        }
                    }
                }
            }, this._beforeInterAdDelayTime);
            e();
        }
        else
            e();
    };
    InterAdDelayShowTrait.prototype.onClearBhv_collision = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this._hasClearInCurrentGame = true;
            e();
        }
        else
            e();
    };
    InterAdDelayShowTrait.prototype.onMainGameBtnBack_onClick = function (t, e) {
        UserModel_1.default.getInstance().getCurrentGameType(), GameTypeEnums_1.MjGameType.Classic, e();
    };
    InterAdDelayShowTrait.prototype.disableBackBtnInteractable = function (t) {
        if (t && cc.isValid(t.topRootNode)) {
            var e = t.topRootNode.getChildByName("btnBack");
            if (e && cc.isValid(e)) {
                var a = e.getComponent(cc.Button);
                a && (a.interactable = false);
            }
        }
    };
    InterAdDelayShowTrait.prototype.enableBackBtnInteractable = function (t) {
        if (t && cc.isValid(t.topRootNode)) {
            var e = t.topRootNode.getChildByName("btnBack");
            if (e && cc.isValid(e)) {
                var a = e.getComponent(cc.Button);
                a && (a.interactable = true);
            }
        }
    };
    InterAdDelayShowTrait.prototype.playInterAd = function (t, e, a, n) {
        DGameAdShowStage_1.DotGameAdShowStage.dot(true, "clickAdLock");
        AdManager_1.default.getInstance().playInterAd(e, {
            onSuccess: function () {
                a && a();
            },
            onFailed: function () {
                n && n();
            }
        }, t, {
            adTimeType: "beforeInterAd"
        });
    };
    InterAdDelayShowTrait.traitKey = "InterAdDelayShow";
    InterAdDelayShowTrait = __decorate([
        mj.trait,
        mj.class("InterAdDelayShowTrait")
    ], InterAdDelayShowTrait);
    return InterAdDelayShowTrait;
}(Trait_1.default));
exports.default = InterAdDelayShowTrait;

cc._RF.pop();