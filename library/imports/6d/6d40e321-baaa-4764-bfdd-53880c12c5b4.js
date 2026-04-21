"use strict";
cc._RF.push(module, '6d40eMhuqpHZL/dU4gMEsW0', 'Flip2dCardBackTrait');
// subpackages/r_flip2dCardBack/Scripts/Flip2dCardBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var n = {
    DEFAULT: "default",
    BLUE: "blue",
    CYAN: "cyan",
    PINK: "pink",
    PURPLE: "purple",
    RED: "red"
};
var Flip2dCardBackTrait = /** @class */ (function (_super) {
    __extends(Flip2dCardBackTrait, _super);
    function Flip2dCardBackTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curCardBackInd = -1;
        _this._curCardBack = n.DEFAULT;
        _this._switchType = Flip2dCardBackTrait_1.TYPE_SEQUENTIAL;
        return _this;
    }
    Flip2dCardBackTrait_1 = Flip2dCardBackTrait;
    Flip2dCardBackTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || Flip2dCardBackTrait_1.TYPE_SEQUENTIAL;
        var e = this.getCurCardBack(), i = !!this.localData.cardBack;
        this._switchType, Flip2dCardBackTrait_1.TYPE_RANDOM;
        if (i && Flip2dCardBackTrait_1.CARD_BACKS.includes(e)) {
            this._curCardBack = e;
            this._curCardBackInd = Flip2dCardBackTrait_1.CARD_BACKS.indexOf(e);
            this.switchToNextCardBack();
        }
        else {
            this._curCardBackInd = -1;
            this._curCardBack = n.DEFAULT;
            this.setCurCardBack(this._curCardBack);
        }
    };
    Flip2dCardBackTrait.prototype.getCurCardBack = function () {
        return this.localData.cardBack || n.DEFAULT;
    };
    Flip2dCardBackTrait.prototype.setCurCardBack = function (t) {
        this.localData.cardBack = t;
        UserModel_1.default.getInstance().setCardBackColor(t);
    };
    Flip2dCardBackTrait.prototype.switchToNextCardBack = function () {
        if (this._switchType === Flip2dCardBackTrait_1.TYPE_RANDOM) {
            this._curCardBackInd = Math.floor(Math.random() * Flip2dCardBackTrait_1.CARD_BACKS.length);
        }
        else {
            this._curCardBackInd = (this._curCardBackInd + 1) % Flip2dCardBackTrait_1.CARD_BACKS.length;
        }
        (this._curCardBackInd < 0 || this._curCardBackInd >= Flip2dCardBackTrait_1.CARD_BACKS.length) && (this._curCardBackInd = 0);
        this._curCardBack = Flip2dCardBackTrait_1.CARD_BACKS[this._curCardBackInd];
        this.setCurCardBack(this._curCardBack);
    };
    Flip2dCardBackTrait.prototype.onGsListener_onNewGame = function (t, r) {
        this.switchToNextCardBack();
        this._switchType, Flip2dCardBackTrait_1.TYPE_RANDOM;
        r();
    };
    Flip2dCardBackTrait.prototype.onGsListener_onReplayGame = function (t, r) {
        this.switchToNextCardBack();
        this._switchType, Flip2dCardBackTrait_1.TYPE_RANDOM;
        r();
    };
    Flip2dCardBackTrait.prototype.onMainGameBtnBack_onClick = function (t, r) {
        this.switchToNextCardBack();
        this._switchType, Flip2dCardBackTrait_1.TYPE_RANDOM;
        r();
    };
    Flip2dCardBackTrait.prototype.onUISetBtnBack_onBtnClk = function (t, r) {
        this.switchToNextCardBack();
        this._switchType, Flip2dCardBackTrait_1.TYPE_RANDOM;
        r();
    };
    Flip2dCardBackTrait.prototype.onFlipCardEff_frontNode = function (t, r) {
        if ("default" !== this._curCardBack) {
            var e = BaseSprite_1.default.create("texture/" + this._curCardBack + "/gameplay_img_mj_up", Flip2dCardBackTrait_1.BUNDLE_NAME);
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: e.node
            });
        }
        else
            r();
    };
    Flip2dCardBackTrait.prototype.onFlipCardEff_backNode = function (t, r) {
        if ("default" !== this._curCardBack) {
            var e = BaseSprite_1.default.create("texture/" + this._curCardBack + "/gameplay_img_mj_dn", Flip2dCardBackTrait_1.BUNDLE_NAME);
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: e.node
            });
        }
        else
            r();
    };
    Flip2dCardBackTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var e, i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
        if ("gameplay_img_mj_dn" !== i && "gameplay_img_mj_up" !== i && "gameplay_select_mj" !== i)
            r();
        else {
            if ("default" === this._curCardBack) {
                r();
                return;
            }
            var c = "texture/" + this._curCardBack + "/" + i;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: {
                    path: c,
                    bundleName: Flip2dCardBackTrait_1.BUNDLE_NAME,
                    fromAtlas: false
                }
            });
        }
    };
    var Flip2dCardBackTrait_1;
    Flip2dCardBackTrait.traitKey = "Flip2dCardBack";
    Flip2dCardBackTrait.BUNDLE_NAME = "r_flip2dCardBack";
    Flip2dCardBackTrait.TYPE_SEQUENTIAL = 1;
    Flip2dCardBackTrait.TYPE_RANDOM = 2;
    Flip2dCardBackTrait.CARD_BACKS = [n.DEFAULT, n.BLUE, n.CYAN, n.PINK, n.PURPLE, n.RED];
    Flip2dCardBackTrait = Flip2dCardBackTrait_1 = __decorate([
        mj.trait,
        mj.class("Flip2dCardBackTrait")
    ], Flip2dCardBackTrait);
    return Flip2dCardBackTrait;
}(Trait_1.default));
exports.default = Flip2dCardBackTrait;

cc._RF.pop();