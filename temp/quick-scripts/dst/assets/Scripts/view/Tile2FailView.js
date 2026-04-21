
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/view/Tile2FailView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78eb7hNVGFEgYb0hpac/c/n', 'Tile2FailView');
// Scripts/view/Tile2FailView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var UIView_1 = require("../framework/ui/UIView");
var AdManager_1 = require("../base/ad/AdManager");
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var DAdRewardEnter_1 = require("../gamePlay/dot/DAdRewardEnter");
var DAdVisit_1 = require("../gamePlay/dot/DAdVisit");
var DGameAdShow_1 = require("../gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../gamePlay/dot/DGameAdShowStage");
var DGameBtnClick_1 = require("../dot/DGameBtnClick");
var CardUtil_1 = require("../gamePlay/user/CardUtil");
var BaseSprite_1 = require("../gamePlay/base/ui/BaseSprite");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var BaseLabel_1 = require("../gamePlay/base/ui/BaseLabel");
var UserModel_1 = require("../gamePlay/user/UserModel");
var Tile2FailView = /** @class */ (function (_super) {
    __extends(Tile2FailView, _super);
    function Tile2FailView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnUse = null;
        _this.btnReplay = null;
        _this.nodeNum = null;
        _this.nodeUse = null;
        _this.nodeAd = null;
        _this.labelNum = null;
        _this.contentNode = null;
        _this.btnUsePos = null;
        _this.tilesContainer = null;
        _this.reviveNum = 0;
        _this._tilePreviewLayout = "threePlusOne";
        _this._adReviveAllowed = void 0;
        return _this;
    }
    Tile2FailView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.contentNode = this.node.getChildByName("content_node");
        this.btnUse = this.contentNode.getChildByName("btn_use");
        this.btnReplay = this.contentNode.getChildByName("btn_replay");
        this.nodeNum = this.btnUse.getChildByName("spr").getChildByName("nodeNum");
        this.nodeUse = this.btnUse.getChildByName("spr").getChildByName("use");
        this.nodeAd = this.btnUse.getChildByName("spr").getChildByName("ad");
        this.labelNum = this.nodeNum.getChildByName("labelNum").getComponent(cc.Label);
        this.btnUsePos = this.btnUse.getPosition();
        this.btnUse && this.OnButtonClick(this.btnUse, this.onUseBtnClick.bind(this));
        this.btnReplay && this.OnButtonClick(this.btnReplay, this.onReplayBtnClick.bind(this));
        mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
    };
    Tile2FailView.prototype.resetRow4UI = function () {
        var e = function e(e, t, o, n, i) {
            if (e && cc.isValid(e)) {
                e.setPosition(t, o);
                e.setContentSize(n, i);
            }
        }, t = this.node.getChildByName("bg1");
        if (t) {
            e(t, -1, 438, 878, 986);
            var o = t.getChildByName("top");
            o && e(o, 0, 37, 886, 143);
            var n = t.getChildByName("com_bg_pop_2");
            n && e(n, 0, -259, 768, 416);
        }
        if (this.contentNode && cc.isValid(this.contentNode)) {
            this.contentNode.setPosition(0, 0);
            var i = this.contentNode.getChildByName("title");
            i && e(i, 3, 475, 840, 110);
            var r = this.contentNode.getChildByName("slot_bg");
            if (r) {
                e(r, 0.779, 176.133, 632, 211);
                var a = r.getComponent(cc.Sprite);
                a || (a = r.addComponent(cc.Sprite));
                a.sizeMode = cc.Sprite.SizeMode.CUSTOM;
                a.trim = false;
                BaseSprite_1.default.refreshWithNode(r, "texture/tile2Fail/gameplay_img_tile2_grid", false, false, "mainRes");
            }
        }
        if (this.btnUse && cc.isValid(this.btnUse)) {
            this.btnUse.setPosition(0, -180.259);
            this.btnUse.getChildByName("spr").scale = 1;
        }
        if (this.btnReplay && cc.isValid(this.btnReplay)) {
            this.btnReplay.setPosition(0, -367.968);
            this.btnReplay.getChildByName("spr").scale = 1;
        }
        this.btnUsePos = this.btnUse ? this.btnUse.getPosition() : null;
    };
    Tile2FailView.prototype.onCloseBtnClick = function () {
        this.delegate.close();
    };
    Tile2FailView.prototype.show = function (e) {
        var t;
        this.reviveNum = e.reviveNum || 0;
        this._adReviveAllowed = e.adReviveAllowed;
        this._tilePreviewLayout = null !== (t = e.tilePreviewLayout) && void 0 !== t ? t : "threePlusOne";
        "row4" === this._tilePreviewLayout && this.resetRow4UI();
        this.addPopupFailCnt();
        this.initBtnUse();
        this.createPreview(e.tiles);
        this.reviveNum <= 0 && DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.InGameMotivation_Revive);
        DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.Show);
        "row4" === this._tilePreviewLayout && mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Fail);
        UserModel_1.default.getInstance().isVibrationEnabled() && VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.DoubleWeak, VibrateManager_1.EVibratePoint.Tile2Fail);
    };
    Tile2FailView.prototype.addPopupFailCnt = function () {
        var e = UserModel_1.default.getInstance().getCurrentGameType();
        e !== GameTypeEnums_1.MjGameType.None && UserModel_1.default.getInstance().getGameDataByGameType(e).addPopupFailCnt();
    };
    Tile2FailView.prototype.initBtnUse = function () {
        var e = this.reviveNum > 0, t = AdManager_1.default.getInstance().checkVideoAdIsReady(), o = false !== this._adReviveAllowed;
        if (e || o && t) {
            this.btnUse.active = true;
            this.nodeNum.active = e;
            this.nodeUse.active = e;
            this.nodeAd.active = !e;
            if (e) {
                this.labelNum.string = this.reviveNum.toString();
            }
            else {
                this.showAdBtnView();
            }
        }
        else {
            this.btnUse.active = false;
            var n = cc.find("bg1", this.node);
            if ("row4" === this._tilePreviewLayout) {
                n && (n.height = 786);
            }
            else {
                n && (n.height = 850);
            }
            this.btnReplay.setPosition(this.btnUsePos);
        }
    };
    Tile2FailView.prototype.onUseBtnClick = function () {
        if (this.reviveNum > 0) {
            this.useRevive();
        }
        else {
            this.watchAdForRevive();
        }
    };
    Tile2FailView.prototype.useRevive = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2Revive,
            from: "item"
        });
        this.delegate.close();
    };
    Tile2FailView.prototype.watchAdForRevive = function () {
        var e = this;
        DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.ShuffleAd);
        DAdRewardEnter_1.DotAdRewardEnter.dot(false, DGameAdShow_1.EAdPosition.InGameMotivation_Revive);
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.InGameMotivation_Revive, true);
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        AdManager_1.default.getInstance().checkVideoAdIsReady() && this.delegate && cc.isValid(this.delegate.rootView) && (this.delegate.rootView.opacity = 0);
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.InGameMotivation_Revive, {
            onSuccess: function () {
                e.onAdReviveSuccess();
            },
            onFailed: function (t) {
                e.onAdReviveFailed(t);
            }
        });
    };
    Tile2FailView.prototype.onAdReviveSuccess = function () {
        if (this.delegate && cc.isValid(this.delegate.rootView)) {
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.Tile2AddProp,
                propType: "revive",
                num: 1,
                reasonId: GameTypeEnums_1.EGetItemReasonId.AdReward,
                reasonInfo: "游戏内激励广告-复活"
            });
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.Tile2Revive,
                from: "ad"
            });
            this.delegate.close();
        }
    };
    Tile2FailView.prototype.showAdBtnView = function () {
        if (this.btnUse && cc.isValid(this.btnUse)) {
            var e = cc.find("spr/ad/desc", this.btnUse);
            if (e && e.width > 380) {
                var t = e.getComponent(cc.Label);
                t && (t.overflow = cc.Label.Overflow.SHRINK);
                e.width = 380;
            }
        }
    };
    Tile2FailView.prototype.onAdReviveFailed = function () {
        this.delegate && cc.isValid(this.delegate.rootView) && (this.delegate.rootView.opacity = 255);
    };
    Tile2FailView.prototype.onReplayBtnClick = function () {
        if (cc.isValid(this.node) && this.delegate && cc.isValid(this.delegate.rootView)) {
            DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.Restart);
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.Restart,
                dieResult: 0,
                callFrom: "fail"
            });
            DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.InGameMotivation_Revive, false);
            this.delegate.close();
        }
    };
    Tile2FailView.prototype.createPreview = function (e) {
        if ("row4" === this._tilePreviewLayout) {
            this._createPreviewRow4(e);
        }
        else {
            this._createPreviewThreePlusOne(e);
        }
    };
    Tile2FailView.prototype._createPreviewRow4 = function (e) {
        var t = this.node.getChildByName("content_node");
        this.tilesContainer = new cc.Node("tiles_container");
        this.tilesContainer.setPosition(-3, 12);
        t.getChildByName("slot_bg").addChild(this.tilesContainer, 10);
        var o = new cc.Node("shadow_layer");
        this.tilesContainer.addChild(o, 0);
        var n = new cc.Node("tile_layer");
        this.tilesContainer.addChild(n, 1);
        for (var i = 0; i < 4; i++) {
            var r = 150 * i - 225, a = null == e ? void 0 : e[i];
            this.createShadow(o, r, 0, 0);
            this.createSingleTileUniform(n, r, 0, null == a ? void 0 : a.resId, a);
        }
    };
    Tile2FailView.prototype._createPreviewThreePlusOne = function (e) {
        var t = this.node.getChildByName("content_node");
        this.tilesContainer = new cc.Node("tiles_container");
        this.tilesContainer.setPosition(12, 1);
        t.getChildByName("slot_bg").addChild(this.tilesContainer, 10);
        var o = new cc.Node("shadow_layer");
        this.tilesContainer.addChild(o, 0);
        var n = new cc.Node("tile_layer");
        this.tilesContainer.addChild(n, 1);
        for (var i = [-151, -1, 130], r = 0; r < 3; r++) {
            var a = null == e ? void 0 : e[r];
            this.createSingleTileReviveStyled(n, i[r], 0, null == a ? void 0 : a.resId, 0, r, a);
        }
        a = null == e ? void 0 : e[3];
        this.createShadow(o, 8, 208, -15);
        this.createSingleTileReviveStyled(n, 8, 208, null == a ? void 0 : a.resId, -15, 3, a);
    };
    Tile2FailView.prototype.createShadow = function (e, t, o, n) {
        if (n === void 0) { n = 0; }
        var i = new cc.Node("imgShadow");
        i.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
        i.getComponent(cc.Sprite).trim = false;
        i.setAnchorPoint(0.5, 0.5);
        i.setPosition(t, o);
        i.angle = n;
        0 !== n && (i.scale = 0.9);
        e.addChild(i);
        var r = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_shadow_dn"), a = r.path, l = r.bundleName, s = r.fromAtlas;
        BaseSprite_1.default.refreshWithNode(i, a, s, false, l);
    };
    Tile2FailView.prototype.createSingleTileUniform = function (e, t, o, n, i) {
        var r, a = new cc.Node("tile_" + (null != n ? n : "back"));
        a.setPosition(t, o);
        var s = new cc.Node("imgCardBg");
        s.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
        s.setAnchorPoint(0.5, 0.5);
        s.zIndex = 0;
        a.addChild(s);
        var c = new cc.Node("imgCard");
        c.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
        c.setAnchorPoint(0.5, 0.5);
        c.setPosition(-3, 3);
        c.zIndex = 1;
        a.addChild(c);
        var u = n === GameTypeEnums_1.ResId.emRankId, p = u ? "gameplay_special_mj_2" : "gameplay_img_mj_up", f = CardUtil_1.default.getAtlasPathAndBundleName(p), d = f.path, h = f.bundleName, y = f.fromAtlas;
        BaseSprite_1.default.refreshWithNode(s, d, y, false, h);
        var m = null;
        if (u)
            m = UserModel_1.default.getInstance().getRankCardResName();
        else {
            var _ = void 0 !== n ? CardUtil_1.default.getByKey(n) : null;
            m = null !== (r = null == _ ? void 0 : _.resName) && void 0 !== r ? r : null;
        }
        if (m) {
            var T = CardUtil_1.default.getAtlasPathAndBundleName(m), b = T.path, E = T.bundleName, S = T.fromAtlas;
            BaseSprite_1.default.refreshWithNode(c, b, S, false, E);
        }
        else {
            var I = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_dn");
            b = I.path, E = I.bundleName, S = I.fromAtlas;
            BaseSprite_1.default.refreshWithNode(c, b, S, false, E);
        }
        this._appendSpecialCardSpine(a, i, 2);
        e.addChild(a);
    };
    Tile2FailView.prototype.createSingleTileReviveStyled = function (e, t, o, n, i, r, a) {
        if (i === void 0) { i = 0; }
        if (r === void 0) { r = 0; }
        var s;
        var c = new cc.Node("tile_" + (null != n ? n : "back"));
        c.setPosition(t, o);
        c.angle = i;
        var u = new cc.Node("imgCardBg");
        u.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
        u.setAnchorPoint(0.5, 0.5);
        u.zIndex = 0;
        c.addChild(u);
        var p = new cc.Node("imgCard");
        p.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
        p.setAnchorPoint(0.5, 0.5);
        if (3 === r) {
            p.setPosition(-3, 5);
        }
        else {
            if (r <= 1 && r >= 0) {
                p.setPosition(-10, 2);
            }
            else {
                p.setPosition(6, 2);
            }
        }
        p.zIndex = 1;
        c.addChild(p);
        var f = n === GameTypeEnums_1.ResId.emRankId;
        if (3 === r) {
            var d = f ? "gameplay_special_mj_2" : "gameplay_img_mj_up", h = CardUtil_1.default.getAtlasPathAndBundleName(d), y = h.path, m = h.bundleName, _ = h.fromAtlas;
            BaseSprite_1.default.refreshWithNode(u, y, _, false, m);
        }
        else if (2 === r) {
            d = f ? "revive_img_mj4" : "revive_img_mj2";
            BaseSprite_1.default.refreshWithNode(u, "texture/tile2Fail/" + d, false, false, "mainRes");
        }
        else {
            d = f ? "revive_img_mj3" : "revive_img_mj1";
            BaseSprite_1.default.refreshWithNode(u, "texture/tile2Fail/" + d, false, false, "mainRes");
        }
        var T = null;
        if (f)
            T = UserModel_1.default.getInstance().getRankCardResName();
        else {
            var b = void 0 !== n ? CardUtil_1.default.getByKey(n) : null;
            T = null !== (s = null == b ? void 0 : b.resName) && void 0 !== s ? s : null;
        }
        if (T) {
            var E = CardUtil_1.default.getAtlasPathAndBundleName(T), S = E.path, I = E.bundleName, w = E.fromAtlas;
            BaseSprite_1.default.refreshWithNode(p, S, w, false, I);
        }
        else {
            var B = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_up");
            S = B.path, I = B.bundleName, w = B.fromAtlas;
            BaseSprite_1.default.refreshWithNode(p, S, w, false, I);
        }
        var x = [cc.v2(-8, -6), cc.v2(-8, -6), cc.v2(10, -6)];
        this._appendSpecialCardSpine(c, a, 2, x[r]);
        e.addChild(c);
    };
    Tile2FailView.prototype._appendSpecialCardSpine = function (e, t, o, n) {
        if (t) {
            if (t.isDaxiao) {
                (i = new cc.Node("DaxiaoCardFlagNode")).zIndex = o;
                e.addChild(i);
                (r = BaseSpine_1.default.refreshWithNode(i, "spine/daxiao/idle/gameplay_hintGreat", "mainRes")).setAnimation("init", -1, null, false);
                n && i.setPosition(n);
            }
            if (t.duoxiaoCount > 0) {
                var i, r;
                (i = new cc.Node("DuoxiaoCardFlagNode")).zIndex = o;
                e.addChild(i);
                (r = BaseSpine_1.default.refreshWithNode(i, "spine/duoxiao/idle/gameplay_hintCombo", "mainRes")).setAnimation("init", -1, null, false);
                r.attachNode("hook_number", function () {
                    var e = BaseLabel_1.default.create(t.duoxiaoCount.toString(), "font/SPARTAN-BOLD", "mainRes", 36);
                    e.node.name = "DuoxiaoCardCountNode";
                    e.setColor(new cc.Color().fromHEX("#013713"));
                    e.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
                    return e.node;
                });
                n && i.setPosition(n);
            }
        }
    };
    Tile2FailView.prototype.onDestroy = function () {
        mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    Tile2FailView.prefabUrl = "prefabs/ui/Tile2FailView";
    __decorate([
        mj.traitEvent("Tile2FailVw_onLoad")
    ], Tile2FailView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("Tile2FailVw_show")
    ], Tile2FailView.prototype, "show", null);
    __decorate([
        mj.traitEvent("Tile2FailVw_initBtnUse")
    ], Tile2FailView.prototype, "initBtnUse", null);
    __decorate([
        mj.traitEvent("Tile2FailVw_useRevive")
    ], Tile2FailView.prototype, "useRevive", null);
    __decorate([
        mj.traitEvent("Tile2FailVw_watchAdRevive")
    ], Tile2FailView.prototype, "watchAdForRevive", null);
    __decorate([
        mj.traitEvent("Tile2FailVw_adReviveSucc")
    ], Tile2FailView.prototype, "onAdReviveSuccess", null);
    __decorate([
        mj.traitEvent("Tile2FailVw_showAdBtnVw")
    ], Tile2FailView.prototype, "showAdBtnView", null);
    __decorate([
        mj.traitEvent("Tile2FailVw_replay")
    ], Tile2FailView.prototype, "onReplayBtnClick", null);
    __decorate([
        mj.traitEvent("Tile2FailVw_createPreview")
    ], Tile2FailView.prototype, "createPreview", null);
    __decorate([
        mj.traitEvent("Tile2FailVw_destroy")
    ], Tile2FailView.prototype, "onDestroy", null);
    Tile2FailView = __decorate([
        mj.class
    ], Tile2FailView);
    return Tile2FailView;
}(UIView_1.default));
exports.default = Tile2FailView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3ZpZXcvVGlsZTJGYWlsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQXFFO0FBQ3JFLDBFQUF5RztBQUN6RyxzRUFBcUU7QUFDckUsaURBQTRDO0FBQzVDLGtEQUE2QztBQUM3QywwRUFBMEc7QUFDMUcsaUVBQWtFO0FBQ2xFLHFEQUFzRDtBQUN0RCwyREFBMEQ7QUFDMUQscUVBQXNFO0FBQ3RFLHNEQUF5RTtBQUN6RSxzREFBaUQ7QUFDakQsNkRBQXdEO0FBQ3hELDJEQUFzRDtBQUN0RCwyREFBc0Q7QUFDdEQsd0RBQW1EO0FBRW5EO0lBQTJDLGlDQUFNO0lBQWpEO1FBQUEscUVBeVhDO1FBeFhDLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2Qsd0JBQWtCLEdBQUcsY0FBYyxDQUFDO1FBQ3BDLHNCQUFnQixHQUFHLEtBQUssQ0FBQyxDQUFDOztJQTZXNUIsQ0FBQztJQTFXQyw4QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFNB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LElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3RGO1FBQ0QsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUNELG9D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LENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3NEQVV4QztJQUtEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzt5REFZbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7c0RBTzFDO0lBOEtEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztrREFJcEM7SUF4WGtCLGFBQWE7UUFEakMsRUFBRSxDQUFDLEtBQUs7T0FDWSxhQUFhLENBeVhqQztJQUFELG9CQUFDO0NBelhELEFBeVhDLENBelgwQyxnQkFBTSxHQXlYaEQ7a0JBelhvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFQXVkaW9JRCwgTWpHYW1lVHlwZSwgRUdldEl0ZW1SZWFzb25JZCwgUmVzSWQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCBBZE1hbmFnZXIgZnJvbSAnLi4vYmFzZS9hZC9BZE1hbmFnZXInO1xuaW1wb3J0IFZpYnJhdGVNYW5hZ2VyLCB7IEVWaWJyYXRlU3RyZW5ndGgsIEVWaWJyYXRlUG9pbnQgfSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3ZpYnJhdGUvVmlicmF0ZU1hbmFnZXInO1xuaW1wb3J0IHsgRG90QWRSZXdhcmRFbnRlciB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9EQWRSZXdhcmRFbnRlcic7XG5pbXBvcnQgeyBEb3RBZFZpc2l0IH0gZnJvbSAnLi4vZ2FtZVBsYXkvZG90L0RBZFZpc2l0JztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vZ2FtZVBsYXkvZG90L0RHYW1lQWRTaG93JztcbmltcG9ydCB7IERvdEdhbWVBZFNob3dTdGFnZSB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvd1N0YWdlJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRVJldml2ZUNsaWNrVHlwZSB9IGZyb20gJy4uL2RvdC9ER2FtZUJ0bkNsaWNrJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBCYXNlTGFiZWwgZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlTGFiZWwnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyRmFpbFZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBidG5Vc2UgPSBudWxsO1xuICBidG5SZXBsYXkgPSBudWxsO1xuICBub2RlTnVtID0gbnVsbDtcbiAgbm9kZVVzZSA9IG51bGw7XG4gIG5vZGVBZCA9IG51bGw7XG4gIGxhYmVsTnVtID0gbnVsbDtcbiAgY29udGVudE5vZGUgPSBudWxsO1xuICBidG5Vc2VQb3MgPSBudWxsO1xuICB0aWxlc0NvbnRhaW5lciA9IG51bGw7XG4gIHJldml2ZU51bSA9IDA7XG4gIF90aWxlUHJldmlld0xheW91dCA9IFwidGhyZWVQbHVzT25lXCI7XG4gIF9hZFJldml2ZUFsbG93ZWQgPSB2b2lkIDA7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvVGlsZTJGYWlsVmlld1wiO1xuICBAbWoudHJhaXRFdmVudChcIlRpbGUyRmFpbFZ3X29uTG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5jb250ZW50Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRfbm9kZVwiKTtcbiAgICB0aGlzLmJ0blVzZSA9IHRoaXMuY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fdXNlXCIpO1xuICAgIHRoaXMuYnRuUmVwbGF5ID0gdGhpcy5jb250ZW50Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9yZXBsYXlcIik7XG4gICAgdGhpcy5ub2RlTnVtID0gdGhpcy5idG5Vc2UuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlTnVtXCIpO1xuICAgIHRoaXMubm9kZVVzZSA9IHRoaXMuYnRuVXNlLmdldENoaWxkQnlOYW1lKFwic3ByXCIpLmdldENoaWxkQnlOYW1lKFwidXNlXCIpO1xuICAgIHRoaXMubm9kZUFkID0gdGhpcy5idG5Vc2UuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJhZFwiKTtcbiAgICB0aGlzLmxhYmVsTnVtID0gdGhpcy5ub2RlTnVtLmdldENoaWxkQnlOYW1lKFwibGFiZWxOdW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLmJ0blVzZVBvcyA9IHRoaXMuYnRuVXNlLmdldFBvc2l0aW9uKCk7XG4gICAgdGhpcy5idG5Vc2UgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuYnRuVXNlLCB0aGlzLm9uVXNlQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5idG5SZXBsYXkgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuYnRuUmVwbGF5LCB0aGlzLm9uUmVwbGF5QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJCYW5uZXJBZF9OZWVkSGlkZUJhbm5lclwiLCB0aGlzLCBbXSk7XG4gIH1cbiAgcmVzZXRSb3c0VUkoKSB7XG4gICAgdmFyIGUgPSBmdW5jdGlvbiBlKGUsIHQsIG8sIG4sIGkpIHtcbiAgICAgICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlKSkge1xuICAgICAgICAgIGUuc2V0UG9zaXRpb24odCwgbyk7XG4gICAgICAgICAgZS5zZXRDb250ZW50U2l6ZShuLCBpKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZzFcIik7XG4gICAgaWYgKHQpIHtcbiAgICAgIGUodCwgLTEsIDQzOCwgODc4LCA5ODYpO1xuICAgICAgdmFyIG8gPSB0LmdldENoaWxkQnlOYW1lKFwidG9wXCIpO1xuICAgICAgbyAmJiBlKG8sIDAsIDM3LCA4ODYsIDE0Myk7XG4gICAgICB2YXIgbiA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJjb21fYmdfcG9wXzJcIik7XG4gICAgICBuICYmIGUobiwgMCwgLTI1OSwgNzY4LCA0MTYpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250ZW50Tm9kZSAmJiBjYy5pc1ZhbGlkKHRoaXMuY29udGVudE5vZGUpKSB7XG4gICAgICB0aGlzLmNvbnRlbnROb2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgdmFyIGkgPSB0aGlzLmNvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIik7XG4gICAgICBpICYmIGUoaSwgMywgNDc1LCA4NDAsIDExMCk7XG4gICAgICB2YXIgciA9IHRoaXMuY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzbG90X2JnXCIpO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgZShyLCAwLjc3OSwgMTc2LjEzMywgNjMyLCAyMTEpO1xuICAgICAgICB2YXIgYSA9IHIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGEgfHwgKGEgPSByLmFkZENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgYS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICAgIGEudHJpbSA9IGZhbHNlO1xuICAgICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShyLCBcInRleHR1cmUvdGlsZTJGYWlsL2dhbWVwbGF5X2ltZ190aWxlMl9ncmlkXCIsIGZhbHNlLCBmYWxzZSwgXCJtYWluUmVzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5idG5Vc2UgJiYgY2MuaXNWYWxpZCh0aGlzLmJ0blVzZSkpIHtcbiAgICAgIHRoaXMuYnRuVXNlLnNldFBvc2l0aW9uKDAsIC0xODAuMjU5KTtcbiAgICAgIHRoaXMuYnRuVXNlLmdldENoaWxkQnlOYW1lKFwic3ByXCIpLnNjYWxlID0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYnRuUmVwbGF5ICYmIGNjLmlzVmFsaWQodGhpcy5idG5SZXBsYXkpKSB7XG4gICAgICB0aGlzLmJ0blJlcGxheS5zZXRQb3NpdGlvbigwLCAtMzY3Ljk2OCk7XG4gICAgICB0aGlzLmJ0blJlcGxheS5nZXRDaGlsZEJ5TmFtZShcInNwclwiKS5zY2FsZSA9IDE7XG4gICAgfVxuICAgIHRoaXMuYnRuVXNlUG9zID0gdGhpcy5idG5Vc2UgPyB0aGlzLmJ0blVzZS5nZXRQb3NpdGlvbigpIDogbnVsbDtcbiAgfVxuICBvbkNsb3NlQnRuQ2xpY2soKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJGYWlsVndfc2hvd1wiKVxuICBzaG93KGUpIHtcbiAgICB2YXIgdDtcbiAgICB0aGlzLnJldml2ZU51bSA9IGUucmV2aXZlTnVtIHx8IDA7XG4gICAgdGhpcy5fYWRSZXZpdmVBbGxvd2VkID0gZS5hZFJldml2ZUFsbG93ZWQ7XG4gICAgdGhpcy5fdGlsZVByZXZpZXdMYXlvdXQgPSBudWxsICE9PSAodCA9IGUudGlsZVByZXZpZXdMYXlvdXQpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBcInRocmVlUGx1c09uZVwiO1xuICAgIFwicm93NFwiID09PSB0aGlzLl90aWxlUHJldmlld0xheW91dCAmJiB0aGlzLnJlc2V0Um93NFVJKCk7XG4gICAgdGhpcy5hZGRQb3B1cEZhaWxDbnQoKTtcbiAgICB0aGlzLmluaXRCdG5Vc2UoKTtcbiAgICB0aGlzLmNyZWF0ZVByZXZpZXcoZS50aWxlcyk7XG4gICAgdGhpcy5yZXZpdmVOdW0gPD0gMCAmJiBEb3RBZFJld2FyZEVudGVyLmRvdCh0cnVlLCBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX1Jldml2ZSk7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFJldml2ZShFUmV2aXZlQ2xpY2tUeXBlLlNob3cpO1xuICAgIFwicm93NFwiID09PSB0aGlzLl90aWxlUHJldmlld0xheW91dCAmJiBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5UaWxlMkZhaWwpO1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmlzVmlicmF0aW9uRW5hYmxlZCgpICYmIFZpYnJhdGVNYW5hZ2VyLmV4ZWN1dGVWaWJyYXRlKEVWaWJyYXRlU3RyZW5ndGguRG91YmxlV2VhaywgRVZpYnJhdGVQb2ludC5UaWxlMkZhaWwpO1xuICB9XG4gIGFkZFBvcHVwRmFpbENudCgpIHtcbiAgICB2YXIgZSA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpO1xuICAgIGUgIT09IE1qR2FtZVR5cGUuTm9uZSAmJiBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRHYW1lRGF0YUJ5R2FtZVR5cGUoZSkuYWRkUG9wdXBGYWlsQ250KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkZhaWxWd19pbml0QnRuVXNlXCIpXG4gIGluaXRCdG5Vc2UoKSB7XG4gICAgdmFyIGUgPSB0aGlzLnJldml2ZU51bSA+IDAsXG4gICAgICB0ID0gQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tWaWRlb0FkSXNSZWFkeSgpLFxuICAgICAgbyA9IGZhbHNlICE9PSB0aGlzLl9hZFJldml2ZUFsbG93ZWQ7XG4gICAgaWYgKGUgfHwgbyAmJiB0KSB7XG4gICAgICB0aGlzLmJ0blVzZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5ub2RlTnVtLmFjdGl2ZSA9IGU7XG4gICAgICB0aGlzLm5vZGVVc2UuYWN0aXZlID0gZTtcbiAgICAgIHRoaXMubm9kZUFkLmFjdGl2ZSA9ICFlO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgdGhpcy5sYWJlbE51bS5zdHJpbmcgPSB0aGlzLnJldml2ZU51bS50b1N0cmluZygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93QWRCdG5WaWV3KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnRuVXNlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdmFyIG4gPSBjYy5maW5kKFwiYmcxXCIsIHRoaXMubm9kZSk7XG4gICAgICBpZiAoXCJyb3c0XCIgPT09IHRoaXMuX3RpbGVQcmV2aWV3TGF5b3V0KSB7XG4gICAgICAgIG4gJiYgKG4uaGVpZ2h0ID0gNzg2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG4gJiYgKG4uaGVpZ2h0ID0gODUwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnRuUmVwbGF5LnNldFBvc2l0aW9uKHRoaXMuYnRuVXNlUG9zKTtcbiAgICB9XG4gIH1cbiAgb25Vc2VCdG5DbGljaygpIHtcbiAgICBpZiAodGhpcy5yZXZpdmVOdW0gPiAwKSB7XG4gICAgICB0aGlzLnVzZVJldml2ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhdGNoQWRGb3JSZXZpdmUoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkZhaWxWd191c2VSZXZpdmVcIilcbiAgdXNlUmV2aXZlKCkge1xuICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRpbGUyUmV2aXZlLFxuICAgICAgZnJvbTogXCJpdGVtXCJcbiAgICB9KTtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkZhaWxWd193YXRjaEFkUmV2aXZlXCIpXG4gIHdhdGNoQWRGb3JSZXZpdmUoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RSZXZpdmUoRVJldml2ZUNsaWNrVHlwZS5TaHVmZmxlQWQpO1xuICAgIERvdEFkUmV3YXJkRW50ZXIuZG90KGZhbHNlLCBFQWRQb3NpdGlvbi5JbkdhbWVNb3RpdmF0aW9uX1Jldml2ZSk7XG4gICAgRG90QWRWaXNpdC5kb3RBZFZpc2l0UmV3YXJkQUQoRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXZpdmUsIHRydWUpO1xuICAgIERvdEdhbWVBZFNob3dTdGFnZS5kb3QoZmFsc2UsIFwiY2xpY2tBZExvY2tcIik7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuY2hlY2tWaWRlb0FkSXNSZWFkeSgpICYmIHRoaXMuZGVsZWdhdGUgJiYgY2MuaXNWYWxpZCh0aGlzLmRlbGVnYXRlLnJvb3RWaWV3KSAmJiAodGhpcy5kZWxlZ2F0ZS5yb290Vmlldy5vcGFjaXR5ID0gMCk7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheVZpZGVvQWQoRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXZpdmUsIHtcbiAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICBlLm9uQWRSZXZpdmVTdWNjZXNzKCk7XG4gICAgICB9LFxuICAgICAgb25GYWlsZWQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGUub25BZFJldml2ZUZhaWxlZCh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyRmFpbFZ3X2FkUmV2aXZlU3VjY1wiKVxuICBvbkFkUmV2aXZlU3VjY2VzcygpIHtcbiAgICBpZiAodGhpcy5kZWxlZ2F0ZSAmJiBjYy5pc1ZhbGlkKHRoaXMuZGVsZWdhdGUucm9vdFZpZXcpKSB7XG4gICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRpbGUyQWRkUHJvcCxcbiAgICAgICAgcHJvcFR5cGU6IFwicmV2aXZlXCIsXG4gICAgICAgIG51bTogMSxcbiAgICAgICAgcmVhc29uSWQ6IEVHZXRJdGVtUmVhc29uSWQuQWRSZXdhcmQsXG4gICAgICAgIHJlYXNvbkluZm86IFwi5ri45oiP5YaF5r+A5Yqx5bm/5ZGKLeWkjea0u1wiXG4gICAgICB9KTtcbiAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uVGlsZTJSZXZpdmUsXG4gICAgICAgIGZyb206IFwiYWRcIlxuICAgICAgfSk7XG4gICAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJGYWlsVndfc2hvd0FkQnRuVndcIilcbiAgc2hvd0FkQnRuVmlldygpIHtcbiAgICBpZiAodGhpcy5idG5Vc2UgJiYgY2MuaXNWYWxpZCh0aGlzLmJ0blVzZSkpIHtcbiAgICAgIHZhciBlID0gY2MuZmluZChcInNwci9hZC9kZXNjXCIsIHRoaXMuYnRuVXNlKTtcbiAgICAgIGlmIChlICYmIGUud2lkdGggPiAzODApIHtcbiAgICAgICAgdmFyIHQgPSBlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHQgJiYgKHQub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5TSFJJTkspO1xuICAgICAgICBlLndpZHRoID0gMzgwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkFkUmV2aXZlRmFpbGVkKCkge1xuICAgIHRoaXMuZGVsZWdhdGUgJiYgY2MuaXNWYWxpZCh0aGlzLmRlbGVnYXRlLnJvb3RWaWV3KSAmJiAodGhpcy5kZWxlZ2F0ZS5yb290Vmlldy5vcGFjaXR5ID0gMjU1KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyRmFpbFZ3X3JlcGxheVwiKVxuICBvblJlcGxheUJ0bkNsaWNrKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMubm9kZSkgJiYgdGhpcy5kZWxlZ2F0ZSAmJiBjYy5pc1ZhbGlkKHRoaXMuZGVsZWdhdGUucm9vdFZpZXcpKSB7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmV2aXZlKEVSZXZpdmVDbGlja1R5cGUuUmVzdGFydCk7XG4gICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlJlc3RhcnQsXG4gICAgICAgIGRpZVJlc3VsdDogMCxcbiAgICAgICAgY2FsbEZyb206IFwiZmFpbFwiXG4gICAgICB9KTtcbiAgICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fUmV2aXZlLCBmYWxzZSk7XG4gICAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJGYWlsVndfY3JlYXRlUHJldmlld1wiKVxuICBjcmVhdGVQcmV2aWV3KGUpIHtcbiAgICBpZiAoXCJyb3c0XCIgPT09IHRoaXMuX3RpbGVQcmV2aWV3TGF5b3V0KSB7XG4gICAgICB0aGlzLl9jcmVhdGVQcmV2aWV3Um93NChlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY3JlYXRlUHJldmlld1RocmVlUGx1c09uZShlKTtcbiAgICB9XG4gIH1cbiAgX2NyZWF0ZVByZXZpZXdSb3c0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRfbm9kZVwiKTtcbiAgICB0aGlzLnRpbGVzQ29udGFpbmVyID0gbmV3IGNjLk5vZGUoXCJ0aWxlc19jb250YWluZXJcIik7XG4gICAgdGhpcy50aWxlc0NvbnRhaW5lci5zZXRQb3NpdGlvbigtMywgMTIpO1xuICAgIHQuZ2V0Q2hpbGRCeU5hbWUoXCJzbG90X2JnXCIpLmFkZENoaWxkKHRoaXMudGlsZXNDb250YWluZXIsIDEwKTtcbiAgICB2YXIgbyA9IG5ldyBjYy5Ob2RlKFwic2hhZG93X2xheWVyXCIpO1xuICAgIHRoaXMudGlsZXNDb250YWluZXIuYWRkQ2hpbGQobywgMCk7XG4gICAgdmFyIG4gPSBuZXcgY2MuTm9kZShcInRpbGVfbGF5ZXJcIik7XG4gICAgdGhpcy50aWxlc0NvbnRhaW5lci5hZGRDaGlsZChuLCAxKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgdmFyIHIgPSAxNTAgKiBpIC0gMjI1LFxuICAgICAgICBhID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZVtpXTtcbiAgICAgIHRoaXMuY3JlYXRlU2hhZG93KG8sIHIsIDAsIDApO1xuICAgICAgdGhpcy5jcmVhdGVTaW5nbGVUaWxlVW5pZm9ybShuLCByLCAwLCBudWxsID09IGEgPyB2b2lkIDAgOiBhLnJlc0lkLCBhKTtcbiAgICB9XG4gIH1cbiAgX2NyZWF0ZVByZXZpZXdUaHJlZVBsdXNPbmUoZSkge1xuICAgIHZhciB0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudF9ub2RlXCIpO1xuICAgIHRoaXMudGlsZXNDb250YWluZXIgPSBuZXcgY2MuTm9kZShcInRpbGVzX2NvbnRhaW5lclwiKTtcbiAgICB0aGlzLnRpbGVzQ29udGFpbmVyLnNldFBvc2l0aW9uKDEyLCAxKTtcbiAgICB0LmdldENoaWxkQnlOYW1lKFwic2xvdF9iZ1wiKS5hZGRDaGlsZCh0aGlzLnRpbGVzQ29udGFpbmVyLCAxMCk7XG4gICAgdmFyIG8gPSBuZXcgY2MuTm9kZShcInNoYWRvd19sYXllclwiKTtcbiAgICB0aGlzLnRpbGVzQ29udGFpbmVyLmFkZENoaWxkKG8sIDApO1xuICAgIHZhciBuID0gbmV3IGNjLk5vZGUoXCJ0aWxlX2xheWVyXCIpO1xuICAgIHRoaXMudGlsZXNDb250YWluZXIuYWRkQ2hpbGQobiwgMSk7XG4gICAgZm9yICh2YXIgaSA9IFstMTUxLCAtMSwgMTMwXSwgciA9IDA7IHIgPCAzOyByKyspIHtcbiAgICAgIHZhciBhID0gbnVsbCA9PSBlID8gdm9pZCAwIDogZVtyXTtcbiAgICAgIHRoaXMuY3JlYXRlU2luZ2xlVGlsZVJldml2ZVN0eWxlZChuLCBpW3JdLCAwLCBudWxsID09IGEgPyB2b2lkIDAgOiBhLnJlc0lkLCAwLCByLCBhKTtcbiAgICB9XG4gICAgYSA9IG51bGwgPT0gZSA/IHZvaWQgMCA6IGVbM107XG4gICAgdGhpcy5jcmVhdGVTaGFkb3cobywgOCwgMjA4LCAtMTUpO1xuICAgIHRoaXMuY3JlYXRlU2luZ2xlVGlsZVJldml2ZVN0eWxlZChuLCA4LCAyMDgsIG51bGwgPT0gYSA/IHZvaWQgMCA6IGEucmVzSWQsIC0xNSwgMywgYSk7XG4gIH1cbiAgY3JlYXRlU2hhZG93KGUsIHQsIG8sIG4gPSAwKSB7XG4gICAgdmFyIGkgPSBuZXcgY2MuTm9kZShcImltZ1NoYWRvd1wiKTtcbiAgICBpLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVztcbiAgICBpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnRyaW0gPSBmYWxzZTtcbiAgICBpLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICBpLnNldFBvc2l0aW9uKHQsIG8pO1xuICAgIGkuYW5nbGUgPSBuO1xuICAgIDAgIT09IG4gJiYgKGkuc2NhbGUgPSAwLjkpO1xuICAgIGUuYWRkQ2hpbGQoaSk7XG4gICAgdmFyIHIgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfaW1nX3NoYWRvd19kblwiKSxcbiAgICAgIGEgPSByLnBhdGgsXG4gICAgICBsID0gci5idW5kbGVOYW1lLFxuICAgICAgcyA9IHIuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKGksIGEsIHMsIGZhbHNlLCBsKTtcbiAgfVxuICBjcmVhdGVTaW5nbGVUaWxlVW5pZm9ybShlLCB0LCBvLCBuLCBpKSB7XG4gICAgdmFyIHIsXG4gICAgICBhID0gbmV3IGNjLk5vZGUoXCJ0aWxlX1wiICsgKG51bGwgIT0gbiA/IG4gOiBcImJhY2tcIikpO1xuICAgIGEuc2V0UG9zaXRpb24odCwgbyk7XG4gICAgdmFyIHMgPSBuZXcgY2MuTm9kZShcImltZ0NhcmRCZ1wiKTtcbiAgICBzLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVztcbiAgICBzLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICBzLnpJbmRleCA9IDA7XG4gICAgYS5hZGRDaGlsZChzKTtcbiAgICB2YXIgYyA9IG5ldyBjYy5Ob2RlKFwiaW1nQ2FyZFwiKTtcbiAgICBjLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlRSSU1NRUQ7XG4gICAgYy5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgYy5zZXRQb3NpdGlvbigtMywgMyk7XG4gICAgYy56SW5kZXggPSAxO1xuICAgIGEuYWRkQ2hpbGQoYyk7XG4gICAgdmFyIHUgPSBuID09PSBSZXNJZC5lbVJhbmtJZCxcbiAgICAgIHAgPSB1ID8gXCJnYW1lcGxheV9zcGVjaWFsX21qXzJcIiA6IFwiZ2FtZXBsYXlfaW1nX21qX3VwXCIsXG4gICAgICBmID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShwKSxcbiAgICAgIGQgPSBmLnBhdGgsXG4gICAgICBoID0gZi5idW5kbGVOYW1lLFxuICAgICAgeSA9IGYuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHMsIGQsIHksIGZhbHNlLCBoKTtcbiAgICB2YXIgbSA9IG51bGw7XG4gICAgaWYgKHUpIG0gPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rQ2FyZFJlc05hbWUoKTtlbHNlIHtcbiAgICAgIHZhciBfID0gdm9pZCAwICE9PSBuID8gQ2FyZFV0aWwuZ2V0QnlLZXkobikgOiBudWxsO1xuICAgICAgbSA9IG51bGwgIT09IChyID0gbnVsbCA9PSBfID8gdm9pZCAwIDogXy5yZXNOYW1lKSAmJiB2b2lkIDAgIT09IHIgPyByIDogbnVsbDtcbiAgICB9XG4gICAgaWYgKG0pIHtcbiAgICAgIHZhciBUID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShtKSxcbiAgICAgICAgYiA9IFQucGF0aCxcbiAgICAgICAgRSA9IFQuYnVuZGxlTmFtZSxcbiAgICAgICAgUyA9IFQuZnJvbUF0bGFzO1xuICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUoYywgYiwgUywgZmFsc2UsIEUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgSSA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoXCJnYW1lcGxheV9pbWdfbWpfZG5cIik7XG4gICAgICBiID0gSS5wYXRoLCBFID0gSS5idW5kbGVOYW1lLCBTID0gSS5mcm9tQXRsYXM7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShjLCBiLCBTLCBmYWxzZSwgRSk7XG4gICAgfVxuICAgIHRoaXMuX2FwcGVuZFNwZWNpYWxDYXJkU3BpbmUoYSwgaSwgMik7XG4gICAgZS5hZGRDaGlsZChhKTtcbiAgfVxuICBjcmVhdGVTaW5nbGVUaWxlUmV2aXZlU3R5bGVkKGUsIHQsIG8sIG4sIGkgPSAwLCByID0gMCwgYT8pIHtcbiAgICB2YXIgcztcbiAgICB2YXIgYyA9IG5ldyBjYy5Ob2RlKFwidGlsZV9cIiArIChudWxsICE9IG4gPyBuIDogXCJiYWNrXCIpKTtcbiAgICBjLnNldFBvc2l0aW9uKHQsIG8pO1xuICAgIGMuYW5nbGUgPSBpO1xuICAgIHZhciB1ID0gbmV3IGNjLk5vZGUoXCJpbWdDYXJkQmdcIik7XG4gICAgdS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5SQVc7XG4gICAgdS5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgdS56SW5kZXggPSAwO1xuICAgIGMuYWRkQ2hpbGQodSk7XG4gICAgdmFyIHAgPSBuZXcgY2MuTm9kZShcImltZ0NhcmRcIik7XG4gICAgcC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5UUklNTUVEO1xuICAgIHAuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgIGlmICgzID09PSByKSB7XG4gICAgICBwLnNldFBvc2l0aW9uKC0zLCA1KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHIgPD0gMSAmJiByID49IDApIHtcbiAgICAgICAgcC5zZXRQb3NpdGlvbigtMTAsIDIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcC5zZXRQb3NpdGlvbig2LCAyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcC56SW5kZXggPSAxO1xuICAgIGMuYWRkQ2hpbGQocCk7XG4gICAgdmFyIGYgPSBuID09PSBSZXNJZC5lbVJhbmtJZDtcbiAgICBpZiAoMyA9PT0gcikge1xuICAgICAgdmFyIGQgPSBmID8gXCJnYW1lcGxheV9zcGVjaWFsX21qXzJcIiA6IFwiZ2FtZXBsYXlfaW1nX21qX3VwXCIsXG4gICAgICAgIGggPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKGQpLFxuICAgICAgICB5ID0gaC5wYXRoLFxuICAgICAgICBtID0gaC5idW5kbGVOYW1lLFxuICAgICAgICBfID0gaC5mcm9tQXRsYXM7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh1LCB5LCBfLCBmYWxzZSwgbSk7XG4gICAgfSBlbHNlIGlmICgyID09PSByKSB7XG4gICAgICBkID0gZiA/IFwicmV2aXZlX2ltZ19tajRcIiA6IFwicmV2aXZlX2ltZ19tajJcIjtcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHUsIFwidGV4dHVyZS90aWxlMkZhaWwvXCIgKyBkLCBmYWxzZSwgZmFsc2UsIFwibWFpblJlc1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZCA9IGYgPyBcInJldml2ZV9pbWdfbWozXCIgOiBcInJldml2ZV9pbWdfbWoxXCI7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh1LCBcInRleHR1cmUvdGlsZTJGYWlsL1wiICsgZCwgZmFsc2UsIGZhbHNlLCBcIm1haW5SZXNcIik7XG4gICAgfVxuICAgIHZhciBUID0gbnVsbDtcbiAgICBpZiAoZikgVCA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJhbmtDYXJkUmVzTmFtZSgpO2Vsc2Uge1xuICAgICAgdmFyIGIgPSB2b2lkIDAgIT09IG4gPyBDYXJkVXRpbC5nZXRCeUtleShuKSA6IG51bGw7XG4gICAgICBUID0gbnVsbCAhPT0gKHMgPSBudWxsID09IGIgPyB2b2lkIDAgOiBiLnJlc05hbWUpICYmIHZvaWQgMCAhPT0gcyA/IHMgOiBudWxsO1xuICAgIH1cbiAgICBpZiAoVCkge1xuICAgICAgdmFyIEUgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFQpLFxuICAgICAgICBTID0gRS5wYXRoLFxuICAgICAgICBJID0gRS5idW5kbGVOYW1lLFxuICAgICAgICB3ID0gRS5mcm9tQXRsYXM7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShwLCBTLCB3LCBmYWxzZSwgSSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBCID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShcImdhbWVwbGF5X2ltZ19tal91cFwiKTtcbiAgICAgIFMgPSBCLnBhdGgsIEkgPSBCLmJ1bmRsZU5hbWUsIHcgPSBCLmZyb21BdGxhcztcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHAsIFMsIHcsIGZhbHNlLCBJKTtcbiAgICB9XG4gICAgdmFyIHggPSBbY2MudjIoLTgsIC02KSwgY2MudjIoLTgsIC02KSwgY2MudjIoMTAsIC02KV07XG4gICAgdGhpcy5fYXBwZW5kU3BlY2lhbENhcmRTcGluZShjLCBhLCAyLCB4W3JdKTtcbiAgICBlLmFkZENoaWxkKGMpO1xuICB9XG4gIF9hcHBlbmRTcGVjaWFsQ2FyZFNwaW5lKGUsIHQsIG8sIG4pIHtcbiAgICBpZiAodCkge1xuICAgICAgaWYgKHQuaXNEYXhpYW8pIHtcbiAgICAgICAgKGkgPSBuZXcgY2MuTm9kZShcIkRheGlhb0NhcmRGbGFnTm9kZVwiKSkuekluZGV4ID0gbztcbiAgICAgICAgZS5hZGRDaGlsZChpKTtcbiAgICAgICAgKHIgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGksIFwic3BpbmUvZGF4aWFvL2lkbGUvZ2FtZXBsYXlfaGludEdyZWF0XCIsIFwibWFpblJlc1wiKSkuc2V0QW5pbWF0aW9uKFwiaW5pdFwiLCAtMSwgbnVsbCwgZmFsc2UpO1xuICAgICAgICBuICYmIGkuc2V0UG9zaXRpb24obik7XG4gICAgICB9XG4gICAgICBpZiAodC5kdW94aWFvQ291bnQgPiAwKSB7XG4gICAgICAgIHZhciBpLCByO1xuICAgICAgICAoaSA9IG5ldyBjYy5Ob2RlKFwiRHVveGlhb0NhcmRGbGFnTm9kZVwiKSkuekluZGV4ID0gbztcbiAgICAgICAgZS5hZGRDaGlsZChpKTtcbiAgICAgICAgKHIgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGksIFwic3BpbmUvZHVveGlhby9pZGxlL2dhbWVwbGF5X2hpbnRDb21ib1wiLCBcIm1haW5SZXNcIikpLnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgci5hdHRhY2hOb2RlKFwiaG9va19udW1iZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlID0gQmFzZUxhYmVsLmNyZWF0ZSh0LmR1b3hpYW9Db3VudC50b1N0cmluZygpLCBcImZvbnQvU1BBUlRBTi1CT0xEXCIsIFwibWFpblJlc1wiLCAzNik7XG4gICAgICAgICAgZS5ub2RlLm5hbWUgPSBcIkR1b3hpYW9DYXJkQ291bnROb2RlXCI7XG4gICAgICAgICAgZS5zZXRDb2xvcihuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzAxMzcxM1wiKSk7XG4gICAgICAgICAgZS5zZXRBbGlnbihjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSLCBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUik7XG4gICAgICAgICAgcmV0dXJuIGUubm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIG4gJiYgaS5zZXRQb3NpdGlvbihuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlMkZhaWxWd19kZXN0cm95XCIpXG4gIG9uRGVzdHJveSgpIHtcbiAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkJhbm5lckFkX05lZWRTaG93QmFubmVyXCIsIHRoaXMsIFtdKTtcbiAgICBzdXBlci5vbkRlc3Ryb3kgJiYgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=