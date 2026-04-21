import { DefaultGenerateStrategy } from './process/tile2/DefaultGenerateStrategy';
import { SkipGenerateStrategy } from './process/tile2/SkipGenerateStrategy';
import { ETileGenerateStrategy } from './TileGenerateStrategy';
export class TileGenerateStrategyRegistry {
  static _map = new Map([[ETileGenerateStrategy.Default, new DefaultGenerateStrategy()], [ETileGenerateStrategy.Skip, new SkipGenerateStrategy()]]);
  static register(e, t) {
    this._map.set(e, t);
  }
  static getStrategies(e) {
    var t,
      o,
      i = [];
    if (e) {
      var r = new Set();
      try {
        for (var l = __values(e.split(",")), s = l.next(); !s.done; s = l.next()) {
          var c = s.value.trim();
          if (!r.has(c)) {
            r.add(c);
            var u = this._map.get(c);
            u && i.push(u);
          }
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
    }
    0 === i.length && i.push(this._map.get(ETileGenerateStrategy.Default));
    return i;
  }
}