
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_gameEndHighlight/Scripts/GameEndHighlightTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c19a94RBKdC6pLf7+luJ0Uo', 'GameEndHighlightTrait');
// subpackages/l_gameEndHighlight/Scripts/GameEndHighlightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightType = void 0;
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var RateUtils_1 = require("../../../Scripts/RateUtils");
var NodeSkinTool_1 = require("../../../Scripts/NodeSkinTool");
var Config_1 = require("../../../Scripts/Config");
var HighlightType;
(function (HighlightType) {
    HighlightType[HighlightType["None"] = 0] = "None";
    HighlightType[HighlightType["HardLevel"] = 1] = "HardLevel";
    HighlightType[HighlightType["Speed"] = 2] = "Speed";
    HighlightType[HighlightType["HighScore"] = 3] = "HighScore";
    HighlightType[HighlightType["RateWithIncrease"] = 4] = "RateWithIncrease";
    HighlightType[HighlightType["RateOnly"] = 5] = "RateOnly";
    HighlightType[HighlightType["FullCombo"] = 6] = "FullCombo";
    HighlightType[HighlightType["General"] = 7] = "General";
})(HighlightType = exports.HighlightType || (exports.HighlightType = {}));
var GameEndHighlightTrait = /** @class */ (function (_super) {
    __extends(GameEndHighlightTrait, _super);
    function GameEndHighlightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameEndHighlightTrait.prototype.getSpeedThreshold = function () {
        var t;
        return null !== (t = this._traitData.speedThreshold) && void 0 !== t ? t : 0.5;
    };
    GameEndHighlightTrait.prototype.getScoreThreshold = function () {
        var t;
        return null !== (t = this._traitData.scoreThreshold) && void 0 !== t ? t : 7500;
    };
    GameEndHighlightTrait.prototype.getRateThreshold = function () {
        var t;
        return null !== (t = this._traitData.rateThreshold) && void 0 !== t ? t : 86;
    };
    GameEndHighlightTrait.prototype.getExperimentType = function () {
        var t;
        return null !== (t = this._traitData.experimentType) && void 0 !== t ? t : 1;
    };
    GameEndHighlightTrait.prototype.getMCoefficient1 = function () {
        var t;
        return null !== (t = this._traitData.mCoefficient1) && void 0 !== t ? t : 100.72;
    };
    GameEndHighlightTrait.prototype.getMCoefficient2 = function () {
        var t;
        return null !== (t = this._traitData.mCoefficient2) && void 0 !== t ? t : 70;
    };
    GameEndHighlightTrait.prototype.getEnableRateAdjust = function () {
        var t;
        return null !== (t = this._traitData.enableRateAdjust) && void 0 !== t && t;
    };
    GameEndHighlightTrait.prototype.getHighlightI18NKey = function (t) {
        return "MahjongBlast_GameEnd_Type" + t + "_" + (Math.floor(11 * Math.random()) + 1).toString().padStart(2, "0");
    };
    GameEndHighlightTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.localData.lastRate || (this.localData.lastRate = 0);
        void 0 === this.localData.lastFullCombo && (this.localData.lastFullCombo = false);
        this.localData.pairTrackTime || (this.localData.pairTrackTime = 0);
        this.localData.lastUpdateTimestamp || (this.localData.lastUpdateTimestamp = 0);
        this.localData.firstPairTime || (this.localData.firstPairTime = 0);
        this.localData.lastPairTime || (this.localData.lastPairTime = 0);
        this.localData.pairCount || (this.localData.pairCount = 0);
    };
    GameEndHighlightTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_HIDE] = this.onGameHide.bind(this);
        _t[Config_1.EVT_MSG_KEY_EVENT_SHOW] = this.onGameShow.bind(this);
        return _t;
    };
    GameEndHighlightTrait.prototype.onGameHide = function () {
        if (this.localData.lastUpdateTimestamp > 0) {
            var t = (Date.now() - this.localData.lastUpdateTimestamp) / 1000;
            t > 0 && t < 5 && (this.localData.pairTrackTime += t);
            this.localData.lastUpdateTimestamp = -2;
        }
    };
    GameEndHighlightTrait.prototype.onGameShow = function () {
        -2 === this.localData.lastUpdateTimestamp && (this.localData.lastUpdateTimestamp = Date.now());
    };
    GameEndHighlightTrait.prototype.onIptSetLv_newGComp = function (t, e) {
        if (1 !== NormalGameData_1.default.getInstance().getCurrentLevelId()) {
            if (this.localData.lastUpdateTimestamp <= 0) {
                this.localData.pairTrackTime = 0;
                this.localData.lastUpdateTimestamp = 0;
                this.localData.firstPairTime = 0;
                this.localData.lastPairTime = 0;
                this.localData.pairCount = 0;
            }
            else
                this.localData.lastUpdateTimestamp = Date.now();
            e();
        }
        else
            e();
    };
    GameEndHighlightTrait.prototype.onIptGameTime_exec = function (t, e) {
        if (1 !== NormalGameData_1.default.getInstance().getCurrentLevelId()) {
            var a = Date.now();
            if (-1 !== this.localData.lastUpdateTimestamp) {
                if (-2 !== this.localData.lastUpdateTimestamp) {
                    if (0 !== this.localData.lastUpdateTimestamp) {
                        var i = (a - this.localData.lastUpdateTimestamp) / 1000;
                        this.localData.pairTrackTime;
                        if (i > 0 && i < 5) {
                            this.localData.pairTrackTime += i;
                            this.localData.lastUpdateTimestamp = a;
                        }
                        else
                            this.localData.lastUpdateTimestamp = a;
                        e();
                    }
                    else {
                        this.localData.lastUpdateTimestamp = a;
                        e();
                    }
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    GameEndHighlightTrait.prototype.onClearBhv_collision = function (t, e) {
        if (1 !== NormalGameData_1.default.getInstance().getCurrentLevelId()) {
            var a = Date.now();
            this.localData.pairTrackTime;
            if (-1 !== this.localData.lastUpdateTimestamp) {
                if (-2 !== this.localData.lastUpdateTimestamp) {
                    if (0 !== this.localData.lastUpdateTimestamp) {
                        var i = (a - this.localData.lastUpdateTimestamp) / 1000, r = this.localData.pairTrackTime + i;
                        this.localData.pairTrackTime = r;
                        this.localData.lastUpdateTimestamp = a;
                        this.localData.pairCount++;
                        this.localData.lastPairTime;
                        this.localData.lastPairTime = r;
                        e();
                    }
                    else {
                        this.localData.lastUpdateTimestamp = a;
                        this.localData.pairTrackTime = 0;
                        this.localData.pairCount = 1;
                        this.localData.firstPairTime = 0;
                        this.localData.lastPairTime = 0;
                        e();
                    }
                }
                else {
                    this.localData.lastUpdateTimestamp = a;
                    this.localData.pairCount++;
                    this.localData.lastPairTime = this.localData.pairTrackTime;
                    e();
                }
            }
            else
                e();
        }
        else
            e();
    };
    GameEndHighlightTrait.prototype.calculatePairSpeed = function () {
        var t = this.localData.pairCount, e = this.localData.firstPairTime, a = this.localData.lastPairTime;
        if (t <= 1)
            return 0;
        var i = a - e;
        return i <= 0 ? 0 : (t - 1) / i;
    };
    GameEndHighlightTrait.prototype.isCurrentFullCombo = function () {
        return NormalGameData_1.default.getInstance().getHasTriggeredFullCombo();
    };
    GameEndHighlightTrait.prototype.isHardLevel = function (t) {
        return ExtractTool_1.default.getInstance().isHardLevel(t);
    };
    GameEndHighlightTrait.prototype.determineHighlightType = function (t, e, a, i, r, o) {
        if (this.isHardLevel(t))
            return HighlightType.HardLevel;
        if (r > this.getSpeedThreshold())
            return HighlightType.Speed;
        if (e >= this.getScoreThreshold())
            return HighlightType.HighScore;
        var n = a > this.getRateThreshold();
        return n && i > 0 ? HighlightType.RateWithIncrease : n ? HighlightType.RateOnly : o ? HighlightType.FullCombo : HighlightType.General;
    };
    GameEndHighlightTrait.prototype.getHighlightText = function (t, e, a, i, r) {
        var n = this.getHighlightI18NKey(t, r);
        if (!n)
            return "";
        var _o = {};
        _o[HighlightType.HardLevel] = "Hard level completed!";
        _o[HighlightType.Speed] = "Great speed!";
        _o[HighlightType.HighScore] = "High score achieved!";
        _o[HighlightType.RateWithIncrease] = "Great improvement!";
        _o[HighlightType.RateOnly] = "Great performance!";
        _o[HighlightType.FullCombo] = "Full combo!";
        _o[HighlightType.General] = "Great job!";
        var s = _o[t] || "", p = I18NStrings_1.default.get(n, s);
        if (p.includes("{0}"))
            if (t === HighlightType.Speed) {
                var h = (3 * e).toFixed(1);
                p = p.replace("{0}", h);
            }
            else
                t !== HighlightType.RateWithIncrease && t !== HighlightType.RateOnly || (p = p.replace("{0}", a.toFixed(2) + "%"));
        p.includes("{1}") && t === HighlightType.RateWithIncrease && (p = p.replace("{1}", (100 * i).toFixed(1) + "%"));
        return p;
    };
    GameEndHighlightTrait.prototype.createRichText = function (t, e) {
        if (void 0 !== e) {
            var a = e.toFixed(2) + "%";
            return t.replace(a, "<color=#00ff00>" + a + "</color>");
        }
        return t;
    };
    GameEndHighlightTrait.prototype.syncAnimation = function (t, e, a) {
        if (t && e) {
            e.opacity = t.opacity;
            var i = a._animSpeedRate || 1, r = 1.53 * i, o = 0.2 * i;
            cc.tween(e).delay(r).to(o, {
                opacity: 255
            }, {
                easing: "linear"
            }).start();
        }
    };
    GameEndHighlightTrait.prototype.onBeforeWinBhv_start = function (t, e) {
        this.localData.lastUpdateTimestamp > 0 && (this.localData.lastUpdateTimestamp = -1);
        e();
    };
    GameEndHighlightTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var a, i = t.ins, r = t.args[0];
        if (cc.isValid(i)) {
            try {
                var o = NormalGameData_1.default.getInstance(), l = o.getCurrentLevelId();
                if (1 === l) {
                    e();
                    return;
                }
                var n = r.data.settlementScore || 0, c = o.getCurLevelComboMaxLimit() || 0, p = this.isCurrentFullCombo(), u = this.getExperimentType(), m = 3 === u || 4 === u ? this.getMCoefficient1() / this.getMCoefficient2() : void 0, f = RateUtils_1.default.calculateRate(n, c, m), g = this.getEnableRateAdjust() ? RateUtils_1.default.getAdjustedRate(f, p, this.localData.lastFullCombo) : f;
                this.getEnableRateAdjust();
                var T = RateUtils_1.default.calculateRateIncrease(g, this.localData.lastRate), y = this.calculatePairSpeed(), v = this.determineHighlightType(l, n, g, T, y, p), D = i._lblSubtitle, _ = this.getHighlightText(v, y, g, T, u), E = g.toFixed(2) + "%", b = _.includes(E), C = null === (a = null == D ? void 0 : D.node) || void 0 === a ? void 0 : a.parent;
                if (C) {
                    var R = C.getChildByName("rate_richtext");
                    R && (R.active = false);
                }
                if (b) {
                    var H = D.node, x = C.getChildByName("highlight_richtext");
                    if (!x) {
                        x = NodeSkinTool_1.default.createNodeByPath(C, "highlight_richtext");
                        NodeSkinTool_1.default.applyNodeInfo(x, {
                            position: [H.x, H.y],
                            anchor: [H.anchorX, H.anchorY],
                            size: [1000, 160],
                            colorArr: [H.color.r, H.color.g, H.color.b],
                            opacity: H.opacity
                        });
                    }
                    x.active = true;
                    var S = this.createRichText(_, g);
                    NodeSkinTool_1.default.applyRichTextInfo(x, {
                        fontSize: D.fontSize,
                        lineHeight: D.lineHeight,
                        maxWidth: 1000,
                        hAlign: cc.macro.TextAlignment.CENTER,
                        string: S
                    });
                    var G = x.getComponent(cc.RichText);
                    G && D.font && (G.font = D.font);
                    this.syncAnimation(H, x, i);
                    D && cc.isValid(H) && (D.enabled = false);
                }
                else if (D && cc.isValid(D.node)) {
                    if (C) {
                        var j = C.getChildByName("highlight_richtext");
                        j && (j.active = false);
                    }
                    D.node.setContentSize(1000, 160);
                    D.enabled = true;
                    D.string = _;
                }
                this.localData.lastRate = g;
                this.localData.lastFullCombo = p;
            }
            catch (t) { }
            e();
        }
        else
            e();
    };
    GameEndHighlightTrait.prototype.onFailBhv_start = function (t, e) {
        this.localData.lastUpdateTimestamp > 0 && (this.localData.lastUpdateTimestamp = -1);
        e();
    };
    GameEndHighlightTrait.prototype.onGameUI_onBtnSettings = function (t, e) {
        if (this.localData.lastUpdateTimestamp > 0) {
            var a = (Date.now() - this.localData.lastUpdateTimestamp) / 1000;
            a > 0 && a < 5 && (this.localData.pairTrackTime += a);
            this.localData.lastUpdateTimestamp = -2;
        }
        e();
    };
    GameEndHighlightTrait.prototype.onUISetDlg_close = function (t, e) {
        -2 === this.localData.lastUpdateTimestamp && (this.localData.lastUpdateTimestamp = Date.now());
        e();
    };
    GameEndHighlightTrait.traitKey = "GameEndHighlight";
    __decorate([
        mj.traitEvent("GameEndHighLT_getSpeedTh")
    ], GameEndHighlightTrait.prototype, "getSpeedThreshold", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getScoreTh")
    ], GameEndHighlightTrait.prototype, "getScoreThreshold", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getRateTh")
    ], GameEndHighlightTrait.prototype, "getRateThreshold", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getExpType")
    ], GameEndHighlightTrait.prototype, "getExperimentType", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getMCoef1")
    ], GameEndHighlightTrait.prototype, "getMCoefficient1", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getMCoef2")
    ], GameEndHighlightTrait.prototype, "getMCoefficient2", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getEnbAdj")
    ], GameEndHighlightTrait.prototype, "getEnableRateAdjust", null);
    __decorate([
        mj.traitEvent("GameEndHighLT_getI18NKey")
    ], GameEndHighlightTrait.prototype, "getHighlightI18NKey", null);
    GameEndHighlightTrait = __decorate([
        mj.trait,
        mj.class("GameEndHighlightTrait")
    ], GameEndHighlightTrait);
    return GameEndHighlightTrait;
}(Trait_1.default));
exports.default = GameEndHighlightTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2dhbWVFbmRIaWdobGlnaHQvU2NyaXB0cy9HYW1lRW5kSGlnaGxpZ2h0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsc0ZBQWlGO0FBQ2pGLDJFQUFzRTtBQUN0RSxpRkFBNEU7QUFDNUUsd0RBQW1EO0FBQ25ELDhEQUF5RDtBQUN6RCxrREFBeUY7QUFDekYsSUFBWSxhQVNYO0FBVEQsV0FBWSxhQUFhO0lBQ3ZCLGlEQUFRLENBQUE7SUFDUiwyREFBYSxDQUFBO0lBQ2IsbURBQVMsQ0FBQTtJQUNULDJEQUFhLENBQUE7SUFDYix5RUFBb0IsQ0FBQTtJQUNwQix5REFBWSxDQUFBO0lBQ1osMkRBQWEsQ0FBQTtJQUNiLHVEQUFXLENBQUE7QUFDYixDQUFDLEVBVFcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFTeEI7QUFHRDtJQUFtRCx5Q0FBSztJQUF4RDs7SUE4UkEsQ0FBQztJQTNSQyxpREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNqRixDQUFDO0lBRUQsaURBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEYsQ0FBQztJQUVELGdEQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkYsQ0FBQztJQUVELGdEQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7SUFFRCxtREFBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxtREFBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixPQUFPLDJCQUEyQixHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFDRCxzQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pELEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsbURBQW1CLEdBQW5CO1FBQ0UsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLCtCQUFzQixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsRUFBRSxDQUFDLCtCQUFzQixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsMENBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNqRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUNELDBDQUFVLEdBQVY7UUFDRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBQ0QsbURBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLHdCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUMxRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLElBQUksQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQzlCOztnQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN2RCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELGtEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFO29CQUM3QyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFO3dCQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQzt3QkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQzs0QkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7eUJBQ3hDOzs0QkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQzt3QkFDOUMsQ0FBQyxFQUFFLENBQUM7cUJBQ0w7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7d0JBQ3ZDLENBQUMsRUFBRSxDQUFDO3FCQUNMO2lCQUNGOztvQkFBTSxDQUFDLEVBQUUsQ0FBQzthQUNaOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELG9EQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7WUFDMUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1lBQzdCLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFO29CQUM3QyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFO3dCQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxFQUNyRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQzt3QkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQyxDQUFDLEVBQUUsQ0FBQztxQkFDTDt5QkFBTTt3QkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7d0JBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQyxDQUFDLEVBQUUsQ0FBQztxQkFDTDtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7b0JBQzNELENBQUMsRUFBRSxDQUFDO2lCQUNMO2FBQ0Y7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsa0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQzlCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFDaEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsa0RBQWtCLEdBQWxCO1FBQ0UsT0FBTyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakUsQ0FBQztJQUNELDJDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsT0FBTyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsc0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ3hELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUFFLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM3RCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFBRSxPQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDeEksQ0FBQztJQUNELGdEQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDbEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1osRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyx1QkFBdUIsQ0FBQztRQUN0RCxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLHNCQUFzQixDQUFDO1FBQ3JELEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQztRQUMxRCxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLG9CQUFvQixDQUFDO1FBQ2xELEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFBYSxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQ2pCLENBQUMsR0FBRyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUFFLElBQUksQ0FBQyxLQUFLLGFBQWEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3pCOztnQkFBTSxDQUFDLEtBQUssYUFBYSxDQUFDLGdCQUFnQixJQUFJLENBQUMsS0FBSyxhQUFhLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxSCxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxhQUFhLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEgsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsOENBQWMsR0FBZCxVQUFlLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsNkNBQWEsR0FBYixVQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQzNCLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUNaLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDekIsT0FBTyxFQUFFLEdBQUc7YUFDYixFQUFFO2dCQUNELE1BQU0sRUFBRSxRQUFRO2FBQ2pCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNaO0lBQ0gsQ0FBQztJQUNELG9EQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxpREFBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLElBQUk7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsd0JBQWMsQ0FBQyxXQUFXLEVBQUUsRUFDbEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ1gsQ0FBQyxFQUFFLENBQUM7b0JBQ0osT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLEVBQ2pDLENBQUMsR0FBRyxDQUFDLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLEVBQ3JDLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFDN0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUM1QixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQ25GLENBQUMsR0FBRyxtQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNwQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFDakUsQ0FBQyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ2pELENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUNsQixDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUN0QixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFDakIsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JGLElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7aUJBQ3pCO2dCQUNELElBQUksQ0FBQyxFQUFFO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDN0MsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDTixDQUFDLEdBQUcsc0JBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQzt3QkFDM0Qsc0JBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFOzRCQUM1QixRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3BCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs0QkFDOUIsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzs0QkFDakIsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQzNDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTzt5QkFDbkIsQ0FBQyxDQUFDO3FCQUNKO29CQUNELENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEMsc0JBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUU7d0JBQ2hDLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTt3QkFDcEIsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVO3dCQUN4QixRQUFRLEVBQUUsSUFBSTt3QkFDZCxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTTt3QkFDckMsTUFBTSxFQUFFLENBQUM7cUJBQ1YsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztpQkFDM0M7cUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxFQUFFO3dCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDL0MsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQztxQkFDekI7b0JBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNqQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDakIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7aUJBQ2Q7Z0JBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7YUFDbEM7WUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1lBQ2QsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwrQ0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHNEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELGdEQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMvRixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUE1Uk0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQUVyQztRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7a0VBSXpDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO2tFQUl6QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztpRUFJeEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7a0VBSXpDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO2lFQUl4QztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztpRUFJeEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7b0VBSXhDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO29FQUd6QztJQXhDa0IscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQThSekM7SUFBRCw0QkFBQztDQTlSRCxBQThSQyxDQTlSa0QsZUFBSyxHQThSdkQ7a0JBOVJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IE5vcm1hbEdhbWVEYXRhIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvZGF0YS9Ob3JtYWxHYW1lRGF0YSc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgRXh0cmFjdFRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL2V4dHJhY3RRdWVzdGlvbi9FeHRyYWN0VG9vbCc7XG5pbXBvcnQgUmF0ZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvUmF0ZVV0aWxzJztcbmltcG9ydCBOb2RlU2tpblRvb2wgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9Ob2RlU2tpblRvb2wnO1xuaW1wb3J0IHsgRVZUX01TR19LRVlfRVZFTlRfSElERSwgRVZUX01TR19LRVlfRVZFTlRfU0hPVyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQ29uZmlnJztcbmV4cG9ydCBlbnVtIEhpZ2hsaWdodFR5cGUge1xuICBOb25lID0gMCxcbiAgSGFyZExldmVsID0gMSxcbiAgU3BlZWQgPSAyLFxuICBIaWdoU2NvcmUgPSAzLFxuICBSYXRlV2l0aEluY3JlYXNlID0gNCxcbiAgUmF0ZU9ubHkgPSA1LFxuICBGdWxsQ29tYm8gPSA2LFxuICBHZW5lcmFsID0gNyxcbn1cbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiR2FtZUVuZEhpZ2hsaWdodFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRW5kSGlnaGxpZ2h0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiR2FtZUVuZEhpZ2hsaWdodFwiO1xuICBAbWoudHJhaXRFdmVudChcIkdhbWVFbmRIaWdoTFRfZ2V0U3BlZWRUaFwiKVxuICBnZXRTcGVlZFRocmVzaG9sZCgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLl90cmFpdERhdGEuc3BlZWRUaHJlc2hvbGQpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAwLjU7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJHYW1lRW5kSGlnaExUX2dldFNjb3JlVGhcIilcbiAgZ2V0U2NvcmVUaHJlc2hvbGQoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5fdHJhaXREYXRhLnNjb3JlVGhyZXNob2xkKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogNzUwMDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkdhbWVFbmRIaWdoTFRfZ2V0UmF0ZVRoXCIpXG4gIGdldFJhdGVUaHJlc2hvbGQoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5fdHJhaXREYXRhLnJhdGVUaHJlc2hvbGQpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiA4NjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkdhbWVFbmRIaWdoTFRfZ2V0RXhwVHlwZVwiKVxuICBnZXRFeHBlcmltZW50VHlwZSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLl90cmFpdERhdGEuZXhwZXJpbWVudFR5cGUpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAxO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiR2FtZUVuZEhpZ2hMVF9nZXRNQ29lZjFcIilcbiAgZ2V0TUNvZWZmaWNpZW50MSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLl90cmFpdERhdGEubUNvZWZmaWNpZW50MSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDEwMC43MjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkdhbWVFbmRIaWdoTFRfZ2V0TUNvZWYyXCIpXG4gIGdldE1Db2VmZmljaWVudDIoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5fdHJhaXREYXRhLm1Db2VmZmljaWVudDIpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiA3MDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkdhbWVFbmRIaWdoTFRfZ2V0RW5iQWRqXCIpXG4gIGdldEVuYWJsZVJhdGVBZGp1c3QoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5fdHJhaXREYXRhLmVuYWJsZVJhdGVBZGp1c3QpICYmIHZvaWQgMCAhPT0gdCAmJiB0O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiR2FtZUVuZEhpZ2hMVF9nZXRJMThOS2V5XCIpXG4gIGdldEhpZ2hsaWdodEkxOE5LZXkodCkge1xuICAgIHJldHVybiBcIk1haGpvbmdCbGFzdF9HYW1lRW5kX1R5cGVcIiArIHQgKyBcIl9cIiArIChNYXRoLmZsb29yKDExICogTWF0aC5yYW5kb20oKSkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFJhdGUgfHwgKHRoaXMubG9jYWxEYXRhLmxhc3RSYXRlID0gMCk7XG4gICAgdm9pZCAwID09PSB0aGlzLmxvY2FsRGF0YS5sYXN0RnVsbENvbWJvICYmICh0aGlzLmxvY2FsRGF0YS5sYXN0RnVsbENvbWJvID0gZmFsc2UpO1xuICAgIHRoaXMubG9jYWxEYXRhLnBhaXJUcmFja1RpbWUgfHwgKHRoaXMubG9jYWxEYXRhLnBhaXJUcmFja1RpbWUgPSAwKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wIHx8ICh0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wID0gMCk7XG4gICAgdGhpcy5sb2NhbERhdGEuZmlyc3RQYWlyVGltZSB8fCAodGhpcy5sb2NhbERhdGEuZmlyc3RQYWlyVGltZSA9IDApO1xuICAgIHRoaXMubG9jYWxEYXRhLmxhc3RQYWlyVGltZSB8fCAodGhpcy5sb2NhbERhdGEubGFzdFBhaXJUaW1lID0gMCk7XG4gICAgdGhpcy5sb2NhbERhdGEucGFpckNvdW50IHx8ICh0aGlzLmxvY2FsRGF0YS5wYWlyQ291bnQgPSAwKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VWVF9NU0dfS0VZX0VWRU5UX0hJREVdID0gdGhpcy5vbkdhbWVIaWRlLmJpbmQodGhpcyk7XG4gICAgX3RbRVZUX01TR19LRVlfRVZFTlRfU0hPV10gPSB0aGlzLm9uR2FtZVNob3cuYmluZCh0aGlzKTtcbiAgICByZXR1cm4gX3Q7XG4gIH1cbiAgb25HYW1lSGlkZSgpIHtcbiAgICBpZiAodGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWVzdGFtcCA+IDApIHtcbiAgICAgIHZhciB0ID0gKERhdGUubm93KCkgLSB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wKSAvIDEwMDA7XG4gICAgICB0ID4gMCAmJiB0IDwgNSAmJiAodGhpcy5sb2NhbERhdGEucGFpclRyYWNrVGltZSArPSB0KTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXAgPSAtMjtcbiAgICB9XG4gIH1cbiAgb25HYW1lU2hvdygpIHtcbiAgICAtMiA9PT0gdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWVzdGFtcCAmJiAodGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWVzdGFtcCA9IERhdGUubm93KCkpO1xuICB9XG4gIG9uSXB0U2V0THZfbmV3R0NvbXAodCwgZSkge1xuICAgIGlmICgxICE9PSBOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRMZXZlbElkKCkpIHtcbiAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wIDw9IDApIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEucGFpclRyYWNrVGltZSA9IDA7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXAgPSAwO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5maXJzdFBhaXJUaW1lID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFBhaXJUaW1lID0gMDtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEucGFpckNvdW50ID0gMDtcbiAgICAgIH0gZWxzZSB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uSXB0R2FtZVRpbWVfZXhlYyh0LCBlKSB7XG4gICAgaWYgKDEgIT09IE5vcm1hbEdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudExldmVsSWQoKSkge1xuICAgICAgdmFyIGEgPSBEYXRlLm5vdygpO1xuICAgICAgaWYgKC0xICE9PSB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wKSB7XG4gICAgICAgIGlmICgtMiAhPT0gdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWVzdGFtcCkge1xuICAgICAgICAgIGlmICgwICE9PSB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wKSB7XG4gICAgICAgICAgICB2YXIgaSA9IChhIC0gdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWVzdGFtcCkgLyAxMDAwO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEucGFpclRyYWNrVGltZTtcbiAgICAgICAgICAgIGlmIChpID4gMCAmJiBpIDwgNSkge1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5wYWlyVHJhY2tUaW1lICs9IGk7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXAgPSBhO1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXAgPSBhO1xuICAgICAgICAgICAgZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wID0gYTtcbiAgICAgICAgICAgIGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25DbGVhckJodl9jb2xsaXNpb24odCwgZSkge1xuICAgIGlmICgxICE9PSBOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRMZXZlbElkKCkpIHtcbiAgICAgIHZhciBhID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLnBhaXJUcmFja1RpbWU7XG4gICAgICBpZiAoLTEgIT09IHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXApIHtcbiAgICAgICAgaWYgKC0yICE9PSB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wKSB7XG4gICAgICAgICAgaWYgKDAgIT09IHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXApIHtcbiAgICAgICAgICAgIHZhciBpID0gKGEgLSB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wKSAvIDEwMDAsXG4gICAgICAgICAgICAgIHIgPSB0aGlzLmxvY2FsRGF0YS5wYWlyVHJhY2tUaW1lICsgaTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLnBhaXJUcmFja1RpbWUgPSByO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWVzdGFtcCA9IGE7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5wYWlyQ291bnQrKztcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RQYWlyVGltZTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RQYWlyVGltZSA9IHI7XG4gICAgICAgICAgICBlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXAgPSBhO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEucGFpclRyYWNrVGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5wYWlyQ291bnQgPSAxO1xuICAgICAgICAgICAgdGhpcy5sb2NhbERhdGEuZmlyc3RQYWlyVGltZSA9IDA7XG4gICAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0UGFpclRpbWUgPSAwO1xuICAgICAgICAgICAgZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wID0gYTtcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5wYWlyQ291bnQrKztcbiAgICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0UGFpclRpbWUgPSB0aGlzLmxvY2FsRGF0YS5wYWlyVHJhY2tUaW1lO1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGNhbGN1bGF0ZVBhaXJTcGVlZCgpIHtcbiAgICB2YXIgdCA9IHRoaXMubG9jYWxEYXRhLnBhaXJDb3VudCxcbiAgICAgIGUgPSB0aGlzLmxvY2FsRGF0YS5maXJzdFBhaXJUaW1lLFxuICAgICAgYSA9IHRoaXMubG9jYWxEYXRhLmxhc3RQYWlyVGltZTtcbiAgICBpZiAodCA8PSAxKSByZXR1cm4gMDtcbiAgICB2YXIgaSA9IGEgLSBlO1xuICAgIHJldHVybiBpIDw9IDAgPyAwIDogKHQgLSAxKSAvIGk7XG4gIH1cbiAgaXNDdXJyZW50RnVsbENvbWJvKCkge1xuICAgIHJldHVybiBOb3JtYWxHYW1lRGF0YS5nZXRJbnN0YW5jZSgpLmdldEhhc1RyaWdnZXJlZEZ1bGxDb21ibygpO1xuICB9XG4gIGlzSGFyZExldmVsKHQpIHtcbiAgICByZXR1cm4gRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5pc0hhcmRMZXZlbCh0KTtcbiAgfVxuICBkZXRlcm1pbmVIaWdobGlnaHRUeXBlKHQsIGUsIGEsIGksIHIsIG8pIHtcbiAgICBpZiAodGhpcy5pc0hhcmRMZXZlbCh0KSkgcmV0dXJuIEhpZ2hsaWdodFR5cGUuSGFyZExldmVsO1xuICAgIGlmIChyID4gdGhpcy5nZXRTcGVlZFRocmVzaG9sZCgpKSByZXR1cm4gSGlnaGxpZ2h0VHlwZS5TcGVlZDtcbiAgICBpZiAoZSA+PSB0aGlzLmdldFNjb3JlVGhyZXNob2xkKCkpIHJldHVybiBIaWdobGlnaHRUeXBlLkhpZ2hTY29yZTtcbiAgICB2YXIgbiA9IGEgPiB0aGlzLmdldFJhdGVUaHJlc2hvbGQoKTtcbiAgICByZXR1cm4gbiAmJiBpID4gMCA/IEhpZ2hsaWdodFR5cGUuUmF0ZVdpdGhJbmNyZWFzZSA6IG4gPyBIaWdobGlnaHRUeXBlLlJhdGVPbmx5IDogbyA/IEhpZ2hsaWdodFR5cGUuRnVsbENvbWJvIDogSGlnaGxpZ2h0VHlwZS5HZW5lcmFsO1xuICB9XG4gIGdldEhpZ2hsaWdodFRleHQodCwgZSwgYSwgaSwgcikge1xuICAgIHZhciBuID0gdGhpcy5nZXRIaWdobGlnaHRJMThOS2V5KHQsIHIpO1xuICAgIGlmICghbikgcmV0dXJuIFwiXCI7XG4gICAgdmFyIF9vID0ge307XG4gICAgX29bSGlnaGxpZ2h0VHlwZS5IYXJkTGV2ZWxdID0gXCJIYXJkIGxldmVsIGNvbXBsZXRlZCFcIjtcbiAgICBfb1tIaWdobGlnaHRUeXBlLlNwZWVkXSA9IFwiR3JlYXQgc3BlZWQhXCI7XG4gICAgX29bSGlnaGxpZ2h0VHlwZS5IaWdoU2NvcmVdID0gXCJIaWdoIHNjb3JlIGFjaGlldmVkIVwiO1xuICAgIF9vW0hpZ2hsaWdodFR5cGUuUmF0ZVdpdGhJbmNyZWFzZV0gPSBcIkdyZWF0IGltcHJvdmVtZW50IVwiO1xuICAgIF9vW0hpZ2hsaWdodFR5cGUuUmF0ZU9ubHldID0gXCJHcmVhdCBwZXJmb3JtYW5jZSFcIjtcbiAgICBfb1tIaWdobGlnaHRUeXBlLkZ1bGxDb21ib10gPSBcIkZ1bGwgY29tYm8hXCI7XG4gICAgX29bSGlnaGxpZ2h0VHlwZS5HZW5lcmFsXSA9IFwiR3JlYXQgam9iIVwiO1xuICAgIHZhciBzID0gX29bdF0gfHwgXCJcIixcbiAgICAgIHAgPSBJMThOU3RyaW5ncy5nZXQobiwgcyk7XG4gICAgaWYgKHAuaW5jbHVkZXMoXCJ7MH1cIikpIGlmICh0ID09PSBIaWdobGlnaHRUeXBlLlNwZWVkKSB7XG4gICAgICB2YXIgaCA9ICgzICogZSkudG9GaXhlZCgxKTtcbiAgICAgIHAgPSBwLnJlcGxhY2UoXCJ7MH1cIiwgaCk7XG4gICAgfSBlbHNlIHQgIT09IEhpZ2hsaWdodFR5cGUuUmF0ZVdpdGhJbmNyZWFzZSAmJiB0ICE9PSBIaWdobGlnaHRUeXBlLlJhdGVPbmx5IHx8IChwID0gcC5yZXBsYWNlKFwiezB9XCIsIGEudG9GaXhlZCgyKSArIFwiJVwiKSk7XG4gICAgcC5pbmNsdWRlcyhcInsxfVwiKSAmJiB0ID09PSBIaWdobGlnaHRUeXBlLlJhdGVXaXRoSW5jcmVhc2UgJiYgKHAgPSBwLnJlcGxhY2UoXCJ7MX1cIiwgKDEwMCAqIGkpLnRvRml4ZWQoMSkgKyBcIiVcIikpO1xuICAgIHJldHVybiBwO1xuICB9XG4gIGNyZWF0ZVJpY2hUZXh0KHQsIGUpIHtcbiAgICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgICB2YXIgYSA9IGUudG9GaXhlZCgyKSArIFwiJVwiO1xuICAgICAgcmV0dXJuIHQucmVwbGFjZShhLCBcIjxjb2xvcj0jMDBmZjAwPlwiICsgYSArIFwiPC9jb2xvcj5cIik7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIHN5bmNBbmltYXRpb24odCwgZSwgYSkge1xuICAgIGlmICh0ICYmIGUpIHtcbiAgICAgIGUub3BhY2l0eSA9IHQub3BhY2l0eTtcbiAgICAgIHZhciBpID0gYS5fYW5pbVNwZWVkUmF0ZSB8fCAxLFxuICAgICAgICByID0gMS41MyAqIGksXG4gICAgICAgIG8gPSAwLjIgKiBpO1xuICAgICAgY2MudHdlZW4oZSkuZGVsYXkocikudG8obywge1xuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImxpbmVhclwiXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBvbkJlZm9yZVdpbkJodl9zdGFydCh0LCBlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWVzdGFtcCA+IDAgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXAgPSAtMSk7XG4gICAgZSgpO1xuICB9XG4gIG9uV2luVndfc2hvd1dpblZ3KHQsIGUpIHtcbiAgICB2YXIgYSxcbiAgICAgIGkgPSB0LmlucyxcbiAgICAgIHIgPSB0LmFyZ3NbMF07XG4gICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBvID0gTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKSxcbiAgICAgICAgICBsID0gby5nZXRDdXJyZW50TGV2ZWxJZCgpO1xuICAgICAgICBpZiAoMSA9PT0gbCkge1xuICAgICAgICAgIGUoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSByLmRhdGEuc2V0dGxlbWVudFNjb3JlIHx8IDAsXG4gICAgICAgICAgYyA9IG8uZ2V0Q3VyTGV2ZWxDb21ib01heExpbWl0KCkgfHwgMCxcbiAgICAgICAgICBwID0gdGhpcy5pc0N1cnJlbnRGdWxsQ29tYm8oKSxcbiAgICAgICAgICB1ID0gdGhpcy5nZXRFeHBlcmltZW50VHlwZSgpLFxuICAgICAgICAgIG0gPSAzID09PSB1IHx8IDQgPT09IHUgPyB0aGlzLmdldE1Db2VmZmljaWVudDEoKSAvIHRoaXMuZ2V0TUNvZWZmaWNpZW50MigpIDogdm9pZCAwLFxuICAgICAgICAgIGYgPSBSYXRlVXRpbHMuY2FsY3VsYXRlUmF0ZShuLCBjLCBtKSxcbiAgICAgICAgICBnID0gdGhpcy5nZXRFbmFibGVSYXRlQWRqdXN0KCkgPyBSYXRlVXRpbHMuZ2V0QWRqdXN0ZWRSYXRlKGYsIHAsIHRoaXMubG9jYWxEYXRhLmxhc3RGdWxsQ29tYm8pIDogZjtcbiAgICAgICAgdGhpcy5nZXRFbmFibGVSYXRlQWRqdXN0KCk7XG4gICAgICAgIHZhciBUID0gUmF0ZVV0aWxzLmNhbGN1bGF0ZVJhdGVJbmNyZWFzZShnLCB0aGlzLmxvY2FsRGF0YS5sYXN0UmF0ZSksXG4gICAgICAgICAgeSA9IHRoaXMuY2FsY3VsYXRlUGFpclNwZWVkKCksXG4gICAgICAgICAgdiA9IHRoaXMuZGV0ZXJtaW5lSGlnaGxpZ2h0VHlwZShsLCBuLCBnLCBULCB5LCBwKSxcbiAgICAgICAgICBEID0gaS5fbGJsU3VidGl0bGUsXG4gICAgICAgICAgXyA9IHRoaXMuZ2V0SGlnaGxpZ2h0VGV4dCh2LCB5LCBnLCBULCB1KSxcbiAgICAgICAgICBFID0gZy50b0ZpeGVkKDIpICsgXCIlXCIsXG4gICAgICAgICAgYiA9IF8uaW5jbHVkZXMoRSksXG4gICAgICAgICAgQyA9IG51bGwgPT09IChhID0gbnVsbCA9PSBEID8gdm9pZCAwIDogRC5ub2RlKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLnBhcmVudDtcbiAgICAgICAgaWYgKEMpIHtcbiAgICAgICAgICB2YXIgUiA9IEMuZ2V0Q2hpbGRCeU5hbWUoXCJyYXRlX3JpY2h0ZXh0XCIpO1xuICAgICAgICAgIFIgJiYgKFIuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgdmFyIEggPSBELm5vZGUsXG4gICAgICAgICAgICB4ID0gQy5nZXRDaGlsZEJ5TmFtZShcImhpZ2hsaWdodF9yaWNodGV4dFwiKTtcbiAgICAgICAgICBpZiAoIXgpIHtcbiAgICAgICAgICAgIHggPSBOb2RlU2tpblRvb2wuY3JlYXRlTm9kZUJ5UGF0aChDLCBcImhpZ2hsaWdodF9yaWNodGV4dFwiKTtcbiAgICAgICAgICAgIE5vZGVTa2luVG9vbC5hcHBseU5vZGVJbmZvKHgsIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IFtILngsIEgueV0sXG4gICAgICAgICAgICAgIGFuY2hvcjogW0guYW5jaG9yWCwgSC5hbmNob3JZXSxcbiAgICAgICAgICAgICAgc2l6ZTogWzEwMDAsIDE2MF0sXG4gICAgICAgICAgICAgIGNvbG9yQXJyOiBbSC5jb2xvci5yLCBILmNvbG9yLmcsIEguY29sb3IuYl0sXG4gICAgICAgICAgICAgIG9wYWNpdHk6IEgub3BhY2l0eVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHguYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgUyA9IHRoaXMuY3JlYXRlUmljaFRleHQoXywgZyk7XG4gICAgICAgICAgTm9kZVNraW5Ub29sLmFwcGx5UmljaFRleHRJbmZvKHgsIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiBELmZvbnRTaXplLFxuICAgICAgICAgICAgbGluZUhlaWdodDogRC5saW5lSGVpZ2h0LFxuICAgICAgICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgICAgICAgICBoQWxpZ246IGNjLm1hY3JvLlRleHRBbGlnbm1lbnQuQ0VOVEVSLFxuICAgICAgICAgICAgc3RyaW5nOiBTXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIEcgPSB4LmdldENvbXBvbmVudChjYy5SaWNoVGV4dCk7XG4gICAgICAgICAgRyAmJiBELmZvbnQgJiYgKEcuZm9udCA9IEQuZm9udCk7XG4gICAgICAgICAgdGhpcy5zeW5jQW5pbWF0aW9uKEgsIHgsIGkpO1xuICAgICAgICAgIEQgJiYgY2MuaXNWYWxpZChIKSAmJiAoRC5lbmFibGVkID0gZmFsc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKEQgJiYgY2MuaXNWYWxpZChELm5vZGUpKSB7XG4gICAgICAgICAgaWYgKEMpIHtcbiAgICAgICAgICAgIHZhciBqID0gQy5nZXRDaGlsZEJ5TmFtZShcImhpZ2hsaWdodF9yaWNodGV4dFwiKTtcbiAgICAgICAgICAgIGogJiYgKGouYWN0aXZlID0gZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBELm5vZGUuc2V0Q29udGVudFNpemUoMTAwMCwgMTYwKTtcbiAgICAgICAgICBELmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIEQuc3RyaW5nID0gXztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0UmF0ZSA9IGc7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RGdWxsQ29tYm8gPSBwO1xuICAgICAgfSBjYXRjaCAodCkge31cbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRmFpbEJodl9zdGFydCh0LCBlKSB7XG4gICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWVzdGFtcCA+IDAgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXAgPSAtMSk7XG4gICAgZSgpO1xuICB9XG4gIG9uR2FtZVVJX29uQnRuU2V0dGluZ3ModCwgZSkge1xuICAgIGlmICh0aGlzLmxvY2FsRGF0YS5sYXN0VXBkYXRlVGltZXN0YW1wID4gMCkge1xuICAgICAgdmFyIGEgPSAoRGF0ZS5ub3coKSAtIHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXApIC8gMTAwMDtcbiAgICAgIGEgPiAwICYmIGEgPCA1ICYmICh0aGlzLmxvY2FsRGF0YS5wYWlyVHJhY2tUaW1lICs9IGEpO1xuICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFVwZGF0ZVRpbWVzdGFtcCA9IC0yO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25VSVNldERsZ19jbG9zZSh0LCBlKSB7XG4gICAgLTIgPT09IHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXAgJiYgKHRoaXMubG9jYWxEYXRhLmxhc3RVcGRhdGVUaW1lc3RhbXAgPSBEYXRlLm5vdygpKTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=