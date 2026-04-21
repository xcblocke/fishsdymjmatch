"use strict";
cc._RF.push(module, '11557GyfFBOhbKwtrs7ieae', 'FlowFailPopupTrait');
// subpackages/l_flowFailPopup/Scripts/FlowFailPopupTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FlowFailPopupTrait = /** @class */ (function (_super) {
    __extends(FlowFailPopupTrait, _super);
    function FlowFailPopupTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlowFailPopupTrait.prototype.onLoad = function () {
        var a, e, i;
        _super.prototype.onLoad.call(this);
        this._introLevels = null !== (a = this._traitData.introLevels) && void 0 !== a ? a : 10;
        this._defaultStage = null !== (e = this._traitData.defaultStage) && void 0 !== e ? e : 2;
        this._initialStage = null !== (i = this._traitData.initialStage) && void 0 !== i ? i : this._defaultStage;
        if (void 0 === this.localData.ffpShown || null === this.localData.ffpShown) {
            this.localData.ffpShown = false;
            this.localData.ffpShown = this.localData.ffpShown;
        }
        if (!this.localData.ffpStage) {
            this.localData.ffpStage = this._defaultStage;
            this.localData.ffpStage = this.localData.ffpStage;
        }
    };
    FlowFailPopupTrait.prototype.onTile2FailVw_show = function (t, a) {
        if (!this.localData.ffpShown && UserModel_1.default.getInstance().isGuideFinished()) {
            this.localData.ffpShown = true;
            this.localData.ffpShown = this.localData.ffpShown;
        }
        a();
    };
    FlowFailPopupTrait.prototype._shouldBlockDynamic = function (t) {
        return !(!UserModel_1.default.getInstance().isGuideFinished() || t > 0 && t <= this._introLevels + 1 || this.localData.ffpShown);
    };
    FlowFailPopupTrait.prototype.onT2DynStr_isDyn = function (t, a) {
        var e, i, o = t.args[0], l = (null === (i = null === (e = null == o ? void 0 : o.gameData) || void 0 === e ? void 0 : e.getLevelId) || void 0 === i ? void 0 : i.call(e)) || 0;
        if (this._shouldBlockDynamic(l)) {
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: false
            });
        }
        else {
            a();
        }
    };
    FlowFailPopupTrait.prototype.onT2DynStr_extract = function (t, a) {
        var e, i, o = t.args[0], l = (null === (i = null === (e = null == o ? void 0 : o.gameData) || void 0 === e ? void 0 : e.getLevelId) || void 0 === i ? void 0 : i.call(e)) || 0;
        if (this._shouldBlockDynamic(l)) {
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: Promise.resolve(null)
            });
        }
        else {
            a();
        }
    };
    FlowFailPopupTrait.prototype.onFlwLv_getAbilStg = function (t, a) {
        var e = t.args[0] || 0;
        if (e > 0 && e <= this._introLevels) {
            this.localData.ffpShown = false;
            this.localData.ffpShown = this.localData.ffpShown;
            a();
        }
        else if (e !== this._introLevels + 1) {
            this._evaluateFailPopup();
            var i = this.localData.ffpStage || this._defaultStage;
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: i - 1
            });
        }
        else {
            this.localData.ffpStage = this._initialStage;
            this.localData.ffpStage = this.localData.ffpStage;
            this.localData.ffpShown = false;
            this.localData.ffpShown = this.localData.ffpShown;
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._initialStage - 1
            });
        }
    };
    FlowFailPopupTrait.prototype._evaluateFailPopup = function () {
        this.localData.ffpShown;
        this.localData.ffpShown = false;
        this.localData.ffpShown = this.localData.ffpShown;
        this.localData.ffpStage || this._defaultStage;
        var t = this._defaultStage;
        this.localData.ffpStage = t;
        this.localData.ffpStage = this.localData.ffpStage;
    };
    FlowFailPopupTrait.traitKey = "FlowFailPopup";
    FlowFailPopupTrait = __decorate([
        mj.trait,
        mj.class("FlowFailPopupTrait")
    ], FlowFailPopupTrait);
    return FlowFailPopupTrait;
}(Trait_1.default));
exports.default = FlowFailPopupTrait;

cc._RF.pop();