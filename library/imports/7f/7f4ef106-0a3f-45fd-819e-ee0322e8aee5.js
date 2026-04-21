"use strict";
cc._RF.push(module, '7f4efEGCj9F/YGe7gMi6K7l', 'DailyDayItem');
// subpackages/l_daily/Scripts/DailyDayItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DailyTypes_1 = require("./DailyTypes");
var DailyDayItem = /** @class */ (function (_super) {
    __extends(DailyDayItem, _super);
    function DailyDayItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._label = null;
        _this._btnClick = null;
        _this._imgComplete = null;
        _this._data = null;
        _this._hasEvent = false;
        _this._onClick = null;
        return _this;
    }
    DailyDayItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
    };
    DailyDayItem.prototype.initComponents = function () {
        var t, e;
        this._label = null === (t = this.node.getChildByName("txt_day")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this._imgComplete = this.node.getChildByName("img_complete");
        this._btnClick = null === (e = this.node.getChildByName("btn_click")) || void 0 === e ? void 0 : e.getComponent(cc.Button);
        this._imgComplete && (this._imgComplete.active = false);
    };
    DailyDayItem.prototype.setClickCallback = function (t) {
        this._onClick = t;
    };
    DailyDayItem.prototype.registerClickEvent = function () {
        if (!this._hasEvent && this._btnClick) {
            this.OnButtonClick(this._btnClick.node, {
                func: this.onItemClick.bind(this),
                clickAudio: DailyTypes_1.EDailyAudioID.DailyDay
            });
            this._hasEvent = true;
        }
    };
    DailyDayItem.prototype.updateData = function (t) {
        this._data = t;
        this.refreshUI();
    };
    DailyDayItem.prototype.refreshUI = function () {
        this.registerClickEvent();
        this._imgComplete && (this._imgComplete.active = false);
        if (this._data && 0 !== this._data.day) {
            this.node.opacity = 255;
            this.node.active = true;
            this._label && (this._label.string = this._data.day.toString());
            this.updateState();
        }
        else {
            this.node.opacity = 0;
            this.node.active = true;
            this._btnClick && (this._btnClick.interactable = false);
        }
    };
    DailyDayItem.prototype.updateState = function () {
        if (this._data)
            switch (this._data.status) {
                case DailyTypes_1.DailyStatus.Unopened:
                case DailyTypes_1.DailyStatus.Locked:
                    this.setUnopenedState();
                    break;
                case DailyTypes_1.DailyStatus.Unlocked:
                    this.setUnlockedState();
                    break;
                case DailyTypes_1.DailyStatus.Completed:
                    this.setCompletedState();
            }
    };
    DailyDayItem.prototype.setUnopenedState = function () {
        this._label && (this._label.node.color = new cc.Color().fromHEX("#c38d53"));
        this._btnClick && (this._btnClick.interactable = false);
    };
    DailyDayItem.prototype.setUnlockedState = function () {
        this._label && (this._label.node.color = new cc.Color().fromHEX("#9c6a4b"));
        this._btnClick && (this._btnClick.interactable = true);
    };
    DailyDayItem.prototype.setCompletedState = function () {
        this._label && (this._label.node.color = new cc.Color().fromHEX("#9c6a4b"));
        this._btnClick && (this._btnClick.interactable = true);
        this._imgComplete && (this._imgComplete.active = true);
    };
    DailyDayItem.prototype.getData = function () {
        return this._data;
    };
    DailyDayItem.prototype.onItemClick = function () {
        var t, e, i;
        (null === (t = this._data) || void 0 === t ? void 0 : t.day) && (null === (e = this._btnClick) || void 0 === e ? void 0 : e.interactable) && this._data.status !== DailyTypes_1.DailyStatus.Unopened && this._data.status !== DailyTypes_1.DailyStatus.Locked && (null === (i = this._onClick) || void 0 === i || i.call(this, this._data));
    };
    DailyDayItem.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onItemClick, this);
        this._onClick = null;
        this._data = null;
    };
    DailyDayItem.prefabUrl = "prefabs/daily/DailyDayItem";
    DailyDayItem = __decorate([
        mj.class
    ], DailyDayItem);
    return DailyDayItem;
}(BaseUI_1.default));
exports.default = DailyDayItem;

cc._RF.pop();