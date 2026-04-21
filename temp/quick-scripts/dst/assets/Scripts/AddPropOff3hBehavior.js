
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AddPropOff3hBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FkZFByb3BPZmYzaEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FLDhEQUE2RDtBQUM3RCwwREFBcUQ7QUFDckQ7SUFBMEMsd0NBQWlCO0lBQTNEOztJQXVIQSxDQUFDO0lBdEhDLG9DQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDdEIsUUFBUSxDQUFDLEVBQUU7WUFDVCxLQUFLLFlBQVksQ0FBQztZQUNsQixLQUFLLFlBQVk7Z0JBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNO1lBQ1IsS0FBSyxPQUFPO2dCQUNWLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsQ0FBQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCw0Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDOUIsT0FBTyxDQUFDLElBQUks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Q0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0F2SEEsQUF1SEMsQ0F2SHlDLHFDQUFpQixHQXVIMUQ7QUF2SFksb0RBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL2Jhc2UvR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmV4cG9ydCBjbGFzcyBBZGRQcm9wT2ZmM2hCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gZS5kYXRhLFxuICAgICAgbyA9IHQuYWN0aW9uLFxuICAgICAgbiA9IHQuYnV0dG9uTmFtZSxcbiAgICAgIGkgPSB0LmRlbGF5VGltZSxcbiAgICAgIGEgPSB0LnRpbWVvdXRCdXR0b247XG4gICAgc3dpdGNoIChvKSB7XG4gICAgICBjYXNlIFwic3RhcnRUaW1lclwiOlxuICAgICAgY2FzZSBcInJlc2V0VGltZXJcIjpcbiAgICAgICAgdGhpcy5oYW5kbGVTdGFydFRpbWVyKG51bGwgIT0gaSA/IGkgOiAxNSwgYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0YXJ0XCI6XG4gICAgICAgIG4gJiYgdGhpcy5oYW5kbGVEZWxheWVkU3RhcnQobik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0b3BcIjpcbiAgICAgICAgbiAmJiB0aGlzLnN0b3BTcGluZUVmZmVjdChuKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3RvcEFsbFwiOlxuICAgICAgICB0aGlzLmhhbmRsZVN0b3BBbGwoKTtcbiAgICB9XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBnZXRCb3R0b21Sb290KCkge1xuICAgIHZhciBlID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3O1xuICAgIHJldHVybiAobnVsbCA9PSBlID8gdm9pZCAwIDogZS5ib3R0b21Sb290Tm9kZSkgfHwgbnVsbDtcbiAgfVxuICBoYW5kbGVEZWxheWVkU3RhcnQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyA9IHRoaXMsXG4gICAgICBuID0gdGhpcy5nZXRCb3R0b21Sb290KCk7XG4gICAgaWYgKG4gJiYgY2MuaXNWYWxpZChuKSkge1xuICAgICAgdmFyIGkgPSBuLmdldENoaWxkQnlOYW1lKGUpO1xuICAgICAgaSAmJiBjYy5pc1ZhbGlkKGkpICYmIHRoaXMuc2V0QnV0dG9uTnVtVmlzaWJsZShpLCBmYWxzZSk7XG4gICAgfVxuICAgIHZhciByID0gbnVsbCA9PT0gKHQgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQudGltZXJDb21wb25lbnQ7XG4gICAgaWYgKHIpIHtcbiAgICAgIHIuZG9PbmNlKDAuMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBvLnBsYXlTcGluZUVmZmVjdChlKTtcbiAgICAgIH0sIHRoaXMuY29udGV4dC5nYW1lVmlldyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGxheVNwaW5lRWZmZWN0KGUpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVTdGFydFRpbWVyKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4gPSB0aGlzO1xuICAgIHRoaXMuY2xlYXJUaW1lcigpO1xuICAgIHZhciBpID0gbnVsbCA9PT0gKG8gPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8udGltZXJDb21wb25lbnQsXG4gICAgICByID0gdGhpcy5nZXRCb3R0b21Sb290KCk7XG4gICAgaWYgKGkgJiYgcikge1xuICAgICAgdmFyIGEgPSBmdW5jdGlvbiBhKCkge1xuICAgICAgICByLl9fYWRkUHJvcE9mZjNoVGltZXJDYl9fID0gbnVsbDtcbiAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICBuLnBsYXlTcGluZUVmZmVjdCh0KTtcbiAgICAgICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkFkZFByb3BPZmYzaF90aW1lb3V0XCIsIG51bGwsIFt0XSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByLl9fYWRkUHJvcE9mZjNoVGltZXJDYl9fID0gYTtcbiAgICAgIGkuZG9PbmNlKGUsIGEsIHIpO1xuICAgIH1cbiAgfVxuICBjbGVhclRpbWVyKCkge1xuICAgIHZhciBlLFxuICAgICAgdCA9IG51bGwgPT09IChlID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnRpbWVyQ29tcG9uZW50LFxuICAgICAgbyA9IHRoaXMuZ2V0Qm90dG9tUm9vdCgpO1xuICAgIGlmICh0ICYmIG8pIHtcbiAgICAgIHZhciBuID0gby5fX2FkZFByb3BPZmYzaFRpbWVyQ2JfXztcbiAgICAgIGlmIChuKSB7XG4gICAgICAgIHQuY2xlYXJUaW1lcihuKTtcbiAgICAgICAgby5fX2FkZFByb3BPZmYzaFRpbWVyQ2JfXyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGhhbmRsZVN0b3BBbGwoKSB7XG4gICAgdGhpcy5jbGVhclRpbWVyKCk7XG4gICAgdGhpcy5zdG9wU3BpbmVFZmZlY3QoXCJidG5Qcm9wSGludFwiKTtcbiAgICB0aGlzLnN0b3BTcGluZUVmZmVjdChcImJ0blNodWZmbGVcIik7XG4gIH1cbiAgcGxheVNwaW5lRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0Qm90dG9tUm9vdCgpO1xuICAgIGlmICh0ICYmIGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIHZhciBvID0gdC5nZXRDaGlsZEJ5TmFtZShlKTtcbiAgICAgIGlmIChvICYmIGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgdGhpcy5zZXRCdXR0b25OdW1WaXNpYmxlKG8sIGZhbHNlKTtcbiAgICAgICAgdmFyIG4gPSBvLmdldENoaWxkQnlOYW1lKFwiX19wcm9wR3VpZGVTcGluZV9fXCIpO1xuICAgICAgICBpZiAobiAmJiBjYy5pc1ZhbGlkKG4pKSBuLmFjdGl2ZSA9IHRydWU7ZWxzZSB7XG4gICAgICAgICAgdmFyIGkgPSBuZXcgY2MuTm9kZShcIl9fcHJvcEd1aWRlU3BpbmVfX1wiKTtcbiAgICAgICAgICBpLnBhcmVudCA9IG87XG4gICAgICAgICAgaS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICB2YXIgciA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUoaSwgXCJzcGluZS9nYW1lcGxheV9wcm9wR3VpZGVcIiwgXCJyX2FkZFByb3BPZmZ0M2hUcmFpdFwiKTtcbiAgICAgICAgICByLnF1ZXVlQW5pbWF0aW9uKFwiaW5cIiwgMSk7XG4gICAgICAgICAgci5xdWV1ZUFuaW1hdGlvbihcImluaXRcIiwgLTEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHN0b3BTcGluZUVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmdldEJvdHRvbVJvb3QoKTtcbiAgICBpZiAodCAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICB2YXIgbyA9IHQuZ2V0Q2hpbGRCeU5hbWUoZSk7XG4gICAgICBpZiAobyAmJiBjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIHRoaXMuc2V0QnV0dG9uTnVtVmlzaWJsZShvLCB0cnVlKTtcbiAgICAgICAgdmFyIG4gPSBvLmdldENoaWxkQnlOYW1lKFwiX19wcm9wR3VpZGVTcGluZV9fXCIpO1xuICAgICAgICBpZiAobiAmJiBjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgICAgdmFyIGkgPSBuLmdldENvbXBvbmVudChCYXNlU3BpbmUpO1xuICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICBpLmNsZWFyUXVldWUoKTtcbiAgICAgICAgICAgIGkuY2xlYXIodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG4uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldEJ1dHRvbk51bVZpc2libGUoZSwgdCkge1xuICAgIHZhciBvID0gZS5nZXRDaGlsZEJ5TmFtZShcInByb3BDb3JuZXJJdGVtXCIpO1xuICAgIG8gJiYgY2MuaXNWYWxpZChvKSAmJiAoby5hY3RpdmUgPSB0KTtcbiAgfVxufSJdfQ==