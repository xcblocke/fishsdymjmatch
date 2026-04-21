
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicRevive/Scripts/ClassicReviveTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91348POWD1Jt72+CiCPFsaQ', 'ClassicReviveTrait');
// subpackages/l_classicRevive/Scripts/ClassicReviveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var ClassicReviveTrait = /** @class */ (function (_super) {
    __extends(ClassicReviveTrait, _super);
    function ClassicReviveTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.callBack = null;
        return _this;
    }
    Object.defineProperty(ClassicReviveTrait.prototype, "limitCount", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitCount) && void 0 !== t ? t : 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassicReviveTrait.prototype, "score", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.score) && void 0 !== t ? t : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassicReviveTrait.prototype, "gameCount", {
        get: function () {
            var e, t;
            return null !== (t = null === (e = this._traitData) || void 0 === e ? void 0 : e.gameCount) && void 0 !== t ? t : 2;
        },
        enumerable: false,
        configurable: true
    });
    ClassicReviveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ClassicReviveTrait.prototype.getMessageListeners = function () {
        var _e = {};
        _e[GameEvent_1.EGameEvent.ClassicRevive_UseRevive] = this.onClassicRevive_UseRevive.bind(this);
        return _e;
    };
    ClassicReviveTrait.prototype.onClassicRevive_UseRevive = function (e) {
        if (this.callBack) {
            this.callBack(e);
            this.callBack = null;
        }
    };
    ClassicReviveTrait.prototype.onClcRevChk_canRevive = function (e, t) {
        var o = e.ins;
        if (this.canRevive(o)) {
            t({
                returnType: TraitCallbackReturnType.return,
                returnVal: true,
                isBreak: true
            });
        }
        else {
            t();
        }
    };
    ClassicReviveTrait.prototype.onClcRevBhv_showReviveVw = function (e, t) {
        var o = e.args[0];
        this.showReviveView(function (e) {
            o && o(e);
            t({
                returnType: TraitCallbackReturnType.jump
            });
        });
    };
    ClassicReviveTrait.prototype.canRevive = function (e) {
        var t = e.context.getGameData();
        return !(t.getGameCount() <= this.gameCount) && !(t.getScore() < this.score) && !(t.getReviveCount() >= this.limitCount);
    };
    ClassicReviveTrait.prototype.showReviveView = function (e) {
        this.callBack = e;
        ControllerManager_1.default.getInstance().pushViewByController("ClassicReviveController", {
            bgStyle: {
                blackOpacity: 0
            },
            isShowAction: false
        });
    };
    ClassicReviveTrait.prototype.onAdMgr_videoFailed = function (e, t) {
        if (e.ins) {
            var o = e.ins._videoAdPosition;
            if ([DGameAdShow_1.EAdPosition.InGameMotivation_Revive_Classic].includes(o)) {
                t({
                    isBreak: true
                });
                return;
            }
        }
        t();
    };
    ClassicReviveTrait.traitKey = "ClassicRevive";
    ClassicReviveTrait.nextTimeOut = -1;
    ClassicReviveTrait = __decorate([
        mj.trait,
        mj.class("ClassicReviveTrait")
    ], ClassicReviveTrait);
    return ClassicReviveTrait;
}(Trait_1.default));
exports.default = ClassicReviveTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNSZXZpdmUvU2NyaXB0cy9DbGFzc2ljUmV2aXZlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCwwRkFBcUY7QUFDckYseUVBQXdFO0FBQ3hFLDJFQUEyRTtBQUczRTtJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQTRFQztRQTNFQyxjQUFRLEdBQUcsSUFBSSxDQUFDOztJQTJFbEIsQ0FBQztJQXhFQyxzQkFBSSwwQ0FBVTthQUFkO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2SCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHFDQUFLO2FBQVQ7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xILENBQUM7OztPQUFBO0lBQ0Qsc0JBQUkseUNBQVM7YUFBYjtZQUNFLElBQUks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LEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvQixJQUFJLENBQUMseUJBQVcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0QsQ0FBQyxDQUFDO29CQUNBLE9BQU8sRUFBRSxJQUFJO2lCQUNkLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1I7U0FDRjtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQXpFTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQUMzQiw4QkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBSEwsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQTRFdEM7SUFBRCx5QkFBQztDQTVFRCxBQTRFQyxDQTVFK0MsZUFBSyxHQTRFcEQ7a0JBNUVvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IHsgRUFkUG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvdyc7XG5pbXBvcnQgeyBFR2FtZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUV2ZW50JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2xhc3NpY1Jldml2ZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljUmV2aXZlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIGNhbGxCYWNrID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDbGFzc2ljUmV2aXZlXCI7XG4gIHN0YXRpYyBuZXh0VGltZU91dCA9IC0xO1xuICBnZXQgbGltaXRDb3VudCgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5saW1pdENvdW50KSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMjtcbiAgfVxuICBnZXQgc2NvcmUoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc2NvcmUpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAwO1xuICB9XG4gIGdldCBnYW1lQ291bnQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2FtZUNvdW50KSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMjtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX2UgPSB7fTtcbiAgICBfZVtFR2FtZUV2ZW50LkNsYXNzaWNSZXZpdmVfVXNlUmV2aXZlXSA9IHRoaXMub25DbGFzc2ljUmV2aXZlX1VzZVJldml2ZS5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfZTtcbiAgfVxuICBvbkNsYXNzaWNSZXZpdmVfVXNlUmV2aXZlKGUpIHtcbiAgICBpZiAodGhpcy5jYWxsQmFjaykge1xuICAgICAgdGhpcy5jYWxsQmFjayhlKTtcbiAgICAgIHRoaXMuY2FsbEJhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuICBvbkNsY1JldkNoa19jYW5SZXZpdmUoZSwgdCkge1xuICAgIHZhciBvID0gZS5pbnM7XG4gICAgaWYgKHRoaXMuY2FuUmV2aXZlKG8pKSB7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHRydWUsXG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uQ2xjUmV2Qmh2X3Nob3dSZXZpdmVWdyhlLCB0KSB7XG4gICAgdmFyIG8gPSBlLmFyZ3NbMF07XG4gICAgdGhpcy5zaG93UmV2aXZlVmlldyhmdW5jdGlvbiAoZSkge1xuICAgICAgbyAmJiBvKGUpO1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGNhblJldml2ZShlKSB7XG4gICAgdmFyIHQgPSBlLmNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICByZXR1cm4gISh0LmdldEdhbWVDb3VudCgpIDw9IHRoaXMuZ2FtZUNvdW50KSAmJiAhKHQuZ2V0U2NvcmUoKSA8IHRoaXMuc2NvcmUpICYmICEodC5nZXRSZXZpdmVDb3VudCgpID49IHRoaXMubGltaXRDb3VudCk7XG4gIH1cbiAgc2hvd1Jldml2ZVZpZXcoZSkge1xuICAgIHRoaXMuY2FsbEJhY2sgPSBlO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJDbGFzc2ljUmV2aXZlQ29udHJvbGxlclwiLCB7XG4gICAgICBiZ1N0eWxlOiB7XG4gICAgICAgIGJsYWNrT3BhY2l0eTogMFxuICAgICAgfSxcbiAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBvbkFkTWdyX3ZpZGVvRmFpbGVkKGUsIHQpIHtcbiAgICBpZiAoZS5pbnMpIHtcbiAgICAgIHZhciBvID0gZS5pbnMuX3ZpZGVvQWRQb3NpdGlvbjtcbiAgICAgIGlmIChbRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9SZXZpdmVfQ2xhc3NpY10uaW5jbHVkZXMobykpIHtcbiAgICAgICAgdCh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0KCk7XG4gIH1cbn0iXX0=