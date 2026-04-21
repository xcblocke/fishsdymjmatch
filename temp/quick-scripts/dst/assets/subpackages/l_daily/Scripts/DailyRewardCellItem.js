
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyRewardCellItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlSZXdhcmRDZWxsSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELG9FQUFzRjtBQUN0RiwwRkFBcUY7QUFDckYsMkVBQXNFO0FBRXRFO0lBQWlELHVDQUFNO0lBQXZEO1FBQUEscUVBaURDO1FBaERDLFdBQUssR0FBRyxJQUFJLENBQUM7UUFDYixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFTLEdBQUcsSUFBSSxDQUFDOztJQThDbkIsQ0FBQztJQTdDQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0Qsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsNENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUksQ0FBQztJQUNELHdDQUFVLEdBQVYsVUFBVyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELHNDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUNELDBDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osb0JBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELHlDQUFXLEdBQVg7UUFDRSwrQkFBZSxDQUFDLFFBQVEsQ0FBQywrQkFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixFQUFFO1lBQzFFLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHlDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELHVDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUosaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBaERrQixtQkFBbUI7UUFEdkMsRUFBRSxDQUFDLEtBQUs7T0FDWSxtQkFBbUIsQ0FpRHZDO0lBQUQsMEJBQUM7Q0FqREQsQUFpREMsQ0FqRGdELGdCQUFNLEdBaUR0RDtrQkFqRG9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRUJhZGdlQ2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5UmV3YXJkQ2VsbEl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xuICBfZGF0YSA9IG51bGw7XG4gIF9pbWdSZXdhcmQgPSBudWxsO1xuICBfaW1nRGliYW4gPSBudWxsO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIGUgPSBjYy5maW5kKFwidmlldy9pbWdfcmV3YXJkXCIsIHRoaXMubm9kZSk7XG4gICAgZSAmJiAodGhpcy5faW1nUmV3YXJkID0gZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgdmFyIGkgPSBjYy5maW5kKFwidmlldy9pbWdfYmcvaW1nX2RpYmFuXCIsIHRoaXMubm9kZSk7XG4gICAgaSAmJiAodGhpcy5faW1nRGliYW4gPSBpLmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICB0aGlzLmluaXRWaWV3KCk7XG4gIH1cbiAgaW5pdFZpZXcoKSB7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICB9XG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHZhciB0O1xuICAgIChudWxsID09PSAodCA9IHRoaXMuX2ltZ1Jld2FyZCkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5ub2RlKSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5faW1nUmV3YXJkLm5vZGUsIHRoaXMub25Nb3JlQ2xpY2suYmluZCh0aGlzKSk7XG4gIH1cbiAgdXBkYXRlQ2VsbCh0KSB7XG4gICAgdGhpcy5fZGF0YSA9IHQ7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICB9XG4gIHVwZGF0ZVVJKCkge1xuICAgIGlmICh0aGlzLl9kYXRhLmNvbXBsZXRlZCkge1xuICAgICAgdGhpcy5sb2FkSW1nRGliYW4oXCJ0ZXh0dXJlL2RhaWx5L2NoYWxsZW5nZV9pbWdfZGliYW5fMVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkSW1nRGliYW4oXCJ0ZXh0dXJlL2RhaWx5L2NoYWxsZW5nZV9pbWdfZGliYW5fMlwiKTtcbiAgICB9XG4gIH1cbiAgbG9hZEltZ0RpYmFuKHQpIHtcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9pbWdEaWJhbi5ub2RlLCB0KTtcbiAgfVxuICBvbk1vcmVDbGljaygpIHtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90QmFkZ2UoRUJhZGdlQ2xpY2tUeXBlLkRhaWx5QnRuKTtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiRGFpbHlDb2xsQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1Nob3dBY3Rpb246IGZhbHNlLFxuICAgICAgZW50ZXJUeXBlOiAxXG4gICAgfSk7XG4gIH1cbiAgZ2V0Q2VsbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHZhciBlLCBpO1xuICAgIHRoaXMuX2RhdGEgPSBudWxsO1xuICAgIG51bGwgPT09IChpID0gbnVsbCA9PT0gKGUgPSB0aGlzLl9pbWdSZXdhcmQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUubm9kZSkgfHwgdm9pZCAwID09PSBpIHx8IGkub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbk1vcmVDbGljaywgdGhpcyk7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=