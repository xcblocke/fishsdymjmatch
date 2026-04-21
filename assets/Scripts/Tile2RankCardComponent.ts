import BaseSpine from './gamePlay/base/ui/BaseSpine';
import BaseSprite from './gamePlay/base/ui/BaseSprite';
import CardUtil from './gamePlay/user/CardUtil';
import UserModel from './gamePlay/user/UserModel';
import { TileNodeComponent } from './TileNodeComponent';
export class Tile2RankCardComponent extends TileNodeComponent {
  getResNameOverride() {
    return UserModel.getInstance().getRankCardResName();
  }
  onUpdateImgCardBg() {
    var e = CardUtil.getAtlasPathAndBundleName("gameplay_special_mj_2", this._host),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this._host.imgCardBg, t, n, false, o);
    return true;
  }
  onUpdateEffectSelected() {
    this._host._effectSelectedProxy = BaseSpine.refreshWithNode(this._host.effectSelected, "spine/rankcard/select/gameplay_selected_special");
    return true;
  }
  onRealShowSelectEffect() {
    this._host.imgSelectedCardBg.active = false;
    return false;
  }
}