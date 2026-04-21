"use strict";
cc._RF.push(module, '6590cF3t3dGy7aQ79HdQ3ZP', 'ReturnAutoShuffleTrait');
// subpackages/l_returnAutoShuffle/Scripts/ReturnAutoShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ReturnAutoShuffleTrait = /** @class */ (function (_super) {
    __extends(ReturnAutoShuffleTrait, _super);
    function ReturnAutoShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._matchThreshold = 1;
        _this._cdHours = 3.5;
        _this._isCdChange = false;
        _this._startLevel = 2;
        return _this;
    }
    ReturnAutoShuffleTrait.prototype._getLastInGameTimeMs = function (t) {
        return this.localData.lastInGameTimeMsMap[t] || 0;
    };
    ReturnAutoShuffleTrait.prototype._setLastInGameTimeMs = function (t, a) {
        this.localData.lastInGameTimeMsMap[t] = a;
        this.localData.lastInGameTimeMsMap = this.localData.lastInGameTimeMsMap;
    };
    ReturnAutoShuffleTrait.prototype._getHasNormalExit = function (t) {
        return this.localData.hasNormalExitMap[t] || false;
    };
    ReturnAutoShuffleTrait.prototype._setHasNormalExit = function (t, a) {
        this.localData.hasNormalExitMap[t] = a;
        this.localData.hasNormalExitMap = this.localData.hasNormalExitMap;
    };
    ReturnAutoShuffleTrait.prototype._updateContinuousLoginDays = function () {
        var t = Date.now(), a = this.localData.lastLoginDate;
        if (a) {
            var e = new Date(a), i = new Date(t);
            if (e.getFullYear() !== i.getFullYear() || e.getMonth() !== i.getMonth() || e.getDate() !== i.getDate()) {
                if (1 === this._getDaysDiff(a, t)) {
                    this.localData.continuousLoginDays++;
                    this.localData.lastLoginDate = t;
                }
                else {
                    this.localData.continuousLoginDays = 0;
                    this.localData.lastLoginDate = t;
                }
                this.localData.continuousLoginDays = this.localData.continuousLoginDays;
                this.localData.lastLoginDate = this.localData.lastLoginDate;
            }
        }
        else {
            this.localData.continuousLoginDays = 0;
            this.localData.lastLoginDate = t;
        }
    };
    ReturnAutoShuffleTrait.prototype._getDaysDiff = function (t, a) {
        var e = new Date(t), i = new Date(a);
        e.setHours(0, 0, 0, 0);
        i.setHours(0, 0, 0, 0);
        var o = Math.abs(i.getTime() - e.getTime());
        return Math.floor(o / 86400000);
    };
    ReturnAutoShuffleTrait.prototype._getContinuousLoginDays = function () {
        return 0 === this.localData.continuousLoginDays ? 1 : this.localData.continuousLoginDays;
    };
    ReturnAutoShuffleTrait.prototype._getCurrentCdHours = function () {
        if (!this._isCdChange)
            return this._cdHours;
        var t = this._getContinuousLoginDays();
        return this._cdHours * t;
    };
    ReturnAutoShuffleTrait.prototype.onLoad = function () {
        var a, e, i, o, s;
        _super.prototype.onLoad.call(this);
        this._matchThreshold = (null === (a = this._traitData) || void 0 === a ? void 0 : a.matchThreshold) || 1;
        this._cdHours = (null === (e = this._traitData) || void 0 === e ? void 0 : e.cdHours) || 3.5;
        this._isCdChange = (null === (i = this._traitData) || void 0 === i ? void 0 : i.isCdChange) || false;
        this._startLevel = (null === (o = this._traitData) || void 0 === o ? void 0 : o.startLevel) || 2;
        this.localData.currentGameType || (this.localData.currentGameType = "");
        this.localData.lastInGameTimeMsMap || (this.localData.lastInGameTimeMsMap = {});
        this.localData.hasNormalExitMap || (this.localData.hasNormalExitMap = {});
        void 0 === this.localData.continuousLoginDays && (this.localData.continuousLoginDays = 0);
        this.localData.lastLoginDate || (this.localData.lastLoginDate = 0);
        this._isCdChange && this._updateContinuousLoginDays();
        if (this.localData.currentGameType) {
            var r = this.localData.currentGameType;
            if (!this._getHasNormalExit(r)) {
                var l = (null === (s = UserModel_1.default.getInstance().getGameDataByGameType(r).localData) || void 0 === s ? void 0 : s.lastUpdateTime) || 0;
                this._setLastInGameTimeMs(r, l || Date.now());
            }
        }
    };
    ReturnAutoShuffleTrait.prototype.onMainGameCtrl_uiDes = function (t, a) {
        if (UserModel_1.default.getInstance().normalData.getLevelId() < this._startLevel)
            a();
        else {
            var e = this.localData.currentGameType;
            if (e !== GameTypeEnums_1.MjGameType.Tile2Normal) {
                if (e) {
                    this._setHasNormalExit(e, true);
                    this._setLastInGameTimeMs(e, Date.now());
                    a();
                }
                else
                    a();
            }
            else
                a();
        }
    };
    ReturnAutoShuffleTrait.prototype.onIptInitView_pushEff = function (t, a) {
        var e = t.ins;
        if (e && e.gameContext) {
            var i = e.gameContext, o = i.getTileMapObject(), s = i.gameType;
            this.localData.currentGameType = s;
            if (s !== GameTypeEnums_1.MjGameType.Tile2Normal) {
                if (UserModel_1.default.getInstance().normalData.getLevelId() < this._startLevel)
                    a();
                else {
                    var r = i.getIsNewGame(), u = i.getIsRestart();
                    if (r || u) {
                        this._resetNormalExit(s);
                        a();
                    }
                    else {
                        var c = this._getLastInGameTimeMs(s);
                        this._getHasNormalExit(s);
                        if (c) {
                            var h = Date.now(), f = 3600000 * this._getCurrentCdHours(), p = h - c;
                            if (p < 0) {
                                this._resetNormalExit(s);
                                a();
                            }
                            else if (p < f) {
                                this._resetNormalExit(s);
                                a();
                            }
                            else {
                                if (o.getCanMatchCardPairNum() == this._matchThreshold) {
                                    i.shuffleModifier.shuffle();
                                    o.updateCanMatchTiles();
                                    i.gameModifier.modifyShuffle();
                                    this._resetNormalExit(s);
                                    a();
                                }
                                else {
                                    this._resetNormalExit(s);
                                    a();
                                }
                            }
                        }
                        else {
                            this._resetNormalExit(s);
                            a();
                        }
                    }
                }
            }
            else
                a();
        }
        else
            a();
    };
    ReturnAutoShuffleTrait.prototype._resetNormalExit = function (t) {
        this._setHasNormalExit(t, false);
        this._setLastInGameTimeMs(t, Date.now());
        this.localData.currentGameType = t;
    };
    ReturnAutoShuffleTrait.traitKey = "ReturnAutoShuffle";
    ReturnAutoShuffleTrait = __decorate([
        mj.trait,
        mj.class("ReturnAutoShuffleTrait")
    ], ReturnAutoShuffleTrait);
    return ReturnAutoShuffleTrait;
}(Trait_1.default));
exports.default = ReturnAutoShuffleTrait;

cc._RF.pop();