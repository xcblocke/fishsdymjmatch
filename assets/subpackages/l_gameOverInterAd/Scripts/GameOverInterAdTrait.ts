import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
import AdManager from '../../../Scripts/base/ad/AdManager';
import { EAdPosition } from '../../../Scripts/gamePlay/dot/DGameAdShow';
import { DotGameAdShowStage } from '../../../Scripts/gamePlay/dot/DGameAdShowStage';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("GameOverInterAdTrait")
export default class GameOverInterAdTrait extends Trait {
  static traitKey = "GameOverInterAd";
  static nextTimeOut = 900;
  onLoad() {
    super.onLoad.call(this);
  }
  playInterAd(t, e, r, n) {
    DotGameAdShowStage.dot(true, "clickAdLock");
    AdManager.getInstance().playInterAd(e, {
      onSuccess: function () {
        r && r();
      },
      onFailed: function () {
        n && n();
      }
    }, t, {
      adTimeType: "afterInterAd"
    });
  }
  onWinVw_playBtnAni(t, e) {
    UserModel.getInstance().getCurrentGameType(), MjGameType.Classic, e();
  }
  onWinCtrl_viewShow(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this.isBlockInterAdShow()) {
        e();
      } else {
        this.playInterAd("result_show", EAdPosition.RearInsertScreen_Success, function () {
          e();
        }, function () {
          e();
        });
      }
    } else {
      e();
    }
  }
  onTLWinCtrl_viewShow(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this.isBlockInterAdShow()) {
        e();
      } else {
        this.playInterAd("result_show", EAdPosition.RearInsertScreen_TravelSuccess, function () {
          e();
        }, function () {
          e();
        });
      }
    } else {
      e();
    }
  }
  onDCWinCtrl_viewShow(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this.isBlockInterAdShow()) {
        e();
      } else {
        this.playInterAd("result_show", EAdPosition.RearInsertScreen_DcSuccess, function () {
          e();
        }, function () {
          e();
        });
      }
    } else {
      e();
    }
  }
  onTile2WinCtrl_viewShow(t, e) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this.isBlockInterAdShow()) {
        e();
      } else {
        this.playInterAd("result_show", EAdPosition.RearInsertScreen_Tile2Success, function () {
          e();
        }, function () {
          e();
        });
      }
    } else {
      e();
    }
  }
  @mj.traitEvent("GOInterAd_isBlocked")
  isBlockInterAdShow() {
    return GameUtils.isRatingDialogReady();
  }
}