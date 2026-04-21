import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import { EInsertType } from '../../../Scripts/constant/BehaviorsEnum';
import { EGameEvent } from '../../../Scripts/simulator/constant/GameEvent';
import { EGameInputEnum } from '../../../Scripts/simulator/constant/GameInputEnum';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { BehaviorsMapping } from '../../../Scripts/mapping/BehaviorsMapping';
import { BehaviorFactory } from '../../../Scripts/BehaviorFactory';
import { PrefabPath } from '../../../Scripts/constant/enumRes';
import { GameInteraction } from '../../../Scripts/GameInteraction/GameInteraction';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import DTutorial, { ETutorialClickType } from './DTutorial';
import GuideBehavior from './GuideBehavior';
import { GuideEffect } from './GuideEffect';
import InputGuide from './InputGuide';
@mj.trait
@mj.class("GuideTrait")
export default class GuideTrait extends Trait {
  _isOpenGuide = false;
  _isWaitClearBehaviorFinish = false;
  _textKeysMap = new Map([[1, ["MahjongTiles_InGame_Tips_6", "MahjongTiles_InGame_Tips_7", "MahjongTiles_InGame_Tips_8"]], [2, ["MahjongTiles_InGame_Tips_8", "MahjongTiles_InGame_Tips_7", "MahjongTiles_InGame_Tips_6", "MahjongTiles_InGame_Tips_7", "MahjongTiles_InGame_Tips_6", "MahjongTiles_InGame_Tips_7", "MahjongTiles_InGame_Tips_8"]]]);
  _texts = [];
  _txtID = 1;
  _levelStr = "1513209549243287040,60707909";
  _handStep = -1;
  guideStep = 0;
  textLen = 3;
  static traitKey = "GuideTrait";
  getTextKeys(t = 1) {
    return this._textKeysMap.get(t) || this._textKeysMap.get(1);
  }
  shouldShowHand() {
    return -1 == this._handStep || this.guideStep < this._handStep;
  }
  onLoad() {
    super.onLoad.call(this);
    var e = this._traitData || {};
    void 0 !== e.txtID && (this._txtID = e.txtID);
    e.levelStr && (this._levelStr = e.levelStr[0]);
    void 0 !== e.handStep && (this._handStep = e.handStep);
    BehaviorFactory.registerBehavior(BehaviorsMapping.Guide, GuideBehavior);
    this.localData.finishGuideStep || (this.localData.finishGuideStep = 0);
  }
  initGuideTexts() {
    var t = this.getTextKeys(this._txtID);
    this._texts = t.map(function (t) {
      return I18NStrings.get(t);
    });
    this.textLen = t.length;
  }
  @mj.traitEvent("Guide_chgText")
  changeText(t) {
    t && 0 != t.length && (this._texts = t);
  }
  onIptBase_pushClrEff(t, e) {
    t.ins;
    if (this._isOpenGuide) {
      this.localData.finishGuideStep = this.guideStep;
      this.dot(ETutorialClickType.Clear);
      this.guideStep = this.guideStep + 1;
      if (this.guideStep >= this.textLen) {
        this.dot(ETutorialClickType.Complete);
      } else {
        this.dot(ETutorialClickType.Show);
      }
      this.guideStep >= this.textLen - 1 && (this.guideStep = this.textLen - 1);
      var i = t.ins,
        n = this.getSelectTileId(i.gameController);
      this._isOpenGuide = this.localData.guideStep < this.textLen - 1;
      i.pushEffect(new GuideEffect({
        tileId: n,
        showHand: false,
        text: this._texts[this.guideStep],
        guideStep: this.guideStep,
        finishGuide: this.localData.guideStep >= this.textLen - 1
      }), EInsertType.Parallel);
      this._isWaitClearBehaviorFinish = true;
      e();
    } else e();
  }
  onBehavior_ClearBehaviorStart() {
    if (this._isOpenGuide) {
      this._isWaitClearBehaviorFinish = false;
      GameInteraction.input({
        inputType: EGameInputEnum.Guide,
        showHand: this.shouldShowHand()
      });
    }
  }
  @mj.traitEvent("Guide_skip")
  onGuideUI_skip(t, e) {
    this.dot(ETutorialClickType.Skip);
    this.dot(ETutorialClickType.Complete);
    this.guideStep = this._texts.length - 1;
    this.localData.finishGuideStep = this._texts.length - 1;
    this._isOpenGuide = false;
    GameInteraction.input({
      inputType: EGameInputEnum.Guide,
      showHand: this.shouldShowHand(),
      finishGuide: true
    });
    UserModel.getInstance().setGuideFinished(true);
    e();
  }
  getMessageListeners() {
    var _t = {};
    _t[EGameEvent.TileNode_SelectedFinish] = this.onTileNode_SelectedFinish.bind(this);
    _t[EGameEvent.TileNode_MoveFinish] = this.onTileNode_MoveFinish.bind(this);
    _t[EGameEvent.TileNode_BeginSelected] = this.onTileNode_BeginSelected.bind(this);
    _t[EGameEvent.TileNode_BeginUnSelected] = this.onTileNode_BeginUnSelected.bind(this);
    _t[EGameEvent.Behavior_ClearBehaviorStart] = this.onBehavior_ClearBehaviorStart.bind(this);
    return _t;
  }
  onTileNode_BeginSelected() {
    this._isOpenGuide && (this._isWaitClearBehaviorFinish || GameInteraction.input({
      inputType: EGameInputEnum.Guide,
      showHand: false
    }));
  }
  onTileNode_BeginUnSelected() {
    this._isOpenGuide && (this._isWaitClearBehaviorFinish || GameInteraction.input({
      inputType: EGameInputEnum.Guide,
      showHand: this.shouldShowHand()
    }));
  }
  onTileNode_SelectedFinish() {
    this._isOpenGuide && (this._isWaitClearBehaviorFinish || GameInteraction.input({
      inputType: EGameInputEnum.Guide,
      showHand: this.shouldShowHand()
    }));
  }
  onTileNode_MoveFinish() {
    this._isOpenGuide && (this._isWaitClearBehaviorFinish || GameInteraction.input({
      inputType: EGameInputEnum.Guide,
      showHand: this.shouldShowHand()
    }));
  }
  onIptSetLv_setData(t, e) {
    this._isWaitClearBehaviorFinish = false;
    var i = t.ins;
    if (i.gameContext.gameType == MjGameType.Normal) {
      if (1 == t.args[0].levelId && this.localData.finishGuideStep < this._texts.length - 1) {
        var n = ExtractTool.getInstance().getFixedLevelStr(1);
        if (!i.gameContext.getIsNewGame() && ExtractTool.getInstance().isFixedLevel(1)) {
          t.args[0].originalLevelStr = n;
          t.args[0].levelStr = n;
          t.args[0].isExtractLevel = true;
        }
        UserModel.getInstance().setGuideFinished(false);
        var o = i.gameContext.getGameData().getCurLevelComboMaxLimit();
        i.gameContext.getGameData().resetGameData();
        UserModel.getInstance().normalData.setScore(0, false);
        i.gameContext.getGameData().setCurLevelComboMaxLimit(o);
        this._isOpenGuide = true;
      } else {
        this._isOpenGuide = false;
        UserModel.getInstance().setGuideFinished(true);
      }
      e();
    } else e();
  }
  onMainGameCtrl_initRes(t, e) {
    this.initGuideTexts();
    var i = t.ins;
    if (i.preloadResMap.Prefab) {
      if ("string" == typeof i.preloadResMap.Prefab) {
        var n = i.preloadResMap.Prefab;
        i.preloadResMap.Prefab = [n, PrefabPath.Guide];
      } else i.preloadResMap.Prefab.push(PrefabPath.Guide);
    } else i.preloadResMap.Prefab = [PrefabPath.Guide];
    this.changeText(this._texts);
    e();
  }
  @mj.traitEvent("Guide_getSelectTileId")
  getSelectTileId(t) {
    var e,
      i,
      n = t.tileMapObject.getCanMatchTilesHint();
    if (0 == n.length) {
      t.tileMapObject.updateCanMatchTiles();
      n = t.tileMapObject.getCanMatchTilesHint();
    }
    if (!n.length) return null;
    var o = n[0],
      a = null === (e = o[0]) || void 0 === e ? void 0 : e.id,
      r = null === (i = o[1]) || void 0 === i ? void 0 : i.id;
    if (a && r) {
      var s = t.tileMapObject.getTileObject(a);
      t.tileMapObject.getTileObject(r);
      return s.isSelect ? r : a;
    }
  }
  onIptInitView_exec(t, e) {
    var i = t.ins;
    if (this._isOpenGuide) {
      this.dot(ETutorialClickType.Show);
      var n = this.getSelectTileId(i.gameController);
      i.pushEffect(new GuideEffect({
        tileId: n,
        showHand: this.shouldShowHand(),
        text: this._texts[this.guideStep],
        guideStep: this.guideStep
      }));
      e();
    } else e();
  }
  onGameCtrl_initIptMap(t, e) {
    var i = t.ins;
    i._inputMap[EGameInputEnum.Guide] = new InputGuide(i._gameSimulator, i, i._gameBehaviorExecutionBuilder);
    e();
  }
  dot(t) {
    this._isOpenGuide && DTutorial.dot({
      click_type: t
    });
  }
}