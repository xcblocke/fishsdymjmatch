
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hall/Scripts/HallNormalBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93793BBaRRBT7xoK1+Zgqnn', 'HallNormalBtn');
// subpackages/l_hall/Scripts/HallNormalBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var EventDefine_1 = require("../../../Scripts/base/event/EventDefine");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var HallNormalBtn = /** @class */ (function (_super) {
    __extends(HallNormalBtn, _super);
    function HallNormalBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelLabel = null;
        _this.levelId = 0;
        _this._bgBtnNode = null;
        return _this;
    }
    Object.defineProperty(HallNormalBtn.prototype, "BgBtnNode", {
        get: function () {
            return this._bgBtnNode;
        },
        enumerable: false,
        configurable: true
    });
    HallNormalBtn.prototype.getMessageListeners = function () {
        var _t = {};
        _t[EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
        return _t;
    };
    HallNormalBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.node, this.onBtnClick.bind(this));
    };
    HallNormalBtn.prototype.updateUI = function () {
        if (cc.isValid(this.levelLabel)) {
            this.levelId = UserModel_1.default.getInstance().getMainGameData().getLevelId();
            I18NStrings_1.default.setText(this.levelLabel.node, "Level " + this.levelId, "MahjongTiles_MapPage_Level", [this.levelId]);
        }
    };
    HallNormalBtn.prototype.onBtnClick = function () {
        this.dispatchEvent("RankModel_updTime");
        if (UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            ControllerManager_1.default.getInstance().pushViewByController("Tile2GameController");
        }
        else {
            ControllerManager_1.default.getInstance().pushViewByController("MainGameController");
        }
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.Level, this.levelId);
    };
    HallNormalBtn.prototype.onForceUpdate = function () { };
    HallNormalBtn.prefabUrl = "prefabs/hall/HallNormalBtn";
    __decorate([
        mj.component("BgBtn/Label", cc.Label)
    ], HallNormalBtn.prototype, "levelLabel", void 0);
    __decorate([
        mj.node("BgBtn")
    ], HallNormalBtn.prototype, "_bgBtnNode", void 0);
    __decorate([
        mj.traitEvent("HallNmlBtn_onLoad")
    ], HallNormalBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("HallNmlBtn_updateUI")
    ], HallNormalBtn.prototype, "updateUI", null);
    __decorate([
        mj.traitEvent("HallNmlBtn_onBtnClk")
    ], HallNormalBtn.prototype, "onBtnClick", null);
    __decorate([
        mj.traitEvent("HallNmlBtn_forceUpdate")
    ], HallNormalBtn.prototype, "onForceUpdate", null);
    HallNormalBtn = __decorate([
        mj.class
    ], HallNormalBtn);
    return HallNormalBtn;
}(BaseUI_1.default));
exports.default = HallNormalBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGwvU2NyaXB0cy9IYWxsTm9ybWFsQnRuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsMEZBQXFGO0FBQ3JGLDJFQUFzRTtBQUN0RSxvRUFBeUY7QUFDekYsdUVBQW9GO0FBQ3BGLHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFFcEY7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUF1Q0M7UUFyQ0MsZ0JBQVUsR0FBa0IsSUFBSSxDQUFDO1FBQ2pDLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFFWixnQkFBVSxHQUFZLElBQUksQ0FBQzs7SUFrQzdCLENBQUM7SUFoQ0Msc0JBQUksb0NBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNELDJDQUFtQixHQUFuQjtRQUNFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNaLEVBQUUsQ0FBQyx1Q0FBeUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEUscUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNsSDtJQUNILENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsS0FBSywwQkFBVSxDQUFDLFdBQVcsRUFBRTtZQUN4RSwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdFO2FBQU07WUFDTCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsK0JBQWUsQ0FBQyxPQUFPLENBQUMsa0NBQWtCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQscUNBQWEsR0FBYixjQUFpQixDQUFDO0lBaENYLHVCQUFTLEdBQUcsNEJBQTRCLENBQUM7SUFKaEQ7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNMO0lBR2pDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7cURBQ1U7SUFXM0I7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDOytDQUlsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztpREFNcEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7bURBU3BDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3NEQUN0QjtJQXRDQyxhQUFhO1FBRGpDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksYUFBYSxDQXVDakM7SUFBRCxvQkFBQztDQXZDRCxBQXVDQyxDQXZDMEMsZ0JBQU0sR0F1Q2hEO2tCQXZDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0NvbnRyb2xsZXJNYW5hZ2VyJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRUhvbWVQYWdlQ2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgeyBFVlRfTVNHX0hBTExfRk9SQ0VfVVBEQVRFIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2V2ZW50L0V2ZW50RGVmaW5lJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbE5vcm1hbEJ0biBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5jb21wb25lbnQoXCJCZ0J0bi9MYWJlbFwiLCBjYy5MYWJlbClcbiAgbGV2ZWxMYWJlbDogXCJCZ0J0bi9MYWJlbFwiID0gbnVsbDtcbiAgbGV2ZWxJZCA9IDA7XG4gIEBtai5ub2RlKFwiQmdCdG5cIilcbiAgX2JnQnRuTm9kZTogXCJCZ0J0blwiID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9oYWxsL0hhbGxOb3JtYWxCdG5cIjtcbiAgZ2V0IEJnQnRuTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmdCdG5Ob2RlO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90ID0ge307XG4gICAgX3RbRVZUX01TR19IQUxMX0ZPUkNFX1VQREFURV0gPSB0aGlzLm9uRm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsTm1sQnRuX29uTG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMubm9kZSwgdGhpcy5vbkJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSGFsbE5tbEJ0bl91cGRhdGVVSVwiKVxuICB1cGRhdGVVSSgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmxldmVsTGFiZWwpKSB7XG4gICAgICB0aGlzLmxldmVsSWQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZURhdGEoKS5nZXRMZXZlbElkKCk7XG4gICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMubGV2ZWxMYWJlbC5ub2RlLCBcIkxldmVsIFwiICsgdGhpcy5sZXZlbElkLCBcIk1haGpvbmdUaWxlc19NYXBQYWdlX0xldmVsXCIsIFt0aGlzLmxldmVsSWRdKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsTm1sQnRuX29uQnRuQ2xrXCIpXG4gIG9uQnRuQ2xpY2soKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KFwiUmFua01vZGVsX3VwZFRpbWVcIik7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldE1haW5HYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSB7XG4gICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVGlsZTJHYW1lQ29udHJvbGxlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIk1haW5HYW1lQ29udHJvbGxlclwiKTtcbiAgICB9XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEhhbGwoRUhvbWVQYWdlQ2xpY2tUeXBlLkxldmVsLCB0aGlzLmxldmVsSWQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSGFsbE5tbEJ0bl9mb3JjZVVwZGF0ZVwiKVxuICBvbkZvcmNlVXBkYXRlKCkge31cbn0iXX0=