import { MjCardId } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
import { TileMapObject } from '../../../Scripts/objects/TileMapObject';
export enum EFaceVisibilityType {
  FullyVisible = 1,
  PartiallyVisible = 2,
  Selectable = 3,
  NotVisible = 4,
}
export default class ChangeResUtil {
  static collectOriginalCardIds(e) {
    var t = new Set();
    e.forEach(function (e) {
      var r = e.cardId;
      e.type === ETileType.Normal && t.add(r);
    });
    return t;
  }
  static buildCandidateCardIdSet(e, t, r, i) {
    var a = e.getCardConfigMap(),
      o = new Set();
    a.forEach(function (e) {
      var r = e.cardId;
      TileMapObject.isSpecialCardId(r) || r === MjCardId.emFlowCardId && t < 4 || r === MjCardId.emSeasonCardId && t < 6 || i.hasCard(r) && o.add(r);
    });
    if (1 === r) {
      o.delete(MjCardId.emFlowCardIdMei);
      o.delete(MjCardId.emFlowCardIdLan);
      o.delete(MjCardId.emFlowCardIdZhu);
      o.delete(MjCardId.emFlowCardIdJu);
    } else if (2 === r) {
      o.delete(MjCardId.emSeasonCardIdChun);
      o.delete(MjCardId.emSeasonCardIdXia);
      o.delete(MjCardId.emSeasonCardIdQiu);
      o.delete(MjCardId.emSeasonCardIdDong);
    } else if (3 === r) {
      o.delete(MjCardId.emFlowCardIdMei);
      o.delete(MjCardId.emFlowCardIdLan);
      o.delete(MjCardId.emFlowCardIdZhu);
      o.delete(MjCardId.emFlowCardIdJu);
      o.delete(MjCardId.emSeasonCardIdChun);
      o.delete(MjCardId.emSeasonCardIdXia);
      o.delete(MjCardId.emSeasonCardIdQiu);
      o.delete(MjCardId.emSeasonCardIdDong);
    }
    return o;
  }
  static classifyFacesByCardId(e) {
    var t = this,
      r = [];
    e.forEach(function (e) {
      var i = e.cardId;
      if (e.type == ETileType.Normal) {
        var a = t.getVisibilityType(e);
        r.push({
          cardId: i,
          visibilityType: a,
          tileObject: e
        });
      }
    });
    return r;
  }
  static getVisibilityType(e) {
    var t = e.tileMapObject,
      r = 0 !== t.isCardLock(e),
      i = t.isHasCover(e);
    return i || r ? !i && r ? EFaceVisibilityType.FullyVisible : i && this.isPartiallyVisible(e) ? EFaceVisibilityType.PartiallyVisible : EFaceVisibilityType.NotVisible : EFaceVisibilityType.Selectable;
  }
  static isPartiallyVisible(e) {
    var t,
      r,
      a = e.tileMapObject,
      n = e.layer + 1;
    if (n >= a.mapLayers().length) return true;
    var o = 0;
    try {
      for (var l = __values(e.ownerGridIds), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        a.isHasCard(n, c) && o++;
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (r = l.return) && r.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    return o < 4;
  }
}