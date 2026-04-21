"use strict";
cc._RF.push(module, 'bfa92FIz01If6btVdrnQ5bJ', 'HallLockDarkTrait');
// subpackages/l_hallLockDark/Scripts/HallLockDarkTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var HallLockDarkTrait = /** @class */ (function (_super) {
    __extends(HallLockDarkTrait, _super);
    function HallLockDarkTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HallLockDarkTrait.prototype, "darkScale", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.darkScale) && void 0 !== e ? e : 0.65;
        },
        enumerable: false,
        configurable: true
    });
    HallLockDarkTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HallLockDarkTrait.prototype.getBaseSpine = function (t) {
        if (!cc.isValid(t))
            return null;
        if (!t.getComponent(sp.Skeleton))
            return null;
        var e = BaseSpine_1.default.refreshWithNode(t);
        e.ready || e.markReady("");
        return e;
    };
    HallLockDarkTrait.prototype.onTravelBtn_updateUI = function (t, e) {
        var n = t.ins;
        this.setTravelBtnDark(n, n.state);
        e();
    };
    HallLockDarkTrait.prototype.onTravelBtn_forceUpdate = function (t, e) {
        var n = t.ins;
        this.setTravelBtnDark(n, n.state);
        e();
    };
    HallLockDarkTrait.prototype.setTravelBtnDark = function (t, e) {
        if (cc.isValid(null == t ? void 0 : t.node)) {
            var n = 0 === e;
            GameUtils_1.default.setNodeDark(null == t ? void 0 : t.node, n, this.darkScale);
            var i = cc.find("Root/BgWood", t.node), o = cc.find("Root/Lock/Anim", t.node);
            if (n) {
                var a = this.getBaseSpine(i), r = this.getBaseSpine(o);
                this.pauseSpine(a, "init");
                this.pauseSpine(r, "init");
            }
            else
                (a = this.getBaseSpine(i)) && a.setAnimation("init", -1);
        }
    };
    HallLockDarkTrait.prototype.onHDailyBtn_updateLock = function (t, e) {
        var n = t.ins;
        if (t.args[0]) {
            this.setDailyBtnDark(n, false);
        }
        else {
            this.setDailyBtnDark(n, true);
        }
        e();
    };
    HallLockDarkTrait.prototype.setDailyBtnDark = function (t, e) {
        if (cc.isValid(null == t ? void 0 : t.node)) {
            GameUtils_1.default.setNodeDark(null == t ? void 0 : t.node, e, this.darkScale);
            var n = cc.find("eff_btn", t.node), i = cc.find("item_lock/eff_lock", t.node);
            if (e) {
                var o = this.getBaseSpine(n), a = this.getBaseSpine(i);
                this.pauseSpine(o, "init");
                this.pauseSpine(a, "init");
            }
            else
                (o = this.getBaseSpine(n)) && o.setAnimation("init", -1);
        }
    };
    HallLockDarkTrait.prototype.onTaskTt_updateLock = function (t, e) {
        var n, i, o = t.ins;
        if (null !== (n = t.args[0]) && void 0 !== n ? n : null === (i = null == o ? void 0 : o.taskModel) || void 0 === i ? void 0 : i.isTaskOpen()) {
            this.setTaskBtnDark(o, false);
        }
        else {
            this.setTaskBtnDark(o, true);
        }
        e();
    };
    HallLockDarkTrait.prototype.setTaskBtnDark = function (t, e) {
        if (cc.isValid(null == t ? void 0 : t.node)) {
            GameUtils_1.default.setNodeDark(null == t ? void 0 : t.node, e, this.darkScale);
            var n = cc.find("Bg/Icon", t.node), i = cc.find("Bg/item_lock/eff_lock", t.node);
            if (e) {
                var o = this.getBaseSpine(n), a = this.getBaseSpine(i);
                this.pauseSpine(o, "init");
                this.pauseSpine(a, "init");
            }
            else
                (o = this.getBaseSpine(n)) && o.setAnimation("init", -1);
        }
    };
    HallLockDarkTrait.prototype.onHallRankBLockTt_chgLock = function (t, e) {
        var n = t.args[0], i = t.ins, o = t.args[1];
        if (n) {
            this.setRankBtnDark(i, o, false);
        }
        else {
            this.setRankBtnDark(i, o, true);
        }
        e();
    };
    HallLockDarkTrait.prototype.setRankBtnDark = function (t, e, n) {
        if (cc.isValid(null == e ? void 0 : e.node)) {
            GameUtils_1.default.setNodeDark(null == e ? void 0 : e.node, n, this.darkScale);
            if (n) {
                this.pauseSpine(t._rankUnopenSpine, "init");
                this.pauseSpine(t._lockSpine, "init");
            }
        }
    };
    HallLockDarkTrait.prototype.onSignBtn_updateLock = function (t, e) {
        var n, i, o = t.ins;
        if (null !== (n = t.args[0]) && void 0 !== n ? n : null === (i = null == o ? void 0 : o.signModel) || void 0 === i ? void 0 : i.isUnlocked()) {
            this.setSignBtnDark(o, false);
        }
        else {
            this.setSignBtnDark(o, true);
        }
        e();
    };
    HallLockDarkTrait.prototype.setSignBtnDark = function (t, e) {
        if (cc.isValid(null == t ? void 0 : t.node)) {
            GameUtils_1.default.setNodeDark(null == t ? void 0 : t.node, e, this.darkScale);
            var n = cc.find("eff_btn", t.node), i = cc.find("item_lock/eff_lock", t.node);
            if (e) {
                var o = this.getBaseSpine(n), a = this.getBaseSpine(i);
                this.pauseSpine(o, "init");
                this.pauseSpine(a, "init");
            }
            else
                (o = this.getBaseSpine(n)) && o.setAnimation("init", -1);
        }
    };
    HallLockDarkTrait.prototype.onVltnBtn_updateUI = function (t, e) {
        var n = t.ins;
        if (mj.getClassByName("ValentineModel").getInstance().getActivityState() > 1) {
            this.setVltnBtnDark(n, false);
        }
        else {
            this.setVltnBtnDark(n, true);
        }
        e();
    };
    HallLockDarkTrait.prototype.setVltnBtnDark = function (t, e) {
        if (cc.isValid(null == t ? void 0 : t.node)) {
            GameUtils_1.default.setNodeDark(null == t ? void 0 : t.node, e, this.darkScale);
            var n = cc.find("Root/spine", t.node);
            if (e) {
                var i = this.getBaseSpine(n);
                this.pauseSpine(i, "off_init_jdt");
            }
        }
    };
    HallLockDarkTrait.prototype.pauseSpine = function (t, e) {
        var n;
        if (cc.isValid(t)) {
            null === (n = t.getSkeleton()) || void 0 === n || n.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
            t.scheduleOnce(function () {
                cc.isValid(t) && t.stopAtFirstFrameOf(e);
            }, 0);
        }
    };
    HallLockDarkTrait.prototype.onValHallBtn_setLabCol = function (t, e) {
        var n;
        if (null !== (n = null == t ? void 0 : t.beforReturnVal) && void 0 !== n && n) {
            var i = __read(t.args, 1)[0];
            cc.isValid(i) && GameUtils_1.default.clearNodeDark(i);
        }
        e();
    };
    HallLockDarkTrait.prototype.onHDailyBtn_doLockAni = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    HallLockDarkTrait.prototype.onTaskTt_doLockAni = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    HallLockDarkTrait.prototype.onHallRankBLockTt_doLckAni = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    HallLockDarkTrait.prototype.onSignBtn_doLockAni = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    HallLockDarkTrait.traitKey = "HallLockDark";
    HallLockDarkTrait = __decorate([
        mj.trait,
        mj.class("HallLockDarkTrait")
    ], HallLockDarkTrait);
    return HallLockDarkTrait;
}(Trait_1.default));
exports.default = HallLockDarkTrait;

cc._RF.pop();