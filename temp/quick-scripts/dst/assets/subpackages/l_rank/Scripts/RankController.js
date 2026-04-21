
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2eb1dOIi35AlYB+rAkqo7bE', 'RankController');
// subpackages/l_rank/Scripts/RankController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var RankModel_1 = require("./RankModel");
var RankView_1 = require("./util/RankView");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var RankController = /** @class */ (function (_super) {
    __extends(RankController, _super);
    function RankController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = RankView_1.default;
        _this.viewMode = ViewController_1.viewMode.SCENE;
        _this.bundleName = "mainRes";
        _this._model = null;
        return _this;
    }
    Object.defineProperty(RankController.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    RankController.prototype.initDependRes = function () {
        this.preloadResMap = {
            Prefab: ["prefabs/rank/RankView"]
        };
    };
    RankController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this._model = RankModel_1.default.getInstance();
    };
    RankController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    RankController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
    };
    RankController.prototype.jump = function () {
        this.dispatchEvent("RankModel_updTime");
        if (UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            ControllerManager_1.default.getInstance().pushViewByController("Tile2GameController");
        }
        else {
            ControllerManager_1.default.getInstance().pushViewByController("MainGameController");
        }
    };
    RankController.prototype.showTips = function () {
        ControllerManager_1.default.getInstance().pushViewByController("RankIntroduceController", {
            isReuse: true,
            isShowAction: true,
            isAutoOpen: false
        });
    };
    __decorate([
        mj.traitEvent("RankCtrl_initRes")
    ], RankController.prototype, "initDependRes", null);
    __decorate([
        mj.traitEvent("RankCtrl_viewShow")
    ], RankController.prototype, "viewDidShow", null);
    RankController = __decorate([
        mj.class("RankController")
    ], RankController);
    return RankController;
}(ViewController_1.default));
exports.default = RankController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLHlDQUFvQztBQUNwQyw0Q0FBdUM7QUFDdkMsMEZBQXFGO0FBQ3JGLHNFQUFpRTtBQUNqRSx3RkFBb0Y7QUFFcEY7SUFBNEMsa0NBQWM7SUFBMUQ7UUFBQSxxRUEwQ0M7UUF6Q0MsZUFBUyxHQUFHLGtCQUFRLENBQUM7UUFDckIsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDO1FBQzFCLGdCQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLFlBQU0sR0FBRyxJQUFJLENBQUM7O0lBc0NoQixDQUFDO0lBckNDLHNCQUFJLGlDQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNuQixNQUFNLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUNELG9DQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELG9DQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCw2QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsS0FBSywwQkFBVSxDQUFDLFdBQVcsRUFBRTtZQUN4RSwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdFO2FBQU07WUFDTCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFDRSwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyx5QkFBeUIsRUFBRTtZQUM5RSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFoQ0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDO3VEQUtqQztJQU1EO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztxREFLbEM7SUF2QmtCLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0EwQ2xDO0lBQUQscUJBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzJDLHdCQUFjLEdBMEN6RDtrQkExQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0NvbnRyb2xsZXIsIHsgdmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyJztcbmltcG9ydCBSYW5rTW9kZWwgZnJvbSAnLi9SYW5rTW9kZWwnO1xuaW1wb3J0IFJhbmtWaWV3IGZyb20gJy4vdXRpbC9SYW5rVmlldyc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWouY2xhc3MoXCJSYW5rQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IFJhbmtWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLlNDRU5FO1xuICBidW5kbGVOYW1lID0gXCJtYWluUmVzXCI7XG4gIF9tb2RlbCA9IG51bGw7XG4gIGdldCBtb2RlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZWw7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQ3RybF9pbml0UmVzXCIpXG4gIGluaXREZXBlbmRSZXMoKSB7XG4gICAgdGhpcy5wcmVsb2FkUmVzTWFwID0ge1xuICAgICAgUHJlZmFiOiBbXCJwcmVmYWJzL3JhbmsvUmFua1ZpZXdcIl1cbiAgICB9O1xuICB9XG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fbW9kZWwgPSBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtDdHJsX3ZpZXdTaG93XCIpXG4gIHZpZXdEaWRTaG93KGUpIHtcbiAgICBlID0gZSB8fCB0aGlzLmFyZ3M7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCBlKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dcIiwgZSk7XG4gIH1cbiAgdmlld0RpZEhpZGUoKSB7XG4gICAgc3VwZXIudmlld0RpZEhpZGUuY2FsbCh0aGlzKTtcbiAgfVxuICBqdW1wKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChcIlJhbmtNb2RlbF91cGRUaW1lXCIpO1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRNYWluR2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRpbGUyR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJNYWluR2FtZUNvbnRyb2xsZXJcIik7XG4gICAgfVxuICB9XG4gIHNob3dUaXBzKCkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJSYW5rSW50cm9kdWNlQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1JldXNlOiB0cnVlLFxuICAgICAgaXNTaG93QWN0aW9uOiB0cnVlLFxuICAgICAgaXNBdXRvT3BlbjogZmFsc2VcbiAgICB9KTtcbiAgfVxufSJdfQ==