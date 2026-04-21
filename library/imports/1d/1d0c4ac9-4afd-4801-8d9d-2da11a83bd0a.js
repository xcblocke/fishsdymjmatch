"use strict";
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