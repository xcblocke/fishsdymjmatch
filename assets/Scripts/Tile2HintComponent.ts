import { HintNodeStateAni } from './fsm/ani/HintNodeStateAni';
import { TileNodeComponent } from './TileNodeComponent';
export class Tile2HintComponent extends TileNodeComponent {
  onInitAnim() {
    this._hintAni = new HintNodeStateAni(this._host.tileNode, this._host);
    this._shadowHintAni = new HintNodeStateAni(this._host.shadowNode, this._host);
  }
  onShowPropHint() {
    var e, t;
    null === (e = this._hintAni) || void 0 === e || e.playAni();
    null === (t = this._shadowHintAni) || void 0 === t || t.playAni();
  }
  onHidePropHint() {
    var e, t;
    null === (e = this._hintAni) || void 0 === e || e.exitAni();
    null === (t = this._shadowHintAni) || void 0 === t || t.exitAni();
  }
  onPlaySelectAnimation() {
    var e, t;
    null === (e = this._hintAni) || void 0 === e || e.pauseShake();
    null === (t = this._shadowHintAni) || void 0 === t || t.pauseShake();
  }
  onCancelSelectedAnimation() {
    var e, t;
    null === (e = this._hintAni) || void 0 === e || e.resumeShake();
    null === (t = this._shadowHintAni) || void 0 === t || t.resumeShake();
  }
  onStopAllAnimation() {
    var e, t;
    null === (e = this._hintAni) || void 0 === e || e.forceExit();
    null === (t = this._shadowHintAni) || void 0 === t || t.forceExit();
  }
  playHintAnimation(e, t) {
    var o, n;
    null === (o = this._hintAni) || void 0 === o || o.playAni(e, t);
    null === (n = this._shadowHintAni) || void 0 === n || n.playAni(e);
  }
  exitHintAnimation() {
    var e, t;
    null === (e = this._hintAni) || void 0 === e || e.exitAni();
    null === (t = this._shadowHintAni) || void 0 === t || t.exitAni();
  }
  pauseHintShake() {
    var e, t;
    null === (e = this._hintAni) || void 0 === e || e.pauseShake();
    null === (t = this._shadowHintAni) || void 0 === t || t.pauseShake();
  }
  resumeHintShake() {
    var e, t;
    null === (e = this._hintAni) || void 0 === e || e.resumeShake();
    null === (t = this._shadowHintAni) || void 0 === t || t.resumeShake();
  }
}