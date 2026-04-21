"use strict";
cc._RF.push(module, '39b49zR9ElPK7IfV8M0EcyV', 'DailySignTipView');
// subpackages/r_dailySignSimple/Scripts/DailySignTipView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var DailySignTipView = /** @class */ (function (_super) {
    __extends(DailySignTipView, _super);
    function DailySignTipView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boxAnim = null;
        _this.blockBtn = null;
        _this.hintTipIcon = null;
        _this.refreshTipIcon = null;
        _this.hintTipValue = null;
        _this.refreshTipValue = null;
        _this.animProxy = null;
        _this.showRewardsNodes = [];
        _this.onClickCallback = null;
        return _this;
    }
    DailySignTipView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initSpine();
        this.registerEvents();
    };
    DailySignTipView.prototype.registerEvents = function () {
        this.OnButtonClick(this.blockBtn, this.onBlockBtnClick.bind(this));
    };
    DailySignTipView.prototype.onBlockBtnClick = function () {
        this.onClickCallback && this.onClickCallback();
    };
    DailySignTipView.prototype.hideRewardsNodes = function () {
        this.refreshTipIcon.active = false;
        this.refreshTipValue.active = false;
        this.hintTipIcon.active = false;
        this.hintTipValue.active = false;
    };
    DailySignTipView.prototype.initReward = function (t) {
        var e = this;
        this.hideRewardsNodes();
        this.showRewardsNodes = [];
        if (t.shuffleCount > 0) {
            this.refreshTipIcon.active = true;
            this.refreshTipValue.active = true;
            this.refreshTipValue.getComponent(cc.Label).string = String(t.shuffleCount);
            this.showRewardsNodes.push(this.refreshTipIcon, this.refreshTipValue);
            if (this.animProxy) {
                var i = this.showRewardsNodes.length / 2;
                this.animProxy.attachNode("hook_icon_" + i, function () {
                    return e.refreshTipIcon;
                });
                this.animProxy.attachNode("hook_num_" + i, function () {
                    return e.refreshTipValue;
                });
            }
        }
        if (t.hintCount > 0) {
            this.hintTipIcon.active = true;
            this.hintTipValue.active = true;
            this.hintTipValue.getComponent(cc.Label).string = String(t.hintCount);
            this.showRewardsNodes.push(this.hintTipIcon, this.hintTipValue);
            if (this.animProxy) {
                i = this.showRewardsNodes.length / 2;
                this.animProxy.attachNode("hook_icon_" + i, function () {
                    return e.hintTipIcon;
                });
                this.animProxy.attachNode("hook_num_" + i, function () {
                    return e.hintTipValue;
                });
            }
        }
    };
    DailySignTipView.prototype.initSpine = function () {
        if (cc.isValid(this.boxAnim) && this.boxAnim.getComponent(sp.Skeleton)) {
            this.animProxy = BaseSpine_1.default.refreshWithNode(this.boxAnim);
            this.animProxy.reset("");
            this.animProxy.markReady("");
        }
    };
    DailySignTipView.prototype.playIn = function () {
        var t, e, i = Math.floor(this.showRewardsNodes.length / 2);
        if (i > 0 && i < 3) {
            try {
                for (var o = __values(this.showRewardsNodes), n = o.next(); !n.done; n = o.next()) {
                    var a = n.value;
                    cc.isValid(a) && (a.active = true);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    n && !n.done && (e = o.return) && e.call(o);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            var l = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(l, "click_" + i, false, function () {
                GameUtils_1.default.playSpine(l, "init_" + i, true);
            });
            l.node.scale = 0.9;
        }
    };
    DailySignTipView.prototype.playOut = function (t) {
        var e = this, i = Math.floor(this.showRewardsNodes.length / 2);
        if (i > 0 && i < 3) {
            var o = this.boxAnim.getComponent(sp.Skeleton);
            GameUtils_1.default.playSpine(o, "out_" + i, false, function () {
                t && t();
                e.node.destroy();
            });
        }
    };
    DailySignTipView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        if (this.animProxy) {
            this.animProxy.clear();
            this.animProxy = null;
        }
    };
    DailySignTipView.prefabUrl = "prefabs/DailySignTip";
    DailySignTipView.bundleName = "r_dailySignSimple";
    __decorate([
        mj.node("BoxAnim")
    ], DailySignTipView.prototype, "boxAnim", void 0);
    __decorate([
        mj.node("blockBtn")
    ], DailySignTipView.prototype, "blockBtn", void 0);
    __decorate([
        mj.node("HintTipIcon")
    ], DailySignTipView.prototype, "hintTipIcon", void 0);
    __decorate([
        mj.node("RefreshTipIcon")
    ], DailySignTipView.prototype, "refreshTipIcon", void 0);
    __decorate([
        mj.node("HintTipValue")
    ], DailySignTipView.prototype, "hintTipValue", void 0);
    __decorate([
        mj.node("RefreshTipValue")
    ], DailySignTipView.prototype, "refreshTipValue", void 0);
    DailySignTipView = __decorate([
        mj.class
    ], DailySignTipView);
    return DailySignTipView;
}(BaseUI_1.default));
exports.default = DailySignTipView;

cc._RF.pop();