
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicOver/Scripts/ClassicLoseController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7da02LCNAZAKLPclHagKzZw', 'ClassicLoseController');
// subpackages/l_classicOver/Scripts/ClassicLoseController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var ClassicLoseView_1 = require("./ClassicLoseView");
var ClassicLoseController = /** @class */ (function (_super) {
    __extends(ClassicLoseController, _super);
    function ClassicLoseController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = ClassicLoseView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_classicOver";
        return _this;
    }
    ClassicLoseController.prototype.viewDidShow = function (t) {
        t = null != t ? t : this.args;
        _super.prototype.viewDidShow.call(this, t);
        this.viewDoAction("showView", t.data);
    };
    ClassicLoseController = __decorate([
        mj.class("ClassicLoseController")
    ], ClassicLoseController);
    return ClassicLoseController;
}(ViewController_1.default));
exports.default = ClassicLoseController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNPdmVyL1NjcmlwdHMvQ2xhc3NpY0xvc2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0c7QUFDaEcscURBQWdEO0FBRWhEO0lBQW1ELHlDQUFjO0lBQWpFO1FBQUEscUVBU0M7UUFSQyxlQUFTLEdBQUcseUJBQWUsQ0FBQztRQUM1QixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsZ0JBQVUsR0FBRyxlQUFlLENBQUM7O0lBTS9CLENBQUM7SUFMQywyQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFSa0IscUJBQXFCO1FBRHpDLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0FTekM7SUFBRCw0QkFBQztDQVRELEFBU0MsQ0FUa0Qsd0JBQWMsR0FTaEU7a0JBVG9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IENsYXNzaWNMb3NlVmlldyBmcm9tICcuL0NsYXNzaWNMb3NlVmlldyc7XG5AbWouY2xhc3MoXCJDbGFzc2ljTG9zZUNvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzaWNMb3NlQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gQ2xhc3NpY0xvc2VWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLlBBTkVMO1xuICBidW5kbGVOYW1lID0gXCJsX2NsYXNzaWNPdmVyXCI7XG4gIHZpZXdEaWRTaG93KHQpIHtcbiAgICB0ID0gbnVsbCAhPSB0ID8gdCA6IHRoaXMuYXJncztcbiAgICBzdXBlci52aWV3RGlkU2hvdy5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd1ZpZXdcIiwgdC5kYXRhKTtcbiAgfVxufSJdfQ==