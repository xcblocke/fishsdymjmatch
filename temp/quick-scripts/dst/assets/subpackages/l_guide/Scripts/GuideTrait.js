
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guide/Scripts/GuideTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlL1NjcmlwdHMvR3VpZGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUZBQTRFO0FBQzVFLHlFQUFzRTtBQUN0RSwyRUFBMkU7QUFDM0UsbUZBQW1GO0FBQ25GLHdGQUFvRjtBQUNwRiw4RUFBNkU7QUFDN0Usb0VBQW1FO0FBQ25FLDZEQUErRDtBQUMvRCxvRkFBbUY7QUFDbkYsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUNqRSwyRUFBc0U7QUFDdEUseUNBQTREO0FBQzVELGlEQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsMkNBQXNDO0FBR3RDO0lBQXdDLDhCQUFLO0lBQTdDO1FBQUEscUVBdU1DO1FBdE1DLGtCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGdDQUEwQixHQUFHLEtBQUssQ0FBQztRQUNuQyxrQkFBWSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25WLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsZUFBUyxHQUFHLDhCQUE4QixDQUFDO1FBQzNDLGVBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQThMZCxDQUFDO0lBNUxDLGdDQUFXLEdBQVgsVUFBWSxDQUFLO1FBQUwsa0JBQUEsRUFBQSxLQUFLO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxD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aWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBFR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUV2ZW50JztcbmltcG9ydCB7IEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEJlaGF2aW9yc01hcHBpbmcgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL21hcHBpbmcvQmVoYXZpb3JzTWFwcGluZyc7XG5pbXBvcnQgeyBCZWhhdmlvckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0JlaGF2aW9yRmFjdG9yeSc7XG5pbXBvcnQgeyBQcmVmYWJQYXRoIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb25zdGFudC9lbnVtUmVzJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBEVHV0b3JpYWwsIHsgRVR1dG9yaWFsQ2xpY2tUeXBlIH0gZnJvbSAnLi9EVHV0b3JpYWwnO1xuaW1wb3J0IEd1aWRlQmVoYXZpb3IgZnJvbSAnLi9HdWlkZUJlaGF2aW9yJztcbmltcG9ydCB7IEd1aWRlRWZmZWN0IH0gZnJvbSAnLi9HdWlkZUVmZmVjdCc7XG5pbXBvcnQgSW5wdXRHdWlkZSBmcm9tICcuL0lucHV0R3VpZGUnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJHdWlkZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWlkZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfaXNPcGVuR3VpZGUgPSBmYWxzZTtcbiAgX2lzV2FpdENsZWFyQmVoYXZpb3JGaW5pc2ggPSBmYWxzZTtcbiAgX3RleHRLZXlzTWFwID0gbmV3IE1hcChbWzEsIFtcIk1haGpvbmdUaWxlc19JbkdhbWVfVGlwc182XCIsIFwiTWFoam9uZ1RpbGVzX0luR2FtZV9UaXBzXzdcIiwgXCJNYWhqb25nVGlsZXNfSW5HYW1lX1RpcHNfOFwiXV0sIFsyLCBbXCJNYWhqb25nVGlsZXNfSW5HYW1lX1RpcHNfOFwiLCBcIk1haGpvbmdUaWxlc19JbkdhbWVfVGlwc183XCIsIFwiTWFoam9uZ1RpbGVzX0luR2FtZV9UaXBzXzZcIiwgXCJNYWhqb25nVGlsZXNfSW5HYW1lX1RpcHNfN1wiLCBcIk1haGpvbmdUaWxlc19JbkdhbWVfVGlwc182XCIsIFwiTWFoam9uZ1RpbGVzX0luR2FtZV9UaXBzXzdcIiwgXCJNYWhqb25nVGlsZXNfSW5HYW1lX1RpcHNfOFwiXV1dKTtcbiAgX3RleHRzID0gW107XG4gIF90eHRJRCA9IDE7XG4gIF9sZXZlbFN0ciA9IFwiMTUxMzIwOTU0OTI0MzI4NzA0MCw2MDcwNzkwOVwiO1xuICBfaGFuZFN0ZXAgPSAtMTtcbiAgZ3VpZGVTdGVwID0gMDtcbiAgdGV4dExlbiA9IDM7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiR3VpZGVUcmFpdFwiO1xuICBnZXRUZXh0S2V5cyh0ID0gMSkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0S2V5c01hcC5nZXQodCkgfHwgdGhpcy5fdGV4dEtleXNNYXAuZ2V0KDEpO1xuICB9XG4gIHNob3VsZFNob3dIYW5kKCkge1xuICAgIHJldHVybiAtMSA9PSB0aGlzLl9oYW5kU3RlcCB8fCB0aGlzLmd1aWRlU3RlcCA8IHRoaXMuX2hhbmRTdGVwO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgZSA9IHRoaXMuX3RyYWl0RGF0YSB8fCB7fTtcbiAgICB2b2lkIDAgIT09IGUudHh0SUQgJiYgKHRoaXMuX3R4dElEID0gZS50eHRJRCk7XG4gICAgZS5sZXZlbFN0ciAmJiAodGhpcy5fbGV2ZWxTdHIgPSBlLmxldmVsU3RyWzBdKTtcbiAgICB2b2lkIDAgIT09IGUuaGFuZFN0ZXAgJiYgKHRoaXMuX2hhbmRTdGVwID0gZS5oYW5kU3RlcCk7XG4gICAgQmVoYXZpb3JGYWN0b3J5LnJlZ2lzdGVyQmVoYXZpb3IoQmVoYXZpb3JzTWFwcGluZy5HdWlkZSwgR3VpZGVCZWhhdmlvcik7XG4gICAgdGhpcy5sb2NhbERhdGEuZmluaXNoR3VpZGVTdGVwIHx8ICh0aGlzLmxvY2FsRGF0YS5maW5pc2hHdWlkZVN0ZXAgPSAwKTtcbiAgfVxuICBpbml0R3VpZGVUZXh0cygpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0VGV4dEtleXModGhpcy5fdHh0SUQpO1xuICAgIHRoaXMuX3RleHRzID0gdC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBJMThOU3RyaW5ncy5nZXQodCk7XG4gICAgfSk7XG4gICAgdGhpcy50ZXh0TGVuID0gdC5sZW5ndGg7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJHdWlkZV9jaGdUZXh0XCIpXG4gIGNoYW5nZVRleHQodCkge1xuICAgIHQgJiYgMCAhPSB0Lmxlbmd0aCAmJiAodGhpcy5fdGV4dHMgPSB0KTtcbiAgfVxuICBvbklwdEJhc2VfcHVzaENsckVmZih0LCBlKSB7XG4gICAgdC5pbnM7XG4gICAgaWYgKHRoaXMuX2lzT3Blbkd1aWRlKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5maW5pc2hHdWlkZVN0ZXAgPSB0aGlzLmd1aWRlU3RlcDtcbiAgICAgIHRoaXMuZG90KEVUdXRvcmlhbENsaWNrVHlwZS5DbGVhcik7XG4gICAgICB0aGlzLmd1aWRlU3RlcCA9IHRoaXMuZ3VpZGVTdGVwICsgMTtcbiAgICAgIGlmICh0aGlzLmd1aWRlU3RlcCA+PSB0aGlzLnRleHRMZW4pIHtcbiAgICAgICAgdGhpcy5kb3QoRVR1dG9yaWFsQ2xpY2tUeXBlLkNvbXBsZXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZG90KEVUdXRvcmlhbENsaWNrVHlwZS5TaG93KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ3VpZGVTdGVwID49IHRoaXMudGV4dExlbiAtIDEgJiYgKHRoaXMuZ3VpZGVTdGVwID0gdGhpcy50ZXh0TGVuIC0gMSk7XG4gICAgICB2YXIgaSA9IHQuaW5zLFxuICAgICAgICBuID0gdGhpcy5nZXRTZWxlY3RUaWxlSWQoaS5nYW1lQ29udHJvbGxlcik7XG4gICAgICB0aGlzLl9pc09wZW5HdWlkZSA9IHRoaXMubG9jYWxEYXRhLmd1aWRlU3RlcCA8IHRoaXMudGV4dExlbiAtIDE7XG4gICAgICBpLnB1c2hFZmZlY3QobmV3IEd1aWRlRWZmZWN0KHtcbiAgICAgICAgdGlsZUlkOiBuLFxuICAgICAgICBzaG93SGFuZDogZmFsc2UsXG4gICAgICAgIHRleHQ6IHRoaXMuX3RleHRzW3RoaXMuZ3VpZGVTdGVwXSxcbiAgICAgICAgZ3VpZGVTdGVwOiB0aGlzLmd1aWRlU3RlcCxcbiAgICAgICAgZmluaXNoR3VpZGU6IHRoaXMubG9jYWxEYXRhLmd1aWRlU3RlcCA+PSB0aGlzLnRleHRMZW4gLSAxXG4gICAgICB9KSwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICAgICAgdGhpcy5faXNXYWl0Q2xlYXJCZWhhdmlvckZpbmlzaCA9IHRydWU7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkJlaGF2aW9yX0NsZWFyQmVoYXZpb3JTdGFydCgpIHtcbiAgICBpZiAodGhpcy5faXNPcGVuR3VpZGUpIHtcbiAgICAgIHRoaXMuX2lzV2FpdENsZWFyQmVoYXZpb3JGaW5pc2ggPSBmYWxzZTtcbiAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uR3VpZGUsXG4gICAgICAgIHNob3dIYW5kOiB0aGlzLnNob3VsZFNob3dIYW5kKClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkd1aWRlX3NraXBcIilcbiAgb25HdWlkZVVJX3NraXAodCwgZSkge1xuICAgIHRoaXMuZG90KEVUdXRvcmlhbENsaWNrVHlwZS5Ta2lwKTtcbiAgICB0aGlzLmRvdChFVHV0b3JpYWxDbGlja1R5cGUuQ29tcGxldGUpO1xuICAgIHRoaXMuZ3VpZGVTdGVwID0gdGhpcy5fdGV4dHMubGVuZ3RoIC0gMTtcbiAgICB0aGlzLmxvY2FsRGF0YS5maW5pc2hHdWlkZVN0ZXAgPSB0aGlzLl90ZXh0cy5sZW5ndGggLSAxO1xuICAgIHRoaXMuX2lzT3Blbkd1aWRlID0gZmFsc2U7XG4gICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uR3VpZGUsXG4gICAgICBzaG93SGFuZDogdGhpcy5zaG91bGRTaG93SGFuZCgpLFxuICAgICAgZmluaXNoR3VpZGU6IHRydWVcbiAgICB9KTtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRHdWlkZUZpbmlzaGVkKHRydWUpO1xuICAgIGUoKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VHYW1lRXZlbnQuVGlsZU5vZGVfU2VsZWN0ZWRGaW5pc2hdID0gdGhpcy5vblRpbGVOb2RlX1NlbGVjdGVkRmluaXNoLmJpbmQodGhpcyk7XG4gICAgX3RbRUdhbWVFdmVudC5UaWxlTm9kZV9Nb3ZlRmluaXNoXSA9IHRoaXMub25UaWxlTm9kZV9Nb3ZlRmluaXNoLmJpbmQodGhpcyk7XG4gICAgX3RbRUdhbWVFdmVudC5UaWxlTm9kZV9CZWdpblNlbGVjdGVkXSA9IHRoaXMub25UaWxlTm9kZV9CZWdpblNlbGVjdGVkLmJpbmQodGhpcyk7XG4gICAgX3RbRUdhbWVFdmVudC5UaWxlTm9kZV9CZWdpblVuU2VsZWN0ZWRdID0gdGhpcy5vblRpbGVOb2RlX0JlZ2luVW5TZWxlY3RlZC5iaW5kKHRoaXMpO1xuICAgIF90W0VHYW1lRXZlbnQuQmVoYXZpb3JfQ2xlYXJCZWhhdmlvclN0YXJ0XSA9IHRoaXMub25CZWhhdmlvcl9DbGVhckJlaGF2aW9yU3RhcnQuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25UaWxlTm9kZV9CZWdpblNlbGVjdGVkKCkge1xuICAgIHRoaXMuX2lzT3Blbkd1aWRlICYmICh0aGlzLl9pc1dhaXRDbGVhckJlaGF2aW9yRmluaXNoIHx8IEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkd1aWRlLFxuICAgICAgc2hvd0hhbmQ6IGZhbHNlXG4gICAgfSkpO1xuICB9XG4gIG9uVGlsZU5vZGVfQmVnaW5VblNlbGVjdGVkKCkge1xuICAgIHRoaXMuX2lzT3Blbkd1aWRlICYmICh0aGlzLl9pc1dhaXRDbGVhckJlaGF2aW9yRmluaXNoIHx8IEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkd1aWRlLFxuICAgICAgc2hvd0hhbmQ6IHRoaXMuc2hvdWxkU2hvd0hhbmQoKVxuICAgIH0pKTtcbiAgfVxuICBvblRpbGVOb2RlX1NlbGVjdGVkRmluaXNoKCkge1xuICAgIHRoaXMuX2lzT3Blbkd1aWRlICYmICh0aGlzLl9pc1dhaXRDbGVhckJlaGF2aW9yRmluaXNoIHx8IEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkd1aWRlLFxuICAgICAgc2hvd0hhbmQ6IHRoaXMuc2hvdWxkU2hvd0hhbmQoKVxuICAgIH0pKTtcbiAgfVxuICBvblRpbGVOb2RlX01vdmVGaW5pc2goKSB7XG4gICAgdGhpcy5faXNPcGVuR3VpZGUgJiYgKHRoaXMuX2lzV2FpdENsZWFyQmVoYXZpb3JGaW5pc2ggfHwgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uR3VpZGUsXG4gICAgICBzaG93SGFuZDogdGhpcy5zaG91bGRTaG93SGFuZCgpXG4gICAgfSkpO1xuICB9XG4gIG9uSXB0U2V0THZfc2V0RGF0YSh0LCBlKSB7XG4gICAgdGhpcy5faXNXYWl0Q2xlYXJCZWhhdmlvckZpbmlzaCA9IGZhbHNlO1xuICAgIHZhciBpID0gdC5pbnM7XG4gICAgaWYgKGkuZ2FtZUNvbnRleHQuZ2FtZVR5cGUgPT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHtcbiAgICAgIGlmICgxID09IHQuYXJnc1swXS5sZXZlbElkICYmIHRoaXMubG9jYWxEYXRhLmZpbmlzaEd1aWRlU3RlcCA8IHRoaXMuX3RleHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdmFyIG4gPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmdldEZpeGVkTGV2ZWxTdHIoMSk7XG4gICAgICAgIGlmICghaS5nYW1lQ29udGV4dC5nZXRJc05ld0dhbWUoKSAmJiBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmlzRml4ZWRMZXZlbCgxKSkge1xuICAgICAgICAgIHQuYXJnc1swXS5vcmlnaW5hbExldmVsU3RyID0gbjtcbiAgICAgICAgICB0LmFyZ3NbMF0ubGV2ZWxTdHIgPSBuO1xuICAgICAgICAgIHQuYXJnc1swXS5pc0V4dHJhY3RMZXZlbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0R3VpZGVGaW5pc2hlZChmYWxzZSk7XG4gICAgICAgIHZhciBvID0gaS5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEN1ckxldmVsQ29tYm9NYXhMaW1pdCgpO1xuICAgICAgICBpLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkucmVzZXRHYW1lRGF0YSgpO1xuICAgICAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5ub3JtYWxEYXRhLnNldFNjb3JlKDAsIGZhbHNlKTtcbiAgICAgICAgaS5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLnNldEN1ckxldmVsQ29tYm9NYXhMaW1pdChvKTtcbiAgICAgICAgdGhpcy5faXNPcGVuR3VpZGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faXNPcGVuR3VpZGUgPSBmYWxzZTtcbiAgICAgICAgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuc2V0R3VpZGVGaW5pc2hlZCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2luaXRSZXModCwgZSkge1xuICAgIHRoaXMuaW5pdEd1aWRlVGV4dHMoKTtcbiAgICB2YXIgaSA9IHQuaW5zO1xuICAgIGlmIChpLnByZWxvYWRSZXNNYXAuUHJlZmFiKSB7XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgaS5wcmVsb2FkUmVzTWFwLlByZWZhYikge1xuICAgICAgICB2YXIgbiA9IGkucHJlbG9hZFJlc01hcC5QcmVmYWI7XG4gICAgICAgIGkucHJlbG9hZFJlc01hcC5QcmVmYWIgPSBbbiwgUHJlZmFiUGF0aC5HdWlkZV07XG4gICAgICB9IGVsc2UgaS5wcmVsb2FkUmVzTWFwLlByZWZhYi5wdXNoKFByZWZhYlBhdGguR3VpZGUpO1xuICAgIH0gZWxzZSBpLnByZWxvYWRSZXNNYXAuUHJlZmFiID0gW1ByZWZhYlBhdGguR3VpZGVdO1xuICAgIHRoaXMuY2hhbmdlVGV4dCh0aGlzLl90ZXh0cyk7XG4gICAgZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiR3VpZGVfZ2V0U2VsZWN0VGlsZUlkXCIpXG4gIGdldFNlbGVjdFRpbGVJZCh0KSB7XG4gICAgdmFyIGUsXG4gICAgICBpLFxuICAgICAgbiA9IHQudGlsZU1hcE9iamVjdC5nZXRDYW5NYXRjaFRpbGVzSGludCgpO1xuICAgIGlmICgwID09IG4ubGVuZ3RoKSB7XG4gICAgICB0LnRpbGVNYXBPYmplY3QudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgICAgbiA9IHQudGlsZU1hcE9iamVjdC5nZXRDYW5NYXRjaFRpbGVzSGludCgpO1xuICAgIH1cbiAgICBpZiAoIW4ubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbyA9IG5bMF0sXG4gICAgICBhID0gbnVsbCA9PT0gKGUgPSBvWzBdKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmlkLFxuICAgICAgciA9IG51bGwgPT09IChpID0gb1sxXSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5pZDtcbiAgICBpZiAoYSAmJiByKSB7XG4gICAgICB2YXIgcyA9IHQudGlsZU1hcE9iamVjdC5nZXRUaWxlT2JqZWN0KGEpO1xuICAgICAgdC50aWxlTWFwT2JqZWN0LmdldFRpbGVPYmplY3Qocik7XG4gICAgICByZXR1cm4gcy5pc1NlbGVjdCA/IHIgOiBhO1xuICAgIH1cbiAgfVxuICBvbklwdEluaXRWaWV3X2V4ZWModCwgZSkge1xuICAgIHZhciBpID0gdC5pbnM7XG4gICAgaWYgKHRoaXMuX2lzT3Blbkd1aWRlKSB7XG4gICAgICB0aGlzLmRvdChFVHV0b3JpYWxDbGlja1R5cGUuU2hvdyk7XG4gICAgICB2YXIgbiA9IHRoaXMuZ2V0U2VsZWN0VGlsZUlkKGkuZ2FtZUNvbnRyb2xsZXIpO1xuICAgICAgaS5wdXNoRWZmZWN0KG5ldyBHdWlkZUVmZmVjdCh7XG4gICAgICAgIHRpbGVJZDogbixcbiAgICAgICAgc2hvd0hhbmQ6IHRoaXMuc2hvdWxkU2hvd0hhbmQoKSxcbiAgICAgICAgdGV4dDogdGhpcy5fdGV4dHNbdGhpcy5ndWlkZVN0ZXBdLFxuICAgICAgICBndWlkZVN0ZXA6IHRoaXMuZ3VpZGVTdGVwXG4gICAgICB9KSk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkdhbWVDdHJsX2luaXRJcHRNYXAodCwgZSkge1xuICAgIHZhciBpID0gdC5pbnM7XG4gICAgaS5faW5wdXRNYXBbRUdhbWVJbnB1dEVudW0uR3VpZGVdID0gbmV3IElucHV0R3VpZGUoaS5fZ2FtZVNpbXVsYXRvciwgaSwgaS5fZ2FtZUJlaGF2aW9yRXhlY3V0aW9uQnVpbGRlcik7XG4gICAgZSgpO1xuICB9XG4gIGRvdCh0KSB7XG4gICAgdGhpcy5faXNPcGVuR3VpZGUgJiYgRFR1dG9yaWFsLmRvdCh7XG4gICAgICBjbGlja190eXBlOiB0XG4gICAgfSk7XG4gIH1cbn0iXX0=