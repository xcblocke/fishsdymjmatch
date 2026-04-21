
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/ui/UIView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d66eM+gv1CY4QsITTHQl97', 'UIView');
// Scripts/framework/ui/UIView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("./BaseUI");
var ViewController_1 = require("../controller/ViewController");
var UIView = /** @class */ (function (_super) {
    __extends(UIView, _super);
    function UIView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delegate = null;
        _this.clickBgClose = false;
        return _this;
    }
    UIView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    UIView.prototype.start = function () {
        var t = this;
        _super.prototype.start && _super.prototype.start.call(this);
        if (this.delegate) {
            if (this.delegate.viewClass === this.constructor) {
                this.delegate.onStart();
                this.clickBgClose && this.delegate.viewMode !== ViewController_1.viewMode.SCENE && this.OnButtonClick(this.node, function () {
                    t.delegate.close();
                });
            }
            else
                assert(false, "UIView的delegate类型不匹配。UIView需要和ViewController一对一配对，子界面请使用BaseUI: " + (mj.getClassName(this.constructor) || this.constructor.name));
        }
        else
            assert(false, "UIView需要和ViewController配对使用。如果是子界面，请使用BaseUI: " + (mj.getClassName(this.constructor) || this.constructor.name));
    };
    UIView.prototype.getRes = function (e, t) {
        if (t === void 0) { t = cc.Asset; }
        assert(false, "UIView中的资源获取应由delegate（Controller）管理：this.delegate.getRes() [" + mj.getClassName(this.constructor) + "]");
        return null;
    };
    UIView.prototype.loadRes = function (e, t) {
        if (t === void 0) { t = cc.Asset; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                assert(false, "UIView中的资源加载应由delegate（Controller）管理：this.delegate.loadRes() [" + mj.getClassName(this.constructor) + "]");
                return [2 /*return*/, null];
            });
        });
    };
    UIView.prototype.onDestroy = function () {
        var t;
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        null === (t = this.delegate) || void 0 === t || t.onUIDestroy();
    };
    UIView.prototype.onEnable = function () {
        var t;
        _super.prototype.onEnable && _super.prototype.onEnable.call(this);
        null === (t = this.delegate) || void 0 === t || t.onUIEnable();
    };
    UIView.prototype.onDisable = function () {
        var t;
        _super.prototype.onDisable && _super.prototype.onDisable.call(this);
        null === (t = this.delegate) || void 0 === t || t.onUIDisable();
    };
    UIView.prefabUrl = "";
    UIView = __decorate([
        mj.class
    ], UIView);
    return UIView;
}(BaseUI_1.default));
exports.default = UIView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUM5QiwrREFBd0Q7QUFFeEQ7SUFBb0MsMEJBQU07SUFBMUM7UUFBQSxxRUEwQ0M7UUF6Q0MsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixrQkFBWSxHQUFHLEtBQUssQ0FBQzs7SUF3Q3ZCLENBQUM7SUF0Q0MsdUJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHNCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixpQkFBTSxLQUFLLElBQUksaUJBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLHlCQUFRLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDOUYsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQUM7YUFDSjs7Z0JBQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxrRUFBa0UsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN6Sjs7WUFBTSxNQUFNLENBQUMsS0FBSyxFQUFFLGdEQUFnRCxHQUFHLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFDRCx1QkFBTSxHQUFOLFVBQU8sQ0FBQyxFQUFFLENBQVk7UUFBWixrQkFBQSxFQUFBLElBQUksRUFBRSxDQUFDLEtBQUs7UUFDcEIsTUFBTSxDQUFDLEtBQUssRUFBRSwrREFBK0QsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN6SCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSyx3QkFBTyxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQVk7UUFBWixrQkFBQSxFQUFBLElBQUksRUFBRSxDQUFDLEtBQUs7OztnQkFDM0IsTUFBTSxDQUFDLEtBQUssRUFBRSxnRUFBZ0UsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDMUgsc0JBQU8sSUFBSSxFQUFDOzs7S0FDYjtJQUNELDBCQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLFNBQVMsSUFBSSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsRSxDQUFDO0lBQ0QseUJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sUUFBUSxJQUFJLGlCQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFDRCwwQkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxTQUFTLElBQUksaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQXRDTSxnQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUhILE1BQU07UUFEMUIsRUFBRSxDQUFDLEtBQUs7T0FDWSxNQUFNLENBMEMxQjtJQUFELGFBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ21DLGdCQUFNLEdBMEN6QztrQkExQ29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4vQmFzZVVJJztcbmltcG9ydCB7IHZpZXdNb2RlIH0gZnJvbSAnLi4vY29udHJvbGxlci9WaWV3Q29udHJvbGxlcic7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJVmlldyBleHRlbmRzIEJhc2VVSSB7XG4gIGRlbGVnYXRlID0gbnVsbDtcbiAgY2xpY2tCZ0Nsb3NlID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcIlwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgc3RhcnQoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHN1cGVyLnN0YXJ0ICYmIHN1cGVyLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuZGVsZWdhdGUpIHtcbiAgICAgIGlmICh0aGlzLmRlbGVnYXRlLnZpZXdDbGFzcyA9PT0gdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLm9uU3RhcnQoKTtcbiAgICAgICAgdGhpcy5jbGlja0JnQ2xvc2UgJiYgdGhpcy5kZWxlZ2F0ZS52aWV3TW9kZSAhPT0gdmlld01vZGUuU0NFTkUgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMubm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHQuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgYXNzZXJ0KGZhbHNlLCBcIlVJVmlld+eahGRlbGVnYXRl57G75Z6L5LiN5Yy56YWN44CCVUlWaWV36ZyA6KaB5ZKMVmlld0NvbnRyb2xsZXLkuIDlr7nkuIDphY3lr7nvvIzlrZDnlYzpnaLor7fkvb/nlKhCYXNlVUk6IFwiICsgKG1qLmdldENsYXNzTmFtZSh0aGlzLmNvbnN0cnVjdG9yKSB8fCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpKTtcbiAgICB9IGVsc2UgYXNzZXJ0KGZhbHNlLCBcIlVJVmlld+mcgOimgeWSjFZpZXdDb250cm9sbGVy6YWN5a+55L2/55So44CC5aaC5p6c5piv5a2Q55WM6Z2i77yM6K+35L2/55SoQmFzZVVJOiBcIiArIChtai5nZXRDbGFzc05hbWUodGhpcy5jb25zdHJ1Y3RvcikgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSk7XG4gIH1cbiAgZ2V0UmVzKGUsIHQgPSBjYy5Bc3NldCkge1xuICAgIGFzc2VydChmYWxzZSwgXCJVSVZpZXfkuK3nmoTotYTmupDojrflj5blupTnlLFkZWxlZ2F0Ze+8iENvbnRyb2xsZXLvvInnrqHnkIbvvJp0aGlzLmRlbGVnYXRlLmdldFJlcygpIFtcIiArIG1qLmdldENsYXNzTmFtZSh0aGlzLmNvbnN0cnVjdG9yKSArIFwiXVwiKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBhc3luYyBsb2FkUmVzKGUsIHQgPSBjYy5Bc3NldCkge1xuICAgIGFzc2VydChmYWxzZSwgXCJVSVZpZXfkuK3nmoTotYTmupDliqDovb3lupTnlLFkZWxlZ2F0Ze+8iENvbnRyb2xsZXLvvInnrqHnkIbvvJp0aGlzLmRlbGVnYXRlLmxvYWRSZXMoKSBbXCIgKyBtai5nZXRDbGFzc05hbWUodGhpcy5jb25zdHJ1Y3RvcikgKyBcIl1cIik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHZhciB0O1xuICAgIHN1cGVyLm9uRGVzdHJveSAmJiBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0Lm9uVUlEZXN0cm95KCk7XG4gIH1cbiAgb25FbmFibGUoKSB7XG4gICAgdmFyIHQ7XG4gICAgc3VwZXIub25FbmFibGUgJiYgc3VwZXIub25FbmFibGUuY2FsbCh0aGlzKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0Lm9uVUlFbmFibGUoKTtcbiAgfVxuICBvbkRpc2FibGUoKSB7XG4gICAgdmFyIHQ7XG4gICAgc3VwZXIub25EaXNhYmxlICYmIHN1cGVyLm9uRGlzYWJsZS5jYWxsKHRoaXMpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSB0IHx8IHQub25VSURpc2FibGUoKTtcbiAgfVxufSJdfQ==