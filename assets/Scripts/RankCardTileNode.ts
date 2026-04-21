import BaseSpine from './gamePlay/base/ui/BaseSpine';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import CardUtil from './gamePlay/user/CardUtil';
import UserModel from './gamePlay/user/UserModel';
import { ETileNodeShowType } from './simulator/constant/TileTypeEnum';
import { TileNodeObject } from './TileNodeObject';
export class RankCardTileNode extends TileNodeObject {
  _initType = ETileNodeShowType.RankCard;
  @mj.traitEvent("RankCardNode_updImgCard")
  updateImgCard() {
    var e = UserModel.getInstance().getRankCardResName(),
      t = CardUtil.getAtlasPathAndBundleName(e, this),
      o = t.path,
      n = t.bundleName,
      i = t.fromAtlas;
    BaseSprite.refreshWithNode(this.imgCard, o, i, false, n);
    this.saveCardUniqueInfo(n, o, i);
  }
  updateImgCardBg() {
    var e = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2", this),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this.imgCardBg, t, n, false, o);
  }
  updateEffectSelected() {
    this._effectSelectedProxy = BaseSpine.refreshWithNode(this.effectSelected, "spine/rankcard/select/gameplay_selected_special");
  }
  realShowSelectEffect() {
    super.realShowSelectEffect.call(this);
    this.imgSelectedCardBg.active = false;
  }
}