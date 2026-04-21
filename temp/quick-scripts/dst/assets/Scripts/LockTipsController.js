
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LockTipsController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87a47DwKj9BCKoNRwPHvnuz', 'LockTipsController');
// Scripts/LockTipsController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var LockTipsView_1 = require("./LockTipsView");
var LockTipsController = /** @class */ (function (_super) {
    __extends(LockTipsController, _super);
    function LockTipsController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = LockTipsView_1.default;
        _this.viewMode = ViewController_1.viewMode.PANEL;
        return _this;
    }
    LockTipsController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
    };
    LockTipsController.prototype.initDependRes = function () { };
    LockTipsController.prototype.getMessageListeners = function () {
        return {};
    };
    LockTipsController.prototype.viewDidShow = function (t) {
        var o, n, i;
        _super.prototype.viewDidShow.call(this, t);
        var r = t ? t.tips : null === (o = this.args) || void 0 === o ? void 0 : o.tips, a = t ? t.tipPos : null === (n = this.args) || void 0 === n ? void 0 : n.tipPos, l = t ? t.tipDelayTime : null === (i = this.args) || void 0 === i ? void 0 : i.tipDelayTime;
        if (r) {
            this.viewDoAction("showTips", r, a, l);
        }
        else {
            this.close();
        }
    };
    LockTipsController.prototype.viewDidHide = function () {
        _super.prototype.viewDidHide.call(this);
        this.close();
    };
    LockTipsController = __decorate([
        mj.class("LockTipsController")
    ], LockTipsController);
    return LockTipsController;
}(ViewController_1.default));
exports.default = LockTipsController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xvY2tUaXBzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQWlGO0FBQ2pGLCtDQUEwQztBQUUxQztJQUFnRCxzQ0FBYztJQUE5RDtRQUFBLHFFQTBCQztRQXpCQyxlQUFTLEdBQUcsc0JBQVksQ0FBQztRQUN6QixjQUFRLEdBQUcseUJBQVEsQ0FBQyxLQUFLLENBQUM7O0lBd0I1QixDQUFDO0lBdkJDLHdDQUFXLEdBQVg7UUFDRSxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCwwQ0FBYSxHQUFiLGNBQWlCLENBQUM7SUFDbEIsZ0RBQW1CLEdBQW5CO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0Qsd0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQzdFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFDL0UsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQzlGLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBQ0Qsd0NBQVcsR0FBWDtRQUNFLGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQXpCa0Isa0JBQWtCO1FBRHRDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0EwQnRDO0lBQUQseUJBQUM7Q0ExQkQsQUEwQkMsQ0ExQitDLHdCQUFjLEdBMEI3RDtrQkExQm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwgeyB2aWV3TW9kZSB9IGZyb20gJy4vZnJhbWV3b3JrL2NvbnRyb2xsZXIvVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IExvY2tUaXBzVmlldyBmcm9tICcuL0xvY2tUaXBzVmlldyc7XG5AbWouY2xhc3MoXCJMb2NrVGlwc0NvbnRyb2xsZXJcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2tUaXBzQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcbiAgdmlld0NsYXNzID0gTG9ja1RpcHNWaWV3O1xuICB2aWV3TW9kZSA9IHZpZXdNb2RlLlBBTkVMO1xuICB2aWV3RGlkTG9hZCgpIHtcbiAgICBzdXBlci52aWV3RGlkTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGluaXREZXBlbmRSZXMoKSB7fVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB2aWV3RGlkU2hvdyh0KSB7XG4gICAgdmFyIG8sIG4sIGk7XG4gICAgc3VwZXIudmlld0RpZFNob3cuY2FsbCh0aGlzLCB0KTtcbiAgICB2YXIgciA9IHQgPyB0LnRpcHMgOiBudWxsID09PSAobyA9IHRoaXMuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby50aXBzLFxuICAgICAgYSA9IHQgPyB0LnRpcFBvcyA6IG51bGwgPT09IChuID0gdGhpcy5hcmdzKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuLnRpcFBvcyxcbiAgICAgIGwgPSB0ID8gdC50aXBEZWxheVRpbWUgOiBudWxsID09PSAoaSA9IHRoaXMuYXJncykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS50aXBEZWxheVRpbWU7XG4gICAgaWYgKHIpIHtcbiAgICAgIHRoaXMudmlld0RvQWN0aW9uKFwic2hvd1RpcHNcIiwgciwgYSwgbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgdmlld0RpZEhpZGUoKSB7XG4gICAgc3VwZXIudmlld0RpZEhpZGUuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cbn0iXX0=