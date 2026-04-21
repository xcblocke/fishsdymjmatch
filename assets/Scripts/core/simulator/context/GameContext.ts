import { ETile2SlotType } from '../constant/GameTypeEnums';
import { Tile2SlotBarData } from '../../../data/Tile2SlotBarData';
import { Tile2TouchData } from '../../../data/Tile2TouchData';
import { TouchData } from '../../../data/TouchData';
import InputTile2TouchRunLock from '../../../input/InputTile2TouchRunLock';
import { EndStrategy } from '../../../objects/EndStrategy';
import { ClearChecker } from '../../../process/clear/ClearChecker';
import { ClearModifier } from '../../../process/clear/ClearModifier';
import { ComboChecker } from '../../../process/combo/ComboChecker';
import { ComboModifier } from '../../../process/combo/ComboModifier';
import { Tile2DianZanChecker } from '../../../process/dianzan/Tile2DianZanChecker';
import { Tile2CheerChecker } from '../../../process/cheer/Tile2CheerChecker';
import { Tile2PerfectChecker } from '../../../process/perfect/Tile2PerfectChecker';
import { Tile2ComboChecker } from '../../../process/combo/Tile2ComboChecker';
import { FullComboChecker } from '../../../process/fullcombo/FullComboChecker';
import { ClassicLevelChecker } from '../../../process/game/ClassicLevelChecker';
import { ClassicLevelModifier } from '../../../process/game/ClassicLevelModifier';
import { ClassicReviveChecker } from '../../../process/game/ClassicReviveChecker';
import { ClassicReviveModifier } from '../../../process/game/ClassicReviveModifier';
import { GameModifier } from '../../../process/game/GameModifier';
import { LayoutSelector } from '../../../process/layout/LayoutSelector';
import { MotivationalWordsChecker } from '../../../process/motivationalWords/MotivationalWordsChecker';
import { ResultChecker } from '../../../process/result/ResultChecker';
import { RewardComboChecker } from '../../../process/rewardCombo/RewardComboChecker';
import { AllClearChecker } from '../../../process/allClear/AllClearChecker';
import { AllClearModifier } from '../../../process/allClear/AllClearModifier';
import { SaveModifier } from '../../../process/save/SaveModifier';
import { ScoreModifier } from '../../../process/score/ScoreModifier';
import { ShuffleModifier } from '../../../process/shuffle/ShuffleModifier';
import { TileChecker } from '../../../process/tile/TileChecker';
import { TileSelector } from '../../../process/tile/TileSelector';
import { Tile2HitTipsChecker } from '../../../process/tile2/Tile2HitTipsChecker';
import Tile2BombModifier from '../../../process/tile2/Tile2BombModifier';
import { Tile2HitTipsModifier } from '../../../process/tile2/Tile2HitTipsModifier';
import { Tile2ResultChecker } from '../../../process/tile2/Tile2ResultChecker';
import { Tile2ReviveChecker } from '../../../process/tile2/Tile2ReviveChecker';
import { Tile2ReviveModifier } from '../../../process/tile2/Tile2ReviveModifier';
import { Tile2ShuffleModifier } from '../../../process/tile2/Tile2ShuffleModifier';
import { Tile2SlotBarChecker } from '../../../process/tile2/Tile2SlotBarChecker';
import { Tile2SlotBarModifier } from '../../../process/tile2/Tile2SlotBarModifier';
import Tile2TileTypesModifier from '../../../process/tile2/Tile2TileTypesModifier';
import DaxiaoChecker from '../../../process/tileTypes/DaxiaoChecker';
import DaxiaoModifier from '../../../process/tileTypes/DaxiaoModifier';
import DuoxiaoChecker from '../../../process/tileTypes/DuoxiaoChecker';
import DuoxiaoModifier from '../../../process/tileTypes/DuoxiaoModifier';
import { TileTypeChecker } from '../../../tileTypes/TileTypeChecker';
import TileTypesModifier from '../../../tileTypes/TileTypesModifier';
import { TouchModifier } from '../../../process/touch/TouchModifier';
import { TrackerModifier } from '../../../process/tracker/TrackerModifier';
import { BaseContext } from './BaseContext';
import { Tile2DotTrackerModifier } from '../../../process/tile2/Tile2DotTrackerModifier';
import { Tile2MagnetChecker } from '../../../process/magnet/Tile2MagnetChecker';
import Tile2RollCardChecker from '../../../process/tile2/Tile2RollCardChecker';
import Tile2RollCardModifier from '../../../process/tile2/Tile2RollCardModifier';
import Tile2DaxiaoModifier from '../../../process/tile2/Tile2DaxiaoModifier';
import Tile2NormalBackModifier from '../../../process/tile2/Tile2NormalBackModifier';
export class GameContext extends BaseContext {
  _tile2SlotType = ETile2SlotType.Slot3;
  _offsetY = 0;
  _cardConfigMap = new Map();
  _layoutScale = 1;
  _canHitTipIds = [];
  _isNewGame = false;
  _isRestart = false;
  _touchData = new TouchData();
  _contentSize = new cc.Size(0, 0);
  _duoxiaoClearCount = 0;
  _openGenerateState = false;
  get gameSimulator() {
    return this._gameSimulator;
  }
  get gameTimeData() {
    return this._gameTimeData;
  }
  get gameType() {
    return this._gameType;
  }
  get randomGenerator() {
    return this._randomGenerator;
  }
  get touchData() {
    return this._touchData;
  }
  get comboModifier() {
    this._comboModifier || (this._comboModifier = new ComboModifier(this));
    return this._comboModifier;
  }
  get comboChecker() {
    this._comboChecker || (this._comboChecker = new ComboChecker(this));
    return this._comboChecker;
  }
  get tile2ComboChecker() {
    this._tile2ComboChecker || (this._tile2ComboChecker = new Tile2ComboChecker(this));
    return this._tile2ComboChecker;
  }
  get scoreModifier() {
    this._scoreModifier || (this._scoreModifier = new ScoreModifier(this));
    return this._scoreModifier;
  }
  get clearChecker() {
    this._clearChecker || (this._clearChecker = new ClearChecker(this));
    return this._clearChecker;
  }
  get clearModifier() {
    this._clearModifier || (this._clearModifier = new ClearModifier(this));
    return this._clearModifier;
  }
  get saveModifier() {
    this._saveModifier || (this._saveModifier = new SaveModifier(this));
    return this._saveModifier;
  }
  get touchModifier() {
    this._touchModifier || (this._touchModifier = new TouchModifier(this));
    return this._touchModifier;
  }
  get tileSelector() {
    this._tileSelector || (this._tileSelector = new TileSelector(this));
    return this._tileSelector;
  }
  get tileChecker() {
    this._tileChecker || (this._tileChecker = new TileChecker(this));
    return this._tileChecker;
  }
  get layoutSelector() {
    this._layoutSelector || (this._layoutSelector = new LayoutSelector(this));
    return this._layoutSelector;
  }
  get fullComboChecker() {
    this._fullComboChecker || (this._fullComboChecker = new FullComboChecker(this));
    return this._fullComboChecker;
  }
  get rewardComboChecker() {
    this._rewardComboChecker || (this._rewardComboChecker = new RewardComboChecker(this));
    return this._rewardComboChecker;
  }
  get allClearChecker() {
    this._allClearChecker || (this._allClearChecker = new AllClearChecker(this));
    return this._allClearChecker;
  }
  get allClearModifier() {
    this._allClearModifier || (this._allClearModifier = new AllClearModifier(this));
    return this._allClearModifier;
  }
  get gameModifier() {
    this._gameModifier || (this._gameModifier = new GameModifier(this));
    return this._gameModifier;
  }
  get shuffleModifier() {
    this._shuffleModifier || (this._shuffleModifier = new ShuffleModifier(this));
    return this._shuffleModifier;
  }
  get motivationalWordsChecker() {
    this._motivationalWordsChecker || (this._motivationalWordsChecker = new MotivationalWordsChecker(this));
    return this._motivationalWordsChecker;
  }
  get tileTypesModifier() {
    this._tileTypesModifier || (this._tileTypesModifier = new TileTypesModifier(this));
    return this._tileTypesModifier;
  }
  get duoxiaoModifier() {
    this._duoxiaoModifier || (this._duoxiaoModifier = new DuoxiaoModifier(this));
    return this._duoxiaoModifier;
  }
  get duoxiaoChecker() {
    this._duoxiaoChecker || (this._duoxiaoChecker = new DuoxiaoChecker(this));
    return this._duoxiaoChecker;
  }
  get tileTypeChecker() {
    this._tileTypeChecker || (this._tileTypeChecker = new TileTypeChecker(this));
    return this._tileTypeChecker;
  }
  get resultChecker() {
    this._resultChecker || (this._resultChecker = new ResultChecker(this));
    return this._resultChecker;
  }
  get trackerModifier() {
    this._trackerModifier || (this._trackerModifier = new TrackerModifier(this));
    return this._trackerModifier;
  }
  get collectSystem() {
    var e;
    return null === (e = this.getTileMapObject()) || void 0 === e ? void 0 : e.collectSystem;
  }
  get endStrategy() {
    this._endStrategy || (this._endStrategy = new EndStrategy(this));
    return this._endStrategy;
  }
  get daxiaoChecker() {
    this._daxiaoChecker || (this._daxiaoChecker = new DaxiaoChecker(this));
    return this._daxiaoChecker;
  }
  get daxiaoModifier() {
    this._daxiaoModifier || (this._daxiaoModifier = new DaxiaoModifier(this));
    return this._daxiaoModifier;
  }
  get classicLevelModifier() {
    this._classicLevelModifier || (this._classicLevelModifier = new ClassicLevelModifier(this));
    return this._classicLevelModifier;
  }
  get classicLevelChecker() {
    this._classicLevelChecker || (this._classicLevelChecker = new ClassicLevelChecker(this));
    return this._classicLevelChecker;
  }
  get classicReviveChecker() {
    this._classicReviveChecker || (this._classicReviveChecker = new ClassicReviveChecker(this));
    return this._classicReviveChecker;
  }
  get classicReviveModifier() {
    this._classicReviveModifier || (this._classicReviveModifier = new ClassicReviveModifier(this));
    return this._classicReviveModifier;
  }
  get tile2SlotBarData() {
    this._tile2SlotBarData || (this._tile2SlotBarData = new Tile2SlotBarData());
    return this._tile2SlotBarData;
  }
  get tile2TouchData() {
    this._tile2TouchData || (this._tile2TouchData = new Tile2TouchData());
    return this._tile2TouchData;
  }
  get tile2SlotBarChecker() {
    this._tile2SlotBarChecker || (this._tile2SlotBarChecker = new Tile2SlotBarChecker(this));
    return this._tile2SlotBarChecker;
  }
  get tile2SlotBarModifier() {
    this._tile2SlotBarModifier || (this._tile2SlotBarModifier = new Tile2SlotBarModifier(this));
    return this._tile2SlotBarModifier;
  }
  get inputTile2TouchRunLock() {
    this._inputTile2TouchRunLock || (this._inputTile2TouchRunLock = new InputTile2TouchRunLock(this));
    return this._inputTile2TouchRunLock;
  }
  get tile2ResultChecker() {
    this._tile2ResultChecker || (this._tile2ResultChecker = new Tile2ResultChecker(this));
    return this._tile2ResultChecker;
  }
  get tile2ReviveChecker() {
    this._tile2ReviveChecker || (this._tile2ReviveChecker = new Tile2ReviveChecker(this));
    return this._tile2ReviveChecker;
  }
  get tile2ReviveModifier() {
    this._tile2ReviveModifier || (this._tile2ReviveModifier = new Tile2ReviveModifier(this));
    return this._tile2ReviveModifier;
  }
  get tile2ShuffleModifier() {
    this._tile2ShuffleModifier || (this._tile2ShuffleModifier = new Tile2ShuffleModifier(this));
    return this._tile2ShuffleModifier;
  }
  get tile2DianZanChecker() {
    this._tile2DianZanChecker || (this._tile2DianZanChecker = new Tile2DianZanChecker(this));
    return this._tile2DianZanChecker;
  }
  get tile2CheerChecker() {
    this._tile2CheerChecker || (this._tile2CheerChecker = new Tile2CheerChecker(this));
    return this._tile2CheerChecker;
  }
  get tile2PerfectChecker() {
    this._tile2PerfectChecker || (this._tile2PerfectChecker = new Tile2PerfectChecker(this));
    return this._tile2PerfectChecker;
  }
  get tile2HitTipsModifier() {
    this._tile2HitTipsModifier || (this._tile2HitTipsModifier = new Tile2HitTipsModifier(this));
    return this._tile2HitTipsModifier;
  }
  get tile2HitTipsChecker() {
    this._tile2HitTipsChecker || (this._tile2HitTipsChecker = new Tile2HitTipsChecker(this));
    return this._tile2HitTipsChecker;
  }
  get tile2TileTypesModifier() {
    this._tile2TileTypesModifier || (this._tile2TileTypesModifier = new Tile2TileTypesModifier(this));
    return this._tile2TileTypesModifier;
  }
  get tile2BombModifier() {
    this._tile2BombModifier || (this._tile2BombModifier = new Tile2BombModifier(this));
    return this._tile2BombModifier;
  }
  get tile2DotTrackerModifier() {
    this._tile2DotTrackerModifier || (this._tile2DotTrackerModifier = new Tile2DotTrackerModifier(this));
    return this._tile2DotTrackerModifier;
  }
  get tile2MagnetChecker() {
    this._tile2MagnetChecker || (this._tile2MagnetChecker = new Tile2MagnetChecker(this));
    return this._tile2MagnetChecker;
  }
  get tile2RollCardChecker() {
    this._tile2RollCardChecker || (this._tile2RollCardChecker = new Tile2RollCardChecker(this));
    return this._tile2RollCardChecker;
  }
  get tile2RollCardModifier() {
    this._tile2RollCardModifier || (this._tile2RollCardModifier = new Tile2RollCardModifier(this));
    return this._tile2RollCardModifier;
  }
  get tile2DaxiaoModifier() {
    this._tile2DaxiaoModifier || (this._tile2DaxiaoModifier = new Tile2DaxiaoModifier(this));
    return this._tile2DaxiaoModifier;
  }
  get tile2NormalBackModifier() {
    this._tile2NormalBackModifier || (this._tile2NormalBackModifier = new Tile2NormalBackModifier(this));
    return this._tile2NormalBackModifier;
  }
  setGameData(e) {
    this._gameData = e;
  }
  getGameData() {
    return this._gameData;
  }
  getTile2SlotType() {
    return this._tile2SlotType;
  }
  setTile2SlotType(e) {
    this._tile2SlotType = e;
  }
  getOffsetY() {
    return this._offsetY;
  }
  setOffsetY(e) {
    this._offsetY = e;
  }
  setGameType(e) {
    this._gameType = e;
  }
  setUserData(e) {
    this._userData = e;
  }
  getUserData() {
    return this._userData;
  }
  setRandomGenerator(e) {
    this._randomGenerator = e;
  }
  getCardConfigMap() {
    return this._cardConfigMap;
  }
  setCardConfigMap(e) {
    this._cardConfigMap = e;
  }
  getCardLayoutConfig() {
    return this._cardLayoutConfig;
  }
  setCardLayoutConfig(e) {
    this._cardLayoutConfig = e;
  }
  getLayoutScale() {
    return this._layoutScale;
  }
  setLayoutScale(e) {
    this._layoutScale = e;
  }
  setTileMapObject(e) {
    this._tileMapObject = e;
  }
  getTileMapObject() {
    return this._tileMapObject;
  }
  getCanHitTips() {
    return this._canHitTipIds;
  }
  setCanHitTips(e = []) {
    this._canHitTipIds = e;
  }
  getIsNewGame() {
    return this._isNewGame;
  }
  setIsNewGame(e) {
    this._isNewGame = e;
  }
  getIsRestart() {
    return this._isRestart;
  }
  setIsRestart(e) {
    this._isRestart = e;
  }
  clearAllData() {
    this.setCanHitTips();
  }
  getGameTracker() {
    return this._gameTracker;
  }
  setGameTracker(e) {
    this._gameTracker = e;
  }
  getContentSize() {
    return this._contentSize;
  }
  setContentSize(e) {
    this._contentSize = e;
  }
  getDuoxiaoClearCount() {
    return this._duoxiaoClearCount;
  }
  setDuoxiaoClearCount(e) {
    this._duoxiaoClearCount = e;
  }
  getOpenGenerateState() {
    return this._openGenerateState;
  }
  setOpenGenerateState(e) {
    this._openGenerateState = e;
  }
  setTile2DotTracker(e) {
    this._dotTracker = e;
  }
  getTile2DotTracker() {
    return this._dotTracker;
  }
}