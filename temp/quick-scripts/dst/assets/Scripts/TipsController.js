
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TipsController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e52d6geMmFD+ZG+mF3ro8JD', 'TipsController');
// Scripts/TipsController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var TipsView_1 = require("./view/TipsView");
var TipsController = /** @class */ (function (_super) {
    __extends(TipsController, _super);
    function TipsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = TipsView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    TipsController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.rootView.zIndex = 10001;
    };
    TipsController.prototype.initDependRes = function () { };
    TipsController.prototype.getMessageListeners = function () {
        var e = this;
        return {
            SHOWTIPS: function (t, o) {
                e.viewDoAction("showTips", t, o);
            },
            SHOWRICHTIPS: function (t, o) {
                e.viewDoAction("showRichTips", t, o);
            }
        };
    };
    TipsController = __decorate([
        mj.class("TipsController")
    ], TipsController);
    return TipsController;
}(ViewController_1.default));
exports.default = TipsController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpcHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3RUFBaUY7QUFDakYsNENBQXVDO0FBRXZDO0lBQTRDLGtDQUFjO0lBQTFEO1FBQUEscUVBbUJDO1FBbEJDLGVBQVMsR0FBRyxrQkFBUSxDQUFDO1FBQ3JCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQzs7SUFpQjVCLENBQUM7SUFoQkMsb0NBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFDRCxzQ0FBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsNENBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUNELFlBQVksRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDO2dCQUMxQixDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBbEJrQixjQUFjO1FBRGxDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDTixjQUFjLENBbUJsQztJQUFELHFCQUFDO0NBbkJELEFBbUJDLENBbkIyQyx3QkFBYyxHQW1CekQ7a0JBbkJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgVGlwc1ZpZXcgZnJvbSAnLi92aWV3L1RpcHNWaWV3JztcbkBtai5jbGFzcyhcIlRpcHNDb250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXBzQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gVGlwc1ZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuQUxFUlQ7XG4gIHZpZXdEaWRMb2FkKCkge1xuICAgIHN1cGVyLnZpZXdEaWRMb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5yb290Vmlldy56SW5kZXggPSAxMDAwMTtcbiAgfVxuICBpbml0RGVwZW5kUmVzKCkge31cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNIT1dUSVBTOiBmdW5jdGlvbiAodCwgbykge1xuICAgICAgICBlLnZpZXdEb0FjdGlvbihcInNob3dUaXBzXCIsIHQsIG8pO1xuICAgICAgfSxcbiAgICAgIFNIT1dSSUNIVElQUzogZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgICAgZS52aWV3RG9BY3Rpb24oXCJzaG93UmljaFRpcHNcIiwgdCwgbyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufSJdfQ==