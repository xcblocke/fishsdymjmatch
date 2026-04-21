import Trait from '../../../Scripts/framework/trait/Trait';
import CharacterGenerator, { ECoordSelectionType, ECharSelectionType, COORD_ALGO_NAMES, CHAR_ALGO_NAMES } from '../../../Scripts/CharacterGenerator';
@mj.trait
@mj.class("CharGenShuffleTrait")
export default class CharGenShuffleTrait extends Trait {
  _coordSelectionType = ECoordSelectionType.Random;
  _charSelectionType = ECharSelectionType.Random;
  static traitKey = "CharGenShuffle";
  onLoad() {
    var t, r;
    super.onLoad.call(this);
    this._coordSelectionType = null !== (t = this._traitData.coordSelectionType) && void 0 !== t ? t : ECoordSelectionType.Random;
    this._charSelectionType = null !== (r = this._traitData.charSelectionType) && void 0 !== r ? r : ECharSelectionType.Random;
  }
  getGMSetting() {
    try {
      var e = cc.sys.localStorage.getItem("__gmCharGenAlgo__");
      if (e) return JSON.parse(e);
    } catch (e) {}
    return null;
  }
  onShuffleMod_assignResIds(e, t) {
    var r = e.args[0],
      o = e.args[1],
      n = e.ins._context,
      i = (COORD_ALGO_NAMES[this._coordSelectionType], CHAR_ALGO_NAMES[this._charSelectionType], CharacterGenerator.getInstance());
    if (i) {
      var a = i.generateCharacterAssignment(n, r, o, this._coordSelectionType, this._charSelectionType);
      i.applyAssignments(a, n.getTileMapObject());
      t({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else t();
  }
}