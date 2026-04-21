"use strict";
cc._RF.push(module, '4ed5foFMAlKYJpaMu+W6+Wl', 'CardLockDarkenTile2Trait');
// subpackages/l_cardLockDarkenTile2/Scripts/CardLockDarkenTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var CardLockDarkenEffect_1 = require("../../../Scripts/CardLockDarkenEffect");
var DateManager_1 = require("../../../Scripts/core/simulator/util/DateManager");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardLockDarkenTile2Trait = /** @class */ (function (_super) {
    __extends(CardLockDarkenTile2Trait, _super);
    function CardLockDarkenTile2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isColdStart = true;
        _this._shouldShowDarkenCurrentGame = false;
        return _this;
    }
    Object.defineProperty(CardLockDarkenTile2Trait.prototype, "_cfg", {
        get: function () {
            var t;
            return null !== (t = this._traitData) && void 0 !== t ? t : {};
        },
        enumerable: false,
        configurable: true
    });
    CardLockDarkenTile2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData || (this.localData = {
            lastTile2PlayDate: 0,
            darkLevelId: -1
        });
        if (void 0 === this.localData.darkLevelId) {
            this.localData.darkLevelId = -1;
            this.localData = this.localData;
        }
    };
    CardLockDarkenTile2Trait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.Effect_InitView] = this._onEffectInitViewCB.bind(this);
        _t[GameEvent_1.EGameEvent.Effect_StartAutoMerge] = this._onEffectStartAutoMergeCB.bind(this);
        _t[GameEvent_1.EGameEvent.Behavior_ShuffleStayEnd] = this._onShuffleStayEndCB.bind(this);
        return _t;
    };
    CardLockDarkenTile2Trait.prototype.onUISetDlg_adjustPH = function (t, e) {
        var r;
        if (this._isTile2Mode()) {
            var a = t.ins, i = null === (r = null == a ? void 0 : a.getLockHighlightSwitchNode) || void 0 === r ? void 0 : r.call(a);
            i && cc.isValid(i) && (i.active = false);
        }
        e();
    };
    CardLockDarkenTile2Trait.prototype.onUISetDlg_updLckHL = function (t, e) {
        if (this._isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    CardLockDarkenTile2Trait.prototype.onGuide_skip = function (t, e) {
        if (this._isTile2Mode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else {
            e();
        }
    };
    CardLockDarkenTile2Trait.prototype.onTile2IptTchEnd_runClr = function (t, e) {
        if (this._isTile2Mode()) {
            var r = t.ins;
            if (r) {
                this._pushDarkenEffect(r, this._shouldShowDarkenCurrentGame, BehaviorsEnum_1.EInsertType.Root);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    CardLockDarkenTile2Trait.prototype._onEffectInitViewCB = function (t) {
        if (this._isTile2Mode()) {
            var e = this._getTile2MainLevel(), r = this._isTodayFirstTile2Game(), a = this._isColdStart;
            this._updatePlayTracking();
            var i = this.localData.darkLevelId === e;
            this._shouldShowDarkenCurrentGame = i || this._computeShouldShow(r, a);
            if (this._shouldShowDarkenCurrentGame && this.localData.darkLevelId !== e) {
                this.localData.darkLevelId = e;
                this.localData = this.localData;
            }
            this._pushDarkenEffect(t, this._shouldShowDarkenCurrentGame, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    CardLockDarkenTile2Trait.prototype._onEffectStartAutoMergeCB = function (t) {
        this._isTile2Mode() && this._pushDarkenEffect(t, false);
    };
    CardLockDarkenTile2Trait.prototype._onShuffleStayEndCB = function (t) {
        if (this._isTile2Mode() && t && t.context) {
            var e = t.context.gameCtr;
            if (e && e._gameSimulator) {
                e._gameSimulator;
                this._shouldShowDarkenCurrentGame && GameInteraction_1.GameInteraction.input({
                    inputType: GameInputEnum_1.EGameInputEnum.RefreshCardLockDarken,
                    isShowAni: false
                });
            }
        }
    };
    CardLockDarkenTile2Trait.prototype._computeShouldShow = function (t, e) {
        var r, a, i = t && this._checkParam(null !== (r = this._cfg.dailyFirst) && void 0 !== r ? r : [1, -1]), o = e && this._checkParam(null !== (a = this._cfg.coldStart) && void 0 !== a ? a : [1, -1]);
        return i || o;
    };
    CardLockDarkenTile2Trait.prototype._checkParam = function (t) {
        var e = __read(t, 2), r = e[0], a = e[1];
        return -1 !== a && (0 === a || (1 === r ? UserModel_1.default.getInstance().getGameActiveDays() >= a : 2 === r && this._getTile2MainLevel() >= a));
    };
    CardLockDarkenTile2Trait.prototype._isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    CardLockDarkenTile2Trait.prototype._isTodayFirstTile2Game = function () {
        var t = this.localData.lastTile2PlayDate;
        return !t || DateManager_1.default.getInstance().isNewDay(t, Date.now());
    };
    CardLockDarkenTile2Trait.prototype._getTile2MainLevel = function () {
        return UserModel_1.default.getInstance().tile2NormalData.getLevelId();
    };
    CardLockDarkenTile2Trait.prototype._updatePlayTracking = function () {
        this.localData.lastTile2PlayDate = Date.now();
        this.localData = this.localData;
        this._isColdStart = false;
    };
    CardLockDarkenTile2Trait.prototype._pushDarkenEffect = function (t, e, r) {
        if (r === void 0) { r = BehaviorsEnum_1.EInsertType.Parallel; }
        t && "function" == typeof t.pushEffect && t.pushEffect(new CardLockDarkenEffect_1.CardLockDarkenEffect({
            isAutoMerge: !e
        }), r);
    };
    CardLockDarkenTile2Trait.traitKey = "CardLockDarkenTile2";
    CardLockDarkenTile2Trait = __decorate([
        mj.trait,
        mj.class("CardLockDarkenTile2Trait")
    ], CardLockDarkenTile2Trait);
    return CardLockDarkenTile2Trait;
}(Trait_1.default));
exports.default = CardLockDarkenTile2Trait;

cc._RF.pop();