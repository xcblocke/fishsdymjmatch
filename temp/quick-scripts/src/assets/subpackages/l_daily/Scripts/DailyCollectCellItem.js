"use strict";
cc._RF.push(module, '5d6438ECNJAWp3zykvTO2mQ', 'DailyCollectCellItem');
// subpackages/l_daily/Scripts/DailyCollectCellItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var BaseCell_1 = require("../../../Scripts/base/ui/BaseCell");
var DailyTypes_1 = require("./DailyTypes");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BadgeMode_1 = require("../../../Scripts/gamePlay/badge/mode/BadgeMode");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DailyModel_1 = require("./DailyModel");
var DailyCollectCellItem = /** @class */ (function (_super) {
    __extends(DailyCollectCellItem, _super);
    function DailyCollectCellItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._txtTime = null;
        _this._startCellHeight = 660;
        _this._firstCellHeight = 500;
        _this._cellHeight = 400;
        _this._itemNodes = [];
        return _this;
    }
    DailyCollectCellItem.prototype.uiOnLoad = function () {
        var t, e, i, o, n, a, l = this;
        this._txtTime = null === (t = cc.find("txt_time", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        for (var r = function r(t) {
            var r = cc.find("items/item_" + t, s._cellUI);
            if (!r)
                return "continue";
            s._itemNodes[t] = {
                container: r,
                imgBg: null === (e = cc.find("img_bg", r)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite),
                imgItem: null === (i = cc.find("img_item", r)) || void 0 === i ? void 0 : i.getComponent(cc.Sprite),
                imgGrayItem: null === (o = cc.find("img_grayItem", r)) || void 0 === o ? void 0 : o.getComponent(cc.Sprite),
                txtDay: null === (n = cc.find("img_bg/txt_day", r)) || void 0 === n ? void 0 : n.getComponent(cc.Label),
                effItemLight: null === (a = cc.find("eff_itemLight", r)) || void 0 === a ? void 0 : a.getComponent(sp.Skeleton),
                btnNode: cc.find("btn_item", r)
            };
            s._itemNodes[t].btnNode && s.OnButtonClick(s._itemNodes[t].btnNode, {
                func: function () {
                    return l.onItemClick(t);
                },
                clickAudio: DailyTypes_1.EDailyAudioID.DailyDay
            });
        }, s = this, d = 0; d < 3; d++)
            r(d);
        this.initCellSize();
    };
    DailyCollectCellItem.prototype.initCellSize = function () {
        this._cellHeight = 450;
        this._startCellHeight = 660;
        this._firstCellHeight = 500;
    };
    DailyCollectCellItem.prototype.updateUI = function () {
        if (this._data && this._data.items) {
            if ((this._data.first || this._data.start) && this._data.items[0]) {
                var t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, this._data.items[0].id);
                t && (this._txtTime.string = t.Year.toString());
            }
            else
                this._txtTime.string = "";
            this._cellUI.active = !this._data.empty;
            this.widgetUI();
            for (var e = 0; e < 3; e++) {
                var i = this._data.items[e], o = this._itemNodes[e];
                if (o)
                    if (i) {
                        o.container.active = true;
                        i.monthTxt && I18NStrings_1.default.setText(o.txtDay.node, i.monthTxt[0], i.monthTxt[1]);
                        o.imgItem.node.active = i.status === DailyTypes_1.DailyStatus.Completed;
                        o.imgGrayItem.node.active = i.status != DailyTypes_1.DailyStatus.Completed;
                        o.effItemLight.node.active = i.status === DailyTypes_1.DailyStatus.Completed;
                        var n = 2000 * Math.random() + 200;
                        this.playEffItemLight(o, n);
                        if (i.status === DailyTypes_1.DailyStatus.Completed) {
                            this.loadCollectIcon(o.imgItem, i.rewardItemId, true);
                        }
                        else {
                            this.loadCollectIcon(o.imgGrayItem, i.rewardItemId, false);
                        }
                    }
                    else
                        o.container.active = false;
            }
        }
    };
    DailyCollectCellItem.prototype.playEffItemLight = function (t, e) {
        setTimeout(function () {
            t && cc.isValid(t.effItemLight) && t.effItemLight.node.active && CommonUtils_1.playSpineAnim(t.effItemLight, -1, "init");
        }, e);
    };
    DailyCollectCellItem.prototype.widgetUI = function () {
        if (this._data.start) {
            this._cellUI.height = this._startCellHeight;
            this.node.height = this._startCellHeight;
        }
        else if (this._data.first) {
            this._cellUI.height = this._firstCellHeight;
            this.node.height = this._firstCellHeight;
        }
        else {
            this._cellUI.height = this._cellHeight;
            this.node.height = this._cellHeight;
        }
    };
    DailyCollectCellItem.prototype.loadCollectIcon = function (t, e, i) {
        if (DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e)) {
            var o = DailyModel_1.default.getInstance().getItemIconUrl(e), n = i ? o : o + "_gray";
            BaseSprite_1.default.refreshWithNode(t.node, n);
        }
    };
    DailyCollectCellItem.prototype.onItemClick = function (t) {
        if (this._data && this._data.items && this._data.items[t]) {
            var e = this._data.items[t], i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.daily_challenge, e.id);
            if (e.status === DailyTypes_1.DailyStatus.Completed || this._data.type != BadgeMode_1.BadgeType.Daily) {
                DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.RewardHas, i.Year + "年" + i.Month + "月");
                ControllerManager_1.default.getInstance().pushViewByController("DailyRewardController", {
                    itemId: e.rewardItemId,
                    dailyId: e.id
                });
            }
            else {
                DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.RewardNot, i.Year + "年" + i.Month + "月");
                ControllerManager_1.default.getInstance().pushViewByController("DailyController", {
                    showReward: true,
                    isShowAction: false,
                    success: false,
                    isReuse: true,
                    specifiedDate: true,
                    isReplace: true,
                    id: e.id
                });
            }
        }
    };
    DailyCollectCellItem.prototype.getCellData = function () {
        return this._data;
    };
    DailyCollectCellItem.prefabUrl = "prefabs/daily/DailyCollectList";
    DailyCollectCellItem.bundleName = "mainRes";
    DailyCollectCellItem = __decorate([
        mj.class
    ], DailyCollectCellItem);
    return DailyCollectCellItem;
}(BaseCell_1.default));
exports.default = DailyCollectCellItem;

cc._RF.pop();