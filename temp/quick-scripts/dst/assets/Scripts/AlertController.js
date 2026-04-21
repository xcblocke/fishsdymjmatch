
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AlertController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24473u9NEBG0JC1k5S/JoHk', 'AlertController');
// Scripts/AlertController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var AlertView_1 = require("./view/AlertView");
var AlertController = /** @class */ (function (_super) {
    __extends(AlertController, _super);
    function AlertController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = AlertView_1.default;
        _this.viewMode = ViewController_1.viewMode.ALERT;
        return _this;
    }
    AlertController.prototype.getMessageListeners = function () {
        return {};
    };
    AlertController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this.viewDoAction("show", this.args);
    };
    AlertController.prototype.refreshForReuse = function (t) {
        _super.prototype.refreshForReuse.call(this, t);
        this.viewDoAction("show", t);
    };
    AlertController = __decorate([
        mj.class("AlertController")
    ], AlertController);
    return AlertController;
}(ViewController_1.default));
exports.default = AlertController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FsZXJ0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQWlGO0FBQ2pGLDhDQUF5QztBQUV6QztJQUE2QyxtQ0FBYztJQUEzRDtRQUFBLHFFQWNDO1FBYkMsZUFBUyxHQUFHLG1CQUFTLENBQUM7UUFDdEIsY0FBUSxHQUFHLHlCQUFRLENBQUMsS0FBSyxDQUFDOztJQVk1QixDQUFDO0lBWEMsNkNBQW1CLEdBQW5CO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QscUNBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCx5Q0FBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixpQkFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBYmtCLGVBQWU7UUFEbkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0FjbkM7SUFBRCxzQkFBQztDQWRELEFBY0MsQ0FkNEMsd0JBQWMsR0FjMUQ7a0JBZG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0NvbnRyb2xsZXIsIHsgdmlld01vZGUgfSBmcm9tICcuL2ZyYW1ld29yay9jb250cm9sbGVyL1ZpZXdDb250cm9sbGVyJztcbmltcG9ydCBBbGVydFZpZXcgZnJvbSAnLi92aWV3L0FsZXJ0Vmlldyc7XG5AbWouY2xhc3MoXCJBbGVydENvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0Q29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gQWxlcnRWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLkFMRVJUO1xuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd1wiLCB0aGlzLmFyZ3MpO1xuICB9XG4gIHJlZnJlc2hGb3JSZXVzZSh0KSB7XG4gICAgc3VwZXIucmVmcmVzaEZvclJldXNlLmNhbGwodGhpcywgdCk7XG4gICAgdGhpcy52aWV3RG9BY3Rpb24oXCJzaG93XCIsIHQpO1xuICB9XG59Il19