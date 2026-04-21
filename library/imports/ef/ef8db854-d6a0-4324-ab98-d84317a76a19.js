"use strict";
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