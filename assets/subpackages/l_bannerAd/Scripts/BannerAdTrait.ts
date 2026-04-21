import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import AdManager from '../../../Scripts/base/ad/AdManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("BannerAdTrait")
export default class BannerAdTrait extends Trait {
  isInGamePlaying = false;
  _isNewVersion = false;
  _isInBoard = false;
  _hideBannerCount = 0;
  static traitKey = "BannerAd";
  onLoad() {
    var t, n;
    super.onLoad.call(this);
    this._isNewVersion = null !== (n = null === (t = this._traitData) || void 0 === t ? void 0 : t.isNewVersion) && void 0 !== n && n;
    this._isNewVersion;
  }
  onMainGameCtrl_vwLoad(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) {
        this._isInBoard = true;
        AdManager.getInstance().showBanner();
      } else {
        this.isInGamePlaying = true;
        AdManager.getInstance().showBanner();
      }
      t();
    } else t();
  }
  onMainGameCtrl_uiDes(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) {
        this._isInBoard = false;
        this._hideBannerCount > 0 && (this._hideBannerCount = 0);
      } else this.isInGamePlaying = false;
      AdManager.getInstance().hideBanner();
      t();
    } else t();
  }
  onWinVw_showWinVw(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        this.isInGamePlaying = false;
        AdManager.getInstance().hideBanner();
        t();
      }
    } else t();
  }
  onWinVw_destroy(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        this.isInGamePlaying = true;
        AdManager.getInstance().showBanner();
        t();
      }
    } else t();
  }
  onFailVw_show(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        this.isInGamePlaying = false;
        AdManager.getInstance().hideBanner();
        t();
      }
    } else t();
  }
  onFailVw_destroy(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        this.isInGamePlaying = true;
        AdManager.getInstance().showBanner();
        t();
      }
    } else t();
  }
  onTLWinVw_showTLWinVw(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        this.isInGamePlaying = false;
        AdManager.getInstance().hideBanner();
        t();
      }
    } else t();
  }
  onTLWinVw_destroy(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        this.isInGamePlaying = true;
        AdManager.getInstance().showBanner();
        t();
      }
    } else t();
  }
  onDCWinVw_showWinVw(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        this.isInGamePlaying = false;
        AdManager.getInstance().hideBanner();
        t();
      }
    } else t();
  }
  onDailyView_onPlayClick(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        this.isInGamePlaying = true;
        AdManager.getInstance().showBanner();
        t();
      }
    } else t();
  }
  onRankBonusVw_show(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        AdManager.getInstance().hideBanner();
        t();
      }
    } else t();
  }
  onRankBonusVw_destroy(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        AdManager.getInstance().showBanner();
        t();
      }
    } else t();
  }
  onTaskView_initUI(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        AdManager.getInstance().hideBanner();
        t();
      }
    } else t();
  }
  onTaskView_onDestroy(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) t();else {
        this.isInGamePlaying && AdManager.getInstance().showBanner();
        t();
      }
    } else t();
  }
  onBannerAd_NeedHideBanner(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) {
        if (this._isInBoard) {
          this._hideBannerCount++;
          AdManager.getInstance().hideBanner();
          t();
        } else t();
      } else t();
    } else t();
  }
  onBannerAd_NeedShowBanner(e, t) {
    var n = this;
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._isNewVersion) {
        if (this._isInBoard) {
          this._hideBannerCount > 0 && this._hideBannerCount--;
          0 === this._hideBannerCount && this._isInBoard && setTimeout(function () {
            0 === n._hideBannerCount && n._isInBoard && AdManager.getInstance().showBanner();
          }, 500);
          t();
        } else t();
      } else t();
    } else t();
  }
}