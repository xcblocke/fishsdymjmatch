
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/util/RankView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef8dbhU1qBDJKuY2EMXp2oZ', 'RankView');
// subpackages/l_rank/Scripts/util/RankView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var RankListView_1 = require("../RankListView");
var RankModel_1 = require("../RankModel");
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var CountdownComponent_1 = require("../component/CountdownComponent");
var BoxTips_1 = require("../BoxTips");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var UserInfoManager_1 = require("../../../../Scripts/gamePlay/base/user/UserInfoManager");
var DGameBtnClick_1 = require("../../../../Scripts/dot/DGameBtnClick");
var Config_1 = require("../../../../Scripts/Config");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var DGamePageShow_1 = require("../../../../Scripts/dot/DGamePageShow");
var RankEnums_1 = require("./RankEnums");
var RankBoxBtn_1 = require("../RankBoxBtn");
var CardUtil_1 = require("../../../../Scripts/gamePlay/user/CardUtil");
var C = {
    data: [{
            rankNum: 1,
            prefabPath: "prefabs/rank/buttons/Rank1BoxBtn",
            position: cc.v2(0, 210)
        }, {
            rankNum: 2,
            prefabPath: "prefabs/rank/buttons/Rank2BoxBtn",
            position: cc.v2(0, 185)
        }, {
            rankNum: 3,
            prefabPath: "prefabs/rank/buttons/Rank3BoxBtn",
            position: cc.v2(0, 188)
        }]
};
var RankView = /** @class */ (function (_super) {
    __extends(RankView, _super);
    function RankView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contentNode = null;
        _this._topAdaptNode = null;
        _this._bottomAdaptNode = null;
        _this._maskNode = null;
        _this._rankListView = null;
        _this._scrollView = null;
        _this._scViewCntNode = null;
        _this._goBtnNode = null;
        _this._backBtnNode = null;
        _this._tipsBtnNode = null;
        _this._rankTitleNode = null;
        _this._rankTimeNode = null;
        _this._btnLabelNode = null;
        _this._flagSkeleton = null;
        _this._rank123RootNode = null;
        _this._rankBlockNode = null;
        _this._boxTipsNode = null;
        _this._upBgNode = null;
        _this._downBgNode = null;
        _this._isOldData = false;
        _this.curFont = null;
        _this._boxBtnNodeArray = [];
        _this._scrollTimer = -1;
        return _this;
    }
    RankView.prototype.getContentNode = function () {
        return this._contentNode;
    };
    RankView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._contentNode = this.node.getChildByName("content");
        this._topAdaptNode = this.node.getChildByName("top_adapt");
        this._bottomAdaptNode = this.node.getChildByName("bottom_adapt");
        this._maskNode = this.node.getChildByName("bg");
        this._scrollView = this._contentNode.getChildByName("scrollView").getComponent(cc.ScrollView);
        this._scViewCntNode = cc.find("scrollView/view/content", this._contentNode);
        this._goBtnNode = this._bottomAdaptNode.getChildByName("btn_next");
        this._downBgNode = this._bottomAdaptNode.getChildByName("journey_bg_dn");
        this._btnLabelNode = this._goBtnNode.getChildByName("content").getChildByName("text");
        this._backBtnNode = this._topAdaptNode.getChildByName("btn_back");
        this._tipsBtnNode = this._topAdaptNode.getChildByName("btn_tips");
        this._rankTitleNode = this._topAdaptNode.getChildByName("title");
        this._rankTimeNode = this._topAdaptNode.getChildByName("bg").getChildByName("time");
        this._flagSkeleton = this._topAdaptNode.getChildByName("in_ani").getComponent(sp.Skeleton);
        this._rank123RootNode = this._topAdaptNode.getChildByName("123");
        this._upBgNode = this._topAdaptNode.getChildByName("gameplay_bg_up");
        this._rankBlockNode = this.node.getChildByName("block");
        this.OnButtonClick(this._goBtnNode, this.onBtnGoClick.bind(this));
        this.OnButtonClick(this._backBtnNode, this.onBtnBackClick.bind(this));
        this.OnButtonClick(this._tipsBtnNode, this.onBtnTipsClick.bind(this));
        this.addBoxBtns();
        this.curFont = this._rankTitleNode.getComponent(cc.Label).font;
    };
    RankView.prototype.onRefreshSelf = function () {
        for (var t = RankModel_1.default.getInstance(), e = this.getRankList(), o = Math.min(e.length, 3), n = 0; n < o; n++)
            if (this.delegate.model.isMySelf(e[n].id)) {
                var a = this._rank123RootNode.getChildByName(String(n + 1)), i = a.getChildByName("head"), r = i.children[0].getComponent(cc.Sprite), s = i.children[1].getComponent(cc.Sprite), c = t.getRankAvatarAndFrame(e[n], true), d = c.avatarId, p = c.frameId;
                this.updateAvatarAndFrame(r, s, d, p);
                var u = a.getChildByName("name").getComponent(cc.Label);
                u.string = t.getRankName(e[n], true);
                var f = UserModel_1.default.getInstance().getUserName(), m = UserInfoManager_1.default.getInstance().isKoreanName(f), y = UserInfoManager_1.default.getInstance().isRussianName(f);
                if (m || y) {
                    u.useSystemFont = true;
                    u.font = null;
                }
                else {
                    u.useSystemFont = false;
                    u.font = this.curFont;
                }
                break;
            }
    };
    RankView.prototype.show = function (t) {
        var e;
        this._isOldData = null !== (e = t.isOldData) && void 0 !== e && e;
        mj.audioManager.playEffect(RankEnums_1.ERankAudioID.Ranking2);
        DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LeaderBoard);
        this.showContent();
    };
    RankView.prototype.showContent = function () {
        this.getRankList();
        this.updateLabels();
        this.updateCountdown();
        this.initRank123();
        this.playEnterAnimation();
    };
    RankView.prototype.getCurBoardData = function () {
        return RankModel_1.default.getInstance().getCurBoardData();
    };
    RankView.prototype.updateLabels = function () {
        var t = this.getCurBoardData();
        if (t) {
            I18NStrings_1.default.setText(this._rankTitleNode, "Gardening Master", t.Name);
            I18NStrings_1.default.setText(this._btnLabelNode, "Let's go", "LeaderBoard_Start_Btn_Jump");
        }
    };
    RankView.prototype.produceList = function () {
        this.initRankListView();
        this.refreshList();
        this.moveListOutOfScreen();
    };
    RankView.prototype.getCDComp = function () {
        var t;
        return null === (t = this._rankTimeNode) || void 0 === t ? void 0 : t.getComponent(CountdownComponent_1.default);
    };
    RankView.prototype.getLeftTime = function () {
        return RankModel_1.default.getInstance().getLeftTime();
    };
    RankView.prototype.updateCountdown = function () {
        var t = this._rankTimeNode.getComponent(CountdownComponent_1.default), e = this.getLeftTime();
        if (e > 0) {
            t.setRemainTime(e, this.finishCountdown.bind(this));
        }
        else {
            this.closeOutCD();
        }
    };
    RankView.prototype.setTimeString = function (t) {
        if (t === void 0) { t = 0; }
        this._rankTimeNode.getComponent(CountdownComponent_1.default).setRemainTime(t);
    };
    RankView.prototype.closeOutCD = function () {
        this.removeRankBoxTips();
        this.delegate.close();
    };
    RankView.prototype.finishCountdown = function () {
        this.removeRankBoxTips();
        this.delegate.close();
    };
    RankView.prototype.playEnterAnimation = function () {
        cc.tween(this.node).delay(0.05).call(this.produceList.bind(this)).delay(0.08).call(this.playFlagAnimation.bind(this)).call(this.playAvatarAndName.bind(this, this._rank123RootNode.getChildByName("1"))).call(this.playList.bind(this)).delay(0.07).call(this.playAvatarAndName.bind(this, this._rank123RootNode.getChildByName("2"))).delay(0.07).call(this.playAvatarAndName.bind(this, this._rank123RootNode.getChildByName("3"))).delay(0.03).call(this.playSpecialCard.bind(this, this._rank123RootNode.getChildByName("1"))).delay(0.01).call(this.playSpecialCard.bind(this, this._rank123RootNode.getChildByName("3"))).delay(0.06).call(this.playSpecialCard.bind(this, this._rank123RootNode.getChildByName("2"))).delay(0.36).call(this.playHighlight.bind(this)).call(this.playListScroll.bind(this)).start();
    };
    RankView.prototype.playAvatarAndName = function (t) {
        var e = t.getChildByName("head"), o = t.getChildByName("name");
        e.active = true;
        e.setScale(0.4, 0.4);
        o.active = true;
        o.opacity = 0;
        cc.tween(e).to(0.2, {
            scale: 1
        }).start();
        cc.tween(o).to(0.2, {
            opacity: 255
        }).start();
    };
    RankView.prototype.playSpecialCard = function (t) {
        var e = t.getChildByName("bg");
        e.opacity = 255;
        e.setScale(0.6, 0.6);
        cc.tween(e).to(0.2, {
            scale: 1
        }).start();
    };
    RankView.prototype.getSelfRank = function () {
        return RankModel_1.default.getInstance().getSelfRank();
    };
    RankView.prototype.playHighlight = function () {
        var t = this.getSelfRank(), e = this._rank123RootNode.getChildByName(String(t));
        if (e) {
            var o = e.getChildByName("lightNode");
            o.active = true;
            var n = o.getChildByName("light");
            cc.tween(n).to(0.1, {
                opacity: 255
            }).to(0.13, {
                opacity: 178.5
            }).to(0.1, {
                opacity: 255
            }).start();
        }
    };
    RankView.prototype.hideHightlight = function () {
        if (cc.isValid(this._rank123RootNode))
            for (var t = 0; t < 3; t++) {
                var e = this._rank123RootNode.getChildByName(String(t + 1)).getChildByName("lightNode");
                e.active = false;
                e.getChildByName("light").opacity = 0;
            }
    };
    RankView.prototype.playList = function () {
        var t = 0;
        this._scViewCntNode.children.forEach(function (e) {
            cc.tween(e).delay(t).to(0.2, {
                x: -17
            }).to(0.02, {
                x: 0
            }, {
                easing: "smooth"
            }).start();
            t += 0.03;
        });
    };
    RankView.prototype.getRankList = function () {
        return this.delegate.model.getRankList(true) || [];
    };
    RankView.prototype.playListScroll = function () {
        var t = this, e = 0, o = this.getRankList();
        o = o.length > 3 ? o.slice(3) : [];
        for (var n = 0; n < o.length; n++) {
            var a = o[n];
            if (RankModel_1.default.getInstance().isMySelf(a.id)) {
                e = n;
                break;
            }
        }
        var i = 0.08 * e;
        this._rankListView._tableView.scrollToIndex(e, i);
        if (-1 !== this._scrollTimer) {
            clearTimeout(this._scrollTimer);
            this._scrollTimer = -1;
        }
        this._scrollTimer = setTimeout(function () {
            t._rankBlockNode.active = false;
        }, 1000 * i);
    };
    RankView.prototype.playFlagAnimation = function () {
        this._flagSkeleton.node.active = true;
        this._flagSkeleton.setAnimation(0, "in", false);
    };
    RankView.prototype.refreshList = function () {
        var t = this.getRankList();
        t = t.length > 3 ? t.slice(3) : [];
        this._rankListView.setDelegate(this.delegate);
        this._rankListView.refreshList(t);
    };
    RankView.prototype.moveListOutOfScreen = function () {
        var t = cc.winSize.width;
        this._scViewCntNode.children.forEach(function (e) {
            e.setPosition(t, e.position.y);
        });
    };
    RankView.prototype.getBoxTipsOffset = function () {
        return cc.v2(0, 50);
    };
    RankView.prototype.getBoxTipsParent = function () {
        return cc.Canvas.instance.node;
    };
    RankView.prototype.addRankBoxTips = function (t, e, o) {
        if (o === void 0) { o = this.getBoxTipsOffset(); }
        var n = this;
        BoxTips_1.default.createUI().then(function (a) {
            if (cc.isValid(t)) {
                var i = n.getBoxTipsParent(), r = t.convertToWorldSpaceAR(cc.Vec2.ZERO), s = i.convertToNodeSpaceAR(r);
                a.parent = i;
                a.setPosition(s.x + o.x, s.y + o.y);
                a.getComponent(BoxTips_1.default).initBoxReward(e);
                a.getComponent(BoxTips_1.default).playIn();
                n._boxTipsNode = a;
            }
        }).catch(function (t) {
            console.error("[RankView] 游戏内创建宝箱提示动画失败:" + ((null == t ? void 0 : t.message) || "BoxTips加载失败"));
        });
    };
    RankView.prototype.removeRankBoxTips = function () {
        var t;
        cc.isValid(this._boxTipsNode) && (null === (t = this._boxTipsNode.getComponent(BoxTips_1.default)) || void 0 === t || t.playOut());
    };
    RankView.prototype.getMessageListeners = function () {
        var _t = {};
        _t.msg_addRankBoxTips = this.addRankBoxTips.bind(this);
        _t.msg_removeRankBoxTips = this.removeRankBoxTips.bind(this);
        _t.closeRankView = this.closeSelf.bind(this);
        _t[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        _t.msg_rankRefreshSelf = this.onRefreshSelf.bind(this);
        return _t;
    };
    RankView.prototype.onGameShow = function () {
        this.updateCountdown();
    };
    RankView.prototype.onGameHide = function () { };
    RankView.prototype.onBtnGoClick = function () {
        this.delegate.jump();
        var t = UserModel_1.default.getInstance().getCurrentGameData();
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickRankViewStart, t.getLevelId());
    };
    RankView.prototype.onBtnBackClick = function () {
        this.closeSelf();
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickRankViewBack);
        DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.LeaderBoardToMainPage);
    };
    RankView.prototype.closeSelf = function () {
        this.delegate.close();
    };
    RankView.prototype.onBtnTipsClick = function () {
        this.delegate.showTips();
        DGameBtnClick_1.DotGameBtnClick.dotRank(DGameBtnClick_1.ERankClickType.ClickRankViewTips);
    };
    RankView.prototype.initRank123 = function () {
        this.hideHightlight();
        for (var t = RankModel_1.default.getInstance(), e = this.getRankList(), o = Math.min(e.length, 3), n = 0; n < o; n++) {
            var a = this._rank123RootNode.getChildByName(String(n + 1)), i = a.getChildByName("head"), r = i.children[0].getComponent(cc.Sprite), s = i.children[1].getComponent(cc.Sprite), c = this.delegate.model.isMySelf(e[n].id), d = t.getRankAvatarAndFrame(e[n], c), p = d.avatarId, f = d.frameId;
            this.updateAvatarAndFrame(r, s, p, f);
            var m = a.getChildByName("name").getComponent(cc.Label);
            m.string = t.getRankName(e[n], c);
            var y = a.getChildByName("bg");
            y.getChildByName("count").getComponent(cc.Label).string = e[n].score + "";
            this.updateImgCard(y.getChildByName("card"));
            var g = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2"), v = g.path, C = g.bundleName, R = g.fromAtlas;
            BaseSprite_1.default.refreshWithNode(y.getChildByName("gameplay_special_mj_2"), v, R, false, C);
            var b = UserModel_1.default.getInstance().getUserName(), w = UserInfoManager_1.default.getInstance().isKoreanName(b), B = UserInfoManager_1.default.getInstance().isRussianName(b);
            if (c && (w || B)) {
                m.useSystemFont = true;
                m.font = null;
            }
            else {
                m.useSystemFont = false;
                m.font = this.curFont;
            }
        }
    };
    RankView.prototype.updateAvatarAndFrame = function (t, e, o, n) {
        UserInfoManager_1.default.getInstance().setupUserAvatar(this.delegate, t, e, {
            avatarId: o,
            frameId: n
        });
    };
    RankView.prototype.updateImgCard = function (t) {
        var e = UserModel_1.default.getInstance().getRankCardResName(), o = CardUtil_1.default.getAtlasPathAndBundleName(e), n = o.path, a = o.bundleName, i = o.fromAtlas;
        BaseSprite_1.default.refreshWithNode(t, n, i, false, a);
    };
    RankView.prototype.addBoxBtns = function () {
        for (var t = this, e = function e(e) {
            var o = C.data[e];
            RankBoxBtn_1.default.createUI(o.prefabPath).then(function (e) {
                if (cc.isValid(t._rank123RootNode)) {
                    t._boxBtnNodeArray.push(e);
                    e.parent = t._rank123RootNode.getChildByName(String(o.rankNum));
                    e.setPosition(o.position);
                    e.getComponent(RankBoxBtn_1.default).setRankNum(o.rankNum);
                    t.playBoxAni(e, o.rankNum);
                }
            }).catch(function (t) {
                console.error("[RankView] 游戏内创建宝箱按钮失败:" + ((null == t ? void 0 : t.message) || "RankBoxBtn加载失败"));
            });
        }, o = 0; o < C.data.length; o++)
            e(o);
    };
    RankView.prototype.playBoxAni = function (t) {
        t.scale = 0;
        cc.tween(t).delay(0.1).to(0.2, {
            scale: 1
        }).start();
    };
    RankView.prototype.initRankListView = function () {
        this.adapt();
        this._rankListView = this._scrollView.getComponent(RankListView_1.default);
        cc.isValid(this._rankListView) || (this._rankListView = this._scrollView.addComponent(RankListView_1.default));
    };
    RankView.prototype.adapt = function () {
        var t = cc.sys.getSafeAreaRect(), e = (cc.Canvas.instance.designResolution.height, t.height, this._scrollView.node.getContentSize()), o = cc.find("bg2/leaderboard_bg_2", this._topAdaptNode), n = cc.find("journey_bg_dn", this._bottomAdaptNode), a = o.convertToWorldSpaceAR(cc.v2(0, -40)), i = n.convertToWorldSpaceAR(cc.v2(0, -20)), r = cc.v2((a.x + i.x) / 2, (a.y + i.y) / 2), s = this._contentNode.convertToNodeSpaceAR(r), l = Math.abs(a.y - i.y);
        this._scrollView.node.setPosition(s.x, s.y);
        this._scrollView.node.setContentSize(e.width, l);
        this._scrollView.node.getChildByName("view").setContentSize(e.width, l);
    };
    RankView.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        if (-1 !== this._scrollTimer) {
            clearTimeout(this._scrollTimer);
            this._scrollTimer = -1;
        }
        this.removeRankBoxTips();
    };
    RankView.prefabUrl = "prefabs/rank/RankView";
    __decorate([
        mj.traitEvent("RankVw_onLoad")
    ], RankView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("RankVw_show")
    ], RankView.prototype, "show", null);
    __decorate([
        mj.traitEvent("RankVw_getBoardData")
    ], RankView.prototype, "getCurBoardData", null);
    __decorate([
        mj.traitEvent("RankVw_updateLabels")
    ], RankView.prototype, "updateLabels", null);
    __decorate([
        mj.traitEvent("RankVw_getLeftTime")
    ], RankView.prototype, "getLeftTime", null);
    __decorate([
        mj.traitEvent("RankVw_closeOutCD")
    ], RankView.prototype, "closeOutCD", null);
    __decorate([
        mj.traitEvent("RankVw_finishCD")
    ], RankView.prototype, "finishCountdown", null);
    __decorate([
        mj.traitEvent("RankVw_getSelfRank")
    ], RankView.prototype, "getSelfRank", null);
    __decorate([
        mj.traitEvent("RankVw_getRankList")
    ], RankView.prototype, "getRankList", null);
    __decorate([
        mj.traitEvent("RankVw_listScroll")
    ], RankView.prototype, "playListScroll", null);
    __decorate([
        mj.traitEvent("RankVw_getTipsOffset")
    ], RankView.prototype, "getBoxTipsOffset", null);
    __decorate([
        mj.traitEvent("RankVw_getTipsParent")
    ], RankView.prototype, "getBoxTipsParent", null);
    __decorate([
        mj.traitEvent("RankVw_onBtnGoClick")
    ], RankView.prototype, "onBtnGoClick", null);
    __decorate([
        mj.traitEvent("RankVw_updAvatarFrame")
    ], RankView.prototype, "updateAvatarAndFrame", null);
    __decorate([
        mj.traitEvent("RankVw_updImgCard")
    ], RankView.prototype, "updateImgCard", null);
    __decorate([
        mj.traitEvent("RankVw_addBoxBtns")
    ], RankView.prototype, "addBoxBtns", null);
    __decorate([
        mj.traitEvent("RankVw_destroy")
    ], RankView.prototype, "onDestroy", null);
    RankView = __decorate([
        mj.class
    ], RankView);
    return RankView;
}(UIView_1.default));
exports.default = RankView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy91dGlsL1JhbmtWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0QsZ0RBQTJDO0FBQzNDLDBDQUFxQztBQUNyQyw4RUFBeUU7QUFDekUsc0VBQWlFO0FBQ2pFLHNDQUFpQztBQUNqQyw4RUFBeUU7QUFDekUsMEZBQXFGO0FBQ3JGLHVFQUF3RjtBQUN4RixxREFBNEY7QUFDNUYseUVBQW9FO0FBQ3BFLHVFQUF1RjtBQUN2Rix5Q0FBMkM7QUFDM0MsNENBQXVDO0FBQ3ZDLHVFQUFrRTtBQUNsRSxJQUFJLENBQUMsR0FBRztJQUNOLElBQUksRUFBRSxDQUFDO1lBQ0wsT0FBTyxFQUFFLENBQUM7WUFDVixVQUFVLEVBQUUsa0NBQWtDO1lBQzlDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7U0FDeEIsRUFBRTtZQUNELE9BQU8sRUFBRSxDQUFDO1lBQ1YsVUFBVSxFQUFFLGtDQUFrQztZQUM5QyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1NBQ3hCLEVBQUU7WUFDRCxPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsRUFBRSxrQ0FBa0M7WUFDOUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztTQUN4QixDQUFDO0NBQ0gsQ0FBQztBQUVGO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBMlpDO1FBMVpDLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG9CQUFjLEdB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QUMsb0JBQW9CLENBQUM7K0NBR25DO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO2tEQXNCbEM7SUFrQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO29EQUdyQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQztvREFHckM7SUFxQ0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2dEQUtwQztJQWdERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7d0RBTXRDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO2lEQVFsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzs4Q0FnQmxDO0lBMkJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQzs2Q0FRL0I7SUExWmtCLFFBQVE7UUFENUIsRUFBRSxDQUFDLEtBQUs7T0FDWSxRQUFRLENBMlo1QjtJQUFELGVBQUM7Q0EzWkQsQUEyWkMsQ0EzWnFDLGdCQUFNLEdBMlozQztrQkEzWm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgUmFua0xpc3RWaWV3IGZyb20gJy4uL1JhbmtMaXN0Vmlldyc7XG5pbXBvcnQgUmFua01vZGVsIGZyb20gJy4uL1JhbmtNb2RlbCc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgQ291bnRkb3duQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC9Db3VudGRvd25Db21wb25lbnQnO1xuaW1wb3J0IEJveFRpcHMgZnJvbSAnLi4vQm94VGlwcyc7XG5pbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgVXNlckluZm9NYW5hZ2VyIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91c2VyL1VzZXJJbmZvTWFuYWdlcic7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVSYW5rQ2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5pbXBvcnQgeyBFVlRfTVNHX0tFWV9FVkVOVF9TSE9XLCBFVlRfTVNHX0tFWV9FVkVOVF9ISURFIH0gZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9Db25maWcnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IERvdEdhbWVQYWdlU2hvdywgRVBhZ2VTaG93VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lUGFnZVNob3cnO1xuaW1wb3J0IHsgRVJhbmtBdWRpb0lEIH0gZnJvbSAnLi9SYW5rRW51bXMnO1xuaW1wb3J0IFJhbmtCb3hCdG4gZnJvbSAnLi4vUmFua0JveEJ0bic7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbnZhciBDID0ge1xuICBkYXRhOiBbe1xuICAgIHJhbmtOdW06IDEsXG4gICAgcHJlZmFiUGF0aDogXCJwcmVmYWJzL3JhbmsvYnV0dG9ucy9SYW5rMUJveEJ0blwiLFxuICAgIHBvc2l0aW9uOiBjYy52MigwLCAyMTApXG4gIH0sIHtcbiAgICByYW5rTnVtOiAyLFxuICAgIHByZWZhYlBhdGg6IFwicHJlZmFicy9yYW5rL2J1dHRvbnMvUmFuazJCb3hCdG5cIixcbiAgICBwb3NpdGlvbjogY2MudjIoMCwgMTg1KVxuICB9LCB7XG4gICAgcmFua051bTogMyxcbiAgICBwcmVmYWJQYXRoOiBcInByZWZhYnMvcmFuay9idXR0b25zL1JhbmszQm94QnRuXCIsXG4gICAgcG9zaXRpb246IGNjLnYyKDAsIDE4OClcbiAgfV1cbn07XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgX2NvbnRlbnROb2RlID0gbnVsbDtcbiAgX3RvcEFkYXB0Tm9kZSA9IG51bGw7XG4gIF9ib3R0b21BZGFwdE5vZGUgPSBudWxsO1xuICBfbWFza05vZGUgPSBudWxsO1xuICBfcmFua0xpc3RWaWV3ID0gbnVsbDtcbiAgX3Njcm9sbFZpZXcgPSBudWxsO1xuICBfc2NWaWV3Q250Tm9kZSA9IG51bGw7XG4gIF9nb0J0bk5vZGUgPSBudWxsO1xuICBfYmFja0J0bk5vZGUgPSBudWxsO1xuICBfdGlwc0J0bk5vZGUgPSBudWxsO1xuICBfcmFua1RpdGxlTm9kZSA9IG51bGw7XG4gIF9yYW5rVGltZU5vZGUgPSBudWxsO1xuICBfYnRuTGFiZWxOb2RlID0gbnVsbDtcbiAgX2ZsYWdTa2VsZXRvbiA9IG51bGw7XG4gIF9yYW5rMTIzUm9vdE5vZGUgPSBudWxsO1xuICBfcmFua0Jsb2NrTm9kZSA9IG51bGw7XG4gIF9ib3hUaXBzTm9kZSA9IG51bGw7XG4gIF91cEJnTm9kZSA9IG51bGw7XG4gIF9kb3duQmdOb2RlID0gbnVsbDtcbiAgX2lzT2xkRGF0YSA9IGZhbHNlO1xuICBjdXJGb250ID0gbnVsbDtcbiAgX2JveEJ0bk5vZGVBcnJheSA9IFtdO1xuICBfc2Nyb2xsVGltZXIgPSAtMTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9yYW5rL1JhbmtWaWV3XCI7XG4gIGdldENvbnRlbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50Tm9kZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtWd19vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbnRlbnROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcbiAgICB0aGlzLl90b3BBZGFwdE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BfYWRhcHRcIik7XG4gICAgdGhpcy5fYm90dG9tQWRhcHROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm90dG9tX2FkYXB0XCIpO1xuICAgIHRoaXMuX21hc2tOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XG4gICAgdGhpcy5fc2Nyb2xsVmlldyA9IHRoaXMuX2NvbnRlbnROb2RlLmdldENoaWxkQnlOYW1lKFwic2Nyb2xsVmlld1wiKS5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XG4gICAgdGhpcy5fc2NWaWV3Q250Tm9kZSA9IGNjLmZpbmQoXCJzY3JvbGxWaWV3L3ZpZXcvY29udGVudFwiLCB0aGlzLl9jb250ZW50Tm9kZSk7XG4gICAgdGhpcy5fZ29CdG5Ob2RlID0gdGhpcy5fYm90dG9tQWRhcHROb2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX25leHRcIik7XG4gICAgdGhpcy5fZG93bkJnTm9kZSA9IHRoaXMuX2JvdHRvbUFkYXB0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImpvdXJuZXlfYmdfZG5cIik7XG4gICAgdGhpcy5fYnRuTGFiZWxOb2RlID0gdGhpcy5fZ29CdG5Ob2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKS5nZXRDaGlsZEJ5TmFtZShcInRleHRcIik7XG4gICAgdGhpcy5fYmFja0J0bk5vZGUgPSB0aGlzLl90b3BBZGFwdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fYmFja1wiKTtcbiAgICB0aGlzLl90aXBzQnRuTm9kZSA9IHRoaXMuX3RvcEFkYXB0Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl90aXBzXCIpO1xuICAgIHRoaXMuX3JhbmtUaXRsZU5vZGUgPSB0aGlzLl90b3BBZGFwdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKTtcbiAgICB0aGlzLl9yYW5rVGltZU5vZGUgPSB0aGlzLl90b3BBZGFwdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcInRpbWVcIik7XG4gICAgdGhpcy5fZmxhZ1NrZWxldG9uID0gdGhpcy5fdG9wQWRhcHROb2RlLmdldENoaWxkQnlOYW1lKFwiaW5fYW5pXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgdGhpcy5fcmFuazEyM1Jvb3ROb2RlID0gdGhpcy5fdG9wQWRhcHROb2RlLmdldENoaWxkQnlOYW1lKFwiMTIzXCIpO1xuICAgIHRoaXMuX3VwQmdOb2RlID0gdGhpcy5fdG9wQWRhcHROb2RlLmdldENoaWxkQnlOYW1lKFwiZ2FtZXBsYXlfYmdfdXBcIik7XG4gICAgdGhpcy5fcmFua0Jsb2NrTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJsb2NrXCIpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9nb0J0bk5vZGUsIHRoaXMub25CdG5Hb0NsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9iYWNrQnRuTm9kZSwgdGhpcy5vbkJ0bkJhY2tDbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fdGlwc0J0bk5vZGUsIHRoaXMub25CdG5UaXBzQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRCb3hCdG5zKCk7XG4gICAgdGhpcy5jdXJGb250ID0gdGhpcy5fcmFua1RpdGxlTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQ7XG4gIH1cbiAgb25SZWZyZXNoU2VsZigpIHtcbiAgICBmb3IgKHZhciB0ID0gUmFua01vZGVsLmdldEluc3RhbmNlKCksIGUgPSB0aGlzLmdldFJhbmtMaXN0KCksIG8gPSBNYXRoLm1pbihlLmxlbmd0aCwgMyksIG4gPSAwOyBuIDwgbzsgbisrKSBpZiAodGhpcy5kZWxlZ2F0ZS5tb2RlbC5pc015U2VsZihlW25dLmlkKSkge1xuICAgICAgdmFyIGEgPSB0aGlzLl9yYW5rMTIzUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoU3RyaW5nKG4gKyAxKSksXG4gICAgICAgIGkgPSBhLmdldENoaWxkQnlOYW1lKFwiaGVhZFwiKSxcbiAgICAgICAgciA9IGkuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksXG4gICAgICAgIHMgPSBpLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLFxuICAgICAgICBjID0gdC5nZXRSYW5rQXZhdGFyQW5kRnJhbWUoZVtuXSwgdHJ1ZSksXG4gICAgICAgIGQgPSBjLmF2YXRhcklkLFxuICAgICAgICBwID0gYy5mcmFtZUlkO1xuICAgICAgdGhpcy51cGRhdGVBdmF0YXJBbmRGcmFtZShyLCBzLCBkLCBwKTtcbiAgICAgIHZhciB1ID0gYS5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgIHUuc3RyaW5nID0gdC5nZXRSYW5rTmFtZShlW25dLCB0cnVlKTtcbiAgICAgIHZhciBmID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0VXNlck5hbWUoKSxcbiAgICAgICAgbSA9IFVzZXJJbmZvTWFuYWdlci5nZXRJbnN0YW5jZSgpLmlzS29yZWFuTmFtZShmKSxcbiAgICAgICAgeSA9IFVzZXJJbmZvTWFuYWdlci5nZXRJbnN0YW5jZSgpLmlzUnVzc2lhbk5hbWUoZik7XG4gICAgICBpZiAobSB8fCB5KSB7XG4gICAgICAgIHUudXNlU3lzdGVtRm9udCA9IHRydWU7XG4gICAgICAgIHUuZm9udCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1LnVzZVN5c3RlbUZvbnQgPSBmYWxzZTtcbiAgICAgICAgdS5mb250ID0gdGhpcy5jdXJGb250O1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1Z3X3Nob3dcIilcbiAgc2hvdyh0KSB7XG4gICAgdmFyIGU7XG4gICAgdGhpcy5faXNPbGREYXRhID0gbnVsbCAhPT0gKGUgPSB0LmlzT2xkRGF0YSkgJiYgdm9pZCAwICE9PSBlICYmIGU7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRVJhbmtBdWRpb0lELlJhbmtpbmcyKTtcbiAgICBEb3RHYW1lUGFnZVNob3cuZG90KEVQYWdlU2hvd1R5cGUuTGVhZGVyQm9hcmQpO1xuICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgfVxuICBzaG93Q29udGVudCgpIHtcbiAgICB0aGlzLmdldFJhbmtMaXN0KCk7XG4gICAgdGhpcy51cGRhdGVMYWJlbHMoKTtcbiAgICB0aGlzLnVwZGF0ZUNvdW50ZG93bigpO1xuICAgIHRoaXMuaW5pdFJhbmsxMjMoKTtcbiAgICB0aGlzLnBsYXlFbnRlckFuaW1hdGlvbigpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1Z3X2dldEJvYXJkRGF0YVwiKVxuICBnZXRDdXJCb2FyZERhdGEoKSB7XG4gICAgcmV0dXJuIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1ckJvYXJkRGF0YSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1Z3X3VwZGF0ZUxhYmVsc1wiKVxuICB1cGRhdGVMYWJlbHMoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEN1ckJvYXJkRGF0YSgpO1xuICAgIGlmICh0KSB7XG4gICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMuX3JhbmtUaXRsZU5vZGUsIFwiR2FyZGVuaW5nIE1hc3RlclwiLCB0Lk5hbWUpO1xuICAgICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLl9idG5MYWJlbE5vZGUsIFwiTGV0J3MgZ29cIiwgXCJMZWFkZXJCb2FyZF9TdGFydF9CdG5fSnVtcFwiKTtcbiAgICB9XG4gIH1cbiAgcHJvZHVjZUxpc3QoKSB7XG4gICAgdGhpcy5pbml0UmFua0xpc3RWaWV3KCk7XG4gICAgdGhpcy5yZWZyZXNoTGlzdCgpO1xuICAgIHRoaXMubW92ZUxpc3RPdXRPZlNjcmVlbigpO1xuICB9XG4gIGdldENEQ29tcCgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCA9PT0gKHQgPSB0aGlzLl9yYW5rVGltZU5vZGUpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0Q29tcG9uZW50KENvdW50ZG93bkNvbXBvbmVudCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rVndfZ2V0TGVmdFRpbWVcIilcbiAgZ2V0TGVmdFRpbWUoKSB7XG4gICAgcmV0dXJuIFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldExlZnRUaW1lKCk7XG4gIH1cbiAgdXBkYXRlQ291bnRkb3duKCkge1xuICAgIHZhciB0ID0gdGhpcy5fcmFua1RpbWVOb2RlLmdldENvbXBvbmVudChDb3VudGRvd25Db21wb25lbnQpLFxuICAgICAgZSA9IHRoaXMuZ2V0TGVmdFRpbWUoKTtcbiAgICBpZiAoZSA+IDApIHtcbiAgICAgIHQuc2V0UmVtYWluVGltZShlLCB0aGlzLmZpbmlzaENvdW50ZG93bi5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZU91dENEKCk7XG4gICAgfVxuICB9XG4gIHNldFRpbWVTdHJpbmcodCA9IDApIHtcbiAgICB0aGlzLl9yYW5rVGltZU5vZGUuZ2V0Q29tcG9uZW50KENvdW50ZG93bkNvbXBvbmVudCkuc2V0UmVtYWluVGltZSh0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtWd19jbG9zZU91dENEXCIpXG4gIGNsb3NlT3V0Q0QoKSB7XG4gICAgdGhpcy5yZW1vdmVSYW5rQm94VGlwcygpO1xuICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtWd19maW5pc2hDRFwiKVxuICBmaW5pc2hDb3VudGRvd24oKSB7XG4gICAgdGhpcy5yZW1vdmVSYW5rQm94VGlwcygpO1xuICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgfVxuICBwbGF5RW50ZXJBbmltYXRpb24oKSB7XG4gICAgY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSgwLjA1KS5jYWxsKHRoaXMucHJvZHVjZUxpc3QuYmluZCh0aGlzKSkuZGVsYXkoMC4wOCkuY2FsbCh0aGlzLnBsYXlGbGFnQW5pbWF0aW9uLmJpbmQodGhpcykpLmNhbGwodGhpcy5wbGF5QXZhdGFyQW5kTmFtZS5iaW5kKHRoaXMsIHRoaXMuX3JhbmsxMjNSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIjFcIikpKS5jYWxsKHRoaXMucGxheUxpc3QuYmluZCh0aGlzKSkuZGVsYXkoMC4wNykuY2FsbCh0aGlzLnBsYXlBdmF0YXJBbmROYW1lLmJpbmQodGhpcywgdGhpcy5fcmFuazEyM1Jvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiMlwiKSkpLmRlbGF5KDAuMDcpLmNhbGwodGhpcy5wbGF5QXZhdGFyQW5kTmFtZS5iaW5kKHRoaXMsIHRoaXMuX3JhbmsxMjNSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIjNcIikpKS5kZWxheSgwLjAzKS5jYWxsKHRoaXMucGxheVNwZWNpYWxDYXJkLmJpbmQodGhpcywgdGhpcy5fcmFuazEyM1Jvb3ROb2RlLmdldENoaWxkQnlOYW1lKFwiMVwiKSkpLmRlbGF5KDAuMDEpLmNhbGwodGhpcy5wbGF5U3BlY2lhbENhcmQuYmluZCh0aGlzLCB0aGlzLl9yYW5rMTIzUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCIzXCIpKSkuZGVsYXkoMC4wNikuY2FsbCh0aGlzLnBsYXlTcGVjaWFsQ2FyZC5iaW5kKHRoaXMsIHRoaXMuX3JhbmsxMjNSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShcIjJcIikpKS5kZWxheSgwLjM2KS5jYWxsKHRoaXMucGxheUhpZ2hsaWdodC5iaW5kKHRoaXMpKS5jYWxsKHRoaXMucGxheUxpc3RTY3JvbGwuYmluZCh0aGlzKSkuc3RhcnQoKTtcbiAgfVxuICBwbGF5QXZhdGFyQW5kTmFtZSh0KSB7XG4gICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwiaGVhZFwiKSxcbiAgICAgIG8gPSB0LmdldENoaWxkQnlOYW1lKFwibmFtZVwiKTtcbiAgICBlLmFjdGl2ZSA9IHRydWU7XG4gICAgZS5zZXRTY2FsZSgwLjQsIDAuNCk7XG4gICAgby5hY3RpdmUgPSB0cnVlO1xuICAgIG8ub3BhY2l0eSA9IDA7XG4gICAgY2MudHdlZW4oZSkudG8oMC4yLCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0pLnN0YXJ0KCk7XG4gICAgY2MudHdlZW4obykudG8oMC4yLCB7XG4gICAgICBvcGFjaXR5OiAyNTVcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHBsYXlTcGVjaWFsQ2FyZCh0KSB7XG4gICAgdmFyIGUgPSB0LmdldENoaWxkQnlOYW1lKFwiYmdcIik7XG4gICAgZS5vcGFjaXR5ID0gMjU1O1xuICAgIGUuc2V0U2NhbGUoMC42LCAwLjYpO1xuICAgIGNjLnR3ZWVuKGUpLnRvKDAuMiwge1xuICAgICAgc2NhbGU6IDFcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1Z3X2dldFNlbGZSYW5rXCIpXG4gIGdldFNlbGZSYW5rKCkge1xuICAgIHJldHVybiBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRTZWxmUmFuaygpO1xuICB9XG4gIHBsYXlIaWdobGlnaHQoKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldFNlbGZSYW5rKCksXG4gICAgICBlID0gdGhpcy5fcmFuazEyM1Jvb3ROb2RlLmdldENoaWxkQnlOYW1lKFN0cmluZyh0KSk7XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciBvID0gZS5nZXRDaGlsZEJ5TmFtZShcImxpZ2h0Tm9kZVwiKTtcbiAgICAgIG8uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHZhciBuID0gby5nZXRDaGlsZEJ5TmFtZShcImxpZ2h0XCIpO1xuICAgICAgY2MudHdlZW4obikudG8oMC4xLCB7XG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSkudG8oMC4xMywge1xuICAgICAgICBvcGFjaXR5OiAxNzguNVxuICAgICAgfSkudG8oMC4xLCB7XG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgaGlkZUhpZ2h0bGlnaHQoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fcmFuazEyM1Jvb3ROb2RlKSkgZm9yICh2YXIgdCA9IDA7IHQgPCAzOyB0KyspIHtcbiAgICAgIHZhciBlID0gdGhpcy5fcmFuazEyM1Jvb3ROb2RlLmdldENoaWxkQnlOYW1lKFN0cmluZyh0ICsgMSkpLmdldENoaWxkQnlOYW1lKFwibGlnaHROb2RlXCIpO1xuICAgICAgZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaWdodFwiKS5vcGFjaXR5ID0gMDtcbiAgICB9XG4gIH1cbiAgcGxheUxpc3QoKSB7XG4gICAgdmFyIHQgPSAwO1xuICAgIHRoaXMuX3NjVmlld0NudE5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgY2MudHdlZW4oZSkuZGVsYXkodCkudG8oMC4yLCB7XG4gICAgICAgIHg6IC0xN1xuICAgICAgfSkudG8oMC4wMiwge1xuICAgICAgICB4OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzbW9vdGhcIlxuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIHQgKz0gMC4wMztcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtWd19nZXRSYW5rTGlzdFwiKVxuICBnZXRSYW5rTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5tb2RlbC5nZXRSYW5rTGlzdCh0cnVlKSB8fCBbXTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtWd19saXN0U2Nyb2xsXCIpXG4gIHBsYXlMaXN0U2Nyb2xsKCkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIGUgPSAwLFxuICAgICAgbyA9IHRoaXMuZ2V0UmFua0xpc3QoKTtcbiAgICBvID0gby5sZW5ndGggPiAzID8gby5zbGljZSgzKSA6IFtdO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgby5sZW5ndGg7IG4rKykge1xuICAgICAgdmFyIGEgPSBvW25dO1xuICAgICAgaWYgKFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmlzTXlTZWxmKGEuaWQpKSB7XG4gICAgICAgIGUgPSBuO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGkgPSAwLjA4ICogZTtcbiAgICB0aGlzLl9yYW5rTGlzdFZpZXcuX3RhYmxlVmlldy5zY3JvbGxUb0luZGV4KGUsIGkpO1xuICAgIGlmICgtMSAhPT0gdGhpcy5fc2Nyb2xsVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9zY3JvbGxUaW1lcik7XG4gICAgICB0aGlzLl9zY3JvbGxUaW1lciA9IC0xO1xuICAgIH1cbiAgICB0aGlzLl9zY3JvbGxUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdC5fcmFua0Jsb2NrTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LCAxMDAwICogaSk7XG4gIH1cbiAgcGxheUZsYWdBbmltYXRpb24oKSB7XG4gICAgdGhpcy5fZmxhZ1NrZWxldG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9mbGFnU2tlbGV0b24uc2V0QW5pbWF0aW9uKDAsIFwiaW5cIiwgZmFsc2UpO1xuICB9XG4gIHJlZnJlc2hMaXN0KCkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRSYW5rTGlzdCgpO1xuICAgIHQgPSB0Lmxlbmd0aCA+IDMgPyB0LnNsaWNlKDMpIDogW107XG4gICAgdGhpcy5fcmFua0xpc3RWaWV3LnNldERlbGVnYXRlKHRoaXMuZGVsZWdhdGUpO1xuICAgIHRoaXMuX3JhbmtMaXN0Vmlldy5yZWZyZXNoTGlzdCh0KTtcbiAgfVxuICBtb3ZlTGlzdE91dE9mU2NyZWVuKCkge1xuICAgIHZhciB0ID0gY2Mud2luU2l6ZS53aWR0aDtcbiAgICB0aGlzLl9zY1ZpZXdDbnROb2RlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc2V0UG9zaXRpb24odCwgZS5wb3NpdGlvbi55KTtcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtWd19nZXRUaXBzT2Zmc2V0XCIpXG4gIGdldEJveFRpcHNPZmZzZXQoKSB7XG4gICAgcmV0dXJuIGNjLnYyKDAsIDUwKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtWd19nZXRUaXBzUGFyZW50XCIpXG4gIGdldEJveFRpcHNQYXJlbnQoKSB7XG4gICAgcmV0dXJuIGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlO1xuICB9XG4gIGFkZFJhbmtCb3hUaXBzKHQsIGUsIG8gPSB0aGlzLmdldEJveFRpcHNPZmZzZXQoKSkge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBCb3hUaXBzLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgICAgdmFyIGkgPSBuLmdldEJveFRpcHNQYXJlbnQoKSxcbiAgICAgICAgICByID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSxcbiAgICAgICAgICBzID0gaS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihyKTtcbiAgICAgICAgYS5wYXJlbnQgPSBpO1xuICAgICAgICBhLnNldFBvc2l0aW9uKHMueCArIG8ueCwgcy55ICsgby55KTtcbiAgICAgICAgYS5nZXRDb21wb25lbnQoQm94VGlwcykuaW5pdEJveFJld2FyZChlKTtcbiAgICAgICAgYS5nZXRDb21wb25lbnQoQm94VGlwcykucGxheUluKCk7XG4gICAgICAgIG4uX2JveFRpcHNOb2RlID0gYTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltSYW5rVmlld10g5ri45oiP5YaF5Yib5bu65a6d566x5o+Q56S65Yqo55S75aSx6LSlOlwiICsgKChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpIHx8IFwiQm94VGlwc+WKoOi9veWksei0pVwiKSk7XG4gICAgfSk7XG4gIH1cbiAgcmVtb3ZlUmFua0JveFRpcHMoKSB7XG4gICAgdmFyIHQ7XG4gICAgY2MuaXNWYWxpZCh0aGlzLl9ib3hUaXBzTm9kZSkgJiYgKG51bGwgPT09ICh0ID0gdGhpcy5fYm94VGlwc05vZGUuZ2V0Q29tcG9uZW50KEJveFRpcHMpKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5wbGF5T3V0KCkpO1xuICB9XG4gIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF90ID0ge307XG4gICAgX3QubXNnX2FkZFJhbmtCb3hUaXBzID0gdGhpcy5hZGRSYW5rQm94VGlwcy5iaW5kKHRoaXMpO1xuICAgIF90Lm1zZ19yZW1vdmVSYW5rQm94VGlwcyA9IHRoaXMucmVtb3ZlUmFua0JveFRpcHMuYmluZCh0aGlzKTtcbiAgICBfdC5jbG9zZVJhbmtWaWV3ID0gdGhpcy5jbG9zZVNlbGYuYmluZCh0aGlzKTtcbiAgICBfdFtFVlRfTVNHX0tFWV9FVkVOVF9TSE9XXSA9IHRoaXMub25HYW1lU2hvdy5iaW5kKHRoaXMpO1xuICAgIF90W0VWVF9NU0dfS0VZX0VWRU5UX0hJREVdID0gdGhpcy5vbkdhbWVIaWRlLmJpbmQodGhpcyk7XG4gICAgX3QubXNnX3JhbmtSZWZyZXNoU2VsZiA9IHRoaXMub25SZWZyZXNoU2VsZi5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICBvbkdhbWVTaG93KCkge1xuICAgIHRoaXMudXBkYXRlQ291bnRkb3duKCk7XG4gIH1cbiAgb25HYW1lSGlkZSgpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1Z3X29uQnRuR29DbGlja1wiKVxuICBvbkJ0bkdvQ2xpY2soKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZS5qdW1wKCk7XG4gICAgdmFyIHQgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZURhdGEoKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmFuayhFUmFua0NsaWNrVHlwZS5DbGlja1JhbmtWaWV3U3RhcnQsIHQuZ2V0TGV2ZWxJZCgpKTtcbiAgfVxuICBvbkJ0bkJhY2tDbGljaygpIHtcbiAgICB0aGlzLmNsb3NlU2VsZigpO1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RSYW5rKEVSYW5rQ2xpY2tUeXBlLkNsaWNrUmFua1ZpZXdCYWNrKTtcbiAgICBEb3RHYW1lUGFnZVNob3cuZG90KEVQYWdlU2hvd1R5cGUuTGVhZGVyQm9hcmRUb01haW5QYWdlKTtcbiAgfVxuICBjbG9zZVNlbGYoKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICB9XG4gIG9uQnRuVGlwc0NsaWNrKCkge1xuICAgIHRoaXMuZGVsZWdhdGUuc2hvd1RpcHMoKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90UmFuayhFUmFua0NsaWNrVHlwZS5DbGlja1JhbmtWaWV3VGlwcyk7XG4gIH1cbiAgaW5pdFJhbmsxMjMoKSB7XG4gICAgdGhpcy5oaWRlSGlnaHRsaWdodCgpO1xuICAgIGZvciAodmFyIHQgPSBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKSwgZSA9IHRoaXMuZ2V0UmFua0xpc3QoKSwgbyA9IE1hdGgubWluKGUubGVuZ3RoLCAzKSwgbiA9IDA7IG4gPCBvOyBuKyspIHtcbiAgICAgIHZhciBhID0gdGhpcy5fcmFuazEyM1Jvb3ROb2RlLmdldENoaWxkQnlOYW1lKFN0cmluZyhuICsgMSkpLFxuICAgICAgICBpID0gYS5nZXRDaGlsZEJ5TmFtZShcImhlYWRcIiksXG4gICAgICAgIHIgPSBpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLFxuICAgICAgICBzID0gaS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSxcbiAgICAgICAgYyA9IHRoaXMuZGVsZWdhdGUubW9kZWwuaXNNeVNlbGYoZVtuXS5pZCksXG4gICAgICAgIGQgPSB0LmdldFJhbmtBdmF0YXJBbmRGcmFtZShlW25dLCBjKSxcbiAgICAgICAgcCA9IGQuYXZhdGFySWQsXG4gICAgICAgIGYgPSBkLmZyYW1lSWQ7XG4gICAgICB0aGlzLnVwZGF0ZUF2YXRhckFuZEZyYW1lKHIsIHMsIHAsIGYpO1xuICAgICAgdmFyIG0gPSBhLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgbS5zdHJpbmcgPSB0LmdldFJhbmtOYW1lKGVbbl0sIGMpO1xuICAgICAgdmFyIHkgPSBhLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XG4gICAgICB5LmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBlW25dLnNjb3JlICsgXCJcIjtcbiAgICAgIHRoaXMudXBkYXRlSW1nQ2FyZCh5LmdldENoaWxkQnlOYW1lKFwiY2FyZFwiKSk7XG4gICAgICB2YXIgZyA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoXCJnYW1lcGxheV9zcGVjaWFsX21qXzJcIiksXG4gICAgICAgIHYgPSBnLnBhdGgsXG4gICAgICAgIEMgPSBnLmJ1bmRsZU5hbWUsXG4gICAgICAgIFIgPSBnLmZyb21BdGxhcztcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHkuZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lcGxheV9zcGVjaWFsX21qXzJcIiksIHYsIFIsIGZhbHNlLCBDKTtcbiAgICAgIHZhciBiID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0VXNlck5hbWUoKSxcbiAgICAgICAgdyA9IFVzZXJJbmZvTWFuYWdlci5nZXRJbnN0YW5jZSgpLmlzS29yZWFuTmFtZShiKSxcbiAgICAgICAgQiA9IFVzZXJJbmZvTWFuYWdlci5nZXRJbnN0YW5jZSgpLmlzUnVzc2lhbk5hbWUoYik7XG4gICAgICBpZiAoYyAmJiAodyB8fCBCKSkge1xuICAgICAgICBtLnVzZVN5c3RlbUZvbnQgPSB0cnVlO1xuICAgICAgICBtLmZvbnQgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbS51c2VTeXN0ZW1Gb250ID0gZmFsc2U7XG4gICAgICAgIG0uZm9udCA9IHRoaXMuY3VyRm9udDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYW5rVndfdXBkQXZhdGFyRnJhbWVcIilcbiAgdXBkYXRlQXZhdGFyQW5kRnJhbWUodCwgZSwgbywgbikge1xuICAgIFVzZXJJbmZvTWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldHVwVXNlckF2YXRhcih0aGlzLmRlbGVnYXRlLCB0LCBlLCB7XG4gICAgICBhdmF0YXJJZDogbyxcbiAgICAgIGZyYW1lSWQ6IG5cbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtWd191cGRJbWdDYXJkXCIpXG4gIHVwZGF0ZUltZ0NhcmQodCkge1xuICAgIHZhciBlID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmFua0NhcmRSZXNOYW1lKCksXG4gICAgICBvID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShlKSxcbiAgICAgIG4gPSBvLnBhdGgsXG4gICAgICBhID0gby5idW5kbGVOYW1lLFxuICAgICAgaSA9IG8uZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHQsIG4sIGksIGZhbHNlLCBhKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJhbmtWd19hZGRCb3hCdG5zXCIpXG4gIGFkZEJveEJ0bnMoKSB7XG4gICAgZm9yICh2YXIgdCA9IHRoaXMsIGUgPSBmdW5jdGlvbiBlKGUpIHtcbiAgICAgICAgdmFyIG8gPSBDLmRhdGFbZV07XG4gICAgICAgIFJhbmtCb3hCdG4uY3JlYXRlVUkoby5wcmVmYWJQYXRoKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQodC5fcmFuazEyM1Jvb3ROb2RlKSkge1xuICAgICAgICAgICAgdC5fYm94QnRuTm9kZUFycmF5LnB1c2goZSk7XG4gICAgICAgICAgICBlLnBhcmVudCA9IHQuX3JhbmsxMjNSb290Tm9kZS5nZXRDaGlsZEJ5TmFtZShTdHJpbmcoby5yYW5rTnVtKSk7XG4gICAgICAgICAgICBlLnNldFBvc2l0aW9uKG8ucG9zaXRpb24pO1xuICAgICAgICAgICAgZS5nZXRDb21wb25lbnQoUmFua0JveEJ0bikuc2V0UmFua051bShvLnJhbmtOdW0pO1xuICAgICAgICAgICAgdC5wbGF5Qm94QW5pKGUsIG8ucmFua051bSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbUmFua1ZpZXddIOa4uOaIj+WGheWIm+W7uuWuneeuseaMiemSruWksei0pTpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIlJhbmtCb3hCdG7liqDovb3lpLHotKVcIikpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIG8gPSAwOyBvIDwgQy5kYXRhLmxlbmd0aDsgbysrKSBlKG8pO1xuICB9XG4gIHBsYXlCb3hBbmkodCkge1xuICAgIHQuc2NhbGUgPSAwO1xuICAgIGNjLnR3ZWVuKHQpLmRlbGF5KDAuMSkudG8oMC4yLCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgaW5pdFJhbmtMaXN0VmlldygpIHtcbiAgICB0aGlzLmFkYXB0KCk7XG4gICAgdGhpcy5fcmFua0xpc3RWaWV3ID0gdGhpcy5fc2Nyb2xsVmlldy5nZXRDb21wb25lbnQoUmFua0xpc3RWaWV3KTtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX3JhbmtMaXN0VmlldykgfHwgKHRoaXMuX3JhbmtMaXN0VmlldyA9IHRoaXMuX3Njcm9sbFZpZXcuYWRkQ29tcG9uZW50KFJhbmtMaXN0VmlldykpO1xuICB9XG4gIGFkYXB0KCkge1xuICAgIHZhciB0ID0gY2Muc3lzLmdldFNhZmVBcmVhUmVjdCgpLFxuICAgICAgZSA9IChjYy5DYW52YXMuaW5zdGFuY2UuZGVzaWduUmVzb2x1dGlvbi5oZWlnaHQsIHQuaGVpZ2h0LCB0aGlzLl9zY3JvbGxWaWV3Lm5vZGUuZ2V0Q29udGVudFNpemUoKSksXG4gICAgICBvID0gY2MuZmluZChcImJnMi9sZWFkZXJib2FyZF9iZ18yXCIsIHRoaXMuX3RvcEFkYXB0Tm9kZSksXG4gICAgICBuID0gY2MuZmluZChcImpvdXJuZXlfYmdfZG5cIiwgdGhpcy5fYm90dG9tQWRhcHROb2RlKSxcbiAgICAgIGEgPSBvLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAtNDApKSxcbiAgICAgIGkgPSBuLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAtMjApKSxcbiAgICAgIHIgPSBjYy52MigoYS54ICsgaS54KSAvIDIsIChhLnkgKyBpLnkpIC8gMiksXG4gICAgICBzID0gdGhpcy5fY29udGVudE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIociksXG4gICAgICBsID0gTWF0aC5hYnMoYS55IC0gaS55KTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3Lm5vZGUuc2V0UG9zaXRpb24ocy54LCBzLnkpO1xuICAgIHRoaXMuX3Njcm9sbFZpZXcubm9kZS5zZXRDb250ZW50U2l6ZShlLndpZHRoLCBsKTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3Lm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpLnNldENvbnRlbnRTaXplKGUud2lkdGgsIGwpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmFua1Z3X2Rlc3Ryb3lcIilcbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveSAmJiBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICBpZiAoLTEgIT09IHRoaXMuX3Njcm9sbFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2Nyb2xsVGltZXIpO1xuICAgICAgdGhpcy5fc2Nyb2xsVGltZXIgPSAtMTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVSYW5rQm94VGlwcygpO1xuICB9XG59Il19