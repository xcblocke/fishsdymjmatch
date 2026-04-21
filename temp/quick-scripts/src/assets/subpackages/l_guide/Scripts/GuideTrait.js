"use strict";
cc._RF.push(module, '6ecc0y2JUVHJIjEv6dDUfV3', 'GuideTrait');
// subpackages/l_guide/Scripts/GuideTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var enumRes_1 = require("../../../Scripts/constant/enumRes");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var DTutorial_1 = require("./DTutorial");
var GuideBehavior_1 = require("./GuideBehavior");
var GuideEffect_1 = require("./GuideEffect");
var InputGuide_1 = require("./InputGuide");
var GuideTrait = /** @class */ (function (_super) {
    __extends(GuideTrait, _super);
    function GuideTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isOpenGuide = false;
        _this._isWaitClearBehaviorFinish = false;
        _this._textKeysMap = new Map([[1, ["MahjongTiles_InGame_Tips_6", "MahjongTiles_InGame_Tips_7", "MahjongTiles_InGame_Tips_8"]], [2, ["MahjongTiles_InGame_Tips_8", "MahjongTiles_InGame_Tips_7", "MahjongTiles_InGame_Tips_6", "MahjongTiles_InGame_Tips_7", "MahjongTiles_InGame_Tips_6", "MahjongTiles_InGame_Tips_7", "MahjongTiles_InGame_Tips_8"]]]);
        _this._texts = [];
        _this._txtID = 1;
        _this._levelStr = "1513209549243287040,60707909";
        _this._handStep = -1;
        _this.guideStep = 0;
        _this.textLen = 3;
        return _this;
    }
    GuideTrait.prototype.getTextKeys = function (t) {
        if (t === void 0) { t = 1; }
        return this._textKeysMap.get(t) || this._textKeysMap.get(1);
    };
    GuideTrait.prototype.shouldShowHand = function () {
        return -1 == this._handStep || this.guideStep < this._handStep;
    };
    GuideTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this._traitData || {};
        void 0 !== e.txtID && (this._txtID = e.txtID);
        e.levelStr && (this._levelStr = e.levelStr[0]);
        void 0 !== e.handStep && (this._handStep = e.handStep);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.Guide, GuideBehavior_1.default);
        this.localData.finishGuideStep || (this.localData.finishGuideStep = 0);
    };
    GuideTrait.prototype.initGuideTexts = function () {
        var t = this.getTextKeys(this._txtID);
        this._texts = t.map(function (t) {
            return I18NStrings_1.default.get(t);
        });
        this.textLen = t.length;
    };
    GuideTrait.prototype.changeText = function (t) {
        t && 0 != t.length && (this._texts = t);
    };
    GuideTrait.prototype.onIptBase_pushClrEff = function (t, e) {
        t.ins;
        if (this._isOpenGuide) {
            this.localData.finishGuideStep = this.guideStep;
            this.dot(DTutorial_1.ETutorialClickType.Clear);
            this.guideStep = this.guideStep + 1;
            if (this.guideStep >= this.textLen) {
                this.dot(DTutorial_1.ETutorialClickType.Complete);
            }
            else {
                this.dot(DTutorial_1.ETutorialClickType.Show);
            }
            this.guideStep >= this.textLen - 1 && (this.guideStep = this.textLen - 1);
            var i = t.ins, n = this.getSelectTileId(i.gameController);
            this._isOpenGuide = this.localData.guideStep < this.textLen - 1;
            i.pushEffect(new GuideEffect_1.GuideEffect({
                tileId: n,
                showHand: false,
                text: this._texts[this.guideStep],
                guideStep: this.guideStep,
                finishGuide: this.localData.guideStep >= this.textLen - 1
            }), BehaviorsEnum_1.EInsertType.Parallel);
            this._isWaitClearBehaviorFinish = true;
            e();
        }
        else
            e();
    };
    GuideTrait.prototype.onBehavior_ClearBehaviorStart = function () {
        if (this._isOpenGuide) {
            this._isWaitClearBehaviorFinish = false;
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.Guide,
                showHand: this.shouldShowHand()
            });
        }
    };
    GuideTrait.prototype.onGuideUI_skip = function (t, e) {
        this.dot(DTutorial_1.ETutorialClickType.Skip);
        this.dot(DTutorial_1.ETutorialClickType.Complete);
        this.guideStep = this._texts.length - 1;
        this.localData.finishGuideStep = this._texts.length - 1;
        this._isOpenGuide = false;
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Guide,
            showHand: this.shouldShowHand(),
            finishGuide: true
        });
        UserModel_1.default.getInstance().setGuideFinished(true);
        e();
    };
    GuideTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.TileNode_SelectedFinish] = this.onTileNode_SelectedFinish.bind(this);
        _t[GameEvent_1.EGameEvent.TileNode_MoveFinish] = this.onTileNode_MoveFinish.bind(this);
        _t[GameEvent_1.EGameEvent.TileNode_BeginSelected] = this.onTileNode_BeginSelected.bind(this);
        _t[GameEvent_1.EGameEvent.TileNode_BeginUnSelected] = this.onTileNode_BeginUnSelected.bind(this);
        _t[GameEvent_1.EGameEvent.Behavior_ClearBehaviorStart] = this.onBehavior_ClearBehaviorStart.bind(this);
        return _t;
    };
    GuideTrait.prototype.onTileNode_BeginSelected = function () {
        this._isOpenGuide && (this._isWaitClearBehaviorFinish || GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Guide,
            showHand: false
        }));
    };
    GuideTrait.prototype.onTileNode_BeginUnSelected = function () {
        this._isOpenGuide && (this._isWaitClearBehaviorFinish || GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Guide,
            showHand: this.shouldShowHand()
        }));
    };
    GuideTrait.prototype.onTileNode_SelectedFinish = function () {
        this._isOpenGuide && (this._isWaitClearBehaviorFinish || GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Guide,
            showHand: this.shouldShowHand()
        }));
    };
    GuideTrait.prototype.onTileNode_MoveFinish = function () {
        this._isOpenGuide && (this._isWaitClearBehaviorFinish || GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Guide,
            showHand: this.shouldShowHand()
        }));
    };
    GuideTrait.prototype.onIptSetLv_setData = function (t, e) {
        this._isWaitClearBehaviorFinish = false;
        var i = t.ins;
        if (i.gameContext.gameType == GameTypeEnums_1.MjGameType.Normal) {
            if (1 == t.args[0].levelId && this.localData.finishGuideStep < this._texts.length - 1) {
                var n = ExtractTool_1.default.getInstance().getFixedLevelStr(1);
                if (!i.gameContext.getIsNewGame() && ExtractTool_1.default.getInstance().isFixedLevel(1)) {
                    t.args[0].originalLevelStr = n;
                    t.args[0].levelStr = n;
                    t.args[0].isExtractLevel = true;
                }
                UserModel_1.default.getInstance().setGuideFinished(false);
                var o = i.gameContext.getGameData().getCurLevelComboMaxLimit();
                i.gameContext.getGameData().resetGameData();
                UserModel_1.default.getInstance().normalData.setScore(0, false);
                i.gameContext.getGameData().setCurLevelComboMaxLimit(o);
                this._isOpenGuide = true;
            }
            else {
                this._isOpenGuide = false;
                UserModel_1.default.getInstance().setGuideFinished(true);
            }
            e();
        }
        else
            e();
    };
    GuideTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        this.initGuideTexts();
        var i = t.ins;
        if (i.preloadResMap.Prefab) {
            if ("string" == typeof i.preloadResMap.Prefab) {
                var n = i.preloadResMap.Prefab;
                i.preloadResMap.Prefab = [n, enumRes_1.PrefabPath.Guide];
            }
            else
                i.preloadResMap.Prefab.push(enumRes_1.PrefabPath.Guide);
        }
        else
            i.preloadResMap.Prefab = [enumRes_1.PrefabPath.Guide];
        this.changeText(this._texts);
        e();
    };
    GuideTrait.prototype.getSelectTileId = function (t) {
        var e, i, n = t.tileMapObject.getCanMatchTilesHint();
        if (0 == n.length) {
            t.tileMapObject.updateCanMatchTiles();
            n = t.tileMapObject.getCanMatchTilesHint();
        }
        if (!n.length)
            return null;
        var o = n[0], a = null === (e = o[0]) || void 0 === e ? void 0 : e.id, r = null === (i = o[1]) || void 0 === i ? void 0 : i.id;
        if (a && r) {
            var s = t.tileMapObject.getTileObject(a);
            t.tileMapObject.getTileObject(r);
            return s.isSelect ? r : a;
        }
    };
    GuideTrait.prototype.onIptInitView_exec = function (t, e) {
        var i = t.ins;
        if (this._isOpenGuide) {
            this.dot(DTutorial_1.ETutorialClickType.Show);
            var n = this.getSelectTileId(i.gameController);
            i.pushEffect(new GuideEffect_1.GuideEffect({
                tileId: n,
                showHand: this.shouldShowHand(),
                text: this._texts[this.guideStep],
                guideStep: this.guideStep
            }));
            e();
        }
        else
            e();
    };
    GuideTrait.prototype.onGameCtrl_initIptMap = function (t, e) {
        var i = t.ins;
        i._inputMap[GameInputEnum_1.EGameInputEnum.Guide] = new InputGuide_1.default(i._gameSimulator, i, i._gameBehaviorExecutionBuilder);
        e();
    };
    GuideTrait.prototype.dot = function (t) {
        this._isOpenGuide && DTutorial_1.default.dot({
            click_type: t
        });
    };
    GuideTrait.traitKey = "GuideTrait";
    __decorate([
        mj.traitEvent("Guide_chgText")
    ], GuideTrait.prototype, "changeText", null);
    __decorate([
        mj.traitEvent("Guide_skip")
    ], GuideTrait.prototype, "onGuideUI_skip", null);
    __decorate([
        mj.traitEvent("Guide_getSelectTileId")
    ], GuideTrait.prototype, "getSelectTileId", null);
    GuideTrait = __decorate([
        mj.trait,
        mj.class("GuideTrait")
    ], GuideTrait);
    return GuideTrait;
}(Trait_1.default));
exports.default = GuideTrait;

cc._RF.pop();