
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile2/Tile2DotTrackerModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46c06KC96BPG5PsI6JVGZC/', 'Tile2DotTrackerModifier');
// Scripts/process/tile2/Tile2DotTrackerModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DotTrackerModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2DotTracker_1 = require("../../dotTracker/Tile2DotTracker");
var Tile2DotTrackerModifier = /** @class */ (function (_super) {
    __extends(Tile2DotTrackerModifier, _super);
    function Tile2DotTrackerModifier(t) {
        return _super.call(this, t) || this;
    }
    Tile2DotTrackerModifier.prototype.recordErrorFlip = function (e) {
        var t;
        null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordErrorClick(this.context, e, Tile2DotTracker_1.EErrorClickType.Flip);
    };
    Tile2DotTrackerModifier.prototype.recordErrorDrag = function (e) {
        var t;
        null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordErrorClick(this.context, e, Tile2DotTracker_1.EErrorClickType.Drag);
    };
    Tile2DotTrackerModifier.prototype.recordErrorLock = function (e) {
        var t;
        null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordErrorClick(this.context, e, Tile2DotTracker_1.EErrorClickType.Lock);
    };
    Tile2DotTrackerModifier.prototype.recordUseShuffle = function (e) {
        var t;
        e || null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordShuffle(this.context);
    };
    Tile2DotTrackerModifier.prototype.recordUseRevert = function () {
        var e;
        null === (e = this.context.getTile2DotTracker()) || void 0 === e || e.recordRevert(this.context);
    };
    Tile2DotTrackerModifier.prototype.recordUseHint = function (e) {
        var t;
        null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordHint(this.context, e);
    };
    Tile2DotTrackerModifier.prototype.recordUseMagnet = function (e) {
        var t;
        null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordMagnet(this.context, e);
    };
    Tile2DotTrackerModifier.prototype.recordUseRevive = function () { };
    Tile2DotTrackerModifier.prototype.addSlotBar = function (e) {
        var t, o = this.context.getTileMapObject().getTileObject(e);
        if (o) {
            var n = this.context.getGameData().slotBarIds;
            o.getIsInSlotBar() || n.includes(o.saveKey()) || null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordAddSlot(this.context, e);
        }
    };
    return Tile2DotTrackerModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2DotTrackerModifier = Tile2DotTrackerModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZTIvVGlsZTJEb3RUcmFja2VyTW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsb0VBQW1FO0FBQ25FO0lBQTZDLDJDQUFjO0lBQ3pELGlDQUFZLENBQUM7ZUFDWCxrQkFBTSxDQUFDLENBQUM7SUFDVixDQUFDO0lBQ0QsaURBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hJLENBQUM7SUFDRCxpREFBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLGlDQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEksQ0FBQztJQUNELGlEQUFlLEdBQWYsVUFBZ0IsQ0FBQztRQUNmLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsaUNBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoSSxDQUFDO0lBQ0Qsa0RBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLENBQUM7UUFDTixDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBQ0QsaURBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBQ0QsK0NBQWEsR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFDRCxpREFBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFDRCxpREFBZSxHQUFmLGNBQW1CLENBQUM7SUFDcEIsNENBQVUsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQzlDLENBQUMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZKO0lBQ0gsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsQ0F6QzRDLCtCQUFjLEdBeUMxRDtBQXpDWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCB7IEVFcnJvckNsaWNrVHlwZSB9IGZyb20gJy4uLy4uL2RvdFRyYWNrZXIvVGlsZTJEb3RUcmFja2VyJztcbmV4cG9ydCBjbGFzcyBUaWxlMkRvdFRyYWNrZXJNb2RpZmllciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIHJlY29yZEVycm9yRmxpcChlKSB7XG4gICAgdmFyIHQ7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZTJEb3RUcmFja2VyKCkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnJlY29yZEVycm9yQ2xpY2sodGhpcy5jb250ZXh0LCBlLCBFRXJyb3JDbGlja1R5cGUuRmxpcCk7XG4gIH1cbiAgcmVjb3JkRXJyb3JEcmFnKGUpIHtcbiAgICB2YXIgdDtcbiAgICBudWxsID09PSAodCA9IHRoaXMuY29udGV4dC5nZXRUaWxlMkRvdFRyYWNrZXIoKSkgfHwgdm9pZCAwID09PSB0IHx8IHQucmVjb3JkRXJyb3JDbGljayh0aGlzLmNvbnRleHQsIGUsIEVFcnJvckNsaWNrVHlwZS5EcmFnKTtcbiAgfVxuICByZWNvcmRFcnJvckxvY2soZSkge1xuICAgIHZhciB0O1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5jb250ZXh0LmdldFRpbGUyRG90VHJhY2tlcigpKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5yZWNvcmRFcnJvckNsaWNrKHRoaXMuY29udGV4dCwgZSwgRUVycm9yQ2xpY2tUeXBlLkxvY2spO1xuICB9XG4gIHJlY29yZFVzZVNodWZmbGUoZSkge1xuICAgIHZhciB0O1xuICAgIGUgfHwgbnVsbCA9PT0gKHQgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZTJEb3RUcmFja2VyKCkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnJlY29yZFNodWZmbGUodGhpcy5jb250ZXh0KTtcbiAgfVxuICByZWNvcmRVc2VSZXZlcnQoKSB7XG4gICAgdmFyIGU7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZTJEb3RUcmFja2VyKCkpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnJlY29yZFJldmVydCh0aGlzLmNvbnRleHQpO1xuICB9XG4gIHJlY29yZFVzZUhpbnQoZSkge1xuICAgIHZhciB0O1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5jb250ZXh0LmdldFRpbGUyRG90VHJhY2tlcigpKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5yZWNvcmRIaW50KHRoaXMuY29udGV4dCwgZSk7XG4gIH1cbiAgcmVjb3JkVXNlTWFnbmV0KGUpIHtcbiAgICB2YXIgdDtcbiAgICBudWxsID09PSAodCA9IHRoaXMuY29udGV4dC5nZXRUaWxlMkRvdFRyYWNrZXIoKSkgfHwgdm9pZCAwID09PSB0IHx8IHQucmVjb3JkTWFnbmV0KHRoaXMuY29udGV4dCwgZSk7XG4gIH1cbiAgcmVjb3JkVXNlUmV2aXZlKCkge31cbiAgYWRkU2xvdEJhcihlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KGUpO1xuICAgIGlmIChvKSB7XG4gICAgICB2YXIgbiA9IHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLnNsb3RCYXJJZHM7XG4gICAgICBvLmdldElzSW5TbG90QmFyKCkgfHwgbi5pbmNsdWRlcyhvLnNhdmVLZXkoKSkgfHwgbnVsbCA9PT0gKHQgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZTJEb3RUcmFja2VyKCkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnJlY29yZEFkZFNsb3QodGhpcy5jb250ZXh0LCBlKTtcbiAgICB9XG4gIH1cbn0iXX0=