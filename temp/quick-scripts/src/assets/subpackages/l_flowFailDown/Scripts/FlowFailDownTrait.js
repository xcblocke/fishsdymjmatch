"use strict";
cc._RF.push(module, '458de0pho1FeZ+SsWCxmFnE', 'FlowFailDownTrait');
// subpackages/l_flowFailDown/Scripts/FlowFailDownTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FlowFailDownTrait = /** @class */ (function (_super) {
    __extends(FlowFailDownTrait, _super);
    function FlowFailDownTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._downInterval = 4;
        _this._initialStage = 1;
        _this._ffdCurLevel = 0;
        _this._ffdPrevLevel = 0;
        _this._ffdNextLevel = -1;
        return _this;
    }
    FlowFailDownTrait.prototype.onLoad = function () {
        var t, a;
        _super.prototype.onLoad.call(this);
        this._downInterval = null !== (t = this._traitData.downInterval) && void 0 !== t ? t : 4;
        this._initialStage = null !== (a = this._traitData.initialStage) && void 0 !== a ? a : 1;
        this.ensureLocalData();
    };
    FlowFailDownTrait.prototype.ensureLocalData = function () {
        this.isEmptyField(this.localData.isDeadNoRevive) && (this.localData.isDeadNoRevive = false);
        this.isEmptyField(this.localData.curLevelId) && (this.localData.curLevelId = 0);
    };
    FlowFailDownTrait.prototype.isEmptyField = function (e) {
        return null == e || "" === e;
    };
    FlowFailDownTrait.prototype.onGsListener_onNewGame = function (e, t) {
        var a, r = null === (a = e.args) || void 0 === a ? void 0 : a[0];
        if (r === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var i = UserModel_1.default.getInstance().getGameDataByGameType(r);
            if (i) {
                this.localData.isDeadNoRevive = false;
                this.localData.curLevelId = i.getLevelId();
                t();
            }
            else
                t();
        }
        else
            t();
    };
    FlowFailDownTrait.prototype.onTile2FailVw_replay = function (e, t) {
        this.localData.isDeadNoRevive = true;
        t();
    };
    FlowFailDownTrait.prototype.onFlwLv_getResolveStg = function (e, t) {
        var a, r, i = null === (a = e.args) || void 0 === a ? void 0 : a[0], o = null === (r = e.args) || void 0 === r ? void 0 : r[1];
        if (i <= 0 || !o)
            t();
        else {
            e.args[0] = this.getFixedLevel(i, o);
            t();
        }
    };
    FlowFailDownTrait.prototype.getFixedLevel = function (e, t) {
        var a = e;
        if (this._ffdCurLevel > 0)
            a = this._ffdCurLevel + (e - this._ffdPrevLevel);
        else {
            var r = Math.max(0, Math.min(t.length - 1, this._initialStage - 1));
            a = t.slice(0, r).reduce(function (e, t) {
                var a;
                return e + (null !== (a = t.levelsInStage) && void 0 !== a ? a : 10);
            }, 0) + e;
        }
        return a;
    };
    FlowFailDownTrait.prototype.onFlwLv_fixLevelStage = function (e, t) {
        var a, r, i, o = null === (a = e.args) || void 0 === a ? void 0 : a[0], n = null === (r = e.args) || void 0 === r ? void 0 : r[1], l = null === (i = e.args) || void 0 === i ? void 0 : i[2];
        if (o <= 0 || !n || !l)
            t();
        else {
            var v = this.fixLevelStage(o, n, l);
            if (v.hasDown) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        stageIdx: v.stageIdx,
                        levelInStage: v.levelInStage,
                        posInStage: v.posInStage
                    }
                });
            }
            else {
                t();
            }
        }
    };
    FlowFailDownTrait.prototype.fixLevelStage = function (e, t, a) {
        var r;
        if (e <= this._ffdNextLevel)
            return {
                stageIdx: a.stageIdx,
                levelInStage: a.levelInStage,
                posInStage: a.posInStage,
                hasDown: false
            };
        if (!this.localData.isDeadNoRevive)
            return {
                stageIdx: a.stageIdx,
                levelInStage: a.levelInStage,
                posInStage: a.posInStage,
                hasDown: false
            };
        var i = this.getFixedLevel(e, t), o = a.stageIdx, n = Math.max(0, o - 1), l = (i - 1) % (null !== (r = t[n].levelsInStage) && void 0 !== r ? r : 10) + 1, s = t.slice(0, n).reduce(function (e, t) {
            var a;
            return e + (null !== (a = t.levelsInStage) && void 0 !== a ? a : 10);
        }, 0) + l;
        this._ffdCurLevel = s;
        this._ffdPrevLevel = e;
        this.localData.isDeadNoRevive = false;
        this._ffdNextLevel = e + this._downInterval;
        var v = this.resolveStage(s, t);
        return {
            stageIdx: v.stageIdx,
            levelInStage: v.levelInStage,
            posInStage: v.posInStage,
            hasDown: true
        };
    };
    FlowFailDownTrait.prototype.resolveStage = function (e, t) {
        for (var a, r = Math.max(0, e - 1), i = 0; i < t.length; i++) {
            var o = null !== (a = t[i].levelsInStage) && void 0 !== a ? a : 10;
            if (r < o)
                return {
                    stageIdx: i,
                    levelInStage: r + 1,
                    posInStage: o > 1 ? r / (o - 1) : 0,
                    overflow: 0
                };
            r -= o;
        }
        return {
            stageIdx: t.length - 1,
            levelInStage: 0,
            posInStage: 1,
            overflow: r + 1
        };
    };
    FlowFailDownTrait.traitKey = "FlowFailDown";
    FlowFailDownTrait = __decorate([
        mj.trait,
        mj.class("FlowFailDownTrait")
    ], FlowFailDownTrait);
    return FlowFailDownTrait;
}(Trait_1.default));
exports.default = FlowFailDownTrait;

cc._RF.pop();