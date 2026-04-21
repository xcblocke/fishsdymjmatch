
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicOver/Scripts/ClassicWinView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNPdmVyL1NjcmlwdHMvQ2xhc3NpY1dpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCx5RUFBb0U7QUFDcEUsdURBQXFEO0FBQ3JELDJFQUFzRTtBQUN0RSx3RkFBd0c7QUFDeEcsd0ZBQWtGO0FBQ2xGLDhEQUF5RTtBQUN6RSxJQUFJLENBQUMsQ0FBQztBQUNOLElBQUksQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsa0NBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxjQUFjLENBQUM7QUFDaEQsQ0FBQyxDQUFDLGtDQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsZUFBZSxDQUFDO0FBQzNDLENBQUMsQ0FBQyxrQ0FBZSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQztBQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxrQ0FBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLHVCQUF1QixDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFDLGtDQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUMsa0NBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVWO0lBQTRDLGtDQUFNO0lBQWxEO1FBQUEscUVBdUtDO1FBcktDLFlBQU0sR0FBUyxJQUFJLENBQUM7UUFFcEIsaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBRWxDLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFxQixJQUFJLENBQUM7UUFFeEMsZ0JBQVUsR0FBaUIsSUFB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QUVsQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3VEQUNXO0lBRWxDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzswREFDYztJQUV4QztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO3NEQUNVO0lBRWhDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aURBQ0s7SUFFdEI7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzt5REFDYTtJQUV0QztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO3lEQUNhO0lBRWxDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7bURBQ087SUFsQlAsY0FBYztRQURsQyxFQUFFLENBQUMsS0FBSztPQUNZLGNBQWMsQ0F1S2xDO0lBQUQscUJBQUM7Q0F2S0QsQUF1S0MsQ0F2SzJDLGdCQUFNLEdBdUtqRDtrQkF2S29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRUNsYXNzaWNXaW5UeXBlIH0gZnJvbSAnLi9DbGFzc2ljT3ZlclR5cGVzJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCB7IEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9ORVhUTEVWRUwgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2V2ZW50cy9TaW11bGF0b3JFdmVudCc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgQWRhcHRlciwgeyBBZGp1c3RUcHllIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb21wb25lbnQvQWRhcHRlcic7XG52YXIgcztcbnZhciBuO1xuKHMgPSB7fSlbRUNsYXNzaWNXaW5UeXBlLkJlc3RdID0gXCJpbl9iZXN0U2NvcmVcIjtcbnNbRUNsYXNzaWNXaW5UeXBlLlRvZGF5XSA9IFwiaW5fdG9kYXlTY29yZVwiO1xuc1tFQ2xhc3NpY1dpblR5cGUuV2Vla10gPSBcImluX3dlZWtTY29yZVwiO1xudmFyIHkgPSBzO1xuKG4gPSB7fSlbRUNsYXNzaWNXaW5UeXBlLkJlc3RdID0gW1wiQmVzdCBTY29yZVwiLCBcImNsYXNzaWNfYmVzdHNjb3JlX2Rlc1wiXTtcbm5bRUNsYXNzaWNXaW5UeXBlLlRvZGF5XSA9IFtcIlRvZGF5IEJlc3RcIiwgXCJjbGFzc2ljX3RvZGF5YmVzdFwiXTtcbm5bRUNsYXNzaWNXaW5UeXBlLldlZWtdID0gW1wiV2VlayBCZXN0XCIsIFwiY2xhc3NpY193ZWVrYmVzdFwiXTtcbnZhciB2ID0gbjtcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NpY1dpblZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBAbWoubm9kZShcImJnXCIpXG4gIGJnTm9kZTogXCJiZ1wiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJFZmZlY3RMaWdodFwiKVxuICBlZmZlY3RMaWdodDogXCJFZmZlY3RMaWdodFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJFZmZlY3RTY29yZVwiKVxuICBlZmZlY3RTY29yZTogXCJFZmZlY3RTY29yZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJFZmZlY3RQYXJ0aWNsZVwiKVxuICBlZmZlY3RQYXJ0aWNsZTogXCJFZmZlY3RQYXJ0aWNsZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJFZmZlY3RCb21iXCIpXG4gIGVmZmVjdEJvbWI6IFwiRWZmZWN0Qm9tYlwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJUaXRsZVwiKVxuICB0aXRsZTogXCJUaXRsZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJCZXN0U2NvcmVEZXNjXCIpXG4gIGJlc3RTY29yZURlc2M6IFwiQmVzdFNjb3JlRGVzY1wiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJCZXN0U2NvcmVcIilcbiAgYmVzdFNjb3JlTm9kZTogXCJCZXN0U2NvcmVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiTmV4dEJ0blwiKVxuICBuZXh0QnRuOiBcIk5leHRCdG5cIiA9IG51bGw7XG4gIGRhdGEgPSBudWxsO1xuICBzcGluZUxpZ2h0ID0gbnVsbDtcbiAgc3BpbmVTY29yZSA9IG51bGw7XG4gIHNwaW5lUGFydGljbGUgPSBudWxsO1xuICBzcGluZUJvbWIgPSBudWxsO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgaXNQbGF5ZWQgPSBmYWxzZTtcbiAgc2NvcmVJbnRlcnZhbCA9IC0xO1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL0NsYXNzaWNXaW5cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudCgpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5leHRCdG4sIHRoaXMub25OZXh0QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy50cnlQbGF5QWN0aW9uKCk7XG4gIH1cbiAgaW5pdENvbXBvbmVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICBBZGFwdGVyLmFkanVzdEZvclR5cGUodGhpcy5lZmZlY3RMaWdodCwgQWRqdXN0VHB5ZS5UT1ApO1xuICAgICAgdGhpcy5zcGluZUxpZ2h0ID0gdGhpcy5lZmZlY3RMaWdodC5hZGRDb21wb25lbnQoQmFzZVNwaW5lKTtcbiAgICAgIHRoaXMuc3BpbmVTY29yZSA9IHRoaXMuZWZmZWN0U2NvcmUuYWRkQ29tcG9uZW50KEJhc2VTcGluZSk7XG4gICAgICB0aGlzLnNwaW5lUGFydGljbGUgPSB0aGlzLmVmZmVjdFBhcnRpY2xlLmFkZENvbXBvbmVudChCYXNlU3BpbmUpO1xuICAgICAgdGhpcy5zcGluZUJvbWIgPSB0aGlzLmVmZmVjdEJvbWIuYWRkQ29tcG9uZW50KEJhc2VTcGluZSk7XG4gICAgICB0aGlzLnNwaW5lTGlnaHQubWFya1JlYWR5KFwiXCIpO1xuICAgICAgdGhpcy5zcGluZVNjb3JlLm1hcmtSZWFkeShcIlwiKTtcbiAgICAgIHRoaXMuc3BpbmVQYXJ0aWNsZS5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLnNwaW5lQm9tYi5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLmhvb2tOb2RlKCk7XG4gICAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgfVxuICB9XG4gIGhvb2tOb2RlKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLnRpdGxlLnNldFBvc2l0aW9uKGNjLlZlYzMuWkVSTyk7XG4gICAgdGhpcy5iZXN0U2NvcmVEZXNjLnNldFBvc2l0aW9uKGNjLlZlYzMuWkVSTyk7XG4gICAgdGhpcy5iZXN0U2NvcmVOb2RlLnNldFBvc2l0aW9uKGNjLlZlYzMuWkVSTyk7XG4gICAgdGhpcy5uZXh0QnRuLnNldFBvc2l0aW9uKGNjLlZlYzMuWkVSTyk7XG4gICAgdGhpcy5zcGluZVNjb3JlLmF0dGFjaE5vZGVXaXRoQWxwaGEoXCJob29rX3R4dF9iZXN0XCIsIFwic2xvdF90eHRfYmVzdFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS50aXRsZTtcbiAgICB9KTtcbiAgICB0aGlzLnNwaW5lU2NvcmUuYXR0YWNoTm9kZVdpdGhBbHBoYShcImhvb2tfdHh0X2Jlc3RTY29yZVwiLCBcInNsb3RfdHh0X2Jlc3RTY29yZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5iZXN0U2NvcmVEZXNjO1xuICAgIH0pO1xuICAgIHRoaXMuc3BpbmVTY29yZS5hdHRhY2hOb2RlV2l0aEFscGhhKFwiaG9va19udW1fYmVzdFNjb3JlXCIsIFwic2xvdF9udW1fYmVzdFNjb3JlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLmJlc3RTY29yZU5vZGU7XG4gICAgfSk7XG4gICAgdGhpcy5zcGluZVNjb3JlLmF0dGFjaE5vZGUoXCJob29rX2J0blwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5uZXh0QnRuO1xuICAgIH0pO1xuICB9XG4gIHRyeVBsYXlBY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmlzSW5pdCAmJiAhdGhpcy5pc1BsYXllZCkge1xuICAgICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuQ2xhc3NpY1dpbik7XG4gICAgICB0aGlzLnN0YXJ0UGxheUFjdGlvbigpO1xuICAgICAgdGhpcy5pc1BsYXllZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNob3dWaWV3KGUpIHtcbiAgICB0aGlzLmRhdGEgPSBlO1xuICAgIHRoaXMudHJ5UGxheUFjdGlvbigpO1xuICB9XG4gIG9uTmV4dEJ0bkNsaWNrKCkge1xuICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFVlRfTVNHX0tFWV9TSU1VTEFUT1JfTkVYVExFVkVMKTtcbiAgfVxuICBzdGFydFBsYXlBY3Rpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuYmdOb2RlLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMuYmVzdFNjb3JlRGVzYy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmJlc3RTY29yZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy50aXRsZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm5leHRCdG4uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zcGluZVNjb3JlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zcGluZUJvbWIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNwaW5lUGFydGljbGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNwaW5lTGlnaHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB2YXIgdCA9IHRoaXMuZGF0YS53aW5UeXBlLFxuICAgICAgaSA9IHZbdF1bMF0sXG4gICAgICBvID0gdlt0XVsxXTtcbiAgICBJMThOU3RyaW5ncy5zZXRUZXh0KHRoaXMudGl0bGUsIGksIG8pO1xuICAgIHRoaXMuYmVzdFNjb3JlTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMFwiO1xuICAgIGNjLnR3ZWVuKHRoaXMuYmdOb2RlKS50bygwLjIsIHtcbiAgICAgIG9wYWNpdHk6IDE5MFxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgZS5zcGluZUFuaW0oKTtcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHNwaW5lQW5pbSgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5zcGluZVNjb3JlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNwaW5lQm9tYi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zcGluZVBhcnRpY2xlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNwaW5lTGlnaHQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3BpbmVMaWdodC5zZXRBbmltYXRpb24oXCJpblwiLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjYy5pc1ZhbGlkKGUuc3BpbmVMaWdodCkgJiYgZS5zcGluZUxpZ2h0LnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEpO1xuICAgIH0pO1xuICAgIHZhciB0ID0gdGhpcy5zcGluZVNjb3JlLmdldFNrZWxldG9uKCk7XG4gICAgdC5zZXRFdmVudExpc3RlbmVyKG51bGwpO1xuICAgIHQuc2V0RXZlbnRMaXN0ZW5lcihmdW5jdGlvbiAodCwgaSkge1xuICAgICAgXCJidG5cIiA9PT0gaS5kYXRhLm5hbWUgJiYgKGUubmV4dEJ0bi5hY3RpdmUgPSB0cnVlKTtcbiAgICAgIFwiYmVzdFwiID09PSBpLmRhdGEubmFtZSAmJiAoZS50aXRsZS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgIGlmIChcImJlc3RTY29yZVwiID09PSBpLmRhdGEubmFtZSkge1xuICAgICAgICBlLmJlc3RTY29yZURlc2MuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZS5iZXN0U2NvcmVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGUucGxheVNjb3JlTnVtYmVyQW5pbSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBpID0gdGhpcy5kYXRhLndpblR5cGU7XG4gICAgdGhpcy5zcGluZVNjb3JlLnNldEFuaW1hdGlvbih5W2ldLCAxLCBudWxsKTtcbiAgICB0aGlzLnNwaW5lQm9tYi5zZXRBbmltYXRpb24oXCJpblwiLCAxLCBudWxsKTtcbiAgICB0aGlzLnNwaW5lUGFydGljbGUuc2V0QW5pbWF0aW9uKFwiaW5cIiwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgY2MuaXNWYWxpZChlLnNwaW5lUGFydGljbGUpICYmIGUuc3BpbmVQYXJ0aWNsZS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKTtcbiAgICB9KTtcbiAgfVxuICBjbGVhclNjb3JlSW50ZXJ2YWwoKSB7XG4gICAgaWYgKHRoaXMuc2NvcmVJbnRlcnZhbCA+IDApIHtcbiAgICAgIHdpbmRvd1snY2xlYXJJbnRlcnZhbCddKHRoaXMuc2NvcmVJbnRlcnZhbCk7XG4gICAgICB0aGlzLnNjb3JlSW50ZXJ2YWwgPSAtMTtcbiAgICB9XG4gIH1cbiAgcGxheVNjb3JlTnVtYmVyQW5pbSgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5iZXN0U2NvcmVOb2RlKSkge1xuICAgICAgdGhpcy5jbGVhclNjb3JlSW50ZXJ2YWwoKTtcbiAgICAgIHZhciB0ID0gMyxcbiAgICAgICAgaSA9IHRoaXMuZGF0YS5jdXJTY29yZTtcbiAgICAgIHQgKj0gTWF0aC5mbG9vcihpIC8gNDAwKSArIDE7XG4gICAgICB2YXIgbyA9IDAsXG4gICAgICAgIHMgPSAwLFxuICAgICAgICBuID0gdGhpcy5iZXN0U2NvcmVOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICBuLnN0cmluZyA9IFwiXCIgKyBzO1xuICAgICAgdGhpcy5zY29yZUludGVydmFsID0gd2luZG93WydzZXRJbnRlcnZhbCddKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoZS5iZXN0U2NvcmVOb2RlKSAmJiBjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgICAgaWYgKGkgPiBzICsgdCkge1xuICAgICAgICAgICAgcyArPSB0O1xuICAgICAgICAgICAgbi5zdHJpbmcgPSBcIlwiICsgcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbi5zdHJpbmcgPSBcIlwiICsgaTtcbiAgICAgICAgICAgIGUuY2xlYXJTY29yZUludGVydmFsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICsrbyAlIDUgPT0gMCAmJiBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5DbGFzc2ljU2NvcmVSb2xsKTtcbiAgICAgICAgfSBlbHNlIGUuY2xlYXJTY29yZUludGVydmFsKCk7XG4gICAgICB9LCAxMCwgdGhpcyk7XG4gICAgfVxuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmNsZWFyU2NvcmVJbnRlcnZhbCgpO1xuICB9XG59Il19