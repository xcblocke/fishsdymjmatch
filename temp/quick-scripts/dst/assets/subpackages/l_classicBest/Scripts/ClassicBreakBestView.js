
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicBest/Scripts/ClassicBreakBestView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8eb15dTfIJLqZOcbE3r/kRG', 'ClassicBreakBestView');
// subpackages/l_classicBest/Scripts/ClassicBreakBestView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Adapter_1 = require("../../../Scripts/component/Adapter");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ClassicBestTypes_1 = require("./ClassicBestTypes");
var ClassicBreakBestView = /** @class */ (function (_super) {
    __extends(ClassicBreakBestView, _super);
    function ClassicBreakBestView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgNode = null;
        _this.effect1 = null;
        _this.effect2 = null;
        _this.effect3 = null;
        _this.effect4 = null;
        _this.spine1 = null;
        _this.spine2 = null;
        _this.spine3 = null;
        _this.spine4 = null;
        _this.type = ClassicBestTypes_1.EClassicBreakType.None;
        _this.isInit = false;
        return _this;
    }
    ClassicBreakBestView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponent();
        this.tryPlayAction();
    };
    ClassicBreakBestView.prototype.initComponent = function () {
        if (!this.isInit) {
            this.bgNode = cc.find("bg", this.node);
            this.bgNode.active = false;
            this.effect1 = cc.find("Effect1", this.node);
            this.effect2 = cc.find("Effect2", this.node);
            this.effect3 = cc.find("Effect3", this.node);
            this.effect4 = cc.find("Effect4", this.node);
            this.spine1 = this.effect1.addComponent(BaseSpine_1.default);
            this.spine2 = this.effect2.addComponent(BaseSpine_1.default);
            this.spine3 = this.effect3.addComponent(BaseSpine_1.default);
            this.spine4 = this.effect4.addComponent(BaseSpine_1.default);
            this.spine1.markReady("");
            this.spine2.markReady("");
            this.spine3.markReady("");
            this.spine4.markReady("");
            Adapter_1.default.adaptBgSize(this.bgNode);
            this.isInit = true;
        }
    };
    ClassicBreakBestView.prototype.setBreakType = function (e) {
        this.type = e;
        this.tryPlayAction();
    };
    ClassicBreakBestView.prototype.tryPlayAction = function () {
        this.type !== ClassicBestTypes_1.EClassicBreakType.None && cc.isValid(this.bgNode) && this.startPlayAction();
    };
    ClassicBreakBestView.prototype.startPlayAction = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicBreakRecord);
        this.spineAnim();
    };
    ClassicBreakBestView.prototype.spineAnim = function () {
        this.effect1.active = false;
        this.effect2.active = false;
        this.effect3.active = false;
        this.effect4.active = false;
        switch (this.type) {
            case ClassicBestTypes_1.EClassicBreakType.Best:
                this.playBestAnim();
                break;
            case ClassicBestTypes_1.EClassicBreakType.Today:
                this.playTodayAnim();
                break;
            case ClassicBestTypes_1.EClassicBreakType.Week:
                this.playWeekAnim();
                break;
            default:
                this.hideEffect();
        }
    };
    ClassicBreakBestView.prototype.playBestAnim = function () {
        var e = this;
        this.effect1.active = true;
        this.effect2.active = true;
        this.spine1.setAnimation("in", 1, null);
        this.spine2.setAnimation("in", 1, function () {
            e.hideEffect();
        });
    };
    ClassicBreakBestView.prototype.playTodayAnim = function () {
        var e = this;
        this.effect3.active = true;
        this.spine3.setAnimation("in_todayBest", 1, function () {
            e.hideEffect();
        });
    };
    ClassicBreakBestView.prototype.playWeekAnim = function () {
        var e = this;
        this.effect4.active = true;
        this.spine4.setAnimation("in_weekBest", 1, function () {
            e.hideEffect();
        });
    };
    ClassicBreakBestView.prototype.hideEffect = function () {
        var e = this;
        this.bgNode.opacity = 190;
        cc.tween(this.bgNode).to(0.2, {
            opacity: 0
        }).call(function () {
            cc.isValid(e.node) && e.node.destroy();
        }).start();
    };
    ClassicBreakBestView.prefabUrl = "prefabs/BestScoreWord";
    ClassicBreakBestView.bundleName = "l_classicBest";
    ClassicBreakBestView = __decorate([
        mj.class
    ], ClassicBreakBestView);
    return ClassicBreakBestView;
}(BaseUI_1.default));
exports.default = ClassicBreakBestView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNCZXN0L1NjcmlwdHMvQ2xhc3NpY0JyZWFrQmVzdFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RCx3RkFBa0Y7QUFDbEYsK0RBQTBEO0FBQzFELHlFQUFvRTtBQUNwRSx1REFBdUQ7QUFFdkQ7SUFBa0Qsd0NBQU07SUFBeEQ7UUFBQSxxRUFxR0M7UUFwR0MsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsVUFBSSxHQUFHLG9DQUFpQixDQUFDLElBQUksQ0FBQztRQUM5QixZQUFNLEdBQUcsS0FBSyxDQUFDOztJQTBGakIsQ0FBQztJQXZGQyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCw0Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVB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TyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXhGTSw4QkFBUyxHQUFHLHVCQUF1QixDQUFDO0lBQ3BDLCtCQUFVLEdBQUcsZUFBZSxDQUFDO0lBYmpCLG9CQUFvQjtRQUR4QyxFQUFFLENBQUMsS0FBSztPQUNZLG9CQUFvQixDQXFHeEM7SUFBRCwyQkFBQztDQXJHRCxBQXFHQyxDQXJHaUQsZ0JBQU0sR0FxR3ZEO2tCQXJHb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkYXB0ZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb21wb25lbnQvQWRhcHRlcic7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRUNsYXNzaWNCcmVha1R5cGUgfSBmcm9tICcuL0NsYXNzaWNCZXN0VHlwZXMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGFzc2ljQnJlYWtCZXN0VmlldyBleHRlbmRzIEJhc2VVSSB7XG4gIGJnTm9kZSA9IG51bGw7XG4gIGVmZmVjdDEgPSBudWxsO1xuICBlZmZlY3QyID0gbnVsbDtcbiAgZWZmZWN0MyA9IG51bGw7XG4gIGVmZmVjdDQgPSBudWxsO1xuICBzcGluZTEgPSBudWxsO1xuICBzcGluZTIgPSBudWxsO1xuICBzcGluZTMgPSBudWxsO1xuICBzcGluZTQgPSBudWxsO1xuICB0eXBlID0gRUNsYXNzaWNCcmVha1R5cGUuTm9uZTtcbiAgaXNJbml0ID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvQmVzdFNjb3JlV29yZFwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwibF9jbGFzc2ljQmVzdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0Q29tcG9uZW50KCk7XG4gICAgdGhpcy50cnlQbGF5QWN0aW9uKCk7XG4gIH1cbiAgaW5pdENvbXBvbmVudCgpIHtcbiAgICBpZiAoIXRoaXMuaXNJbml0KSB7XG4gICAgICB0aGlzLmJnTm9kZSA9IGNjLmZpbmQoXCJiZ1wiLCB0aGlzLm5vZGUpO1xuICAgICAgdGhpcy5iZ05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmVmZmVjdDEgPSBjYy5maW5kKFwiRWZmZWN0MVwiLCB0aGlzLm5vZGUpO1xuICAgICAgdGhpcy5lZmZlY3QyID0gY2MuZmluZChcIkVmZmVjdDJcIiwgdGhpcy5ub2RlKTtcbiAgICAgIHRoaXMuZWZmZWN0MyA9IGNjLmZpbmQoXCJFZmZlY3QzXCIsIHRoaXMubm9kZSk7XG4gICAgICB0aGlzLmVmZmVjdDQgPSBjYy5maW5kKFwiRWZmZWN0NFwiLCB0aGlzLm5vZGUpO1xuICAgICAgdGhpcy5zcGluZTEgPSB0aGlzLmVmZmVjdDEuYWRkQ29tcG9uZW50KEJhc2VTcGluZSk7XG4gICAgICB0aGlzLnNwaW5lMiA9IHRoaXMuZWZmZWN0Mi5hZGRDb21wb25lbnQoQmFzZVNwaW5lKTtcbiAgICAgIHRoaXMuc3BpbmUzID0gdGhpcy5lZmZlY3QzLmFkZENvbXBvbmVudChCYXNlU3BpbmUpO1xuICAgICAgdGhpcy5zcGluZTQgPSB0aGlzLmVmZmVjdDQuYWRkQ29tcG9uZW50KEJhc2VTcGluZSk7XG4gICAgICB0aGlzLnNwaW5lMS5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLnNwaW5lMi5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLnNwaW5lMy5tYXJrUmVhZHkoXCJcIik7XG4gICAgICB0aGlzLnNwaW5lNC5tYXJrUmVhZHkoXCJcIik7XG4gICAgICBBZGFwdGVyLmFkYXB0QmdTaXplKHRoaXMuYmdOb2RlKTtcbiAgICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgc2V0QnJlYWtUeXBlKGUpIHtcbiAgICB0aGlzLnR5cGUgPSBlO1xuICAgIHRoaXMudHJ5UGxheUFjdGlvbigpO1xuICB9XG4gIHRyeVBsYXlBY3Rpb24oKSB7XG4gICAgdGhpcy50eXBlICE9PSBFQ2xhc3NpY0JyZWFrVHlwZS5Ob25lICYmIGNjLmlzVmFsaWQodGhpcy5iZ05vZGUpICYmIHRoaXMuc3RhcnRQbGF5QWN0aW9uKCk7XG4gIH1cbiAgc3RhcnRQbGF5QWN0aW9uKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkNsYXNzaWNCcmVha1JlY29yZCk7XG4gICAgdGhpcy5zcGluZUFuaW0oKTtcbiAgfVxuICBzcGluZUFuaW0oKSB7XG4gICAgdGhpcy5lZmZlY3QxLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZWZmZWN0Mi5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmVmZmVjdDMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5lZmZlY3Q0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlIEVDbGFzc2ljQnJlYWtUeXBlLkJlc3Q6XG4gICAgICAgIHRoaXMucGxheUJlc3RBbmltKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFQ2xhc3NpY0JyZWFrVHlwZS5Ub2RheTpcbiAgICAgICAgdGhpcy5wbGF5VG9kYXlBbmltKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFQ2xhc3NpY0JyZWFrVHlwZS5XZWVrOlxuICAgICAgICB0aGlzLnBsYXlXZWVrQW5pbSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuaGlkZUVmZmVjdCgpO1xuICAgIH1cbiAgfVxuICBwbGF5QmVzdEFuaW0oKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuZWZmZWN0MS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuZWZmZWN0Mi5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3BpbmUxLnNldEFuaW1hdGlvbihcImluXCIsIDEsIG51bGwpO1xuICAgIHRoaXMuc3BpbmUyLnNldEFuaW1hdGlvbihcImluXCIsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuaGlkZUVmZmVjdCgpO1xuICAgIH0pO1xuICB9XG4gIHBsYXlUb2RheUFuaW0oKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuZWZmZWN0My5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3BpbmUzLnNldEFuaW1hdGlvbihcImluX3RvZGF5QmVzdFwiLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlLmhpZGVFZmZlY3QoKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5V2Vla0FuaW0oKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuZWZmZWN0NC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3BpbmU0LnNldEFuaW1hdGlvbihcImluX3dlZWtCZXN0XCIsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuaGlkZUVmZmVjdCgpO1xuICAgIH0pO1xuICB9XG4gIGhpZGVFZmZlY3QoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuYmdOb2RlLm9wYWNpdHkgPSAxOTA7XG4gICAgY2MudHdlZW4odGhpcy5iZ05vZGUpLnRvKDAuMiwge1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgY2MuaXNWYWxpZChlLm5vZGUpICYmIGUubm9kZS5kZXN0cm95KCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxufSJdfQ==