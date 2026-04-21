"use strict";
cc._RF.push(module, '50e62wq8MpHFbaUW6gVxRqB', 'WinFullComboOptTrait');
// subpackages/r_winFullComboOpt/Scripts/WinFullComboOptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WinFullComboOptView_1 = require("./WinFullComboOptView");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var WinFullComboOptTrait = /** @class */ (function (_super) {
    __extends(WinFullComboOptTrait, _super);
    function WinFullComboOptTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["r_winFullComboOpt:prefabs/WinFullComboOptView"];
        return _this;
    }
    WinFullComboOptTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WinFullComboOptTrait.prototype.showRainbowUI = function () {
        return GameUtils_1.default.isFullComboTriggered();
    };
    WinFullComboOptTrait.prototype.onWinVw_getDescAniDly = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.return,
            returnVal: 0.9,
            isBreak: true
        });
    };
    WinFullComboOptTrait.prototype.onTile2WinVw_getDescAniDly = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.return,
            returnVal: 0.9,
            isBreak: true
        });
    };
    WinFullComboOptTrait.prototype.onWinVw_getSubSize = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.return,
            returnVal: cc.size(888, 192),
            isBreak: true
        });
    };
    WinFullComboOptTrait.prototype.onTile2WinVw_getSubSize = function (e, t) {
        t({
            returnType: TraitCallbackReturnType.return,
            returnVal: cc.size(888, 192),
            isBreak: true
        });
    };
    WinFullComboOptTrait.prototype.onWinCtrl_initRes = function (e, t) {
        var i = e.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        t();
    };
    WinFullComboOptTrait.prototype.onTile2WinCtrl_initRes = function (e, t) {
        var i = e.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        t();
    };
    WinFullComboOptTrait.prototype.onLevelBox_pbDelay = function (e, t) {
        this.showRainbowUI() && (e.args[0].delayTime += 0.33);
        t();
    };
    WinFullComboOptTrait.prototype.onLvBoxProg_barBoxEnter = function (e, t) {
        var i = e.ins;
        if (cc.isValid(null == i ? void 0 : i.node)) {
            var o = i.node.getChildByName("BarLayout"), r = i.node.getChildByName("BoxBtn");
            o.y = -310;
            r.y = -310;
        }
        t();
    };
    WinFullComboOptTrait.prototype.onBoxRwdUI_barBoxEnter = function (e, t) {
        var i = e.ins;
        if (cc.isValid(null == i ? void 0 : i.node)) {
            var o = i.node.getChildByName("BarLayout"), r = i.node.getChildByName("BoxBtn");
            if (o && r) {
                o.y = -310;
                r.y = -310;
            }
        }
        t();
    };
    WinFullComboOptTrait.prototype.onWinVw_showWinVw = function (e, t) {
        this._doShowUI(e.ins, e.args[0]);
        t();
    };
    WinFullComboOptTrait.prototype.onTile2WinVw_show = function (e, t) {
        this._doShowUI(e.ins, e.args[0]);
        t();
    };
    WinFullComboOptTrait.prototype._doShowUI = function (e, t) {
        var i;
        if (cc.isValid(e)) {
            var o = e.getContentNode();
            if (cc.isValid(o)) {
                this.fixPos(o);
                if (this.showRainbowUI()) {
                    var r = o.getChildByName("WinFullComboOptView");
                    if (!cc.isValid(r)) {
                        r = e.createUISync(WinFullComboOptView_1.default);
                        cc.isValid(r) && o.addChild(r);
                    }
                    cc.isValid(r) && (null === (i = r.getComponent(WinFullComboOptView_1.default)) || void 0 === i || i.showFullComboUI(t, o));
                }
            }
        }
    };
    WinFullComboOptTrait.prototype.fixPos = function (e) {
        var t, i;
        try {
            for (var o = __values([["lbl_score", 0, 254], ["lbl_scoreDec", 0, 405], ["spr_bg_wellDone", 0, 634], ["lbl_title", 0, 629], ["spin_wellDone", 0, 254], ["btn_next", 0, -552], ["lbl_subtitle", 0, 34], ["rate_richtext", 0, 34]]), r = o.next(); !r.done; r = o.next()) {
                var n = __read(r.value, 3), a = n[0], _ = n[1], u = n[2], d = e.getChildByName(a);
                cc.isValid(d) && d.setPosition(_, u);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (i = o.return) && i.call(o);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    WinFullComboOptTrait.traitKey = "WinFullComboOpt";
    __decorate([
        mj.traitEvent("WinFullComboOpt_rainbow")
    ], WinFullComboOptTrait.prototype, "showRainbowUI", null);
    WinFullComboOptTrait = __decorate([
        mj.trait,
        mj.class("WinFullComboOptTrait")
    ], WinFullComboOptTrait);
    return WinFullComboOptTrait;
}(Trait_1.default));
exports.default = WinFullComboOptTrait;

cc._RF.pop();