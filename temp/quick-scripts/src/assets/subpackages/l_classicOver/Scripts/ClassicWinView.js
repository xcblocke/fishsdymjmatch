"use strict";
cc._RF.push(module, '16597RvsZFLFrjz0VtqOt0s', 'ClassicWinView');
// subpackages/l_classicOver/Scripts/ClassicWinView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ClassicOverTypes_1 = require("./ClassicOverTypes");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var SimulatorEvent_1 = require("../../../Scripts/core/simulator/events/SimulatorEvent");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Adapter_1 = require("../../../Scripts/component/Adapter");
var s;
var n;
(s = {})[ClassicOverTypes_1.EClassicWinType.Best] = "in_bestScore";
s[ClassicOverTypes_1.EClassicWinType.Today] = "in_todayScore";
s[ClassicOverTypes_1.EClassicWinType.Week] = "in_weekScore";
var y = s;
(n = {})[ClassicOverTypes_1.EClassicWinType.Best] = ["Best Score", "classic_bestscore_des"];
n[ClassicOverTypes_1.EClassicWinType.Today] = ["Today Best", "classic_todaybest"];
n[ClassicOverTypes_1.EClassicWinType.Week] = ["Week Best", "classic_weekbest"];
var v = n;
var ClassicWinView = /** @class */ (function (_super) {
    __extends(ClassicWinView, _super);
    function ClassicWinView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgNode = null;
        _this.effectLight = null;
        _this.effectScore = null;
        _this.effectParticle = null;
        _this.effectBomb = null;
        _this.title = null;
        _this.bestScoreDesc = null;
        _this.bestScoreNode = null;
        _this.nextBtn = null;
        _this.data = null;
        _this.spineLight = null;
        _this.spineScore = null;
        _this.spineParticle = null;
        _this.spineBomb = null;
        _this.isInit = false;
        _this.isPlayed = false;
        _this.scoreInterval = -1;
        return _this;
    }
    ClassicWinView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponent();
        this.OnButtonClick(this.nextBtn, this.onNextBtnClick.bind(this));
        this.tryPlayAction();
    };
    ClassicWinView.prototype.initComponent = function () {
        if (!this.isInit) {
            Adapter_1.default.adjustForType(this.effectLight, Adapter_1.AdjustTpye.TOP);
            this.spineLight = this.effectLight.addComponent(BaseSpine_1.default);
            this.spineScore = this.effectScore.addComponent(BaseSpine_1.default);
            this.spineParticle = this.effectParticle.addComponent(BaseSpine_1.default);
            this.spineBomb = this.effectBomb.addComponent(BaseSpine_1.default);
            this.spineLight.markReady("");
            this.spineScore.markReady("");
            this.spineParticle.markReady("");
            this.spineBomb.markReady("");
            this.hookNode();
            this.isInit = true;
        }
    };
    ClassicWinView.prototype.hookNode = function () {
        var e = this;
        this.title.setPosition(cc.Vec3.ZERO);
        this.bestScoreDesc.setPosition(cc.Vec3.ZERO);
        this.bestScoreNode.setPosition(cc.Vec3.ZERO);
        this.nextBtn.setPosition(cc.Vec3.ZERO);
        this.spineScore.attachNodeWithAlpha("hook_txt_best", "slot_txt_best", function () {
            return e.title;
        });
        this.spineScore.attachNodeWithAlpha("hook_txt_bestScore", "slot_txt_bestScore", function () {
            return e.bestScoreDesc;
        });
        this.spineScore.attachNodeWithAlpha("hook_num_bestScore", "slot_num_bestScore", function () {
            return e.bestScoreNode;
        });
        this.spineScore.attachNode("hook_btn", function () {
            return e.nextBtn;
        });
    };
    ClassicWinView.prototype.tryPlayAction = function () {
        if (this.data && this.isInit && !this.isPlayed) {
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicWin);
            this.startPlayAction();
            this.isPlayed = true;
        }
    };
    ClassicWinView.prototype.showView = function (e) {
        this.data = e;
        this.tryPlayAction();
    };
    ClassicWinView.prototype.onNextBtnClick = function () {
        this.delegate.close();
        mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
    };
    ClassicWinView.prototype.startPlayAction = function () {
        var e = this;
        this.bgNode.opacity = 0;
        this.bestScoreDesc.active = false;
        this.bestScoreNode.active = false;
        this.title.active = false;
        this.nextBtn.active = false;
        this.spineScore.node.active = false;
        this.spineBomb.node.active = false;
        this.spineParticle.node.active = false;
        this.spineLight.node.active = false;
        var t = this.data.winType, i = v[t][0], o = v[t][1];
        I18NStrings_1.default.setText(this.title, i, o);
        this.bestScoreNode.getComponent(cc.Label).string = "0";
        cc.tween(this.bgNode).to(0.2, {
            opacity: 190
        }).call(function () {
            e.spineAnim();
        }).start();
    };
    ClassicWinView.prototype.spineAnim = function () {
        var e = this;
        this.spineScore.node.active = true;
        this.spineBomb.node.active = true;
        this.spineParticle.node.active = true;
        this.spineLight.node.active = true;
        this.spineLight.setAnimation("in", 1, function () {
            cc.isValid(e.spineLight) && e.spineLight.setAnimation("init", -1);
        });
        var t = this.spineScore.getSkeleton();
        t.setEventListener(null);
        t.setEventListener(function (t, i) {
            "btn" === i.data.name && (e.nextBtn.active = true);
            "best" === i.data.name && (e.title.active = true);
            if ("bestScore" === i.data.name) {
                e.bestScoreDesc.active = true;
                e.bestScoreNode.active = true;
                e.playScoreNumberAnim();
            }
        });
        var i = this.data.winType;
        this.spineScore.setAnimation(y[i], 1, null);
        this.spineBomb.setAnimation("in", 1, null);
        this.spineParticle.setAnimation("in", 1, function () {
            cc.isValid(e.spineParticle) && e.spineParticle.setAnimation("init", -1);
        });
    };
    ClassicWinView.prototype.clearScoreInterval = function () {
        if (this.scoreInterval > 0) {
            window['clearInterval'](this.scoreInterval);
            this.scoreInterval = -1;
        }
    };
    ClassicWinView.prototype.playScoreNumberAnim = function () {
        var e = this;
        if (cc.isValid(this.bestScoreNode)) {
            this.clearScoreInterval();
            var t = 3, i = this.data.curScore;
            t *= Math.floor(i / 400) + 1;
            var o = 0, s = 0, n = this.bestScoreNode.getComponent(cc.Label);
            n.string = "" + s;
            this.scoreInterval = window['setInterval'](function () {
                if (cc.isValid(e.bestScoreNode) && cc.isValid(n)) {
                    if (i > s + t) {
                        s += t;
                        n.string = "" + s;
                    }
                    else {
                        n.string = "" + i;
                        e.clearScoreInterval();
                    }
                    ++o % 5 == 0 && mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicScoreRoll);
                }
                else
                    e.clearScoreInterval();
            }, 10, this);
        }
    };
    ClassicWinView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.clearScoreInterval();
    };
    ClassicWinView.prefabUrl = "prefabs/ClassicWin";
    __decorate([
        mj.node("bg")
    ], ClassicWinView.prototype, "bgNode", void 0);
    __decorate([
        mj.node("EffectLight")
    ], ClassicWinView.prototype, "effectLight", void 0);
    __decorate([
        mj.node("EffectScore")
    ], ClassicWinView.prototype, "effectScore", void 0);
    __decorate([
        mj.node("EffectParticle")
    ], ClassicWinView.prototype, "effectParticle", void 0);
    __decorate([
        mj.node("EffectBomb")
    ], ClassicWinView.prototype, "effectBomb", void 0);
    __decorate([
        mj.node("Title")
    ], ClassicWinView.prototype, "title", void 0);
    __decorate([
        mj.node("BestScoreDesc")
    ], ClassicWinView.prototype, "bestScoreDesc", void 0);
    __decorate([
        mj.node("BestScore")
    ], ClassicWinView.prototype, "bestScoreNode", void 0);
    __decorate([
        mj.node("NextBtn")
    ], ClassicWinView.prototype, "nextBtn", void 0);
    ClassicWinView = __decorate([
        mj.class
    ], ClassicWinView);
    return ClassicWinView;
}(UIView_1.default));
exports.default = ClassicWinView;

cc._RF.pop();