import { Tile2FlipNodeStateAni } from './fsm/ani/Tile2FlipNodeStateAni';
import { TileNodeComponent } from './TileNodeComponent';
export class RollCardComponent extends TileNodeComponent {
  _isBack = false;
  keepOpen = function () {
    return false;
  };
  get isBack() {
    return this._isBack;
  }
  setIsBack(e) {
    this._isBack = e;
  }
  onInitAnim() {
    this._flipAni || (this._flipAni = new Tile2FlipNodeStateAni(this._host.tileNode, this._host, this));
  }
  @mj.traitEvent("RollCrdComp_refreshNode")
  onRefreshNode() {
    var e, t;
    this._isBack = this._host.tileObject.getIsBack();
    if (this.keepOpen() || 0 == this._isBack) {
      null === (e = this._flipAni) || void 0 === e || e.forceEnter();
    } else {
      null === (t = this._flipAni) || void 0 === t || t.forceExit();
    }
  }
  getResNameOverride() {
    return this._isBack ? "gameplay_img_mj_dn" : null;
  }
  onShowPropHint() {}
  onHidePropHint() {}
  onPlaySelectAnimation() {
    var e;
    null === (e = this._flipAni) || void 0 === e || e.playAni();
  }
  onCancelSelectedAnimation() {
    var e,
      t = this._host.effectPropHint;
    this.keepOpen() || t && t.active || null === (e = this._flipAni) || void 0 === e || e.exitAni();
  }
  onClearCancelSelected() {
    var e, t;
    if (this._isBack) {
      null === (t = this._flipAni) || void 0 === t || t.playAni();
    } else {
      null === (e = this._flipAni) || void 0 === e || e.forceEnter();
    }
  }
  onStopAllAnimation() {
    var e;
    this.keepOpen() || null === (e = this._flipAni) || void 0 === e || e.forceExit();
  }
  onClear() {
    var e;
    this._isBack = false;
    null === (e = this._flipAni) || void 0 === e || e.forceEnter();
  }
  playReveal(e, t) {
    var o, n;
    if (e) {
      null === (o = this._flipAni) || void 0 === o || o.exitAniForce(void 0, t);
    } else {
      null === (n = this._flipAni) || void 0 === n || n.playAniForce(void 0, t);
    }
  }
  showFrontImmediately() {
    var e;
    this._isBack = false;
    null === (e = this._flipAni) || void 0 === e || e.forceEnter();
  }
  showBackImmediately() {
    var e;
    this._isBack = true;
    null === (e = this._flipAni) || void 0 === e || e.forceExit();
  }
  playRoll(e, t) {
    var o, n;
    if (e) {
      null === (o = this._flipAni) || void 0 === o || o.exitAni(void 0, t);
    } else {
      null === (n = this._flipAni) || void 0 === n || n.playAni(void 0, t);
    }
  }
  @mj.traitEvent("RollCrdComp_playFly")
  playFly() {}
}