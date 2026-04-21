
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/view/DailyRewardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74aa06vH9tILLI/H49YBP5p', 'DailyRewardView');
// subpackages/l_daily/Scripts/view/DailyRewardView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var DataReader_1 = require("../../../../Scripts/framework/data/DataReader");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var BadgeMode_1 = require("../../../../Scripts/gamePlay/badge/mode/BadgeMode");
var ConfigType_1 = require("../../../../Scripts/gamePlay/base/data/ConfigType");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var DailyModel_1 = require("../DailyModel");
var DailyTypes_1 = require("../DailyTypes");
var DailyRewardView = /** @class */ (function (_super) {
    __extends(DailyRewardView, _super);
    function DailyRewardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._txtName = null;
        _this._txtTime = null;
        _this._effReward = null;
        _this._imgReward = null;
        _this._btnPlay = null;
        _this._isClose = false;
        return _this;
    }
    DailyRewardView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvents();
    };
    DailyRewardView.prototype.registerEvents = function () {
        this.OnButtonClick(this._btnPlay.node, {
            func: this.onCloseView.bind(this),
            clickAudio: DailyTypes_1.EDailyAudioID.BadgeSite
        });
    };
    DailyRewardView.prototype.show = function (t, e) {
        if (e === void 0) { e = false; }
        var i, o, n = this;
        var a = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, t);
        if (a) {
            if (null === (i = this.delegate.args) || void 0 === i ? void 0 : i.isGetReward) {
                e = true;
                mj.audioManager.playEffect(DailyTypes_1.EDailyAudioID.BadgeTags);
            }
            this._txtName.string = I18NStrings_1.default.get(a.NameKey);
            var c = BadgeMode_1.default.getInstance().getBadge(t);
            if (c) {
                var _ = new Date(c.timestamp), m = _.getFullYear(), g = _.getMonth() + 1, D = _.getDate();
                this._txtTime.string = GameUtils_1.default.formatDateStringToLanguage(m + "-" + g + "-" + D, null, true, true) || "";
                DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.BadgeShow, "" + I18NStrings_1.default.getCN(a.NameKey));
            }
            else {
                var v = (null === (o = this.delegate.args) || void 0 === o ? void 0 : o.dailyId) || 0, w = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, v);
                if (e) {
                    DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.RewardGet, w.Year + "年" + w.Month + "月");
                }
                else {
                    DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.RewardShow, w.Year + "年" + w.Month + "月");
                }
            }
            if (e) {
                this._effReward.setAnimation(0, "in_badge", false);
                this.isAutoClose() && this.scheduleOnce(function () {
                    n.onCloseView();
                }, 3);
                cc.tween(this._imgReward.node).set({
                    scale: 0.3
                }).to(0.15, {
                    scale: 1
                }).start();
            }
            else
                this._effReward.setAnimation(0, "init_back", true);
            var C = DailyModel_1.default.getInstance().getItemIconUrl(t);
            BaseSprite_1.default.refreshWithNode(this._imgReward.node, C);
        }
        else
            this.delegate.close();
    };
    DailyRewardView.prototype.isAutoClose = function () {
        return true;
    };
    DailyRewardView.prototype.onCloseView = function () {
        if (!this._isClose) {
            this._isClose = true;
            this.delegate.close();
        }
    };
    DailyRewardView.prefabUrl = "prefabs/daily/DailyRewardView";
    __decorate([
        mj.component("txt_name", cc.Label)
    ], DailyRewardView.prototype, "_txtName", void 0);
    __decorate([
        mj.component("txt_time", cc.Label)
    ], DailyRewardView.prototype, "_txtTime", void 0);
    __decorate([
        mj.component("eff_reward", sp.Skeleton)
    ], DailyRewardView.prototype, "_effReward", void 0);
    __decorate([
        mj.component("img_reward", cc.Sprite)
    ], DailyRewardView.prototype, "_imgReward", void 0);
    __decorate([
        mj.component("btn_play", cc.Button)
    ], DailyRewardView.prototype, "_btnPlay", void 0);
    __decorate([
        mj.traitEvent("DailyRewardVv_autoClose")
    ], DailyRewardView.prototype, "isAutoClose", null);
    DailyRewardView = __decorate([
        mj.class
    ], DailyRewardView);
    return DailyRewardView;
}(UIView_1.default));
exports.default = DailyRewardView;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvdmlldy9EYWlseVJld2FyZFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtFQUEwRTtBQUMxRSw0RUFBMkU7QUFDM0UsOEVBQXlFO0FBQ3pFLGtFQUE2RDtBQUM3RCwrRUFBMEU7QUFDMUUsZ0ZBQStFO0FBQy9FLDhFQUF5RTtBQUN6RSx1RUFBeUY7QUFDekYsNENBQXVDO0FBQ3ZDLDRDQUE4QztBQUU5QztJQUE2QyxtQ0FBTTtJQUFuRDtRQUFBLHFFQTRFQztRQTFFQyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUVoQyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBQzVCLGNBQVEsR0FBRyxLQUFLLENBQUM7O0lBaUVuQixDQUFDO0lBL0RDLGdDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0Qsd0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDckMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQyxVQUFVLEVBQUUsMEJBQWEsQ0FBQyxTQUFTO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw4QkFBSSxHQUFKLFVBQUssQ0FBQyxFQUFFLENBQVM7UUFBVCxrQkFBQSxFQUFBLFNBQVM7UUFDZixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLHVCQUFVLENBQUMsUUFBUSxDQUFD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QVUsQ0FBQyx5QkFBeUIsQ0FBQztzREFHeEM7SUFyRWtCLGVBQWU7UUFEbkMsRUFBRSxDQUFDLEtBQUs7T0FDWSxlQUFlLENBNEVuQztJQUFELHNCQUFDO0NBNUVELEFBNEVDLENBNUU0QyxnQkFBTSxHQTRFbEQ7a0JBNUVvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0RhdGFSZWFkZXInO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IEJhZGdlTW9kZSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2JhZGdlL21vZGUvQmFkZ2VNb2RlJztcbmltcG9ydCB7IENvbmZpZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvZGF0YS9Db25maWdUeXBlJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRUJhZGdlQ2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgRGFpbHlNb2RlbCBmcm9tICcuLi9EYWlseU1vZGVsJztcbmltcG9ydCB7IEVEYWlseUF1ZGlvSUQgfSBmcm9tICcuLi9EYWlseVR5cGVzJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlSZXdhcmRWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgQG1qLmNvbXBvbmVudChcInR4dF9uYW1lXCIsIGNjLkxhYmVsKVxuICBfdHh0TmFtZTogXCJ0eHRfbmFtZVwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcInR4dF90aW1lXCIsIGNjLkxhYmVsKVxuICBfdHh0VGltZTogXCJ0eHRfdGltZVwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcImVmZl9yZXdhcmRcIiwgc3AuU2tlbGV0b24pXG4gIF9lZmZSZXdhcmQ6IFwiZWZmX3Jld2FyZFwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcImltZ19yZXdhcmRcIiwgY2MuU3ByaXRlKVxuICBfaW1nUmV3YXJkOiBcImltZ19yZXdhcmRcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJidG5fcGxheVwiLCBjYy5CdXR0b24pXG4gIF9idG5QbGF5OiBcImJ0bl9wbGF5XCIgPSBudWxsO1xuICBfaXNDbG9zZSA9IGZhbHNlO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2RhaWx5L0RhaWx5UmV3YXJkVmlld1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICB9XG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idG5QbGF5Lm5vZGUsIHtcbiAgICAgIGZ1bmM6IHRoaXMub25DbG9zZVZpZXcuYmluZCh0aGlzKSxcbiAgICAgIGNsaWNrQXVkaW86IEVEYWlseUF1ZGlvSUQuQmFkZ2VTaXRlXG4gICAgfSk7XG4gIH1cbiAgc2hvdyh0LCBlID0gZmFsc2UpIHtcbiAgICB2YXIgaSxcbiAgICAgIG8sXG4gICAgICBuID0gdGhpcztcbiAgICB2YXIgYSA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5pdGVtX2NvbmZpZywgdCk7XG4gICAgaWYgKGEpIHtcbiAgICAgIGlmIChudWxsID09PSAoaSA9IHRoaXMuZGVsZWdhdGUuYXJncykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5pc0dldFJld2FyZCkge1xuICAgICAgICBlID0gdHJ1ZTtcbiAgICAgICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRURhaWx5QXVkaW9JRC5CYWRnZVRhZ3MpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdHh0TmFtZS5zdHJpbmcgPSBJMThOU3RyaW5ncy5nZXQoYS5OYW1lS2V5KTtcbiAgICAgIHZhciBjID0gQmFkZ2VNb2RlLmdldEluc3RhbmNlKCkuZ2V0QmFkZ2UodCk7XG4gICAgICBpZiAoYykge1xuICAgICAgICB2YXIgXyA9IG5ldyBEYXRlKGMudGltZXN0YW1wKSxcbiAgICAgICAgICBtID0gXy5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIGcgPSBfLmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgIEQgPSBfLmdldERhdGUoKTtcbiAgICAgICAgdGhpcy5fdHh0VGltZS5zdHJpbmcgPSBHYW1lVXRpbHMuZm9ybWF0RGF0ZVN0cmluZ1RvTGFuZ3VhZ2UobSArIFwiLVwiICsgZyArIFwiLVwiICsgRCwgbnVsbCwgdHJ1ZSwgdHJ1ZSkgfHwgXCJcIjtcbiAgICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdEJhZGdlKEVCYWRnZUNsaWNrVHlwZS5CYWRnZVNob3csIFwiXCIgKyBJMThOU3RyaW5ncy5nZXRDTihhLk5hbWVLZXkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB2ID0gKG51bGwgPT09IChvID0gdGhpcy5kZWxlZ2F0ZS5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmRhaWx5SWQpIHx8IDAsXG4gICAgICAgICAgdyA9IERhdGFSZWFkZXIuZ2V0QnlLZXkoQ29uZmlnVHlwZS5kYWlseV9jaGFsbGVuZ2UsIHYpO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgIERvdEdhbWVCdG5DbGljay5kb3RCYWRnZShFQmFkZ2VDbGlja1R5cGUuUmV3YXJkR2V0LCB3LlllYXIgKyBcIuW5tFwiICsgdy5Nb250aCArIFwi5pyIXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIERvdEdhbWVCdG5DbGljay5kb3RCYWRnZShFQmFkZ2VDbGlja1R5cGUuUmV3YXJkU2hvdywgdy5ZZWFyICsgXCLlubRcIiArIHcuTW9udGggKyBcIuaciFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdGhpcy5fZWZmUmV3YXJkLnNldEFuaW1hdGlvbigwLCBcImluX2JhZGdlXCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5pc0F1dG9DbG9zZSgpICYmIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBuLm9uQ2xvc2VWaWV3KCk7XG4gICAgICAgIH0sIDMpO1xuICAgICAgICBjYy50d2Vlbih0aGlzLl9pbWdSZXdhcmQubm9kZSkuc2V0KHtcbiAgICAgICAgICBzY2FsZTogMC4zXG4gICAgICAgIH0pLnRvKDAuMTUsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgfSBlbHNlIHRoaXMuX2VmZlJld2FyZC5zZXRBbmltYXRpb24oMCwgXCJpbml0X2JhY2tcIiwgdHJ1ZSk7XG4gICAgICB2YXIgQyA9IERhaWx5TW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRJdGVtSWNvblVybCh0KTtcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2ltZ1Jld2FyZC5ub2RlLCBDKTtcbiAgICB9IGVsc2UgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRGFpbHlSZXdhcmRWdl9hdXRvQ2xvc2VcIilcbiAgaXNBdXRvQ2xvc2UoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgb25DbG9zZVZpZXcoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0Nsb3NlKSB7XG4gICAgICB0aGlzLl9pc0Nsb3NlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn0iXX0=