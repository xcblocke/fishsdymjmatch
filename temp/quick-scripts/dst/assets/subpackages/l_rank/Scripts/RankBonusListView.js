
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankBonusListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rQm9udXNMaXN0Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELHdEQUF1RDtBQUN2RCx5Q0FBb0M7QUFDcEMsaURBQTRDO0FBRTVDO0lBQStDLHFDQUFNO0lBQXJEO1FBQUEscUVBeVZDO1FBeFZDLHdCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixpQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUNsQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQiwwQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsMEJBQW9CLEdBQUcsSUFBSSxDQUFDOztJQW9WOUIsQ0FBQztJQW5WQyxrQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELHlDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUkscUJBQVMsQ0FBQztZQUM5QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsUUFBUSxFQUFFLElBQUk7WUFDZCxZQUFZLEVBQUUsS0FBSztTQUNwQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMs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QUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUN2RixPQUFPLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUNELHFDQUFTLEdBQVQ7UUFDRSxpQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUF2U0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDOzJEQUduQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzt1REFHckM7SUF1TkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO3dEQWlCeEM7SUE5UmtCLGlCQUFpQjtRQURyQyxFQUFFLENBQUMsS0FBSztPQUNZLGlCQUFpQixDQXlWckM7SUFBRCx3QkFBQztDQXpWRCxBQXlWQyxDQXpWOEMsZ0JBQU0sR0F5VnBEO2tCQXpWb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IHsgVGFibGVWaWV3IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9UYWJsZVZpZXcnO1xuaW1wb3J0IFJhbmtNb2RlbCBmcm9tICcuL1JhbmtNb2RlbCc7XG5pbXBvcnQgUmFua0JvbnVzSXRlbSBmcm9tICcuL1JhbmtCb251c0l0ZW0nO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rQm9udXNMaXN0VmlldyBleHRlbmRzIEJhc2VVSSB7XG4gIF9yYW5rQm9udXNEYXRhTGlzdCA9IFtdO1xuICBfY2VsbEhlaWdodCA9IDIwNTtcbiAgX2NlbGxXaWR0aCA9IDEwMDA7XG4gIF9pc0FkZFNjb3JlU2Nyb2xsaW5nID0gZmFsc2U7XG4gIF9jYWNoZWRGaXJzdFdvcmxkUG9zID0gbnVsbDtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3Njcm9sbFZpZXcgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpO1xuICAgIHZhciBlID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCk7XG4gICAgdGhpcy5fY2VsbFdpZHRoID0gZS53aWR0aDtcbiAgICB0aGlzLmluaXRUYWJsZVZpZXcoKTtcbiAgfVxuICBpbml0VGFibGVWaWV3KCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLl90YWJsZVZpZXcgPSBuZXcgVGFibGVWaWV3KHtcbiAgICAgIHZpZXc6IHRoaXMuX3Njcm9sbFZpZXcsXG4gICAgICBpc1JldXNlZDogdHJ1ZSxcbiAgICAgIGlzQ2VsbEFjdGl2ZTogZmFsc2VcbiAgICB9KTtcbiAgICB0aGlzLl90YWJsZVZpZXcuY2VsbFNpemVGb3JUYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjYy5zaXplKHQuX2NlbGxXaWR0aCwgdC5fY2VsbEhlaWdodCk7XG4gICAgfTtcbiAgICB0aGlzLl90YWJsZVZpZXcubnVtYmVyT2ZDZWxsc0luVGFibGVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHQuX3JhbmtCb251c0RhdGFMaXN0Lmxlbmd0aDtcbiAgICB9O1xuICAgIHRoaXMuX3RhYmxlVmlldy5jZWxsQXRJbmRleCA9IGZ1bmN0aW9uIChlLCBvKSB7XG4gICAgICB2YXIgbiA9IHQuX3RhYmxlVmlldy5kZXF1ZXVlQ2VsbEJ5S2V5KFwicmFua1wiKTtcbiAgICAgIG4gfHwgKG4gPSBSYW5rQm9udXNJdGVtLmNyZWF0ZUNlbGwoXCJyYW5rXCIpKTtcbiAgICAgIHZhciBhID0gbi5nZXRDb21wb25lbnQoUmFua0JvbnVzSXRlbSk7XG4gICAgICBhICYmIGEudXBkYXRlSXRlbUNlbGwodC5fcmFua0JvbnVzRGF0YUxpc3Rbb10sIHQuX2lzQWRkU2NvcmVTY3JvbGxpbmcpO1xuICAgICAgcmV0dXJuIG47XG4gICAgfTtcbiAgfVxuICByZWZyZXNoTGlzdCh0KSB7XG4gICAgdGhpcy5fcmFua0JvbnVzRGF0YUxpc3QgPSB0O1xuICAgIHRoaXMuX3RhYmxlVmlldy5yZWxvYWREYXRhKCk7XG4gIH1cbiAgZ2V0Q2VsbEJ5SW5kZXgodCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiBudWxsID09PSAoZSA9IHRoaXMuX3RhYmxlVmlldykgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRDZWxsQnlJbmRleCh0KTtcbiAgfVxuICBnZXRNeUluZGV4KCkge1xuICAgIHZhciB0ID0gUmFua01vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmtCb251c0RhdGFMaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHQuaXNNeVNlbGYoZS5pZCk7XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSa0Juc0xpc3RWd19jYWxJZHhcIilcbiAgY2FsY3VsYXRlSW5kZXgodCwgZSkge1xuICAgIHJldHVybiBNYXRoLm1pbih0ID4gMCA/IHQgLSAxIDogMCwgZSAtIDEpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUmtCbnNMaXN0VndfZ2V0VndJZHhcIilcbiAgZ2V0Vmlld0lkeCgpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBnZXRSYW5rVXBXb3JsZFBvcyh0KSB7XG4gICAgdGhpcy5fY2FjaGVkRmlyc3RXb3JsZFBvcyB8fCAodGhpcy5fY2FjaGVkRmlyc3RXb3JsZFBvcyA9IHRoaXMuY2FsUmFua1VwV29ybGRQb3MoKSk7XG4gICAgdmFyIGUgPSBNYXRoLm1pbih0aGlzLmdldFZpZXdJZHgoKSwgdCAtIDEpO1xuICAgIHJldHVybiBuZXcgY2MuVmVjMih0aGlzLl9jYWNoZWRGaXJzdFdvcmxkUG9zLngsIHRoaXMuX2NhY2hlZEZpcnN0V29ybGRQb3MueSAtIGUgKiB0aGlzLl9jZWxsSGVpZ2h0KTtcbiAgfVxuICBjYWxSYW5rVXBXb3JsZFBvcygpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3Njcm9sbFZpZXcubm9kZSxcbiAgICAgIGUgPSB0aGlzLl9zY3JvbGxWaWV3LmNvbnRlbnQsXG4gICAgICBvID0gdC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKSxcbiAgICAgIG4gPSB0LmhlaWdodCxcbiAgICAgIGEgPSBvLnkgKyBuIC8gMiAtIHRoaXMuX2NlbGxIZWlnaHQgLyAyLFxuICAgICAgaSA9IGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTykueDtcbiAgICByZXR1cm4gY2MudjIoaSwgYSk7XG4gIH1cbiAgZ2V0UmFua1NlbGZJdGVtV29ybGRQb3MoKSB7XG4gICAgdmFyIHQgPSB0aGlzLl9zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgaWYgKCF0IHx8IDAgPT09IHQuY2hpbGRyZW5Db3VudCkgcmV0dXJuIHtcbiAgICAgIHdvcmxkUG9zOiBjYy52MigwLCAwKSxcbiAgICAgIGl0ZW06IG51bGxcbiAgICB9O1xuICAgIGZvciAodmFyIGUgPSBudWxsLCBvID0gbnVsbCwgbiA9IDA7IG4gPCB0LmNoaWxkcmVuQ291bnQ7IG4rKykge1xuICAgICAgdmFyIGEgPSB0LmNoaWxkcmVuW25dO1xuICAgICAgaWYgKGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgdmFyIGkgPSBhLmdldENvbXBvbmVudChSYW5rQm9udXNJdGVtKTtcbiAgICAgICAgaWYgKGkgJiYgUmFua01vZGVsLmdldEluc3RhbmNlKCkuaXNNeVNlbGYoaS5nZXREYXRhKCkuaWQpKSB7XG4gICAgICAgICAgZSA9IGE7XG4gICAgICAgICAgbyA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGUpIHtcbiAgICAgIHZhciByID0gY2MuZmluZChcIlJhbmtCb251c0l0ZW0vcC9jYXJkX2JnXCIsIGUpO1xuICAgICAgaWYgKCFyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd29ybGRQb3M6IGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyksXG4gICAgICAgICAgaXRlbTogb1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd29ybGRQb3M6IHIuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzIuWkVSTyksXG4gICAgICAgIGl0ZW06IG9cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB3b3JsZFBvczogY2MudjIoMCwgMCksXG4gICAgICBpdGVtOiBudWxsXG4gICAgfTtcbiAgfVxuICBleGNoYW5nZVJhbmtEYXRhKHQsIGUpIHtcbiAgICB2YXIgbztcbiAgICBpZiAodCAhPT0gZSkge1xuICAgICAgdGhpcy5fcmFua0JvbnVzRGF0YUxpc3QgPSBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRSYW5rTGlzdCgpO1xuICAgICAgaWYgKFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmlzTXlTZWxmKG51bGwgPT09IChvID0gdGhpcy5fcmFua0JvbnVzRGF0YUxpc3RbZSAtIDFdKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmlkKSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUNyZWF0ZWRDZWxscyh0LCBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQgPCAxIHx8IHQgPiB0aGlzLl9yYW5rQm9udXNEYXRhTGlzdC5sZW5ndGggfHwgZSA8IDEgfHwgdGhpcy5fcmFua0JvbnVzRGF0YUxpc3QubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVDcmVhdGVkQ2VsbHModCwgZSkge1xuICAgIGZvciAodmFyIG8gPSBNYXRoLm1pbih0LCBlKSAtIDEsIG4gPSBNYXRoLm1heCh0LCBlKSAtIDEsIGEgPSB0IC0gMSwgaSA9IGUgLSAxLCByID0gdGhpcy5fdGFibGVWaWV3Ll9jcmVhdGVkQ2VsbE1hcCwgcyA9IG87IHMgPD0gbjsgcysrKSBpZiAocyAhPT0gYSkge1xuICAgICAgdmFyIGwgPSByW3NdO1xuICAgICAgaWYgKGwgJiYgY2MuaXNWYWxpZChsKSAmJiBzIDwgdGhpcy5fcmFua0JvbnVzRGF0YUxpc3QubGVuZ3RoKSB7XG4gICAgICAgIHZhciBkID0gbC5nZXRDb21wb25lbnQoUmFua0JvbnVzSXRlbSk7XG4gICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgZC51cGRhdGVJdGVtQ2VsbCh0aGlzLl9yYW5rQm9udXNEYXRhTGlzdFtzXSwgZmFsc2UpO1xuICAgICAgICAgIHZhciBwID0gdGhpcy5fdGFibGVWaWV3LmdldENlbGxQb3NpdGlvbihzKTtcbiAgICAgICAgICBwICYmIChsLnBvc2l0aW9uID0gbmV3IGNjLlZlYzMocC54LCBwLnksIDApKTtcbiAgICAgICAgICBpZiAocyA9PT0gaSkge1xuICAgICAgICAgICAgbC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGQuZ2V0Q29udGVudE5vZGUoKS5zY2FsZSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbXB1dGVTY3JvbGxQYXJhbXModCkge1xuICAgIHZhciBlID0gdGhpcy5fc2Nyb2xsVmlldy5nZXRTY3JvbGxPZmZzZXQoKSxcbiAgICAgIG8gPSB0ICogdGhpcy5fY2VsbEhlaWdodCxcbiAgICAgIG4gPSB0aGlzLl9yYW5rQm9udXNEYXRhTGlzdC5sZW5ndGggKiB0aGlzLl9jZWxsSGVpZ2h0LFxuICAgICAgYSA9IE1hdGgubWF4KDAsIG4gLSB0aGlzLl9zY3JvbGxWaWV3Lm5vZGUuaGVpZ2h0KSxcbiAgICAgIGkgPSBNYXRoLm1pbihvLCBhKSxcbiAgICAgIHIgPSBNYXRoLmFicyhlLnkgLSBpKSxcbiAgICAgIHMgPSAwLjI7XG4gICAgdGhpcy5fY2VsbEhlaWdodCA+IDAgJiYgKHMgPSBNYXRoLm1pbihyIC8gdGhpcy5fY2VsbEhlaWdodCAqIDAuMiwgMS41KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhcmdldE9mZnNldFk6IGksXG4gICAgICBzY3JvbGxUaW1lOiBzXG4gICAgfTtcbiAgfVxuICBzY3JvbGxUb0luZGV4KHQsIGUgPSAwLCBvID0gMC4zKSB7XG4gICAgdGhpcy5fdGFibGVWaWV3Ll92aWV3LnNjcm9sbFRvT2Zmc2V0KG5ldyBjYy5WZWMyKDAsIGUpLCBvLCBmYWxzZSk7XG4gICAgdGhpcy5faXNBZGRTY29yZVNjcm9sbGluZyA9IHRydWU7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgc2Nyb2xsVG9NeVJhbmsodCkge1xuICAgIGlmICh0aGlzLl90YWJsZVZpZXcpIHtcbiAgICAgIHZhciBlID0gUmFua01vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgIG8gPSBlLmdldFJhbmtMaXN0KCkgfHwgW10sXG4gICAgICAgIG4gPSBvLmZpbmRJbmRleChmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBlLmlzTXlTZWxmKHQuaWQpO1xuICAgICAgICB9KTtcbiAgICAgIG4gPCAwICYmIChuID0gby5sZW5ndGggLSAxKTtcbiAgICAgIHZhciBhID0gdGhpcy5jYWxjdWxhdGVJbmRleChuLCBvLmxlbmd0aCksXG4gICAgICAgIGkgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBhKSwgby5sZW5ndGggLSAxKTtcbiAgICAgIHRoaXMuX3RhYmxlVmlldy5zY3JvbGxUb0luZGV4KGksIDAuMDAxKTtcbiAgICAgIHQgJiYgdGhpcy5zY2hlZHVsZU9uY2UodCwgMC4wNSk7XG4gICAgfVxuICB9XG4gIGFkZFNjb3JlU2Nyb2xsRW5kKCkge1xuICAgIHRoaXMuX2lzQWRkU2NvcmVTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9yYW5rQm9udXNEYXRhTGlzdCA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJhbmtMaXN0KCk7XG4gICAgdmFyIHQgPSB0aGlzLl90YWJsZVZpZXcuX2NyZWF0ZWRDZWxsTWFwO1xuICAgIGZvciAodmFyIGUgaW4gdCkge1xuICAgICAgdmFyIG8gPSBwYXJzZUludChlKSxcbiAgICAgICAgbiA9IHRbb107XG4gICAgICBpZiAobiAmJiBjYy5pc1ZhbGlkKG4pICYmIG8gPCB0aGlzLl9yYW5rQm9udXNEYXRhTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGEgPSBuLmdldENvbXBvbmVudChSYW5rQm9udXNJdGVtKTtcbiAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICBhLnVwZGF0ZUl0ZW1DZWxsKHRoaXMuX3JhbmtCb251c0RhdGFMaXN0W29dLCBmYWxzZSk7XG4gICAgICAgICAgdmFyIGkgPSB0aGlzLl90YWJsZVZpZXcuZ2V0Q2VsbFBvc2l0aW9uKG8pO1xuICAgICAgICAgIGkgJiYgKG4ucG9zaXRpb24gPSBuZXcgY2MuVmVjMyhpLngsIGkueSwgMCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNjcm9sbFRvUmFua0lmTmVlZGVkKHQsIGUgPSBmYWxzZSwgbyA9IHRydWUpIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhKSB7XG4gICAgICBpZiAodCA8IDEgfHwgdCA+IG4uX3JhbmtCb251c0RhdGFMaXN0Lmxlbmd0aCkgYShmYWxzZSk7ZWxzZSB7XG4gICAgICAgIHZhciBpID0gdCAtIDEsXG4gICAgICAgICAgciA9IG4uZ2V0Q2VsbEJ5SW5kZXgoaSksXG4gICAgICAgICAgcyA9IG51bGwgIT0gciAmJiBjYy5pc1ZhbGlkKHIpO1xuICAgICAgICBpZiAocyB8fCBlKSB7XG4gICAgICAgICAgdmFyIGwgPSBuLl9zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpLnksXG4gICAgICAgICAgICBjID0gbi5fc2Nyb2xsVmlldy5ub2RlLmhlaWdodCxcbiAgICAgICAgICAgIGQgPSBpICogbi5fY2VsbEhlaWdodCxcbiAgICAgICAgICAgIHAgPSBkICsgbi5fY2VsbEhlaWdodDtcbiAgICAgICAgICBpZiAocyAmJiAhZSAmJiBkID49IGwgJiYgcCA8PSBsICsgYykge1xuICAgICAgICAgICAgYSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHUgPSBuLmNvbXB1dGVTY3JvbGxQYXJhbXMoaSksXG4gICAgICAgICAgICBoID0gdS50YXJnZXRPZmZzZXRZLFxuICAgICAgICAgICAgZiA9IHUuc2Nyb2xsVGltZTtcbiAgICAgICAgICBuLl9zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KGNjLnYyKDAsIGgpLCBvID8gZiA6IDApO1xuICAgICAgICAgIGlmIChvICYmIGYgPiAwKSBuLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhKHRydWUpO1xuICAgICAgICAgIH0sIGYgKyAocyA/IDAuMSA6IDApKTtlbHNlIHtcbiAgICAgICAgICAgIG4uX3RhYmxlVmlldy5jaGVja1VwZGF0ZUNlbGwoKTtcbiAgICAgICAgICAgIGEodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgYShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbW92ZUl0ZW1Ub1JhbmsodCwgZSwgbykge1xuICAgIGlmICh0ICE9PSBlKSB7XG4gICAgICBpZiAodCA8IDEgfHwgdCA+IHRoaXMuX3JhbmtCb251c0RhdGFMaXN0Lmxlbmd0aCB8fCBlIDwgMSB8fCBlID4gdGhpcy5fcmFua0JvbnVzRGF0YUxpc3QubGVuZ3RoKSBvICYmIG8obnVsbCk7ZWxzZSBpZiAodCA8PSBlKSBvICYmIG8obnVsbCk7ZWxzZSB7XG4gICAgICAgIHZhciBuID0gMC4yICogKHQgLSBlKSxcbiAgICAgICAgICBhID0gdCAtIDEsXG4gICAgICAgICAgaSA9IGUgLSAxLFxuICAgICAgICAgIHIgPSB0aGlzLl90YWJsZVZpZXcuZ2V0Q2VsbEJ5SW5kZXgoYSk7XG4gICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgZm9yICh2YXIgcyA9IG5ldyBNYXAoKSwgZCA9IG5ldyBNYXAoKSwgcCA9IGU7IHAgPD0gdDsgcCsrKSB7XG4gICAgICAgICAgICB2YXIgdSA9IHAgLSAxO1xuICAgICAgICAgICAgaWYgKGcgPSB0aGlzLl90YWJsZVZpZXcuZ2V0Q2VsbEJ5SW5kZXgodSkpIHtcbiAgICAgICAgICAgICAgcy5zZXQodSwgZy55KTtcbiAgICAgICAgICAgICAgZC5zZXQodSwgZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBoID0gcy5nZXQoaSk7XG4gICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhQXJyYXlPbmx5KHQsIGUpO1xuICAgICAgICAgICAgdmFyIGYgPSBSYW5rTW9kZWwuZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgICAgICAgbSA9IG51bGw7XG4gICAgICAgICAgICBmb3IgKHAgPSBlOyBwIDw9IHQ7IHArKykge1xuICAgICAgICAgICAgICB1ID0gcCAtIDE7XG4gICAgICAgICAgICAgIGlmIChnID0gdGhpcy5fdGFibGVWaWV3LmdldENlbGxCeUluZGV4KHUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF8gPSBnLmdldENvbXBvbmVudChSYW5rQm9udXNJdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoXykge1xuICAgICAgICAgICAgICAgICAgXy51cGRhdGVDZWxsKF8uZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgICAgICAgIGYuaXNNeVNlbGYoXy5nZXREYXRhKCkuaWQpICYmIChtID0gXyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgeSA9IFtdO1xuICAgICAgICAgICAgeS5wdXNoKHtcbiAgICAgICAgICAgICAgbm9kZTogcixcbiAgICAgICAgICAgICAgdGFyZ2V0WTogaFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3IgKHAgPSBlOyBwIDwgdDsgcCsrKSB7XG4gICAgICAgICAgICAgIHZhciBnO1xuICAgICAgICAgICAgICB1ID0gcCAtIDE7XG4gICAgICAgICAgICAgIGlmICgoZyA9IGQuZ2V0KHUpKSAmJiBnICE9PSByKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBzLmdldCh1ICsgMSk7XG4gICAgICAgICAgICAgICAgdm9pZCAwICE9PSB2ICYmIHkucHVzaCh7XG4gICAgICAgICAgICAgICAgICBub2RlOiBnLFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0WTogdlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoMCAhPT0geS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5yYW5rVXBTdGFydCh5LCBuLCBvLCBtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG8gJiYgbyhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgbyAmJiBvKG51bGwpO1xuICAgICAgICB9IGVsc2UgbyAmJiBvKG51bGwpO1xuICAgICAgfVxuICAgIH0gZWxzZSBvICYmIG8obnVsbCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSa0Juc0xpc3RWd19yYW5rVXBTdGFydFwiKVxuICByYW5rVXBTdGFydCh0LCBlLCBvLCBuKSB7XG4gICAgdmFyIGEgPSAwLFxuICAgICAgaSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubGVuZ3RoO1xuICAgIGlmICgwICE9PSBpKSB7XG4gICAgICB0LmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgY2MudHdlZW4odC5ub2RlKS50byhlLCB7XG4gICAgICAgICAgeTogdC50YXJnZXRZXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IFwic2luZUluT3V0XCJcbiAgICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgKythID09PSBpICYmIG8gJiYgbyhuKTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvICYmIG8obnVsbCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZURhdGFBcnJheU9ubHkodCwgZSkge1xuICAgIHZhciBvID0gdCAtIDEsXG4gICAgICBuID0gdGhpcy5fcmFua0JvbnVzRGF0YUxpc3Quc3BsaWNlKG8sIDEpWzBdLFxuICAgICAgYSA9IGUgLSAxO1xuICAgIHRoaXMuX3JhbmtCb251c0RhdGFMaXN0LnNwbGljZShhLCAwLCBuKTtcbiAgICBmb3IgKHZhciBpID0gYTsgaSA8PSBvOyBpKyspIHRoaXMuX3JhbmtCb251c0RhdGFMaXN0W2ldICYmICh0aGlzLl9yYW5rQm9udXNEYXRhTGlzdFtpXS5yYW5rID0gaSArIDEpO1xuICAgIHZhciByID0gdGhpcy5fdGFibGVWaWV3Ll9jcmVhdGVkQ2VsbE1hcCxcbiAgICAgIHMgPSByW29dO1xuICAgIGlmIChzKSB7XG4gICAgICBmb3IgKGkgPSBvOyBpID4gYTsgaS0tKSByW2ldID0gcltpIC0gMV07XG4gICAgICByW2FdID0gcztcbiAgICB9XG4gIH1cbiAgcGxheUxpc3RJdGVtQW5pbWF0aW9uKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IG51bGwgPT09ICh0ID0gdGhpcy5fc2Nyb2xsVmlldykgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jb250ZW50O1xuICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFZpZXcubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgdmFyIG8gPSBlLmNoaWxkcmVuLFxuICAgICAgICBuID0gMC40O1xuICAgICAgby5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgICAgdmFyIGUgPSB0LFxuICAgICAgICAgICAgbyA9IGUueTtcbiAgICAgICAgICBlLnkgPSBvIC0gMTA3O1xuICAgICAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgY2MudHdlZW4oZSkuZGVsYXkobikucGFyYWxsZWwoY2MudHdlZW4oKS50bygwLjMzLCB7XG4gICAgICAgICAgICB5OiBvXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgIH0pLCBjYy50d2VlbigpLnRvKDAuMzMsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVhc2luZzogXCJjaXJjT3V0XCJcbiAgICAgICAgICB9KSkuc3RhcnQoKTtcbiAgICAgICAgICBuICs9IDAuMDY7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG4gKyAwLjMzO1xuICAgIH1cbiAgfVxuICBjYW5jZWxBY3Rpb25zKCkge1xuICAgIHZhciB0O1xuICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3ICYmIHRoaXMuX3Njcm9sbFZpZXcuY29udGVudCAmJiB0aGlzLl9zY3JvbGxWaWV3LmNvbnRlbnQuYWN0aXZlSW5IaWVyYXJjaHkpIHtcbiAgICAgIG51bGwgPT09ICh0ID0gdGhpcy5fc2Nyb2xsVmlldy5jb250ZW50LmNoaWxkcmVuKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3Njcm9sbFZpZXcubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgIH1cbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5jYW5jZWxBY3Rpb25zKCk7XG4gICAgdGhpcy5fdGFibGVWaWV3ID0gbnVsbDtcbiAgICB0aGlzLl9zY3JvbGxWaWV3ID0gbnVsbDtcbiAgICB0aGlzLl9jYWNoZWRGaXJzdFdvcmxkUG9zID0gbnVsbDtcbiAgfVxufSJdfQ==