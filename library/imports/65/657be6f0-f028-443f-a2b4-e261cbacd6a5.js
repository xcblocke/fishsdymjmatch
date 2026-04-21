"use strict";
cc._RF.push(module, '657bebw8ChEP6K04mHLrNal', 'TaskTrailEffView');
// subpackages/r_taskRewardProg/Scripts/TaskTrailEffView.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TrailEffType = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
exports.TrailEffType = {
    START: "start",
    END: "end"
};
var TaskTrailEffView = /** @class */ (function (_super) {
    __extends(TaskTrailEffView, _super);
    function TaskTrailEffView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spineTrail = null;
        return _this;
    }
    TaskTrailEffView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskTrailEffView.prototype.playEffect = function (e, t, i) {
        if (cc.isValid(this.node) && cc.isValid(this.node.parent)) {
            var n = this.node.parent.convertToNodeSpaceAR(e);
            this.node.setPosition(n);
            this.playSpineEffect(t, i);
        }
        else
            null == i || i();
    };
    TaskTrailEffView.prototype.playSpineEffect = function (e, t) {
        if (this.spineTrail && cc.isValid(this.spineTrail.node)) {
            CommonUtils_1.playSpineAnim(this.spineTrail, 1, e, function () {
                null == t || t();
            });
        }
        else {
            null == t || t();
        }
    };
    TaskTrailEffView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    TaskTrailEffView.prefabUrl = "prefabs/TaskTrailEff";
    TaskTrailEffView.bundleName = "r_taskRewardProg";
    __decorate([
        mj.component("spineTrail", sp.Skeleton)
    ], TaskTrailEffView.prototype, "spineTrail", void 0);
    TaskTrailEffView = __decorate([
        mj.class
    ], TaskTrailEffView);
    return TaskTrailEffView;
}(BaseUI_1.default));
exports.default = TaskTrailEffView;

cc._RF.pop();