"use strict";
cc._RF.push(module, '1a8accJgAhOo5qNid+73jzt', 'RankBonusListView');
// subpackages/l_rank/Scripts/RankBonusListView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var TableView_1 = require("../../../Scripts/TableView");
var RankModel_1 = require("./RankModel");
var RankBonusItem_1 = require("./RankBonusItem");
var RankBonusListView = /** @class */ (function (_super) {
    __extends(RankBonusListView, _super);
    function RankBonusListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankBonusDataList = [];
        _this._cellHeight = 205;
        _this._cellWidth = 1000;
        _this._isAddScoreScrolling = false;
        _this._cachedFirstWorldPos = null;
        return _this;
    }
    RankBonusListView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._scrollView = this.node.getComponent(cc.ScrollView);
        var e = this.node.getContentSize();
        this._cellWidth = e.width;
        this.initTableView();
    };
    RankBonusListView.prototype.initTableView = function () {
        var t = this;
        this._tableView = new TableView_1.TableView({
            view: this._scrollView,
            isReused: true,
            isCellActive: false
        });
        this._tableView.cellSizeForTable = function () {
            return cc.size(t._cellWidth, t._cellHeight);
        };
        this._tableView.numberOfCellsInTableView = function () {
            return t._rankBonusDataList.length;
        };
        this._tableView.cellAtIndex = function (e, o) {
            var n = t._tableView.dequeueCellByKey("rank");
            n || (n = RankBonusItem_1.default.createCell("rank"));
            var a = n.getComponent(RankBonusItem_1.default);
            a && a.updateItemCell(t._rankBonusDataList[o], t._isAddScoreScrolling);
            return n;
        };
    };
    RankBonusListView.prototype.refreshList = function (t) {
        this._rankBonusDataList = t;
        this._tableView.reloadData();
    };
    RankBonusListView.prototype.getCellByIndex = function (t) {
        var e;
        return null === (e = this._tableView) || void 0 === e ? void 0 : e.getCellByIndex(t);
    };
    RankBonusListView.prototype.getMyIndex = function () {
        var t = RankModel_1.default.getInstance();
        return this._rankBonusDataList.findIndex(function (e) {
            return t.isMySelf(e.id);
        });
    };
    RankBonusListView.prototype.calculateIndex = function (t, e) {
        return Math.min(t > 0 ? t - 1 : 0, e - 1);
    };
    RankBonusListView.prototype.getViewIdx = function () {
        return 0;
    };
    RankBonusListView.prototype.getRankUpWorldPos = function (t) {
        this._cachedFirstWorldPos || (this._cachedFirstWorldPos = this.calRankUpWorldPos());
        var e = Math.min(this.getViewIdx(), t - 1);
        return new cc.Vec2(this._cachedFirstWorldPos.x, this._cachedFirstWorldPos.y - e * this._cellHeight);
    };
    RankBonusListView.prototype.calRankUpWorldPos = function () {
        var t = this._scrollView.node, e = this._scrollView.content, o = t.convertToWorldSpaceAR(cc.Vec2.ZERO), n = t.height, a = o.y + n / 2 - this._cellHeight / 2, i = e.convertToWorldSpaceAR(cc.Vec2.ZERO).x;
        return cc.v2(i, a);
    };
    RankBonusListView.prototype.getRankSelfItemWorldPos = function () {
        var t = this._scrollView.content;
        if (!t || 0 === t.childrenCount)
            return {
                worldPos: cc.v2(0, 0),
                item: null
            };
        for (var e = null, o = null, n = 0; n < t.childrenCount; n++) {
            var a = t.children[n];
            if (cc.isValid(a)) {
                var i = a.getComponent(RankBonusItem_1.default);
                if (i && RankModel_1.default.getInstance().isMySelf(i.getData().id)) {
                    e = a;
                    o = i;
                    break;
                }
            }
        }
        if (e) {
            var r = cc.find("RankBonusItem/p/card_bg", e);
            if (!r) {
                return {
                    worldPos: e.convertToWorldSpaceAR(cc.Vec2.ZERO),
                    item: o
                };
            }
            return {
                worldPos: r.convertToWorldSpaceAR(cc.Vec2.ZERO),
                item: o
            };
        }
        return {
            worldPos: cc.v2(0, 0),
            item: null
        };
    };
    RankBonusListView.prototype.exchangeRankData = function (t, e) {
        var o;
        if (t !== e) {
            this._rankBonusDataList = RankModel_1.default.getInstance().getRankList();
            if (RankModel_1.default.getInstance().isMySelf(null === (o = this._rankBonusDataList[e - 1]) || void 0 === o ? void 0 : o.id)) {
                this.updateCreatedCells(t, e);
            }
            else {
                t < 1 || t > this._rankBonusDataList.length || e < 1 || this._rankBonusDataList.length;
            }
        }
    };
    RankBonusListView.prototype.updateCreatedCells = function (t, e) {
        for (var o = Math.min(t, e) - 1, n = Math.max(t, e) - 1, a = t - 1, i = e - 1, r = this._tableView._createdCellMap, s = o; s <= n; s++)
            if (s !== a) {
                var l = r[s];
                if (l && cc.isValid(l) && s < this._rankBonusDataList.length) {
                    var d = l.getComponent(RankBonusItem_1.default);
                    if (d) {
                        d.updateItemCell(this._rankBonusDataList[s], false);
                        var p = this._tableView.getCellPosition(s);
                        p && (l.position = new cc.Vec3(p.x, p.y, 0));
                        if (s === i) {
                            l.opacity = 0;
                            d.getContentNode().scale = 0;
                        }
                    }
                }
            }
    };
    RankBonusListView.prototype.computeScrollParams = function (t) {
        var e = this._scrollView.getScrollOffset(), o = t * this._cellHeight, n = this._rankBonusDataList.length * this._cellHeight, a = Math.max(0, n - this._scrollView.node.height), i = Math.min(o, a), r = Math.abs(e.y - i), s = 0.2;
        this._cellHeight > 0 && (s = Math.min(r / this._cellHeight * 0.2, 1.5));
        return {
            targetOffsetY: i,
            scrollTime: s
        };
    };
    RankBonusListView.prototype.scrollToIndex = function (t, e, o) {
        if (e === void 0) { e = 0; }
        if (o === void 0) { o = 0.3; }
        this._tableView._view.scrollToOffset(new cc.Vec2(0, e), o, false);
        this._isAddScoreScrolling = true;
        return o;
    };
    RankBonusListView.prototype.scrollToMyRank = function (t) {
        if (this._tableView) {
            var e = RankModel_1.default.getInstance(), o = e.getRankList() || [], n = o.findIndex(function (t) {
                return e.isMySelf(t.id);
            });
            n < 0 && (n = o.length - 1);
            var a = this.calculateIndex(n, o.length), i = Math.min(Math.max(0, a), o.length - 1);
            this._tableView.scrollToIndex(i, 0.001);
            t && this.scheduleOnce(t, 0.05);
        }
    };
    RankBonusListView.prototype.addScoreScrollEnd = function () {
        this._isAddScoreScrolling = false;
        this._rankBonusDataList = RankModel_1.default.getInstance().getRankList();
        var t = this._tableView._createdCellMap;
        for (var e in t) {
            var o = parseInt(e), n = t[o];
            if (n && cc.isValid(n) && o < this._rankBonusDataList.length) {
                var a = n.getComponent(RankBonusItem_1.default);
                if (a) {
                    a.updateItemCell(this._rankBonusDataList[o], false);
                    var i = this._tableView.getCellPosition(o);
                    i && (n.position = new cc.Vec3(i.x, i.y, 0));
                }
            }
        }
    };
    RankBonusListView.prototype.scrollToRankIfNeeded = function (t, e, o) {
        if (e === void 0) { e = false; }
        if (o === void 0) { o = true; }
        var n = this;
        return new Promise(function (a) {
            if (t < 1 || t > n._rankBonusDataList.length)
                a(false);
            else {
                var i = t - 1, r = n.getCellByIndex(i), s = null != r && cc.isValid(r);
                if (s || e) {
                    var l = n._scrollView.getScrollOffset().y, c = n._scrollView.node.height, d = i * n._cellHeight, p = d + n._cellHeight;
                    if (s && !e && d >= l && p <= l + c) {
                        a(true);
                        return;
                    }
                    var u = n.computeScrollParams(i), h = u.targetOffsetY, f = u.scrollTime;
                    n._scrollView.scrollToOffset(cc.v2(0, h), o ? f : 0);
                    if (o && f > 0)
                        n.scheduleOnce(function () {
                            a(true);
                        }, f + (s ? 0.1 : 0));
                    else {
                        n._tableView.checkUpdateCell();
                        a(true);
                    }
                }
                else
                    a(false);
            }
        });
    };
    RankBonusListView.prototype.moveItemToRank = function (t, e, o) {
        if (t !== e) {
            if (t < 1 || t > this._rankBonusDataList.length || e < 1 || e > this._rankBonusDataList.length)
                o && o(null);
            else if (t <= e)
                o && o(null);
            else {
                var n = 0.2 * (t - e), a = t - 1, i = e - 1, r = this._tableView.getCellByIndex(a);
                if (r) {
                    for (var s = new Map(), d = new Map(), p = e; p <= t; p++) {
                        var u = p - 1;
                        if (g = this._tableView.getCellByIndex(u)) {
                            s.set(u, g.y);
                            d.set(u, g);
                        }
                    }
                    var h = s.get(i);
                    if (void 0 !== h) {
                        this.updateDataArrayOnly(t, e);
                        var f = RankModel_1.default.getInstance(), m = null;
                        for (p = e; p <= t; p++) {
                            u = p - 1;
                            if (g = this._tableView.getCellByIndex(u)) {
                                var _ = g.getComponent(RankBonusItem_1.default);
                                if (_) {
                                    _.updateCell(_.getData());
                                    f.isMySelf(_.getData().id) && (m = _);
                                }
                            }
                        }
                        var y = [];
                        y.push({
                            node: r,
                            targetY: h
                        });
                        for (p = e; p < t; p++) {
                            var g;
                            u = p - 1;
                            if ((g = d.get(u)) && g !== r) {
                                var v = s.get(u + 1);
                                void 0 !== v && y.push({
                                    node: g,
                                    targetY: v
                                });
                            }
                        }
                        if (0 !== y.length) {
                            this.rankUpStart(y, n, o, m);
                        }
                        else {
                            o && o(null);
                        }
                    }
                    else
                        o && o(null);
                }
                else
                    o && o(null);
            }
        }
        else
            o && o(null);
    };
    RankBonusListView.prototype.rankUpStart = function (t, e, o, n) {
        var a = 0, i = null == t ? void 0 : t.length;
        if (0 !== i) {
            t.forEach(function (t) {
                cc.tween(t.node).to(e, {
                    y: t.targetY
                }, {
                    easing: "sineInOut"
                }).call(function () {
                    ++a === i && o && o(n);
                }).start();
            });
        }
        else {
            o && o(null);
        }
    };
    RankBonusListView.prototype.updateDataArrayOnly = function (t, e) {
        var o = t - 1, n = this._rankBonusDataList.splice(o, 1)[0], a = e - 1;
        this._rankBonusDataList.splice(a, 0, n);
        for (var i = a; i <= o; i++)
            this._rankBonusDataList[i] && (this._rankBonusDataList[i].rank = i + 1);
        var r = this._tableView._createdCellMap, s = r[o];
        if (s) {
            for (i = o; i > a; i--)
                r[i] = r[i - 1];
            r[a] = s;
        }
    };
    RankBonusListView.prototype.playListItemAnimation = function () {
        var t, e = null === (t = this._scrollView) || void 0 === t ? void 0 : t.content;
        if (e && cc.isValid(e)) {
            this._scrollView.node.opacity = 255;
            var o = e.children, n = 0.4;
            o.forEach(function (t) {
                if (cc.isValid(t)) {
                    var e = t, o = e.y;
                    e.y = o - 107;
                    e.opacity = 0;
                    cc.tween(e).delay(n).parallel(cc.tween().to(0.33, {
                        y: o
                    }, {
                        easing: "backOut"
                    }), cc.tween().to(0.33, {
                        opacity: 255
                    }, {
                        easing: "circOut"
                    })).start();
                    n += 0.06;
                }
            });
            return n + 0.33;
        }
    };
    RankBonusListView.prototype.cancelActions = function () {
        var t;
        this.unscheduleAllCallbacks();
        if (this._scrollView && this._scrollView.content && this._scrollView.content.activeInHierarchy) {
            null === (t = this._scrollView.content.children) || void 0 === t || t.forEach(function (t) {
                return t.stopAllActions();
            });
            this._scrollView.node.stopAllActions();
        }
    };
    RankBonusListView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.cancelActions();
        this._tableView = null;
        this._scrollView = null;
        this._cachedFirstWorldPos = null;
    };
    __decorate([
        mj.traitEvent("RkBnsListVw_calIdx")
    ], RankBonusListView.prototype, "calculateIndex", null);
    __decorate([
        mj.traitEvent("RkBnsListVw_getVwIdx")
    ], RankBonusListView.prototype, "getViewIdx", null);
    __decorate([
        mj.traitEvent("RkBnsListVw_rankUpStart")
    ], RankBonusListView.prototype, "rankUpStart", null);
    RankBonusListView = __decorate([
        mj.class
    ], RankBonusListView);
    return RankBonusListView;
}(BaseUI_1.default));
exports.default = RankBonusListView;

cc._RF.pop();