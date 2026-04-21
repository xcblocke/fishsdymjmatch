
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tracker/TrackerModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b229azGe65OXKeTqYrwJBjI', 'TrackerModifier');
// Scripts/process/tracker/TrackerModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameInputEnum_1 = require("../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var TrackerInterface_1 = require("../../tracker/TrackerInterface");
var TrackerModifier = /** @class */ (function (_super) {
    __extends(TrackerModifier, _super);
    function TrackerModifier(t) {
        return _super.call(this, t) || this;
    }
    TrackerModifier.prototype.triggerInvalid = function (e) {
        this.context.isVideo || this.context.getGameTracker() && this.context.getGameTracker().pushStep(this.context, {
            cmd: TrackerInterface_1.EGameStepCmd.Invalid,
            tileId: e
        });
    };
    TrackerModifier.prototype.triggerClear = function (e, t, o) {
        var n;
        if (!this.context.isVideo && this.context.getGameTracker()) {
            var i = TrackerInterface_1.EClearType.Single, r = false;
            if (e.inputType === GameInputEnum_1.EGameInputEnum.TouchStart)
                (null === (n = e) || void 0 === n ? void 0 : n.multiTouch) && (i = TrackerInterface_1.EClearType.Multi);
            else if (e.inputType === GameInputEnum_1.EGameInputEnum.TouchEnd)
                i = TrackerInterface_1.EClearType.Drag;
            else if (e.inputType === GameInputEnum_1.EGameInputEnum.AutoMerge) {
                r = true;
                i = TrackerInterface_1.EClearType.AutoMerge;
            }
            switch (t) {
                case GameTypeEnums_1.EMergeType.Daxiao:
                    i = TrackerInterface_1.EClearType.Daxiao;
                    break;
                case GameTypeEnums_1.EMergeType.Duoxiao:
                    i = TrackerInterface_1.EClearType.Duoxiao;
                    break;
                case GameTypeEnums_1.EMergeType.Bomb:
                    i = r ? TrackerInterface_1.EClearType.AutoMergeBomb : TrackerInterface_1.EClearType.Bomb;
            }
            var c = this.context.getTileMapObject().getMatchTileIds();
            if (2 === c.length) {
                var u = this.context.getTileMapObject().getTileObject(c[0]), p = this.context.getTileMapObject().getTileObject(c[1]);
                if (u && p) {
                    var f = o ? TrackerInterface_1.EGameStepCmd.AutoMerge : TrackerInterface_1.EGameStepCmd.KillPair;
                    this.context.getGameTracker().pushStep(this.context, {
                        cmd: f,
                        tileId1: c[0],
                        tileId2: c[1],
                        typeId: u.cardId,
                        clear: i
                    });
                }
            }
        }
    };
    TrackerModifier.prototype.triggerShuffle = function (e, t, o) {
        if (!this.context.isVideo && this.context.getGameTracker()) {
            var n = o === GameInputEnum_1.EShuffleFrom.Revive || o === GameInputEnum_1.EShuffleFrom.ClassicRevive ? TrackerInterface_1.EGameStepCmd.ReviveShuffle : TrackerInterface_1.EGameStepCmd.Shuffle;
            this.context.getGameTracker().pushStep(this.context, {
                cmd: n,
                boardAfter: e,
                boardBefore: t
            });
        }
    };
    TrackerModifier.prototype.triggerUndo = function (e, t) {
        if (!this.context.isVideo && this.context.getGameTracker()) {
            var o = this.context.getTileMapObject().getTileObject(e);
            o && this.context.getGameTracker().pushStep(this.context, {
                cmd: TrackerInterface_1.EGameStepCmd.Hint,
                tileId1: e,
                tileId2: t,
                typeId: o.cardId
            });
        }
    };
    TrackerModifier.prototype.triggerHint = function (e, t) {
        if (!this.context.isVideo && this.context.getGameTracker()) {
            var o = this.context.getTileMapObject().getTileObject(e);
            o && this.context.getGameTracker().pushStep(this.context, {
                cmd: TrackerInterface_1.EGameStepCmd.Hint,
                tileId1: e,
                tileId2: t,
                typeId: o.cardId
            });
        }
    };
    return TrackerModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.TrackerModifier = TrackerModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdHJhY2tlci9UcmFja2VyTW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsd0VBQXNGO0FBQ3RGLDZFQUF5RTtBQUN6RSxtRUFBMEU7QUFDMUU7SUFBcUMsbUNBQWM7SUFDakQseUJBQVksQ0FBQztlQUNYLGtCQUFNLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDRCx3Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1RyxHQUFHLEVBQUUsK0JBQVksQ0FBQyxPQUFPO1lBQ3pCLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHNDQUFZLEdBQVosVUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsR0FBRyw2QkFBVSxDQUFDLE1BQU0sRUFDdkIsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNaLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyw4QkFBYyxDQUFDLFVBQVU7Z0JBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLDZCQUFVLENBQUMsS0FBSyxDQUFD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Q0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hELEdBQUcsRUFBRSwrQkFBWSxDQUFDLElBQUk7Z0JBQ3RCLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTTthQUNqQixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCxxQ0FBVyxHQUFYLFVBQVksQ0FBQyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN4RCxHQUFHLEVBQUUsK0JBQVksQ0FBQyxJQUFJO2dCQUN0QixPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU07YUFDakIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQTlFQSxBQThFQyxDQTlFb0MsK0JBQWMsR0E4RWxEO0FBOUVZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlQ29yZU9iamVjdCc7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSwgRVNodWZmbGVGcm9tIH0gZnJvbSAnLi4vLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRU1lcmdlVHlwZSB9IGZyb20gJy4uLy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRUdhbWVTdGVwQ21kLCBFQ2xlYXJUeXBlIH0gZnJvbSAnLi4vLi4vdHJhY2tlci9UcmFja2VySW50ZXJmYWNlJztcbmV4cG9ydCBjbGFzcyBUcmFja2VyTW9kaWZpZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHQpIHtcbiAgICBzdXBlcih0KTtcbiAgfVxuICB0cmlnZ2VySW52YWxpZChlKSB7XG4gICAgdGhpcy5jb250ZXh0LmlzVmlkZW8gfHwgdGhpcy5jb250ZXh0LmdldEdhbWVUcmFja2VyKCkgJiYgdGhpcy5jb250ZXh0LmdldEdhbWVUcmFja2VyKCkucHVzaFN0ZXAodGhpcy5jb250ZXh0LCB7XG4gICAgICBjbWQ6IEVHYW1lU3RlcENtZC5JbnZhbGlkLFxuICAgICAgdGlsZUlkOiBlXG4gICAgfSk7XG4gIH1cbiAgdHJpZ2dlckNsZWFyKGUsIHQsIG8pIHtcbiAgICB2YXIgbjtcbiAgICBpZiAoIXRoaXMuY29udGV4dC5pc1ZpZGVvICYmIHRoaXMuY29udGV4dC5nZXRHYW1lVHJhY2tlcigpKSB7XG4gICAgICB2YXIgaSA9IEVDbGVhclR5cGUuU2luZ2xlLFxuICAgICAgICByID0gZmFsc2U7XG4gICAgICBpZiAoZS5pbnB1dFR5cGUgPT09IEVHYW1lSW5wdXRFbnVtLlRvdWNoU3RhcnQpIChudWxsID09PSAobiA9IGUpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4ubXVsdGlUb3VjaCkgJiYgKGkgPSBFQ2xlYXJUeXBlLk11bHRpKTtlbHNlIGlmIChlLmlucHV0VHlwZSA9PT0gRUdhbWVJbnB1dEVudW0uVG91Y2hFbmQpIGkgPSBFQ2xlYXJUeXBlLkRyYWc7ZWxzZSBpZiAoZS5pbnB1dFR5cGUgPT09IEVHYW1lSW5wdXRFbnVtLkF1dG9NZXJnZSkge1xuICAgICAgICByID0gdHJ1ZTtcbiAgICAgICAgaSA9IEVDbGVhclR5cGUuQXV0b01lcmdlO1xuICAgICAgfVxuICAgICAgc3dpdGNoICh0KSB7XG4gICAgICAgIGNhc2UgRU1lcmdlVHlwZS5EYXhpYW86XG4gICAgICAgICAgaSA9IEVDbGVhclR5cGUuRGF4aWFvO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEVNZXJnZVR5cGUuRHVveGlhbzpcbiAgICAgICAgICBpID0gRUNsZWFyVHlwZS5EdW94aWFvO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEVNZXJnZVR5cGUuQm9tYjpcbiAgICAgICAgICBpID0gciA/IEVDbGVhclR5cGUuQXV0b01lcmdlQm9tYiA6IEVDbGVhclR5cGUuQm9tYjtcbiAgICAgIH1cbiAgICAgIHZhciBjID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRNYXRjaFRpbGVJZHMoKTtcbiAgICAgIGlmICgyID09PSBjLmxlbmd0aCkge1xuICAgICAgICB2YXIgdSA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChjWzBdKSxcbiAgICAgICAgICBwID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KGNbMV0pO1xuICAgICAgICBpZiAodSAmJiBwKSB7XG4gICAgICAgICAgdmFyIGYgPSBvID8gRUdhbWVTdGVwQ21kLkF1dG9NZXJnZSA6IEVHYW1lU3RlcENtZC5LaWxsUGFpcjtcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0R2FtZVRyYWNrZXIoKS5wdXNoU3RlcCh0aGlzLmNvbnRleHQsIHtcbiAgICAgICAgICAgIGNtZDogZixcbiAgICAgICAgICAgIHRpbGVJZDE6IGNbMF0sXG4gICAgICAgICAgICB0aWxlSWQyOiBjWzFdLFxuICAgICAgICAgICAgdHlwZUlkOiB1LmNhcmRJZCxcbiAgICAgICAgICAgIGNsZWFyOiBpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdHJpZ2dlclNodWZmbGUoZSwgdCwgbykge1xuICAgIGlmICghdGhpcy5jb250ZXh0LmlzVmlkZW8gJiYgdGhpcy5jb250ZXh0LmdldEdhbWVUcmFja2VyKCkpIHtcbiAgICAgIHZhciBuID0gbyA9PT0gRVNodWZmbGVGcm9tLlJldml2ZSB8fCBvID09PSBFU2h1ZmZsZUZyb20uQ2xhc3NpY1Jldml2ZSA/IEVHYW1lU3RlcENtZC5SZXZpdmVTaHVmZmxlIDogRUdhbWVTdGVwQ21kLlNodWZmbGU7XG4gICAgICB0aGlzLmNvbnRleHQuZ2V0R2FtZVRyYWNrZXIoKS5wdXNoU3RlcCh0aGlzLmNvbnRleHQsIHtcbiAgICAgICAgY21kOiBuLFxuICAgICAgICBib2FyZEFmdGVyOiBlLFxuICAgICAgICBib2FyZEJlZm9yZTogdFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHRyaWdnZXJVbmRvKGUsIHQpIHtcbiAgICBpZiAoIXRoaXMuY29udGV4dC5pc1ZpZGVvICYmIHRoaXMuY29udGV4dC5nZXRHYW1lVHJhY2tlcigpKSB7XG4gICAgICB2YXIgbyA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdChlKTtcbiAgICAgIG8gJiYgdGhpcy5jb250ZXh0LmdldEdhbWVUcmFja2VyKCkucHVzaFN0ZXAodGhpcy5jb250ZXh0LCB7XG4gICAgICAgIGNtZDogRUdhbWVTdGVwQ21kLkhpbnQsXG4gICAgICAgIHRpbGVJZDE6IGUsXG4gICAgICAgIHRpbGVJZDI6IHQsXG4gICAgICAgIHR5cGVJZDogby5jYXJkSWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB0cmlnZ2VySGludChlLCB0KSB7XG4gICAgaWYgKCF0aGlzLmNvbnRleHQuaXNWaWRlbyAmJiB0aGlzLmNvbnRleHQuZ2V0R2FtZVRyYWNrZXIoKSkge1xuICAgICAgdmFyIG8gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldFRpbGVPYmplY3QoZSk7XG4gICAgICBvICYmIHRoaXMuY29udGV4dC5nZXRHYW1lVHJhY2tlcigpLnB1c2hTdGVwKHRoaXMuY29udGV4dCwge1xuICAgICAgICBjbWQ6IEVHYW1lU3RlcENtZC5IaW50LFxuICAgICAgICB0aWxlSWQxOiBlLFxuICAgICAgICB0aWxlSWQyOiB0LFxuICAgICAgICB0eXBlSWQ6IG8uY2FyZElkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=