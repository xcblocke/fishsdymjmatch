"use strict";
cc._RF.push(module, 'c5ee9+wqQtMAIE+I/J3TkT5', 'FailView');
// subpackages/l_fail/Scripts/FailView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var DAdRewardEnter_1 = require("../../../Scripts/gamePlay/dot/DAdRewardEnter");
var DAdVisit_1 = require("../../../Scripts/gamePlay/dot/DAdVisit");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameAdShowStage_1 = require("../../../Scripts/gamePlay/dot/DGameAdShowStage");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var I18NComponent_1 = require("../../../Scripts/component/I18NComponent");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FailView = /** @class */ (function (_super) {
    __extends(FailView, _super);
    function FailView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnUse = null;
        _this.btnReplay = null;
        _this.nodeNum = null;
        _this.nodeUse = null;
        _this.nodeAd = null;
        _this.labelNum = null;
        _this.desc = null;
        _this.shuffleNum = 0;
        _this.scaleExtra = 0.05;
        _this.preShuffleData = null;
        _this.previewContainer = null;
        _this.tileSprites = new Map();
        return _this;
    }
    FailView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var t = this.node.getChildByName("content_node");
        this.btnUse = t.getChildByName("btn_use");
        this.btnReplay = t.getChildByName("btn_replay");
        this.nodeNum = this.btnUse.getChildByName("nodeNum");
        this.nodeUse = this.btnUse.getChildByName("use");
        this.nodeAd = this.btnUse.getChildByName("ad");
        this.labelNum = this.nodeNum.getChildByName("labelNum").getComponent(cc.Label);
        this.desc = t.getChildByName("desc").getComponent(cc.Label);
        this.btnUse && this.OnButtonClick(this.btnUse, this.onUseBtnClick.bind(this));
        this.btnReplay && this.OnButtonClick(this.btnReplay, this.onReplayBtnClick.bind(this));
        mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
    };
    FailView.prototype.onCloseBtnClick = function () {
        this.delegate.close();
    };
    FailView.prototype.show = function (e) {
        this.shuffleNum = e.shuffleNum || 0;
        this.preShuffleData = e.preShuffleData || null;
        this.addPopupFailCnt();
        this.initBtnUse();
        this.preShuffleData && this.createPreview(this.preShuffleData);
        this.shuffleNum <= 0 && DAdRewardEnter_1.DotAdRewardEnter.dot(true, DGameAdShow_1.EAdPosition.InGameMotivation_Revive);
        DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.Show);
    };
    FailView.prototype.addPopupFailCnt = function () {
        var e = UserModel_1.default.getInstance().getCurrentGameType();
        e !== GameTypeEnums_1.MjGameType.None && UserModel_1.default.getInstance().getGameDataByGameType(e).addPopupFailCnt();
    };
    FailView.prototype.initBtnUse = function () {
        var e = this.shuffleNum > 0;
        this.nodeNum.active = e;
        this.nodeUse.active = e;
        this.nodeAd.active = !e;
        e && (this.labelNum.string = this.shuffleNum.toString());
    };
    FailView.prototype.onUseBtnClick = function () {
        if (this.shuffleNum > 0) {
            this.useShuffleProp();
        }
        else {
            this.watchAdForShuffle();
        }
    };
    FailView.prototype.useShuffleProp = function () {
        DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.ShuffleItem);
        DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.Close);
        this.delegate.close();
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
            from: GameInputEnum_1.EShuffleFrom.Normal,
            preShuffleData: this.preShuffleData
        });
    };
    FailView.prototype.watchAdForShuffle = function () {
        var e = this;
        DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.ShuffleAd);
        DAdRewardEnter_1.DotAdRewardEnter.dot(false, DGameAdShow_1.EAdPosition.InGameMotivation_Revive);
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(DGameAdShow_1.EAdPosition.InGameMotivation_Revive, true);
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        AdManager_1.default.getInstance().checkVideoAdIsReady() && this.delegate && cc.isValid(this.delegate.rootView) && (this.delegate.rootView.opacity = 0);
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.InGameMotivation_Revive, {
            onSuccess: function () {
                e.onAdSuccess();
            },
            onFailed: function (t) {
                e.onAdFailed(t);
            }
        });
    };
    FailView.prototype.onAdSuccess = function () {
        if (this.delegate && cc.isValid(this.delegate.rootView)) {
            DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.Close);
            this.delegate.close();
            var e = {
                inputType: GameInputEnum_1.EGameInputEnum.AddProp,
                propType: "shuffle",
                num: 1,
                reasonId: GameTypeEnums_1.EGetItemReasonId.AdReward,
                reasonInfo: "游戏内激励广告-复活"
            };
            GameInteraction_1.GameInteraction.input(e);
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.Shuffle,
                from: GameInputEnum_1.EShuffleFrom.Revive,
                preShuffleData: this.preShuffleData
            });
        }
    };
    FailView.prototype.onAdFailed = function () {
        this.delegate && cc.isValid(this.delegate.rootView) && (this.delegate.rootView.opacity = 255);
    };
    FailView.prototype.onReplayBtnClick = function () {
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
    FailView.prototype.createPreview = function (e) {
        var t = this.node.getChildByName("content_node");
        this.btnReplay.position = cc.v3(0, -473);
        this.btnUse.position = cc.v3(0, -304);
        var i = this.desc.node.getComponent(I18NComponent_1.default);
        if (i) {
            i.setTranslateId("TileMatch_Revive_Details_3", "Revive & Shuffle");
        }
        else {
            this.desc.string = "Revive & Shuffle";
        }
        this.desc.fontSize = 46;
        this.desc.lineHeight = 46;
        this.desc.node.setPosition(0, -166);
        this.previewContainer = new cc.Node("preview_window");
        this.previewContainer.setPosition(0, 120);
        t.addChild(this.previewContainer, 10);
        var o = new cc.Node("bg_mask");
        o.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        o.setContentSize(750, 600);
        o.color = cc.color(0, 0, 0);
        o.opacity = 180;
        this.previewContainer.addChild(o, 0);
        var a = new cc.Node("window_panel");
        a.setPosition(0, 0);
        this.previewContainer.addChild(a, 1);
        var n = new cc.Node("panel_bg");
        n.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        n.setContentSize(650, 450);
        n.color = cc.color(40, 40, 50);
        n.opacity = 255;
        a.addChild(n, 0);
        var r = new cc.Node("mask_node");
        a.addChild(r, 1);
        r.setPosition(0, 30);
        r.setContentSize(758, 467);
        r.addComponent(cc.Mask).type = cc.Mask.Type.RECT;
        var s = new cc.Node("game_bg");
        s.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        s.setContentSize(758, 467);
        s.setPosition(0, 0);
        this.loadGameBackground(s);
        r.addChild(s, -1);
        var l = new cc.Node("tiles_container");
        r.addChild(l, 0);
        this.createTileSprites(e.tilePositions, e.tilePositionsAfter, l);
        this.fitTilesToMask(l, r.getContentSize(), e.tilePositionsAfter);
        this.playPreviewAnimation(e, l);
        var c = mj.getClassByName("FailTipRateByPropTrait");
        if (c && c.getInstance() && true === c.getInstance().eventEnabled) {
            var d = this.node.getChildByName("bg1");
            if (cc.isValid(d)) {
                var p = d.getContentSize();
                d.setContentSize(p.width, p.height + 50);
                this.btnReplay.position = cc.v3(0, -513);
                this.btnUse.position = cc.v3(0, -344);
            }
        }
    };
    FailView.prototype.createTileSprites = function (e, t, i) {
        var o = this, a = function a(e, t, i) {
            return {
                x: 65 * e + 2 * i,
                y: 85 * -t + 2 * i
            };
        }, n = this.computeRowCompressionOffsets(e), r = this.computeRowCompressionOffsets(t);
        if (n.size > 0 || r.size > 0) {
            this.scaleExtra = 0;
        }
        else {
            this.scaleExtra = 0.05;
        }
        var s = 0, l = 0;
        e.forEach(function (e) {
            var t = a(e.gridX, e.gridY, e.layer);
            s += t.x;
            l += t.y + (n.get(e.tileId) || 0);
        });
        var c = s / e.length, d = l / e.length, p = 0, u = 0;
        t.forEach(function (e) {
            var t = a(e.gridX, e.gridY, e.layer);
            p += t.x;
            u += t.y + (r.get(e.tileId) || 0);
        });
        var f = p / t.length, h = u / t.length, m = new Map();
        t.forEach(function (e) {
            m.set(e.tileId, e);
        });
        e.forEach(function (e) {
            var t = new cc.Node("tile_" + e.tileId), s = new cc.Node("imgShadow"), l = s.addComponent(cc.Sprite);
            l.sizeMode = cc.Sprite.SizeMode.RAW;
            l.trim = false;
            s.setAnchorPoint(0.5, 0.5);
            s.setPosition(0, 0);
            s.zIndex = -1;
            t.addChild(s);
            var p = new cc.Node("imgCardBg");
            p.addComponent(cc.Sprite);
            p.setAnchorPoint(0.5, 0.5);
            p.setPosition(0, 0);
            p.zIndex = 0;
            t.addChild(p);
            var u = new cc.Node("imgCard");
            u.addComponent(cc.Sprite);
            u.setAnchorPoint(0.5, 0.5);
            u.zIndex = 1;
            t.addChild(u);
            u.setPosition(-3, 3);
            var v = a(e.gridX, e.gridY, e.layer), w = v.x - c, _ = v.y + (n.get(e.tileId) || 0) - d;
            t.setPosition(w, _);
            t.scale = 0.82;
            t._originalPos = cc.v3(w, _, 0);
            var C = m.get(e.tileId);
            if (C) {
                var S = a(C.gridX, C.gridY, C.layer), P = S.x - f, b = S.y + (r.get(C.tileId) || 0) - h;
                t._targetPos = cc.v3(P, b, 0);
            }
            else
                t._targetPos = cc.v3(w, _, 0);
            var N = 0 === e.layer ? "gameplay_img_shadow_dn" : "gameplay_img_shadow_up", A = CardUtil_1.default.getAtlasPathAndBundleName(N), R = A.path, I = A.bundleName, E = A.fromAtlas;
            BaseSprite_1.default.refreshWithNode(s, R, E, false, I);
            var B = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_up"), D = B.path, F = B.bundleName, M = B.fromAtlas;
            BaseSprite_1.default.refreshWithNode(p, D, M, false, F);
            if (e.isBack) {
                var T = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_dn"), k = T.path, V = T.bundleName, j = T.fromAtlas;
                BaseSprite_1.default.refreshWithNode(u, k, j, false, V);
            }
            else {
                var G = CardUtil_1.default.getByKey(e.resId);
                if (G && G.resName) {
                    var O = CardUtil_1.default.getAtlasPathAndBundleName(G.resName);
                    k = O.path, V = O.bundleName, j = O.fromAtlas;
                    BaseSprite_1.default.refreshWithNode(u, k, j, false, V);
                }
            }
            t._isBack = e.isBack || false;
            i.addChild(t, e.layer);
            o.tileSprites.set(e.tileId, t);
        });
    };
    FailView.prototype.computeRowCompressionOffsets = function (e) {
        var t = new Map();
        e.forEach(function (e) {
            var i = Number(e.gridY);
            if (Number.isFinite(i)) {
                var o = t.get(i) || {
                    sumY: 0,
                    count: 0
                };
                o.sumY += e.position.y;
                o.count += 1;
                t.set(i, o);
            }
        });
        var i = Array.from(t.keys()).sort(function (e, t) {
            return e - t;
        });
        if (i.length < 2)
            return new Map();
        var o = new Map();
        i.forEach(function (e) {
            var i = t.get(e);
            i && i.count > 0 && o.set(e, i.sumY / i.count);
        });
        for (var a = 0, n = new Map(), r = 0; r < i.length; r++) {
            var s = i[r];
            n.set(s, -a);
            if (!(r >= i.length - 1)) {
                var l = i[r + 1], c = o.get(s), d = o.get(l), p = l - s, u = p - 1;
                void 0 === c || void 0 === d || p <= 0 || u < 4 || (a += (d - c) / p * Math.ceil(0.5 * u));
            }
        }
        var f = new Map();
        e.forEach(function (e) {
            var t = Number(e.gridY), i = n.get(t) || 0;
            i && f.set(e.tileId, i);
        });
        return f;
    };
    FailView.prototype.fitTilesToMask = function (e, t) {
        var i = Infinity, o = -Infinity, a = Infinity, n = -Infinity;
        this.tileSprites.forEach(function (e) {
            var t = e.getPosition();
            i = Math.min(i, t.x - 30);
            o = Math.max(o, t.x + 30);
            a = Math.min(a, t.y - 40);
            n = Math.max(n, t.y + 40);
            var r = e._targetPos;
            if (r) {
                i = Math.min(i, r.x - 30);
                o = Math.max(o, r.x + 30);
                a = Math.min(a, r.y - 40);
                n = Math.max(n, r.y + 40);
            }
        });
        var r = o - i, s = n - a, l = 0.9 * t.width / r, c = 0.9 * t.height / s, d = Math.min(l, c);
        e.scale = Math.min(d + this.scaleExtra, 1.05);
    };
    FailView.prototype.playPreviewAnimation = function (e) {
        var t = this, i = cc.v3(0, 0, 0), o = 0, a = this.tileSprites.size;
        this.tileSprites.forEach(function (n) {
            cc.tween(n).delay(0.2).to(0.2, {
                position: i
            }).call(function () {
                if (++o >= a) {
                    t.changeTileFaces(e.afterMapping);
                    t.scheduleOnce(function () {
                        t.scatterTiles();
                    }, 0.1);
                }
            }).start();
        });
    };
    FailView.prototype.changeTileFaces = function (e) {
        this.tileSprites.forEach(function (t, i) {
            var o = e[i], a = t._isBack || false;
            if (void 0 !== o) {
                var n = t.getChildByName("imgCard");
                if (n)
                    if (a) {
                        var r = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_dn"), s = r.path, l = r.bundleName, c = r.fromAtlas;
                        BaseSprite_1.default.refreshWithNode(n, s, c, false, l);
                    }
                    else {
                        var d = CardUtil_1.default.getByKey(o);
                        if (d && d.resName) {
                            var p = CardUtil_1.default.getAtlasPathAndBundleName(d.resName);
                            s = p.path, l = p.bundleName, c = p.fromAtlas;
                            BaseSprite_1.default.refreshWithNode(n, s, c, false, l);
                        }
                    }
            }
        });
    };
    FailView.prototype.scatterTiles = function () {
        this.tileSprites.forEach(function (e) {
            var t = e._targetPos || e._originalPos || cc.v3(0, 0, 0);
            cc.tween(e).to(0.2, {
                position: t
            }).start();
        });
    };
    FailView.prototype.loadGameBackground = function (e) {
        var t, i, o = cc.find("Canvas");
        if (o)
            try {
                for (var a = __values(["rootNode/stageLayer/MainGameView_rootView/root/bg", "rootNode/stageLayer/DailyChallengeView_rootView/root/bg", "rootNode/stageLayer/TravelGameView_rootView/root/bg"]), n = a.next(); !n.done; n = a.next()) {
                    var s = n.value, l = cc.find(s, o);
                    if (l) {
                        var c = l.getComponent(cc.Sprite);
                        if (c && c.spriteFrame) {
                            var d = e.getComponent(cc.Sprite);
                            if (d) {
                                d.spriteFrame = c.spriteFrame;
                                return;
                            }
                        }
                    }
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    n && !n.done && (i = a.return) && i.call(a);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        e.color = cc.color(45, 85, 120);
        var p = e.getComponent(cc.Sprite);
        p && (p.spriteFrame = null);
    };
    FailView.prototype.onDestroy = function () {
        if (this.previewContainer && cc.isValid(this.previewContainer)) {
            this.previewContainer.destroy();
            this.previewContainer = null;
        }
        this.tileSprites.clear();
        mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    FailView.prefabUrl = "prefabs/ui/FailView";
    __decorate([
        mj.traitEvent("FailVw_onLoad")
    ], FailView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("FailVw_show")
    ], FailView.prototype, "show", null);
    __decorate([
        mj.traitEvent("FailVw_initBtnUse")
    ], FailView.prototype, "initBtnUse", null);
    __decorate([
        mj.traitEvent("FailVw_useShuffle")
    ], FailView.prototype, "useShuffleProp", null);
    __decorate([
        mj.traitEvent("FailVw_watchAdShuffle")
    ], FailView.prototype, "watchAdForShuffle", null);
    __decorate([
        mj.traitEvent("FailVw_replay")
    ], FailView.prototype, "onReplayBtnClick", null);
    __decorate([
        mj.traitEvent("FailVw_destroy")
    ], FailView.prototype, "onDestroy", null);
    FailView = __decorate([
        mj.class
    ], FailView);
    return FailView;
}(UIView_1.default));
exports.default = FailView;

cc._RF.pop();