
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankBonusView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '514449bDDhO8IqMMAG3RD9r', 'RankBonusView');
// subpackages/l_rank/Scripts/RankBonusView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var RankBonusListView_1 = require("./RankBonusListView");
var CountdownComponent_1 = require("./component/CountdownComponent");
var RankModel_1 = require("./RankModel");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var RankBonusCollectEffect_1 = require("./RankBonusCollectEffect");
var RankBonusItem_1 = require("./RankBonusItem");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DGamePageShow_1 = require("../../../Scripts/dot/DGamePageShow");
var GameData_1 = require("../../../Scripts/core/simulator/data/GameData");
var RankEnums_1 = require("./util/RankEnums");
var RankBonusWinRateView_1 = require("./RankBonusWinRateView");
var Config_1 = require("../../../Scripts/Config");
var RankBonusView = /** @class */ (function (_super) {
    __extends(RankBonusView, _super);
    function RankBonusView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._titleNode = null;
        _this._title2Node = null;
        _this._timeNode = null;
        _this._timeLabelNode = null;
        _this._contentNode = null;
        _this._maskNode = null;
        _this._closeBtnNode = null;
        _this._maskBtnNode = null;
        _this._myselfItemNode = null;
        _this._myselfRankBonusItem = null;
        _this._winRateView = null;
        _this._rankListView = null;
        _this._isLoad = false;
        _this._isNeedShow = false;
        _this._isAnimPlaying = false;
        _this._isCollectPlaying = false;
        _this._isUpRankPlaying = false;
        return _this;
    }
    Object.defineProperty(RankBonusView.prototype, "myselfRankBonusItem", {
        get: function () {
            return this._myselfRankBonusItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RankBonusView.prototype, "isUpRankPlaying", {
        get: function () {
            return this._isUpRankPlaying;
        },
        enumerable: false,
        configurable: true
    });
    RankBonusView.prototype.getContentNode = function () {
        return this._contentNode;
    };
    RankBonusView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._contentNode = this.node.getChildByName("content");
        this._maskNode = this.node.getChildByName("bg");
        this._titleNode = this.node.getChildByName("title");
        this._title2Node = this.node.getChildByName("title2");
        this._timeNode = cc.find("time_node", this.node);
        this._maskBtnNode = cc.find("mask", this.node);
        this._closeBtnNode = cc.find("btn_next", this._contentNode);
        this._closeBtnNode && this.OnButtonClick(this._closeBtnNode, this.onCloseClick.bind(this));
        this.initComponents();
        this.initMyRankBonusItem();
        this._isLoad = true;
        this._isNeedShow && this.show();
        mj.triggerInternalEvent("BannerAd_NeedHideBanner", this, []);
    };
    RankBonusView.prototype.initComponents = function () {
        var t, e;
        this._rankListView = null === (t = this._contentNode.getChildByName("scrollView")) || void 0 === t ? void 0 : t.addComponent(RankBonusListView_1.default);
        (null === (e = this._rankListView) || void 0 === e ? void 0 : e.node) && (this._rankListView.node.active = false);
        this._timeLabelNode = cc.find("time_node/time", this.node);
        this.updateCountdown();
        var o = this.node.getChildByName("progress");
        this._winRateView = o.addComponent(RankBonusWinRateView_1.default);
    };
    RankBonusView.prototype.initMyRankBonusItem = function () {
        if (!this._myselfItemNode) {
            var t = RankBonusItem_1.default.createCell("rank");
            if (t) {
                var e = t.getComponent(RankBonusItem_1.default);
                t.parent = this._contentNode;
                t.active = false;
                t.position = cc.v3(0, 0, 0);
                this._myselfRankBonusItem = e;
                this._myselfItemNode = t;
                this._myselfItemNode.active = false;
            }
        }
    };
    RankBonusView.prototype.getCDComp = function () {
        var t;
        this._timeLabelNode || (this._timeLabelNode = cc.find("time_node/time", this.node));
        return null === (t = this._timeLabelNode) || void 0 === t ? void 0 : t.getComponent(CountdownComponent_1.default);
    };
    RankBonusView.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        return _t;
    };
    RankBonusView.prototype.onGameShow = function () {
        this.updateCountdown();
    };
    RankBonusView.prototype.onGameHide = function () { };
    RankBonusView.prototype.show = function () {
        var t, e, o = this;
        if (this._isLoad) {
            this._isNeedShow = false;
            DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LeaderBoardResultPage);
            var n = RankModel_1.default.getInstance().getCurBoardData();
            n && I18NStrings_1.default.setText(this._titleNode, "Gardening Master", n.Name);
            this._maskNode.opacity = 0;
            this._titleNode.opacity = 0;
            this._timeNode.opacity = 0;
            this._title2Node.opacity = 0;
            this._closeBtnNode.opacity = 0;
            this.changeTouchState(false, true);
            null === (t = this._winRateView) || void 0 === t || t.show();
            if (this._rankListView) {
                this._rankListView.node.active = true;
                this._rankListView.node.opacity = 0;
                this._rankListView.refreshList(this.delegate.model.getRankList() || []);
            }
            null === (e = this._winRateView) || void 0 === e || e.updateWinStreakDisplay();
            this.updateCountdown();
            this.playRankBonusSound();
            this.scheduleOnce(function () {
                o.moveToMyRank();
            }, 0);
        }
        else
            this._isNeedShow = true;
    };
    RankBonusView.prototype.moveToMyRank = function () {
        var t, e = this;
        null === (t = this._rankListView) || void 0 === t || t.scrollToMyRank(function () {
            e.playEnterAnimation();
        });
    };
    RankBonusView.prototype.updateCountdown = function () {
        if (this._timeLabelNode) {
            var t = this._timeLabelNode.getComponent(CountdownComponent_1.default), e = RankModel_1.default.getInstance().getLeftTime();
            e > 0 && (null == t || t.setRemainTime(e));
        }
    };
    RankBonusView.prototype.playEnterAnimation = function () {
        var t, e;
        this._isAnimPlaying = true;
        this._maskNode.opacity = 0;
        cc.tween(this._maskNode).to(0.1, {
            opacity: 150
        }).start();
        [this._titleNode, this._timeNode, this._title2Node].forEach(function (t, e) {
            if (cc.isValid(t)) {
                t.opacity = 255;
                t.scale = 0;
                cc.tween(t).delay(0.06 * e).to(0.26, {
                    scale: 1
                }, {
                    easing: "backOut"
                }).start();
            }
        });
        null === (t = this._winRateView) || void 0 === t || t.playEnterAnimation();
        var o = null === (e = this._rankListView) || void 0 === e ? void 0 : e.playListItemAnimation(), n = Math.max(0, o - 0.89);
        if (this._closeBtnNode) {
            this._closeBtnNode.opacity = 255;
            this._closeBtnNode.scale = 0;
            var a = this.onEnterAniEnd.bind(this);
            cc.tween(this._closeBtnNode).delay(0.66).to(0.23, {
                scale: 1
            }, {
                easing: "backOut"
            }).delay(n).call(a).start();
        }
    };
    RankBonusView.prototype.onEnterAniEnd = function () {
        this.showRateLevelEffect();
    };
    RankBonusView.prototype.changeMaskOrder = function () {
        if (this._maskBtnNode && this._contentNode && this._closeBtnNode && this._closeBtnNode.activeInHierarchy && this._maskBtnNode.parent !== this._contentNode) {
            this._maskBtnNode.parent = this._contentNode;
            var t = this._closeBtnNode.getSiblingIndex();
            this._maskBtnNode.setSiblingIndex(t);
        }
    };
    RankBonusView.prototype.showRateLevelEffect = function () {
        var t, e, o, n, a, i = this, r = this.delegate.model.localData.myWinStreakCount, s = null === (e = null === (t = this.delegate.model.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.winStreakCount;
        if (r !== s && void 0 !== s) {
            var l = null === (o = RankModel_1.default.getInstance().getRobotLogic()) || void 0 === o ? void 0 : o.getWinStreakRateLevel(s);
            if (null == l || null !== (n = this._winRateView) && void 0 !== n && n.isRateLevelActive(l)) {
                this.playCollectEffect();
            }
            else {
                null === (a = this._winRateView) || void 0 === a || a.playRateLevelAnimation(l, function () {
                    cc.isValid(i.node) && i.playCollectEffect();
                });
            }
        }
        else
            this.playCollectEffect();
    };
    RankBonusView.prototype.playCollectEffect = function () {
        var t, e, o, n, a = this;
        this._isAnimPlaying = false;
        this._isCollectPlaying = true;
        var i = this.delegate.model.localData, r = null === (t = i.rankGameData) || void 0 === t ? void 0 : t.joinActInfo;
        if (r) {
            var s = r.score - i.myScore;
            if (s <= 0)
                this.playAllEffectEnd();
            else {
                var l = null === (e = this._winRateView) || void 0 === e ? void 0 : e.getActiveBarPos();
                if (l) {
                    var c = null === (o = this._rankListView) || void 0 === o ? void 0 : o.getRankSelfItemWorldPos(), d = c.worldPos, p = c.item;
                    if (p) {
                        var u = this.createAndPlayCardEffect.bind(this), h = 0;
                        cc.tween(this.node).repeat(s, cc.tween().delay(0.2).call(function () {
                            a._isCollectPlaying && u(l, d, h == s - 1, p);
                            h++;
                        })).start();
                        null === (n = this._winRateView) || void 0 === n || n.playAddScoreAnimation(s);
                    }
                    else
                        this.playAllEffectEnd();
                }
                else
                    this.playAllEffectEnd();
            }
        }
        else
            this.playAllEffectEnd();
    };
    RankBonusView.prototype.createAndPlayCardEffect = function (t, e, o, n) {
        var a = this;
        try {
            var i = this.showUpLevelEffect.bind(this);
            RankBonusCollectEffect_1.default.createUI(RankBonusCollectEffect_1.default.prefabUrl).then(function (r) {
                if (cc.isValid(r) && cc.isValid(a.node)) {
                    if (a._isCollectPlaying) {
                        a.node.addChild(r);
                        r.setPosition(t);
                        var s = r.getComponent(RankBonusCollectEffect_1.default);
                        if (s) {
                            s.playEffect(e, o, function () {
                                if (cc.isValid(a.node)) {
                                    n && cc.isValid(n.node) && n.addScore(1);
                                    o && i(n);
                                }
                            });
                        }
                        else {
                            o && a.playAllEffectEnd();
                        }
                    }
                    else {
                        r.destroy();
                        o && a.playAllEffectEnd();
                    }
                }
                else
                    o && a.playAllEffectEnd();
            });
        }
        catch (t) { }
    };
    RankBonusView.prototype.showUpLevelEffect = function (t) {
        var e, o = this;
        if (t && (null === (e = t.node) || void 0 === e ? void 0 : e.activeInHierarchy)) {
            if (this._rankListView) {
                this._isCollectPlaying = false;
                this._isUpRankPlaying = true;
                var n = this._rankListView.getMyIndex();
                RankModel_1.default.getInstance().syncMyScore();
                var a = this.delegate.model.localData.myRank, i = n + 1, r = t.getRank() > this.delegate.model.localData.myRank;
                t.playUpLevelEffect(r, function (t) {
                    if (cc.isValid(o.node) && o._isUpRankPlaying && o._rankListView && t && cc.isValid(t.node) && t.node.activeInHierarchy && r) {
                        o.playUpLevelEffect(t, i, a);
                    }
                    else {
                        o.playAllEffectEnd();
                    }
                });
            }
            else
                this.playAllEffectEnd();
        }
        else
            this.playAllEffectEnd();
    };
    RankBonusView.prototype.playUpLevelEffect = function (t, e, o) {
        var n = this;
        this._rankListView && cc.isValid(t.node) && this._rankListView.scrollToRankIfNeeded(o, false, true).then(function (a) {
            if (n._isUpRankPlaying && n._rankListView && cc.isValid(t.node))
                if (a)
                    n._rankListView.moveItemToRank(e, o, function (t) {
                        if (n._isUpRankPlaying && n._rankListView) {
                            mj.audioManager.stopEffect(n._upRankLoopAudioId);
                            if (t && t.enabledInHierarchy) {
                                t.showRankOutEffect(function () {
                                    cc.isValid(n.node) && n.upRankEnd(t.node);
                                });
                            }
                            else {
                                n.playAllEffectEnd();
                            }
                        }
                    });
                else {
                    n._rankListView.exchangeRankData(e, o);
                    n.updateMyselfItem(t, e);
                }
        });
    };
    RankBonusView.prototype.upRankScroll = function () {
        var t = RankModel_1.default.getInstance(), e = Math.min(t.localData.myRank - 1, 48), o = this._rankListView.computeScrollParams(e), n = o.targetOffsetY, a = o.scrollTime;
        this._rankListView.scrollToIndex(e, n, a);
        return {
            toIndex: e,
            scrollTime: a
        };
    };
    RankBonusView.prototype.getItemAniDelay = function () {
        return 0.2;
    };
    RankBonusView.prototype.updateMyselfItem = function (t, e) {
        var o = this;
        if (t && cc.isValid(t.node) && this._myselfRankBonusItem && cc.isValid(this._myselfRankBonusItem.node)) {
            var n = t.node.convertToWorldSpaceAR(cc.Vec2.ZERO), a = t.node.height;
            this._myselfRankBonusItem.updateCell(t.getData());
            var i = this._myselfRankBonusItem.node.parent.convertToNodeSpaceAR(n);
            this._myselfRankBonusItem.node.position = new cc.Vec3(0, i.y + a / 2, 0);
            this._myselfRankBonusItem.node.active = true;
            t.node.opacity = 0;
            t.getContentNode().scale = 0;
            this._myselfRankBonusItem.playUpLevelLoopEffect();
            this._upRankLoopAudioId = 0;
            mj.audioManager.playEffect(RankEnums_1.ERankAudioID.ItemMove, true).then(function (t) {
                o._upRankLoopAudioId = t;
            });
            var r = this.delegate.model.localData.myRank, s = this.upRankScroll(), l = (s.toIndex, s.scrollTime), c = l > 1 ? l - this.getItemAniDelay() : l, d = this._rankListView.getRankUpWorldPos(r), p = this._myselfRankBonusItem.node.parent.convertToNodeSpaceAR(d).y, u = Math.abs(this._myselfRankBonusItem.node.y - p) / a * 0.2;
            this.startSelfItemAni(c, p, u, r, e);
        }
    };
    RankBonusView.prototype.startSelfItemAni = function (t, e, o, n) {
        var a = this;
        this._myselfRankBonusItem && cc.isValid(this._myselfRankBonusItem.node) && cc.tween(this._myselfRankBonusItem.node).delay(t).call(function () {
            a.onRankUpStart();
        }).to(o, {
            y: e
        }).call(function () {
            var t;
            a.onRankUpEnd();
            if (a._isUpRankPlaying && a._myselfRankBonusItem && (null === (t = a._myselfRankBonusItem.node) || void 0 === t ? void 0 : t.activeInHierarchy)) {
                mj.audioManager.stopEffect(a._upRankLoopAudioId);
                a._myselfRankBonusItem.node.active = true;
                var e = a._rankListView.getCellByIndex(n - 1);
                cc.isValid(e) && e.convertToWorldSpaceAR(cc.Vec2.ZERO);
                a._myselfRankBonusItem.showRankOutEffect(function () {
                    cc.isValid(a.node) && a.upRankEnd(e);
                });
            }
        }).start();
    };
    RankBonusView.prototype.onRankUpStart = function () { };
    RankBonusView.prototype.onRankUpEnd = function () { };
    RankBonusView.prototype.upRankEnd = function (t) {
        var e, o, n, a;
        null === (e = this._rankListView) || void 0 === e || e.addScoreScrollEnd();
        cc.isValid(t) && (null === (o = t.getComponent(RankBonusItem_1.default)) || void 0 === o || o.updateContentOpacity());
        this._upRankLoopAudioId = null;
        (null === (a = null === (n = this._myselfRankBonusItem) || void 0 === n ? void 0 : n.node) || void 0 === a ? void 0 : a.activeInHierarchy) && (this._myselfRankBonusItem.node.active = false);
        this.playAllEffectEnd();
    };
    RankBonusView.prototype.playAllEffectEnd = function () {
        this._isCollectPlaying = false;
        this._isUpRankPlaying = false;
        this._isAnimPlaying = false;
        this.changeTouchState(true, false);
    };
    RankBonusView.prototype.changeTouchState = function (t, e) {
        if (cc.isValid(this._closeBtnNode)) {
            var o = this._closeBtnNode.getComponent(cc.Button);
            o && (o.interactable = t);
        }
        cc.isValid(this._maskBtnNode) && (this._maskBtnNode.active = e);
    };
    RankBonusView.prototype.playRankBonusSound = function () {
        mj.audioManager.playEffect(RankEnums_1.ERankAudioID.Ranking1);
    };
    RankBonusView.prototype.cancelActions = function () {
        var t, e, o, n, a, i, r, s, l;
        null === (t = this.node) || void 0 === t || t.stopAllActions();
        null === (e = this._maskNode) || void 0 === e || e.stopAllActions();
        null === (o = this._titleNode) || void 0 === o || o.stopAllActions();
        null === (n = this._timeNode) || void 0 === n || n.stopAllActions();
        null === (a = this._title2Node) || void 0 === a || a.stopAllActions();
        null === (i = this._closeBtnNode) || void 0 === i || i.stopAllActions();
        null === (r = this._rankListView) || void 0 === r || r.cancelActions();
        null === (s = this._winRateView) || void 0 === s || s.cancelActions();
        this._myselfRankBonusItem && (null === (l = this._myselfRankBonusItem.node) || void 0 === l ? void 0 : l.activeInHierarchy) && this._myselfRankBonusItem.node.stopAllActions();
        mj.audioManager.stopEffect(this._upRankLoopAudioId);
        this._isAnimPlaying = false;
        this._isCollectPlaying = false;
        this._isUpRankPlaying = false;
    };
    RankBonusView.prototype.onCloseClick = function () {
        var t;
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickRankBonusContinue, GameData_1.default.getInstance().getLevelId());
        this.cancelActions();
        null === (t = this.delegate) || void 0 === t || t.close();
    };
    RankBonusView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.dispatchEvent("RankBonusVw_destroy");
        RankModel_1.default.getInstance().syncMyScore();
        this._myselfRankBonusItem = null;
        mj.triggerInternalEvent("BannerAd_NeedShowBanner", this, []);
    };
    RankBonusView.prefabUrl = "prefabs/rank/RankBonusView";
    __decorate([
        mj.traitEvent("RankBonusVw_onLoad")
    ], RankBonusView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("RankBonusVw_show")
    ], RankBonusView.prototype, "show", null);
    __decorate([
        mj.traitEvent("RankBonusVw_moveToMyRk")
    ], RankBonusView.prototype, "moveToMyRank", null);
    __decorate([
        mj.traitEvent("RankBonusVw_onEnterAniEnd")
    ], RankBonusView.prototype, "onEnterAniEnd", null);
    __decorate([
        mj.traitEvent("RankBonusVw_upRkScroll")
    ], RankBonusView.prototype, "upRankScroll", null);
    __decorate([
        mj.traitEvent("RankBonusVw_getItmAniDly")
    ], RankBonusView.prototype, "getItemAniDelay", null);
    __decorate([
        mj.traitEvent("RankBonusVw_stSelfItmAni")
    ], RankBonusView.prototype, "startSelfItemAni", null);
    __decorate([
        mj.traitEvent("RankBonusVw_rankUpStart")
    ], RankBonusView.prototype, "onRankUpStart", null);
    __decorate([
        mj.traitEvent("RankBonusVw_rankUpEnd")
    ], RankBonusView.prototype, "onRankUpEnd", null);
    __decorate([
        mj.traitEvent("RankBonusVw_cancelActs")
    ], RankBonusView.prototype, "cancelActions", null);
    __decorate([
        mj.traitEvent("RankBonusVw_destroy")
    ], RankBonusView.prototype, "onDestroy", null);
    RankBonusView = __decorate([
        mj.class
    ], RankBonusView);
    return RankBonusView;
}(UIView_1.default));
exports.default = RankBonusView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rQm9udXNWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQseURBQW9EO0FBQ3BELHFFQUFnRTtBQUNoRSx5Q0FBb0M7QUFDcEMsMkVBQXNFO0FBQ3RFLG1FQUE4RDtBQUM5RCxpREFBNEM7QUFDNUMsb0VBQXFGO0FBQ3JGLG9FQUFvRjtBQUNwRiwwRUFBcUU7QUFDckUsOENBQWdEO0FBQ2hELCtEQUEwRDtBQUMxRCxrREFBeUY7QUFFekY7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUErWkM7UUE5WkMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLDBCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLG9CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHVCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMxQixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0lBOFkzQixDQUFDO0lBNVlDLHNCQUFJLDhDQUFtQjthQUF2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksMENBQWU7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUNELHNDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLHlCQUF5QixFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ0Qsc0NBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQywyQkFBaUIsQ0FBQyxDQUFDO1FBQ2hKLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEgsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLDhCQUFvQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELDJDQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxHQUFHLHVCQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsdUJBQWEsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQztTQUNGO0lBQ0gsQ0FBQztJQUNELGlDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEYsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsNEJBQWtCLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBQ0QsMkNBQW1CLEdBQW5CO1FBQ0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLCtCQUFzQixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsRUFBRSxDQUFDLCtCQUFzQixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0Qsa0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsa0NBQVUsR0FBVixjQUFjLENBQUM7SUFFZiw0QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsK0JBQWUsQ0FBQyxHQUFHLENBQUMsNkJBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDbEQsQ0FBQyxJQUFJLHFCQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN6RTtZQUNELElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQy9FLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNoQixDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7O1lBQU0sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ1gsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQztZQUNwRSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx1Q0FBZSxHQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLDRCQUFrQixDQUFDLEVBQzFELENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7SUFDRCwwQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUMvQixPQUFPLEVBQUUsR0FBRztTQUNiLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNYLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN4RSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUNoQixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDWixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtvQkFDbkMsS0FBSyxFQUFFLENBQUM7aUJBQ1QsRUFBRTtvQkFDRCxNQUFNLEVBQUUsU0FBUztpQkFDbEIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ1o7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzNFLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLEVBQzVGLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hELEtBQUssRUFBRSxDQUFDO2FBQ1QsRUFBRTtnQkFDRCxNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELHVDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxSixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzdDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBQ0QsMkNBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEVBQ1IsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFDbEQsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ3BLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckgsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRTtvQkFDOUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7U0FDRjs7WUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QseUNBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNYLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUNuQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzdFLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7aUJBQUs7Z0JBQ3ZDLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4RixJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxFQUM5RixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDYixJQUFJLENBQUMsRUFBRTt3QkFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUM3QyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ3ZELENBQUMsQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDOUMsQ0FBQyxFQUFFLENBQUM7d0JBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDWixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2hGOzt3QkFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDaEM7O29CQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ2hDO1NBQ0Y7O1lBQU0sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNELCtDQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLGdDQUFzQixDQUFDLFFBQVEsQ0FBQyxnQ0FBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNoRixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixFQUFFO3dCQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQ0FBc0IsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLENBQUMsRUFBRTs0QkFDTCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0NBQ2pCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7b0NBQ3RCLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUN6QyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lDQUNYOzRCQUNILENBQUMsQ0FBQyxDQUFDO3lCQUNKOzZCQUFNOzRCQUNMLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzt5QkFDM0I7cUJBQ0Y7eUJBQU07d0JBQ0wsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNaLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztxQkFDM0I7aUJBQ0Y7O29CQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtJQUNoQixDQUFDO0lBQ0QseUNBQWlCLEdBQWpCLFVBQWtCLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUMvRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3hDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQzFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDekQsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUM7b0JBQ2hDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxFQUFFO3dCQUMzSCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDOUI7eUJBQU07d0JBQ0wsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7cUJBQ3RCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7O2dCQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ2hDOztZQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDRCx5Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDbEgsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDO29CQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDO3dCQUN0SCxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFOzRCQUN6QyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs0QkFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFO2dDQUM3QixDQUFDLENBQUMsaUJBQWlCLENBQUM7b0NBQ2xCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUM1QyxDQUFDLENBQUMsQ0FBQzs2QkFDSjtpQ0FBTTtnQ0FDTCxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs2QkFDdEI7eUJBQ0Y7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7cUJBQUs7b0JBQ04sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLEVBQzdCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFDeEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE9BQU87WUFDTCxPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsRUFBRSxDQUFDO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0UsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0Qsd0NBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0RyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ2hELENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM3QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztZQUM1QixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN0RSxDQUFDLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFDMUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFDdkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQzdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUMzQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNuRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLG9CQUFvQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDaEksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDUCxDQUFDLEVBQUUsQ0FBQztTQUNMLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUMvSSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDdkMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELHFDQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUVsQixtQ0FBVyxHQUFYLGNBQWUsQ0FBQztJQUNoQixpQ0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0UsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzlMLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCx3Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsd0NBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0I7UUFDRCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDRCwwQ0FBa0IsR0FBbEI7UUFDRSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0QsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4RSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvSyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUNELG9DQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLCtCQUFlLENBQUMsT0FBTyxDQUFDLDhCQUFjLENBQUMsc0JBQXNCLEVBQUUsa0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUQsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDRSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMxQyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLHlCQUF5QixFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBNVlNLHVCQUFTLEdBQUcsNEJBQTRCLENBQUM7SUFXaEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDOytDQWdCbkM7SUF3Q0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDOzZDQTZCakM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7cURBT3ZDO0lBeUNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQztzREFHMUM7SUFrSUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3FEQVl2QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQzt3REFHekM7SUE0QkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO3lEQW9CekM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7c0RBQ3ZCO0lBRWxCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztvREFDdkI7SUEwQmhCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztzREFnQnZDO0lBUUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2tEQU9wQztJQTlaa0IsYUFBYTtRQURqQyxFQUFFLENBQUMsS0FBSztPQUNZLGFBQWEsQ0ErWmpDO0lBQUQsb0JBQUM7Q0EvWkQsQUErWkMsQ0EvWjBDLGdCQUFNLEdBK1poRDtrQkEvWm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgUmFua0JvbnVzTGlzdFZpZXcgZnJvbSAnLi9SYW5rQm9udXNMaXN0Vmlldyc7XG5pbXBvcnQgQ291bnRkb3duQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50L0NvdW50ZG93bkNvbXBvbmVudCc7XG5pbXBvcnQgUmFua01vZGVsIGZyb20gJy4vUmFua01vZGVsJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBSYW5rQm9udXNDb2xsZWN0RWZmZWN0IGZyb20gJy4vUmFua0JvbnVzQ29sbGVjdEVmZmVjdCc7XG5pbXBvcnQgUmFua0JvbnVzSXRlbSBmcm9tICcuL1JhbmtCb251c0l0ZW0nO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFUmFua0NsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IHsgRG90R2FtZVBhZ2VTaG93LCBFUGFnZVNob3dUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVQYWdlU2hvdyc7XG5pbXBvcnQgR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9kYXRhL0dhbWVEYXRhJztcbmltcG9ydCB7IEVSYW5rQXVkaW9JRCB9IGZyb20gJy4vdXRpbC9SYW5rRW51bXMnO1xuaW1wb3J0IFJhbmtCb251c1dpblJhdGVWaWV3IGZyb20gJy4vUmFua0JvbnVzV2luUmF0ZVZpZXcnO1xuaW1wb3J0IHsgRVZUX01TR19LRVlfRVZFTlRfU0hPVywgRVZUX01TR19LRVlfRVZFTlRfSElERSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0JvbnVzVmlldyBleHRlbmRzIFVJVmlldyB7XG4gIF90aXRsZU5vZGUgPSBudWxsO1xuICBfdGl0bGUyTm9kZSA9IG51bGw7XG4gIF90aW1lTm9kZSA9IG51bGw7XG4gIF90aW1lTGFiZWxOb2RlID0gbnVsbDtcbiAgX2NvbnRlbnROb2RlID0gbnVsbDtcbiAgX21hc2tOb2RlID0gbnVsbDtcbiAgX2Nsb3NlQnRuTm9kZSA9IG51bGw7XG4gIF9tYXNrQnRuTm9kZSA9IG51bGw7XG4gIF9teXNlbGZJdGVtTm9kZSA9IG51bGw7XG4gIF9teXNlbGZSYW5rQm9udXNJdGVtID0gbnVsbDtcbiAgX3dpblJhdGVWaWV3ID0gbnVsbDtcbiAgX3JhbmtMaXN0VmlldyA9IG51bGw7XG4gIF9pc0xvYWQgPSBmYWxzZTtcbiAgX2lzTmVlZFNob3cgPSBmYWxzZTtcbiAgX2lzQW5pbVBsYXlpbmcgPSBmYWxzZTtcbiAgX2lzQ29sbGVjdFBsYXlpbmcgPSBmYWxzZTtcbiAgX2lzVXBSYW5rUGxheWluZyA9IGZhbHNlO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL3JhbmsvUmFua0JvbnVzVmlld1wiO1xuICBnZXQgbXlzZWxmUmFua0JvbnVzSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXlzZWxmUmFua0JvbnVzSXRlbTtcbiAgfVxuICBnZXQgaXNVcFJhbmtQbGF5aW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1VwUmFua1BsYXlpbmc7XG4gIH1cbiAgZ2V0Q29udGVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnROb2RlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0JvbnVzVndfb25Mb2FkXCIpXG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb250ZW50Tm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgdGhpcy5fbWFza05vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKTtcbiAgICB0aGlzLl90aXRsZU5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKTtcbiAgICB0aGlzLl90aXRsZTJOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGl0bGUyXCIpO1xuICAgIHRoaXMuX3RpbWVOb2RlID0gY2MuZmluZChcInRpbWVfbm9kZVwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX21hc2tCdG5Ob2RlID0gY2MuZmluZChcIm1hc2tcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9jbG9zZUJ0bk5vZGUgPSBjYy5maW5kKFwiYnRuX25leHRcIiwgdGhpcy5fY29udGVudE5vZGUpO1xuICAgIHRoaXMuX2Nsb3NlQnRuTm9kZSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fY2xvc2VCdG5Ob2RlLCB0aGlzLm9uQ2xvc2VDbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmluaXRDb21wb25lbnRzKCk7XG4gICAgdGhpcy5pbml0TXlSYW5rQm9udXNJdGVtKCk7XG4gICAgdGhpcy5faXNMb2FkID0gdHJ1ZTtcbiAgICB0aGlzLl9pc05lZWRTaG93ICYmIHRoaXMuc2hvdygpO1xuICAgIG1qLnRyaWdnZXJJbnRlcm5hbEV2ZW50KFwiQmFubmVyQWRfTmVlZEhpZGVCYW5uZXJcIiwgdGhpcywgW10pO1xuICB9XG4gIGluaXRDb21wb25lbnRzKCkge1xuICAgIHZhciB0LCBlO1xuICAgIHRoaXMuX3JhbmtMaXN0VmlldyA9IG51bGwgPT09ICh0ID0gdGhpcy5fY29udGVudE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxWaWV3XCIpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmFkZENvbXBvbmVudChSYW5rQm9udXNMaXN0Vmlldyk7XG4gICAgKG51bGwgPT09IChlID0gdGhpcy5fcmFua0xpc3RWaWV3KSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm5vZGUpICYmICh0aGlzLl9yYW5rTGlzdFZpZXcubm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdGhpcy5fdGltZUxhYmVsTm9kZSA9IGNjLmZpbmQoXCJ0aW1lX25vZGUvdGltZVwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMudXBkYXRlQ291bnRkb3duKCk7XG4gICAgdmFyIG8gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKTtcbiAgICB0aGlzLl93aW5SYXRlVmlldyA9IG8uYWRkQ29tcG9uZW50KFJhbmtCb251c1dpblJhdGVWaWV3KTtcbiAgfVxuICBpbml0TXlSYW5rQm9udXNJdGVtKCkge1xuICAgIGlmICghdGhpcy5fbXlzZWxmSXRlbU5vZGUpIHtcbiAgICAgIHZhciB0ID0gUmFua0JvbnVzSXRlbS5jcmVhdGVDZWxsKFwicmFua1wiKTtcbiAgICAgIGlmICh0KSB7XG4gICAgICAgIHZhciBlID0gdC5nZXRDb21wb25lbnQoUmFua0JvbnVzSXRlbSk7XG4gICAgICAgIHQucGFyZW50ID0gdGhpcy5fY29udGVudE5vZGU7XG4gICAgICAgIHQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHQucG9zaXRpb24gPSBjYy52MygwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5fbXlzZWxmUmFua0JvbnVzSXRlbSA9IGU7XG4gICAgICAgIHRoaXMuX215c2VsZkl0ZW1Ob2RlID0gdDtcbiAgICAgICAgdGhpcy5fbXlzZWxmSXRlbU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldENEQ29tcCgpIHtcbiAgICB2YXIgdDtcbiAgICB0aGlzLl90aW1lTGFiZWxOb2RlIHx8ICh0aGlzLl90aW1lTGFiZWxOb2RlID0gY2MuZmluZChcInRpbWVfbm9kZS90aW1lXCIsIHRoaXMubm9kZSkpO1xuICAgIHJldHVybiBudWxsID09PSAodCA9IHRoaXMuX3RpbWVMYWJlbE5vZGUpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q29tcG9uZW50KENvdW50ZG93bkNvbXBvbmVudCk7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX3QgPSB7fTtcbiAgICBfdFtFVlRfTVNHX0tFWV9FVkVOVF9TSE9XXSA9IHRoaXMub25HYW1lU2hvdy5iaW5kKHRoaXMpO1xuICAgIF90W0VWVF9NU0dfS0VZX0VWRU5UX0hJREVdID0gdGhpcy5vbkdhbWVIaWRlLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIG9uR2FtZVNob3coKSB7XG4gICAgdGhpcy51cGRhdGVDb3VudGRvd24oKTtcbiAgfVxuICBvbkdhbWVIaWRlKCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm9udXNWd19zaG93XCIpXG4gIHNob3coKSB7XG4gICAgdmFyIHQsXG4gICAgICBlLFxuICAgICAgbyA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2lzTG9hZCkge1xuICAgICAgdGhpcy5faXNOZWVkU2hvdyA9IGZhbHNlO1xuICAgICAgRG90R2FtZVBhZ2VTaG93LmRvdChFUGFnZVNob3dUeXBlLkxlYWRlckJvYXJkUmVzdWx0UGFnZSk7XG4gICAgICB2YXIgbiA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1ckJvYXJkRGF0YSgpO1xuICAgICAgbiAmJiBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX3RpdGxlTm9kZSwgXCJHYXJkZW5pbmcgTWFzdGVyXCIsIG4uTmFtZSk7XG4gICAgICB0aGlzLl9tYXNrTm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuX3RpdGxlTm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuX3RpbWVOb2RlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5fdGl0bGUyTm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuX2Nsb3NlQnRuTm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuY2hhbmdlVG91Y2hTdGF0ZShmYWxzZSwgdHJ1ZSk7XG4gICAgICBudWxsID09PSAodCA9IHRoaXMuX3dpblJhdGVWaWV3KSB8fCB2b2lkIDAgPT09IHQgfHwgdC5zaG93KCk7XG4gICAgICBpZiAodGhpcy5fcmFua0xpc3RWaWV3KSB7XG4gICAgICAgIHRoaXMuX3JhbmtMaXN0Vmlldy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3JhbmtMaXN0Vmlldy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLl9yYW5rTGlzdFZpZXcucmVmcmVzaExpc3QodGhpcy5kZWxlZ2F0ZS5tb2RlbC5nZXRSYW5rTGlzdCgpIHx8IFtdKTtcbiAgICAgIH1cbiAgICAgIG51bGwgPT09IChlID0gdGhpcy5fd2luUmF0ZVZpZXcpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnVwZGF0ZVdpblN0cmVha0Rpc3BsYXkoKTtcbiAgICAgIHRoaXMudXBkYXRlQ291bnRkb3duKCk7XG4gICAgICB0aGlzLnBsYXlSYW5rQm9udXNTb3VuZCgpO1xuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBvLm1vdmVUb015UmFuaygpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHRoaXMuX2lzTmVlZFNob3cgPSB0cnVlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0JvbnVzVndfbW92ZVRvTXlSa1wiKVxuICBtb3ZlVG9NeVJhbmsoKSB7XG4gICAgdmFyIHQsXG4gICAgICBlID0gdGhpcztcbiAgICBudWxsID09PSAodCA9IHRoaXMuX3JhbmtMaXN0VmlldykgfHwgdm9pZCAwID09PSB0IHx8IHQuc2Nyb2xsVG9NeVJhbmsoZnVuY3Rpb24gKCkge1xuICAgICAgZS5wbGF5RW50ZXJBbmltYXRpb24oKTtcbiAgICB9KTtcbiAgfVxuICB1cGRhdGVDb3VudGRvd24oKSB7XG4gICAgaWYgKHRoaXMuX3RpbWVMYWJlbE5vZGUpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5fdGltZUxhYmVsTm9kZS5nZXRDb21wb25lbnQoQ291bnRkb3duQ29tcG9uZW50KSxcbiAgICAgICAgZSA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldExlZnRUaW1lKCk7XG4gICAgICBlID4gMCAmJiAobnVsbCA9PSB0IHx8IHQuc2V0UmVtYWluVGltZShlKSk7XG4gICAgfVxuICB9XG4gIHBsYXlFbnRlckFuaW1hdGlvbigpIHtcbiAgICB2YXIgdCwgZTtcbiAgICB0aGlzLl9pc0FuaW1QbGF5aW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9tYXNrTm9kZS5vcGFjaXR5ID0gMDtcbiAgICBjYy50d2Vlbih0aGlzLl9tYXNrTm9kZSkudG8oMC4xLCB7XG4gICAgICBvcGFjaXR5OiAxNTBcbiAgICB9KS5zdGFydCgpO1xuICAgIFt0aGlzLl90aXRsZU5vZGUsIHRoaXMuX3RpbWVOb2RlLCB0aGlzLl90aXRsZTJOb2RlXS5mb3JFYWNoKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICB0Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHQuc2NhbGUgPSAwO1xuICAgICAgICBjYy50d2Vlbih0KS5kZWxheSgwLjA2ICogZSkudG8oMC4yNiwge1xuICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLl93aW5SYXRlVmlldykgfHwgdm9pZCAwID09PSB0IHx8IHQucGxheUVudGVyQW5pbWF0aW9uKCk7XG4gICAgdmFyIG8gPSBudWxsID09PSAoZSA9IHRoaXMuX3JhbmtMaXN0VmlldykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5wbGF5TGlzdEl0ZW1BbmltYXRpb24oKSxcbiAgICAgIG4gPSBNYXRoLm1heCgwLCBvIC0gMC44OSk7XG4gICAgaWYgKHRoaXMuX2Nsb3NlQnRuTm9kZSkge1xuICAgICAgdGhpcy5fY2xvc2VCdG5Ob2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICB0aGlzLl9jbG9zZUJ0bk5vZGUuc2NhbGUgPSAwO1xuICAgICAgdmFyIGEgPSB0aGlzLm9uRW50ZXJBbmlFbmQuYmluZCh0aGlzKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuX2Nsb3NlQnRuTm9kZSkuZGVsYXkoMC42NikudG8oMC4yMywge1xuICAgICAgICBzY2FsZTogMVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICB9KS5kZWxheShuKS5jYWxsKGEpLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua0JvbnVzVndfb25FbnRlckFuaUVuZFwiKVxuICBvbkVudGVyQW5pRW5kKCkge1xuICAgIHRoaXMuc2hvd1JhdGVMZXZlbEVmZmVjdCgpO1xuICB9XG4gIGNoYW5nZU1hc2tPcmRlcigpIHtcbiAgICBpZiAodGhpcy5fbWFza0J0bk5vZGUgJiYgdGhpcy5fY29udGVudE5vZGUgJiYgdGhpcy5fY2xvc2VCdG5Ob2RlICYmIHRoaXMuX2Nsb3NlQnRuTm9kZS5hY3RpdmVJbkhpZXJhcmNoeSAmJiB0aGlzLl9tYXNrQnRuTm9kZS5wYXJlbnQgIT09IHRoaXMuX2NvbnRlbnROb2RlKSB7XG4gICAgICB0aGlzLl9tYXNrQnRuTm9kZS5wYXJlbnQgPSB0aGlzLl9jb250ZW50Tm9kZTtcbiAgICAgIHZhciB0ID0gdGhpcy5fY2xvc2VCdG5Ob2RlLmdldFNpYmxpbmdJbmRleCgpO1xuICAgICAgdGhpcy5fbWFza0J0bk5vZGUuc2V0U2libGluZ0luZGV4KHQpO1xuICAgIH1cbiAgfVxuICBzaG93UmF0ZUxldmVsRWZmZWN0KCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgYSxcbiAgICAgIGkgPSB0aGlzLFxuICAgICAgciA9IHRoaXMuZGVsZWdhdGUubW9kZWwubG9jYWxEYXRhLm15V2luU3RyZWFrQ291bnQsXG4gICAgICBzID0gbnVsbCA9PT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUubW9kZWwubG9jYWxEYXRhLnJhbmtHYW1lRGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5qb2luQWN0SW5mbykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS53aW5TdHJlYWtDb3VudDtcbiAgICBpZiAociAhPT0gcyAmJiB2b2lkIDAgIT09IHMpIHtcbiAgICAgIHZhciBsID0gbnVsbCA9PT0gKG8gPSBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSb2JvdExvZ2ljKCkpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0V2luU3RyZWFrUmF0ZUxldmVsKHMpO1xuICAgICAgaWYgKG51bGwgPT0gbCB8fCBudWxsICE9PSAobiA9IHRoaXMuX3dpblJhdGVWaWV3KSAmJiB2b2lkIDAgIT09IG4gJiYgbi5pc1JhdGVMZXZlbEFjdGl2ZShsKSkge1xuICAgICAgICB0aGlzLnBsYXlDb2xsZWN0RWZmZWN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBudWxsID09PSAoYSA9IHRoaXMuX3dpblJhdGVWaWV3KSB8fCB2b2lkIDAgPT09IGEgfHwgYS5wbGF5UmF0ZUxldmVsQW5pbWF0aW9uKGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGkubm9kZSkgJiYgaS5wbGF5Q29sbGVjdEVmZmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdGhpcy5wbGF5Q29sbGVjdEVmZmVjdCgpO1xuICB9XG4gIHBsYXlDb2xsZWN0RWZmZWN0KCkge1xuICAgIHZhciB0LFxuICAgICAgZSxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgYSA9IHRoaXM7XG4gICAgdGhpcy5faXNBbmltUGxheWluZyA9IGZhbHNlO1xuICAgIHRoaXMuX2lzQ29sbGVjdFBsYXlpbmcgPSB0cnVlO1xuICAgIHZhciBpID0gdGhpcy5kZWxlZ2F0ZS5tb2RlbC5sb2NhbERhdGEsXG4gICAgICByID0gbnVsbCA9PT0gKHQgPSBpLnJhbmtHYW1lRGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5qb2luQWN0SW5mbztcbiAgICBpZiAocikge1xuICAgICAgdmFyIHMgPSByLnNjb3JlIC0gaS5teVNjb3JlO1xuICAgICAgaWYgKHMgPD0gMCkgdGhpcy5wbGF5QWxsRWZmZWN0RW5kKCk7ZWxzZSB7XG4gICAgICAgIHZhciBsID0gbnVsbCA9PT0gKGUgPSB0aGlzLl93aW5SYXRlVmlldykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRBY3RpdmVCYXJQb3MoKTtcbiAgICAgICAgaWYgKGwpIHtcbiAgICAgICAgICB2YXIgYyA9IG51bGwgPT09IChvID0gdGhpcy5fcmFua0xpc3RWaWV3KSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmdldFJhbmtTZWxmSXRlbVdvcmxkUG9zKCksXG4gICAgICAgICAgICBkID0gYy53b3JsZFBvcyxcbiAgICAgICAgICAgIHAgPSBjLml0ZW07XG4gICAgICAgICAgaWYgKHApIHtcbiAgICAgICAgICAgIHZhciB1ID0gdGhpcy5jcmVhdGVBbmRQbGF5Q2FyZEVmZmVjdC5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICBoID0gMDtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkucmVwZWF0KHMsIGNjLnR3ZWVuKCkuZGVsYXkoMC4yKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgYS5faXNDb2xsZWN0UGxheWluZyAmJiB1KGwsIGQsIGggPT0gcyAtIDEsIHApO1xuICAgICAgICAgICAgICBoKys7XG4gICAgICAgICAgICB9KSkuc3RhcnQoKTtcbiAgICAgICAgICAgIG51bGwgPT09IChuID0gdGhpcy5fd2luUmF0ZVZpZXcpIHx8IHZvaWQgMCA9PT0gbiB8fCBuLnBsYXlBZGRTY29yZUFuaW1hdGlvbihzKTtcbiAgICAgICAgICB9IGVsc2UgdGhpcy5wbGF5QWxsRWZmZWN0RW5kKCk7XG4gICAgICAgIH0gZWxzZSB0aGlzLnBsYXlBbGxFZmZlY3RFbmQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdGhpcy5wbGF5QWxsRWZmZWN0RW5kKCk7XG4gIH1cbiAgY3JlYXRlQW5kUGxheUNhcmRFZmZlY3QodCwgZSwgbywgbikge1xuICAgIHZhciBhID0gdGhpcztcbiAgICB0cnkge1xuICAgICAgdmFyIGkgPSB0aGlzLnNob3dVcExldmVsRWZmZWN0LmJpbmQodGhpcyk7XG4gICAgICBSYW5rQm9udXNDb2xsZWN0RWZmZWN0LmNyZWF0ZVVJKFJhbmtCb251c0NvbGxlY3RFZmZlY3QucHJlZmFiVXJsKS50aGVuKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHIpICYmIGNjLmlzVmFsaWQoYS5ub2RlKSkge1xuICAgICAgICAgIGlmIChhLl9pc0NvbGxlY3RQbGF5aW5nKSB7XG4gICAgICAgICAgICBhLm5vZGUuYWRkQ2hpbGQocik7XG4gICAgICAgICAgICByLnNldFBvc2l0aW9uKHQpO1xuICAgICAgICAgICAgdmFyIHMgPSByLmdldENvbXBvbmVudChSYW5rQm9udXNDb2xsZWN0RWZmZWN0KTtcbiAgICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICAgIHMucGxheUVmZmVjdChlLCBvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQoYS5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgbiAmJiBjYy5pc1ZhbGlkKG4ubm9kZSkgJiYgbi5hZGRTY29yZSgxKTtcbiAgICAgICAgICAgICAgICAgIG8gJiYgaShuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbyAmJiBhLnBsYXlBbGxFZmZlY3RFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgci5kZXN0cm95KCk7XG4gICAgICAgICAgICBvICYmIGEucGxheUFsbEVmZmVjdEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIG8gJiYgYS5wbGF5QWxsRWZmZWN0RW5kKCk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoICh0KSB7fVxuICB9XG4gIHNob3dVcExldmVsRWZmZWN0KHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIG8gPSB0aGlzO1xuICAgIGlmICh0ICYmIChudWxsID09PSAoZSA9IHQubm9kZSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5hY3RpdmVJbkhpZXJhcmNoeSkpIHtcbiAgICAgIGlmICh0aGlzLl9yYW5rTGlzdFZpZXcpIHtcbiAgICAgICAgdGhpcy5faXNDb2xsZWN0UGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1VwUmFua1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgbiA9IHRoaXMuX3JhbmtMaXN0Vmlldy5nZXRNeUluZGV4KCk7XG4gICAgICAgIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLnN5bmNNeVNjb3JlKCk7XG4gICAgICAgIHZhciBhID0gdGhpcy5kZWxlZ2F0ZS5tb2RlbC5sb2NhbERhdGEubXlSYW5rLFxuICAgICAgICAgIGkgPSBuICsgMSxcbiAgICAgICAgICByID0gdC5nZXRSYW5rKCkgPiB0aGlzLmRlbGVnYXRlLm1vZGVsLmxvY2FsRGF0YS5teVJhbms7XG4gICAgICAgIHQucGxheVVwTGV2ZWxFZmZlY3QociwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZChvLm5vZGUpICYmIG8uX2lzVXBSYW5rUGxheWluZyAmJiBvLl9yYW5rTGlzdFZpZXcgJiYgdCAmJiBjYy5pc1ZhbGlkKHQubm9kZSkgJiYgdC5ub2RlLmFjdGl2ZUluSGllcmFyY2h5ICYmIHIpIHtcbiAgICAgICAgICAgIG8ucGxheVVwTGV2ZWxFZmZlY3QodCwgaSwgYSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG8ucGxheUFsbEVmZmVjdEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgdGhpcy5wbGF5QWxsRWZmZWN0RW5kKCk7XG4gICAgfSBlbHNlIHRoaXMucGxheUFsbEVmZmVjdEVuZCgpO1xuICB9XG4gIHBsYXlVcExldmVsRWZmZWN0KHQsIGUsIG8pIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgdGhpcy5fcmFua0xpc3RWaWV3ICYmIGNjLmlzVmFsaWQodC5ub2RlKSAmJiB0aGlzLl9yYW5rTGlzdFZpZXcuc2Nyb2xsVG9SYW5rSWZOZWVkZWQobywgZmFsc2UsIHRydWUpLnRoZW4oZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmIChuLl9pc1VwUmFua1BsYXlpbmcgJiYgbi5fcmFua0xpc3RWaWV3ICYmIGNjLmlzVmFsaWQodC5ub2RlKSkgaWYgKGEpIG4uX3JhbmtMaXN0Vmlldy5tb3ZlSXRlbVRvUmFuayhlLCBvLCBmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAobi5faXNVcFJhbmtQbGF5aW5nICYmIG4uX3JhbmtMaXN0Vmlldykge1xuICAgICAgICAgIG1qLmF1ZGlvTWFuYWdlci5zdG9wRWZmZWN0KG4uX3VwUmFua0xvb3BBdWRpb0lkKTtcbiAgICAgICAgICBpZiAodCAmJiB0LmVuYWJsZWRJbkhpZXJhcmNoeSkge1xuICAgICAgICAgICAgdC5zaG93UmFua091dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNjLmlzVmFsaWQobi5ub2RlKSAmJiBuLnVwUmFua0VuZCh0Lm5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG4ucGxheUFsbEVmZmVjdEVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7ZWxzZSB7XG4gICAgICAgIG4uX3JhbmtMaXN0Vmlldy5leGNoYW5nZVJhbmtEYXRhKGUsIG8pO1xuICAgICAgICBuLnVwZGF0ZU15c2VsZkl0ZW0odCwgZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm9udXNWd191cFJrU2Nyb2xsXCIpXG4gIHVwUmFua1Njcm9sbCgpIHtcbiAgICB2YXIgdCA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLFxuICAgICAgZSA9IE1hdGgubWluKHQubG9jYWxEYXRhLm15UmFuayAtIDEsIDQ4KSxcbiAgICAgIG8gPSB0aGlzLl9yYW5rTGlzdFZpZXcuY29tcHV0ZVNjcm9sbFBhcmFtcyhlKSxcbiAgICAgIG4gPSBvLnRhcmdldE9mZnNldFksXG4gICAgICBhID0gby5zY3JvbGxUaW1lO1xuICAgIHRoaXMuX3JhbmtMaXN0Vmlldy5zY3JvbGxUb0luZGV4KGUsIG4sIGEpO1xuICAgIHJldHVybiB7XG4gICAgICB0b0luZGV4OiBlLFxuICAgICAgc2Nyb2xsVGltZTogYVxuICAgIH07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm9udXNWd19nZXRJdG1BbmlEbHlcIilcbiAgZ2V0SXRlbUFuaURlbGF5KCkge1xuICAgIHJldHVybiAwLjI7XG4gIH1cbiAgdXBkYXRlTXlzZWxmSXRlbSh0LCBlKSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodC5ub2RlKSAmJiB0aGlzLl9teXNlbGZSYW5rQm9udXNJdGVtICYmIGNjLmlzVmFsaWQodGhpcy5fbXlzZWxmUmFua0JvbnVzSXRlbS5ub2RlKSkge1xuICAgICAgdmFyIG4gPSB0Lm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyksXG4gICAgICAgIGEgPSB0Lm5vZGUuaGVpZ2h0O1xuICAgICAgdGhpcy5fbXlzZWxmUmFua0JvbnVzSXRlbS51cGRhdGVDZWxsKHQuZ2V0RGF0YSgpKTtcbiAgICAgIHZhciBpID0gdGhpcy5fbXlzZWxmUmFua0JvbnVzSXRlbS5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihuKTtcbiAgICAgIHRoaXMuX215c2VsZlJhbmtCb251c0l0ZW0ubm9kZS5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKDAsIGkueSArIGEgLyAyLCAwKTtcbiAgICAgIHRoaXMuX215c2VsZlJhbmtCb251c0l0ZW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdC5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgdC5nZXRDb250ZW50Tm9kZSgpLnNjYWxlID0gMDtcbiAgICAgIHRoaXMuX215c2VsZlJhbmtCb251c0l0ZW0ucGxheVVwTGV2ZWxMb29wRWZmZWN0KCk7XG4gICAgICB0aGlzLl91cFJhbmtMb29wQXVkaW9JZCA9IDA7XG4gICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFUmFua0F1ZGlvSUQuSXRlbU1vdmUsIHRydWUpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgby5fdXBSYW5rTG9vcEF1ZGlvSWQgPSB0O1xuICAgICAgfSk7XG4gICAgICB2YXIgciA9IHRoaXMuZGVsZWdhdGUubW9kZWwubG9jYWxEYXRhLm15UmFuayxcbiAgICAgICAgcyA9IHRoaXMudXBSYW5rU2Nyb2xsKCksXG4gICAgICAgIGwgPSAocy50b0luZGV4LCBzLnNjcm9sbFRpbWUpLFxuICAgICAgICBjID0gbCA+IDEgPyBsIC0gdGhpcy5nZXRJdGVtQW5pRGVsYXkoKSA6IGwsXG4gICAgICAgIGQgPSB0aGlzLl9yYW5rTGlzdFZpZXcuZ2V0UmFua1VwV29ybGRQb3MociksXG4gICAgICAgIHAgPSB0aGlzLl9teXNlbGZSYW5rQm9udXNJdGVtLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGQpLnksXG4gICAgICAgIHUgPSBNYXRoLmFicyh0aGlzLl9teXNlbGZSYW5rQm9udXNJdGVtLm5vZGUueSAtIHApIC8gYSAqIDAuMjtcbiAgICAgIHRoaXMuc3RhcnRTZWxmSXRlbUFuaShjLCBwLCB1LCByLCBlKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm9udXNWd19zdFNlbGZJdG1BbmlcIilcbiAgc3RhcnRTZWxmSXRlbUFuaSh0LCBlLCBvLCBuKSB7XG4gICAgdmFyIGEgPSB0aGlzO1xuICAgIHRoaXMuX215c2VsZlJhbmtCb251c0l0ZW0gJiYgY2MuaXNWYWxpZCh0aGlzLl9teXNlbGZSYW5rQm9udXNJdGVtLm5vZGUpICYmIGNjLnR3ZWVuKHRoaXMuX215c2VsZlJhbmtCb251c0l0ZW0ubm9kZSkuZGVsYXkodCkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICBhLm9uUmFua1VwU3RhcnQoKTtcbiAgICB9KS50byhvLCB7XG4gICAgICB5OiBlXG4gICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdDtcbiAgICAgIGEub25SYW5rVXBFbmQoKTtcbiAgICAgIGlmIChhLl9pc1VwUmFua1BsYXlpbmcgJiYgYS5fbXlzZWxmUmFua0JvbnVzSXRlbSAmJiAobnVsbCA9PT0gKHQgPSBhLl9teXNlbGZSYW5rQm9udXNJdGVtLm5vZGUpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuYWN0aXZlSW5IaWVyYXJjaHkpKSB7XG4gICAgICAgIG1qLmF1ZGlvTWFuYWdlci5zdG9wRWZmZWN0KGEuX3VwUmFua0xvb3BBdWRpb0lkKTtcbiAgICAgICAgYS5fbXlzZWxmUmFua0JvbnVzSXRlbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHZhciBlID0gYS5fcmFua0xpc3RWaWV3LmdldENlbGxCeUluZGV4KG4gLSAxKTtcbiAgICAgICAgY2MuaXNWYWxpZChlKSAmJiBlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICBhLl9teXNlbGZSYW5rQm9udXNJdGVtLnNob3dSYW5rT3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGEubm9kZSkgJiYgYS51cFJhbmtFbmQoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm9udXNWd19yYW5rVXBTdGFydFwiKVxuICBvblJhbmtVcFN0YXJ0KCkge31cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm9udXNWd19yYW5rVXBFbmRcIilcbiAgb25SYW5rVXBFbmQoKSB7fVxuICB1cFJhbmtFbmQodCkge1xuICAgIHZhciBlLCBvLCBuLCBhO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5fcmFua0xpc3RWaWV3KSB8fCB2b2lkIDAgPT09IGUgfHwgZS5hZGRTY29yZVNjcm9sbEVuZCgpO1xuICAgIGNjLmlzVmFsaWQodCkgJiYgKG51bGwgPT09IChvID0gdC5nZXRDb21wb25lbnQoUmFua0JvbnVzSXRlbSkpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLnVwZGF0ZUNvbnRlbnRPcGFjaXR5KCkpO1xuICAgIHRoaXMuX3VwUmFua0xvb3BBdWRpb0lkID0gbnVsbDtcbiAgICAobnVsbCA9PT0gKGEgPSBudWxsID09PSAobiA9IHRoaXMuX215c2VsZlJhbmtCb251c0l0ZW0pIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4ubm9kZSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5hY3RpdmVJbkhpZXJhcmNoeSkgJiYgKHRoaXMuX215c2VsZlJhbmtCb251c0l0ZW0ubm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgdGhpcy5wbGF5QWxsRWZmZWN0RW5kKCk7XG4gIH1cbiAgcGxheUFsbEVmZmVjdEVuZCgpIHtcbiAgICB0aGlzLl9pc0NvbGxlY3RQbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNVcFJhbmtQbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNBbmltUGxheWluZyA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlVG91Y2hTdGF0ZSh0cnVlLCBmYWxzZSk7XG4gIH1cbiAgY2hhbmdlVG91Y2hTdGF0ZSh0LCBlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fY2xvc2VCdG5Ob2RlKSkge1xuICAgICAgdmFyIG8gPSB0aGlzLl9jbG9zZUJ0bk5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICBvICYmIChvLmludGVyYWN0YWJsZSA9IHQpO1xuICAgIH1cbiAgICBjYy5pc1ZhbGlkKHRoaXMuX21hc2tCdG5Ob2RlKSAmJiAodGhpcy5fbWFza0J0bk5vZGUuYWN0aXZlID0gZSk7XG4gIH1cbiAgcGxheVJhbmtCb251c1NvdW5kKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVSYW5rQXVkaW9JRC5SYW5raW5nMSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm9udXNWd19jYW5jZWxBY3RzXCIpXG4gIGNhbmNlbEFjdGlvbnMoKSB7XG4gICAgdmFyIHQsIGUsIG8sIG4sIGEsIGksIHIsIHMsIGw7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLm5vZGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9tYXNrTm9kZSkgfHwgdm9pZCAwID09PSBlIHx8IGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICBudWxsID09PSAobyA9IHRoaXMuX3RpdGxlTm9kZSkgfHwgdm9pZCAwID09PSBvIHx8IG8uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICBudWxsID09PSAobiA9IHRoaXMuX3RpbWVOb2RlKSB8fCB2b2lkIDAgPT09IG4gfHwgbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgIG51bGwgPT09IChhID0gdGhpcy5fdGl0bGUyTm9kZSkgfHwgdm9pZCAwID09PSBhIHx8IGEuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICBudWxsID09PSAoaSA9IHRoaXMuX2Nsb3NlQnRuTm9kZSkgfHwgdm9pZCAwID09PSBpIHx8IGkuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICBudWxsID09PSAociA9IHRoaXMuX3JhbmtMaXN0VmlldykgfHwgdm9pZCAwID09PSByIHx8IHIuY2FuY2VsQWN0aW9ucygpO1xuICAgIG51bGwgPT09IChzID0gdGhpcy5fd2luUmF0ZVZpZXcpIHx8IHZvaWQgMCA9PT0gcyB8fCBzLmNhbmNlbEFjdGlvbnMoKTtcbiAgICB0aGlzLl9teXNlbGZSYW5rQm9udXNJdGVtICYmIChudWxsID09PSAobCA9IHRoaXMuX215c2VsZlJhbmtCb251c0l0ZW0ubm9kZSkgfHwgdm9pZCAwID09PSBsID8gdm9pZCAwIDogbC5hY3RpdmVJbkhpZXJhcmNoeSkgJiYgdGhpcy5fbXlzZWxmUmFua0JvbnVzSXRlbS5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnN0b3BFZmZlY3QodGhpcy5fdXBSYW5rTG9vcEF1ZGlvSWQpO1xuICAgIHRoaXMuX2lzQW5pbVBsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9pc0NvbGxlY3RQbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5faXNVcFJhbmtQbGF5aW5nID0gZmFsc2U7XG4gIH1cbiAgb25DbG9zZUNsaWNrKCkge1xuICAgIHZhciB0O1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RSYW5rKEVSYW5rQ2xpY2tUeXBlLkNsaWNrUmFua0JvbnVzQ29udGludWUsIEdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0TGV2ZWxJZCgpKTtcbiAgICB0aGlzLmNhbmNlbEFjdGlvbnMoKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuZGVsZWdhdGUpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmNsb3NlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rQm9udXNWd19kZXN0cm95XCIpXG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJSYW5rQm9udXNWd19kZXN0cm95XCIpO1xuICAgIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLnN5bmNNeVNjb3JlKCk7XG4gICAgdGhpcy5fbXlzZWxmUmFua0JvbnVzSXRlbSA9IG51bGw7XG4gICAgbWoudHJpZ2dlckludGVybmFsRXZlbnQoXCJCYW5uZXJBZF9OZWVkU2hvd0Jhbm5lclwiLCB0aGlzLCBbXSk7XG4gIH1cbn0iXX0=