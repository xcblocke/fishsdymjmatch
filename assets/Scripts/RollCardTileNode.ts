import BaseSprite from './gamePlay/base/ui/BaseSprite';
import CardUtil from './gamePlay/user/CardUtil';
import { ETileNodeShowType } from './simulator/constant/TileTypeEnum';
import { FlipStateCtl } from './fsm/ctl/FlipStateCtl';
import { TileNodeObject } from './TileNodeObject';
export class RollCardTileNode extends TileNodeObject {
  _initType = ETileNodeShowType.RollCard;
  _isBack = false;
  get isBack() {
    return this._isBack;
  }
  @mj.traitEvent("RollCTNode_keepOpen")
  keepOpen() {
    return false;
  }
  setIsBack(e) {
    this._isBack = e;
  }
  refreshNode(t) {
    var o, n;
    super.refreshNode.call(this, t);
    if (this.keepOpen()) {
      null === (o = this._tileFlipStateCtl) || void 0 === o || o.forceEnter();
    } else {
      null === (n = this._tileFlipStateCtl) || void 0 === n || n.forceExit();
    }
  }
  updateImgCard() {
    var e = CardUtil.getAtlasPathAndBundleName(this._isBack ? "gameplay_img_mj_dn" : this.tileObject.resName, this),
      t = e.path,
      o = e.bundleName,
      n = e.fromAtlas;
    BaseSprite.refreshWithNode(this.imgCard, t, n, false, o);
    var i = CardUtil.getAtlasPathAndBundleName(this.tileObject.resName, this);
    this.saveCardUniqueInfo(i.bundleName, i.path, i.fromAtlas);
  }
  showPropHint() {
    var t;
    super.showPropHint.call(this);
    this._isBack && (null === (t = this._tileFlipStateCtl) || void 0 === t || t.playEnterAni());
  }
  hidePropHint() {
    var t;
    super.hidePropHint.call(this);
    this._isBack || this.keepOpen() || null === (t = this._tileFlipStateCtl) || void 0 === t || t.playExitAni();
  }
  updateAnimMgr() {
    super.updateAnimMgr.call(this);
    this._tileFlipStateCtl || (this._tileFlipStateCtl = new FlipStateCtl(this.tileNode, this));
  }
  playSelectAnimation(t) {
    var o;
    super.playSelectAnimation.call(this, t);
    null === (o = this._tileFlipStateCtl) || void 0 === o || o.playEnterAni();
  }
  cancelSelectedAnimation(t) {
    var o;
    super.cancelSelectedAnimation.call(this, t);
    this.keepOpen() || this._effectPropHint && this._effectPropHint.active || null === (o = this._tileFlipStateCtl) || void 0 === o || o.playExitAni();
  }
  clearCancelSelected() {
    super.clearCancelSelected.call(this);
    this.onClearCancelSelected();
  }
  @mj.traitEvent("RollCTNode_clearCelSel")
  onClearCancelSelected() {
    var e, t;
    if (this.isBack) {
      null === (t = this._tileFlipStateCtl) || void 0 === t || t.playEnterAni();
    } else {
      null === (e = this._tileFlipStateCtl) || void 0 === e || e.forceEnter();
    }
  }
  stopAllAnimation() {
    var t;
    super.stopAllAnimation.call(this);
    this.keepOpen() || null === (t = this._tileFlipStateCtl) || void 0 === t || t.forceExit();
  }
}