"use strict";
cc._RF.push(module, '919afsaempLp4hS3PrBQE4j', 'TopTouchView');
// Scripts/view/TopTouchView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../Config");
var UIView_1 = require("../framework/ui/UIView");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TopTouchView = /** @class */ (function (_super) {
    __extends(TopTouchView, _super);
    function TopTouchView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopTouchView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTouchEvent(this.onTouchStart.bind(this), this.onTouchMove.bind(this), this.onTouchEnd.bind(this), this.onTouchCancel.bind(this));
    };
    TopTouchView.prototype.onTouchStart = function (e, t) {
        this.touchStartEvent(e, t);
        mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START, e, t);
        return false;
    };
    TopTouchView.prototype.onTouchMove = function (e, t) {
        mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_MOVE, e, t);
    };
    TopTouchView.prototype.onTouchEnd = function (e, t) {
        mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_END, e, t);
    };
    TopTouchView.prototype.onTouchCancel = function (e, t) {
        mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_CANCEL, e, t);
    };
    TopTouchView.prototype.touchStartEvent = function () { };
    TopTouchView.prefabUrl = "prefabs/common/TopTouch";
    __decorate([
        mj.traitEvent("TopTouchView_start")
    ], TopTouchView.prototype, "touchStartEvent", null);
    TopTouchView = __decorate([
        mj.class
    ], TopTouchView);
    return TopTouchView;
}(UIView_1.default));
exports.default = TopTouchView;

cc._RF.pop();