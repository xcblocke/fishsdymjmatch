import LevelGenRule from '../core/simulator/config/LevelGenRule';
import { MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { TileMapObject } from './TileMapObject';
import { TileObject } from './TileObject';
export class TileMapSimulator extends TileMapObject {
  static createSim(e) {
    var o,
      n,
      i,
      c,
      p,
      f,
      d = e.saveModifier.getAllCardPosData(),
      h = new TileMapSimulator(e);
    h._isSimulator = true;
    if (e.gameType == MjGameType.Classic || e.gameType == MjGameType.Tile2Normal) {
      Date.now();
      try {
        for (var y = __values(e.getTileMapObject().tileObjectMap()), m = y.next(); !m.done; m = y.next()) {
          var v = __read(m.value, 2),
            g = v[0],
            _ = v[1],
            T = new TileObject(_.id, {
              id: _.resId,
              pos: {
                x: _.gridPosX,
                y: _.gridPosY,
                z: _.layer
              },
              isAlive: _.isValid
            }, h);
          T.init(e, e.getCardConfigMap());
          e.gameType == MjGameType.Tile2Normal && (T._isValid = _.isValid);
          T._batchId = _.batchId;
          T._type = _.type;
          T.setTypeBits(_.getTypeBits());
          T.setOriginalResId(_.originalResId);
          T.isHint = _.isHint;
          T._isSelect = _.isSelect;
          T.positionOffset = _.positionOffset;
          T.setTouchSizeOffsets(_.getTouchSizeOffsets());
          T.setDuoxiaoCount(_.getDuoxiaoCount());
          T._isInSlotBar = _._isInSlotBar;
          T._indexInSlotBar = _._indexInSlotBar;
          var C = h.getSpeLayer(_.layer);
          if (C) {
            C.addCard(T);
            h.tileObjectMap().set(T.id, T);
          }
        }
      } catch (e) {
        o = {
          error: e
        };
      } finally {
        try {
          m && !m.done && (n = y.return) && n.call(y);
        } finally {
          if (o) throw o.error;
        }
      }
      h.updateInitGameLayer();
    } else {
      Date.now();
      var b = LevelGenRule.serializeTilesToInlineString(d),
        E = e.getTileMapObject().getAllTileTypes();
      h.initGameLayer(b);
      try {
        for (var S = __values(e.getTileMapObject().tileObjectMap()), I = S.next(); !I.done; I = S.next()) {
          var w = __read(I.value, 2),
            B = (g = w[0], (P = w[1]).pos.x + "-" + P.pos.y + "-" + P.pos.z),
            x = g;
          if ((_ = h.tileObjectMap().get(B)) && B !== x) {
            _._id = x;
            h.tileObjectMap().delete(B);
            h.tileObjectMap().set(x, _);
          }
        }
      } catch (e) {
        i = {
          error: e
        };
      } finally {
        try {
          I && !I.done && (c = S.return) && c.call(S);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var M = __values(E), O = M.next(); !O.done; O = M.next()) {
          var D = __read(O.value, 2),
            P = (g = D[0], D[1]);
          h.setTileType(g, P);
        }
      } catch (e) {
        p = {
          error: e
        };
      } finally {
        try {
          O && !O.done && (f = M.return) && f.call(M);
        } finally {
          if (p) throw p.error;
        }
      }
    }
    return h;
  }
  onClear() {}
}