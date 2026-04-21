
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2TipsController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c05aceGVpPFZz2RRuj9KOf', 'Tile2TipsController');
// Scripts/Tile2TipsController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var Tile2TipsView_1 = require("./view/Tile2TipsView");
var Tile2TipsController = /** @class */ (function (_super) {
    __extends(Tile2TipsController, _super);
    function Tile2TipsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = Tile2TipsView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    Tile2TipsController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10001;
    };
    Tile2TipsController.prototype.initDependRes = function () { };
    Tile2TipsController.prototype.getMessageListeners = function () {
        var _e;
        var t = this;
        return _e;
    };
    Tile2TipsController = __decorate([
        mj.class("Tile2TipsController")
    ], Tile2TipsController);
    return Tile2TipsController;
}(ViewController_1.default));
exports.default = Tile2TipsController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyVGlwc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdFQUFpRjtBQUNqRixzREFBaUQ7QUFFakQ7SUFBaUQsdUNBQWM7SUFBL0Q7UUFBQSxxRUFhQztRQVpDLGVBQVMsR0FBRyx1QkFBYSxDQUFDO1FBQzFCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQzs7SUFXNUIsQ0FBQztJQVZDLHlDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBQ0QsMkNBQWEsR0FBYixjQUFpQixDQUFDO0lBQ2xCLGlEQUFtQixHQUFuQjtRQUNFLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBWmtCLG1CQUFtQjtRQUR2QyxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBYXZDO0lBQUQsMEJBQUM7Q0FiRCxBQWFDLENBYmdELHdCQUFjLEdBYTlEO2tCQWJvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0NvbnRyb2xsZXIsIHsgdmlld01vZGUgfSBmcm9tICcuL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyJztcbmltcG9ydCBUaWxlMlRpcHNWaWV3IGZyb20gJy4vdmlldy9UaWxlMlRpcHNWaWV3JztcbkBtai5jbGFzcyhcIlRpbGUyVGlwc0NvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyVGlwc0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IFRpbGUyVGlwc1ZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuQUxFUlQ7XG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yb290Vmlldy56SW5kZXggPSAxMDAwMTtcbiAgfVxuICBpbml0RGVwZW5kUmVzKCkge31cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX2U7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHJldHVybiBfZTtcbiAgfVxufSJdfQ==