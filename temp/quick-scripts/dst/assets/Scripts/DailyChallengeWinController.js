
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/DailyChallengeWinController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b098jLVadMMYZiUbD7GaFF', 'DailyChallengeWinController');
// Scripts/DailyChallengeWinController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var LoginModel_1 = require("./gamePlay/login/model/LoginModel");
var DailyChallengeWinView_1 = require("./view/DailyChallengeWinView");
var DailyChallengeWinController = /** @class */ (function (_super) {
    __extends(DailyChallengeWinController, _super);
    function DailyChallengeWinController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = DailyChallengeWinView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this._model = null;
        return _this;
    }
    DailyChallengeWinController.prototype.initDependRes = function () { };
    DailyChallengeWinController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this._model = LoginModel_1.default.getInstance();
    };
    DailyChallengeWinController.prototype.viewDidShow = function (t) {
        t = t || this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showWinView", t);
    };
    DailyChallengeWinController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    __decorate([
        mj.traitEvent("DCWinCtrl_initRes")
    ], DailyChallengeWinController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("DCWinCtrl_viewShow")
    ], DailyChallengeWinController.prototype, "viewDidShow", null);
    DailyChallengeWinController = __decorate([
        mj.class("DailyChallengeWinController")
    ], DailyChallengeWinController);
    return DailyChallengeWinController;
}(ViewController_1.default));
exports.default = DailyChallengeWinController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0RhaWx5Q2hhbGxlbmdlV2luQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQWlGO0FBQ2pGLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFFakU7SUFBeUQsK0NBQWM7SUFBdkU7UUFBQSxxRUFtQkM7UUFsQkMsZUFBUyxHQUFHLCtCQUFxQixDQUFDO1FBQ2xDLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixZQUFNLEdBQUcsSUFBSSxDQUFDOztJQWdCaEIsQ0FBQztJQWRDLG1EQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUNsQixpREFBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELGlEQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxpREFBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBYkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO29FQUNqQjtJQU1sQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUM7a0VBS25DO0lBZmtCLDJCQUEyQjtRQUQvQyxFQUFFLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDO09BQ25CLDJCQUEyQixDQW1CL0M7SUFBRCxrQ0FBQztDQW5CRCxBQW1CQyxDQW5Cd0Qsd0JBQWMsR0FtQnRFO2tCQW5Cb0IsMkJBQTJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuL2dhbWVQbGF5L2xvZ2luL21vZGVsL0xvZ2luTW9kZWwnO1xuaW1wb3J0IERhaWx5Q2hhbGxlbmdlV2luVmlldyBmcm9tICcuL3ZpZXcvRGFpbHlDaGFsbGVuZ2VXaW5WaWV3JztcbkBtai5jbGFzcyhcIkRhaWx5Q2hhbGxlbmdlV2luQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFpbHlDaGFsbGVuZ2VXaW5Db250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBEYWlseUNoYWxsZW5nZVdpblZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuUEFORUw7XG4gIF9tb2RlbCA9IG51bGw7XG4gIEBtai50cmFpdEV2ZW50KFwiRENXaW5DdHJsX2luaXRSZXNcIilcbiAgaW5pdERlcGVuZFJlcygpIHt9XG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fbW9kZWwgPSBMb2dpbk1vZGVsLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEQ1dpbkN0cmxfdmlld1Nob3dcIilcbiAgdmlld0RpZFNob3codCkge1xuICAgIHQgPSB0IHx8IHRoaXMuYXJncztcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd1dpblZpZXdcIiwgdCk7XG4gIH1cbiAgdmlld0RpZEhpZGUoKSB7XG4gICAgc3VwZXIudmlld0RpZEhpZGUuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==