"use strict";
cc._RF.push(module, '6c4365hEcVCO7jgjLHTEJwp', 'WatchAdGetPropView');
// subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropView.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchAdGetPropType = void 0;
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var DAdVisit_1 = require("../../../Scripts/gamePlay/dot/DAdVisit");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DAdRewardEnter_1 = require("../../../Scripts/gamePlay/dot/DAdRewardEnter");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var WatchAdGetPropType;
(function (WatchAdGetPropType) {
    WatchAdGetPropType[WatchAdGetPropType["shuffle"] = 0] = "shuffle";
    WatchAdGetPropType[WatchAdGetPropType["hitTips"] = 1] = "hitTips";
    WatchAdGetPropType[WatchAdGetPropType["revert"] = 2] = "revert";
})(WatchAdGetPropType = exports.WatchAdGetPropType || (exports.WatchAdGetPropType = {}));
var WatchAdGetPropView = /** @class */ (function (_super) {
    __extends(WatchAdGetPropView, _super);
    function WatchAdGetPropView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contentNode = null;
        _this._titleLabel = null;
        _this._descLabel = null;
        _this._btnLabel = null;
        _this._iconSprite = null;
        _this._btnClose = null;
        _this._btnConfirm = null;
        return _this;
    }
    WatchAdGetPropView_1 = WatchAdGetPropView;
    WatchAdGetPropView.getConfig = function (t) {
        switch (t) {
            case WatchAdGetPropType.shuffle:
                return {
                    type: WatchAdGetPropType.shuffle,
                    title: "Free Shuffle",
                    desc: "Watch an ad to get a Shuffle",
                    titleKey: "MahjongTiles_PropPurchase_Title_1",
                    descKey: "MahjongTiles_PropPurchase_Purchase_1",
                    btnKey: "MahjongTiles_Revive_Option_1",
                    iconPath: "texture/common/ad_icon_refresh"
                };
            case WatchAdGetPropType.hitTips:
                return {
                    type: WatchAdGetPropType.hitTips,
                    title: "Free Hint",
                    desc: "Watch an ad to get a Hint",
                    titleKey: "MahjongTiles_PropPurchase_Title_2",
                    descKey: "MahjongTiles_PropPurchase_Purchase_2",
                    btnKey: "MahjongTiles_PropPurchase_Get_1",
                    iconPath: "texture/common/ad_icon_hint"
                };
            case WatchAdGetPropType.revert:
                return {
                    type: WatchAdGetPropType.revert,
                    title: "Free Revert",
                    desc: "Watch an ad to get a Revert",
                    titleKey: "Tiles_PropPurchase_Title_3",
                    descKey: "MahjongTiles_PropPurchase_Purchase_3",
                    btnKey: "MahjongTiles_PropPurchase_Get_1",
                    iconPath: "texture/common/ad_icon_revert"
                };
            default:
                return null;
        }
    };
    WatchAdGetPropView.prototype.getDescNode = function () {
        var t, e;
        return null !== (e = null === (t = this._descLabel) || void 0 === t ? void 0 : t.node) && void 0 !== e ? e : null;
    };
    WatchAdGetPropView.prototype.onLoad = function () {
        var e, r, o;
        _super.prototype.onLoad.call(this);
        this._contentNode = this.node.getChildByName("content_node");
        if (this._contentNode) {
            this._titleLabel = null === (e = this._contentNode.getChildByName("title")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
            this._descLabel = null === (r = this._contentNode.getChildByName("desc")) || void 0 === r ? void 0 : r.getComponent(cc.Label);
            this._iconSprite = null === (o = this._contentNode.getChildByName("icon")) || void 0 === o ? void 0 : o.getComponent(cc.Sprite);
            this._btnClose = this._contentNode.getChildByName("btn_close");
            this._btnConfirm = this._contentNode.getChildByName("btn_sure");
            this._btnConfirm && (this._btnLabel = this._btnConfirm.getComponentInChildren(cc.Label));
            this.registerButtons();
        }
        else
            console.error("[WatchAdGetPropView] 找不到 content_node");
    };
    WatchAdGetPropView.prototype.registerButtons = function () {
        this._btnClose && this.OnButtonClick(this._btnClose, this.onCloseClick.bind(this));
        this._btnConfirm && this.OnButtonClick(this._btnConfirm, this.onConfirmClick.bind(this));
    };
    WatchAdGetPropView.prototype.setContent = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e, o, i, n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(i = WatchAdGetPropView_1.getConfig(t))) {
                            console.error("[WatchAdGetPropView] 无效的道具类型:", t);
                            return [2 /*return*/];
                        }
                        (null === (e = this._titleLabel) || void 0 === e ? void 0 : e.node) && I18NStrings_1.default.setText(this._titleLabel.node, i.title, i.titleKey);
                        (null === (o = this._descLabel) || void 0 === o ? void 0 : o.node) && I18NStrings_1.default.setText(this._descLabel.node, i.desc, i.descKey);
                        this._btnLabel && I18NStrings_1.default.setText(this._btnLabel.node, "Sure", i.btnKey);
                        return [4 /*yield*/, this.loadIcon(i.iconPath)];
                    case 1:
                        _a.sent();
                        n = t === WatchAdGetPropType.shuffle ? DGameBtnClick_1.EFreeItemClickType.shuffleDisplayed : t === WatchAdGetPropType.hitTips ? DGameBtnClick_1.EFreeItemClickType.hintDisplayed : DGameBtnClick_1.EFreeItemClickType.revertDisplayed;
                        DGameBtnClick_1.DotGameBtnClick.dotFreeItem(n);
                        return [2 /*return*/];
                }
            });
        });
    };
    WatchAdGetPropView.prototype.loadIcon = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            return __generator(this, function (_a) {
                e = this;
                if (!this._iconSprite) {
                    console.error("[WatchAdGetPropView] 找不到图标Sprite组件");
                    return [2 /*return*/];
                }
                try {
                    this._iconSprite.node.active = false;
                    this.delegate.loadRes(t, cc.SpriteFrame, "mainRes").then(function (t) {
                        if (t && cc.isValid(e._iconSprite)) {
                            e._iconSprite.node.active = true;
                            e._iconSprite.spriteFrame = t;
                        }
                    });
                }
                catch (e) {
                    console.error("[WatchAdGetPropView] 图标加载失败:", t, e);
                }
                return [2 /*return*/];
            });
        });
    };
    WatchAdGetPropView.prototype.onCloseClick = function () {
        var t, e = this.delegate.getPropType(), r = this._getAdPosition(e);
        t = e === WatchAdGetPropType.shuffle ? DGameBtnClick_1.EFreeItemClickType.shuffleClosed : e === WatchAdGetPropType.hitTips ? DGameBtnClick_1.EFreeItemClickType.hintClosed : DGameBtnClick_1.EFreeItemClickType.revertClosed;
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(r, false);
        DGameBtnClick_1.DotGameBtnClick.dotFreeItem(t);
        this.delegate.close();
    };
    WatchAdGetPropView.prototype._getAdPosition = function (t) {
        return t === WatchAdGetPropType.shuffle ? DGameAdShow_1.EAdPosition.InGameMotivation_Reshuffle : t === WatchAdGetPropType.hitTips ? DGameAdShow_1.EAdPosition.InGameMotivation_Hint : t === WatchAdGetPropType.revert ? DGameAdShow_1.EAdPosition.InGameMotivation_Revert : DGameAdShow_1.EAdPosition.InGameMotivation_Hint;
    };
    WatchAdGetPropView.prototype.onConfirmClick = function () {
        var t, e = this.delegate.getPropType(), r = this._getAdPosition(e);
        t = e === WatchAdGetPropType.shuffle ? DGameBtnClick_1.EFreeItemClickType.shuffleGain : e === WatchAdGetPropType.hitTips ? DGameBtnClick_1.EFreeItemClickType.hintGain : DGameBtnClick_1.EFreeItemClickType.revertGain;
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(r, true);
        DAdRewardEnter_1.DotAdRewardEnter.dot(false, r);
        DGameBtnClick_1.DotGameBtnClick.dotFreeItem(t);
        this.delegate.playAd();
    };
    var WatchAdGetPropView_1;
    WatchAdGetPropView.prefabUrl = "prefabs/ui/WatchAdGetPropsView";
    WatchAdGetPropView.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("WatchAdVw_onLoad")
    ], WatchAdGetPropView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("WatchAdVw_setContent")
    ], WatchAdGetPropView.prototype, "setContent", null);
    __decorate([
        mj.traitEvent("WatchAdVw_closeClick")
    ], WatchAdGetPropView.prototype, "onCloseClick", null);
    WatchAdGetPropView = WatchAdGetPropView_1 = __decorate([
        mj.class
    ], WatchAdGetPropView);
    return WatchAdGetPropView;
}(UIView_1.default));
exports.default = WatchAdGetPropView;

cc._RF.pop();