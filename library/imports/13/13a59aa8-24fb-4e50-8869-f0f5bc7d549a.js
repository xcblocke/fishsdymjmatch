"use strict";
cc._RF.push(module, '13a59qoJPtOUIhp8PW8fVSa', 'AgeSurveyView');
// subpackages/r_ageSurvey/Scripts/AgeSurveyView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var AgeSurveyView = /** @class */ (function (_super) {
    __extends(AgeSurveyView, _super);
    function AgeSurveyView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.btnsContainer = null;
        _this.descNode = null;
        _this.bgSprNode = null;
        _this._ageBtnNodes = [];
        _this._autoCloseTimerId = 0;
        return _this;
    }
    AgeSurveyView_1 = AgeSurveyView;
    AgeSurveyView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.collectAgeButtons();
        this.registerCloseButton();
    };
    AgeSurveyView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.clearAutoCloseTimer();
    };
    AgeSurveyView.prototype.collectAgeButtons = function () {
        if (this.btnsContainer) {
            this._ageBtnNodes = [];
            for (var t = 0; t < this.btnsContainer.childrenCount; t++) {
                var e = this.btnsContainer.children[t];
                e.name.startsWith("btn_") && this._ageBtnNodes.push(e);
            }
        }
    };
    AgeSurveyView.prototype.registerCloseButton = function () {
        this.closeBtn && this.OnButtonClick(this.closeBtn, this.onCloseClick.bind(this));
    };
    AgeSurveyView.prototype.calculateLayout = function (t) {
        var e, o, i = AgeSurveyView_1.LAYOUT_CONFIG, n = t % 2 == 1, a = n ? 3 : 2, s = n ? i.COL3 : i.COL2, c = Math.ceil(t / a), l = s.btnWidth + s.colGap, u = 2 === c ? i.BTN_ROW_GAP : s.colGap, p = s.btnHeight + u;
        if (c <= 2) {
            var d = i.ROW_CONFIG[c];
            e = d.btnsY;
            o = d.bgHeight;
        }
        else {
            e = i.BASE_BTNS_Y;
            o = i.BASE_BG_HEIGHT + (c - 2) * p;
        }
        for (var f = [], h = 0, y = 0; y < c; y++)
            for (var g = Math.min(a, t - h), v = -l * (g - 1) / 2, _ = 0; _ < g; _++) {
                f.push({
                    x: v + _ * l,
                    y: -y * p
                });
                h++;
            }
        return {
            btnWidth: s.btnWidth,
            btnHeight: s.btnHeight,
            bgHeight: o,
            btnsY: e,
            positions: f
        };
    };
    AgeSurveyView.prototype.applyLayout = function (t, e) {
        if (this.bgSprNode) {
            var r = this.bgSprNode.getContentSize();
            this.bgSprNode.setContentSize(r.width, t.bgHeight);
        }
        this.btnsContainer && (this.btnsContainer.y = t.btnsY);
        for (var o = 0; o < this._ageBtnNodes.length; o++) {
            var i = this._ageBtnNodes[o];
            if (o < e && o < t.positions.length) {
                i.active = true;
                var n = t.positions[o];
                i.setPosition(n.x, n.y);
                i.setContentSize(t.btnWidth, t.btnHeight);
            }
            else
                i.active = false;
        }
    };
    AgeSurveyView.prototype.initData = function (t, e, r, o) {
        if (e === void 0) { e = true; }
        if (o === void 0) { o = 0; }
        var i = this;
        r && this.descNode && I18NStrings_1.default.setText(this.descNode, "", r);
        if (0 !== this._ageBtnNodes.length) {
            t.map(function (t) {
                return t.label;
            }).join(", ");
            var n = e ? this.shuffleArray(__spreadArrays(t)) : __spreadArrays(t), a = (n.map(function (t) {
                return t.label;
            }).join(", "), this.calculateLayout(n.length));
            this.applyLayout(a, n.length);
            for (var c = function c(t) {
                var e = u._ageBtnNodes[t], r = n[t], o = e.getComponentInChildren(cc.Label);
                o && (o.string = r.label);
                u.OnButtonClick(e, function () {
                    i.onAgeBtnClick(r.id);
                });
            }, u = this, p = 0; p < n.length && p < this._ageBtnNodes.length; p++)
                c(p);
            o > 0 && this.startAutoCloseTimer(o);
        }
    };
    AgeSurveyView.prototype.startAutoCloseTimer = function (t) {
        var e = this;
        this.clearAutoCloseTimer();
        this._autoCloseTimerId = setTimeout(function () {
            e.onCloseClick();
        }, 1000 * t);
    };
    AgeSurveyView.prototype.clearAutoCloseTimer = function () {
        if (this._autoCloseTimerId) {
            clearTimeout(this._autoCloseTimerId);
            this._autoCloseTimerId = 0;
        }
    };
    AgeSurveyView.prototype.shuffleArray = function (t) {
        for (var e, r = t.length - 1; r > 0; r--) {
            var o = Math.floor(Math.random() * (r + 1));
            e = __read([t[o], t[r]], 2), t[r] = e[0], t[o] = e[1];
        }
        return t;
    };
    AgeSurveyView.prototype.onAgeBtnClick = function (t) {
        this.clearAutoCloseTimer();
        this.delegate.onAgeSelected(t);
    };
    AgeSurveyView.prototype.onCloseClick = function () {
        this.clearAutoCloseTimer();
        this.delegate.onCloseClick();
    };
    var AgeSurveyView_1;
    AgeSurveyView.bundleName = "r_ageSurvey";
    AgeSurveyView.prefabUrl = "prefabs/AgeSurveyView";
    AgeSurveyView.LAYOUT_CONFIG = {
        BTN_ROW_GAP: 14,
        COL3: {
            btnWidth: 256,
            btnHeight: 140,
            colGap: 0
        },
        COL2: {
            btnWidth: 318,
            btnHeight: 140,
            colGap: 20
        },
        ROW_CONFIG: {
            1: {
                btnsY: -68,
                bgHeight: 690
            },
            2: {
                btnsY: -42,
                bgHeight: 765
            }
        },
        BASE_BTNS_Y: -42,
        BASE_BG_HEIGHT: 765
    };
    __decorate([
        mj.node("content_node/btn_close")
    ], AgeSurveyView.prototype, "closeBtn", void 0);
    __decorate([
        mj.node("content_node/btns")
    ], AgeSurveyView.prototype, "btnsContainer", void 0);
    __decorate([
        mj.node("content_node/desc")
    ], AgeSurveyView.prototype, "descNode", void 0);
    __decorate([
        mj.node("bg_spr")
    ], AgeSurveyView.prototype, "bgSprNode", void 0);
    __decorate([
        mj.traitEvent("AgeSurveyView_onLoad")
    ], AgeSurveyView.prototype, "onLoad", null);
    AgeSurveyView = AgeSurveyView_1 = __decorate([
        mj.class
    ], AgeSurveyView);
    return AgeSurveyView;
}(UIView_1.default));
exports.default = AgeSurveyView;

cc._RF.pop();