import { LevelDataParser } from './core/simulator/config/LevelDataParser';
export class FlowLevelSerializer {
  static serialize(t) {
    var o = FlowLevelSerializer.toCardTileDatas(t);
    return LevelDataParser.convertCardTileDatasToString(o);
  }
  static toCardTileDatas(e) {
    var t,
      o,
      i = e.filter(function (e) {
        return e.isValid;
      }).map(function (e) {
        return {
          id: e.cardId,
          pos: {
            x: e.gridX,
            y: e.gridY,
            z: e.layer
          },
          isAlive: true
        };
      }),
      r = 0,
      a = 0;
    try {
      for (var l = __values(i), s = l.next(); !s.done; s = l.next()) {
        var c = s.value;
        c.pos.y > r && (r = c.pos.y);
        c.pos.x > a && (a = c.pos.x);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (o = l.return) && o.call(l);
      } finally {
        if (t) throw t.error;
      }
    }
    var u = (r + 1) * (a + 1);
    i.sort(function (e, t) {
      return e.pos.z * u + e.pos.y * (a + 1) + e.pos.x - (t.pos.z * u + t.pos.y * (a + 1) + t.pos.x);
    });
    return i;
  }
}