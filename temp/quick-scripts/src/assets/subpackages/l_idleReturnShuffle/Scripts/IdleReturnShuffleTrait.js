"use strict";
cc._RF.push(module, '9409fnb/x5Oxb+/tEYTKmpD', 'IdleReturnShuffleTrait');
// subpackages/l_idleReturnShuffle/Scripts/IdleReturnShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var IdleReturnShuffleTrait = /** @class */ (function (_super) {
    __extends(IdleReturnShuffleTrait, _super);
    function IdleReturnShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._idleSeconds = 10;
        _this._maxTriggersPerLevel = 3;
        _this._startLevel = 2;
        return _this;
    }
    IdleReturnShuffleTrait.prototype._getLevelKey = function (t, e) {
        return t + "-" + e;
    };
    IdleReturnShuffleTrait.prototype._getTriggerCount = function (t, e) {
        var a = this._getLevelKey(t, e);
        return this.localData.triggerCountMap[a] || 0;
    };
    IdleReturnShuffleTrait.prototype._incrementTriggerCount = function (t, e) {
        var a = this._getLevelKey(t, e), r = this._getTriggerCount(t, e);
        this.localData.triggerCountMap[a] = r + 1;
        this.localData.triggerCountMap = this.localData.triggerCountMap;
    };
    IdleReturnShuffleTrait.prototype._getHasIdled = function (t) {
        return this.localData.hasIdledMap[t] || false;
    };
    IdleReturnShuffleTrait.prototype._setHasIdled = function (t, e) {
        this.localData.hasIdledMap[t] = e;
        this.localData.hasIdledMap = this.localData.hasIdledMap;
    };
    IdleReturnShuffleTrait.prototype._getLastMatchTimeMs = function (t) {
        return this.localData.lastMatchTimeMsMap[t] || 0;
    };
    IdleReturnShuffleTrait.prototype._setLastMatchTimeMs = function (t, e) {
        this.localData.lastMatchTimeMsMap[t] = e;
        this.localData.lastMatchTimeMsMap = this.localData.lastMatchTimeMsMap;
    };
    IdleReturnShuffleTrait.prototype._getHasNormalExit = function (t) {
        return this.localData.hasNormalExitMap[t] || false;
    };
    IdleReturnShuffleTrait.prototype._setHasNormalExit = function (t, e) {
        this.localData.hasNormalExitMap[t] = e;
        this.localData.hasNormalExitMap = this.localData.hasNormalExitMap;
    };
    IdleReturnShuffleTrait.prototype.onLoad = function () {
        var e, a, r, i;
        _super.prototype.onLoad.call(this);
        this._idleSeconds = (null === (e = this._traitData) || void 0 === e ? void 0 : e.idleSeconds) || 10;
        this._maxTriggersPerLevel = (null === (a = this._traitData) || void 0 === a ? void 0 : a.maxTriggersPerLevel) || 3;
        this._startLevel = (null === (r = this._traitData) || void 0 === r ? void 0 : r.startLevel) || 2;
        this.localData.currentGameType || (this.localData.currentGameType = "");
        this.localData.currentLevelId || (this.localData.currentLevelId = 0);
        this.localData.triggerCountMap || (this.localData.triggerCountMap = {});
        this.localData.hasIdledMap || (this.localData.hasIdledMap = {});
        this.localData.lastMatchTimeMsMap || (this.localData.lastMatchTimeMsMap = {});
        this.localData.hasNormalExitMap || (this.localData.hasNormalExitMap = {});
        if (this.localData.currentGameType) {
            var s = this.localData.currentGameType, l = this._getHasNormalExit(s), n = this._getLastMatchTimeMs(s);
            if (!l && n > 0) {
                (((null === (i = UserModel_1.default.getInstance().getGameDataByGameType(s).localData) || void 0 === i ? void 0 : i.lastUpdateTime) || 0) - n) / 1000 >= this._idleSeconds && this._setHasIdled(s, true);
            }
        }
        var c = this._getLevelKey(this.localData.currentGameType, this.localData.currentLevelId);
        this.localData.triggerCountMap[c], this._getHasIdled(this.localData.currentGameType);
    };
    IdleReturnShuffleTrait.prototype.onClearBhv_collision = function (t, e) {
        var a = UserModel_1.default.getInstance();
        if (a.normalData.getLevelId() < this._startLevel)
            e();
        else {
            var r = a.getCurrentGameType(), i = Date.now();
            this._setLastMatchTimeMs(r, i);
            e();
        }
    };
    IdleReturnShuffleTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        var a = UserModel_1.default.getInstance();
        if (a.normalData.getLevelId() < this._startLevel)
            e();
        else {
            var r = this.localData.currentGameType || a.getCurrentGameType();
            this._setHasNormalExit(r, true);
            var i = this._getLastMatchTimeMs(r);
            if (i && 0 !== i) {
                if ((Date.now() - i) / 1000 >= this._idleSeconds) {
                    this._setHasIdled(r, true);
                }
                else {
                    this._setHasIdled(r, false);
                }
                e();
            }
            else
                e();
        }
    };
    IdleReturnShuffleTrait.prototype.onIptInitView_pushEff = function (t, e) {
        var a = t.ins;
        if (a && a.gameContext) {
            var r = a.gameContext, i = r.getTileMapObject();
            if (UserModel_1.default.getInstance().normalData.getLevelId() < this._startLevel)
                e();
            else {
                var s = r.getIsNewGame(), l = r.getIsRestart(), n = r.getGameData().getLevelId(), c = r.gameType;
                this.localData.currentGameType = c;
                if (s || l) {
                    this.localData.currentLevelId, this.localData.currentGameType;
                    this._setHasIdled(c, false);
                    this._setHasNormalExit(c, false);
                    this._setLastMatchTimeMs(c, Date.now());
                    this.localData.currentGameType = c;
                    this.localData.currentLevelId = n;
                    e();
                }
                else if (this._getHasIdled(c)) {
                    if (this._getTriggerCount(c, n) >= this._maxTriggersPerLevel) {
                        this._setHasIdled(c, false);
                        this._setHasNormalExit(c, false);
                        e();
                    }
                    else {
                        r.shuffleModifier.shuffle();
                        i.updateCanMatchTiles();
                        r.gameModifier.modifyShuffle();
                        this._incrementTriggerCount(c, n);
                        this._setHasIdled(c, false);
                        this._setHasNormalExit(c, false);
                        this._setLastMatchTimeMs(c, Date.now());
                        this.localData.currentGameType = c;
                        this.localData.currentLevelId = n;
                        this._getTriggerCount(c, n);
                        e();
                    }
                }
                else {
                    var h = this._getLastMatchTimeMs(c);
                    h && 0 !== h || this._setLastMatchTimeMs(c, Date.now());
                    this._setHasNormalExit(c, false);
                    e();
                }
            }
        }
        else
            e();
    };
    IdleReturnShuffleTrait.traitKey = "IdleReturnShuffle";
    IdleReturnShuffleTrait = __decorate([
        mj.trait,
        mj.class("IdleReturnShuffleTrait")
    ], IdleReturnShuffleTrait);
    return IdleReturnShuffleTrait;
}(Trait_1.default));
exports.default = IdleReturnShuffleTrait;

cc._RF.pop();