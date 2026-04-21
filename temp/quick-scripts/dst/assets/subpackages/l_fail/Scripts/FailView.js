
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fail/Scripts/FailView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhaWwvU2NyaXB0cy9GYWlsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUZBQWlHO0FBQ2pHLHdGQUFzRztBQUN0RyxvRkFBbUY7QUFDbkYsK0RBQTBEO0FBQzFELGdFQUEyRDtBQUMzRCwrRUFBZ0Y7QUFDaEYsbUVBQW9FO0FBQ3BFLHlFQUF3RTtBQUN4RSxtRkFBb0Y7QUFDcEYsb0VBQXVGO0FBQ3ZGLG9FQUErRDtBQUMvRCwyRUFBc0U7QUFDdEUsMEVBQXFFO0FBQ3JFLHNFQUFpRTtBQUVqRTtJQUFzQyw0QkFBTTtJQUE1QztRQUFBLHFFQThiQztRQTdiQyxZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0lBa2IxQixDQUFDO0lBL2FDLHlCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMs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Q0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUNsQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQ2hCLENBQUMsR0FBRyxDQUFDLEVBQ0wsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1QsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUNsQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQ2hCLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsQ0FB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QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsb0JBQW9CLENBQUMseUJBQXlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdELGlCQUFNLFNBQVMsSUFBSSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFoYk0sa0JBQVMsR0FBRyxxQkFBcUIsQ0FBQztJQUV6QztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDOzBDQWM5QjtJQUtEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7d0NBUzVCO0lBTUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDOzhDQU9sQztJQVNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztrREFVbEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7cURBZ0J0QztJQXdCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO29EQVk5QjtJQTBURDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7NkNBUy9CO0lBN2JrQixRQUFRO1FBRDVCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksUUFBUSxDQThiNUI7SUFBRCxlQUFDO0NBOWJELEFBOGJDLENBOWJxQyxnQkFBTSxHQThiM0M7a0JBOWJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0sIEVTaHVmZmxlRnJvbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSwgRUdldEl0ZW1SZWFzb25JZCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCB7IERvdEFkUmV3YXJkRW50ZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQWRSZXdhcmRFbnRlcic7XG5pbXBvcnQgeyBEb3RBZFZpc2l0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREFkVmlzaXQnO1xuaW1wb3J0IHsgRUFkUG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvdyc7XG5pbXBvcnQgeyBEb3RHYW1lQWRTaG93U3RhZ2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvd1N0YWdlJztcbmltcG9ydCB7IERvdEdhbWVCdG5DbGljaywgRVJldml2ZUNsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IENhcmRVdGlsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9DYXJkVXRpbCc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgSTE4TkNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbXBvbmVudC9JMThOQ29tcG9uZW50JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhaWxWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgYnRuVXNlID0gbnVsbDtcbiAgYnRuUmVwbGF5ID0gbnVsbDtcbiAgbm9kZU51bSA9IG51bGw7XG4gIG5vZGVVc2UgPSBudWxsO1xuICBub2RlQWQgPSBudWxsO1xuICBsYWJlbE51bSA9IG51bGw7XG4gIGRlc2MgPSBudWxsO1xuICBzaHVmZmxlTnVtID0gMDtcbiAgc2NhbGVFeHRyYSA9IDAuMDU7XG4gIHByZVNodWZmbGVEYXRhID0gbnVsbDtcbiAgcHJldmlld0NvbnRhaW5lciA9IG51bGw7XG4gIHRpbGVTcHJpdGVzID0gbmV3IE1hcCgpO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3VpL0ZhaWxWaWV3XCI7XG4gIEBtai50cmFpdEV2ZW50KFwiRmFpbFZ3X29uTG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50X25vZGVcIik7XG4gICAgdGhpcy5idG5Vc2UgPSB0LmdldENoaWxkQnlOYW1lKFwiYnRuX3VzZVwiKTtcbiAgICB0aGlzLmJ0blJlcGxheSA9IHQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fcmVwbGF5XCIpO1xuICAgIHRoaXMubm9kZU51bSA9IHRoaXMuYnRuVXNlLmdldENoaWxkQnlOYW1lKFwibm9kZU51bVwiKTtcbiAgICB0aGlzLm5vZGVVc2UgPSB0aGlzLmJ0blVzZS5nZXRDaGlsZEJ5TmFtZShcInVzZVwiKTtcbiAgICB0aGlzLm5vZGVBZCA9IHRoaXMuYnRuVXNlLmdldENoaWxkQnlOYW1lKFwiYWRcIik7XG4gICAgdGhpcy5sYWJlbE51bSA9IHRoaXMubm9kZU51bS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5kZXNjID0gdC5nZXRDaGlsZEJ5TmFtZShcImRlc2NcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLmJ0blVzZSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5idG5Vc2UsIHRoaXMub25Vc2VCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmJ0blJlcGxheSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5idG5SZXBsYXksIHRoaXMub25SZXBsYXlCdG5DbGljay5iaW5kKHRoaXMpKTtcbiAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkJhbm5lckFkX05lZWRIaWRlQmFubmVyXCIsIHRoaXMsIFtdKTtcbiAgfVxuICBvbkNsb3NlQnRuQ2xpY2soKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmFpbFZ3X3Nob3dcIilcbiAgc2hvdyhlKSB7XG4gICAgdGhpcy5zaHVmZmxlTnVtID0gZS5zaHVmZmxlTnVtIHx8IDA7XG4gICAgdGhpcy5wcmVTaHVmZmxlRGF0YSA9IGUucHJlU2h1ZmZsZURhdGEgfHwgbnVsbDtcbiAgICB0aGlzLmFkZFBvcHVwRmFpbENudCgpO1xuICAgIHRoaXMuaW5pdEJ0blVzZSgpO1xuICAgIHRoaXMucHJlU2h1ZmZsZURhdGEgJiYgdGhpcy5jcmVhdGVQcmV2aWV3KHRoaXMucHJlU2h1ZmZsZURhdGEpO1xuICAgIHRoaXMuc2h1ZmZsZU51bSA8PSAwICYmIERvdEFkUmV3YXJkRW50ZXIuZG90KHRydWUsIEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fUmV2aXZlKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmV2aXZlKEVSZXZpdmVDbGlja1R5cGUuU2hvdyk7XG4gIH1cbiAgYWRkUG9wdXBGYWlsQ250KCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCk7XG4gICAgZSAhPT0gTWpHYW1lVHlwZS5Ob25lICYmIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEdhbWVEYXRhQnlHYW1lVHlwZShlKS5hZGRQb3B1cEZhaWxDbnQoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZhaWxWd19pbml0QnRuVXNlXCIpXG4gIGluaXRCdG5Vc2UoKSB7XG4gICAgdmFyIGUgPSB0aGlzLnNodWZmbGVOdW0gPiAwO1xuICAgIHRoaXMubm9kZU51bS5hY3RpdmUgPSBlO1xuICAgIHRoaXMubm9kZVVzZS5hY3RpdmUgPSBlO1xuICAgIHRoaXMubm9kZUFkLmFjdGl2ZSA9ICFlO1xuICAgIGUgJiYgKHRoaXMubGFiZWxOdW0uc3RyaW5nID0gdGhpcy5zaHVmZmxlTnVtLnRvU3RyaW5nKCkpO1xuICB9XG4gIG9uVXNlQnRuQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc2h1ZmZsZU51bSA+IDApIHtcbiAgICAgIHRoaXMudXNlU2h1ZmZsZVByb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53YXRjaEFkRm9yU2h1ZmZsZSgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZhaWxWd191c2VTaHVmZmxlXCIpXG4gIHVzZVNodWZmbGVQcm9wKCkge1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RSZXZpdmUoRVJldml2ZUNsaWNrVHlwZS5TaHVmZmxlSXRlbSk7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdFJldml2ZShFUmV2aXZlQ2xpY2tUeXBlLkNsb3NlKTtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uU2h1ZmZsZSxcbiAgICAgIGZyb206IEVTaHVmZmxlRnJvbS5Ob3JtYWwsXG4gICAgICBwcmVTaHVmZmxlRGF0YTogdGhpcy5wcmVTaHVmZmxlRGF0YVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRmFpbFZ3X3dhdGNoQWRTaHVmZmxlXCIpXG4gIHdhdGNoQWRGb3JTaHVmZmxlKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmV2aXZlKEVSZXZpdmVDbGlja1R5cGUuU2h1ZmZsZUFkKTtcbiAgICBEb3RBZFJld2FyZEVudGVyLmRvdChmYWxzZSwgRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXZpdmUpO1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fUmV2aXZlLCB0cnVlKTtcbiAgICBEb3RHYW1lQWRTaG93U3RhZ2UuZG90KGZhbHNlLCBcImNsaWNrQWRMb2NrXCIpO1xuICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrVmlkZW9BZElzUmVhZHkoKSAmJiB0aGlzLmRlbGVnYXRlICYmIGNjLmlzVmFsaWQodGhpcy5kZWxlZ2F0ZS5yb290VmlldykgJiYgKHRoaXMuZGVsZWdhdGUucm9vdFZpZXcub3BhY2l0eSA9IDApO1xuICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlWaWRlb0FkKEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fUmV2aXZlLCB7XG4gICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZS5vbkFkU3VjY2VzcygpO1xuICAgICAgfSxcbiAgICAgIG9uRmFpbGVkOiBmdW5jdGlvbiAodCkge1xuICAgICAgICBlLm9uQWRGYWlsZWQodCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25BZFN1Y2Nlc3MoKSB7XG4gICAgaWYgKHRoaXMuZGVsZWdhdGUgJiYgY2MuaXNWYWxpZCh0aGlzLmRlbGVnYXRlLnJvb3RWaWV3KSkge1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdFJldml2ZShFUmV2aXZlQ2xpY2tUeXBlLkNsb3NlKTtcbiAgICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICAgIHZhciBlID0ge1xuICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLkFkZFByb3AsXG4gICAgICAgIHByb3BUeXBlOiBcInNodWZmbGVcIixcbiAgICAgICAgbnVtOiAxLFxuICAgICAgICByZWFzb25JZDogRUdldEl0ZW1SZWFzb25JZC5BZFJld2FyZCxcbiAgICAgICAgcmVhc29uSW5mbzogXCLmuLjmiI/lhoXmv4DlirHlub/lkYot5aSN5rS7XCJcbiAgICAgIH07XG4gICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoZSk7XG4gICAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlNodWZmbGUsXG4gICAgICAgIGZyb206IEVTaHVmZmxlRnJvbS5SZXZpdmUsXG4gICAgICAgIHByZVNodWZmbGVEYXRhOiB0aGlzLnByZVNodWZmbGVEYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25BZEZhaWxlZCgpIHtcbiAgICB0aGlzLmRlbGVnYXRlICYmIGNjLmlzVmFsaWQodGhpcy5kZWxlZ2F0ZS5yb290VmlldykgJiYgKHRoaXMuZGVsZWdhdGUucm9vdFZpZXcub3BhY2l0eSA9IDI1NSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJGYWlsVndfcmVwbGF5XCIpXG4gIG9uUmVwbGF5QnRuQ2xpY2soKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiB0aGlzLmRlbGVnYXRlICYmIGNjLmlzVmFsaWQodGhpcy5kZWxlZ2F0ZS5yb290VmlldykpIHtcbiAgICAgIERvdEdhbWVCdG5DbGljay5kb3RSZXZpdmUoRVJldml2ZUNsaWNrVHlwZS5SZXN0YXJ0KTtcbiAgICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uUmVzdGFydCxcbiAgICAgICAgZGllUmVzdWx0OiAwLFxuICAgICAgICBjYWxsRnJvbTogXCJmYWlsXCJcbiAgICAgIH0pO1xuICAgICAgRG90QWRWaXNpdC5kb3RBZFZpc2l0UmV3YXJkQUQoRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXZpdmUsIGZhbHNlKTtcbiAgICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgY3JlYXRlUHJldmlldyhlKSB7XG4gICAgdmFyIHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50X25vZGVcIik7XG4gICAgdGhpcy5idG5SZXBsYXkucG9zaXRpb24gPSBjYy52MygwLCAtNDczKTtcbiAgICB0aGlzLmJ0blVzZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0zMDQpO1xuICAgIHZhciBpID0gdGhpcy5kZXNjLm5vZGUuZ2V0Q29tcG9uZW50KEkxOE5Db21wb25lbnQpO1xuICAgIGlmIChpKSB7XG4gICAgICBpLnNldFRyYW5zbGF0ZUlkKFwiVGlsZU1hdGNoX1Jldml2ZV9EZXRhaWxzXzNcIiwgXCJSZXZpdmUgJiBTaHVmZmxlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc2Muc3RyaW5nID0gXCJSZXZpdmUgJiBTaHVmZmxlXCI7XG4gICAgfVxuICAgIHRoaXMuZGVzYy5mb250U2l6ZSA9IDQ2O1xuICAgIHRoaXMuZGVzYy5saW5lSGVpZ2h0ID0gNDY7XG4gICAgdGhpcy5kZXNjLm5vZGUuc2V0UG9zaXRpb24oMCwgLTE2Nik7XG4gICAgdGhpcy5wcmV2aWV3Q29udGFpbmVyID0gbmV3IGNjLk5vZGUoXCJwcmV2aWV3X3dpbmRvd1wiKTtcbiAgICB0aGlzLnByZXZpZXdDb250YWluZXIuc2V0UG9zaXRpb24oMCwgMTIwKTtcbiAgICB0LmFkZENoaWxkKHRoaXMucHJldmlld0NvbnRhaW5lciwgMTApO1xuICAgIHZhciBvID0gbmV3IGNjLk5vZGUoXCJiZ19tYXNrXCIpO1xuICAgIG8uYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICAgIG8uc2V0Q29udGVudFNpemUoNzUwLCA2MDApO1xuICAgIG8uY29sb3IgPSBjYy5jb2xvcigwLCAwLCAwKTtcbiAgICBvLm9wYWNpdHkgPSAxODA7XG4gICAgdGhpcy5wcmV2aWV3Q29udGFpbmVyLmFkZENoaWxkKG8sIDApO1xuICAgIHZhciBhID0gbmV3IGNjLk5vZGUoXCJ3aW5kb3dfcGFuZWxcIik7XG4gICAgYS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICB0aGlzLnByZXZpZXdDb250YWluZXIuYWRkQ2hpbGQoYSwgMSk7XG4gICAgdmFyIG4gPSBuZXcgY2MuTm9kZShcInBhbmVsX2JnXCIpO1xuICAgIG4uYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICAgIG4uc2V0Q29udGVudFNpemUoNjUwLCA0NTApO1xuICAgIG4uY29sb3IgPSBjYy5jb2xvcig0MCwgNDAsIDUwKTtcbiAgICBuLm9wYWNpdHkgPSAyNTU7XG4gICAgYS5hZGRDaGlsZChuLCAwKTtcbiAgICB2YXIgciA9IG5ldyBjYy5Ob2RlKFwibWFza19ub2RlXCIpO1xuICAgIGEuYWRkQ2hpbGQociwgMSk7XG4gICAgci5zZXRQb3NpdGlvbigwLCAzMCk7XG4gICAgci5zZXRDb250ZW50U2l6ZSg3NTgsIDQ2Nyk7XG4gICAgci5hZGRDb21wb25lbnQoY2MuTWFzaykudHlwZSA9IGNjLk1hc2suVHlwZS5SRUNUO1xuICAgIHZhciBzID0gbmV3IGNjLk5vZGUoXCJnYW1lX2JnXCIpO1xuICAgIHMuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICAgIHMuc2V0Q29udGVudFNpemUoNzU4LCA0NjcpO1xuICAgIHMuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgdGhpcy5sb2FkR2FtZUJhY2tncm91bmQocyk7XG4gICAgci5hZGRDaGlsZChzLCAtMSk7XG4gICAgdmFyIGwgPSBuZXcgY2MuTm9kZShcInRpbGVzX2NvbnRhaW5lclwiKTtcbiAgICByLmFkZENoaWxkKGwsIDApO1xuICAgIHRoaXMuY3JlYXRlVGlsZVNwcml0ZXMoZS50aWxlUG9zaXRpb25zLCBlLnRpbGVQb3NpdGlvbnNBZnRlciwgbCk7XG4gICAgdGhpcy5maXRUaWxlc1RvTWFzayhsLCByLmdldENvbnRlbnRTaXplKCksIGUudGlsZVBvc2l0aW9uc0FmdGVyKTtcbiAgICB0aGlzLnBsYXlQcmV2aWV3QW5pbWF0aW9uKGUsIGwpO1xuICAgIHZhciBjID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJGYWlsVGlwUmF0ZUJ5UHJvcFRyYWl0XCIpO1xuICAgIGlmIChjICYmIGMuZ2V0SW5zdGFuY2UoKSAmJiB0cnVlID09PSBjLmdldEluc3RhbmNlKCkuZXZlbnRFbmFibGVkKSB7XG4gICAgICB2YXIgZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnMVwiKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGQpKSB7XG4gICAgICAgIHZhciBwID0gZC5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICBkLnNldENvbnRlbnRTaXplKHAud2lkdGgsIHAuaGVpZ2h0ICsgNTApO1xuICAgICAgICB0aGlzLmJ0blJlcGxheS5wb3NpdGlvbiA9IGNjLnYzKDAsIC01MTMpO1xuICAgICAgICB0aGlzLmJ0blVzZS5wb3NpdGlvbiA9IGNjLnYzKDAsIC0zNDQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjcmVhdGVUaWxlU3ByaXRlcyhlLCB0LCBpKSB7XG4gICAgdmFyIG8gPSB0aGlzLFxuICAgICAgYSA9IGZ1bmN0aW9uIGEoZSwgdCwgaSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IDY1ICogZSArIDIgKiBpLFxuICAgICAgICAgIHk6IDg1ICogLXQgKyAyICogaVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIG4gPSB0aGlzLmNvbXB1dGVSb3dDb21wcmVzc2lvbk9mZnNldHMoZSksXG4gICAgICByID0gdGhpcy5jb21wdXRlUm93Q29tcHJlc3Npb25PZmZzZXRzKHQpO1xuICAgIGlmIChuLnNpemUgPiAwIHx8IHIuc2l6ZSA+IDApIHtcbiAgICAgIHRoaXMuc2NhbGVFeHRyYSA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NhbGVFeHRyYSA9IDAuMDU7XG4gICAgfVxuICAgIHZhciBzID0gMCxcbiAgICAgIGwgPSAwO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBhKGUuZ3JpZFgsIGUuZ3JpZFksIGUubGF5ZXIpO1xuICAgICAgcyArPSB0Lng7XG4gICAgICBsICs9IHQueSArIChuLmdldChlLnRpbGVJZCkgfHwgMCk7XG4gICAgfSk7XG4gICAgdmFyIGMgPSBzIC8gZS5sZW5ndGgsXG4gICAgICBkID0gbCAvIGUubGVuZ3RoLFxuICAgICAgcCA9IDAsXG4gICAgICB1ID0gMDtcbiAgICB0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gYShlLmdyaWRYLCBlLmdyaWRZLCBlLmxheWVyKTtcbiAgICAgIHAgKz0gdC54O1xuICAgICAgdSArPSB0LnkgKyAoci5nZXQoZS50aWxlSWQpIHx8IDApO1xuICAgIH0pO1xuICAgIHZhciBmID0gcCAvIHQubGVuZ3RoLFxuICAgICAgaCA9IHUgLyB0Lmxlbmd0aCxcbiAgICAgIG0gPSBuZXcgTWFwKCk7XG4gICAgdC5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBtLnNldChlLnRpbGVJZCwgZSk7XG4gICAgfSk7XG4gICAgZS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IG5ldyBjYy5Ob2RlKFwidGlsZV9cIiArIGUudGlsZUlkKSxcbiAgICAgICAgcyA9IG5ldyBjYy5Ob2RlKFwiaW1nU2hhZG93XCIpLFxuICAgICAgICBsID0gcy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgIGwuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xuICAgICAgbC50cmltID0gZmFsc2U7XG4gICAgICBzLnNldEFuY2hvclBvaW50KDAuNSwgMC41KTtcbiAgICAgIHMuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICBzLnpJbmRleCA9IC0xO1xuICAgICAgdC5hZGRDaGlsZChzKTtcbiAgICAgIHZhciBwID0gbmV3IGNjLk5vZGUoXCJpbWdDYXJkQmdcIik7XG4gICAgICBwLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgcC5zZXRBbmNob3JQb2ludCgwLjUsIDAuNSk7XG4gICAgICBwLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgcC56SW5kZXggPSAwO1xuICAgICAgdC5hZGRDaGlsZChwKTtcbiAgICAgIHZhciB1ID0gbmV3IGNjLk5vZGUoXCJpbWdDYXJkXCIpO1xuICAgICAgdS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgIHUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgdS56SW5kZXggPSAxO1xuICAgICAgdC5hZGRDaGlsZCh1KTtcbiAgICAgIHUuc2V0UG9zaXRpb24oLTMsIDMpO1xuICAgICAgdmFyIHYgPSBhKGUuZ3JpZFgsIGUuZ3JpZFksIGUubGF5ZXIpLFxuICAgICAgICB3ID0gdi54IC0gYyxcbiAgICAgICAgXyA9IHYueSArIChuLmdldChlLnRpbGVJZCkgfHwgMCkgLSBkO1xuICAgICAgdC5zZXRQb3NpdGlvbih3LCBfKTtcbiAgICAgIHQuc2NhbGUgPSAwLjgyO1xuICAgICAgdC5fb3JpZ2luYWxQb3MgPSBjYy52Myh3LCBfLCAwKTtcbiAgICAgIHZhciBDID0gbS5nZXQoZS50aWxlSWQpO1xuICAgICAgaWYgKEMpIHtcbiAgICAgICAgdmFyIFMgPSBhKEMuZ3JpZFgsIEMuZ3JpZFksIEMubGF5ZXIpLFxuICAgICAgICAgIFAgPSBTLnggLSBmLFxuICAgICAgICAgIGIgPSBTLnkgKyAoci5nZXQoQy50aWxlSWQpIHx8IDApIC0gaDtcbiAgICAgICAgdC5fdGFyZ2V0UG9zID0gY2MudjMoUCwgYiwgMCk7XG4gICAgICB9IGVsc2UgdC5fdGFyZ2V0UG9zID0gY2MudjModywgXywgMCk7XG4gICAgICB2YXIgTiA9IDAgPT09IGUubGF5ZXIgPyBcImdhbWVwbGF5X2ltZ19zaGFkb3dfZG5cIiA6IFwiZ2FtZXBsYXlfaW1nX3NoYWRvd191cFwiLFxuICAgICAgICBBID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShOKSxcbiAgICAgICAgUiA9IEEucGF0aCxcbiAgICAgICAgSSA9IEEuYnVuZGxlTmFtZSxcbiAgICAgICAgRSA9IEEuZnJvbUF0bGFzO1xuICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUocywgUiwgRSwgZmFsc2UsIEkpO1xuICAgICAgdmFyIEIgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfaW1nX21qX3VwXCIpLFxuICAgICAgICBEID0gQi5wYXRoLFxuICAgICAgICBGID0gQi5idW5kbGVOYW1lLFxuICAgICAgICBNID0gQi5mcm9tQXRsYXM7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShwLCBELCBNLCBmYWxzZSwgRik7XG4gICAgICBpZiAoZS5pc0JhY2spIHtcbiAgICAgICAgdmFyIFQgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIpLFxuICAgICAgICAgIGsgPSBULnBhdGgsXG4gICAgICAgICAgViA9IFQuYnVuZGxlTmFtZSxcbiAgICAgICAgICBqID0gVC5mcm9tQXRsYXM7XG4gICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHUsIGssIGosIGZhbHNlLCBWKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBHID0gQ2FyZFV0aWwuZ2V0QnlLZXkoZS5yZXNJZCk7XG4gICAgICAgIGlmIChHICYmIEcucmVzTmFtZSkge1xuICAgICAgICAgIHZhciBPID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShHLnJlc05hbWUpO1xuICAgICAgICAgIGsgPSBPLnBhdGgsIFYgPSBPLmJ1bmRsZU5hbWUsIGogPSBPLmZyb21BdGxhcztcbiAgICAgICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh1LCBrLCBqLCBmYWxzZSwgVik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHQuX2lzQmFjayA9IGUuaXNCYWNrIHx8IGZhbHNlO1xuICAgICAgaS5hZGRDaGlsZCh0LCBlLmxheWVyKTtcbiAgICAgIG8udGlsZVNwcml0ZXMuc2V0KGUudGlsZUlkLCB0KTtcbiAgICB9KTtcbiAgfVxuICBjb21wdXRlUm93Q29tcHJlc3Npb25PZmZzZXRzKGUpIHtcbiAgICB2YXIgdCA9IG5ldyBNYXAoKTtcbiAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBpID0gTnVtYmVyKGUuZ3JpZFkpO1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShpKSkge1xuICAgICAgICB2YXIgbyA9IHQuZ2V0KGkpIHx8IHtcbiAgICAgICAgICBzdW1ZOiAwLFxuICAgICAgICAgIGNvdW50OiAwXG4gICAgICAgIH07XG4gICAgICAgIG8uc3VtWSArPSBlLnBvc2l0aW9uLnk7XG4gICAgICAgIG8uY291bnQgKz0gMTtcbiAgICAgICAgdC5zZXQoaSwgbyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIGkgPSBBcnJheS5mcm9tKHQua2V5cygpKS5zb3J0KGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gZSAtIHQ7XG4gICAgfSk7XG4gICAgaWYgKGkubGVuZ3RoIDwgMikgcmV0dXJuIG5ldyBNYXAoKTtcbiAgICB2YXIgbyA9IG5ldyBNYXAoKTtcbiAgICBpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBpID0gdC5nZXQoZSk7XG4gICAgICBpICYmIGkuY291bnQgPiAwICYmIG8uc2V0KGUsIGkuc3VtWSAvIGkuY291bnQpO1xuICAgIH0pO1xuICAgIGZvciAodmFyIGEgPSAwLCBuID0gbmV3IE1hcCgpLCByID0gMDsgciA8IGkubGVuZ3RoOyByKyspIHtcbiAgICAgIHZhciBzID0gaVtyXTtcbiAgICAgIG4uc2V0KHMsIC1hKTtcbiAgICAgIGlmICghKHIgPj0gaS5sZW5ndGggLSAxKSkge1xuICAgICAgICB2YXIgbCA9IGlbciArIDFdLFxuICAgICAgICAgIGMgPSBvLmdldChzKSxcbiAgICAgICAgICBkID0gby5nZXQobCksXG4gICAgICAgICAgcCA9IGwgLSBzLFxuICAgICAgICAgIHUgPSBwIC0gMTtcbiAgICAgICAgdm9pZCAwID09PSBjIHx8IHZvaWQgMCA9PT0gZCB8fCBwIDw9IDAgfHwgdSA8IDQgfHwgKGEgKz0gKGQgLSBjKSAvIHAgKiBNYXRoLmNlaWwoMC41ICogdSkpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZiA9IG5ldyBNYXAoKTtcbiAgICBlLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gTnVtYmVyKGUuZ3JpZFkpLFxuICAgICAgICBpID0gbi5nZXQodCkgfHwgMDtcbiAgICAgIGkgJiYgZi5zZXQoZS50aWxlSWQsIGkpO1xuICAgIH0pO1xuICAgIHJldHVybiBmO1xuICB9XG4gIGZpdFRpbGVzVG9NYXNrKGUsIHQpIHtcbiAgICB2YXIgaSA9IEluZmluaXR5LFxuICAgICAgbyA9IC1JbmZpbml0eSxcbiAgICAgIGEgPSBJbmZpbml0eSxcbiAgICAgIG4gPSAtSW5maW5pdHk7XG4gICAgdGhpcy50aWxlU3ByaXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGUuZ2V0UG9zaXRpb24oKTtcbiAgICAgIGkgPSBNYXRoLm1pbihpLCB0LnggLSAzMCk7XG4gICAgICBvID0gTWF0aC5tYXgobywgdC54ICsgMzApO1xuICAgICAgYSA9IE1hdGgubWluKGEsIHQueSAtIDQwKTtcbiAgICAgIG4gPSBNYXRoLm1heChuLCB0LnkgKyA0MCk7XG4gICAgICB2YXIgciA9IGUuX3RhcmdldFBvcztcbiAgICAgIGlmIChyKSB7XG4gICAgICAgIGkgPSBNYXRoLm1pbihpLCByLnggLSAzMCk7XG4gICAgICAgIG8gPSBNYXRoLm1heChvLCByLnggKyAzMCk7XG4gICAgICAgIGEgPSBNYXRoLm1pbihhLCByLnkgLSA0MCk7XG4gICAgICAgIG4gPSBNYXRoLm1heChuLCByLnkgKyA0MCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHIgPSBvIC0gaSxcbiAgICAgIHMgPSBuIC0gYSxcbiAgICAgIGwgPSAwLjkgKiB0LndpZHRoIC8gcixcbiAgICAgIGMgPSAwLjkgKiB0LmhlaWdodCAvIHMsXG4gICAgICBkID0gTWF0aC5taW4obCwgYyk7XG4gICAgZS5zY2FsZSA9IE1hdGgubWluKGQgKyB0aGlzLnNjYWxlRXh0cmEsIDEuMDUpO1xuICB9XG4gIHBsYXlQcmV2aWV3QW5pbWF0aW9uKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBpID0gY2MudjMoMCwgMCwgMCksXG4gICAgICBvID0gMCxcbiAgICAgIGEgPSB0aGlzLnRpbGVTcHJpdGVzLnNpemU7XG4gICAgdGhpcy50aWxlU3ByaXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7XG4gICAgICBjYy50d2VlbihuKS5kZWxheSgwLjIpLnRvKDAuMiwge1xuICAgICAgICBwb3NpdGlvbjogaVxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgrK28gPj0gYSkge1xuICAgICAgICAgIHQuY2hhbmdlVGlsZUZhY2VzKGUuYWZ0ZXJNYXBwaW5nKTtcbiAgICAgICAgICB0LnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnNjYXR0ZXJUaWxlcygpO1xuICAgICAgICAgIH0sIDAuMSk7XG4gICAgICAgIH1cbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH1cbiAgY2hhbmdlVGlsZUZhY2VzKGUpIHtcbiAgICB0aGlzLnRpbGVTcHJpdGVzLmZvckVhY2goZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgIHZhciBvID0gZVtpXSxcbiAgICAgICAgYSA9IHQuX2lzQmFjayB8fCBmYWxzZTtcbiAgICAgIGlmICh2b2lkIDAgIT09IG8pIHtcbiAgICAgICAgdmFyIG4gPSB0LmdldENoaWxkQnlOYW1lKFwiaW1nQ2FyZFwiKTtcbiAgICAgICAgaWYgKG4pIGlmIChhKSB7XG4gICAgICAgICAgdmFyIHIgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIpLFxuICAgICAgICAgICAgcyA9IHIucGF0aCxcbiAgICAgICAgICAgIGwgPSByLmJ1bmRsZU5hbWUsXG4gICAgICAgICAgICBjID0gci5mcm9tQXRsYXM7XG4gICAgICAgICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUobiwgcywgYywgZmFsc2UsIGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBkID0gQ2FyZFV0aWwuZ2V0QnlLZXkobyk7XG4gICAgICAgICAgaWYgKGQgJiYgZC5yZXNOYW1lKSB7XG4gICAgICAgICAgICB2YXIgcCA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoZC5yZXNOYW1lKTtcbiAgICAgICAgICAgIHMgPSBwLnBhdGgsIGwgPSBwLmJ1bmRsZU5hbWUsIGMgPSBwLmZyb21BdGxhcztcbiAgICAgICAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKG4sIHMsIGMsIGZhbHNlLCBsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzY2F0dGVyVGlsZXMoKSB7XG4gICAgdGhpcy50aWxlU3ByaXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGUuX3RhcmdldFBvcyB8fCBlLl9vcmlnaW5hbFBvcyB8fCBjYy52MygwLCAwLCAwKTtcbiAgICAgIGNjLnR3ZWVuKGUpLnRvKDAuMiwge1xuICAgICAgICBwb3NpdGlvbjogdFxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9KTtcbiAgfVxuICBsb2FkR2FtZUJhY2tncm91bmQoZSkge1xuICAgIHZhciB0LFxuICAgICAgaSxcbiAgICAgIG8gPSBjYy5maW5kKFwiQ2FudmFzXCIpO1xuICAgIGlmIChvKSB0cnkge1xuICAgICAgZm9yICh2YXIgYSA9IF9fdmFsdWVzKFtcInJvb3ROb2RlL3N0YWdlTGF5ZXIvTWFpbkdhbWVWaWV3X3Jvb3RWaWV3L3Jvb3QvYmdcIiwgXCJyb290Tm9kZS9zdGFnZUxheWVyL0RhaWx5Q2hhbGxlbmdlVmlld19yb290Vmlldy9yb290L2JnXCIsIFwicm9vdE5vZGUvc3RhZ2VMYXllci9UcmF2ZWxHYW1lVmlld19yb290Vmlldy9yb290L2JnXCJdKSwgbiA9IGEubmV4dCgpOyAhbi5kb25lOyBuID0gYS5uZXh0KCkpIHtcbiAgICAgICAgdmFyIHMgPSBuLnZhbHVlLFxuICAgICAgICAgIGwgPSBjYy5maW5kKHMsIG8pO1xuICAgICAgICBpZiAobCkge1xuICAgICAgICAgIHZhciBjID0gbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICBpZiAoYyAmJiBjLnNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICB2YXIgZCA9IGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgICBkLnNwcml0ZUZyYW1lID0gYy5zcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBuICYmICFuLmRvbmUgJiYgKGkgPSBhLnJldHVybikgJiYgaS5jYWxsKGEpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIGUuY29sb3IgPSBjYy5jb2xvcig0NSwgODUsIDEyMCk7XG4gICAgdmFyIHAgPSBlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHAgJiYgKHAuc3ByaXRlRnJhbWUgPSBudWxsKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkZhaWxWd19kZXN0cm95XCIpXG4gIG9uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5wcmV2aWV3Q29udGFpbmVyICYmIGNjLmlzVmFsaWQodGhpcy5wcmV2aWV3Q29udGFpbmVyKSkge1xuICAgICAgdGhpcy5wcmV2aWV3Q29udGFpbmVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucHJldmlld0NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMudGlsZVNwcml0ZXMuY2xlYXIoKTtcbiAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkJhbm5lckFkX05lZWRTaG93QmFubmVyXCIsIHRoaXMsIFtdKTtcbiAgICBzdXBlci5vbkRlc3Ryb3kgJiYgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=