
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankIntroduceController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65254K1qXtKELfDRZ4+MRci', 'RankIntroduceController');
// subpackages/l_rank/Scripts/RankIntroduceController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var RankIntroduceView_1 = require("./util/RankIntroduceView");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var RankIntroduceController = /** @class */ (function (_super) {
    __extends(RankIntroduceController, _super);
    function RankIntroduceController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = RankIntroduceView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        return _this;
    }
    RankIntroduceController.prototype.getMessageListeners = function () {
        return {};
    };
    RankIntroduceController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    RankIntroduceController.prototype.viewDidShow = function (e) {
        e = e || this.args;
        _super.prototype.viewDidShow.call(this, e);
        this.viewDoAction("show", e);
    };
    RankIntroduceController.prototype.close = function () {
        _super.prototype.close.call(this);
    };
    RankIntroduceController.prototype.collect = function () {
        this.dispatchEvent("RankModel_updTime");
        if (UserModel_1.default.getInstance().getMainGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            ControllerManager_1.default.getInstance().pushViewByController("Tile2GameController");
        }
        else {
            ControllerManager_1.default.getInstance().pushViewByController("MainGameController");
        }
    };
    __decorate([
        mj.traitEvent("RankIntroCtrl_viewShow")
    ], RankIntroduceController.prototype, "viewDidShow", null);
    RankIntroduceController = __decorate([
        mj.class("RankIntroduceController")
    ], RankIntroduceController);
    return RankIntroduceController;
}(ViewController_1.default));
exports.default = RankIntroduceController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rSW50cm9kdWNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLDhEQUF5RDtBQUN6RCwwRkFBcUY7QUFDckYsc0VBQWlFO0FBQ2pFLHdGQUFvRjtBQUVwRjtJQUFxRCwyQ0FBYztJQUFuRTtRQUFBLHFFQTBCQztRQXpCQyxlQUFTLEdBQUcsMkJBQWlCLENBQUM7UUFDOUIsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDOztJQXdCNUIsQ0FBQztJQXZCQyxxREFBbUIsR0FBbkI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCw2Q0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELHVDQUFLLEdBQUw7UUFDRSxpQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDRCx5Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsS0FBSywwQkFBVSxDQUFDLFdBQVcsRUFBRTtZQUN4RSwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQzdFO2FBQU07WUFDTCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQztJQWZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzs4REFLdkM7SUFka0IsdUJBQXVCO1FBRDNDLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0EwQjNDO0lBQUQsOEJBQUM7Q0ExQkQsQUEwQkMsQ0ExQm9ELHdCQUFjLEdBMEJsRTtrQkExQm9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IFJhbmtJbnRyb2R1Y2VWaWV3IGZyb20gJy4vdXRpbC9SYW5rSW50cm9kdWNlVmlldyc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWouY2xhc3MoXCJSYW5rSW50cm9kdWNlQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0ludHJvZHVjZUNvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IFJhbmtJbnRyb2R1Y2VWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLlBBTkVMO1xuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0ludHJvQ3RybF92aWV3U2hvd1wiKVxuICB2aWV3RGlkU2hvdyhlKSB7XG4gICAgZSA9IGUgfHwgdGhpcy5hcmdzO1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgZSk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93XCIsIGUpO1xuICB9XG4gIGNsb3NlKCkge1xuICAgIHN1cGVyLmNsb3NlLmNhbGwodGhpcyk7XG4gIH1cbiAgY29sbGVjdCgpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJSYW5rTW9kZWxfdXBkVGltZVwiKTtcbiAgICBpZiAoVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVUeXBlKCkgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwpIHtcbiAgICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUaWxlMkdhbWVDb250cm9sbGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiTWFpbkdhbWVDb250cm9sbGVyXCIpO1xuICAgIH1cbiAgfVxufSJdfQ==