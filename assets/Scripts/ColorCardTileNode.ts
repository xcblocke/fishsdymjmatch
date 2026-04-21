import BaseSprite from './gamePlay/base/ui/BaseSprite';
import CardUtil from './gamePlay/user/CardUtil';
import { ETileNodeShowType } from './simulator/constant/TileTypeEnum';
import { TileNodeObject } from './TileNodeObject';
export class ColorCardTileNode extends TileNodeObject {
  _initType = ETileNodeShowType.ColorCard;
  updateImgCardBg() {
    var e = CardUtil.getAtlasPathAndBundleName("journey_special_mj_green", this),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this.imgCardBg, t, n, false, o);
  }
}