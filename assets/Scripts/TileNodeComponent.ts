export class TileNodeComponent {
  _host = null;
  static _registry = new Map();
  static register(e, t) {
    this._registry.set(e, t);
  }
  static create(e) {
    var t, o;
    return null !== (o = null === (t = this._registry.get(e)) || void 0 === t ? void 0 : t()) && void 0 !== o ? o : null;
  }
  bind(e) {
    this._host = e;
    this.onBind();
  }
  unbind() {
    this.onUnbind();
    this._host = null;
  }
  onBind() {}
  onUnbind() {}
  onInitAnim() {}
  onRefreshNode() {}
  getResNameOverride() {
    return null;
  }
  onShowPropHint() {}
  onHidePropHint() {}
  onPlaySelectAnimation() {}
  onCancelSelectedAnimation() {}
  onClearCancelSelected() {}
  onStopAllAnimation() {}
  onClear() {}
  onDestroy() {}
  onUpdateImgCard() {
    return false;
  }
  onUpdateImgCardBg() {
    return false;
  }
  onUpdateShadowNode() {
    return false;
  }
  onUpdateLockBg() {
    return false;
  }
  onUpdateEffectSelected() {
    return false;
  }
  onShowSelectEffect() {
    return false;
  }
  onHideSelectEffect() {}
  onRealShowSelectEffect() {
    return false;
  }
}