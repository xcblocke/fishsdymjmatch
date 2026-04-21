import { InputBase } from '../inputbase/InputBase';
import { EInsertType } from '../constant/BehaviorsEnum';
import { AddLevelEnterAniEffect } from '../AddLevelEnterAniEffect';
import { InitNextLevelEffect } from '../InitNextLevelEffect';
import { UpdateMatchNumEffect } from '../UpdateMatchNumEffect';
import { ClassicDyeingModifier } from '../ClassicDyeingModifier';
import { EDifficultyType } from '../IClassicExtractTypes';
import { ChangeBatchEffect } from '../ChangeBatchEffect';
import { BlockInputRefEffect } from '../BlockInputRefEffect';
import { ClassicFailEffect } from '../ClassicFailEffect';
import { DotGameRefreshTiles } from '../gamePlay/dot/DGameRefreshTiles';
import { DotUtil } from '../gamePlay/dot/DotUtil';
import LevelGenRule from '../core/simulator/config/LevelGenRule';
import { ClassicReviveEffect } from '../ClassicReviveEffect';
import { AddLevelFinishEffect } from '../AddLevelFinishEffect';
import { AddLevelDropAniEffect } from '../AddLevelDropAniEffect';
import { EmptyEffect } from '../EmptyEffect';
import { EGameInputEnum } from '../simulator/constant/GameInputEnum';
import { ClassicBeforeFailEffect } from '../ClassicBeforeFailEffect';
this && this.__read;
this && this.__values;
export default class InputAddLevelClassic extends InputBase {
  excute(e) {
    var t, o;
    if (e.levelData.levelStr) {
      var n = this.gameContext.getTileMapObject().aliveTileCount(),
        i = this.gameContext.getTileMapObject().getCanMatchCardPairNum(),
        r = this.gameContext.getTileMapObject().getCurBoardDimension(),
        a = DotUtil.getLevelDataAsCardId(this.gameContext.getTileMapObject()),
        l = this.gameContext.getGameData(),
        s = l.generateNewBatchId();
      this.gameContext.classicLevelModifier.pushLevelStr(s, e.levelData.levelStr);
      this.applayNextBatchInfo(e);
      var c = null !== (t = e.levelData.difficultyType) && void 0 !== t ? t : EDifficultyType.Medium,
        f = ClassicDyeingModifier.getInstance().getDyeingStrategy(c),
        d = f.coordType,
        h = f.charType,
        v = this.gameContext.getTileMapObject().aliveTileCount(),
        g = this.gameContext.getTileMapObject().getCanMatchCardPairNum(),
        _ = this.gameContext.getTileMapObject().getCurBoardDimension(),
        T = DotUtil.getLevelDataAsCardId(this.gameContext.getTileMapObject());
      l.addTotalTileCount(v - n);
      DotGameRefreshTiles.dot(this.gameContext, {
        sourceCsv: (null === (o = e.levelData) || void 0 === o ? void 0 : o.levelName) || "",
        preOpPairs: i,
        endOpPairs: g,
        algoCoord: d,
        algoCardId: h,
        preTileNum: n,
        endTileNum: v,
        preBoardXyz: r,
        boardXyz: _,
        preBoardStructure: a,
        endBoardStructure: T
      });
    }
  }
  applayNextBatchInfo(e) {
    Date.now();
    var t,
      o = this.gameContext.getGameData(),
      n = o.getNextBatchId(),
      i = this.gameContext.classicLevelChecker.getBatchInfoByBatchId(n);
    i && i.levelStr || (i = {
      batchId: n,
      levelStr: o.getLevelStrByBatchId(n)
    });
    o.setOriginalLevelDataWithCardId(i.levelStr);
    var r = LevelGenRule.convertLevelStrCardIdToResId(i.levelStr),
      a = (Date.now(), this.gameContext.classicLevelModifier.instanceNextBatchData(i.batchId, r)),
      l = (Date.now(), Date.now(), null !== (t = e.levelData.difficultyType) && void 0 !== t ? t : EDifficultyType.Medium);
    if (a.tileObjects && a.tileObjects.length > 0) {
      var s = a.tileObjects;
      ClassicDyeingModifier.getInstance().applyDyeing(this.gameContext, s, l);
    }
    Date.now();
    var c = this.gameContext.getTileMapObject();
    c.fixClassicSingleCard(true);
    Date.now();
    this.gameContext.tileTypesModifier.modifyTileTypes(o.getTileTypes() || "");
    if (!this.gameContext.getOpenGenerateState()) {
      this.gameContext.touchData.clear();
      this.gameContext.getTileMapObject().unselectAllTileIds();
    }
    c.updateCanMatchTiles();
    Date.now(), Date.now();
    a.openGenerateState || this.pushBlockInputRefEffect(true, "InputAddLevelClassic");
    this.pushInitNextLevelEffect(a);
    this.pushChangeBatchEffect(a);
    this.pushUpdateMatchNumEffect();
    if (!a.openGenerateState) {
      this.pushAddLevelEnterAniEffect(a);
      this.pushAddLevelDropAniEffect(a.failingTiles);
    }
    this.pushAddLevelFinishEffect(a);
    a.openGenerateState || this.pushBlockInputRefEffect(false, "InputAddLevelClassic");
    this.gameContext.getOpenGenerateState() || this.tryExcuteFail();
  }
  pushAddLevelDropAniEffect(e) {
    var t = new AddLevelDropAniEffect({
      fallingTiles: e,
      isOpenGenerateState: this.gameContext.getOpenGenerateState()
    });
    this.pushEffect(t, EInsertType.Parallel);
  }
  tryExcuteFail() {
    if (this.gameContext.getTileMapObject().checkIsDead([])) if (this.gameContext.classicReviveChecker.canRevive()) this.pushReviveEffect();else {
      this.gameContext.gameModifier.modifyClassicEnd();
      this.pushClassicBeforeFailEffect();
      this.pushFailEffect();
    }
  }
  pushReviveEffect() {
    this.gameContext.getGameData();
    var e = new ClassicReviveEffect({});
    return this.pushEffect(e, EInsertType.Root);
  }
  pushClassicBeforeFailEffect() {
    var e = new ClassicBeforeFailEffect({});
    this.pushEffect(e, EInsertType.Root);
  }
  pushFailEffect() {
    var e = new ClassicFailEffect({});
    return this.pushEffect(e, EInsertType.Root);
  }
  pushBlockInputRefEffect(e, t) {
    var o = new BlockInputRefEffect({
      block: e,
      from: t
    });
    this.pushEffect(o, EInsertType.Root);
  }
  pushChangeBatchEffect(e) {
    var t = this.gameContext.getTileMapObject(),
      o = new ChangeBatchEffect({
        tileMapObject: t,
        addGameLayerInfo: e
      });
    this.pushEffect(o, EInsertType.Root);
  }
  pushInitNextLevelEffect(e) {
    var t = this.gameContext.getTileMapObject(),
      o = new InitNextLevelEffect({
        tileMapObject: t,
        addGameLayerInfo: e
      });
    this.pushEffect(o, EInsertType.Root);
  }
  pushAddLevelEnterAniEffect(e) {
    var t = new EmptyEffect({
      inputType: EGameInputEnum.AddLevelClassic
    });
    this.pushEffect(t, EInsertType.Root);
    var o = new AddLevelEnterAniEffect({
      tileObjects: e.tileObjects
    });
    this.pushEffect(o, EInsertType.Parallel);
  }
  pushUpdateMatchNumEffect() {
    var e = this.gameContext.getTileMapObject(),
      t = new UpdateMatchNumEffect({
        canMatchCardPairNum: e.getCanMatchCardPairNum()
      });
    return this.pushEffect(t, EInsertType.Root);
  }
  pushAddLevelFinishEffect(e) {
    var t = this.gameContext.getTileMapObject(),
      o = new AddLevelFinishEffect({
        tileMapObject: t,
        addGameLayerInfo: e,
        isOpenGenerateState: this.gameContext.getOpenGenerateState()
      });
    this.pushEffect(o, EInsertType.Root);
  }
  applyTempClassicNextSpecialTiles() {}
}