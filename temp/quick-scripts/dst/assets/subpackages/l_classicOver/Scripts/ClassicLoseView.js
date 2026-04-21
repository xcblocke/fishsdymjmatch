
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicOver/Scripts/ClassicLoseView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNPdmVyL1NjcmlwdHMvQ2xhc3NpY0xvc2VWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUU7QUFDekUsd0ZBQWtGO0FBQ2xGLHdGQUF3RztBQUN4RywrREFBMEQ7QUFDMUQseUVBQW9FO0FBRXBFO0lBQTZDLG1DQUFNO0lBQW5EO1FBQUEscUVBK0tDO1FBN0tDLFlBQU0sR0FBUyxJQUFJLENBQUM7UUFFcEIsaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBRWxDLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQUVsQyxvQkFBYyxHQUFxQixJQUFJLENBQUM7UUFFeEMsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMsbUJBQWEsR0FBb0IsSUFBSSxDQUFDO1FBRXRDLGtCQUFZLEdBQWUsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUVsQyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBQzFCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixtQkFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQW9KckIsQ0FBQztJQWxKQyxnQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFB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Qzt5REFDWTtJQUVoQztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzBEQUNhO0lBRWxDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7b0RBQ087SUFwQlAsZUFBZTtRQURuQyxFQUFFLENBQUMsS0FBSztPQUNZLGVBQWUsQ0ErS25DO0lBQUQsc0JBQUM7Q0EvS0QsQUErS0MsQ0EvSzRDLGdCQUFNLEdBK0tsRDtrQkEvS29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRhcHRlciwgeyBBZGp1c3RUcHllIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb21wb25lbnQvQWRhcHRlcic7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFVlRfTVNHX0tFWV9TSU1VTEFUT1JfTkVYVExFVkVMIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9ldmVudHMvU2ltdWxhdG9yRXZlbnQnO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NpY0xvc2VWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgQG1qLm5vZGUoXCJiZ1wiKVxuICBiZ05vZGU6IFwiYmdcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiRWZmZWN0TGlnaHRcIilcbiAgZWZmZWN0TGlnaHQ6IFwiRWZmZWN0TGlnaHRcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiRWZmZWN0U2NvcmVcIilcbiAgZWZmZWN0U2NvcmU6IFwiRWZmZWN0U2NvcmVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiRWZmZWN0UGFydGljbGVcIilcbiAgZWZmZWN0UGFydGljbGU6IFwiRWZmZWN0UGFydGljbGVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiVGl0bGVcIilcbiAgdGl0bGU6IFwiVGl0bGVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQ3VyU2NvcmVEZXNjXCIpXG4gIGN1clNjb3JlRGVzYzogXCJDdXJTY29yZURlc2NcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQmVzdFNjb3JlRGVzY1wiKVxuICBiZXN0U2NvcmVEZXNjOiBcIkJlc3RTY29yZURlc2NcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQ3VyU2NvcmVcIilcbiAgY3VyU2NvcmVOb2RlOiBcIkN1clNjb3JlXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkJlc3RTY29yZVwiKVxuICBiZXN0U2NvcmVOb2RlOiBcIkJlc3RTY29yZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJOZXh0QnRuXCIpXG4gIG5leHRCdG46IFwiTmV4dEJ0blwiID0gbnVsbDtcbiAgZGF0YSA9IG51bGw7XG4gIHNwaW5lTGlnaHQgPSBudWxsO1xuICBzcGluZVNjb3JlID0gbnVsbDtcbiAgc3BpbmVQYXJ0aWNsZSA9IG51bGw7XG4gIGlzSW5pdCA9IGZhbHNlO1xuICBpc1BsYXllZCA9IGZhbHNlO1xuICBzY29yZUludGVydmFsID0gLTE7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvQ2xhc3NpY0xvc2VcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudCgpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLm5leHRCdG4sIHRoaXMub25OZXh0QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy50cnlQbGF5QWN0aW9uKCk7XG4gIH1cbiAgaW5pdENvbXBvbmVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICBBZGFwdGVyLmFkanVzdEZvclR5cGUodGhpcy5lZmZlY3RMaWdodCwgQWRqdXN0VHB5ZS5UT1ApO1xuICAgICAgdGhpcy5zcGluZUxpZ2h0ID0gdGhpcy5lZmZlY3RMaWdodC5hZGRDb21wb25lbnQoQmFzZVNwaW5lKTtcbiAgICAgIHRoaXMuc3BpbmVTY29yZSA9IHRoaXMuZWZmZWN0U2NvcmUuYWRkQ29tcG9uZW50KEJhc2VTcGluZSk7XG4gICAgICB0aGlzLnNwaW5lUGFydGljbGUgPSB0aGlzLmVmZmVjdFBhcnRpY2xlLmFkZENvbXBvbmVudChCYXNlU3BpbmUpO1xuICAgICAgdGhpcy5zcGluZUxpZ2h0Lm1hcmtSZWFkeShcIlwiKTtcbiAgICAgIHRoaXMuc3BpbmVTY29yZS5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLnNwaW5lUGFydGljbGUubWFya1JlYWR5KFwiXCIpO1xuICAgICAgdGhpcy5ob29rTm9kZSgpO1xuICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBob29rTm9kZSgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy50aXRsZS5zZXRQb3NpdGlvbihjYy5WZWMzLlpFUk8pO1xuICAgIHRoaXMuY3VyU2NvcmVEZXNjLnNldFBvc2l0aW9uKGNjLlZlYzMuWkVSTyk7XG4gICAgdGhpcy5jdXJTY29yZU5vZGUuc2V0UG9zaXRpb24oY2MuVmVjMy5aRVJPKTtcbiAgICB0aGlzLmJlc3RTY29yZURlc2Muc2V0UG9zaXRpb24oY2MuVmVjMy5aRVJPKTtcbiAgICB0aGlzLmJlc3RTY29yZU5vZGUuc2V0UG9zaXRpb24oY2MuVmVjMy5aRVJPKTtcbiAgICB0aGlzLm5leHRCdG4uc2V0UG9zaXRpb24oY2MuVmVjMy5aRVJPKTtcbiAgICB0aGlzLnNwaW5lU2NvcmUuYXR0YWNoTm9kZVdpdGhBbHBoYShcImhvb2tfZ2FtZU92ZXJcIiwgXCJzbG90X2dhbWVPdmVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLnRpdGxlO1xuICAgIH0pO1xuICAgIHRoaXMuc3BpbmVTY29yZS5hdHRhY2hOb2RlV2l0aEFscGhhKFwiaG9va190eHRfc2NvcmVcIiwgXCJzbG90X3R4dF9zY29yZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5jdXJTY29yZURlc2M7XG4gICAgfSk7XG4gICAgdGhpcy5zcGluZVNjb3JlLmF0dGFjaE5vZGVXaXRoQWxwaGEoXCJob29rX251bV9zY29yZVwiLCBcInNsb3RfbnVtX3Njb3JlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLmN1clNjb3JlTm9kZTtcbiAgICB9KTtcbiAgICB0aGlzLnNwaW5lU2NvcmUuYXR0YWNoTm9kZVdpdGhBbHBoYShcImhvb2tfdHh0X2Jlc3RTY29yZVwiLCBcInNsb3RfdHh0X2Jlc3RTY29yZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZS5iZXN0U2NvcmVEZXNjO1xuICAgIH0pO1xuICAgIHRoaXMuc3BpbmVTY29yZS5hdHRhY2hOb2RlV2l0aEFscGhhKFwiaG9va19udW1fYmVzdFNjb3JlXCIsIFwic2xvdF9iZXN0U2NvcmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGUuYmVzdFNjb3JlTm9kZTtcbiAgICB9KTtcbiAgICB0aGlzLnNwaW5lU2NvcmUuYXR0YWNoTm9kZShcImhvb2tfYnRuXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlLm5leHRCdG47XG4gICAgfSk7XG4gIH1cbiAgdHJ5UGxheUFjdGlvbigpIHtcbiAgICBpZiAodGhpcy5kYXRhICYmIGNjLmlzVmFsaWQodGhpcy5lZmZlY3RMaWdodCkgJiYgIXRoaXMuaXNQbGF5ZWQpIHtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkNsYXNzaWNMb3NlKTtcbiAgICAgIHRoaXMuc3RhcnRQbGF5QWN0aW9uKCk7XG4gICAgICB0aGlzLmlzUGxheWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgc2hvd1ZpZXcoZSkge1xuICAgIHRoaXMuZGF0YSA9IGU7XG4gICAgdGhpcy50cnlQbGF5QWN0aW9uKCk7XG4gIH1cbiAgb25OZXh0QnRuQ2xpY2soKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVWVF9NU0dfS0VZX1NJTVVMQVRPUl9ORVhUTEVWRUwpO1xuICB9XG4gIHN0YXJ0UGxheUFjdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5iZ05vZGUub3BhY2l0eSA9IDA7XG4gICAgdGhpcy5jdXJTY29yZURlc2MuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jdXJTY29yZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5iZXN0U2NvcmVEZXNjLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYmVzdFNjb3JlTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnRpdGxlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubmV4dEJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNwaW5lU2NvcmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNwaW5lUGFydGljbGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNwaW5lTGlnaHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmN1clNjb3JlTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMFwiO1xuICAgIHRoaXMuYmVzdFNjb3JlTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCIgKyB0aGlzLmRhdGEuYmVzdFNjb3JlO1xuICAgIGNjLnR3ZWVuKHRoaXMuYmdOb2RlKS50bygwLjIsIHtcbiAgICAgIG9wYWNpdHk6IDE5MFxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgZS5zcGluZUFuaW0oKTtcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHNwaW5lQW5pbSgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5zcGluZVNjb3JlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNwaW5lUGFydGljbGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3BpbmVMaWdodC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zcGluZUxpZ2h0LnNldEFuaW1hdGlvbihcImluXCIsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmlzVmFsaWQoZS5zcGluZUxpZ2h0KSAmJiBlLnNwaW5lTGlnaHQuc2V0QW5pbWF0aW9uKFwiaW5pdFwiLCAtMSk7XG4gICAgfSk7XG4gICAgdmFyIHQgPSB0aGlzLnNwaW5lU2NvcmUuZ2V0U2tlbGV0b24oKTtcbiAgICB0LnNldEV2ZW50TGlzdGVuZXIobnVsbCk7XG4gICAgdC5zZXRFdmVudExpc3RlbmVyKGZ1bmN0aW9uICh0LCBpKSB7XG4gICAgICBcImJ0blwiID09PSBpLmRhdGEubmFtZSAmJiAoZS5uZXh0QnRuLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgXCJnYW1lT3ZlclwiID09PSBpLmRhdGEubmFtZSAmJiAoZS50aXRsZS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgIGlmIChcInNjb3JlXCIgPT09IGkuZGF0YS5uYW1lKSB7XG4gICAgICAgIGUuY3VyU2NvcmVEZXNjLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGUuY3VyU2NvcmVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGUucGxheVNjb3JlTnVtYmVyQW5pbSgpO1xuICAgICAgfVxuICAgICAgaWYgKFwiYmVzdFNjb3JlXCIgPT09IGkuZGF0YS5uYW1lKSB7XG4gICAgICAgIGUuYmVzdFNjb3JlRGVzYy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBlLmJlc3RTY29yZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNwaW5lU2NvcmUuc2V0QW5pbWF0aW9uKFwiaW5cIiwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgY2MuaXNWYWxpZChlLnNwaW5lU2NvcmUpICYmIGUuc3BpbmVTY29yZS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKTtcbiAgICB9KTtcbiAgICB0aGlzLnNwaW5lUGFydGljbGUuc2V0QW5pbWF0aW9uKFwiaW5cIiwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgY2MuaXNWYWxpZChlLnNwaW5lUGFydGljbGUpICYmIGUuc3BpbmVQYXJ0aWNsZS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xKTtcbiAgICB9KTtcbiAgfVxuICBjbGVhclNjb3JlSW50ZXJ2YWwoKSB7XG4gICAgaWYgKHRoaXMuc2NvcmVJbnRlcnZhbCA+IDApIHtcbiAgICAgIHdpbmRvd1snY2xlYXJJbnRlcnZhbCddKHRoaXMuc2NvcmVJbnRlcnZhbCk7XG4gICAgICB0aGlzLnNjb3JlSW50ZXJ2YWwgPSAtMTtcbiAgICB9XG4gIH1cbiAgcGxheVNjb3JlTnVtYmVyQW5pbSgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5jdXJTY29yZU5vZGUpKSB7XG4gICAgICB0aGlzLmNsZWFyU2NvcmVJbnRlcnZhbCgpO1xuICAgICAgdmFyIHQgPSAzLFxuICAgICAgICBpID0gdGhpcy5kYXRhLmN1clNjb3JlO1xuICAgICAgdCAqPSBNYXRoLmZsb29yKGkgLyA0MDApICsgMTtcbiAgICAgIHZhciBvID0gMCxcbiAgICAgICAgcyA9IDAsXG4gICAgICAgIG4gPSB0aGlzLmN1clNjb3JlTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgbi5zdHJpbmcgPSBcIlwiICsgcztcbiAgICAgIHRoaXMuc2NvcmVJbnRlcnZhbCA9IHdpbmRvd1snc2V0SW50ZXJ2YWwnXShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGUuY3VyU2NvcmVOb2RlKSAmJiBjYy5pc1ZhbGlkKG4pKSB7XG4gICAgICAgICAgaWYgKGkgPiBzICsgdCkge1xuICAgICAgICAgICAgcyArPSB0O1xuICAgICAgICAgICAgbi5zdHJpbmcgPSBcIlwiICsgcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbi5zdHJpbmcgPSBcIlwiICsgaTtcbiAgICAgICAgICAgIGUuY2xlYXJTY29yZUludGVydmFsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgICsrbyAlIDUgPT0gMCAmJiBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5DbGFzc2ljU2NvcmVSb2xsKTtcbiAgICAgICAgfSBlbHNlIGUuY2xlYXJTY29yZUludGVydmFsKCk7XG4gICAgICB9LCAxMCwgdGhpcyk7XG4gICAgfVxuICB9XG4gIG9uRGVzdHJveSgpIHtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmNsZWFyU2NvcmVJbnRlcnZhbCgpO1xuICB9XG59Il19