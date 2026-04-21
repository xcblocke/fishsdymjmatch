"use strict";
cc._RF.push(module, '546dcFYqclBf63m3u7KB9K0', 'GameLayoutAdaptTrait');
// subpackages/l_gameLayoutAdapt/Scripts/GameLayoutAdaptTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var GameLayoutAdaptTrait = /** @class */ (function (_super) {
    __extends(GameLayoutAdaptTrait, _super);
    function GameLayoutAdaptTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isWideScreen = false;
        _this._config = {
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            bottomNodeOffsetY: 0
        };
        return _this;
    }
    GameLayoutAdaptTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._isWideScreen = this.checkIsWideScreen();
        this._config = {
            paddingLeft: this.getValueByScreenType("paddingLeft"),
            paddingRight: this.getValueByScreenType("paddingRight"),
            paddingTop: this.getValueByScreenType("paddingTop"),
            paddingBottom: this.getValueByScreenType("paddingBottom"),
            bottomNodeOffsetY: this.getValueByScreenType("bottomNodeOffsetY")
        };
    };
    GameLayoutAdaptTrait.prototype.checkIsWideScreen = function () {
        var t = cc.view.getFrameSize();
        return t.height / t.width <= cc.Canvas.instance.designResolution.height / cc.Canvas.instance.designResolution.width;
    };
    GameLayoutAdaptTrait.prototype.getValueByScreenType = function (t) {
        var e, o, n;
        if (this._isWideScreen) {
            var r = "wide" + t.charAt(0).toUpperCase() + t.slice(1), i = null === (e = this._traitData) || void 0 === e ? void 0 : e[r];
            if (null != i)
                return i;
        }
        return null !== (n = null === (o = this._traitData) || void 0 === o ? void 0 : o[t]) && void 0 !== n ? n : 0;
    };
    GameLayoutAdaptTrait.prototype.updateConfig = function (t) {
        this._config = Object.assign(Object.assign({}, this._config), t);
    };
    GameLayoutAdaptTrait.prototype.getConfig = function () {
        return Object.assign({}, this._config);
    };
    GameLayoutAdaptTrait.prototype.onLayoutSel_getPadLeft = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.paddingLeft
        });
    };
    GameLayoutAdaptTrait.prototype.onLayoutSel_getPadRight = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.paddingRight
        });
    };
    GameLayoutAdaptTrait.prototype.onLayoutSel_getPadTop = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.paddingTop
        });
    };
    GameLayoutAdaptTrait.prototype.onLayoutSel_getPadBottom = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.paddingBottom
        });
    };
    GameLayoutAdaptTrait.prototype.getBottomNodeOffsetY = function () {
        return this._config.bottomNodeOffsetY;
    };
    GameLayoutAdaptTrait.prototype.onMainGmVw_calcAreaSz = function (t, e) {
        var o, n, r, i = t.ins, a = this.getBottomNodeOffsetY();
        if (0 !== a && cc.isValid(i)) {
            var p = null === (n = null === (o = i._gameNode) || void 0 === o ? void 0 : o.getChildByName) || void 0 === n ? void 0 : n.call(o, "nodeBottom"), c = null === (r = null == p ? void 0 : p.getComponent) || void 0 === r ? void 0 : r.call(p, cc.Widget);
            if (c) {
                c.bottom = a;
                c.updateAlignment();
            }
        }
        this.isHideBottomBanner() && AdManager_1.default.getInstance().hideBanner();
        e();
    };
    GameLayoutAdaptTrait.prototype.onMainGmVw_getMidY = function (t, e) {
        if (t.args[0] && t.args[1]) {
            t.args[0].y -= this._config.paddingTop;
            t.args[1].y += this._config.paddingBottom;
            e();
        }
        else
            e();
    };
    GameLayoutAdaptTrait.prototype.onAdMgr_showBanner = function (t, e) {
        if (this.isHideBottomBanner()) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    GameLayoutAdaptTrait.prototype.isHideBottomBanner = function () {
        var t;
        return !(null === (t = this._traitData) || void 0 === t ? void 0 : t.showBanner);
    };
    GameLayoutAdaptTrait.traitKey = "GameLayoutAdapt";
    __decorate([
        mj.traitEvent("GmLtApt_getBtmNOffsetY")
    ], GameLayoutAdaptTrait.prototype, "getBottomNodeOffsetY", null);
    GameLayoutAdaptTrait = __decorate([
        mj.trait,
        mj.class("GameLayoutAdaptTrait")
    ], GameLayoutAdaptTrait);
    return GameLayoutAdaptTrait;
}(Trait_1.default));
exports.default = GameLayoutAdaptTrait;

cc._RF.pop();