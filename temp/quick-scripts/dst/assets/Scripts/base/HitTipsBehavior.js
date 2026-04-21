
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/HitTipsBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d0967/O8lB8p23pYPHsBZh', 'HitTipsBehavior');
// Scripts/base/HitTipsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.HitTipsBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var HitTipsBehavior = /** @class */ (function (_super) {
    __extends(HitTipsBehavior, _super);
    function HitTipsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HitTipsBehavior.prototype.start = function (e) {
        var t = e.data.isClearHit, o = this.context.getTileNodeMap();
        if (t) {
            var n = e.data.tileId1, i = e.data.tileId2, r = o.get(n), s = o.get(i);
            null == r || r.hidePropHint();
            null == s || s.hidePropHint();
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else {
            var c = e.data.tileId1, u = e.data.tileId2;
            if (c && u) {
                r = o.get(c), s = o.get(u);
                null == r || r.showPropHint();
                null == s || s.showPropHint();
                this.triggerShowHintEvent(r, s);
            }
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Hint);
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
    };
    HitTipsBehavior.prototype.triggerShowHintEvent = function (e, t) {
        return {
            tileNode1: e,
            tileNode2: t,
            direction1: 1,
            direction2: -1
        };
    };
    __decorate([
        mj.traitEvent("HitTipsBhv_trgHint")
    ], HitTipsBehavior.prototype, "triggerShowHintEvent", null);
    return HitTipsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.HitTipsBehavior = HitTipsBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvSGl0VGlwc0JlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLDBFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBcUMsbUNBQWlCO0lBQXREOztJQWtDQSxDQUFDO0lBakNDLCtCQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ3ZCLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFDbEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakM7WUFDRCxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCw4Q0FBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsT0FBTztZQUNMLFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDZixDQUFDO0lBQ0osQ0FBQztJQVBEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzsrREFRbkM7SUFDSCxzQkFBQztDQWxDRCxBQWtDQyxDQWxDb0MscUNBQWlCLEdBa0NyRDtBQWxDWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBIaXRUaXBzQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IGUuZGF0YS5pc0NsZWFySGl0LFxuICAgICAgbyA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpO1xuICAgIGlmICh0KSB7XG4gICAgICB2YXIgbiA9IGUuZGF0YS50aWxlSWQxLFxuICAgICAgICBpID0gZS5kYXRhLnRpbGVJZDIsXG4gICAgICAgIHIgPSBvLmdldChuKSxcbiAgICAgICAgcyA9IG8uZ2V0KGkpO1xuICAgICAgbnVsbCA9PSByIHx8IHIuaGlkZVByb3BIaW50KCk7XG4gICAgICBudWxsID09IHMgfHwgcy5oaWRlUHJvcEhpbnQoKTtcbiAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjID0gZS5kYXRhLnRpbGVJZDEsXG4gICAgICAgIHUgPSBlLmRhdGEudGlsZUlkMjtcbiAgICAgIGlmIChjICYmIHUpIHtcbiAgICAgICAgciA9IG8uZ2V0KGMpLCBzID0gby5nZXQodSk7XG4gICAgICAgIG51bGwgPT0gciB8fCByLnNob3dQcm9wSGludCgpO1xuICAgICAgICBudWxsID09IHMgfHwgcy5zaG93UHJvcEhpbnQoKTtcbiAgICAgICAgdGhpcy50cmlnZ2VyU2hvd0hpbnRFdmVudChyLCBzKTtcbiAgICAgIH1cbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELkhpbnQpO1xuICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJIaXRUaXBzQmh2X3RyZ0hpbnRcIilcbiAgdHJpZ2dlclNob3dIaW50RXZlbnQoZSwgdCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aWxlTm9kZTE6IGUsXG4gICAgICB0aWxlTm9kZTI6IHQsXG4gICAgICBkaXJlY3Rpb24xOiAxLFxuICAgICAgZGlyZWN0aW9uMjogLTFcbiAgICB9O1xuICB9XG59Il19