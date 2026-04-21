"use strict";
cc._RF.push(module, 'e9949dAJRVGWI8+PRMek39j', 'TaskBoxLightView');
// subpackages/r_taskRewardProg/Scripts/TaskBoxLightView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var TaskBoxLightView = /** @class */ (function (_super) {
    __extends(TaskBoxLightView, _super);
    function TaskBoxLightView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineBox = null;
        _this.isShown = false;
        return _this;
    }
    TaskBoxLightView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskBoxLightView.prototype.playAnimation = function (e, t, i) {
        if (this.isShown)
            null == i || i();
        else {
            this.isShown = true;
            var n = this.findBoxNode(e, t);
            n && this.alignToTarget(n);
            this.playBoxSpineAnimation(t, function () {
                null == i || i();
            });
        }
    };
    TaskBoxLightView.prototype.findBoxNode = function (e, t) {
        if (!cc.isValid(e) || !cc.isValid(e.node))
            return null;
        var i = "content/box/btn_box_close" + t, n = cc.find(i, e.node);
        return cc.isValid(n) ? n : null;
    };
    TaskBoxLightView.prototype.alignToTarget = function (e) {
        if (cc.isValid(this.node) && cc.isValid(e) && cc.isValid(this.node.parent) && this.spineBox && cc.isValid(this.spineBox.node)) {
            var t = e.convertToWorldSpaceAR(cc.v2(0, 0)), i = this.node.parent.convertToNodeSpaceAR(t);
            this.spineBox.node.setPosition(cc.v3(i.x, i.y, 0));
        }
    };
    TaskBoxLightView.prototype.playBoxSpineAnimation = function (e, t) {
        if (this.spineBox && cc.isValid(this.spineBox.node)) {
            var i = "in" + e;
            CommonUtils_1.playSpineAnim(this.spineBox, 1, i, function () {
                null == t || t();
            });
        }
        else
            null == t || t();
    };
    TaskBoxLightView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.isShown = false;
    };
    TaskBoxLightView.prefabUrl = "prefabs/TaskBoxLight";
    TaskBoxLightView.bundleName = "r_taskRewardProg";
    __decorate([
        mj.component("spine_box", sp.Skeleton)
    ], TaskBoxLightView.prototype, "spineBox", void 0);
    TaskBoxLightView = __decorate([
        mj.class
    ], TaskBoxLightView);
    return TaskBoxLightView;
}(BaseUI_1.default));
exports.default = TaskBoxLightView;

cc._RF.pop();