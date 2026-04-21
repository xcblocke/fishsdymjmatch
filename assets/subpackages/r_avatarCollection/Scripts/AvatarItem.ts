import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSpine from '../../../Scripts/gamePlay/base/ui/BaseSpine';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { Key2Info, getBundleName } from './Utils';
@mj.class
export default class AvatarItem extends BaseUI {
  _yellowBg = null;
  _whiteBg = null;
  _rootNode = null;
  _progressNode = null;
  _progressLabel = null;
  _progressBar = null;
  _cardSpr = null;
  animTween = null;
  static prefabUrl = "prefabs/AvatarItem";
  static bundleName = getBundleName();
  onLoad() {
    super.onLoad.call(this);
    var e = this.node.getChildByName("bg");
    this._yellowBg = e.getChildByName("yellow");
    this._whiteBg = e.getChildByName("white");
    this._progressNode = e.getChildByName("progress");
    this._progressBar = this._progressNode.getComponent(cc.ProgressBar);
    this._progressLabel = this._progressNode.getChildByName("value").getComponent(cc.Label);
    this._cardSpr = e.getChildByName("cardHead").getComponent(cc.Sprite);
    this._rootNode = e;
    this.init();
  }
  init() {}
  updateUI(t) {
    var e = Key2Info(t.key);
    BaseSprite.refreshWithNode(this._cardSpr.node, e.path, e.fromAtlas, false, e.bundleName);
    this._progressLabel.string = t.curCount + "/" + t.maxCount;
    this._progressBar.progress = t.curCount / t.maxCount;
    this._progressNode.opacity = t.curCount == t.maxCount ? 0 : 255;
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
  playEffect() {
    var t = BaseSpine.create("spine/rank_progbar", "in_02", 1, null, true, getBundleName());
    t.node.parent = this._rootNode;
    t.node.position = cc.v3(0, 0, 0);
  }
  onDestroy() {
    super.onDestroy.call(this);
    this.stopAnim();
  }
}