"use strict";
cc._RF.push(module, '2476esm+IhLNpzkCGuO+v1A', 'DailyRewardCellItem');
// subpackages/l_daily/Scripts/DailyRewardCellItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DailyRewardCellItem = /** @class */ (function (_super) {
    __extends(DailyRewardCellItem, _super);
    function DailyRewardCellItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = null;
        _this._imgReward = null;
        _this._imgDiban = null;
        return _this;
    }
    DailyRewardCellItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = cc.find("view/img_reward", this.node);
        e && (this._imgReward = e.getComponent(cc.Sprite));
        var i = cc.find("view/img_bg/img_diban", this.node);
        i && (this._imgDiban = i.getComponent(cc.Sprite));
        this.initView();
    };
    DailyRewardCellItem.prototype.initView = function () {
        this.registerEvents();
    };
    DailyRewardCellItem.prototype.registerEvents = function () {
        var t;
        (null === (t = this._imgReward) || void 0 === t ? void 0 : t.node) && this.OnButtonClick(this._imgReward.node, this.onMoreClick.bind(this));
    };
    DailyRewardCellItem.prototype.updateCell = function (t) {
        this._data = t;
        this.updateUI();
    };
    DailyRewardCellItem.prototype.updateUI = function () {
        if (this._data.completed) {
            this.loadImgDiban("texture/daily/challenge_img_diban_1");
        }
        else {
            this.loadImgDiban("texture/daily/challenge_img_diban_2");
        }
    };
    DailyRewardCellItem.prototype.loadImgDiban = function (t) {
        BaseSprite_1.default.refreshWithNode(this._imgDiban.node, t);
    };
    DailyRewardCellItem.prototype.onMoreClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.DailyBtn);
        ControllerManager_1.default.getInstance().pushViewByController("DailyCollController", {
            isShowAction: false,
            enterType: 1
        });
    };
    DailyRewardCellItem.prototype.getCellData = function () {
        return this._data;
    };
    DailyRewardCellItem.prototype.onDestroy = function () {
        var e, i;
        this._data = null;
        null === (i = null === (e = this._imgReward) || void 0 === e ? void 0 : e.node) || void 0 === i || i.off(cc.Node.EventType.TOUCH_END, this.onMoreClick, this);
        _super.prototype.onDestroy.call(this);
    };
    DailyRewardCellItem = __decorate([
        mj.class
    ], DailyRewardCellItem);
    return DailyRewardCellItem;
}(BaseUI_1.default));
exports.default = DailyRewardCellItem;

cc._RF.pop();