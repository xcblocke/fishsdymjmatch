import { BaseCoreObject } from '../../BaseCoreObject';
import { ECollectFrom } from '../../constant/CollectInterfact';
export default class Tile2DaxiaoModifier extends BaseCoreObject {
  modifyDaxiaoCard(e, t) {
    var o, n;
    try {
      for (var i = __values(t), a = i.next(); !a.done; a = i.next()) {
        var s = a.value,
          c = [s.tileId1, s.tileId2];
        this._context.tile2SlotBarModifier.clear([c], ECollectFrom.FromDaxiao);
      }
    } catch (e) {
      o = {
        error: e
      };
    } finally {
      try {
        a && !a.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
  }
}