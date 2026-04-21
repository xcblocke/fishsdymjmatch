
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicVideoAd/Scripts/ClassicVideoAdController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '072aaK9gjtPDpjlPtXKSSec', 'ClassicVideoAdController');
// subpackages/l_classicVideoAd/Scripts/ClassicVideoAdController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ClassicVideoAdView_1 = require("./ClassicVideoAdView");
var ClassicVideoAdController = /** @class */ (function (_super) {
    __extends(ClassicVideoAdController, _super);
    function ClassicVideoAdController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ClassicVideoAdView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_classicVideoAd";
        return _this;
    }
    ClassicVideoAdController.prototype.onClickWatch = function () {
        this.close();
        var t = mj.getClassByName("ClassicVideoAdTrait");
        t && t.getInstance() && true === t.getInstance().eventEnabled && t.getInstance().onClickWatch();
    };
    ClassicVideoAdController.prototype.onClickRefuse = function () {
        this.close();
        var t = mj.getClassByName("ClassicVideoAdTrait");
        t && t.getInstance() && true === t.getInstance().eventEnabled && t.getInstance().onClickRefuse();
    };
    ClassicVideoAdController = __decorate([
        mj.class("ClassicVideoAdController")
    ], ClassicVideoAdController);
    return ClassicVideoAdController;
}(ViewController_1.default));
exports.default = ClassicVideoAdController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNWaWRlb0FkL1NjcmlwdHMvQ2xhc3NpY1ZpZGVvQWRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0c7QUFDaEcsMkRBQXNEO0FBRXREO0lBQXNELDRDQUFjO0lBQXBFO1FBQUEscUVBY0M7UUFiQyxlQUFTLEdBQUcsNEJBQWtCLENBQUM7UUFDL0IsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDO1FBQzFCLGdCQUFVLEdBQUcsa0JBQWtCLENBQUM7O0lBV2xDLENBQUM7SUFWQywrQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2pELENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2xHLENBQUM7SUFDRCxnREFBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2pELENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25HLENBQUM7SUFia0Isd0JBQXdCO1FBRDVDLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBYzVDO0lBQUQsK0JBQUM7Q0FkRCxBQWNDLENBZHFELHdCQUFjLEdBY25FO2tCQWRvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0NvbnRyb2xsZXIsIHsgdmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyJztcbmltcG9ydCBDbGFzc2ljVmlkZW9BZFZpZXcgZnJvbSAnLi9DbGFzc2ljVmlkZW9BZFZpZXcnO1xuQG1qLmNsYXNzKFwiQ2xhc3NpY1ZpZGVvQWRDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljVmlkZW9BZENvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gIHZpZXdDbGFzcyA9IENsYXNzaWNWaWRlb0FkVmlldztcbiAgdmlld01vZGUgPSB2aWV3TW9kZS5QQU5FTDtcbiAgYnVuZGxlTmFtZSA9IFwibF9jbGFzc2ljVmlkZW9BZFwiO1xuICBvbkNsaWNrV2F0Y2goKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJDbGFzc2ljVmlkZW9BZFRyYWl0XCIpO1xuICAgIHQgJiYgdC5nZXRJbnN0YW5jZSgpICYmIHRydWUgPT09IHQuZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQgJiYgdC5nZXRJbnN0YW5jZSgpLm9uQ2xpY2tXYXRjaCgpO1xuICB9XG4gIG9uQ2xpY2tSZWZ1c2UoKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJDbGFzc2ljVmlkZW9BZFRyYWl0XCIpO1xuICAgIHQgJiYgdC5nZXRJbnN0YW5jZSgpICYmIHRydWUgPT09IHQuZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQgJiYgdC5nZXRJbnN0YW5jZSgpLm9uQ2xpY2tSZWZ1c2UoKTtcbiAgfVxufSJdfQ==