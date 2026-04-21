"use strict";
cc._RF.push(module, '6f1c5+prwJJm7xv+gTig42V', 'ClassicLoseView');
// subpackages/l_classicOver/Scripts/ClassicLoseView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = require("../../../Scripts/component/Adapter");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var SimulatorEvent_1 = require("../../../Scripts/core/simulator/events/SimulatorEvent");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ClassicLoseView = /** @class */ (function (_super) {
    __extends(ClassicLoseView, _super);
    function ClassicLoseView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgNode = null;
        _this.effectLight = null;
        _this.effectScore = null;
        _this.effectParticle = null;
        _this.title = null;
        _this.curScoreDesc = null;
        _this.bestScoreDesc = null;
        _this.curScoreNode = null;
        _this.bestScoreNode = null;
        _this.nextBtn = null;
        _this.data = null;
        _this.spineLight = null;
        _this.spineScore = null;
        _this.spineParticle = null;
        _this.isInit = false;
        _this.isPlayed = false;
        _this.scoreInterval = -1;
        return _this;
    }
    ClassicLoseView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponent();
        this.OnButtonClick(this.nextBtn, this.onNextBtnClick.bind(this));
        this.tryPlayAction();
    };
    ClassicLoseView.prototype.initComponent = function () {
        if (!this.isInit) {
            Adapter_1.default.adjustForType(this.effectLight, Adapter_1.AdjustTpye.TOP);
            this.spineLight = this.effectLight.addComponent(BaseSpine_1.default);
            this.spineScore = this.effectScore.addComponent(BaseSpine_1.default);
            this.spineParticle = this.effectParticle.addComponent(BaseSpine_1.default);
            this.spineLight.markReady("");
            this.spineScore.markReady("");
            this.spineParticle.markReady("");
            this.hookNode();
            this.isInit = true;
        }
    };
    ClassicLoseView.prototype.hookNode = function () {
        var e = this;
        this.title.setPosition(cc.Vec3.ZERO);
        this.curScoreDesc.setPosition(cc.Vec3.ZERO);
        this.curScoreNode.setPosition(cc.Vec3.ZERO);
        this.bestScoreDesc.setPosition(cc.Vec3.ZERO);
        this.bestScoreNode.setPosition(cc.Vec3.ZERO);
        this.nextBtn.setPosition(cc.Vec3.ZERO);
        this.spineScore.attachNodeWithAlpha("hook_gameOver", "slot_gameOver", function () {
            return e.title;
        });
        this.spineScore.attachNodeWithAlpha("hook_txt_score", "slot_txt_score", function () {
            return e.curScoreDesc;
        });
        this.spineScore.attachNodeWithAlpha("hook_num_score", "slot_num_score", function () {
            return e.curScoreNode;
        });
        this.spineScore.attachNodeWithAlpha("hook_txt_bestScore", "slot_txt_bestScore", function () {
            return e.bestScoreDesc;
        });
        this.spineScore.attachNodeWithAlpha("hook_num_bestScore", "slot_bestScore", function () {
            return e.bestScoreNode;
        });
        this.spineScore.attachNode("hook_btn", function () {
            return e.nextBtn;
        });
    };
    ClassicLoseView.prototype.tryPlayAction = function () {
        if (this.data && cc.isValid(this.effectLight) && !this.isPlayed) {
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicLose);
            this.startPlayAction();
            this.isPlayed = true;
        }
    };
    ClassicLoseView.prototype.showView = function (e) {
        this.data = e;
        this.tryPlayAction();
    };
    ClassicLoseView.prototype.onNextBtnClick = function () {
        this.delegate.close();
        mj.EventManager.emit(SimulatorEvent_1.EVT_MSG_KEY_SIMULATOR_NEXTLEVEL);
    };
    ClassicLoseView.prototype.startPlayAction = function () {
        var e = this;
        this.bgNode.opacity = 0;
        this.curScoreDesc.active = false;
        this.curScoreNode.active = false;
        this.bestScoreDesc.active = false;
        this.bestScoreNode.active = false;
        this.title.active = false;
        this.nextBtn.active = false;
        this.spineScore.node.active = false;
        this.spineParticle.node.active = false;
        this.spineLight.node.active = false;
        this.curScoreNode.getComponent(cc.Label).string = "0";
        this.bestScoreNode.getComponent(cc.Label).string = "" + this.data.bestScore;
        cc.tween(this.bgNode).to(0.2, {
            opacity: 190
        }).call(function () {
            e.spineAnim();
        }).start();
    };
    ClassicLoseView.prototype.spineAnim = function () {
        var e = this;
        this.spineScore.node.active = true;
        this.spineParticle.node.active = true;
        this.spineLight.node.active = true;
        this.spineLight.setAnimation("in", 1, function () {
            cc.isValid(e.spineLight) && e.spineLight.setAnimation("init", -1);
        });
        var t = this.spineScore.getSkeleton();
        t.setEventListener(null);
        t.setEventListener(function (t, i) {
            "btn" === i.data.name && (e.nextBtn.active = true);
            "gameOver" === i.data.name && (e.title.active = true);
            if ("score" === i.data.name) {
                e.curScoreDesc.active = true;
                e.curScoreNode.active = true;
                e.playScoreNumberAnim();
            }
            if ("bestScore" === i.data.name) {
                e.bestScoreDesc.active = true;
                e.bestScoreNode.active = true;
            }
        });
        this.spineScore.setAnimation("in", 1, function () {
            cc.isValid(e.spineScore) && e.spineScore.setAnimation("init", -1);
        });
        this.spineParticle.setAnimation("in", 1, function () {
            cc.isValid(e.spineParticle) && e.spineParticle.setAnimation("init", -1);
        });
    };
    ClassicLoseView.prototype.clearScoreInterval = function () {
        if (this.scoreInterval > 0) {
            window['clearInterval'](this.scoreInterval);
            this.scoreInterval = -1;
        }
    };
    ClassicLoseView.prototype.playScoreNumberAnim = function () {
        var e = this;
        if (cc.isValid(this.curScoreNode)) {
            this.clearScoreInterval();
            var t = 3, i = this.data.curScore;
            t *= Math.floor(i / 400) + 1;
            var o = 0, s = 0, n = this.curScoreNode.getComponent(cc.Label);
            n.string = "" + s;
            this.scoreInterval = window['setInterval'](function () {
                if (cc.isValid(e.curScoreNode) && cc.isValid(n)) {
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
    ClassicLoseView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.clearScoreInterval();
    };
    ClassicLoseView.prefabUrl = "prefabs/ClassicLose";
    __decorate([
        mj.node("bg")
    ], ClassicLoseView.prototype, "bgNode", void 0);
    __decorate([
        mj.node("EffectLight")
    ], ClassicLoseView.prototype, "effectLight", void 0);
    __decorate([
        mj.node("EffectScore")
    ], ClassicLoseView.prototype, "effectScore", void 0);
    __decorate([
        mj.node("EffectParticle")
    ], ClassicLoseView.prototype, "effectParticle", void 0);
    __decorate([
        mj.node("Title")
    ], ClassicLoseView.prototype, "title", void 0);
    __decorate([
        mj.node("CurScoreDesc")
    ], ClassicLoseView.prototype, "curScoreDesc", void 0);
    __decorate([
        mj.node("BestScoreDesc")
    ], ClassicLoseView.prototype, "bestScoreDesc", void 0);
    __decorate([
        mj.node("CurScore")
    ], ClassicLoseView.prototype, "curScoreNode", void 0);
    __decorate([
        mj.node("BestScore")
    ], ClassicLoseView.prototype, "bestScoreNode", void 0);
    __decorate([
        mj.node("NextBtn")
    ], ClassicLoseView.prototype, "nextBtn", void 0);
    ClassicLoseView = __decorate([
        mj.class
    ], ClassicLoseView);
    return ClassicLoseView;
}(UIView_1.default));
exports.default = ClassicLoseView;

cc._RF.pop();