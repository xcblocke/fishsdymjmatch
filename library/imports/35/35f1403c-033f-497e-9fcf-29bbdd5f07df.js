"use strict";
cc._RF.push(module, '35f14A8Az9Jfp/PKbvdXwff', 'BoxTips');
// subpackages/l_rank/Scripts/BoxTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var BoxTips = /** @class */ (function (_super) {
    __extends(BoxTips, _super);
    function BoxTips() {
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
    BoxTips.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initSpine();
        this.registerEvents();
    };
    BoxTips.prototype.registerEvents = function () {
        this.OnButtonClick(this.blockBtn, this.onBlockBtnClick.bind(this));
    };
    BoxTips.prototype.onBlockBtnClick = function () {
        this.playOut();
    };
    BoxTips.prototype.hideRewardsNodes = function () {
        this.refreshTipIcon.active = false;
        this.refreshTipValue.active = false;
        this.hintTipIcon.active = false;
        this.hintTipValue.active = false;
        this.undoTipIcon.active = false;
        this.undoTipValue.active = false;
    };
    BoxTips.prototype.initBoxReward = function (t) {
        var e = this;
        this.hideRewardsNodes();
        var o = function o(t, o, n) {
            if (t && o) {
                e.animProxy.attachNode("hook_icon_" + n, function () {
                    return t;
                });
                e.animProxy.attachNode("hook_num_" + n, function () {
                    return o;
                });
            }
        };
        this.showRewardsNodes = [];
        for (var n = 0; n < t.Items.length; n++) {
            var a = t.Items[n], i = t.Counts[n], r = this.getRewardNodes(a), s = r.icon, l = r.value;
            if (s && l) {
                l.getComponent(cc.Label).string = String(i);
                this.showRewardsNodes.push(s, l);
                o(s, l, n + 1);
            }
        }
    };
    BoxTips.prototype.getRewardNodes = function (t) {
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
    BoxTips.prototype.initSpine = function () {
        if (cc.isValid(this.boxAnim) && this.boxAnim.getComponent(sp.Skeleton)) {
            this.animProxy = BaseSpine_1.default.refreshWithNode(this.boxAnim);
            this.animProxy.reset("");
            this.animProxy.markReady("");
        }
    };
    BoxTips.prototype.playIn = function () {
        var t, e, o = Math.floor(this.showRewardsNodes.length / 2);
        if (o > 0 && o <= 3) {
            try {
                for (var n = __values(this.showRewardsNodes), a = n.next(); !a.done; a = n.next()) {
                    var i = a.value;
                    cc.isValid(i) && (i.active = true);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    a && !a.done && (e = n.return) && e.call(n);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            var l = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(l, "click_" + o, false, function () {
                GameUtils_1.default.playSpine(l, "init_" + o, true);
            });
        }
    };
    BoxTips.prototype.playOut = function () {
        var t = this, e = Math.floor(this.showRewardsNodes.length / 2);
        if (e > 0 && e <= 3) {
            var o = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(o, "out_" + e, false, function () {
                t.node.destroy();
            });
        }
    };
    BoxTips.prototype.stopAtFirstFrame = function (t) {
        cc.isValid(this.animProxy) && this.animProxy.stopAtFirstFrameOf(t);
    };
    BoxTips.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        if (this.animProxy) {
            this.animProxy.clear();
            this.animProxy = null;
        }
    };
    BoxTips.prefabUrl = "prefabs/rank/BoxTips";
    __decorate([
        mj.node("BoxAnim")
    ], BoxTips.prototype, "boxAnim", void 0);
    __decorate([
        mj.node("blockBtn")
    ], BoxTips.prototype, "blockBtn", void 0);
    __decorate([
        mj.node("HintTipIcon")
    ], BoxTips.prototype, "hintTipIcon", void 0);
    __decorate([
        mj.node("RefreshTipIcon")
    ], BoxTips.prototype, "refreshTipIcon", void 0);
    __decorate([
        mj.node("HintTipValue")
    ], BoxTips.prototype, "hintTipValue", void 0);
    __decorate([
        mj.node("RefreshTipValue")
    ], BoxTips.prototype, "refreshTipValue", void 0);
    __decorate([
        mj.node("UndoTipIcon")
    ], BoxTips.prototype, "undoTipIcon", void 0);
    __decorate([
        mj.node("UndoTipValue")
    ], BoxTips.prototype, "undoTipValue", void 0);
    BoxTips = __decorate([
        mj.class
    ], BoxTips);
    return BoxTips;
}(BaseUI_1.default));
exports.default = BoxTips;

cc._RF.pop();