
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dhdGNoQWRHZXRQcm9wL1NjcmlwdHMvV2F0Y2hBZEdldFByb3BWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELG1FQUFvRTtBQUNwRSx5RUFBd0U7QUFDeEUsK0VBQWdGO0FBQ2hGLG9FQUF5RjtBQUN6RiwyRUFBc0U7QUFDdEUsSUFBWSxrQkFJWDtBQUpELFdBQVksa0JBQWtCO0lBQzVCLGlFQUFXLENBQUE7SUFDWCxpRUFBVyxDQUFBO0lBQ1gsK0RBQVUsQ0FBQTtBQUNaLENBQUMsRUFKVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQUk3QjtBQUVEO0lBQWdELHNDQUFNO0lBQXREO1FBQUEscUVBK0hDO1FBOUhDLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUF3SHJCLENBQUM7MkJBL0hvQixrQkFBa0I7SUFVOUIsNEJBQVMsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssa0JBQWtCLENBQUMsT0FBTztnQkFDN0IsT0FBTztvQkFDTCxJQUFJLEVBQUUsa0JBQWtCLENBQUMsT0FBTztvQkFDaEMsS0FBSyxFQUFFLGNBQWM7b0JBQ3JCLElBQUksRUFBRSw4QkFBOEI7b0JBQ3BDLFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLE9BQU8sRUFBRSxzQ0FBc0M7b0JBQy9DLE1BQU0sRUFBRSw4QkFBOEI7b0JBQ3RDLFFBQVEsRUFBRSxnQ0FBZ0M7aUJBQzNDLENBQUM7WUFDSixLQUFLLGtCQUFrQixDQUFDLE9BQU87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MERBU3JDO0lBakhrQixrQkFBa0I7UUFEdEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxrQkFBa0IsQ0ErSHRDO0lBQUQseUJBQUM7Q0EvSEQsQUErSEMsQ0EvSCtDLGdCQUFNLEdBK0hyRDtrQkEvSG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCB7IERvdEFkVmlzaXQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQWRWaXNpdCc7XG5pbXBvcnQgeyBFQWRQb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93JztcbmltcG9ydCB7IERvdEFkUmV3YXJkRW50ZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQWRSZXdhcmRFbnRlcic7XG5pbXBvcnQgeyBFRnJlZUl0ZW1DbGlja1R5cGUsIERvdEdhbWVCdG5DbGljayB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuZXhwb3J0IGVudW0gV2F0Y2hBZEdldFByb3BUeXBlIHtcbiAgc2h1ZmZsZSA9IDAsXG4gIGhpdFRpcHMgPSAxLFxuICByZXZlcnQgPSAyLFxufVxuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXRjaEFkR2V0UHJvcFZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBfY29udGVudE5vZGUgPSBudWxsO1xuICBfdGl0bGVMYWJlbCA9IG51bGw7XG4gIF9kZXNjTGFiZWwgPSBudWxsO1xuICBfYnRuTGFiZWwgPSBudWxsO1xuICBfaWNvblNwcml0ZSA9IG51bGw7XG4gIF9idG5DbG9zZSA9IG51bGw7XG4gIF9idG5Db25maXJtID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy91aS9XYXRjaEFkR2V0UHJvcHNWaWV3XCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJtYWluUmVzXCI7XG4gIHN0YXRpYyBnZXRDb25maWcodCkge1xuICAgIHN3aXRjaCAodCkge1xuICAgICAgY2FzZSBXYXRjaEFkR2V0UHJvcFR5cGUuc2h1ZmZsZTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiBXYXRjaEFkR2V0UHJvcFR5cGUuc2h1ZmZsZSxcbiAgICAgICAgICB0aXRsZTogXCJGcmVlIFNodWZmbGVcIixcbiAgICAgICAgICBkZXNjOiBcIldhdGNoIGFuIGFkIHRvIGdldCBhIFNodWZmbGVcIixcbiAgICAgICAgICB0aXRsZUtleTogXCJNYWhqb25nVGlsZXNfUHJvcFB1cmNoYXNlX1RpdGxlXzFcIixcbiAgICAgICAgICBkZXNjS2V5OiBcIk1haGpvbmdUaWxlc19Qcm9wUHVyY2hhc2VfUHVyY2hhc2VfMVwiLFxuICAgICAgICAgIGJ0bktleTogXCJNYWhqb25nVGlsZXNfUmV2aXZlX09wdGlvbl8xXCIsXG4gICAgICAgICAgaWNvblBhdGg6IFwidGV4dHVyZS9jb21tb24vYWRfaWNvbl9yZWZyZXNoXCJcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgV2F0Y2hBZEdldFByb3BUeXBlLmhpdFRpcHM6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogV2F0Y2hBZEdldFByb3BUeXBlLmhpdFRpcHMsXG4gICAgICAgICAgdGl0bGU6IFwiRnJlZSBIaW50XCIsXG4gICAgICAgICAgZGVzYzogXCJXYXRjaCBhbiBhZCB0byBnZXQgYSBIaW50XCIsXG4gICAgICAgICAgdGl0bGVLZXk6IFwiTWFoam9uZ1RpbGVzX1Byb3BQdXJjaGFzZV9UaXRsZV8yXCIsXG4gICAgICAgICAgZGVzY0tleTogXCJNYWhqb25nVGlsZXNfUHJvcFB1cmNoYXNlX1B1cmNoYXNlXzJcIixcbiAgICAgICAgICBidG5LZXk6IFwiTWFoam9uZ1RpbGVzX1Byb3BQdXJjaGFzZV9HZXRfMVwiLFxuICAgICAgICAgIGljb25QYXRoOiBcInRleHR1cmUvY29tbW9uL2FkX2ljb25faGludFwiXG4gICAgICAgIH07XG4gICAgICBjYXNlIFdhdGNoQWRHZXRQcm9wVHlwZS5yZXZlcnQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHlwZTogV2F0Y2hBZEdldFByb3BUeXBlLnJldmVydCxcbiAgICAgICAgICB0aXRsZTogXCJGcmVlIFJldmVydFwiLFxuICAgICAgICAgIGRlc2M6IFwiV2F0Y2ggYW4gYWQgdG8gZ2V0IGEgUmV2ZXJ0XCIsXG4gICAgICAgICAgdGl0bGVLZXk6IFwiVGlsZXNfUHJvcFB1cmNoYXNlX1RpdGxlXzNcIixcbiAgICAgICAgICBkZXNjS2V5OiBcIk1haGpvbmdUaWxlc19Qcm9wUHVyY2hhc2VfUHVyY2hhc2VfM1wiLFxuICAgICAgICAgIGJ0bktleTogXCJNYWhqb25nVGlsZXNfUHJvcFB1cmNoYXNlX0dldF8xXCIsXG4gICAgICAgICAgaWNvblBhdGg6IFwidGV4dHVyZS9jb21tb24vYWRfaWNvbl9yZXZlcnRcIlxuICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGdldERlc2NOb2RlKCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy5fZGVzY0xhYmVsKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm5vZGUpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiBudWxsO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2F0Y2hBZFZ3X29uTG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHIsIG87XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29udGVudE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50X25vZGVcIik7XG4gICAgaWYgKHRoaXMuX2NvbnRlbnROb2RlKSB7XG4gICAgICB0aGlzLl90aXRsZUxhYmVsID0gbnVsbCA9PT0gKGUgPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICB0aGlzLl9kZXNjTGFiZWwgPSBudWxsID09PSAociA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwiZGVzY1wiKSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgdGhpcy5faWNvblNwcml0ZSA9IG51bGwgPT09IChvID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgdGhpcy5fYnRuQ2xvc2UgPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9jbG9zZVwiKTtcbiAgICAgIHRoaXMuX2J0bkNvbmZpcm0gPSB0aGlzLl9jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9zdXJlXCIpO1xuICAgICAgdGhpcy5fYnRuQ29uZmlybSAmJiAodGhpcy5fYnRuTGFiZWwgPSB0aGlzLl9idG5Db25maXJtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpKTtcbiAgICAgIHRoaXMucmVnaXN0ZXJCdXR0b25zKCk7XG4gICAgfSBlbHNlIGNvbnNvbGUuZXJyb3IoXCJbV2F0Y2hBZEdldFByb3BWaWV3XSDmib7kuI3liLAgY29udGVudF9ub2RlXCIpO1xuICB9XG4gIHJlZ2lzdGVyQnV0dG9ucygpIHtcbiAgICB0aGlzLl9idG5DbG9zZSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYnRuQ2xvc2UsIHRoaXMub25DbG9zZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX2J0bkNvbmZpcm0gJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0bkNvbmZpcm0sIHRoaXMub25Db25maXJtQ2xpY2suYmluZCh0aGlzKSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJXYXRjaEFkVndfc2V0Q29udGVudFwiKVxuICBhc3luYyBzZXRDb250ZW50KHQpIHtcbiAgICB2YXIgZSwgbztcbiAgICB2YXIgaSwgbjtcbiAgICBpZiAoIShpID0gV2F0Y2hBZEdldFByb3BWaWV3LmdldENvbmZpZyh0KSkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbV2F0Y2hBZEdldFByb3BWaWV3XSDml6DmlYjnmoTpgZPlhbfnsbvlnos6XCIsIHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAobnVsbCA9PT0gKGUgPSB0aGlzLl90aXRsZUxhYmVsKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm5vZGUpICYmIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fdGl0bGVMYWJlbC5ub2RlLCBpLnRpdGxlLCBpLnRpdGxlS2V5KTtcbiAgICAobnVsbCA9PT0gKG8gPSB0aGlzLl9kZXNjTGFiZWwpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubm9kZSkgJiYgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl9kZXNjTGFiZWwubm9kZSwgaS5kZXNjLCBpLmRlc2NLZXkpO1xuICAgIHRoaXMuX2J0bkxhYmVsICYmIEkxOE5TdHJpbmdzLnNldFRleHQodGhpcy5fYnRuTGFiZWwubm9kZSwgXCJTdXJlXCIsIGkuYnRuS2V5KTtcbiAgICBhd2FpdCB0aGlzLmxvYWRJY29uKGkuaWNvblBhdGgpO1xuICAgIG4gPSB0ID09PSBXYXRjaEFkR2V0UHJvcFR5cGUuc2h1ZmZsZSA/IEVGcmVlSXRlbUNsaWNrVHlwZS5zaHVmZmxlRGlzcGxheWVkIDogdCA9PT0gV2F0Y2hBZEdldFByb3BUeXBlLmhpdFRpcHMgPyBFRnJlZUl0ZW1DbGlja1R5cGUuaGludERpc3BsYXllZCA6IEVGcmVlSXRlbUNsaWNrVHlwZS5yZXZlcnREaXNwbGF5ZWQ7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEZyZWVJdGVtKG4pO1xuICAgIHJldHVybjtcbiAgfVxuICBhc3luYyBsb2FkSWNvbih0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy5faWNvblNwcml0ZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltXYXRjaEFkR2V0UHJvcFZpZXddIOaJvuS4jeWIsOWbvuagh1Nwcml0Zee7hOS7tlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2ljb25TcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUubG9hZFJlcyh0LCBjYy5TcHJpdGVGcmFtZSwgXCJtYWluUmVzXCIpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgJiYgY2MuaXNWYWxpZChlLl9pY29uU3ByaXRlKSkge1xuICAgICAgICAgIGUuX2ljb25TcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGUuX2ljb25TcHJpdGUuc3ByaXRlRnJhbWUgPSB0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1dhdGNoQWRHZXRQcm9wVmlld10g5Zu+5qCH5Yqg6L295aSx6LSlOlwiLCB0LCBlKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiV2F0Y2hBZFZ3X2Nsb3NlQ2xpY2tcIilcbiAgb25DbG9zZUNsaWNrKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHRoaXMuZGVsZWdhdGUuZ2V0UHJvcFR5cGUoKSxcbiAgICAgIHIgPSB0aGlzLl9nZXRBZFBvc2l0aW9uKGUpO1xuICAgIHQgPSBlID09PSBXYXRjaEFkR2V0UHJvcFR5cGUuc2h1ZmZsZSA/IEVGcmVlSXRlbUNsaWNrVHlwZS5zaHVmZmxlQ2xvc2VkIDogZSA9PT0gV2F0Y2hBZEdldFByb3BUeXBlLmhpdFRpcHMgPyBFRnJlZUl0ZW1DbGlja1R5cGUuaGludENsb3NlZCA6IEVGcmVlSXRlbUNsaWNrVHlwZS5yZXZlcnRDbG9zZWQ7XG4gICAgRG90QWRWaXNpdC5kb3RBZFZpc2l0UmV3YXJkQUQociwgZmFsc2UpO1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RGcmVlSXRlbSh0KTtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gIH1cbiAgX2dldEFkUG9zaXRpb24odCkge1xuICAgIHJldHVybiB0ID09PSBXYXRjaEFkR2V0UHJvcFR5cGUuc2h1ZmZsZSA/IEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fUmVzaHVmZmxlIDogdCA9PT0gV2F0Y2hBZEdldFByb3BUeXBlLmhpdFRpcHMgPyBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX0hpbnQgOiB0ID09PSBXYXRjaEFkR2V0UHJvcFR5cGUucmV2ZXJ0ID8gRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXZlcnQgOiBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX0hpbnQ7XG4gIH1cbiAgb25Db25maXJtQ2xpY2soKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gdGhpcy5kZWxlZ2F0ZS5nZXRQcm9wVHlwZSgpLFxuICAgICAgciA9IHRoaXMuX2dldEFkUG9zaXRpb24oZSk7XG4gICAgdCA9IGUgPT09IFdhdGNoQWRHZXRQcm9wVHlwZS5zaHVmZmxlID8gRUZyZWVJdGVtQ2xpY2tUeXBlLnNodWZmbGVHYWluIDogZSA9PT0gV2F0Y2hBZEdldFByb3BUeXBlLmhpdFRpcHMgPyBFRnJlZUl0ZW1DbGlja1R5cGUuaGludEdhaW4gOiBFRnJlZUl0ZW1DbGlja1R5cGUucmV2ZXJ0R2FpbjtcbiAgICBEb3RBZFZpc2l0LmRvdEFkVmlzaXRSZXdhcmRBRChyLCB0cnVlKTtcbiAgICBEb3RBZFJld2FyZEVudGVyLmRvdChmYWxzZSwgcik7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEZyZWVJdGVtKHQpO1xuICAgIHRoaXMuZGVsZWdhdGUucGxheUFkKCk7XG4gIH1cbn0iXX0=