import { BaseCoreObject } from '../../BaseCoreObject';
import { ECollectFrom } from '../../constant/CollectInterfact';
import { EGameInputEnum } from '../../simulator/constant/GameInputEnum';
import { EMergeType, ResId } from '../../core/simulator/constant/GameTypeEnums';
export class ClearModifier extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  fixMergeType(e, t = EMergeType.Normal) {
    t === EMergeType.Normal && (e.inputType === EGameInputEnum.AutoMerge ? t = EMergeType.FullCombo : e.inputType === EGameInputEnum.DuoxiaoAutoMerge && (t = EMergeType.Duoxiao));
    return t;
  }
  modifyClear(e, t = EMergeType.Normal) {
    var o = (t = this.fixMergeType(e, t)) !== EMergeType.Normal;
    this._context.trackerModifier.triggerClear(e, t, o);
    var n = this._context.getTileMapObject().clear(o);
    this._context.getGameData().addAutoCollectTilesNum(t === EMergeType.FullCombo ? n.length : 0);
    this._context.getGameData().addStepCount(1);
    this.modifyManualMatchCount(e);
    this._context.saveModifier.saveLevelDataToLocalStorage();
    return n;
  }
  modifyTileTypesClear() {
    var e = {},
      t = this.collectYogaCardIds();
    e.yogaCardIds = t;
    this._context.saveModifier.saveLevelDataToLocalStorage();
    return e;
  }
  collectYogaCardIds() {
    var e = this._context.getTileMapObject(),
      t = [];
    e.tileObjectMap().forEach(function (o, n) {
      if (o.isValid && o.resId === ResId.emYogaCardId && !e.isCardLock(o)) {
        t.push(n);
        e.clearTile(n, ECollectFrom.FromYoga);
      }
    });
    return t;
  }
  modifyManualMatchCount(e) {
    if ([EGameInputEnum.TouchStart, EGameInputEnum.TouchEnd].includes(e.inputType)) {
      this._context.getGameData().updateNonAutoStepCount();
      this._context.getGameData().updateClearTimeInterval();
    }
  }
  modifyAutoCollectTilesNum(e, t) {
    e.inputType === EGameInputEnum.Tile2AutoMerge && this._context.getGameData().addAutoCollectTilesNum(t);
  }
}