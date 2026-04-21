import { BaseCoreObject } from '../../BaseCoreObject';
import { ECollectFrom } from '../../constant/CollectInterfact';
export class AllClearModifier extends BaseCoreObject {
  changeAllClear(e, t) {
    var o = this.context.getGameData();
    o && o.setHasTriggeredAllClear(true);
    var n = this.context.getTileMapObject();
    1 != e && n && (null == t || t.forEach(function (e) {
      n.clearTile(e, ECollectFrom.FromAllClear);
      null == o || o.addAutoCollectTilesNum(1);
    }));
  }
}