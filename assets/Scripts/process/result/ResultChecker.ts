import { BaseCoreObject } from '../../BaseCoreObject';
import GameStateListener from '../game/GameStateListener';
export class ResultChecker extends BaseCoreObject {
  checkIsEndOrDead(e = []) {
    var t, o, n, i;
    if (this.context.getTileMapObject().checkIsDead(e)) return true;
    if (this.context.endStrategy.checkIsEnd()) return true;
    var a = this.context.getTileMapObject().mapLayers();
    try {
      for (var l = __values(a), s = l.next(); !s.done; s = l.next()) {
        var c = s.value.allCards;
        try {
          for (var u = (n = void 0, __values(c)), p = u.next(); !p.done; p = u.next()) if (p.value.isValid) return false;
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            p && !p.done && (i = u.return) && i.call(u);
          } finally {
            if (n) throw n.error;
          }
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
    return true;
  }
  checkResult() {
    var e, t, o, n;
    if (this.context.endStrategy.checkIsEnd()) {
      GameStateListener.onGameEnd(this.context.gameType);
      return true;
    }
    var i = this.context.getTileMapObject().mapLayers();
    try {
      for (var a = __values(i), s = a.next(); !s.done; s = a.next()) {
        var c = s.value.allCards;
        try {
          for (var u = (o = void 0, __values(c)), p = u.next(); !p.done; p = u.next()) if (p.value.isValid) return false;
        } catch (e) {
          o = {
            error: e
          };
        } finally {
          try {
            p && !p.done && (n = u.return) && n.call(u);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (t = a.return) && t.call(a);
      } finally {
        if (e) throw e.error;
      }
    }
    GameStateListener.onGameEnd(this.context.gameType);
    return true;
  }
}