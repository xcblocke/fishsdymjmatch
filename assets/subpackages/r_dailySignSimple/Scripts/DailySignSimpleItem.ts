import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import { playSpineAnim } from '../../../Scripts/framework/utils/CommonUtils';
import DailySignSimpleModel, { DailySignSimpleState } from './DailySignSimpleModel';
@mj.class
export default class DailySignSimpleItem extends BaseUI {
  _nodeUncompleted = null;
  _nodeReady = null;
  _nodeClaimed = null;
  _nodeClaimedAni = null;
  _box = null;
  _btn = null;
  _index = 0;
  _model = null;
  _dayData = null;
  _currentState = DailySignSimpleState.Uncompleted;
  onClaimCallback = null;
  onBoxClickCallback = null;
  static prefabUrl = "prefabs/DailySignSimpleItem";
  static bundleName = "r_dailySignSimple";
  onLoad() {
    super.onLoad.call(this);
    this._model = DailySignSimpleModel.getInstance();
    this._nodeClaimed = this.node.getChildByName("node_getted");
    this._nodeClaimedAni = this._nodeClaimed.getChildByName("spine");
    this._nodeReady = this.node.getChildByName("node_isReady");
    this._nodeUncompleted = this.node.getChildByName("node_uncompletted");
    this._box = this.node.getChildByName("box");
    this._btn = this.node.getChildByName("btn");
    this.registerBoxClick();
  }
  registerBoxClick() {
    this._btn && this.OnButtonClick(this._btn, this.onBoxClick.bind(this));
  }
  onBoxClick() {
    if (this._currentState != DailySignSimpleState.Claimed) {
      var t = this._box.convertToWorldSpaceAR(cc.Vec2.ZERO),
        e = cc.v3(t.x, t.y, 0);
      this.onBoxClickCallback && this.onBoxClickCallback(this._index, e);
    }
  }
  setState(t) {
    var e = this._currentState;
    this._currentState = t;
    this._nodeUncompleted && (this._nodeUncompleted.active = t === DailySignSimpleState.Uncompleted);
    this._nodeReady && (this._nodeReady.active = t === DailySignSimpleState.Ready);
    this._nodeClaimed && (this._nodeClaimed.active = t === DailySignSimpleState.Claimed);
    var i = this._box.getComponent(sp.Skeleton);
    if (i) if (t === DailySignSimpleState.Uncompleted) playSpineAnim(i, 1, this._index + 1 + "_init_1", null, false);else if (t === DailySignSimpleState.Ready) ;else if (t === DailySignSimpleState.Claimed) {
      playSpineAnim(i, 1, this._index + 1 + "_init_2", null, false);
      if (e == DailySignSimpleState.Ready) {
        playSpineAnim(this._nodeClaimedAni.getComponent(sp.Skeleton), 1, "in", null, false);
      } else {
        playSpineAnim(this._nodeClaimedAni.getComponent(sp.Skeleton), 1, "init", null, false);
      }
    }
  }
  setIndex(t) {
    this._index = t;
    this._model && (this._dayData = this._model.getDay(t));
    this._nodeReady && (e = this._nodeReady.getChildByName("txt")) && (e.getComponent(cc.Label).string = (t + 1).toString());
    if (this._nodeUncompleted) {
      var e;
      (e = this._nodeUncompleted.getChildByName("txt")) && (e.getComponent(cc.Label).string = (t + 1).toString());
    }
  }
  refresh() {
    if (this._model) {
      this._dayData = this._model.getDay(this._index);
      var t = this._model.getDayState(this._index);
      this.setState(t);
    }
  }
  getIndex() {
    return this._index;
  }
  getDayData() {
    return this._dayData;
  }
  canClaim() {
    return !!this._model && this._model.getDayState(this._index) === DailySignSimpleState.Ready;
  }
  playReadyAnimation() {
    var t,
      e = this;
    if (this._model && this._dayData && this._model.getDayState(this._index) === DailySignSimpleState.Ready) {
      var i = null === (t = this._box) || void 0 === t ? void 0 : t.getComponent(sp.Skeleton);
      if (i) {
        playSpineAnim(i, 1, this._index + 1 + "_in", function () {}, false);
        this.scheduleOnce(function () {
          e.onClaimCallback && e.onClaimCallback(e._index);
        }, 0.8);
      }
    }
  }
}