import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import Trait from '../../../Scripts/framework/trait/Trait';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
@mj.trait
@mj.class("HallNoCdTimeTrait")
export default class HallNoCdTimeTrait extends Trait {
  _pausedRemainingCD = 0;
  static traitKey = "HallNoCdTime";
  onAdMgr_interAdClose(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this._pausedRemainingCD = 0;
      t();
    } else t();
  }
  recordRemainingCD() {
    if (!(this._pausedRemainingCD > 0)) {
      var e = mj.getClassByName("InterAdCDTrait");
      if (e) {
        var t = e.getInstance();
        t && t.getRemainingCD && (this._pausedRemainingCD = t.getRemainingCD());
      }
    }
  }
  onMainGameCtrl_uiDes(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.recordRemainingCD("退出游戏");
      t();
    } else t();
  }
  onHallCtl_viewDidShow(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      this.recordRemainingCD("进入大厅");
      t();
    } else t();
  }
  onMainGameCtrl_vwLoad(e, t) {
    if (UserModel.getInstance().getCurrentGameType() !== MjGameType.Classic) {
      if (this._pausedRemainingCD > 0) {
        var r = mj.getClassByName("InterAdCDTrait");
        if (r) {
          var i = r.getInstance();
          if (i && i.adjustLastPlayTime && i.getCDTime) {
            var n = i.getCDTime(),
              a = Date.now() - (n - this._pausedRemainingCD);
            i.adjustLastPlayTime(a);
          }
        }
        this._pausedRemainingCD = 0;
      }
      t();
    } else t();
  }
}