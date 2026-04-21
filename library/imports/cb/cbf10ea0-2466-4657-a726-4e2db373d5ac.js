"use strict";
cc._RF.push(module, 'cbf106gJGZGV6cmTi2zc9Ws', 'TaskTipView');
// subpackages/l_task/Scripts/view/TaskTipView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var TaskTipView = /** @class */ (function (_super) {
    __extends(TaskTipView, _super);
    function TaskTipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        return _this;
    }
    TaskTipView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.reset();
    };
    TaskTipView.prototype.reset = function () {
        if (cc.isValid(this.node)) {
            this.node.opacity = 0;
            this.node.scale = 1;
            this.node.active = false;
        }
    };
    TaskTipView.prototype.showTip = function (t) {
        var e = this;
        cc.isValid(this.titleLabel) && (this.titleLabel.string = t || "");
        this.node.setPosition(0, 0);
        cc.Tween.stopAllByTarget(this.node);
        this.node.active = true;
        this.node.opacity = 0;
        this.node.scale = 0.5;
        cc.tween(this.node).to(0.1, {
            opacity: 255,
            scale: 1
        }, {
            easing: cc.easing.sineOut
        }).delay(1).to(0.1, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).call(function () {
            e.node.active = false;
        }).start();
    };
    TaskTipView.prototype.hideTip = function () {
        var t = this;
        cc.Tween.stopAllByTarget(this.node);
        cc.isValid(this.node) && cc.tween(this.node).to(0.1, {
            opacity: 0
        }, {
            easing: cc.easing.sineInOut
        }).call(function () {
            t.node.active = false;
        }).start();
    };
    TaskTipView.prefabUrl = "prefabs/task/TaskTip";
    __decorate([
        mj.component("tipBg/lb_title", cc.Label)
    ], TaskTipView.prototype, "titleLabel", void 0);
    TaskTipView = __decorate([
        mj.class
    ], TaskTipView);
    return TaskTipView;
}(BaseUI_1.default));
exports.default = TaskTipView;

cc._RF.pop();