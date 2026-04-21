
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rank/Scripts/RankBonusWinRateView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03ba7ZO8sZGQ7LiQ4QFILbo', 'RankBonusWinRateView');
// subpackages/l_rank/Scripts/RankBonusWinRateView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var RankEnums_1 = require("./util/RankEnums");
var RankModel_1 = require("./RankModel");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var RankBonusWinRateView = /** @class */ (function (_super) {
    __extends(RankBonusWinRateView, _super);
    function RankBonusWinRateView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._barLabelNodes = [];
        _this._spRateBar = null;
        _this._addScoreLabel = null;
        _this._addScoreLabelNode = null;
        _this._addScoreOffsetPosition = cc.v3(0, 0, 0);
        return _this;
    }
    RankBonusWinRateView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._barLabelNodes = [[cc.find("lab_rate_1/select_rate", this.node), cc.find("lab_rate_1/normal_rate", this.node)], [cc.find("lab_rate_2/select_rate", this.node), cc.find("lab_rate_2/normal_rate", this.node)], [cc.find("lab_rate_3/select_rate", this.node), cc.find("lab_rate_3/normal_rate", this.node)]];
        this._spRateBar = cc.find("sp_rate_bar", this.node).getComponent(sp.Skeleton);
        this._addScoreLabelNode = cc.find("rate_add_node", this.node);
        if (this._addScoreLabelNode) {
            this._addScoreLabel = this._addScoreLabelNode.getChildByName("lab_add").getComponent(cc.Label);
            this._addScoreOffsetPosition = this._addScoreLabelNode.position.clone().subtract(this._barLabelNodes[0][0].parent.position);
            this._addScoreLabelNode.active = false;
        }
    };
    RankBonusWinRateView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this._barLabelNodes = null;
        this._spRateBar = null;
        this._addScoreLabel = null;
        this._addScoreLabelNode = null;
        this._addScoreOffsetPosition = null;
    };
    RankBonusWinRateView.prototype.show = function () {
        this.node.opacity = 0;
        this._addScoreLabel && (this._addScoreLabel.string = "");
        this._addScoreLabelNode && (this._addScoreLabelNode.active = false);
    };
    RankBonusWinRateView.prototype.updateWinStreakDisplay = function () {
        var t, e, o;
        if (this._barLabelNodes && this._spRateBar) {
            var n = RankModel_1.default.getInstance(), a = null === (e = null === (t = n.localData.rankGameData) || void 0 === t ? void 0 : t.joinActInfo) || void 0 === e ? void 0 : e.winStreakCount, i = n.localData.myWinStreakCount;
            i > a && (i = 0);
            var r = -1;
            i > 0 && (r = null === (o = RankModel_1.default.getInstance().getRobotLogic()) || void 0 === o ? void 0 : o.getWinStreakRateLevel(i));
            this._barLabelNodes.forEach(function (t, e) {
                t[0].active = e === r;
                t[1].active = e !== r;
            });
            this._spRateBar.setAnimation(0, "idle_" + (r + 1), false);
        }
    };
    RankBonusWinRateView.prototype.getActiveBarPos = function () {
        if (!this._barLabelNodes || !this._spRateBar || !this._addScoreLabelNode)
            return null;
        for (var t = null, e = 0; e < this._barLabelNodes.length; e++) {
            var o = __read(this._barLabelNodes[e], 2), n = o[0];
            o[1];
            if (n && n.active) {
                t = n;
                break;
            }
        }
        t || (t = this._barLabelNodes[0][1]);
        if (!t)
            return null;
        var a = this.node.position, i = t.parent.position, s = t.position;
        this._addScoreLabelNode.position = this._addScoreOffsetPosition.clone().add(i);
        return cc.v2(a.x + i.x + s.x, a.y + i.y + s.y);
    };
    RankBonusWinRateView.prototype.isRateLevelActive = function (t) {
        return !this._barLabelNodes || t < 0 || t >= this._barLabelNodes.length || this._barLabelNodes[t][0].active;
    };
    RankBonusWinRateView.prototype.playEnterAnimation = function () {
        if (this.node && this.node.activeInHierarchy) {
            this.node.opacity = 255;
            this.node.scale = 0;
            cc.tween(this.node).delay(0.2).to(0.26, {
                scale: 1
            }, {
                easing: "backOut"
            }).start();
        }
    };
    RankBonusWinRateView.prototype.playRateLevelAnimation = function (t, e) {
        var o = this;
        if (this._spRateBar && this._addScoreLabelNode && this._barLabelNodes) {
            this._addScoreLabelNode.position = this._barLabelNodes[t][0].parent.position.clone().add(this._addScoreOffsetPosition);
            this._barLabelNodes.forEach(function (e, o) {
                e[0].active = o === t;
                e[1].active = o !== t;
            });
            mj.audioManager.playEffect(RankEnums_1.ERankAudioID.Charge);
            CommonUtils_1.playSpineAnim(this._spRateBar, 1, "in_" + (t + 1), function () {
                CommonUtils_1.playSpineAnim(o._spRateBar, 1, "idle_" + (t + 1));
                e && e();
            });
        }
        else
            e && e();
    };
    RankBonusWinRateView.prototype.playAddScoreAnimation = function (t) {
        if (this._addScoreLabel && this._addScoreLabelNode) {
            this._addScoreLabel.string = "+" + t;
            var e = this._addScoreLabelNode;
            e.active = true;
            e.scale = 0;
            e.opacity = 255;
            e.y = 0;
            cc.tween(e).to(0.16, {
                scale: 1
            }, {
                easing: "circOut"
            }).to(0.5, {
                y: 17
            }, {
                easing: "sineInOut"
            }).start();
            cc.tween(e).delay(0.5).to(0.16, {
                opacity: 0
            }, {
                easing: "sineInOut"
            }).start();
        }
    };
    RankBonusWinRateView.prototype.cancelActions = function () {
        var t, e;
        null === (t = this._addScoreLabelNode) || void 0 === t || t.stopAllActions();
        null === (e = this.node) || void 0 === e || e.stopAllActions();
    };
    __decorate([
        mj.traitEvent("RkBnsWinRate_show")
    ], RankBonusWinRateView.prototype, "show", null);
    __decorate([
        mj.traitEvent("RkBnsWinRate_playRtLvAni")
    ], RankBonusWinRateView.prototype, "playRateLevelAnimation", null);
    RankBonusWinRateView = __decorate([
        mj.class
    ], RankBonusWinRateView);
    return RankBonusWinRateView;
}(BaseUI_1.default));
exports.default = RankBonusWinRateView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmsvU2NyaXB0cy9SYW5rQm9udXNXaW5SYXRlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTZFO0FBQzdFLDhDQUFnRDtBQUNoRCx5Q0FBb0M7QUFDcEMsK0RBQTBEO0FBRTFEO0lBQWtELHdDQUFNO0lBQXhEO1FBQUEscUVBNkhDO1FBNUhDLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHdCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQiw2QkFBdUIsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0lBd0gzQyxDQUFDO0lBdkhDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pULElBQUksQ0FBQyxVQUFVLEdB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SyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBbEdEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztvREFLbEM7SUFtREQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO3NFQWV6QztJQS9Ga0Isb0JBQW9CO1FBRHhDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksb0JBQW9CLENBNkh4QztJQUFELDJCQUFDO0NBN0hELEFBNkhDLENBN0hpRCxnQkFBTSxHQTZIdkQ7a0JBN0hvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF5U3BpbmVBbmltIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuaW1wb3J0IHsgRVJhbmtBdWRpb0lEIH0gZnJvbSAnLi91dGlsL1JhbmtFbnVtcyc7XG5pbXBvcnQgUmFua01vZGVsIGZyb20gJy4vUmFua01vZGVsJztcbmltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua0JvbnVzV2luUmF0ZVZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuICBfYmFyTGFiZWxOb2RlcyA9IFtdO1xuICBfc3BSYXRlQmFyID0gbnVsbDtcbiAgX2FkZFNjb3JlTGFiZWwgPSBudWxsO1xuICBfYWRkU2NvcmVMYWJlbE5vZGUgPSBudWxsO1xuICBfYWRkU2NvcmVPZmZzZXRQb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fYmFyTGFiZWxOb2RlcyA9IFtbY2MuZmluZChcImxhYl9yYXRlXzEvc2VsZWN0X3JhdGVcIiwgdGhpcy5ub2RlKSwgY2MuZmluZChcImxhYl9yYXRlXzEvbm9ybWFsX3JhdGVcIiwgdGhpcy5ub2RlKV0sIFtjYy5maW5kKFwibGFiX3JhdGVfMi9zZWxlY3RfcmF0ZVwiLCB0aGlzLm5vZGUpLCBjYy5maW5kKFwibGFiX3JhdGVfMi9ub3JtYWxfcmF0ZVwiLCB0aGlzLm5vZGUpXSwgW2NjLmZpbmQoXCJsYWJfcmF0ZV8zL3NlbGVjdF9yYXRlXCIsIHRoaXMubm9kZSksIGNjLmZpbmQoXCJsYWJfcmF0ZV8zL25vcm1hbF9yYXRlXCIsIHRoaXMubm9kZSldXTtcbiAgICB0aGlzLl9zcFJhdGVCYXIgPSBjYy5maW5kKFwic3BfcmF0ZV9iYXJcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgIHRoaXMuX2FkZFNjb3JlTGFiZWxOb2RlID0gY2MuZmluZChcInJhdGVfYWRkX25vZGVcIiwgdGhpcy5ub2RlKTtcbiAgICBpZiAodGhpcy5fYWRkU2NvcmVMYWJlbE5vZGUpIHtcbiAgICAgIHRoaXMuX2FkZFNjb3JlTGFiZWwgPSB0aGlzLl9hZGRTY29yZUxhYmVsTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYl9hZGRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgIHRoaXMuX2FkZFNjb3JlT2Zmc2V0UG9zaXRpb24gPSB0aGlzLl9hZGRTY29yZUxhYmVsTm9kZS5wb3NpdGlvbi5jbG9uZSgpLnN1YnRyYWN0KHRoaXMuX2JhckxhYmVsTm9kZXNbMF1bMF0ucGFyZW50LnBvc2l0aW9uKTtcbiAgICAgIHRoaXMuX2FkZFNjb3JlTGFiZWxOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy5fYmFyTGFiZWxOb2RlcyA9IG51bGw7XG4gICAgdGhpcy5fc3BSYXRlQmFyID0gbnVsbDtcbiAgICB0aGlzLl9hZGRTY29yZUxhYmVsID0gbnVsbDtcbiAgICB0aGlzLl9hZGRTY29yZUxhYmVsTm9kZSA9IG51bGw7XG4gICAgdGhpcy5fYWRkU2NvcmVPZmZzZXRQb3NpdGlvbiA9IG51bGw7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSa0Juc1dpblJhdGVfc2hvd1wiKVxuICBzaG93KCkge1xuICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICB0aGlzLl9hZGRTY29yZUxhYmVsICYmICh0aGlzLl9hZGRTY29yZUxhYmVsLnN0cmluZyA9IFwiXCIpO1xuICAgIHRoaXMuX2FkZFNjb3JlTGFiZWxOb2RlICYmICh0aGlzLl9hZGRTY29yZUxhYmVsTm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cbiAgdXBkYXRlV2luU3RyZWFrRGlzcGxheSgpIHtcbiAgICB2YXIgdCwgZSwgbztcbiAgICBpZiAodGhpcy5fYmFyTGFiZWxOb2RlcyAmJiB0aGlzLl9zcFJhdGVCYXIpIHtcbiAgICAgIHZhciBuID0gUmFua01vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgIGEgPSBudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gbi5sb2NhbERhdGEucmFua0dhbWVEYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmpvaW5BY3RJbmZvKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLndpblN0cmVha0NvdW50LFxuICAgICAgICBpID0gbi5sb2NhbERhdGEubXlXaW5TdHJlYWtDb3VudDtcbiAgICAgIGkgPiBhICYmIChpID0gMCk7XG4gICAgICB2YXIgciA9IC0xO1xuICAgICAgaSA+IDAgJiYgKHIgPSBudWxsID09PSAobyA9IFJhbmtNb2RlbC5nZXRJbnN0YW5jZSgpLmdldFJvYm90TG9naWMoKSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRXaW5TdHJlYWtSYXRlTGV2ZWwoaSkpO1xuICAgICAgdGhpcy5fYmFyTGFiZWxOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uICh0LCBlKSB7XG4gICAgICAgIHRbMF0uYWN0aXZlID0gZSA9PT0gcjtcbiAgICAgICAgdFsxXS5hY3RpdmUgPSBlICE9PSByO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9zcFJhdGVCYXIuc2V0QW5pbWF0aW9uKDAsIFwiaWRsZV9cIiArIChyICsgMSksIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgZ2V0QWN0aXZlQmFyUG9zKCkge1xuICAgIGlmICghdGhpcy5fYmFyTGFiZWxOb2RlcyB8fCAhdGhpcy5fc3BSYXRlQmFyIHx8ICF0aGlzLl9hZGRTY29yZUxhYmVsTm9kZSkgcmV0dXJuIG51bGw7XG4gICAgZm9yICh2YXIgdCA9IG51bGwsIGUgPSAwOyBlIDwgdGhpcy5fYmFyTGFiZWxOb2Rlcy5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIG8gPSBfX3JlYWQodGhpcy5fYmFyTGFiZWxOb2Rlc1tlXSwgMiksXG4gICAgICAgIG4gPSBvWzBdO1xuICAgICAgb1sxXTtcbiAgICAgIGlmIChuICYmIG4uYWN0aXZlKSB7XG4gICAgICAgIHQgPSBuO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdCB8fCAodCA9IHRoaXMuX2JhckxhYmVsTm9kZXNbMF1bMV0pO1xuICAgIGlmICghdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGEgPSB0aGlzLm5vZGUucG9zaXRpb24sXG4gICAgICBpID0gdC5wYXJlbnQucG9zaXRpb24sXG4gICAgICBzID0gdC5wb3NpdGlvbjtcbiAgICB0aGlzLl9hZGRTY29yZUxhYmVsTm9kZS5wb3NpdGlvbiA9IHRoaXMuX2FkZFNjb3JlT2Zmc2V0UG9zaXRpb24uY2xvbmUoKS5hZGQoaSk7XG4gICAgcmV0dXJuIGNjLnYyKGEueCArIGkueCArIHMueCwgYS55ICsgaS55ICsgcy55KTtcbiAgfVxuICBpc1JhdGVMZXZlbEFjdGl2ZSh0KSB7XG4gICAgcmV0dXJuICF0aGlzLl9iYXJMYWJlbE5vZGVzIHx8IHQgPCAwIHx8IHQgPj0gdGhpcy5fYmFyTGFiZWxOb2Rlcy5sZW5ndGggfHwgdGhpcy5fYmFyTGFiZWxOb2Rlc1t0XVswXS5hY3RpdmU7XG4gIH1cbiAgcGxheUVudGVyQW5pbWF0aW9uKCkge1xuICAgIGlmICh0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmFjdGl2ZUluSGllcmFyY2h5KSB7XG4gICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDA7XG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLmRlbGF5KDAuMikudG8oMC4yNiwge1xuICAgICAgICBzY2FsZTogMVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJrQm5zV2luUmF0ZV9wbGF5UnRMdkFuaVwiKVxuICBwbGF5UmF0ZUxldmVsQW5pbWF0aW9uKHQsIGUpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX3NwUmF0ZUJhciAmJiB0aGlzLl9hZGRTY29yZUxhYmVsTm9kZSAmJiB0aGlzLl9iYXJMYWJlbE5vZGVzKSB7XG4gICAgICB0aGlzLl9hZGRTY29yZUxhYmVsTm9kZS5wb3NpdGlvbiA9IHRoaXMuX2JhckxhYmVsTm9kZXNbdF1bMF0ucGFyZW50LnBvc2l0aW9uLmNsb25lKCkuYWRkKHRoaXMuX2FkZFNjb3JlT2Zmc2V0UG9zaXRpb24pO1xuICAgICAgdGhpcy5fYmFyTGFiZWxOb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChlLCBvKSB7XG4gICAgICAgIGVbMF0uYWN0aXZlID0gbyA9PT0gdDtcbiAgICAgICAgZVsxXS5hY3RpdmUgPSBvICE9PSB0O1xuICAgICAgfSk7XG4gICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFUmFua0F1ZGlvSUQuQ2hhcmdlKTtcbiAgICAgIHBsYXlTcGluZUFuaW0odGhpcy5fc3BSYXRlQmFyLCAxLCBcImluX1wiICsgKHQgKyAxKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBwbGF5U3BpbmVBbmltKG8uX3NwUmF0ZUJhciwgMSwgXCJpZGxlX1wiICsgKHQgKyAxKSk7XG4gICAgICAgIGUgJiYgZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGUgJiYgZSgpO1xuICB9XG4gIHBsYXlBZGRTY29yZUFuaW1hdGlvbih0KSB7XG4gICAgaWYgKHRoaXMuX2FkZFNjb3JlTGFiZWwgJiYgdGhpcy5fYWRkU2NvcmVMYWJlbE5vZGUpIHtcbiAgICAgIHRoaXMuX2FkZFNjb3JlTGFiZWwuc3RyaW5nID0gXCIrXCIgKyB0O1xuICAgICAgdmFyIGUgPSB0aGlzLl9hZGRTY29yZUxhYmVsTm9kZTtcbiAgICAgIGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGUuc2NhbGUgPSAwO1xuICAgICAgZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgZS55ID0gMDtcbiAgICAgIGNjLnR3ZWVuKGUpLnRvKDAuMTYsIHtcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImNpcmNPdXRcIlxuICAgICAgfSkudG8oMC41LCB7XG4gICAgICAgIHk6IDE3XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5PdXRcIlxuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIGNjLnR3ZWVuKGUpLmRlbGF5KDAuNSkudG8oMC4xNiwge1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5PdXRcIlxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgY2FuY2VsQWN0aW9ucygpIHtcbiAgICB2YXIgdCwgZTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuX2FkZFNjb3JlTGFiZWxOb2RlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5ub2RlKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5zdG9wQWxsQWN0aW9ucygpO1xuICB9XG59Il19