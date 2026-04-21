
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_outOfMatches/Scripts/OutOfMatchesUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c478eOag8ZMW6uJnMCVq970', 'OutOfMatchesUI');
// subpackages/r_outOfMatches/Scripts/OutOfMatchesUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var OutOfMatchesUI = /** @class */ (function (_super) {
    __extends(OutOfMatchesUI, _super);
    function OutOfMatchesUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bottomBg = null;
        _this.tipSpr = null;
        return _this;
    }
    OutOfMatchesUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    OutOfMatchesUI.prototype.playAnimation = function (t) {
        if (this.bottomBg && this.tipSpr) {
            this.bottomBg.opacity = 0;
            this.tipSpr.scale = 0;
            this.tipSpr.opacity = 0;
            cc.tween(this.bottomBg).to(0.4, {
                opacity: 178
            }, {
                easing: "sineInOut"
            }).start();
            cc.tween(this.tipSpr).parallel(cc.tween().to(0.4, {
                scale: 1
            }, {
                easing: "backOut"
            }), cc.tween().to(0.4, {
                opacity: 255
            }, {
                easing: "sineInOut"
            })).delay(0.5).call(function () {
                null == t || t();
            }).start();
        }
        else
            null == t || t();
    };
    OutOfMatchesUI.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    OutOfMatchesUI.prefabUrl = "prefabs/OutOfMatches";
    OutOfMatchesUI.bundleName = "r_outOfMatches";
    __decorate([
        mj.node("bottom_bg")
    ], OutOfMatchesUI.prototype, "bottomBg", void 0);
    __decorate([
        mj.node("bottom_bg/tip_spr")
    ], OutOfMatchesUI.prototype, "tipSpr", void 0);
    OutOfMatchesUI = __decorate([
        mj.class
    ], OutOfMatchesUI);
    return OutOfMatchesUI;
}(BaseUI_1.default));
exports.default = OutOfMatchesUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX291dE9mTWF0Y2hlcy9TY3JpcHRzL091dE9mTWF0Y2hlc1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFFMUQ7SUFBNEMsa0NBQU07SUFBbEQ7UUFBQSxxRUFvQ0M7UUFsQ0MsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFFN0IsWUFBTSxHQUF3QixJQUFJLENBQUM7O0lBZ0NyQyxDQUFDO0lBN0JDLCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzQ0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQzlCLE9BQU8sRUFBRSxHQUFHO2FBQ2IsRUFBRTtnQkFDRCxNQUFNLEVBQUUsV0FBVzthQUNwQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hELEtBQUssRUFBRSxDQUFDO2FBQ1QsRUFBRTtnQkFDRCxNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3JCLE9BQU8sRUFBRSxHQUFHO2FBQ2IsRUFBRTtnQkFDRCxNQUFNLEVBQUUsV0FBVzthQUNwQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7O1lBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0NBQVMsR0FBVDtRQUNFLGlCQUFNLFNBQVMsSUFBSSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUE5Qk0sd0JBQVMsR0FBRyxzQkFBc0IsQ0FBQztJQUNuQyx5QkFBVSxHQUFHLGdCQUFnQixDQUFDO0lBSnJDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7b0RBQ1E7SUFFN0I7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2tEQUNNO0lBSmhCLGNBQWM7UUFEbEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxjQUFjLENBb0NsQztJQUFELHFCQUFDO0NBcENELEFBb0NDLENBcEMyQyxnQkFBTSxHQW9DakQ7a0JBcENvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdXRPZk1hdGNoZXNVSSBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5ub2RlKFwiYm90dG9tX2JnXCIpXG4gIGJvdHRvbUJnOiBcImJvdHRvbV9iZ1wiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJib3R0b21fYmcvdGlwX3NwclwiKVxuICB0aXBTcHI6IFwiYm90dG9tX2JnL3RpcF9zcHJcIiA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvT3V0T2ZNYXRjaGVzXCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJyX291dE9mTWF0Y2hlc1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgcGxheUFuaW1hdGlvbih0KSB7XG4gICAgaWYgKHRoaXMuYm90dG9tQmcgJiYgdGhpcy50aXBTcHIpIHtcbiAgICAgIHRoaXMuYm90dG9tQmcub3BhY2l0eSA9IDA7XG4gICAgICB0aGlzLnRpcFNwci5zY2FsZSA9IDA7XG4gICAgICB0aGlzLnRpcFNwci5vcGFjaXR5ID0gMDtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuYm90dG9tQmcpLnRvKDAuNCwge1xuICAgICAgICBvcGFjaXR5OiAxNzhcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgY2MudHdlZW4odGhpcy50aXBTcHIpLnBhcmFsbGVsKGNjLnR3ZWVuKCkudG8oMC40LCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgIH0pLCBjYy50d2VlbigpLnRvKDAuNCwge1xuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICB9KSkuZGVsYXkoMC41KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIG51bGwgPT0gdCB8fCB0KCk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveSAmJiBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==