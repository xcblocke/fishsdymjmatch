"use strict";
cc._RF.push(module, '66c27dEKH9BJJRnyh8C5/PN', 'GameUI');
// Scripts/core/view/component/GameUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var DGameBtnClick_1 = require("../../../dot/DGameBtnClick");
var UserModel_1 = require("../../../gamePlay/user/UserModel");
var GameInputEnum_1 = require("../../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../simulator/constant/GameTypeEnums");
var GameUtils_1 = require("../../simulator/util/GameUtils");
var GameInteraction_1 = require("../../../GameInteraction/GameInteraction");
var ccclass = cc._decorator.ccclass;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnHitTipsProp = null;
        _this.btnShuffleProp = null;
        _this.btnSettings = null;
        _this.btnShuffle = null;
        _this.btnHitTips = null;
        _this._lblDailyChallengeDate = null;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        var e;
        this._matchNumLabel = this.node.getChildByName("nodeTop").getChildByName("labelCanMatchNum").getComponent(cc.Label);
        this._levelLabel = this.node.getChildByName("nodeTop").getChildByName("labelLevel").getComponent(cc.Label);
        this._levelDesc = this.node.getChildByName("nodeTop").getChildByName("levelDesc").getComponent(cc.Label);
        this.btnHitTipsProp = this.node.getChildByName("nodeBottom").getChildByName("btnPropHint").getChildByName("propCornerItem");
        this.btnShuffleProp = this.node.getChildByName("nodeBottom").getChildByName("btnShuffle").getChildByName("propCornerItem");
        this.btnSettings = this.node.getChildByName("nodeTop").getChildByName("btnSettings");
        this.btnShuffle = this.node.getChildByName("nodeBottom").getChildByName("btnShuffle");
        this.btnHitTips = this.node.getChildByName("nodeBottom").getChildByName("btnPropHint");
        this.btnSettings.getComponent(BaseUI_1.default).OnButtonClick(this.btnSettings, this.onBtnSettings.bind(this));
        this.btnShuffle.getComponent(BaseUI_1.default).OnButtonClick(this.btnShuffle, this.onBtnShuffle.bind(this));
        this.addHintBtnClick(this.btnHitTips, this.onBtnHitTips.bind(this));
        this._levelLabel.node.active = false;
        this._levelDesc.node.active = false;
        this.btnHitTipsProp.getChildByName("nodeNum").active = false;
        this.btnHitTipsProp.getChildByName("nodeVideo").active = false;
        this.btnShuffleProp.getChildByName("nodeNum").active = false;
        this.btnShuffleProp.getChildByName("nodeVideo").active = false;
        this._lblDailyChallengeDate = null === (e = this.node.getChildByName("nodeTop").getChildByName("lblDate")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
        if (this._lblDailyChallengeDate) {
            this._lblDailyChallengeDate.node.active = false;
            this._lblDailyChallengeDate.string = "";
        }
    };
    GameUI.prototype.start = function () {
        mj.EventManager.on("language-changed", this.onLanguageChanged, this);
    };
    GameUI.prototype.onDestroy = function () {
        mj.EventManager.off("language-changed", this.onLanguageChanged, this);
    };
    GameUI.prototype.addHintBtnClick = function (e, t, o) {
        if (o === void 0) { o = {}; }
        e && e.getComponent(BaseUI_1.default).OnButtonClick(e, Object.assign({
            func: t
        }, o));
    };
    GameUI.prototype.onLanguageChanged = function () {
        var e = this;
        this.scheduleOnce(function () {
            e._adaptLvPos();
        }, 0);
    };
    GameUI.prototype.updateMatchNum = function (e) {
        this._matchNumLabel.string = e.toString();
    };
    GameUI.prototype.updateLevel = function (e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (!this._levelLabel.node.active) {
                this._levelLabel.node.active = true;
                this._levelDesc.node.active = true;
            }
            this._levelLabel.string = e.toString();
            this.handleLevelLable(this._levelLabel, this._levelDesc);
            this._adaptLvPos();
        }
    };
    GameUI.prototype._adaptLvPos = function () {
        if (this._levelDesc.node && this._levelDesc.node.active && cc.isValid(this._levelLabel.node)) {
            var e = this._levelDesc.node.width, t = this._levelDesc.node.x, o = this._levelDesc.node.y, n = this._levelLabel.node.y;
            Math.abs(o - n) < 15 && (this._levelLabel.node.x = t + e / 2 + 10);
        }
    };
    GameUI.prototype.handleLevelLable = function () { };
    GameUI.prototype.updateDailyChallengeDate = function (e) {
        if (this._lblDailyChallengeDate) {
            this._lblDailyChallengeDate.node.active || (this._lblDailyChallengeDate.node.active = true);
            var t = GameUtils_1.default.formatDateStringMonthDay(e) || "";
            this._lblDailyChallengeDate.string = t;
        }
    };
    GameUI.prototype.updateHitTipsProp = function (e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var t = this.node.getChildByName("nodeBottom").active;
            t || (this.node.getChildByName("nodeBottom").active = true);
            var o = e <= 0;
            this.btnHitTipsProp.active = true;
            this.btnHitTipsProp.getChildByName("nodeNum").active = !o;
            this.btnHitTipsProp.getChildByName("nodeNum").getChildByName("labelNum").getComponent(cc.Label).string = e.toString();
            this.btnHitTipsProp.getChildByName("nodeVideo").active = o;
            this.node.getChildByName("nodeBottom").active = t;
        }
    };
    GameUI.prototype.updateShuffleProp = function (e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var t = this.node.getChildByName("nodeBottom").active;
            t || (this.node.getChildByName("nodeBottom").active = true);
            var o = e <= 0;
            this.btnShuffleProp.active = true;
            this.btnShuffleProp.getChildByName("nodeNum").active = !o;
            this.btnShuffleProp.getChildByName("nodeNum").getChildByName("labelNum").getComponent(cc.Label).string = e.toString();
            this.btnShuffleProp.getChildByName("nodeVideo").active = o;
            this.node.getChildByName("nodeBottom").active = t;
        }
    };
    GameUI.prototype.onBtnHitTips = function () {
        DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Hint);
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.HitTips
        });
    };
    GameUI.prototype.onBtnShuffle = function () {
        DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Shuffle);
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
            from: GameInputEnum_1.EShuffleFrom.Normal
        });
    };
    GameUI.prototype.onBtnSettings = function () {
        DGameBtnClick_1.DotGameBtnClick.dotGame(DGameBtnClick_1.EBoardClickType.Setting);
    };
    GameUI.prototype.getSettingsBtn = function () {
        return this.btnSettings;
    };
    __decorate([
        mj.traitEvent("GameUI_onLoad")
    ], GameUI.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("GameUI_addHintBtn")
    ], GameUI.prototype, "addHintBtnClick", null);
    __decorate([
        mj.traitEvent("GameUI_updateLevel")
    ], GameUI.prototype, "updateLevel", null);
    __decorate([
        mj.traitEvent("GameUI_adaptLv")
    ], GameUI.prototype, "_adaptLvPos", null);
    __decorate([
        mj.traitEvent("GameUI_handleLvLbl")
    ], GameUI.prototype, "handleLevelLable", null);
    __decorate([
        mj.traitEvent("GameUI_updateDCDate")
    ], GameUI.prototype, "updateDailyChallengeDate", null);
    __decorate([
        mj.traitEvent("GameUI_updateHitTipsProp")
    ], GameUI.prototype, "updateHitTipsProp", null);
    __decorate([
        mj.traitEvent("GameUI_updateShuffleProp")
    ], GameUI.prototype, "updateShuffleProp", null);
    __decorate([
        mj.traitEvent("GameUI_onBtnHitTips")
    ], GameUI.prototype, "onBtnHitTips", null);
    __decorate([
        mj.traitEvent("GameUI_onBtnShuffle")
    ], GameUI.prototype, "onBtnShuffle", null);
    __decorate([
        mj.traitEvent("GameUI_onBtnSettings")
    ], GameUI.prototype, "onBtnSettings", null);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

cc._RF.pop();