"use strict";
cc._RF.push(module, '11c59YyofdMkYVRcDUHIkvH', 'CardBack3Trait');
// subpackages/r_cardBack/Scripts/CardBack3Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardBack3Trait = /** @class */ (function (_super) {
    __extends(CardBack3Trait, _super);
    function CardBack3Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curCardBackInd = -1;
        _this._curCardBack = "default";
        _this._switchType = CardBack3Trait_1.TYPE_SEQUENTIAL;
        return _this;
    }
    CardBack3Trait_1 = CardBack3Trait;
    CardBack3Trait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || CardBack3Trait_1.TYPE_SEQUENTIAL;
        this._switchType, CardBack3Trait_1.TYPE_RANDOM;
    };
    CardBack3Trait.prototype.getCurrentGameType = function () {
        return UserModel_1.default.getInstance().getCurrentGameType();
    };
    CardBack3Trait.prototype.getCurCardBack = function () {
        var t = this.getCurrentGameType();
        return this.localData[t] || "default";
    };
    CardBack3Trait.prototype.setCurCardBack = function (t) {
        var r = this.getCurrentGameType();
        this.localData[r] = t;
        this.localData = this.localData;
    };
    CardBack3Trait.prototype.switchToNextCardBack = function () {
        var t = this.getCurCardBack();
        if (t && CardBack3Trait_1.CARD_BACKS.includes(t)) {
            this._curCardBackInd = CardBack3Trait_1.CARD_BACKS.indexOf(t);
        }
        else {
            this._curCardBackInd = -1;
        }
        if (this._switchType === CardBack3Trait_1.TYPE_RANDOM) {
            this._curCardBackInd = Math.floor(Math.random() * CardBack3Trait_1.CARD_BACKS.length);
        }
        else {
            this._curCardBackInd = (this._curCardBackInd + 1) % CardBack3Trait_1.CARD_BACKS.length;
        }
        (this._curCardBackInd < 0 || this._curCardBackInd >= CardBack3Trait_1.CARD_BACKS.length) && (this._curCardBackInd = 0);
        this._curCardBack = CardBack3Trait_1.CARD_BACKS[this._curCardBackInd];
        this.setCurCardBack(this._curCardBack);
    };
    CardBack3Trait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            this.getCurrentGameType();
            this.switchToNextCardBack();
            this._switchType, CardBack3Trait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBack3Trait_1.traitKey + "] 切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBack3Trait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var e;
        try {
            var i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
            if ("gameplay_img_mj_dn" === i || "gameplay_img_mj_up" === i) {
                var c = this.getCurCardBack();
                this.getCurrentGameType();
                if ("default" === c) {
                    r();
                    return;
                }
                var n = "texture/" + c + "/" + i;
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: n,
                        bundleName: CardBack3Trait_1.BUNDLE_NAME,
                        fromAtlas: false
                    }
                });
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBack3Trait_1.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBack3Trait.prototype.onTileNodeObj_playAnim = function (t, r) {
        var e;
        try {
            if ("spine/rollcard/gameplay_flip" === (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
                var i = this.getCurCardBack();
                this.getCurrentGameType();
                if ("default" === i) {
                    r();
                    return;
                }
                var c = "spine/" + i + "/gameplay_flip";
                t.args[0] = c;
                t.args[6] = CardBack3Trait_1.BUNDLE_NAME;
                r();
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBack3Trait_1.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBack3Trait.prototype.onUserModel_cardBackColor = function (t, r) {
        try {
            var e = this.getCurrentGameType(), i = this.localData[e] || "default";
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: i
            });
        }
        catch (t) {
            console.error("[" + CardBack3Trait_1.traitKey + "] 劫持 UserModel.getCardBackColor 失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardBack3Trait_1;
    CardBack3Trait.traitKey = "CardBack3";
    CardBack3Trait.BUNDLE_NAME = "r_cardBack";
    CardBack3Trait.TYPE_SEQUENTIAL = 1;
    CardBack3Trait.TYPE_RANDOM = 2;
    CardBack3Trait.CARD_BACKS = ["default", "blue", "cyan", "pink", "purple", "red"];
    CardBack3Trait = CardBack3Trait_1 = __decorate([
        mj.trait,
        mj.class("CardBack3Trait")
    ], CardBack3Trait);
    return CardBack3Trait;
}(Trait_1.default));
exports.default = CardBack3Trait;

cc._RF.pop();