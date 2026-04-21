"use strict";
cc._RF.push(module, '69baelkhI1C3ZSGj2A7zwAv', 'TaskBoxTipView');
// subpackages/l_task/Scripts/view/TaskBoxTipView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSpine");
var IUserData_1 = require("../../../../Scripts/user/IUserData");
var TaskBoxTipView = /** @class */ (function (_super) {
    __extends(TaskBoxTipView, _super);
    function TaskBoxTipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxAnim = null;
        _this.blockBtn = null;
        _this.hintTipIcon = null;
        _this.refreshTipIcon = null;
        _this.hintTipValue = null;
        _this.refreshTipValue = null;
        _this.undoTipIcon = null;
        _this.undoTipValue = null;
        _this.animProxy = null;
        _this.showRewardsNodes = [];
        return _this;
    }
    TaskBoxTipView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initSpine();
        this.registerEvents();
    };
    TaskBoxTipView.prototype.registerEvents = function () {
        this.OnButtonClick(this.blockBtn, this.onBlockBtnClick.bind(this));
    };
    TaskBoxTipView.prototype.onBlockBtnClick = function () {
        this.playOut();
    };
    TaskBoxTipView.prototype.hideRewardsNodes = function () {
        this.refreshTipIcon.active = false;
        this.refreshTipValue.active = false;
        this.hintTipIcon.active = false;
        this.hintTipValue.active = false;
        this.undoTipIcon.active = false;
        this.undoTipValue.active = false;
    };
    TaskBoxTipView.prototype.initBoxReward = function (t) {
        var e = this;
        this.hideRewardsNodes();
        var a = function a(t, a, o) {
            if (t && a) {
                e.animProxy.attachNode("hook_icon_" + o, function () {
                    return t;
                });
                e.animProxy.attachNode("hook_num_" + o, function () {
                    return a;
                });
            }
        };
        this.showRewardsNodes = [];
        for (var o = 0; o < t.Items.length; o++) {
            var i = t.Items[o], r = t.Counts[o], n = this.getRewardNodes(i), s = n.icon, l = n.value;
            if (s && l) {
                l.getComponent(cc.Label).string = String(r);
                this.showRewardsNodes.push(s, l);
                a(s, l, o + 1);
            }
        }
    };
    TaskBoxTipView.prototype.getRewardNodes = function (t) {
        switch (t) {
            case IUserData_1.EItemType.Hint:
                return {
                    icon: this.hintTipIcon,
                    value: this.hintTipValue
                };
            case IUserData_1.EItemType.Shuffle:
                return {
                    icon: this.refreshTipIcon,
                    value: this.refreshTipValue
                };
            case IUserData_1.EItemType.Undo:
                return {
                    icon: this.undoTipIcon,
                    value: this.undoTipValue
                };
        }
        return {
            icon: null,
            value: null
        };
    };
    TaskBoxTipView.prototype.initSpine = function () {
        if (cc.isValid(this.boxAnim) && this.boxAnim.getComponent(sp.Skeleton)) {
            this.animProxy = BaseSpine_1.default.refreshWithNode(this.boxAnim);
            this.animProxy.reset("");
            this.animProxy.markReady("");
        }
    };
    TaskBoxTipView.prototype.playIn = function () {
        var t, e, a = Math.floor(this.showRewardsNodes.length / 2);
        if (a > 0 && a <= 3) {
            try {
                for (var o = __values(this.showRewardsNodes), i = o.next(); !i.done; i = o.next()) {
                    var r = i.value;
                    cc.isValid(r) && (r.active = true);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    i && !i.done && (e = o.return) && e.call(o);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            var l = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(l, "click_" + a, false, function () {
                GameUtils_1.default.playSpine(l, "init_" + a, true);
            });
        }
    };
    TaskBoxTipView.prototype.playOut = function () {
        var t = this, e = Math.floor(this.showRewardsNodes.length / 2);
        if (e > 0 && e < 3) {
            var a = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(a, "out_" + e, false, function () {
                t.node.destroy();
            });
        }
    };
    TaskBoxTipView.prototype.stopAtFirstFrame = function (t) {
        cc.isValid(this.animProxy) && this.animProxy.stopAtFirstFrameOf(t);
    };
    TaskBoxTipView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        if (this.animProxy) {
            this.animProxy.clear();
            this.animProxy = null;
        }
    };
    TaskBoxTipView.prefabUrl = "prefabs/task/TaskBoxTip";
    __decorate([
        mj.node("BoxAnim")
    ], TaskBoxTipView.prototype, "boxAnim", void 0);
    __decorate([
        mj.node("blockBtn")
    ], TaskBoxTipView.prototype, "blockBtn", void 0);
    __decorate([
        mj.node("HintTipIcon")
    ], TaskBoxTipView.prototype, "hintTipIcon", void 0);
    __decorate([
        mj.node("RefreshTipIcon")
    ], TaskBoxTipView.prototype, "refreshTipIcon", void 0);
    __decorate([
        mj.node("HintTipValue")
    ], TaskBoxTipView.prototype, "hintTipValue", void 0);
    __decorate([
        mj.node("RefreshTipValue")
    ], TaskBoxTipView.prototype, "refreshTipValue", void 0);
    __decorate([
        mj.node("UndoTipIcon")
    ], TaskBoxTipView.prototype, "undoTipIcon", void 0);
    __decorate([
        mj.node("UndoTipValue")
    ], TaskBoxTipView.prototype, "undoTipValue", void 0);
    TaskBoxTipView = __decorate([
        mj.class
    ], TaskBoxTipView);
    return TaskBoxTipView;
}(BaseUI_1.default));
exports.default = TaskBoxTipView;

cc._RF.pop();