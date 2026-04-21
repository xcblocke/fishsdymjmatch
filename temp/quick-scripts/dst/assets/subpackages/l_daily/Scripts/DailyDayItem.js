
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyDayItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlEYXlJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsMkNBQTBEO0FBRTFEO0lBQTBDLGdDQUFNO0lBQWhEO1FBQUEscUVBd0ZDO1FBdkZDLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFdBQUssR0FBRyxJQUFJLENBQUM7UUFDYixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBa0ZsQixDQUFDO0lBaEZDLDZCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QscUNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckgsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxD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Q0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLHdCQUFXLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLHdCQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcFQsQ0FBQztJQUNELGdDQUFTLEdBQVQ7UUFDRSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFoRk0sc0JBQVMsR0FBRyw0QkFBNEIsQ0FBQztJQVA3QixZQUFZO1FBRGhDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksWUFBWSxDQXdGaEM7SUFBRCxtQkFBQztDQXhGRCxBQXdGQyxDQXhGeUMsZ0JBQU0sR0F3Ri9DO2tCQXhGb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCB7IEVEYWlseUF1ZGlvSUQsIERhaWx5U3RhdHVzIH0gZnJvbSAnLi9EYWlseVR5cGVzJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlEYXlJdGVtIGV4dGVuZHMgQmFzZVVJIHtcbiAgX2xhYmVsID0gbnVsbDtcbiAgX2J0bkNsaWNrID0gbnVsbDtcbiAgX2ltZ0NvbXBsZXRlID0gbnVsbDtcbiAgX2RhdGEgPSBudWxsO1xuICBfaGFzRXZlbnQgPSBmYWxzZTtcbiAgX29uQ2xpY2sgPSBudWxsO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2RhaWx5L0RhaWx5RGF5SXRlbVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50cygpO1xuICB9XG4gIGluaXRDb21wb25lbnRzKCkge1xuICAgIHZhciB0LCBlO1xuICAgIHRoaXMuX2xhYmVsID0gbnVsbCA9PT0gKHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRfZGF5XCIpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5faW1nQ29tcGxldGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpbWdfY29tcGxldGVcIik7XG4gICAgdGhpcy5fYnRuQ2xpY2sgPSBudWxsID09PSAoZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9jbGlja1wiKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICB0aGlzLl9pbWdDb21wbGV0ZSAmJiAodGhpcy5faW1nQ29tcGxldGUuYWN0aXZlID0gZmFsc2UpO1xuICB9XG4gIHNldENsaWNrQ2FsbGJhY2sodCkge1xuICAgIHRoaXMuX29uQ2xpY2sgPSB0O1xuICB9XG4gIHJlZ2lzdGVyQ2xpY2tFdmVudCgpIHtcbiAgICBpZiAoIXRoaXMuX2hhc0V2ZW50ICYmIHRoaXMuX2J0bkNsaWNrKSB7XG4gICAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYnRuQ2xpY2subm9kZSwge1xuICAgICAgICBmdW5jOiB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcyksXG4gICAgICAgIGNsaWNrQXVkaW86IEVEYWlseUF1ZGlvSUQuRGFpbHlEYXlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5faGFzRXZlbnQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICB1cGRhdGVEYXRhKHQpIHtcbiAgICB0aGlzLl9kYXRhID0gdDtcbiAgICB0aGlzLnJlZnJlc2hVSSgpO1xuICB9XG4gIHJlZnJlc2hVSSgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyQ2xpY2tFdmVudCgpO1xuICAgIHRoaXMuX2ltZ0NvbXBsZXRlICYmICh0aGlzLl9pbWdDb21wbGV0ZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgaWYgKHRoaXMuX2RhdGEgJiYgMCAhPT0gdGhpcy5fZGF0YS5kYXkpIHtcbiAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLl9sYWJlbCAmJiAodGhpcy5fbGFiZWwuc3RyaW5nID0gdGhpcy5fZGF0YS5kYXkudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5fYnRuQ2xpY2sgJiYgKHRoaXMuX2J0bkNsaWNrLmludGVyYWN0YWJsZSA9IGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHN3aXRjaCAodGhpcy5fZGF0YS5zdGF0dXMpIHtcbiAgICAgIGNhc2UgRGFpbHlTdGF0dXMuVW5vcGVuZWQ6XG4gICAgICBjYXNlIERhaWx5U3RhdHVzLkxvY2tlZDpcbiAgICAgICAgdGhpcy5zZXRVbm9wZW5lZFN0YXRlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEYWlseVN0YXR1cy5VbmxvY2tlZDpcbiAgICAgICAgdGhpcy5zZXRVbmxvY2tlZFN0YXRlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEYWlseVN0YXR1cy5Db21wbGV0ZWQ6XG4gICAgICAgIHRoaXMuc2V0Q29tcGxldGVkU3RhdGUoKTtcbiAgICB9XG4gIH1cbiAgc2V0VW5vcGVuZWRTdGF0ZSgpIHtcbiAgICB0aGlzLl9sYWJlbCAmJiAodGhpcy5fbGFiZWwubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjYzM4ZDUzXCIpKTtcbiAgICB0aGlzLl9idG5DbGljayAmJiAodGhpcy5fYnRuQ2xpY2suaW50ZXJhY3RhYmxlID0gZmFsc2UpO1xuICB9XG4gIHNldFVubG9ja2VkU3RhdGUoKSB7XG4gICAgdGhpcy5fbGFiZWwgJiYgKHRoaXMuX2xhYmVsLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzljNmE0YlwiKSk7XG4gICAgdGhpcy5fYnRuQ2xpY2sgJiYgKHRoaXMuX2J0bkNsaWNrLmludGVyYWN0YWJsZSA9IHRydWUpO1xuICB9XG4gIHNldENvbXBsZXRlZFN0YXRlKCkge1xuICAgIHRoaXMuX2xhYmVsICYmICh0aGlzLl9sYWJlbC5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiM5YzZhNGJcIikpO1xuICAgIHRoaXMuX2J0bkNsaWNrICYmICh0aGlzLl9idG5DbGljay5pbnRlcmFjdGFibGUgPSB0cnVlKTtcbiAgICB0aGlzLl9pbWdDb21wbGV0ZSAmJiAodGhpcy5faW1nQ29tcGxldGUuYWN0aXZlID0gdHJ1ZSk7XG4gIH1cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuICBvbkl0ZW1DbGljaygpIHtcbiAgICB2YXIgdCwgZSwgaTtcbiAgICAobnVsbCA9PT0gKHQgPSB0aGlzLl9kYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmRheSkgJiYgKG51bGwgPT09IChlID0gdGhpcy5fYnRuQ2xpY2spIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaW50ZXJhY3RhYmxlKSAmJiB0aGlzLl9kYXRhLnN0YXR1cyAhPT0gRGFpbHlTdGF0dXMuVW5vcGVuZWQgJiYgdGhpcy5fZGF0YS5zdGF0dXMgIT09IERhaWx5U3RhdHVzLkxvY2tlZCAmJiAobnVsbCA9PT0gKGkgPSB0aGlzLl9vbkNsaWNrKSB8fCB2b2lkIDAgPT09IGkgfHwgaS5jYWxsKHRoaXMsIHRoaXMuX2RhdGEpKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25JdGVtQ2xpY2ssIHRoaXMpO1xuICAgIHRoaXMuX29uQ2xpY2sgPSBudWxsO1xuICAgIHRoaXMuX2RhdGEgPSBudWxsO1xuICB9XG59Il19