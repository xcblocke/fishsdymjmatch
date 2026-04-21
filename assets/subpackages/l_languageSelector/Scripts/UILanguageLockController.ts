import ViewController, { viewMode } from '../../../Scripts/framework/controller/ViewController';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { DotChangeBaseSkin } from '../../../Scripts/gamePlay/dot/DChangeBaseSkin';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import { UILanguageLockView } from './UILanguageLockView';
var d = {
  l_lanCardRU: "t5",
  l_lanCardES: "b1",
  l_lanCardFR: "W2",
  l_lanCardJP: "W2",
  l_lanCardKO: "W2",
  l_lanCardPT: "t4",
  l_lanCardDE: "b6",
  l_lanCardCN: "W9",
  l_lanCardTW: "W9",
  l_lanCardEN: "H_zhu"
};
var p = {
  en: "EN",
  "zh-cn": "CN",
  "zh-tw": "TW",
  "zh-hk": "TW",
  ko: "KO",
  ja: "JP",
  ru: "RU",
  es: "ES",
  pt: "PT",
  de: "DE",
  fr: "FR"
};
@mj.class("UILanguageLockController")
export default class UILanguageLockController extends ViewController {
  viewClass = UILanguageLockView;
  viewMode = viewMode.ALERT;
  bundleName = "r_changeBaseCardByLan";
  _skinBundleName = null;
  viewDidLoad() {
    var e;
    super.viewDidLoad.call(this);
    var o = (null === (e = this.args) || void 0 === e ? void 0 : e.code) || "en";
    this._skinBundleName = "l_lanCard" + p[o];
    var n = d[this._skinBundleName];
    n && this._skinBundleName && this.viewDoAction("setCard", n, this._skinBundleName);
    DotChangeBaseSkin.dotPopupView(this._skinBundleName);
  }
  onUIDestroy() {
    super.onUIDestroy.call(this);
  }
  playAd() {
    var t = this,
      e = EAdPosition.OpenSkinByLanguageAd;
    DotChangeBaseSkin.dotPopupClick(this._skinBundleName);
    DotGameAdShowStage.dot(false, "clickAdLock");
    AdManager.getInstance().checkVideoAdIsReady() && cc.isValid(this.rootView) && (this.rootView.opacity = 0);
    AdManager.getInstance().playVideoAd(e, {
      onSuccess: function () {
        t.onAdSuccess();
      },
      onFailed: function (e) {
        t.onAdFailed(e);
      }
    });
  }
  onAdSuccess() {
    var t, e, o;
    if (this._skinBundleName) {
      var n = mj.getClassByName("ChangeBaseCardByLanTrait"),
        a = null === (t = null == n ? void 0 : n.getInstance) || void 0 === t ? void 0 : t.call(n);
      null == a || a.unlockSkin(this._skinBundleName);
      DotChangeBaseSkin.dotSkinUnlockSuccess(this._skinBundleName);
    }
    cc.isValid(this.rootView) && this.close();
    null === (o = null === (e = this.args) || void 0 === e ? void 0 : e.onSuccess) || void 0 === o || o.call(e);
  }
  onAdFailed(t) {
    if (this.rootView && cc.isValid(this.rootView)) if (t) {
      this.rootView.opacity = 255;
      this.viewDoAction("onFail");
    } else this.close();
  }
}