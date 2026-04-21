"use strict";
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