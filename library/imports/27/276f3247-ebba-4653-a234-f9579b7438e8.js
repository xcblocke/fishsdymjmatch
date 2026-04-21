"use strict";
cc._RF.push(module, '276f3JH67pGU6I0+VebdDjo', 'JourneyCollectCellItem');
// subpackages/l_daily/Scripts/JourneyCollectCellItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DataReader_1 = require("../../../Scripts/framework/data/DataReader");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var ConfigType_1 = require("../../../Scripts/gamePlay/base/data/ConfigType");
var BaseCell_1 = require("../../../Scripts/base/ui/BaseCell");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DailyTypes_1 = require("./DailyTypes");
var JourneyCollectCellItem = /** @class */ (function (_super) {
    __extends(JourneyCollectCellItem, _super);
    function JourneyCollectCellItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._txtJourney = null;
        _this._startCellHeight = 660;
        _this._firstCellHeight = 500;
        _this._cellHeight = 400;
        _this._itemNodes = [];
        return _this;
    }
    JourneyCollectCellItem.prototype.uiOnLoad = function () {
        var t, e, i, o, n, a = this;
        this._txtJourney = null === (t = cc.find("img_nameBg/txt_journey", this._cellUI)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        for (var l = function l(t) {
            var l = cc.find("items/item_" + t, r._cellUI);
            if (!l)
                return "continue";
            r._itemNodes[t] = {
                container: l,
                imgItem: null === (e = cc.find("img_item", l)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite),
                imgGrayItem: null === (i = cc.find("img_grayItem", l)) || void 0 === i ? void 0 : i.getComponent(cc.Sprite),
                txtDay: null === (o = cc.find("txt_day", l)) || void 0 === o ? void 0 : o.getComponent(cc.Label),
                effItemLight: null === (n = cc.find("eff_itemLight", l)) || void 0 === n ? void 0 : n.getComponent(sp.Skeleton),
                btnNode: cc.find("btn_item", l)
            };
            r._itemNodes[t].effItemLight.node.active = false;
            r._itemNodes[t].btnNode && r.OnButtonClick(r._itemNodes[t].btnNode, {
                func: function () {
                    return a.onItemClick(t);
                },
                clickAudio: DailyTypes_1.EDailyAudioID.DailyDay
            });
        }, r = this, s = 0; s < 3; s++)
            l(s);
        this.initCellSize();
    };
    JourneyCollectCellItem.prototype.initCellSize = function () {
        this._cellHeight = 450;
        this._startCellHeight = 660;
        this._firstCellHeight = 500;
    };
    JourneyCollectCellItem.prototype.updateUI = function () {
        if (this._data && this._data.items) {
            if (this._data) {
                var t = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, this._data.session);
                t && (this._txtJourney.string = I18NStrings_1.default.get(t.name));
            }
            this._cellUI.active = !this._data.empty;
            this.widgetUI();
            for (var e = function e(t) {
                var e = i._data.items[t], o = i._itemNodes[t];
                if (!o)
                    return "continue";
                if (!e) {
                    o.container.active = false;
                    return "continue";
                }
                o.container.active = true;
                o.imgItem.node.active = true;
                var n = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e.itemId), a = n && n.Scale > 0 ? 0.01 * n.Scale : 0.65;
                o.imgItem.node.scale = a;
                var r = 2000 * Math.random() + 200;
                setTimeout(function () {
                    o && cc.isValid(o.effItemLight) && CommonUtils_1.playSpineAnim(o.effItemLight, -1, "init");
                }, r);
                i.loadCollectIcon(o.imgItem, e.itemId, true);
            }, i = this, o = 0; o < 3; o++)
                e(o);
        }
    };
    JourneyCollectCellItem.prototype.widgetUI = function () {
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
    JourneyCollectCellItem.prototype.loadCollectIcon = function (t, e) {
        var i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e);
        i && BaseSprite_1.default.refreshWithNode(t.node, "texture/badge/" + i.Icon);
    };
    JourneyCollectCellItem.prototype.onItemClick = function (t) {
        if (this._data && this._data.items && this._data.items[t]) {
            var e = this._data.items[t];
            if (e) {
                var i = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.item_config, e.itemId);
                DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.Badge, "" + I18NStrings_1.default.getCN(i.NameKey));
                ControllerManager_1.default.getInstance().pushViewByController("DailyRewardController", {
                    itemId: e.itemId
                });
            }
        }
    };
    JourneyCollectCellItem.prototype.getCellData = function () {
        return this._data;
    };
    JourneyCollectCellItem.prefabUrl = "prefabs/daily/JourneyCollectList";
    JourneyCollectCellItem.bundleName = "mainRes";
    JourneyCollectCellItem = __decorate([
        mj.class
    ], JourneyCollectCellItem);
    return JourneyCollectCellItem;
}(BaseCell_1.default));
exports.default = JourneyCollectCellItem;

cc._RF.pop();