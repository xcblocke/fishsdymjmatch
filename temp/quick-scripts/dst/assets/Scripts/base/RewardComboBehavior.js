
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/RewardComboBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2210dZfh29Fpr2QJEXrrvqQ', 'RewardComboBehavior');
// Scripts/base/RewardComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var RewardComboItem_1 = require("../items/RewardComboItem");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var RewardComboBehavior = /** @class */ (function (_super) {
    __extends(RewardComboBehavior, _super);
    function RewardComboBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 12000;
        _this._rewardComboNode = null;
        _this._rewardComboNode2 = null;
        return _this;
    }
    RewardComboBehavior.prototype.start = function () {
        var e = this;
        if (this.shouldSkip())
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        else {
            var t = this.context.gameView.effectNode;
            Promise.all([RewardComboItem_1.default.createUI(), RewardComboItem_1.default.createUI()]).then(function (o) {
                var n = __read(o, 2), i = n[0], r = n[1];
                if (i && r) {
                    e._rewardComboNode = i;
                    e._rewardComboNode2 = r;
                    i.setParent(t);
                    r.setParent(t);
                    var s = i.getComponent(RewardComboItem_1.default);
                    if (s) {
                        var c = r.getComponent(RewardComboItem_1.default);
                        if (c) {
                            e.playBonusAudio();
                            e.context.gameView.setSwallowEventNodeActive(true);
                            i.position = cc.v3(0, 0);
                            r.position = cc.v3(0, 280);
                            s.startPlayAni("in_bonus", function () { });
                            cc.Tween.stopAllByTarget(r);
                            cc.Tween.stopAllByTarget(i);
                            cc.tween(r).delay(0.23).call(function () {
                                c.startPlayAni("in_comboBonus", function () {
                                    e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                                    e.autoMerger();
                                });
                            }).start();
                        }
                        else {
                            r.destroy();
                            e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                        }
                    }
                    else {
                        i.destroy();
                        e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    }
                }
                else
                    e.finish(GameInputEnum_1.EBehaviorEnum.Success);
            }).catch(function () {
                e.finish(GameInputEnum_1.EBehaviorEnum.Success);
            });
        }
    };
    RewardComboBehavior.prototype.onAbort = function () {
        var t;
        null === (t = this.context.gameView) || void 0 === t || t.setSwallowEventNodeActive(false);
        this.cleanupNodes();
        _super.prototype.onAbort.call(this);
    };
    RewardComboBehavior.prototype.cleanupNodes = function () {
        if (this._rewardComboNode && cc.isValid(this._rewardComboNode)) {
            cc.Tween.stopAllByTarget(this._rewardComboNode);
            this._rewardComboNode.destroy();
        }
        if (this._rewardComboNode2 && cc.isValid(this._rewardComboNode2)) {
            cc.Tween.stopAllByTarget(this._rewardComboNode2);
            this._rewardComboNode2.destroy();
        }
        this._rewardComboNode = null;
        this._rewardComboNode2 = null;
    };
    RewardComboBehavior.prototype.autoMerger = function () {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.StartAutoMerge,
            type: "rewardCombo"
        });
    };
    RewardComboBehavior.prototype.playBonusAudio = function () {
        var e = this;
        mj.audioManager.pauseBGM();
        this.context.applauseAudioId = -1;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Bonus, false, function () {
            null !== e.context.applauseAudioId && mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Applause, true).then(function (t) {
                e.context.applauseAudioId = t;
            });
        });
    };
    RewardComboBehavior.prototype.shouldSkip = function () {
        return false;
    };
    __decorate([
        mj.traitEvent("RwdComboBhv_bonusAud")
    ], RewardComboBehavior.prototype, "playBonusAudio", null);
    __decorate([
        mj.traitEvent("RwdComboBhv_shouldSkip")
    ], RewardComboBehavior.prototype, "shouldSkip", null);
    return RewardComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.RewardComboBehavior = RewardComboBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvUmV3YXJkQ29tYm9CZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRjtBQUNwRiwwRUFBb0U7QUFDcEUsc0VBQXFFO0FBQ3JFLDREQUF1RDtBQUN2RCx5REFBd0Q7QUFDeEQ7SUFBeUMsdUNBQWlCO0lBQTFEO1FBQUEscUVBdUZDO1FBdEZDLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHVCQUFpQixHQUFHLElBQUksQ0FBQzs7SUFvRjNCLENBQUM7SUFuRkMsbUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUFLO1lBQzdELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMseUJBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBRSx5QkFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUNwRixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNWLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsQ0FB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LEdBdUZ6RDtBQXZGWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtLCBFR2FtZUlucHV0RW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBHYW1lSW50ZXJhY3Rpb24gfSBmcm9tICcuLi9HYW1lSW50ZXJhY3Rpb24vR2FtZUludGVyYWN0aW9uJztcbmltcG9ydCBSZXdhcmRDb21ib0l0ZW0gZnJvbSAnLi4vaXRlbXMvUmV3YXJkQ29tYm9JdGVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgUmV3YXJkQ29tYm9CZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgX3RpbWVvdXQgPSAxMjAwMDtcbiAgX3Jld2FyZENvbWJvTm9kZSA9IG51bGw7XG4gIF9yZXdhcmRDb21ib05vZGUyID0gbnVsbDtcbiAgc3RhcnQoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnNob3VsZFNraXAoKSkgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtlbHNlIHtcbiAgICAgIHZhciB0ID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmVmZmVjdE5vZGU7XG4gICAgICBQcm9taXNlLmFsbChbUmV3YXJkQ29tYm9JdGVtLmNyZWF0ZVVJKCksIFJld2FyZENvbWJvSXRlbS5jcmVhdGVVSSgpXSkudGhlbihmdW5jdGlvbiAobykge1xuICAgICAgICB2YXIgbiA9IF9fcmVhZChvLCAyKSxcbiAgICAgICAgICBpID0gblswXSxcbiAgICAgICAgICByID0gblsxXTtcbiAgICAgICAgaWYgKGkgJiYgcikge1xuICAgICAgICAgIGUuX3Jld2FyZENvbWJvTm9kZSA9IGk7XG4gICAgICAgICAgZS5fcmV3YXJkQ29tYm9Ob2RlMiA9IHI7XG4gICAgICAgICAgaS5zZXRQYXJlbnQodCk7XG4gICAgICAgICAgci5zZXRQYXJlbnQodCk7XG4gICAgICAgICAgdmFyIHMgPSBpLmdldENvbXBvbmVudChSZXdhcmRDb21ib0l0ZW0pO1xuICAgICAgICAgIGlmIChzKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHIuZ2V0Q29tcG9uZW50KFJld2FyZENvbWJvSXRlbSk7XG4gICAgICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgICBlLnBsYXlCb251c0F1ZGlvKCk7XG4gICAgICAgICAgICAgIGUuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgICBpLnBvc2l0aW9uID0gY2MudjMoMCwgMCk7XG4gICAgICAgICAgICAgIHIucG9zaXRpb24gPSBjYy52MygwLCAyODApO1xuICAgICAgICAgICAgICBzLnN0YXJ0UGxheUFuaShcImluX2JvbnVzXCIsIGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHIpO1xuICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoaSk7XG4gICAgICAgICAgICAgIGNjLnR3ZWVuKHIpLmRlbGF5KDAuMjMpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGMuc3RhcnRQbGF5QW5pKFwiaW5fY29tYm9Cb251c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICBlLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgZS5hdXRvTWVyZ2VyKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgZS5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaS5kZXN0cm95KCk7XG4gICAgICAgICAgICBlLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGUuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGUuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgb25BYm9ydCgpIHtcbiAgICB2YXIgdDtcbiAgICBudWxsID09PSAodCA9IHRoaXMuY29udGV4dC5nYW1lVmlldykgfHwgdm9pZCAwID09PSB0IHx8IHQuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5jbGVhbnVwTm9kZXMoKTtcbiAgICBzdXBlci5vbkFib3J0LmNhbGwodGhpcyk7XG4gIH1cbiAgY2xlYW51cE5vZGVzKCkge1xuICAgIGlmICh0aGlzLl9yZXdhcmRDb21ib05vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLl9yZXdhcmRDb21ib05vZGUpKSB7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5fcmV3YXJkQ29tYm9Ob2RlKTtcbiAgICAgIHRoaXMuX3Jld2FyZENvbWJvTm9kZS5kZXN0cm95KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXdhcmRDb21ib05vZGUyICYmIGNjLmlzVmFsaWQodGhpcy5fcmV3YXJkQ29tYm9Ob2RlMikpIHtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLl9yZXdhcmRDb21ib05vZGUyKTtcbiAgICAgIHRoaXMuX3Jld2FyZENvbWJvTm9kZTIuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLl9yZXdhcmRDb21ib05vZGUgPSBudWxsO1xuICAgIHRoaXMuX3Jld2FyZENvbWJvTm9kZTIgPSBudWxsO1xuICB9XG4gIGF1dG9NZXJnZXIoKSB7XG4gICAgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uU3RhcnRBdXRvTWVyZ2UsXG4gICAgICB0eXBlOiBcInJld2FyZENvbWJvXCJcbiAgICB9KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJ3ZENvbWJvQmh2X2JvbnVzQXVkXCIpXG4gIHBsYXlCb251c0F1ZGlvKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBtai5hdWRpb01hbmFnZXIucGF1c2VCR00oKTtcbiAgICB0aGlzLmNvbnRleHQuYXBwbGF1c2VBdWRpb0lkID0gLTE7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuQm9udXMsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICBudWxsICE9PSBlLmNvbnRleHQuYXBwbGF1c2VBdWRpb0lkICYmIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkFwcGxhdXNlLCB0cnVlKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGUuY29udGV4dC5hcHBsYXVzZUF1ZGlvSWQgPSB0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSd2RDb21ib0Jodl9zaG91bGRTa2lwXCIpXG4gIHNob3VsZFNraXAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59Il19