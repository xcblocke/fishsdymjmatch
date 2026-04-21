
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_dieAutoShuffle/Scripts/AutoShuffleTipsController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19cc4ZjYQpPTK3f8AOBv2nP', 'AutoShuffleTipsController');
// subpackages/r_dieAutoShuffle/Scripts/AutoShuffleTipsController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var AutoShuffleTipsView_1 = require("./AutoShuffleTipsView");
var AutoShuffleTipsController = /** @class */ (function (_super) {
    __extends(AutoShuffleTipsController, _super);
    function AutoShuffleTipsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AutoShuffleTipsView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "mainRes";
        return _this;
    }
    AutoShuffleTipsController.prototype.getMessageListeners = function () {
        return {};
    };
    AutoShuffleTipsController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("show");
    };
    AutoShuffleTipsController.prototype.refreshForReuse = function (e) {
        _super.prototype.refreshForReuse.call(this, e);
        this.viewDoAction("show");
    };
    AutoShuffleTipsController = __decorate([
        mj.class("AutoShuffleTipsController")
    ], AutoShuffleTipsController);
    return AutoShuffleTipsController;
}(ViewController_1.default));
exports.default = AutoShuffleTipsController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2RpZUF1dG9TaHVmZmxlL1NjcmlwdHMvQXV0b1NodWZmbGVUaXBzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQWdHO0FBQ2hHLDZEQUF3RDtBQUV4RDtJQUF1RCw2Q0FBYztJQUFyRTtRQUFBLHFFQWVDO1FBZEMsZUFBUyxHQUFHLDZCQUFtQixDQUFDO1FBQ2hDLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLFNBQVMsQ0FBQzs7SUFZekIsQ0FBQztJQVhDLHVEQUFtQixHQUFuQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELCtDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELG1EQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLGlCQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQWRrQix5QkFBeUI7UUFEN0MsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0FlN0M7SUFBRCxnQ0FBQztDQWZELEFBZUMsQ0Fmc0Qsd0JBQWMsR0FlcEU7a0JBZm9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IEF1dG9TaHVmZmxlVGlwc1ZpZXcgZnJvbSAnLi9BdXRvU2h1ZmZsZVRpcHNWaWV3JztcbkBtai5jbGFzcyhcIkF1dG9TaHVmZmxlVGlwc0NvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9TaHVmZmxlVGlwc0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IEF1dG9TaHVmZmxlVGlwc1ZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuUEFORUw7XG4gIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgdmlld0RpZExvYWQoKSB7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dcIik7XG4gIH1cbiAgcmVmcmVzaEZvclJldXNlKGUpIHtcbiAgICBzdXBlci5yZWZyZXNoRm9yUmV1c2UuY2FsbCh0aGlzLCBlKTtcbiAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dcIik7XG4gIH1cbn0iXX0=