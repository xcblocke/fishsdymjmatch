import { BaseCoreObject } from '../../BaseCoreObject';
import { EMergeType } from '../../core/simulator/constant/GameTypeEnums';
export default class DaxiaoModifier extends BaseCoreObject {
  modifyDaxiaoCard(e, t) {
    var o, n;
    try {
      for (var i = __values(t), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        this._context.getTileMapObject().selcectTileId(s.tileId1, true);
        this._context.getTileMapObject().selcectTileId(s.tileId2, true);
        this._context.clearModifier.modifyClear(e, EMergeType.Daxiao);
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