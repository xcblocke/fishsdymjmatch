
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LoadingController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9a3fxBeB9Ll4BCStVkni0R', 'LoadingController');
// Scripts/LoadingController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var LoadingView_1 = require("./view/LoadingView");
var DGamePageShow_1 = require("./dot/DGamePageShow");
var TileNodePool_1 = require("./TileNodePool");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var LoadingController = /** @class */ (function (_super) {
    __extends(LoadingController, _super);
    function LoadingController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = LoadingView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        _this._model = null;
        return _this;
    }
    LoadingController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10001;
    };
    LoadingController.prototype.initDependRes = function () {
        var e = CardUtil_1.default.getAtlasName();
        this.preloadResMap.SpriteAtlas = [e];
    };
    LoadingController.prototype.viewDidShow = function (t) {
        _super.prototype.viewDidShow.call(this, t);
        var o = CardUtil_1.default.getAtlasName();
        this.getRes(o, cc.SpriteAtlas).addRef();
        DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LoadingPage);
        TileNodePool_1.TileNodePool.getInstance().preLoadNode();
    };
    LoadingController = __decorate([
        mj.class("LoadingController")
    ], LoadingController);
    return LoadingController;
}(ViewController_1.default));
exports.default = LoadingController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xvYWRpbmdDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RUFBaUY7QUFDakYsa0RBQTZDO0FBQzdDLHFEQUFxRTtBQUNyRSwrQ0FBOEM7QUFDOUMscURBQWdEO0FBRWhEO0lBQStDLHFDQUFjO0lBQTdEO1FBQUEscUVBbUJDO1FBbEJDLGVBQVMsR0FBRyxxQkFBVyxDQUFDO1FBQ3hCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixZQUFNLEdBQUcsSUFBSSxDQUFDOztJQWdCaEIsQ0FBQztJQWZDLHVDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QseUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLGtCQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsdUNBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxrQkFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QywrQkFBZSxDQUFDLEdBQUcsQ0FBQyw2QkFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLDJCQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQWxCa0IsaUJBQWlCO1FBRHJDLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0FtQnJDO0lBQUQsd0JBQUM7Q0FuQkQsQUFtQkMsQ0FuQjhDLHdCQUFjLEdBbUI1RDtrQkFuQm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4vZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IExvYWRpbmdWaWV3IGZyb20gJy4vdmlldy9Mb2FkaW5nVmlldyc7XG5pbXBvcnQgeyBEb3RHYW1lUGFnZVNob3csIEVQYWdlU2hvd1R5cGUgfSBmcm9tICcuL2RvdC9ER2FtZVBhZ2VTaG93JztcbmltcG9ydCB7IFRpbGVOb2RlUG9vbCB9IGZyb20gJy4vVGlsZU5vZGVQb29sJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuQG1qLmNsYXNzKFwiTG9hZGluZ0NvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBMb2FkaW5nVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5BTEVSVDtcbiAgX21vZGVsID0gbnVsbDtcbiAgdmlld0RpZExvYWQoKSB7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnJvb3RWaWV3LnpJbmRleCA9IDEwMDAxO1xuICB9XG4gIGluaXREZXBlbmRSZXMoKSB7XG4gICAgdmFyIGUgPSBDYXJkVXRpbC5nZXRBdGxhc05hbWUoKTtcbiAgICB0aGlzLnByZWxvYWRSZXNNYXAuU3ByaXRlQXRsYXMgPSBbZV07XG4gIH1cbiAgdmlld0RpZFNob3codCkge1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgdCk7XG4gICAgdmFyIG8gPSBDYXJkVXRpbC5nZXRBdGxhc05hbWUoKTtcbiAgICB0aGlzLmdldFJlcyhvLCBjYy5TcHJpdGVBdGxhcykuYWRkUmVmKCk7XG4gICAgRG90R2FtZVBhZ2VTaG93LmRvdChFUGFnZVNob3dUeXBlLkxvYWRpbmdQYWdlKTtcbiAgICBUaWxlTm9kZVBvb2wuZ2V0SW5zdGFuY2UoKS5wcmVMb2FkTm9kZSgpO1xuICB9XG59Il19