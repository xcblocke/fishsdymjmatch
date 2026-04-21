"use strict";
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