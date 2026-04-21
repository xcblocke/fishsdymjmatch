"use strict";
cc._RF.push(module, 'f76055YQHBKHbZ9+nqpuLUe', 'HallNoCdTimeTrait');
// subpackages/l_hallNoCdTime/Scripts/HallNoCdTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HallNoCdTimeTrait = /** @class */ (function (_super) {
    __extends(HallNoCdTimeTrait, _super);
    function HallNoCdTimeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pausedRemainingCD = 0;
        return _this;
    }
    HallNoCdTimeTrait.prototype.onAdMgr_interAdClose = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this._pausedRemainingCD = 0;
            t();
        }
        else
            t();
    };
    HallNoCdTimeTrait.prototype.recordRemainingCD = function () {
        if (!(this._pausedRemainingCD > 0)) {
            var e = mj.getClassByName("InterAdCDTrait");
            if (e) {
                var t = e.getInstance();
                t && t.getRemainingCD && (this._pausedRemainingCD = t.getRemainingCD());
            }
        }
    };
    HallNoCdTimeTrait.prototype.onMainGameCtrl_uiDes = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.recordRemainingCD("退出游戏");
            t();
        }
        else
            t();
    };
    HallNoCdTimeTrait.prototype.onHallCtl_viewDidShow = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            this.recordRemainingCD("进入大厅");
            t();
        }
        else
            t();
    };
    HallNoCdTimeTrait.prototype.onMainGameCtrl_vwLoad = function (e, t) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            if (this._pausedRemainingCD > 0) {
                var r = mj.getClassByName("InterAdCDTrait");
                if (r) {
                    var i = r.getInstance();
                    if (i && i.adjustLastPlayTime && i.getCDTime) {
                        var n = i.getCDTime(), a = Date.now() - (n - this._pausedRemainingCD);
                        i.adjustLastPlayTime(a);
                    }
                }
                this._pausedRemainingCD = 0;
            }
            t();
        }
        else
            t();
    };
    HallNoCdTimeTrait.traitKey = "HallNoCdTime";
    HallNoCdTimeTrait = __decorate([
        mj.trait,
        mj.class("HallNoCdTimeTrait")
    ], HallNoCdTimeTrait);
    return HallNoCdTimeTrait;
}(Trait_1.default));
exports.default = HallNoCdTimeTrait;

cc._RF.pop();