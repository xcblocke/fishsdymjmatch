"use strict";
cc._RF.push(module, '086f1phmUNMfqtj3+tvYPAX', 'AddPropOff3hBehavior');
// Scripts/AddPropOff3hBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPropOff3hBehavior = void 0;
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var AddPropOff3hBehavior = /** @class */ (function (_super) {
    __extends(AddPropOff3hBehavior, _super);
    function AddPropOff3hBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddPropOff3hBehavior.prototype.start = function (e) {
        var t = e.data, o = t.action, n = t.buttonName, i = t.delayTime, a = t.timeoutButton;
        switch (o) {
            case "startTimer":
            case "resetTimer":
                this.handleStartTimer(null != i ? i : 15, a);
                break;
            case "start":
                n && this.handleDelayedStart(n);
                break;
            case "stop":
                n && this.stopSpineEffect(n);
                break;
            case "stopAll":
                this.handleStopAll();
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    AddPropOff3hBehavior.prototype.getBottomRoot = function () {
        var e = this.context.gameView;
        return (null == e ? void 0 : e.bottomRootNode) || null;
    };
    AddPropOff3hBehavior.prototype.handleDelayedStart = function (e) {
        var t, o = this, n = this.getBottomRoot();
        if (n && cc.isValid(n)) {
            var i = n.getChildByName(e);
            i && cc.isValid(i) && this.setButtonNumVisible(i, false);
        }
        var r = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.timerComponent;
        if (r) {
            r.doOnce(0.1, function () {
                o.playSpineEffect(e);
            }, this.context.gameView);
        }
        else {
            this.playSpineEffect(e);
        }
    };
    AddPropOff3hBehavior.prototype.handleStartTimer = function (e, t) {
        var o, n = this;
        this.clearTimer();
        var i = null === (o = this.context.gameView) || void 0 === o ? void 0 : o.timerComponent, r = this.getBottomRoot();
        if (i && r) {
            var a = function a() {
                r.__addPropOff3hTimerCb__ = null;
                if (t) {
                    n.playSpineEffect(t);
                    mj.triggerInternalEvent("AddPropOff3h_timeout", null, [t]);
                }
            };
            r.__addPropOff3hTimerCb__ = a;
            i.doOnce(e, a, r);
        }
    };
    AddPropOff3hBehavior.prototype.clearTimer = function () {
        var e, t = null === (e = this.context.gameView) || void 0 === e ? void 0 : e.timerComponent, o = this.getBottomRoot();
        if (t && o) {
            var n = o.__addPropOff3hTimerCb__;
            if (n) {
                t.clearTimer(n);
                o.__addPropOff3hTimerCb__ = null;
            }
        }
    };
    AddPropOff3hBehavior.prototype.handleStopAll = function () {
        this.clearTimer();
        this.stopSpineEffect("btnPropHint");
        this.stopSpineEffect("btnShuffle");
    };
    AddPropOff3hBehavior.prototype.playSpineEffect = function (e) {
        var t = this.getBottomRoot();
        if (t && cc.isValid(t)) {
            var o = t.getChildByName(e);
            if (o && cc.isValid(o)) {
                this.setButtonNumVisible(o, false);
                var n = o.getChildByName("__propGuideSpine__");
                if (n && cc.isValid(n))
                    n.active = true;
                else {
                    var i = new cc.Node("__propGuideSpine__");
                    i.parent = o;
                    i.setPosition(0, 0);
                    var r = BaseSpine_1.default.refreshWithNode(i, "spine/gameplay_propGuide", "r_addPropOfft3hTrait");
                    r.queueAnimation("in", 1);
                    r.queueAnimation("init", -1);
                }
            }
        }
    };
    AddPropOff3hBehavior.prototype.stopSpineEffect = function (e) {
        var t = this.getBottomRoot();
        if (t && cc.isValid(t)) {
            var o = t.getChildByName(e);
            if (o && cc.isValid(o)) {
                this.setButtonNumVisible(o, true);
                var n = o.getChildByName("__propGuideSpine__");
                if (n && cc.isValid(n)) {
                    var i = n.getComponent(BaseSpine_1.default);
                    if (i) {
                        i.clearQueue();
                        i.clear(true);
                    }
                    n.destroy();
                }
            }
        }
    };
    AddPropOff3hBehavior.prototype.setButtonNumVisible = function (e, t) {
        var o = e.getChildByName("propCornerItem");
        o && cc.isValid(o) && (o.active = t);
    };
    return AddPropOff3hBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddPropOff3hBehavior = AddPropOff3hBehavior;

cc._RF.pop();