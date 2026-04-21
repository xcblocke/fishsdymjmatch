"use strict";
cc._RF.push(module, 'b0f0c5vJjJNrKvA7Z0V8CZx', 'HallTaskBtnRPTrait');
// subpackages/l_hallRedPoint/Scripts/HallTaskBtnRPTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var HallTaskBtnRPTrait = /** @class */ (function (_super) {
    __extends(HallTaskBtnRPTrait, _super);
    function HallTaskBtnRPTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    HallTaskBtnRPTrait_1 = HallTaskBtnRPTrait;
    Object.defineProperty(HallTaskBtnRPTrait.prototype, "isClicked", {
        get: function () {
            return true === this.localData.clicked;
        },
        enumerable: false,
        configurable: true
    });
    HallTaskBtnRPTrait.prototype.setClicked = function () {
        this.localData.clicked = true;
    };
    HallTaskBtnRPTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    HallTaskBtnRPTrait.prototype.isEnabled = function () {
        var t;
        return null !== (t = this._config.enabled) && void 0 !== t ? t : HallTaskBtnRPTrait_1.DEFAULT_CONFIG.enabled;
    };
    HallTaskBtnRPTrait.prototype.getRedDotPath = function () {
        return this._config.redDotPath || HallTaskBtnRPTrait_1.DEFAULT_CONFIG.redDotPath;
    };
    HallTaskBtnRPTrait.prototype.shouldShowRedDot = function () {
        var t, e;
        if (!this.isEnabled())
            return false;
        if (this.isClicked)
            return false;
        var o = null === (e = null === (t = mj.getClassByName("TaskModel")) || void 0 === t ? void 0 : t.getInstance) || void 0 === e ? void 0 : e.call(t);
        return !(null == o || !o.isTaskOpen());
    };
    HallTaskBtnRPTrait.prototype.updateRedDotOnNode = function (t, e) {
        if (cc.isValid(t)) {
            var o = t.getChildByName("unlockRedDot_task");
            if (e) {
                var i = cc.find("Bg/item_lock", t);
                i && (i.active = false);
                var r = cc.find("Bg/sp_red", t);
                r && (r.active = false);
                if (o)
                    o.active = true;
                else if (o = new cc.Node("unlockRedDot_task")) {
                    var n = o.addComponent(cc.Sprite);
                    n && (n.sizeMode = cc.Sprite.SizeMode.RAW);
                    BaseSprite_1.default.refreshWithNode(o, this.getRedDotPath(), false, false, "mainRes");
                    o.setPosition(cc.v2(60, 70));
                    t.addChild(o);
                }
            }
            else
                o && (o.active = false);
        }
    };
    HallTaskBtnRPTrait.prototype.onTaskTt_updateLock = function (t, e) {
        var o;
        try {
            var i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
            if (!cc.isValid(i)) {
                e();
                return;
            }
            var r = this.shouldShowRedDot();
            this.updateRedDotOnNode(i, r);
        }
        catch (t) {
            console.error("[HallTaskBtnRPTrait] onTaskTt_updateLock 异常: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    HallTaskBtnRPTrait.prototype.onTaskTt_onBtnClick = function (t, e) {
        var o, i = null === (o = t.ins) || void 0 === o ? void 0 : o.node;
        if (cc.isValid(i)) {
            var r = i.getChildByName("unlockRedDot_task");
            if (r && r.active) {
                this.setClicked();
                r.active = false;
            }
        }
        e();
    };
    HallTaskBtnRPTrait.prototype.onTaskAutoPopT_showPopVw = function (t, e) {
        var o;
        if (this.shouldShowRedDot()) {
            var i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
            null == i || i(false);
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    HallTaskBtnRPTrait.prototype.onDSSimple_showPopVw = function (t, e) {
        if (this.shouldShowRedDot()) {
            e({
                returnVal: false,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    HallTaskBtnRPTrait.prototype.onDailyTaskPush_showTaskVw = function (t, e) {
        var o;
        if (this.shouldShowRedDot()) {
            var i = null === (o = t.args) || void 0 === o ? void 0 : o[1];
            null == i || i(false);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    var HallTaskBtnRPTrait_1;
    HallTaskBtnRPTrait.traitKey = "HallTaskBtnRP";
    HallTaskBtnRPTrait.DEFAULT_CONFIG = {
        enabled: true,
        redDotPath: "texture/gamePlay/gameplay_img_hongdian"
    };
    HallTaskBtnRPTrait = HallTaskBtnRPTrait_1 = __decorate([
        mj.trait,
        mj.class("HallTaskBtnRPTrait")
    ], HallTaskBtnRPTrait);
    return HallTaskBtnRPTrait;
}(Trait_1.default));
exports.default = HallTaskBtnRPTrait;

cc._RF.pop();