import { BaseCoreObject } from '../../BaseCoreObject';
import LevelGenRule from '../../core/simulator/config/LevelGenRule';
import { MjGameType } from '../../core/simulator/constant/GameTypeEnums';
export class SaveModifier extends BaseCoreObject {

  saveLevelDataToLocalStorage() {
    var e = this.getAllCardPosData(),
      t = LevelGenRule.serializeTilesToInlineString(e);
    this._context.getGameData().saveLevelData(t);
    this._context.gameType === MjGameType.Classic && this.saveTileBatchInfos();
  }
  saveTileBatchInfos() {
    var e = this._context.getTileMapObject(),
      t = [];
    e.tileObjectMap().forEach(function (e) {
      if (e.isValid) {
        var o = e.pos;
        t.push({
          key: o.x + "-" + o.y + "-" + o.z,
          batchId: e.batchId
        });
      }
    });
    this._context.getGameData().saveTileBatchInfos(t);
  }
  saveOriWithSpecialCards() {
    var e = this.getAllCardPosData(),
      t = LevelGenRule.serializeTilesToInlineString(e);
    this._context.getGameData().saveOriWithSpecialCards(t);
  }
  getAllCardPosData() {
    var e = this._context.getTileMapObject(),
      t = [];
    e.tileObjectMap().forEach(function (e) {
      var o = e.pos;
      t.push({
        id: e.resId,
        pos: {
          x: o.x,
          y: o.y,
          z: o.z
        },
        isAlive: e.isValid
      });
    });
    t.sort(function (e, t) {
      return e.pos.z !== t.pos.z ? e.pos.z - t.pos.z : e.pos.y !== t.pos.y ? e.pos.y - t.pos.y : e.pos.x - t.pos.x;
    });
    return t;
  }
}