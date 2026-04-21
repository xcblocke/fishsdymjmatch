"use strict";
cc._RF.push(module, '86269FC7IVLLJaHG0Pl3Ia2', 'DailySignSimpleUI');
// subpackages/r_dailySignSimple/Scripts/DailySignSimpleUI.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var DailySignSimpleItem_1 = require("./DailySignSimpleItem");
var DailySignSimpleModel_1 = require("./DailySignSimpleModel");
var DailySignTipView_1 = require("./DailySignTipView");
var DailySignSimpleUI = /** @class */ (function (_super) {
    __extends(DailySignSimpleUI, _super);
    function DailySignSimpleUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = [];
        _this._model = null;
        _this._itemsCreated = 0;
        _this.onClaimReward = null;
        _this._dailySignTipNode = null;
        return _this;
    }
    DailySignSimpleUI.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._model = DailySignSimpleModel_1.default.getInstance();
        this.createItems();
    };
    DailySignSimpleUI.prototype.createItems = function () {
        for (var t = this, e = [new cc.Vec3(-390, -3, 0), new cc.Vec3(-260, -3, 0), new cc.Vec3(-132, -3, 0), new cc.Vec3(0, -3, 0), new cc.Vec3(132, -3, 0), new cc.Vec3(258, -3, 0), new cc.Vec3(390, -3, 0)], i = function i(i) {
            var o = i;
            DailySignSimpleItem_1.default.createUI().then(function (i) {
                if (i && cc.isValid(t.node)) {
                    i.parent = t.node;
                    i.position = e[o];
                    var n = i.getComponent(DailySignSimpleItem_1.default);
                    t._items[o] = n;
                    n.setIndex(o);
                    n.onClaimCallback = t.onItemClaimCallback.bind(t);
                    n.onBoxClickCallback = t.onBoxClickCallback.bind(t);
                    t._itemsCreated++;
                    if (7 === t._itemsCreated) {
                        t.refreshAllItems();
                        t.scheduleOnce(function () {
                            t.updateProgressBar(null);
                        }, 0);
                    }
                }
            });
        }, o = 0; o < 7; o++)
            i(o);
    };
    DailySignSimpleUI.prototype.onItemClaimCallback = function (t) {
        if (this._model && this._model.claimToday()) {
            var e = this._model.getRewardForDay(t);
            this.onClaimReward && this.onClaimReward(t, e);
        }
    };
    DailySignSimpleUI.prototype.refreshAllItems = function () {
        if (this._model)
            for (var t = 0; t < 7; t++) {
                var e = this._items[t];
                e && cc.isValid(e.node) && e.refresh();
            }
    };
    DailySignSimpleUI.prototype.refreshItem = function (t) {
        if (!(t < 0 || t >= 7)) {
            var e = this._items[t];
            e && cc.isValid(e.node) && e.refresh();
        }
    };
    DailySignSimpleUI.prototype.getProgress = function () {
        return this._model ? this._model.getCurrentProgress() + "/7" : "0/7";
    };
    DailySignSimpleUI.prototype.updateProgressBar = function (t, e) {
        if (t === void 0) { t = null; }
        if (e === void 0) { e = 0.166; }
        var i, o = this;
        if (this._model && this.node && cc.isValid(this.node)) {
            var n = null === (i = cc.find("contentNode/progressBar", this.node)) || void 0 === i ? void 0 : i.getComponent(cc.ProgressBar);
            if (n) {
                var a = 0.03 + (this._model.getCurrentProgress() - 1) / 6, r = a > 1 ? 1 : a;
                if (null !== t ? t : this._model.hasNewProgress()) {
                    var s = 0.03 + ((this._model.localData.lastShownProgress || 0) - 1) / 6, l = s < 0 ? 0 : s > 1 ? 1 : s;
                    n.progress = l;
                    cc.tween(n).to(e, {
                        progress: r
                    }, {
                        easing: "sineOut"
                    }).call(function () {
                        o.playTodayReadyAnimation();
                        o._model.markProgressShown();
                    }).start();
                }
                else {
                    n.progress = r;
                    this._model.markProgressShown();
                    this.playTodayReadyAnimation();
                }
            }
        }
    };
    DailySignSimpleUI.prototype.playTodayReadyAnimation = function () {
        if (this._model)
            for (var t = 0; t < 7; t++) {
                var e = this._items[t];
                if (e && cc.isValid(e.node) && this._model.getDayState(t) === DailySignSimpleModel_1.DailySignSimpleState.Ready) {
                    e.playReadyAnimation();
                    break;
                }
            }
    };
    DailySignSimpleUI.prototype.onBoxClickCallback = function (t, e) {
        var i = this._model.getRewardForDay(t);
        this.showDailySignTip(e, i, t);
    };
    DailySignSimpleUI.prototype.showDailySignTip = function (t, e) {
        var i = this;
        this.removeDailySignTip();
        DailySignTipView_1.default.createUI().then(function (o) {
            if (cc.isValid(i.node)) {
                var n = i.node.parent;
                if (n && cc.isValid(n)) {
                    var a = n.convertToNodeSpaceAR(t);
                    o.parent = n;
                    o.setPosition(a.x, a.y + 70);
                    var r = o.getComponent(DailySignTipView_1.default);
                    r.initReward(e);
                    r.playIn();
                    r.onClickCallback = function () {
                        i.removeDailySignTip();
                    };
                    i._dailySignTipNode = o;
                }
            }
        }).catch(function () { });
    };
    DailySignSimpleUI.prototype.removeDailySignTip = function () {
        cc.isValid(this._dailySignTipNode) && this._dailySignTipNode.destroy();
        this._dailySignTipNode = null;
    };
    DailySignSimpleUI.prototype.showTipForDay = function (t) {
        if (!(t < 0 || t >= 7)) {
            var e = this._items[t];
            if (e && cc.isValid(e.node)) {
                var i = e.node.getChildByName("box");
                if (i) {
                    var o = i.convertToWorldSpaceAR(cc.Vec2.ZERO), n = cc.v3(o.x, o.y, 0), a = this._model.getRewardForDay(t);
                    this.showDailySignTip(n, a, t);
                }
            }
        }
    };
    DailySignSimpleUI.prototype.onDestroy = function () {
        this.removeDailySignTip();
        _super.prototype.onDestroy.call(this);
    };
    DailySignSimpleUI.prefabUrl = "prefabs/DailySignSimple";
    DailySignSimpleUI.bundleName = "r_dailySignSimple";
    DailySignSimpleUI = __decorate([
        mj.class
    ], DailySignSimpleUI);
    return DailySignSimpleUI;
}(BaseUI_1.default));
exports.default = DailySignSimpleUI;

cc._RF.pop();