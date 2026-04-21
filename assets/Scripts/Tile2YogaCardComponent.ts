import BaseSprite from './gamePlay/base/ui/BaseSprite';
import TravelGameModel from './gamePlay/travel/model/TravelGameModel';
import CardUtil from './gamePlay/user/CardUtil';
import { MjGameType } from './core/simulator/constant/GameTypeEnums';
import { TileNodeComponent } from './TileNodeComponent';
export class Tile2YogaCardComponent extends TileNodeComponent {
  onUpdateImgCard() {
    var e = this._getYogaIcon(),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this._host.imgCard, t, n, false, o);
    this._host.saveCardUniqueInfo(o, t, n);
    return true;
  }
  onUpdateImgCardBg() {
    this._host.imgCardBg.active = false;
    this._host.imgCardBg.opacity = 0;
    return true;
  }
  onUpdateShadowNode() {
    this._host.shadowNode.active = false;
    this._host.shadowNode.opacity = 0;
    return true;
  }
  onUpdateLockBg() {
    var e = this._host.imgLockBg,
      t = null == e ? void 0 : e.getComponent(cc.Sprite);
    t && (t.enabled = false);
    if (e) {
      e.active = false;
      e.opacity = 0;
    }
    return true;
  }
  onShowSelectEffect() {
    var e = this._host;
    if (e._imgSelected && e._imgSelected.active) return true;
    e.imgSelected.active = true;
    e.imgSelectedCardBg.active = true;
    e.effectSelected.active = true;
    e.imgSelected.opacity = 0;
    e.imgSelectedCardBg.opacity = 0;
    e.effectSelected.opacity = 0;
    return true;
  }
  _getYogaIcon() {
    var e, t;
    if ((null === (t = null === (e = this._host.context) || void 0 === e ? void 0 : e.gameCtr) || void 0 === t ? void 0 : t.gameType) === MjGameType.Travel) {
      var o = TravelGameModel.getInstance().getCurJourney(),
        n = TravelGameModel.getInstance().getConfig(o);
      if (null == n ? void 0 : n.yoga) return {
        path: "texture/journey/yoga/" + n.yoga,
        bundleName: "mainRes",
        fromAtlas: false
      };
    }
    return CardUtil.getAtlasPathAndBundleName(this._host.tileObject.resName, this._host);
  }
}