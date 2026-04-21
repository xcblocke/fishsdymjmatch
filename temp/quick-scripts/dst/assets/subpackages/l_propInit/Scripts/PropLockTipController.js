
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_propInit/Scripts/PropLockTipController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c33ff4n9MZFp5OIx34+hQwj', 'PropLockTipController');
// subpackages/l_propInit/Scripts/PropLockTipController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("../../../Scripts/framework/controller/ViewController");
var PropLockTipView_1 = require("./PropLockTipView");
var PropLockTipController = /** @class */ (function (_super) {
    __extends(PropLockTipController, _super);
    function PropLockTipController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = PropLockTipView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        _this.bundleName = "l_propInit";
        return _this;
    }
    PropLockTipController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    PropLockTipController.prototype.initDependRes = function () { };
    PropLockTipController.prototype.viewDidShow = function (e) {
        var r, o, i;
        _super.prototype.viewDidShow.call(this, e);
        var n = e ? e.tips : null === (r = this.args) || void 0 === r ? void 0 : r.tips, a = e ? e.tipPos : null === (o = this.args) || void 0 === o ? void 0 : o.tipPos, p = e ? e.tipDelayTime : null === (i = this.args) || void 0 === i ? void 0 : i.tipDelayTime;
        if (n) {
            this.viewDoAction("showTips", n, a, p);
        }
        else {
            this.close();
        }
    };
    PropLockTipController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
        this.close();
    };
    PropLockTipController = __decorate([
        mj.class("PropLockTipController")
    ], PropLockTipController);
    return PropLockTipController;
}(ViewController_1.default));
exports.default = PropLockTipController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Byb3BJbml0L1NjcmlwdHMvUHJvcExvY2tUaXBDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBZ0c7QUFDaEcscURBQWdEO0FBRWhEO0lBQW1ELHlDQUFjO0lBQWpFO1FBQUEscUVBd0JDO1FBdkJDLGVBQVMsR0FBRyx5QkFBZSxDQUFDO1FBQzVCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixnQkFBVSxHQUFHLFlBQVksQ0FBQzs7SUFxQjVCLENBQUM7SUFwQkMsMkNBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELDZDQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUNsQiwyQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDN0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUMvRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDOUYsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7SUFDRCwyQ0FBVyxHQUFYO1FBQ0UsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBdkJrQixxQkFBcUI7UUFEekMsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQXdCekM7SUFBRCw0QkFBQztDQXhCRCxBQXdCQyxDQXhCa0Qsd0JBQWMsR0F3QmhFO2tCQXhCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdDb250cm9sbGVyLCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5pbXBvcnQgUHJvcExvY2tUaXBWaWV3IGZyb20gJy4vUHJvcExvY2tUaXBWaWV3JztcbkBtai5jbGFzcyhcIlByb3BMb2NrVGlwQ29udHJvbGxlclwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvcExvY2tUaXBDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuICB2aWV3Q2xhc3MgPSBQcm9wTG9ja1RpcFZpZXc7XG4gIHZpZXdNb2RlID0gdmlld01vZGUuUEFORUw7XG4gIGJ1bmRsZU5hbWUgPSBcImxfcHJvcEluaXRcIjtcbiAgdmlld0RpZExvYWQoKSB7XG4gICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBpbml0RGVwZW5kUmVzKCkge31cbiAgdmlld0RpZFNob3coZSkge1xuICAgIHZhciByLCBvLCBpO1xuICAgIHN1cGVyLnZpZXdEaWRTaG93LmNhbGwodGhpcywgZSk7XG4gICAgdmFyIG4gPSBlID8gZS50aXBzIDogbnVsbCA9PT0gKHIgPSB0aGlzLmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIudGlwcyxcbiAgICAgIGEgPSBlID8gZS50aXBQb3MgOiBudWxsID09PSAobyA9IHRoaXMuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby50aXBQb3MsXG4gICAgICBwID0gZSA/IGUudGlwRGVsYXlUaW1lIDogbnVsbCA9PT0gKGkgPSB0aGlzLmFyZ3MpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkudGlwRGVsYXlUaW1lO1xuICAgIGlmIChuKSB7XG4gICAgICB0aGlzLnZpZXdEb0FjdGlvbihcInNob3dUaXBzXCIsIG4sIGEsIHApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG4gIHZpZXdEaWRIaWRlKCkge1xuICAgIHN1cGVyLnZpZXdEaWRIaWRlLmNhbGwodGhpcyk7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG59Il19