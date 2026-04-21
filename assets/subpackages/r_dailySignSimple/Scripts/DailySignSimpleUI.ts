import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import DailySignSimpleItem from './DailySignSimpleItem';
import DailySignSimpleModel, { DailySignSimpleState } from './DailySignSimpleModel';
import DailySignTipView from './DailySignTipView';
@mj.class
export default class DailySignSimpleUI extends BaseUI {
  _items = [];
  _model = null;
  _itemsCreated = 0;
  onClaimReward = null;
  _dailySignTipNode = null;
  static prefabUrl = "prefabs/DailySignSimple";
  static bundleName = "r_dailySignSimple";
  onLoad() {
    super.onLoad.call(this);
    this._model = DailySignSimpleModel.getInstance();
    this.createItems();
  }
  createItems() {
    for (var t = this, e = [new cc.Vec3(-390, -3, 0), new cc.Vec3(-260, -3, 0), new cc.Vec3(-132, -3, 0), new cc.Vec3(0, -3, 0), new cc.Vec3(132, -3, 0), new cc.Vec3(258, -3, 0), new cc.Vec3(390, -3, 0)], i = function i(i) {
        var o = i;
        DailySignSimpleItem.createUI().then(function (i) {
          if (i && cc.isValid(t.node)) {
            i.parent = t.node;
            i.position = e[o];
            var n = i.getComponent(DailySignSimpleItem);
            t._items[o] = n;
            n.setIndex(o);
            n.onClaimCallback = t.onItemClaimCallback.bind(t);
            n.onBoxClickCallback = t.onBoxClickCallback.bind(t);
            t._itemsCreated++;
            if (7 === t._itemsCreated) {
              t.refreshAllItems();
              t.scheduleOnce(function () {
                t.updateProgressBar(null);
              }, 0);
            }
          }
        });
      }, o = 0; o < 7; o++) i(o);
  }
  onItemClaimCallback(t) {
    if (this._model && this._model.claimToday()) {
      var e = this._model.getRewardForDay(t);
      this.onClaimReward && this.onClaimReward(t, e);
    }
  }
  refreshAllItems() {
    if (this._model) for (var t = 0; t < 7; t++) {
      var e = this._items[t];
      e && cc.isValid(e.node) && e.refresh();
    }
  }
  refreshItem(t) {
    if (!(t < 0 || t >= 7)) {
      var e = this._items[t];
      e && cc.isValid(e.node) && e.refresh();
    }
  }
  getProgress() {
    return this._model ? this._model.getCurrentProgress() + "/7" : "0/7";
  }
  updateProgressBar(t = null, e = 0.166) {
    var i,
      o = this;
    if (this._model && this.node && cc.isValid(this.node)) {
      var n = null === (i = cc.find("contentNode/progressBar", this.node)) || void 0 === i ? void 0 : i.getComponent(cc.ProgressBar);
      if (n) {
        var a = 0.03 + (this._model.getCurrentProgress() - 1) / 6,
          r = a > 1 ? 1 : a;
        if (null !== t ? t : this._model.hasNewProgress()) {
          var s = 0.03 + ((this._model.localData.lastShownProgress || 0) - 1) / 6,
            l = s < 0 ? 0 : s > 1 ? 1 : s;
          n.progress = l;
          cc.tween(n).to(e, {
            progress: r
          }, {
            easing: "sineOut"
          }).call(function () {
            o.playTodayReadyAnimation();
            o._model.markProgressShown();
          }).start();
        } else {
          n.progress = r;
          this._model.markProgressShown();
          this.playTodayReadyAnimation();
        }
      }
    }
  }
  playTodayReadyAnimation() {
    if (this._model) for (var t = 0; t < 7; t++) {
      var e = this._items[t];
      if (e && cc.isValid(e.node) && this._model.getDayState(t) === DailySignSimpleState.Ready) {
        e.playReadyAnimation();
        break;
      }
    }
  }
  onBoxClickCallback(t, e) {
    var i = this._model.getRewardForDay(t);
    this.showDailySignTip(e, i, t);
  }
  showDailySignTip(t, e) {
    var i = this;
    this.removeDailySignTip();
    DailySignTipView.createUI().then(function (o) {
      if (cc.isValid(i.node)) {
        var n = i.node.parent;
        if (n && cc.isValid(n)) {
          var a = n.convertToNodeSpaceAR(t);
          o.parent = n;
          o.setPosition(a.x, a.y + 70);
          var r = o.getComponent(DailySignTipView);
          r.initReward(e);
          r.playIn();
          r.onClickCallback = function () {
            i.removeDailySignTip();
          };
          i._dailySignTipNode = o;
        }
      }
    }).catch(function () {});
  }
  removeDailySignTip() {
    cc.isValid(this._dailySignTipNode) && this._dailySignTipNode.destroy();
    this._dailySignTipNode = null;
  }
  showTipForDay(t) {
    if (!(t < 0 || t >= 7)) {
      var e = this._items[t];
      if (e && cc.isValid(e.node)) {
        var i = e.node.getChildByName("box");
        if (i) {
          var o = i.convertToWorldSpaceAR(cc.Vec2.ZERO),
            n = cc.v3(o.x, o.y, 0),
            a = this._model.getRewardForDay(t);
          this.showDailySignTip(n, a, t);
        }
      }
    }
  }
  onDestroy() {
    this.removeDailySignTip();
    super.onDestroy.call(this);
  }
}