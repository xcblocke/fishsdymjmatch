
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/view/items/Tile2ScoreItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d0c4rJSv1IAY2dLaEag70K', 'Tile2ScoreItem');
// Scripts/core/view/items/Tile2ScoreItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../../../gamePlay/base/ui/BaseSpine");
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var Tile2ScoreItem = /** @class */ (function (_super) {
    __extends(Tile2ScoreItem, _super);
    function Tile2ScoreItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spinCombo = null;
        _this._lblScore = null;
        _this._displayScore = 0;
        _this._targetScore = 0;
        _this._rollTimer = null;
        _this._scaleTween = null;
        _this.ROLL_TARGET_DURATION = 1.2;
        _this.ROLL_MIN_TIME_PER_SCORE = 0.003;
        _this.ROLL_MAX_TOTAL_MS = 1000;
        _this.ROLL_MIN_INTERVAL_MS = 2;
        return _this;
    }
    Tile2ScoreItem.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this._lblScore = null === (t = this.node.getChildByName("lbl_normal")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this._lblScore && (this._lblScore.string = "0");
        this.initSpineCombo();
    };
    Tile2ScoreItem.prototype.initSpineCombo = function () {
        var e = this.node.getChildByName("spin_combo");
        if (e) {
            this._spinCombo = BaseSpine_1.default.refreshWithNode(e, this.getComboSpinePath());
            this._spinCombo.setAnimation("init", -1);
            this._spinCombo.node.active = false;
        }
    };
    Tile2ScoreItem.prototype.getComboSpinePath = function () {
        return "spine/score/gameplay_comboTips";
    };
    Tile2ScoreItem.prototype.updateScore = function (e, t, o) {
        this.node.active || (this.node.active = true);
        this._spinCombo && (this._spinCombo.node.active = o);
        if (e <= 0) {
            this._displayScore = t;
            this._targetScore = t;
            this._lblScore && (this._lblScore.string = t.toString());
        }
        else
            t <= this._targetScore || this.startRolling(t);
    };
    Tile2ScoreItem.prototype.showComboOnArrive = function (e) {
        this._spinCombo && (this._spinCombo.node.active = e);
    };
    Tile2ScoreItem.prototype.startRolling = function (e) {
        var t = this, o = e - this._displayScore;
        if (o <= 0) {
            this._displayScore = e;
            this._targetScore = e;
            this._lblScore && (this._lblScore.string = e.toString());
        }
        else {
            this.stopRolling();
            this._targetScore = e;
            var n = Math.max(this.ROLL_TARGET_DURATION / o, this.ROLL_MIN_TIME_PER_SCORE), i = Math.max(1000 * n, this.ROLL_MIN_INTERVAL_MS), r = o * i, a = Math.min(r, this.ROLL_MAX_TOTAL_MS), l = Date.now(), s = this._displayScore;
            this._rollTimer = setInterval(function () {
                if (cc.isValid(t.node)) {
                    var n = Date.now() - l;
                    if (n >= a) {
                        t._displayScore = e;
                        t._lblScore && (t._lblScore.string = t._displayScore.toString());
                        t.stopRolling();
                    }
                    else {
                        var i = n / a;
                        t._displayScore = Math.round(s + o * i);
                        t._lblScore && (t._lblScore.string = t._displayScore.toString());
                    }
                }
                else
                    t.stopRolling();
            }, i);
            this.playScaleAnimation(a);
        }
    };
    Tile2ScoreItem.prototype.stopRolling = function () {
        if (null !== this._rollTimer) {
            clearInterval(this._rollTimer);
            this._rollTimer = null;
        }
    };
    Tile2ScoreItem.prototype.playScaleAnimation = function (e) {
        var t = this;
        if (this._lblScore) {
            var o = this._lblScore.node, n = this.getBaseScale(), i = Math.max(e / 1000, 0.1);
            if (this._scaleTween) {
                this._scaleTween.stop();
                this._scaleTween = null;
            }
            o.scale = n;
            this._scaleTween = cc.tween(o).to(0.15, {
                scale: 1.3 * n
            }, {
                easing: "sineOut"
            }).to(i, {
                scale: n
            }, {
                easing: "sineIn"
            }).call(function () {
                t._scaleTween = null;
            }).start();
        }
    };
    Tile2ScoreItem.prototype.getBaseScale = function () {
        return 1;
    };
    Tile2ScoreItem.prototype.resetForRestart = function () {
        this.stopRolling();
        if (this._scaleTween) {
            this._scaleTween.stop();
            this._scaleTween = null;
        }
        this._displayScore = 0;
        this._targetScore = 0;
        if (this._lblScore) {
            this._lblScore.node.scale = 1;
            this._lblScore.string = "0";
        }
        this._spinCombo && (this._spinCombo.node.active = false);
    };
    Tile2ScoreItem.prototype.onDestroy = function () {
        this.stopRolling();
        _super.prototype.onDestroy.call(this);
    };
    Tile2ScoreItem = __decorate([
        mj.class
    ], Tile2ScoreItem);
    return Tile2ScoreItem;
}(BaseUI_1.default));
exports.default = Tile2ScoreItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvdmlldy9pdGVtcy9UaWxlMlNjb3JlSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHVEQUFrRDtBQUVsRDtJQUE0QyxrQ0FBTTtJQUFsRDtRQUFBLHFFQTZIQztRQTVIQyxnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLDBCQUFvQixHQUFHLEdBQUcsQ0FBQztRQUMzQiw2QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDaEMsdUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLDBCQUFvQixHQUFHLENBQUMsQ0FBQzs7SUFtSDNCLENBQUM7SUFsSEMsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELHVDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMs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QUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsaUJBQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBNUhrQixjQUFjO1FBRGxDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksY0FBYyxDQTZIbEM7SUFBRCxxQkFBQztDQTdIRCxBQTZIQyxDQTdIMkMsZ0JBQU0sR0E2SGpEO2tCQTdIb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IEJhc2VVSSBmcm9tICcuLi8uLi8uLi9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJTY29yZUl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xuICBfc3BpbkNvbWJvID0gbnVsbDtcbiAgX2xibFNjb3JlID0gbnVsbDtcbiAgX2Rpc3BsYXlTY29yZSA9IDA7XG4gIF90YXJnZXRTY29yZSA9IDA7XG4gIF9yb2xsVGltZXIgPSBudWxsO1xuICBfc2NhbGVUd2VlbiA9IG51bGw7XG4gIFJPTExfVEFSR0VUX0RVUkFUSU9OID0gMS4yO1xuICBST0xMX01JTl9USU1FX1BFUl9TQ09SRSA9IDAuMDAzO1xuICBST0xMX01BWF9UT1RBTF9NUyA9IDEwMDA7XG4gIFJPTExfTUlOX0lOVEVSVkFMX01TID0gMjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciB0O1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2xibFNjb3JlID0gbnVsbCA9PT0gKHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxfbm9ybWFsXCIpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5fbGJsU2NvcmUgJiYgKHRoaXMuX2xibFNjb3JlLnN0cmluZyA9IFwiMFwiKTtcbiAgICB0aGlzLmluaXRTcGluZUNvbWJvKCk7XG4gIH1cbiAgaW5pdFNwaW5lQ29tYm8oKSB7XG4gICAgdmFyIGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcGluX2NvbWJvXCIpO1xuICAgIGlmIChlKSB7XG4gICAgICB0aGlzLl9zcGluQ29tYm8gPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGUsIHRoaXMuZ2V0Q29tYm9TcGluZVBhdGgoKSk7XG4gICAgICB0aGlzLl9zcGluQ29tYm8uc2V0QW5pbWF0aW9uKFwiaW5pdFwiLCAtMSk7XG4gICAgICB0aGlzLl9zcGluQ29tYm8ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZ2V0Q29tYm9TcGluZVBhdGgoKSB7XG4gICAgcmV0dXJuIFwic3BpbmUvc2NvcmUvZ2FtZXBsYXlfY29tYm9UaXBzXCI7XG4gIH1cbiAgdXBkYXRlU2NvcmUoZSwgdCwgbykge1xuICAgIHRoaXMubm9kZS5hY3RpdmUgfHwgKHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlKTtcbiAgICB0aGlzLl9zcGluQ29tYm8gJiYgKHRoaXMuX3NwaW5Db21iby5ub2RlLmFjdGl2ZSA9IG8pO1xuICAgIGlmIChlIDw9IDApIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXlTY29yZSA9IHQ7XG4gICAgICB0aGlzLl90YXJnZXRTY29yZSA9IHQ7XG4gICAgICB0aGlzLl9sYmxTY29yZSAmJiAodGhpcy5fbGJsU2NvcmUuc3RyaW5nID0gdC50b1N0cmluZygpKTtcbiAgICB9IGVsc2UgdCA8PSB0aGlzLl90YXJnZXRTY29yZSB8fCB0aGlzLnN0YXJ0Um9sbGluZyh0KTtcbiAgfVxuICBzaG93Q29tYm9PbkFycml2ZShlKSB7XG4gICAgdGhpcy5fc3BpbkNvbWJvICYmICh0aGlzLl9zcGluQ29tYm8ubm9kZS5hY3RpdmUgPSBlKTtcbiAgfVxuICBzdGFydFJvbGxpbmcoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSBlIC0gdGhpcy5fZGlzcGxheVNjb3JlO1xuICAgIGlmIChvIDw9IDApIHtcbiAgICAgIHRoaXMuX2Rpc3BsYXlTY29yZSA9IGU7XG4gICAgICB0aGlzLl90YXJnZXRTY29yZSA9IGU7XG4gICAgICB0aGlzLl9sYmxTY29yZSAmJiAodGhpcy5fbGJsU2NvcmUuc3RyaW5nID0gZS50b1N0cmluZygpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wUm9sbGluZygpO1xuICAgICAgdGhpcy5fdGFyZ2V0U2NvcmUgPSBlO1xuICAgICAgdmFyIG4gPSBNYXRoLm1heCh0aGlzLlJPTExfVEFSR0VUX0RVUkFUSU9OIC8gbywgdGhpcy5ST0xMX01JTl9USU1FX1BFUl9TQ09SRSksXG4gICAgICAgIGkgPSBNYXRoLm1heCgxMDAwICogbiwgdGhpcy5ST0xMX01JTl9JTlRFUlZBTF9NUyksXG4gICAgICAgIHIgPSBvICogaSxcbiAgICAgICAgYSA9IE1hdGgubWluKHIsIHRoaXMuUk9MTF9NQVhfVE9UQUxfTVMpLFxuICAgICAgICBsID0gRGF0ZS5ub3coKSxcbiAgICAgICAgcyA9IHRoaXMuX2Rpc3BsYXlTY29yZTtcbiAgICAgIHRoaXMuX3JvbGxUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodC5ub2RlKSkge1xuICAgICAgICAgIHZhciBuID0gRGF0ZS5ub3coKSAtIGw7XG4gICAgICAgICAgaWYgKG4gPj0gYSkge1xuICAgICAgICAgICAgdC5fZGlzcGxheVNjb3JlID0gZTtcbiAgICAgICAgICAgIHQuX2xibFNjb3JlICYmICh0Ll9sYmxTY29yZS5zdHJpbmcgPSB0Ll9kaXNwbGF5U2NvcmUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0LnN0b3BSb2xsaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpID0gbiAvIGE7XG4gICAgICAgICAgICB0Ll9kaXNwbGF5U2NvcmUgPSBNYXRoLnJvdW5kKHMgKyBvICogaSk7XG4gICAgICAgICAgICB0Ll9sYmxTY29yZSAmJiAodC5fbGJsU2NvcmUuc3RyaW5nID0gdC5fZGlzcGxheVNjb3JlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHQuc3RvcFJvbGxpbmcoKTtcbiAgICAgIH0sIGkpO1xuICAgICAgdGhpcy5wbGF5U2NhbGVBbmltYXRpb24oYSk7XG4gICAgfVxuICB9XG4gIHN0b3BSb2xsaW5nKCkge1xuICAgIGlmIChudWxsICE9PSB0aGlzLl9yb2xsVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcm9sbFRpbWVyKTtcbiAgICAgIHRoaXMuX3JvbGxUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG4gIHBsYXlTY2FsZUFuaW1hdGlvbihlKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICh0aGlzLl9sYmxTY29yZSkge1xuICAgICAgdmFyIG8gPSB0aGlzLl9sYmxTY29yZS5ub2RlLFxuICAgICAgICBuID0gdGhpcy5nZXRCYXNlU2NhbGUoKSxcbiAgICAgICAgaSA9IE1hdGgubWF4KGUgLyAxMDAwLCAwLjEpO1xuICAgICAgaWYgKHRoaXMuX3NjYWxlVHdlZW4pIHtcbiAgICAgICAgdGhpcy5fc2NhbGVUd2Vlbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuX3NjYWxlVHdlZW4gPSBudWxsO1xuICAgICAgfVxuICAgICAgby5zY2FsZSA9IG47XG4gICAgICB0aGlzLl9zY2FsZVR3ZWVuID0gY2MudHdlZW4obykudG8oMC4xNSwge1xuICAgICAgICBzY2FsZTogMS4zICogblxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwic2luZU91dFwiXG4gICAgICB9KS50byhpLCB7XG4gICAgICAgIHNjYWxlOiBuXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lSW5cIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQuX3NjYWxlVHdlZW4gPSBudWxsO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgZ2V0QmFzZVNjYWxlKCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJlc2V0Rm9yUmVzdGFydCgpIHtcbiAgICB0aGlzLnN0b3BSb2xsaW5nKCk7XG4gICAgaWYgKHRoaXMuX3NjYWxlVHdlZW4pIHtcbiAgICAgIHRoaXMuX3NjYWxlVHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fc2NhbGVUd2VlbiA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX2Rpc3BsYXlTY29yZSA9IDA7XG4gICAgdGhpcy5fdGFyZ2V0U2NvcmUgPSAwO1xuICAgIGlmICh0aGlzLl9sYmxTY29yZSkge1xuICAgICAgdGhpcy5fbGJsU2NvcmUubm9kZS5zY2FsZSA9IDE7XG4gICAgICB0aGlzLl9sYmxTY29yZS5zdHJpbmcgPSBcIjBcIjtcbiAgICB9XG4gICAgdGhpcy5fc3BpbkNvbWJvICYmICh0aGlzLl9zcGluQ29tYm8ubm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RvcFJvbGxpbmcoKTtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==