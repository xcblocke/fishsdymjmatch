import BaseSprite from './gamePlay/base/ui/BaseSprite';
import TravelGameModel from './gamePlay/travel/model/TravelGameModel';
import CardUtil from './gamePlay/user/CardUtil';
import { MjGameType } from './core/simulator/constant/GameTypeEnums';
import { ETileNodeShowType } from './simulator/constant/TileTypeEnum';
import { TileNodeObject } from './TileNodeObject';

export class YogaCardTileNode extends TileNodeObject {
  _initType = ETileNodeShowType.Yoga;
  updateImgCard() {
    var e = this.getYogaIcon(),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this.imgCard, t, n, false, o);
    this.saveCardUniqueInfo(o, t, n);
  }
  getYogaIcon() {
    if (this.context.gameCtr.gameType === MjGameType.Travel) {
      var e = TravelGameModel.getInstance().getCurJourney(),
        t = TravelGameModel.getInstance().getConfig(e);
      if (t && t.yoga) {
        var o = __read(this.getYogaIconPath(t.yoga), 2),
          n = o[0];
        return {
          path: o[1],
          bundleName: n,
          fromAtlas: false
        };
      }
    }
    return CardUtil.getAtlasPathAndBundleName(this.tileObject.resName, this);
  }
  getYogaIconPath(e) {
    var t = e.split(":");
    return 2 === t.length ? [t[0], "texture/" + t[1]] : ["mainRes", "texture/journey/yoga/" + e];
  }
  showSelectEffect() {
    if (!this._imgSelected || !this._imgSelected.active) {
      this.imgSelected.active = true;
      this.imgSelectedCardBg.active = true;
      this.effectSelected.active = true;
      this.imgSelected.opacity = 0;
      this.imgSelectedCardBg.opacity = 0;
      this.effectSelected.opacity = 0;
    }
  }
  updateImgCardBg() {
    this.imgCardBg.active = false;
    this.imgCardBg.opacity = 0;
  }
  updateShadowNode() {
    this.shadowNode.active = false;
    this.shadowNode.opacity = 0;
  }
  updateLockBg() {
    this.imgLockBg.getComponent(cc.Sprite) && (this.imgLockBg.getComponent(cc.Sprite).enabled = false);
    this.imgLockBg.active = false;
    this.imgLockBg.opacity = 0;
  }
}