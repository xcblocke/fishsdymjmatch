"use strict";
cc._RF.push(module, '05ad2wGsVxIAJpf7dDsJEBz', 'CardBackTrait');
// subpackages/r_cardBack/Scripts/CardBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardBackTrait = /** @class */ (function (_super) {
    __extends(CardBackTrait, _super);
    function CardBackTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curCardBackInd = -1;
        _this._curCardBack = "default";
        _this._switchType = CardBackTrait_1.TYPE_SEQUENTIAL;
        return _this;
    }
    CardBackTrait_1 = CardBackTrait;
    CardBackTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || CardBackTrait_1.TYPE_SEQUENTIAL;
        var e = this.getCurCardBack(), i = !!this.localData.cardBack;
        this._switchType, CardBackTrait_1.TYPE_RANDOM;
        if (i && CardBackTrait_1.CARD_BACKS.includes(e)) {
            this._curCardBack = e;
            this._curCardBackInd = CardBackTrait_1.CARD_BACKS.indexOf(e);
            this.switchToNextCardBack();
        }
        else {
            this._curCardBackInd = -1;
            this._curCardBack = "default";
            this.setCurCardBack(this._curCardBack);
        }
    };
    CardBackTrait.prototype.getCurCardBack = function () {
        return this.localData.cardBack || "default";
    };
    CardBackTrait.prototype.setCurCardBack = function (t) {
        this.localData.cardBack = t;
        UserModel_1.default.getInstance().setCardBackColor(t);
    };
    CardBackTrait.prototype.switchToNextCardBack = function () {
        if (this._switchType === CardBackTrait_1.TYPE_RANDOM) {
            this._curCardBackInd = Math.floor(Math.random() * CardBackTrait_1.CARD_BACKS.length);
        }
        else {
            this._curCardBackInd = (this._curCardBackInd + 1) % CardBackTrait_1.CARD_BACKS.length;
        }
        (this._curCardBackInd < 0 || this._curCardBackInd >= CardBackTrait_1.CARD_BACKS.length) && (this._curCardBackInd = 0);
        this._curCardBack = CardBackTrait_1.CARD_BACKS[this._curCardBackInd];
        this.setCurCardBack(this._curCardBack);
    };
    CardBackTrait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            this.switchToNextCardBack();
            this._switchType, CardBackTrait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] 切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBackTrait.prototype.onGsListener_onReplayGame = function (t, r) {
        try {
            this.switchToNextCardBack();
            this._switchType, CardBackTrait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] Replay切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBackTrait.prototype.onMainGameBtnBack_onClick = function (t, r) {
        try {
            this.switchToNextCardBack();
            this._switchType, CardBackTrait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] 返回大厅切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBackTrait.prototype.onUISetBtnBack_onBtnClk = function (t, r) {
        try {
            this.switchToNextCardBack();
            this._switchType, CardBackTrait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] 设置对话框返回切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBackTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var e;
        try {
            var i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
            if ("gameplay_img_mj_dn" === i || "gameplay_img_mj_up" === i) {
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
                        bundleName: CardBackTrait_1.BUNDLE_NAME,
                        fromAtlas: false
                    }
                });
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBackTrait.prototype.onTileNodeObj_playAnim = function (t, r) {
        var e;
        try {
            if ("spine/rollcard/gameplay_flip" === (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
                if ("default" === this._curCardBack) {
                    r();
                    return;
                }
                var i = "spine/" + this._curCardBack + "/gameplay_flip";
                t.args[0] = i;
                t.args[6] = CardBackTrait_1.BUNDLE_NAME;
                r();
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBackTrait_1.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardBackTrait_1;
    CardBackTrait.traitKey = "CardBack";
    CardBackTrait.BUNDLE_NAME = "r_cardBack";
    CardBackTrait.TYPE_SEQUENTIAL = 1;
    CardBackTrait.TYPE_RANDOM = 2;
    CardBackTrait.CARD_BACKS = ["default", "blue", "cyan", "pink", "purple", "red"];
    CardBackTrait = CardBackTrait_1 = __decorate([
        mj.trait,
        mj.class("CardBackTrait")
    ], CardBackTrait);
    return CardBackTrait;
}(Trait_1.default));
exports.default = CardBackTrait;

cc._RF.pop();