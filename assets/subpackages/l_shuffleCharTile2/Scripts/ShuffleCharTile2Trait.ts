import Trait from '../../../Scripts/framework/trait/Trait';
import { HolderPriorityShuffler } from '../../../Scripts/HolderPriorityShuffler';
import { ECoordSelectionType, ECharSelectionType } from '../../../Scripts/CharacterGenerator';
import CharacterGeneratorTile2 from '../../../Scripts/helpers/CharacterGeneratorTile2';
import { ETileType } from '../../../Scripts/simulator/constant/TileTypeEnum';
@mj.trait
@mj.class("ShuffleCharTile2Trait")
export default class ShuffleCharTile2Trait extends Trait {
  _coordSelectionType = ECoordSelectionType.Random;
  _charSelectionType = ECharSelectionType.Random;
  _holderPickMode = "eachOne";
  _includeBack = false;
  static traitKey = "ShuffleCharTile2";
  onLoad() {
    var t, r, o, i;
    super.onLoad.call(this);
    this._coordSelectionType = null !== (t = this._traitData.coordSelectionType) && void 0 !== t ? t : ECoordSelectionType.Random;
    this._charSelectionType = null !== (r = this._traitData.charSelectionType) && void 0 !== r ? r : ECharSelectionType.Random;
    this._holderPickMode = null !== (o = this._traitData.holderPickMode) && void 0 !== o ? o : "eachOne";
    this._includeBack = null !== (i = this._traitData.includeBack) && void 0 !== i && i;
  }
  onTile2ShuffleMod_compute(e, t) {
    var r,
      o,
      i = e.ins._context,
      n = i.getGameData(),
      c = i.getTileMapObject(),
      s = new Set(n.slotBarIds || []),
      p = [];
    c.tileObjectMap().forEach(function (e) {
      e.isValid && !s.has(e.saveKey()) && p.push(e);
    });
    if (p.length < 2) t();else {
      var f = new Map();
      try {
        for (var d = __values(p), y = d.next(); !y.done; y = d.next()) {
          var _ = y.value;
          f.has(_.cardId) || f.set(_.cardId, []);
          f.get(_.cardId).push(_);
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          y && !y.done && (o = d.return) && o.call(d);
        } finally {
          if (r) throw r.error;
        }
      }
      var T = [];
      f.forEach(function (e, t) {
        for (var r = 0; r + 1 < e.length; r += 2) T.push([{
          resId: t,
          type: ETileType.Normal
        }, {
          resId: t,
          type: ETileType.Normal
        }]);
      });
      if (0 !== T.length) {
        var v = CharacterGeneratorTile2.getInstance(),
          m = v.generateCharacterAssignment(i, p, T, this._coordSelectionType, this._charSelectionType);
        0 === m.length || v.applyAssignments(m, c);
        (n.slotBarIds || []).length > 0 && new HolderPriorityShuffler(i).apply({
          holderPickMode: this._holderPickMode,
          includeBack: this._includeBack
        });
        t({
          isBreak: true,
          returnType: TraitCallbackReturnType.return
        });
      } else t();
    }
  }
}