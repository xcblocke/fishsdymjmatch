"use strict";
cc._RF.push(module, '38dc9VkIoJEkpLfDOO3J86i', 'RankBonusScrollPosTrait');
// subpackages/l_rankBonusScrollPos/Scripts/RankBonusScrollPosTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankBonusScrollPosTrait = /** @class */ (function (_super) {
    __extends(RankBonusScrollPosTrait, _super);
    function RankBonusScrollPosTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._viewIndex = RankBonusScrollPosTrait_1.DEFAULT_VIEW_INDEX;
        _this._itemAniDelay = 0.8;
        return _this;
    }
    RankBonusScrollPosTrait_1 = RankBonusScrollPosTrait;
    RankBonusScrollPosTrait.prototype.onLoad = function () {
        var e, r, o, i;
        _super.prototype.onLoad.call(this);
        this._viewIndex = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.viewIndex) && void 0 !== r ? r : RankBonusScrollPosTrait_1.DEFAULT_VIEW_INDEX;
        this._itemAniDelay = null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.selfItemAniDelay) && void 0 !== i ? i : 0.8;
    };
    RankBonusScrollPosTrait.prototype.onRkBnsListVw_getVwIdx = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this._viewIndex
        });
    };
    RankBonusScrollPosTrait.prototype.calculateScrollToIndex = function (t, e, n, r) {
        if (r === void 0) { r = this._viewIndex; }
        return e <= n ? 0 : t < r ? 0 : t - r;
    };
    RankBonusScrollPosTrait.prototype.onRkBnsListVw_calIdx = function (t, e) {
        var n = t.ins, r = t.args[0], o = n._rankBonusDataList, i = n._scrollView, l = n._cellHeight;
        if (o && i) {
            var a = o.length, c = i.node.height, s = Math.floor(c / l), u = this.calculateScrollToIndex(r, a, s);
            e({
                returnType: TraitCallbackReturnType.return,
                returnVal: u
            });
        }
        else
            e();
    };
    RankBonusScrollPosTrait.prototype.onRankBonusVw_moveToMyRk = function (t, e) {
        var n, r = t.ins, o = r._rankListView, i = o._rankBonusDataList, l = o._scrollView, a = o._cellHeight;
        if (i && l) {
            var c = i.length, s = l.node.height, u = Math.floor(s / a), d = r.delegate.model.localData.myRank, f = this.calculateScrollToIndex(d - 1, c, u);
            null === (n = r._rankListView) || void 0 === n || n.scrollToRankIfNeeded(f + 1, true, false).then(function () {
                var t;
                null === (t = r.playEnterAnimation) || void 0 === t || t.call(r);
            });
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    RankBonusScrollPosTrait.prototype.onRankBonusVw_upRkScroll = function (t, e) {
        var n, r, o, i, l = t.ins;
        if ((null === (n = null == l ? void 0 : l.delegate) || void 0 === n ? void 0 : n.model) && l._rankListView) {
            var a = l._rankListView, c = null === (r = a._rankBonusDataList) || void 0 === r ? void 0 : r.length, s = null === (i = null === (o = a._scrollView) || void 0 === o ? void 0 : o.node) || void 0 === i ? void 0 : i.height, u = Math.floor(s / (a._cellHeight || 1)), d = l.delegate.model.localData.myRank, f = this.calculateScrollToIndex(d - 1, c, u);
            l._rankListView._isAddScoreScrolling = true;
            l._rankListView.scrollToRankIfNeeded(f + 1, true, true);
            var p = a.computeScrollParams(f), _ = (p.targetOffsetY, p.scrollTime);
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.return,
                returnVal: {
                    toIndex: f,
                    scrollTime: _
                }
            });
        }
        else
            e();
    };
    RankBonusScrollPosTrait.prototype.onRankBonusVw_getItmAniDly = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: this._itemAniDelay
        });
    };
    RankBonusScrollPosTrait.prototype.onRankBonusVw_stSelfItmAni = function (t, e) {
        var n, r = t.ins, o = r.myselfRankBonusItem, i = t.args[0], l = (t.args[1], t.args[2]), a = t.args[3], c = t.args[4], s = i + l, u = null === (n = null == o ? void 0 : o.getRankSelfLabel) || void 0 === n ? void 0 : n.call(o), d = r._rankListView, f = null == o ? void 0 : o.node;
        u && c !== a && f && this.playRankNumberAnimation(u, c, a, s, d, f);
        e();
    };
    RankBonusScrollPosTrait.prototype.playRankNumberAnimation = function (t, e, n, r, o, i) {
        try {
            if (!t || !cc.isValid(t.node))
                return;
            var l = null == o ? void 0 : o._scrollView, a = (null == o ? void 0 : o._cellHeight) || 205, c = (null == o ? void 0 : o._rankBonusDataList) || [], s = null == l ? void 0 : l.content, u = function u() {
                var e, r;
                if (cc.isValid(t) && cc.isValid(i) && cc.isValid(s)) {
                    var o = i.convertToWorldSpaceAR(cc.Vec2.ZERO).y + i.height * (1 - i.anchorY), l = s.convertToWorldSpaceAR(cc.Vec2.ZERO).y + s.height * (1 - s.anchorY), u = Math.floor((l - o + 80) / a), d = null !== (r = null === (e = c[Math.max(0, Math.min(u, c.length - 1))]) || void 0 === e ? void 0 : e.rank) && void 0 !== r ? r : n;
                    t.string = "" + d;
                }
            };
            if (l) {
                l.node.on("scrolling", u);
                t.scheduleOnce(function () {
                    cc.isValid(null == l ? void 0 : l.node) && l.node.off("scrolling", u);
                    cc.isValid(t) && (t.string = "" + n);
                }, r);
            }
            u();
        }
        catch (e) {
            cc.isValid(t) && (t.string = "" + n);
        }
    };
    var RankBonusScrollPosTrait_1;
    RankBonusScrollPosTrait.traitKey = "RankBonusScrollPos";
    RankBonusScrollPosTrait.DEFAULT_VIEW_INDEX = 2;
    RankBonusScrollPosTrait = RankBonusScrollPosTrait_1 = __decorate([
        mj.trait,
        mj.class("RankBonusScrollPosTrait")
    ], RankBonusScrollPosTrait);
    return RankBonusScrollPosTrait;
}(Trait_1.default));
exports.default = RankBonusScrollPosTrait;

cc._RF.pop();