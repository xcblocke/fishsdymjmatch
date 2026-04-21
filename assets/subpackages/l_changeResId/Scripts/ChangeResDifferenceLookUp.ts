import { DataReader } from '../../../Scripts/framework/data/DataReader';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
export default class ChangeResDifferenceLookUp {
  dict = new Map();
  _cardIdSet = new Set();
  constructor() {
    var e = this;
    DataReader.getList(this.getConfigName()).forEach(function (t) {
      e._cardIdSet.add(t.CardId1);
      var r = Math.min(t.CardId1, t.CardId2) + "_" + Math.max(t.CardId1, t.CardId2);
      e.dict.set(r, t.Difference);
    });
  }
  getConfigName() {
    return ConfigType.card_difference2;
  }
  hasCard(e) {
    return this._cardIdSet.has(e);
  }
  get(e, t) {
    if (e === t) return 0;
    var r = Math.min(e, t) + "_" + Math.max(e, t),
      i = this.dict.get(r);
    return void 0 !== i ? i : 50;
  }
}