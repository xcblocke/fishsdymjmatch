import BaseSprite from './gamePlay/base/ui/BaseSprite';
import CardUtil from './gamePlay/user/CardUtil';
import { Tile2NodeStateAniBase } from './base/Tile2NodeStateAniBase';
export class Tile2Flip3DNodeStateAni extends Tile2NodeStateAniBase {
  _easing = "";
  _isLeft = true;
  _baseTileNode = null;
  _component = null;
  constructor(t, o, n) {
    super(t, "flip");
    this._baseTileNode = o;
    this._component = n;
  }
  updateIsLeft() {
    if (this._baseTileNode.tileObject.isHasLeft()) this._isLeft = false;else if (this._baseTileNode.tileObject.isHasRight()) this._isLeft = true;else {
      var e = this._baseTileNode.tileObject.getPosition(),
        t = this._baseTileNode.layerNode.parent.convertToWorldSpaceAR(e),
        o = cc.find("Canvas").convertToNodeSpaceAR(t);
      this._isLeft = o.x < 0;
    }
  }
  createAnimNode() {
    var e = new cc.Node();
    e.setContentSize(this._baseTileNode.info.tileObject.getCardContentSize());
    e.setAnchorPoint(0.5, 0.5);
    e.setPosition(0, 0, 0);
    e.name = "imgCard";
    var t = CardUtil.getAtlasPathAndBundleName(this._baseTileNode.info.tileObject.resName, this._baseTileNode),
      o = t.path,
      n = t.bundleName,
      i = t.fromAtlas;
    BaseSprite.refreshWithNode(e, o, i, false, n);
    e.scale = 1 / this._baseTileNode.animNode.scale;
    return e;
  }
  onEnterStart(e) {
    if (cc.isValid(this._node)) {
      this.playEnterStartAni(e);
    } else {
      this.onEnterEnd(e);
    }
  }
  playEnterStartAni(e) {
    var t = this;
    this.updateIsLeft();
    var o = this._isLeft ? "in_front_left" : "in_front_right";
    this._baseTileNode.tileNode.active = false;
    this._baseTileNode.shadowNode.active = false;
    this._baseTileNode.playAnimNodeAnimation("spine/rollcard/gameplay_flip", o, false, this.handleEnterAnimationComplete.bind(this, e), function () {
      return t.createAnimNode();
    });
    this.ensureLockBgState(this._baseTileNode);
  }
  handleEnterAnimationComplete(e) {
    this._baseTileNode.tileNode.active = true;
    this._baseTileNode.shadowNode.active = true;
    this._component.setIsBack(false);
    this._baseTileNode.stopAnimNodeAnimation();
    this._baseTileNode.updateImgCard();
    this.onEnterEnd(e);
  }
  onExitStart(e) {
    if (cc.isValid(this._node)) {
      this.playExitStartAni(e);
    } else {
      this.onExitEnd(e);
    }
  }
  playExitStartAni(e) {
    var t = this;
    this.updateIsLeft();
    var o = this._isLeft ? "in_back_left" : "in_back_right";
    this._baseTileNode.tileNode.active = false;
    this._baseTileNode.shadowNode.active = false;
    this._baseTileNode.playAnimNodeAnimation("spine/rollcard/gameplay_flip", o, false, this.handleExitAnimationComplete.bind(this, e), function () {
      return t.createAnimNode();
    });
    this.ensureLockBgState(this._baseTileNode);
  }
  handleExitAnimationComplete(e) {
    this._baseTileNode.tileNode.active = true;
    this._baseTileNode.shadowNode.active = true;
    this._component.setIsBack(true);
    this._baseTileNode.updateImgCard();
    this._baseTileNode.stopAnimNodeAnimation();
    this.onExitEnd(e);
  }
  onEnter(t) {
    super.onEnter.call(this, t);
    this._baseTileNode.tileNode.active = true;
    this._baseTileNode.shadowNode.active = true;
    this._component.setIsBack(false);
    this._baseTileNode.stopAnimNodeAnimation();
    this._baseTileNode.updateImgCard();
  }
  onExit(t) {
    super.onExit.call(this, t);
    this._baseTileNode.tileNode.active = true;
    this._baseTileNode.shadowNode.active = true;
    this._component.setIsBack(true);
    this._baseTileNode.updateImgCard();
    this._baseTileNode.stopAnimNodeAnimation();
  }
  ensureLockBgState(e) {
    var t;
    if (cc.isValid(e) && (null === (t = e.info) || void 0 === t ? void 0 : t.tileObject)) {
      var o = e.imgLockBg;
      if (cc.isValid(o) && !e.info.tileObject.isCardLock()) {
        o.active = false;
        o.opacity = 255;
      }
    }
  }
}