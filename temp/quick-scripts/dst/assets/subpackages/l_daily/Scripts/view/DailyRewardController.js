
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/view/DailyRewardController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e8f3xu9pRHcqtFKeTVQNwj', 'DailyRewardController');
// subpackages/l_daily/Scripts/view/DailyRewardController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../../Scripts/framework/controller/ViewController");
var DailyModel_1 = require("../DailyModel");
var DailyRewardView_1 = require("./DailyRewardView");
var DailyRewardController = /** @class */ (function (_super) {
    __extends(DailyRewardController, _super);
    function DailyRewardController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DailyRewardView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this._model = null;
        return _this;
    }
    DailyRewardController.prototype.getMessageListeners = function () {
        return {};
    };
    DailyRewardController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this._model = DailyModel_1.default.getInstance();
    };
    DailyRewardController.prototype.viewDidShow = function () {
        _super.prototype.viewDidShow.call(this);
        this.refreshUI();
    };
    DailyRewardController.prototype.refreshUI = function () {
        var t, e, i = (null === (t = this.args) || void 0 === t ? void 0 : t.itemId) || 0;
        null === (e = this.args) || void 0 === e || e.isGetReward;
        this.viewDoAction("show", i);
    };
    DailyRewardController = __decorate([
        mj.class("DailyRewardController")
    ], DailyRewardController);
    return DailyRewardController;
}(ViewController_1.default));
exports.default = DailyRewardController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvdmlldy9EYWlseVJld2FyZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBGQUFtRztBQUNuRyw0Q0FBdUM7QUFDdkMscURBQWdEO0FBRWhEO0lBQW1ELHlDQUFjO0lBQWpFO1FBQUEscUVBc0JDO1FBckJDLGVBQVMsR0FBRyx5QkFBZSxDQUFDO1FBQzVCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixZQUFNLEdBQUcsSUFBSSxDQUFDOztJQW1CaEIsQ0FBQztJQWxCQyxtREFBbUIsR0FBbkI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCwyQ0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNELDJDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QseUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBckJrQixxQkFBcUI7UUFEekMsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQXNCekM7SUFBRCw0QkFBQztDQXRCRCxBQXNCQyxDQXRCa0Qsd0JBQWMsR0FzQmhFO2tCQXRCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgRGFpbHlNb2RlbCBmcm9tICcuLi9EYWlseU1vZGVsJztcbmltcG9ydCBEYWlseVJld2FyZFZpZXcgZnJvbSAnLi9EYWlseVJld2FyZFZpZXcnO1xuQG1qLmNsYXNzKFwiRGFpbHlSZXdhcmRDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVJld2FyZENvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IERhaWx5UmV3YXJkVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgX21vZGVsID0gbnVsbDtcbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgdmlld0RpZExvYWQoKSB7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9tb2RlbCA9IERhaWx5TW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICB2aWV3RGlkU2hvdygpIHtcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMpO1xuICAgIHRoaXMucmVmcmVzaFVJKCk7XG4gIH1cbiAgcmVmcmVzaFVJKCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIGkgPSAobnVsbCA9PT0gKHQgPSB0aGlzLmFyZ3MpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuaXRlbUlkKSB8fCAwO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5hcmdzKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5pc0dldFJld2FyZDtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dcIiwgaSk7XG4gIH1cbn0iXX0=