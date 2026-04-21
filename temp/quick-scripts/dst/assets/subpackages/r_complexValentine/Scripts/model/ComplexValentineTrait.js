
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_complexValentine/Scripts/model/ComplexValentineTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ca2eFzT8ZHc64N7oeuU4V7', 'ComplexValentineTrait');
// subpackages/r_complexValentine/Scripts/model/ComplexValentineTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../../Scripts/simulator/constant/GameEvent");
var HallValentineBtn_1 = require("../components/HallValentineBtn");
var ValentineModel_1 = require("./ValentineModel");
var Trait_1 = require("../../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../../Scripts/framework/manager/ControllerManager");
var UserModel_1 = require("../../../../Scripts/gamePlay/user/UserModel");
var ComplexValentineTrait = /** @class */ (function (_super) {
    __extends(ComplexValentineTrait, _super);
    function ComplexValentineTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hallIconBtn = null;
        _this.hallViewNode = null;
        return _this;
    }
    ComplexValentineTrait_1 = ComplexValentineTrait;
    Object.defineProperty(ComplexValentineTrait.prototype, "model", {
        get: function () {
            return ValentineModel_1.default.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    ComplexValentineTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        var n = null === (e = this._traitData) || void 0 === e ? void 0 : e.config;
        n && ValentineModel_1.default.getInstance().setConfig(n);
        this.registerEvent([{
                event: "HallCtl_initRes"
            }]);
    };
    ComplexValentineTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.IptSetLevel_AfterSetLevel] = this.onMsgIptSetLevelAfterSetLevel.bind(this);
        _t[ValentineModel_1.ValentineEvents.CLOSE_VALENTINE_ACTIVATE_VIEW] = this.onMsgCloseValentineActivateView.bind(this);
        _t[ValentineModel_1.ValentineEvents.VALENTINE_GAME_SHOW] = this.onMsgGameShow.bind(this);
        _t[ValentineModel_1.ValentineEvents.UPDATE_ACTIVITY_STATE] = this.onMsgUpdActState.bind(this);
        return _t;
    };
    ComplexValentineTrait.prototype.onMsgUpdActState = function () { };
    ComplexValentineTrait.prototype.onMsgGameShow = function () {
        if (!UserModel_1.default.getInstance().isInGameView()) {
            this.model.checkInitAct();
            this.createOrUpdateHallIcon(this.hallViewNode);
            this.popValentineViewLogic();
        }
    };
    ComplexValentineTrait.prototype.onMsgIptSetLevelAfterSetLevel = function () {
        if (this.model.shouldShowActivatePopup()) {
            this.showActivatePopup(true);
        }
        else {
            this.model.shouldShowEndPopup() && this.showEndPopup();
        }
    };
    ComplexValentineTrait.prototype.onMsgCloseValentineActivateView = function () {
        ValentineModel_1.ValentineActState.Ended == this.model.getActivityState() && this.model.shouldShowEndPopup() && this.showEndPopup();
    };
    ComplexValentineTrait.prototype.isEffectActive = function () {
        return this.model.isEffectActive();
    };
    ComplexValentineTrait.prototype.getEffectEnabled = function () {
        return this.model.getEffectEnabled();
    };
    ComplexValentineTrait.prototype.enterHall = function (t) {
        var e, n;
        this.hallViewNode = null === (e = t.ins) || void 0 === e ? void 0 : e.node;
        this.model.checkInitAct();
        this.createOrUpdateHallIcon(null === (n = t.ins) || void 0 === n ? void 0 : n.node);
    };
    ComplexValentineTrait.prototype.createOrUpdateHallIcon = function (t) {
        var e = this;
        if (cc.isValid(t)) {
            var o = this.model.getActivityState();
            if (ValentineModel_1.ValentineActState.NotStarted !== o && ValentineModel_1.ValentineActState.Ended !== o) {
                if (cc.isValid(this._hallIconBtn)) {
                    this._hallIconBtn.getComponent(HallValentineBtn_1.default).updateUI();
                }
                else {
                    HallValentineBtn_1.default.createUI().then(function (n) {
                        var o;
                        if (cc.isValid(n) && cc.isValid(t)) {
                            t.addChild(n);
                            e._hallIconBtn = n;
                            null === (o = n.getComponent(HallValentineBtn_1.default)) || void 0 === o || o.updateUI();
                        }
                    }).catch(function (t) {
                        console.error("[" + ComplexValentineTrait_1.traitKey + "] 创建主界面icon失败: " + ((null == t ? void 0 : t.message) || "HallValentineBtn按钮加载失败"));
                    });
                }
            }
            else if (cc.isValid(this._hallIconBtn)) {
                this._hallIconBtn.destroy();
                this._hallIconBtn = null;
            }
        }
    };
    ComplexValentineTrait.prototype.popValentineViewLogic = function () {
        var t = true;
        if (this.model.shouldShowIntroPopup()) {
            this.showIntroducePopup();
        }
        else {
            if (this.model.shouldShowActivatePopup()) {
                this.showActivatePopup();
            }
            else {
                if (this.model.shouldShowEndPopup()) {
                    this.showEndPopup();
                }
                else {
                    t = false;
                }
            }
        }
        return t;
    };
    ComplexValentineTrait.prototype.showIntroducePopup = function () {
        this.model.markIntroPopupShown();
        ControllerManager_1.default.getInstance().pushViewByController("ValentineIntroController", {
            isReuse: false,
            isShowAction: true
        });
    };
    ComplexValentineTrait.prototype.onHallCtl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("Prefab", [ComplexValentineTrait_1.BUNDLE_NAME + ":prefabs/HallValentineBtn"]);
    };
    ComplexValentineTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var o, i = null === (o = t.args) || void 0 === o ? void 0 : o[0];
        if ("gameplay_img_mj_dn" !== i && "gameplay_img_mj_up" !== i && "gameplay_select_mj" !== i)
            e();
        else {
            if (!this.model.isEffectActive()) {
                e();
                return;
            }
            var a = "texture/" + i;
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: {
                    path: a,
                    bundleName: ComplexValentineTrait_1.BUNDLE_NAME,
                    fromAtlas: false
                }
            });
        }
    };
    ComplexValentineTrait.prototype.onTileNodeObj_playAnim = function (t, e) {
        var o;
        if (this.isEffectActive())
            try {
                if ("spine/rollcard/gameplay_flip" === (null === (o = t.args) || void 0 === o ? void 0 : o[0])) {
                    t.args[0] = "spine/gameplay_flip";
                    t.args[6] = ComplexValentineTrait_1.BUNDLE_NAME;
                    e();
                    return;
                }
                e();
            }
            catch (t) {
                console.error("[" + ComplexValentineTrait_1.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
                e();
            }
        else
            e();
    };
    ComplexValentineTrait.prototype.onHallVw_updateUI = function (t, e) {
        this.enterHall(t);
        e();
    };
    ComplexValentineTrait.prototype.onHallVw_onPopView = function (t, e) {
        e({
            isBreak: this.popValentineViewLogic()
        });
    };
    ComplexValentineTrait.prototype.onWinVw_onLoad = function (t, e) {
        e();
        this.dealWithWinView();
    };
    ComplexValentineTrait.prototype.onDCWinVw_onLoad = function (t, e) {
        e();
        this.dealWithWinView();
    };
    ComplexValentineTrait.prototype.onTLWinVw_onLoad = function (t, e) {
        e();
        this.dealWithWinView();
    };
    ComplexValentineTrait.prototype.dealWithWinView = function () {
        var t = this.model.getActivityState();
        ValentineModel_1.ValentineActState.InProgress == t && this.model.addProgress(1);
    };
    ComplexValentineTrait.prototype.showActivatePopup = function (t) {
        if (t === void 0) { t = false; }
        ValentineModel_1.default.getInstance().markActivatePopupShown();
        ControllerManager_1.default.getInstance().pushViewByController("ValentineActivateController", {
            isReuse: false,
            isShowAction: true,
            isGaming: t
        });
    };
    ComplexValentineTrait.prototype.showEndPopup = function () {
        ValentineModel_1.default.getInstance().markEndPopupShown();
        ControllerManager_1.default.getInstance().pushViewByController("ValentineEndController", {
            isReuse: false,
            isShowAction: true
        });
        if (cc.isValid(this._hallIconBtn)) {
            this._hallIconBtn.destroy();
            this._hallIconBtn = null;
        }
    };
    var ComplexValentineTrait_1;
    ComplexValentineTrait.traitKey = "ComplexValentine";
    ComplexValentineTrait.BUNDLE_NAME = "r_complexValentine";
    __decorate([
        mj.traitEvent("ComplexVal_onMsgSetLevel")
    ], ComplexValentineTrait.prototype, "onMsgIptSetLevelAfterSetLevel", null);
    ComplexValentineTrait = ComplexValentineTrait_1 = __decorate([
        mj.trait,
        mj.class("ComplexValentineTrait")
    ], ComplexValentineTrait);
    return ComplexValentineTrait;
}(Trait_1.default));
exports.default = ComplexValentineTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NvbXBsZXhWYWxlbnRpbmUvU2NyaXB0cy9tb2RlbC9Db21wbGV4VmFsZW50aW5lVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhFQUE4RTtBQUM5RSxtRUFBOEQ7QUFDOUQsbURBQXNGO0FBQ3RGLG1FQUE4RDtBQUM5RCw2RkFBd0Y7QUFDeEYseUVBQW9FO0FBR3BFO0lBQW1ELHlDQUFLO0lBQXhEO1FBQUEscUVBNExDO1FBM0xDLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGtCQUFZLEdBQUcsSUFBSSxDQUFDOztJQTBMdEIsQ0FBQzs4QkE1TG9CLHFCQUFxQjtJQUt4QyxzQkFBSSx3Q0FBSzthQUFUO1lBQ0UsT0FBTyx3QkFBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBQ0Qsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0UsQ0FBQyxJQUFJLHdCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLGlCQUFpQjthQUN6QixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxtREFBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsc0JBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLElBQUksQ0FB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ZW50IjpbImltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IEhhbGxWYWxlbnRpbmVCdG4gZnJvbSAnLi4vY29tcG9uZW50cy9IYWxsVmFsZW50aW5lQnRuJztcbmltcG9ydCBWYWxlbnRpbmVNb2RlbCwgeyBWYWxlbnRpbmVFdmVudHMsIFZhbGVudGluZUFjdFN0YXRlIH0gZnJvbSAnLi9WYWxlbnRpbmVNb2RlbCc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ29tcGxleFZhbGVudGluZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wbGV4VmFsZW50aW5lVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9oYWxsSWNvbkJ0biA9IG51bGw7XG4gIGhhbGxWaWV3Tm9kZSA9IG51bGw7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ29tcGxleFZhbGVudGluZVwiO1xuICBzdGF0aWMgQlVORExFX05BTUUgPSBcInJfY29tcGxleFZhbGVudGluZVwiO1xuICBnZXQgbW9kZWwoKSB7XG4gICAgcmV0dXJuIFZhbGVudGluZU1vZGVsLmdldEluc3RhbmNlKCk7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBuID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuY29uZmlnO1xuICAgIG4gJiYgVmFsZW50aW5lTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRDb25maWcobik7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFt7XG4gICAgICBldmVudDogXCJIYWxsQ3RsX2luaXRSZXNcIlxuICAgIH1dKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VHYW1lRXZlbnQuSXB0U2V0TGV2ZWxfQWZ0ZXJTZXRMZXZlbF0gPSB0aGlzLm9uTXNnSXB0U2V0TGV2ZWxBZnRlclNldExldmVsLmJpbmQodGhpcyk7XG4gICAgX3RbVmFsZW50aW5lRXZlbnRzLkNMT1NFX1ZBTEVOVElORV9BQ1RJVkFURV9WSUVXXSA9IHRoaXMub25Nc2dDbG9zZVZhbGVudGluZUFjdGl2YXRlVmlldy5iaW5kKHRoaXMpO1xuICAgIF90W1ZhbGVudGluZUV2ZW50cy5WQUxFTlRJTkVfR0FNRV9TSE9XXSA9IHRoaXMub25Nc2dHYW1lU2hvdy5iaW5kKHRoaXMpO1xuICAgIF90W1ZhbGVudGluZUV2ZW50cy5VUERBVEVfQUNUSVZJVFlfU1RBVEVdID0gdGhpcy5vbk1zZ1VwZEFjdFN0YXRlLmJpbmQodGhpcyk7XG4gICAgcmV0dXJuIF90O1xuICB9XG4gIG9uTXNnVXBkQWN0U3RhdGUoKSB7fVxuICBvbk1zZ0dhbWVTaG93KCkge1xuICAgIGlmICghVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNJbkdhbWVWaWV3KCkpIHtcbiAgICAgIHRoaXMubW9kZWwuY2hlY2tJbml0QWN0KCk7XG4gICAgICB0aGlzLmNyZWF0ZU9yVXBkYXRlSGFsbEljb24odGhpcy5oYWxsVmlld05vZGUpO1xuICAgICAgdGhpcy5wb3BWYWxlbnRpbmVWaWV3TG9naWMoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDb21wbGV4VmFsX29uTXNnU2V0TGV2ZWxcIilcbiAgb25Nc2dJcHRTZXRMZXZlbEFmdGVyU2V0TGV2ZWwoKSB7XG4gICAgaWYgKHRoaXMubW9kZWwuc2hvdWxkU2hvd0FjdGl2YXRlUG9wdXAoKSkge1xuICAgICAgdGhpcy5zaG93QWN0aXZhdGVQb3B1cCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbC5zaG91bGRTaG93RW5kUG9wdXAoKSAmJiB0aGlzLnNob3dFbmRQb3B1cCgpO1xuICAgIH1cbiAgfVxuICBvbk1zZ0Nsb3NlVmFsZW50aW5lQWN0aXZhdGVWaWV3KCkge1xuICAgIFZhbGVudGluZUFjdFN0YXRlLkVuZGVkID09IHRoaXMubW9kZWwuZ2V0QWN0aXZpdHlTdGF0ZSgpICYmIHRoaXMubW9kZWwuc2hvdWxkU2hvd0VuZFBvcHVwKCkgJiYgdGhpcy5zaG93RW5kUG9wdXAoKTtcbiAgfVxuICBpc0VmZmVjdEFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5pc0VmZmVjdEFjdGl2ZSgpO1xuICB9XG4gIGdldEVmZmVjdEVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZ2V0RWZmZWN0RW5hYmxlZCgpO1xuICB9XG4gIGVudGVySGFsbCh0KSB7XG4gICAgdmFyIGUsIG47XG4gICAgdGhpcy5oYWxsVmlld05vZGUgPSBudWxsID09PSAoZSA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm5vZGU7XG4gICAgdGhpcy5tb2RlbC5jaGVja0luaXRBY3QoKTtcbiAgICB0aGlzLmNyZWF0ZU9yVXBkYXRlSGFsbEljb24obnVsbCA9PT0gKG4gPSB0LmlucykgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5ub2RlKTtcbiAgfVxuICBjcmVhdGVPclVwZGF0ZUhhbGxJY29uKHQpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIHZhciBvID0gdGhpcy5tb2RlbC5nZXRBY3Rpdml0eVN0YXRlKCk7XG4gICAgICBpZiAoVmFsZW50aW5lQWN0U3RhdGUuTm90U3RhcnRlZCAhPT0gbyAmJiBWYWxlbnRpbmVBY3RTdGF0ZS5FbmRlZCAhPT0gbykge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9oYWxsSWNvbkJ0bikpIHtcbiAgICAgICAgICB0aGlzLl9oYWxsSWNvbkJ0bi5nZXRDb21wb25lbnQoSGFsbFZhbGVudGluZUJ0bikudXBkYXRlVUkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBIYWxsVmFsZW50aW5lQnRuLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgdmFyIG87XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChuKSAmJiBjYy5pc1ZhbGlkKHQpKSB7XG4gICAgICAgICAgICAgIHQuYWRkQ2hpbGQobik7XG4gICAgICAgICAgICAgIGUuX2hhbGxJY29uQnRuID0gbjtcbiAgICAgICAgICAgICAgbnVsbCA9PT0gKG8gPSBuLmdldENvbXBvbmVudChIYWxsVmFsZW50aW5lQnRuKSkgfHwgdm9pZCAwID09PSBvIHx8IG8udXBkYXRlVUkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENvbXBsZXhWYWxlbnRpbmVUcmFpdC50cmFpdEtleSArIFwiXSDliJvlu7rkuLvnlYzpnaJpY29u5aSx6LSlOiBcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIkhhbGxWYWxlbnRpbmVCdG7mjInpkq7liqDovb3lpLHotKVcIikpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNjLmlzVmFsaWQodGhpcy5faGFsbEljb25CdG4pKSB7XG4gICAgICAgIHRoaXMuX2hhbGxJY29uQnRuLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5faGFsbEljb25CdG4gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwb3BWYWxlbnRpbmVWaWV3TG9naWMoKSB7XG4gICAgdmFyIHQgPSB0cnVlO1xuICAgIGlmICh0aGlzLm1vZGVsLnNob3VsZFNob3dJbnRyb1BvcHVwKCkpIHtcbiAgICAgIHRoaXMuc2hvd0ludHJvZHVjZVBvcHVwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vZGVsLnNob3VsZFNob3dBY3RpdmF0ZVBvcHVwKCkpIHtcbiAgICAgICAgdGhpcy5zaG93QWN0aXZhdGVQb3B1cCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuc2hvdWxkU2hvd0VuZFBvcHVwKCkpIHtcbiAgICAgICAgICB0aGlzLnNob3dFbmRQb3B1cCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICBzaG93SW50cm9kdWNlUG9wdXAoKSB7XG4gICAgdGhpcy5tb2RlbC5tYXJrSW50cm9Qb3B1cFNob3duKCk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlZhbGVudGluZUludHJvQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1JldXNlOiBmYWxzZSxcbiAgICAgIGlzU2hvd0FjdGlvbjogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIG9uSGFsbEN0bF9pbml0UmVzKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdC5pbnMuYWRkUHJlbG9hZFJlcyhcIlByZWZhYlwiLCBbQ29tcGxleFZhbGVudGluZVRyYWl0LkJVTkRMRV9OQU1FICsgXCI6cHJlZmFicy9IYWxsVmFsZW50aW5lQnRuXCJdKTtcbiAgfVxuICBvbkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZSh0LCBlKSB7XG4gICAgdmFyIG8sXG4gICAgICBpID0gbnVsbCA9PT0gKG8gPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG9bMF07XG4gICAgaWYgKFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIgIT09IGkgJiYgXCJnYW1lcGxheV9pbWdfbWpfdXBcIiAhPT0gaSAmJiBcImdhbWVwbGF5X3NlbGVjdF9talwiICE9PSBpKSBlKCk7ZWxzZSB7XG4gICAgICBpZiAoIXRoaXMubW9kZWwuaXNFZmZlY3RBY3RpdmUoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhID0gXCJ0ZXh0dXJlL1wiICsgaTtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgIHBhdGg6IGEsXG4gICAgICAgICAgYnVuZGxlTmFtZTogQ29tcGxleFZhbGVudGluZVRyYWl0LkJVTkRMRV9OQU1FLFxuICAgICAgICAgIGZyb21BdGxhczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uVGlsZU5vZGVPYmpfcGxheUFuaW0odCwgZSkge1xuICAgIHZhciBvO1xuICAgIGlmICh0aGlzLmlzRWZmZWN0QWN0aXZlKCkpIHRyeSB7XG4gICAgICBpZiAoXCJzcGluZS9yb2xsY2FyZC9nYW1lcGxheV9mbGlwXCIgPT09IChudWxsID09PSAobyA9IHQuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogb1swXSkpIHtcbiAgICAgICAgdC5hcmdzWzBdID0gXCJzcGluZS9nYW1lcGxheV9mbGlwXCI7XG4gICAgICAgIHQuYXJnc1s2XSA9IENvbXBsZXhWYWxlbnRpbmVUcmFpdC5CVU5ETEVfTkFNRTtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIENvbXBsZXhWYWxlbnRpbmVUcmFpdC50cmFpdEtleSArIFwiXSDliqvmjIHnv7vovazlhYnmlYjlpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25IYWxsVndfdXBkYXRlVUkodCwgZSkge1xuICAgIHRoaXMuZW50ZXJIYWxsKHQpO1xuICAgIGUoKTtcbiAgfVxuICBvbkhhbGxWd19vblBvcFZpZXcodCwgZSkge1xuICAgIGUoe1xuICAgICAgaXNCcmVhazogdGhpcy5wb3BWYWxlbnRpbmVWaWV3TG9naWMoKVxuICAgIH0pO1xuICB9XG4gIG9uV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5kZWFsV2l0aFdpblZpZXcoKTtcbiAgfVxuICBvbkRDV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5kZWFsV2l0aFdpblZpZXcoKTtcbiAgfVxuICBvblRMV2luVndfb25Mb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5kZWFsV2l0aFdpblZpZXcoKTtcbiAgfVxuICBkZWFsV2l0aFdpblZpZXcoKSB7XG4gICAgdmFyIHQgPSB0aGlzLm1vZGVsLmdldEFjdGl2aXR5U3RhdGUoKTtcbiAgICBWYWxlbnRpbmVBY3RTdGF0ZS5JblByb2dyZXNzID09IHQgJiYgdGhpcy5tb2RlbC5hZGRQcm9ncmVzcygxKTtcbiAgfVxuICBzaG93QWN0aXZhdGVQb3B1cCh0ID0gZmFsc2UpIHtcbiAgICBWYWxlbnRpbmVNb2RlbC5nZXRJbnN0YW5jZSgpLm1hcmtBY3RpdmF0ZVBvcHVwU2hvd24oKTtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVmFsZW50aW5lQWN0aXZhdGVDb250cm9sbGVyXCIsIHtcbiAgICAgIGlzUmV1c2U6IGZhbHNlLFxuICAgICAgaXNTaG93QWN0aW9uOiB0cnVlLFxuICAgICAgaXNHYW1pbmc6IHRcbiAgICB9KTtcbiAgfVxuICBzaG93RW5kUG9wdXAoKSB7XG4gICAgVmFsZW50aW5lTW9kZWwuZ2V0SW5zdGFuY2UoKS5tYXJrRW5kUG9wdXBTaG93bigpO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJWYWxlbnRpbmVFbmRDb250cm9sbGVyXCIsIHtcbiAgICAgIGlzUmV1c2U6IGZhbHNlLFxuICAgICAgaXNTaG93QWN0aW9uOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5faGFsbEljb25CdG4pKSB7XG4gICAgICB0aGlzLl9oYWxsSWNvbkJ0bi5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9oYWxsSWNvbkJ0biA9IG51bGw7XG4gICAgfVxuICB9XG59Il19