"use strict";
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