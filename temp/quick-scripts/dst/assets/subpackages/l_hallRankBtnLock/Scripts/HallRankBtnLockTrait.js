
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallRankBtnLock/Scripts/HallRankBtnLockTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7c5eAJoFhPlZJi/ygTvXzO', 'HallRankBtnLockTrait');
// subpackages/l_hallRankBtnLock/Scripts/HallRankBtnLockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var HallRankBtnLockTrait = /** @class */ (function (_super) {
    __extends(HallRankBtnLockTrait, _super);
    function HallRankBtnLockTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rankTrait = null;
        _this._rankUnopenSpine = null;
        _this._lockSpine = null;
        return _this;
    }
    HallRankBtnLockTrait.prototype.onRankTrait_startEnterHall = function (t, e) {
        e();
        this._rankTrait = t.ins;
    };
    HallRankBtnLockTrait.prototype.onRankTrait_checkLv = function (t, e) {
        e({
            returnVal: true,
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return
        });
    };
    HallRankBtnLockTrait.prototype.onRankBtn_updateAll = function (t, e) {
        if (this._rankTrait) {
            var n = t.ins;
            if (cc.isValid(n._labelTime)) {
                var i = this.isRankOpen();
                n.node.getChildByName("bg").active = i;
                var r = n._labelTime, o = r.getComponent(cc.Label);
                r.setPosition(i ? 0 : 19, r.position.y);
                o.fontSize = i ? 30 : 36;
                var a = n._labelRankNode.getComponent(cc.Label);
                if (i) {
                    this.destroyRankUnopenSpine();
                    this.destroyLockSpine();
                    this.changeLockState(true, n);
                    e();
                }
                else {
                    this.createRankUnopenSpine(n.node);
                    this.createLockSpine(n.node);
                    var c = this.getUnlockLevel(), p = this.getLevel(c);
                    p || (p = c);
                    o.string = "Lv." + p;
                    a.string = "";
                    this.changeLockState(false, n);
                    e({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
            }
            else
                e();
        }
        else
            e();
    };
    HallRankBtnLockTrait.prototype.changeLockState = function () { };
    HallRankBtnLockTrait.prototype.onRankBtn_closeOutCD = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump
        });
    };
    HallRankBtnLockTrait.prototype.onRankBtn_click = function (t, e) {
        if (this._rankTrait) {
            if (this.isRankOpen())
                e();
            else {
                this.playLockAnim();
                var n = this.getUnlockLevel(), i = this.getOpenTips(n);
                ControllerManager_1.default.getInstance().pushViewByController("LockTipsController", {
                    isReuse: false,
                    tips: i,
                    noBlock: true,
                    isGlobal: false,
                    bgStyle: null,
                    isShowAction: false
                });
                e({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return
                });
            }
        }
        else
            e();
    };
    HallRankBtnLockTrait.prototype.getLevel = function (t) {
        return t;
    };
    HallRankBtnLockTrait.prototype.getUnlockLevel = function () {
        var t, e;
        return null === (e = null === (t = this._rankTrait.traitData) || void 0 === t ? void 0 : t.config) || void 0 === e ? void 0 : e.unLockLevel;
    };
    HallRankBtnLockTrait.prototype.getOpenTips = function (t) {
        return I18NStrings_1.default.get("Common_Reward_target_1", "Finish Level {0}").replace("{0}", String(t));
    };
    HallRankBtnLockTrait.prototype.isRankOpen = function () {
        return !!this._rankTrait && UserModel_1.default.getInstance().getMainGameData().getLevelId() > this.getUnlockLevel();
    };
    HallRankBtnLockTrait.prototype.createRankUnopenSpine = function (t) {
        if (!cc.isValid(this._rankUnopenSpine) && cc.isValid(t)) {
            var e = BaseSpine_1.default.create("spine/rank/main_iconB_gardeningMaster", "init", -1, null, false);
            e.node.parent = t;
            e.node.position = cc.v3(0, 0, 0);
            e.node.setSiblingIndex(0);
            this._rankUnopenSpine = e;
        }
    };
    HallRankBtnLockTrait.prototype.playLockAnim = function () {
        if (cc.isValid(this._lockSpine)) {
            var t = this._lockSpine.getSkeleton();
            GameUtils_1.default.playSpine(t, "in", false, function () {
                GameUtils_1.default.playSpine(t, "init", true);
            });
        }
    };
    HallRankBtnLockTrait.prototype.destroyRankUnopenSpine = function () {
        if (cc.isValid(this._rankUnopenSpine)) {
            this._rankUnopenSpine.node.destroy();
            this._rankUnopenSpine = null;
        }
    };
    HallRankBtnLockTrait.prototype.createLockSpine = function (t) {
        if (!cc.isValid(this._lockSpine) && cc.isValid(t)) {
            var e = BaseSpine_1.default.create("spine/lock/main_icon_lock", "init", 1, null, false);
            e.node.parent = t;
            e.node.position = cc.v3(-63, -53);
            this._lockSpine = e;
        }
    };
    HallRankBtnLockTrait.prototype.destroyLockSpine = function () {
        if (cc.isValid(this._lockSpine)) {
            this._lockSpine.node.destroy();
            this._lockSpine = null;
        }
    };
    HallRankBtnLockTrait.traitKey = "HallRankBtnLock";
    __decorate([
        mj.traitEvent("HallRankBLockTt_chgLock")
    ], HallRankBtnLockTrait.prototype, "changeLockState", null);
    __decorate([
        mj.traitEvent("HallRankBLockTt_getLv")
    ], HallRankBtnLockTrait.prototype, "getLevel", null);
    __decorate([
        mj.traitEvent("HallRankBLockTt_unlockLv")
    ], HallRankBtnLockTrait.prototype, "getUnlockLevel", null);
    __decorate([
        mj.traitEvent("HallRankBLockTt_getOTips")
    ], HallRankBtnLockTrait.prototype, "getOpenTips", null);
    __decorate([
        mj.traitEvent("HallRankBLockTt_crtBtnSp")
    ], HallRankBtnLockTrait.prototype, "createRankUnopenSpine", null);
    __decorate([
        mj.traitEvent("HallRankBLockTt_doLckAni")
    ], HallRankBtnLockTrait.prototype, "playLockAnim", null);
    HallRankBtnLockTrait = __decorate([
        mj.trait,
        mj.class("HallRankBtnLockTrait")
    ], HallRankBtnLockTrait);
    return HallRankBtnLockTrait;
}(Trait_1.default));
exports.default = HallRankBtnLockTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxSYW5rQnRuTG9jay9TY3JpcHRzL0hhbGxSYW5rQnRuTG9ja1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSwwRkFBcUY7QUFDckYseUVBQW9FO0FBQ3BFLDJFQUFzRTtBQUN0RSw0RUFBdUU7QUFHdkU7SUFBa0Qsd0NBQUs7SUFBdkQ7UUFBQSxxRUFvSUM7UUFuSUMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLGdCQUFVLEdBQUcsSUFBSSxDQUFDOztJQWlJcEIsQ0FBQztJQS9IQyx5REFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDMUIsQ0FBQztJQUNELGtEQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtEQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNkLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFH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LyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBJMThOU3RyaW5ncyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhbGxSYW5rQnRuTG9ja1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYWxsUmFua0J0bkxvY2tUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3JhbmtUcmFpdCA9IG51bGw7XG4gIF9yYW5rVW5vcGVuU3BpbmUgPSBudWxsO1xuICBfbG9ja1NwaW5lID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJIYWxsUmFua0J0bkxvY2tcIjtcbiAgb25SYW5rVHJhaXRfc3RhcnRFbnRlckhhbGwodCwgZSkge1xuICAgIGUoKTtcbiAgICB0aGlzLl9yYW5rVHJhaXQgPSB0LmlucztcbiAgfVxuICBvblJhbmtUcmFpdF9jaGVja0x2KHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdHJ1ZSxcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxuICBvblJhbmtCdG5fdXBkYXRlQWxsKHQsIGUpIHtcbiAgICBpZiAodGhpcy5fcmFua1RyYWl0KSB7XG4gICAgICB2YXIgbiA9IHQuaW5zO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobi5fbGFiZWxUaW1lKSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuaXNSYW5rT3BlbigpO1xuICAgICAgICBuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hY3RpdmUgPSBpO1xuICAgICAgICB2YXIgciA9IG4uX2xhYmVsVGltZSxcbiAgICAgICAgICBvID0gci5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICByLnNldFBvc2l0aW9uKGkgPyAwIDogMTksIHIucG9zaXRpb24ueSk7XG4gICAgICAgIG8uZm9udFNpemUgPSBpID8gMzAgOiAzNjtcbiAgICAgICAgdmFyIGEgPSBuLl9sYWJlbFJhbmtOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgdGhpcy5kZXN0cm95UmFua1Vub3BlblNwaW5lKCk7XG4gICAgICAgICAgdGhpcy5kZXN0cm95TG9ja1NwaW5lKCk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VMb2NrU3RhdGUodHJ1ZSwgbik7XG4gICAgICAgICAgZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3JlYXRlUmFua1Vub3BlblNwaW5lKG4ubm9kZSk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVMb2NrU3BpbmUobi5ub2RlKTtcbiAgICAgICAgICB2YXIgYyA9IHRoaXMuZ2V0VW5sb2NrTGV2ZWwoKSxcbiAgICAgICAgICAgIHAgPSB0aGlzLmdldExldmVsKGMpO1xuICAgICAgICAgIHAgfHwgKHAgPSBjKTtcbiAgICAgICAgICBvLnN0cmluZyA9IFwiTHYuXCIgKyBwO1xuICAgICAgICAgIGEuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICB0aGlzLmNoYW5nZUxvY2tTdGF0ZShmYWxzZSwgbik7XG4gICAgICAgICAgZSh7XG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkhhbGxSYW5rQkxvY2tUdF9jaGdMb2NrXCIpXG4gIGNoYW5nZUxvY2tTdGF0ZSgpIHt9XG4gIG9uUmFua0J0bl9jbG9zZU91dENEKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICB9KTtcbiAgfVxuICBvblJhbmtCdG5fY2xpY2sodCwgZSkge1xuICAgIGlmICh0aGlzLl9yYW5rVHJhaXQpIHtcbiAgICAgIGlmICh0aGlzLmlzUmFua09wZW4oKSkgZSgpO2Vsc2Uge1xuICAgICAgICB0aGlzLnBsYXlMb2NrQW5pbSgpO1xuICAgICAgICB2YXIgbiA9IHRoaXMuZ2V0VW5sb2NrTGV2ZWwoKSxcbiAgICAgICAgICBpID0gdGhpcy5nZXRPcGVuVGlwcyhuKTtcbiAgICAgICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIkxvY2tUaXBzQ29udHJvbGxlclwiLCB7XG4gICAgICAgICAgaXNSZXVzZTogZmFsc2UsXG4gICAgICAgICAgdGlwczogaSxcbiAgICAgICAgICBub0Jsb2NrOiB0cnVlLFxuICAgICAgICAgIGlzR2xvYmFsOiBmYWxzZSxcbiAgICAgICAgICBiZ1N0eWxlOiBudWxsLFxuICAgICAgICAgIGlzU2hvd0FjdGlvbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIGUoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsUmFua0JMb2NrVHRfZ2V0THZcIilcbiAgZ2V0TGV2ZWwodCkge1xuICAgIHJldHVybiB0O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSGFsbFJhbmtCTG9ja1R0X3VubG9ja0x2XCIpXG4gIGdldFVubG9ja0xldmVsKCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsID09PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy5fcmFua1RyYWl0LnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5jb25maWcpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUudW5Mb2NrTGV2ZWw7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsUmFua0JMb2NrVHRfZ2V0T1RpcHNcIilcbiAgZ2V0T3BlblRpcHModCkge1xuICAgIHJldHVybiBJMThOU3RyaW5ncy5nZXQoXCJDb21tb25fUmV3YXJkX3RhcmdldF8xXCIsIFwiRmluaXNoIExldmVsIHswfVwiKS5yZXBsYWNlKFwiezB9XCIsIFN0cmluZyh0KSk7XG4gIH1cbiAgaXNSYW5rT3BlbigpIHtcbiAgICByZXR1cm4gISF0aGlzLl9yYW5rVHJhaXQgJiYgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0TWFpbkdhbWVEYXRhKCkuZ2V0TGV2ZWxJZCgpID4gdGhpcy5nZXRVbmxvY2tMZXZlbCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiSGFsbFJhbmtCTG9ja1R0X2NydEJ0blNwXCIpXG4gIGNyZWF0ZVJhbmtVbm9wZW5TcGluZSh0KSB7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKHRoaXMuX3JhbmtVbm9wZW5TcGluZSkgJiYgY2MuaXNWYWxpZCh0KSkge1xuICAgICAgdmFyIGUgPSBCYXNlU3BpbmUuY3JlYXRlKFwic3BpbmUvcmFuay9tYWluX2ljb25CX2dhcmRlbmluZ01hc3RlclwiLCBcImluaXRcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICAgIGUubm9kZS5wYXJlbnQgPSB0O1xuICAgICAgZS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICBlLm5vZGUuc2V0U2libGluZ0luZGV4KDApO1xuICAgICAgdGhpcy5fcmFua1Vub3BlblNwaW5lID0gZTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIYWxsUmFua0JMb2NrVHRfZG9MY2tBbmlcIilcbiAgcGxheUxvY2tBbmltKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX2xvY2tTcGluZSkpIHtcbiAgICAgIHZhciB0ID0gdGhpcy5fbG9ja1NwaW5lLmdldFNrZWxldG9uKCk7XG4gICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHQsIFwiaW5cIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0LCBcImluaXRcIiwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZGVzdHJveVJhbmtVbm9wZW5TcGluZSgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9yYW5rVW5vcGVuU3BpbmUpKSB7XG4gICAgICB0aGlzLl9yYW5rVW5vcGVuU3BpbmUubm9kZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9yYW5rVW5vcGVuU3BpbmUgPSBudWxsO1xuICAgIH1cbiAgfVxuICBjcmVhdGVMb2NrU3BpbmUodCkge1xuICAgIGlmICghY2MuaXNWYWxpZCh0aGlzLl9sb2NrU3BpbmUpICYmIGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIHZhciBlID0gQmFzZVNwaW5lLmNyZWF0ZShcInNwaW5lL2xvY2svbWFpbl9pY29uX2xvY2tcIiwgXCJpbml0XCIsIDEsIG51bGwsIGZhbHNlKTtcbiAgICAgIGUubm9kZS5wYXJlbnQgPSB0O1xuICAgICAgZS5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTYzLCAtNTMpO1xuICAgICAgdGhpcy5fbG9ja1NwaW5lID0gZTtcbiAgICB9XG4gIH1cbiAgZGVzdHJveUxvY2tTcGluZSgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9sb2NrU3BpbmUpKSB7XG4gICAgICB0aGlzLl9sb2NrU3BpbmUubm9kZS5kZXN0cm95KCk7XG4gICAgICB0aGlzLl9sb2NrU3BpbmUgPSBudWxsO1xuICAgIH1cbiAgfVxufSJdfQ==