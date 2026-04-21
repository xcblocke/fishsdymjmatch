import BaseUI from '../../../Scripts/framework/ui/BaseUI';
import BaseSprite from '../../../Scripts/gamePlay/base/ui/BaseSprite';
import { Key2Info, getBundleName } from './Utils';
@mj.class
export default class AvatarIcon extends BaseUI {
  _yellowBg = null;
  _whiteBg = null;
  _rootNode = null;
  _cardSpr = null;
  static prefabUrl = "prefabs/AvatarIcon";
  static bundleName = getBundleName();
  get cardSpr() {
    null == this._cardSpr && (this._cardSpr = this.node.getChildByName("bg").getChildByName("cardHead").getComponent(cc.Sprite));
    return this._cardSpr;
  }
  onLoad() {
    super.onLoad.call(this);
    var e = this.node.getChildByName("bg");
    this._yellowBg = e.getChildByName("yellow");
    this._whiteBg = e.getChildByName("white");
    this._cardSpr = e.getChildByName("cardHead").getComponent(cc.Sprite);
    this._rootNode = e;
    this.init();
  }
  init() {}
  updateUI(t) {
    var e = Key2Info(t.key);
    BaseSprite.refreshWithNode(this.cardSpr.node, e.path, e.fromAtlas, false, e.bundleName);
  }
  onDestroy() {
    super.onDestroy.call(this);
  }
}