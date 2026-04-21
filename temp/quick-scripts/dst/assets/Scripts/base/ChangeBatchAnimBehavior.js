
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ChangeBatchAnimBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fcf60/7AwVGR55lTBv0HJ89', 'ChangeBatchAnimBehavior');
// Scripts/base/ChangeBatchAnimBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeBatchAnimBehavior = void 0;
var BaseLabel_1 = require("../gamePlay/base/ui/BaseLabel");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var ChangeBatchAnimBehavior = /** @class */ (function (_super) {
    __extends(ChangeBatchAnimBehavior, _super);
    function ChangeBatchAnimBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isOpenGenerateState = false;
        return _this;
    }
    ChangeBatchAnimBehavior.prototype.onAbort = function () {
        this.isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(false);
        _super.prototype.onAbort.call(this);
    };
    ChangeBatchAnimBehavior.prototype.start = function (e) {
        var t = this, o = e.data.batchId;
        this.isOpenGenerateState = e.data.isOpenGenerateState;
        this.isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(true);
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicBatch);
        this.playStageAnim(o, function () {
            t.onAnimFinish();
            t.isOpenGenerateState || t.context.gameView.setSwallowEventNodeActive(false);
            t.finish();
        });
    };
    ChangeBatchAnimBehavior.prototype.onAnimFinish = function () { };
    ChangeBatchAnimBehavior.prototype.playStageAnim = function (e, t) {
        if (e === void 0) { e = 0; }
        var o;
        e += 1;
        var n = this.context.gameView.effectNode, i = BaseSpine_1.default.create("spine/classicstage/gameplay_tile_newStage", "in", 1, null, true);
        i.node.name = "Stage";
        null === (o = i.getSkeleton()) || void 0 === o || o.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        i.attachNodeWithAlpha("hook_text", "slot_text", function () {
            var t = I18NStrings_1.default.get("classic_stage", "Stage"), o = I18NStrings_1.default.stringFormat(t + " {0}", e), n = BaseLabel_1.default.create(o, "font/SPARTAN-BOLD", "mainRes", 70);
            n.node.name = "Stage";
            n.setColor(new cc.Color().fromHEX("#fff5c5"));
            var i = n.node.addComponent(cc.LabelOutline);
            i.color = new cc.Color().fromHEX("#d14a00");
            i.width = 3;
            n.setAlign(cc.Label.HorizontalAlign.CENTER, cc.Label.VerticalAlign.CENTER);
            return n.node;
        });
        i.getSkeleton().setEventListener(function (e, o) {
            "newStage" === o.data.name && (null == t || t());
        });
        n.addChild(i.node);
    };
    __decorate([
        mj.traitEvent("ChgBatchAnimBhv_start")
    ], ChangeBatchAnimBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("ChgBatchAnimBhv_finish")
    ], ChangeBatchAnimBehavior.prototype, "onAnimFinish", null);
    return ChangeBatchAnimBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ChangeBatchAnimBehavior = ChangeBatchAnimBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQ2hhbmdlQmF0Y2hBbmltQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsMkRBQXNEO0FBQ3RELDBFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQsNkRBQXdEO0FBQ3hEO0lBQTZDLDJDQUFpQjtJQUE5RDtRQUFBLHFFQTZDQztRQTVDQyx5QkFBbUIsR0FBRyxLQUFLLENBQUM7O0lBNEM5QixDQUFDO0lBM0NDLHlDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkYsaUJBQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsdUNBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3RELElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsbUJBQW1CLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0UsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQVksR0FBWixjQUFnQixDQUFDO0lBQ2pCLCtDQUFhLEdBQWIsVUFBYyxDQUFLLEVBQUUsQ0FBRTtRQUFULGtCQUFBLEVBQUEsS0FBSztRQUNqQixJQUFJLENBQUMsQ0FBQztRQUNOLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQ3RDLENBQUMsR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQywyQ0FBMkMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDdEIsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuSCxDQUFDLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRTtZQUM5QyxJQUFJLENBQUMsR0FBRyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLEVBQy9DLENBQUMsR0FBRyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUMzQyxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM5RCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7WUFDdEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDWixDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUM3QyxVQUFVLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBckNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzt3REFZdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7K0RBQ3ZCO0lBeUJuQiw4QkFBQztDQTdDRCxBQTZDQyxDQTdDNEMscUNBQWlCLEdBNkM3RDtBQTdDWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUxhYmVsIGZyb20gJy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZUxhYmVsJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuZXhwb3J0IGNsYXNzIENoYW5nZUJhdGNoQW5pbUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBpc09wZW5HZW5lcmF0ZVN0YXRlID0gZmFsc2U7XG4gIG9uQWJvcnQoKSB7XG4gICAgdGhpcy5pc09wZW5HZW5lcmF0ZVN0YXRlIHx8IHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICBzdXBlci5vbkFib3J0LmNhbGwodGhpcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJDaGdCYXRjaEFuaW1CaHZfc3RhcnRcIilcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSBlLmRhdGEuYmF0Y2hJZDtcbiAgICB0aGlzLmlzT3BlbkdlbmVyYXRlU3RhdGUgPSBlLmRhdGEuaXNPcGVuR2VuZXJhdGVTdGF0ZTtcbiAgICB0aGlzLmlzT3BlbkdlbmVyYXRlU3RhdGUgfHwgdGhpcy5jb250ZXh0LmdhbWVWaWV3LnNldFN3YWxsb3dFdmVudE5vZGVBY3RpdmUodHJ1ZSk7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuQ2xhc3NpY0JhdGNoKTtcbiAgICB0aGlzLnBsYXlTdGFnZUFuaW0obywgZnVuY3Rpb24gKCkge1xuICAgICAgdC5vbkFuaW1GaW5pc2goKTtcbiAgICAgIHQuaXNPcGVuR2VuZXJhdGVTdGF0ZSB8fCB0LmNvbnRleHQuZ2FtZVZpZXcuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZShmYWxzZSk7XG4gICAgICB0LmZpbmlzaCgpO1xuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQ2hnQmF0Y2hBbmltQmh2X2ZpbmlzaFwiKVxuICBvbkFuaW1GaW5pc2goKSB7fVxuICBwbGF5U3RhZ2VBbmltKGUgPSAwLCB0Pykge1xuICAgIHZhciBvO1xuICAgIGUgKz0gMTtcbiAgICB2YXIgbiA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5lZmZlY3ROb2RlLFxuICAgICAgaSA9IEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS9jbGFzc2ljc3RhZ2UvZ2FtZXBsYXlfdGlsZV9uZXdTdGFnZVwiLCBcImluXCIsIDEsIG51bGwsIHRydWUpO1xuICAgIGkubm9kZS5uYW1lID0gXCJTdGFnZVwiO1xuICAgIG51bGwgPT09IChvID0gaS5nZXRTa2VsZXRvbigpKSB8fCB2b2lkIDAgPT09IG8gfHwgby5zZXRBbmltYXRpb25DYWNoZU1vZGUoc3AuU2tlbGV0b24uQW5pbWF0aW9uQ2FjaGVNb2RlLlJFQUxUSU1FKTtcbiAgICBpLmF0dGFjaE5vZGVXaXRoQWxwaGEoXCJob29rX3RleHRcIiwgXCJzbG90X3RleHRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQgPSBJMThOU3RyaW5ncy5nZXQoXCJjbGFzc2ljX3N0YWdlXCIsIFwiU3RhZ2VcIiksXG4gICAgICAgIG8gPSBJMThOU3RyaW5ncy5zdHJpbmdGb3JtYXQodCArIFwiIHswfVwiLCBlKSxcbiAgICAgICAgbiA9IEJhc2VMYWJlbC5jcmVhdGUobywgXCJmb250L1NQQVJUQU4tQk9MRFwiLCBcIm1haW5SZXNcIiwgNzApO1xuICAgICAgbi5ub2RlLm5hbWUgPSBcIlN0YWdlXCI7XG4gICAgICBuLnNldENvbG9yKG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjZmZmNWM1XCIpKTtcbiAgICAgIHZhciBpID0gbi5ub2RlLmFkZENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpO1xuICAgICAgaS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjZDE0YTAwXCIpO1xuICAgICAgaS53aWR0aCA9IDM7XG4gICAgICBuLnNldEFsaWduKGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVIsIGNjLkxhYmVsLlZlcnRpY2FsQWxpZ24uQ0VOVEVSKTtcbiAgICAgIHJldHVybiBuLm5vZGU7XG4gICAgfSk7XG4gICAgaS5nZXRTa2VsZXRvbigpLnNldEV2ZW50TGlzdGVuZXIoZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgIFwibmV3U3RhZ2VcIiA9PT0gby5kYXRhLm5hbWUgJiYgKG51bGwgPT0gdCB8fCB0KCkpO1xuICAgIH0pO1xuICAgIG4uYWRkQ2hpbGQoaS5ub2RlKTtcbiAgfVxufSJdfQ==