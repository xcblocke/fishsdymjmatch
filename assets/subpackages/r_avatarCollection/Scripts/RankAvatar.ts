import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import { getBundleName } from './Utils';
import ControllerManager from '../../../Scripts/framework/manager/ControllerManager';
@mj.class
export default class RankAvatar extends BaseUI {
  _rootNode = null;
  _progressNode = null;
  _progressLabel = null;
  _progressBar = null;
  _cardSpr = null;
  animTween = null;
  static prefabUrl = "prefabs/RankAvatar";
  static bundleName = getBundleName();
  onLoad() {
    super.onLoad.call(this);
    this.registerEvents();
    var e = this.node.getChildByName("bg");
    this._progressNode = e.getChildByName("progress");
    this._progressBar = this._progressNode.getComponent(cc.ProgressBar);
    this._progressLabel = this._progressNode.getChildByName("value").getComponent(cc.Label);
    this._cardSpr = e.getChildByName("cardBg").getChildByName("card").getComponent(cc.Sprite);
    this._rootNode = e;
  }
  registerEvents() {
    this.OnButtonClick(this.node, this.onClickRankAvatar.bind(this));
  }
  updateUI(t, e) {
    BaseSprite.refreshWithNode(this._cardSpr.node, t.path, t.fromAtlas, false, t.bundleName);
    this._progressLabel.string = e.curCount + "/" + e.maxCount;
    this._progressBar.progress = e.curCount / e.maxCount;
    this._progressNode.opacity = e.curCount == e.maxCount ? 0 : 255;
  }
  playFinishAnim(t) {
    var e = this;
    this.stopAnim();
    this._progressNode.opacity = 255;
    var a = t.curCount,
      r = a - 2;
    this._progressLabel.string = r + "/" + a;
    this._progressBar.progress = r / a;
    var n = {
      value: r
    };
    this.animTween = cc.tween(n).to(0.34, {
      value: a
    }, {
      progress: function (a, r, n, o) {
        if (cc.isValid(e._progressLabel) && cc.isValid(e._progressBar)) {
          var i = a + (r - a) * o;
          e._progressLabel.string = Math.floor(i) + "/" + t.maxCount;
          e._progressBar.progress = i / t.maxCount;
        }
      }
    }).call(function () {
      e.playEffect();
      e.playCardScale();
      e.playProgressFadeout();
      e.stopAnim();
    }).start();
  }
  stopAnim() {
    if (this.animTween) {
      this.animTween.stop();
      this.animTween = null;
    }
  }
  playProgressFadeout() {
    cc.tween(this._progressNode).to(0.1, {
      opacity: 0
    }).start();
  }
  playCardScale() {
    cc.tween(this._cardSpr.node).to(0.1, {
      scale: 1.12
    }).to(0.07, {
      scale: 1.08
    }).to(0.16, {
      scale: 1.1
    }).start();
  }
  playEffect() {
    var t = BaseSpine.create("spine/rank_progbar", "in_03", 1, null, true, getBundleName());
    t.node.parent = this._rootNode;
    t.node.position = cc.v3(0, 0, 0);
  }
  onClickRankAvatar() {
    ControllerManager.getInstance().pushViewByController("UserInfoController");
  }
  onDestroy() {
    super.onDestroy.call(this);
    this.stopAnim();
  }
}