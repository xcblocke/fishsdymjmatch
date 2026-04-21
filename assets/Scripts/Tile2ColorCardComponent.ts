import BaseSprite from './gamePlay/base/ui/BaseSprite';
import CardUtil from './gamePlay/user/CardUtil';
import { TileNodeComponent } from './TileNodeComponent';
export class Tile2ColorCardComponent extends TileNodeComponent {
  onUpdateImgCardBg() {
    var e = CardUtil.getAtlasPathAndBundleName("journey_special_mj_green", this._host),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this._host.imgCardBg, t, n, false, o);
    return true;
  }
}