
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/MoveBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc5f1LhGepA/7UQy44LLKe0', 'MoveBehavior');
// Scripts/base/MoveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
this && this.__values;
var MoveBehavior = /** @class */ (function (_super) {
    __extends(MoveBehavior, _super);
    function MoveBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoveBehavior.prototype.start = function (e) {
        var t = e.data.tileId;
        if (t) {
            var o = this.context.getTileNodeMap().get(t);
            if (!o) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            o.selected();
            o.setPositionWithDelta(true, e.data.delta);
            e.data.iFirstMove && this.playAudio();
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    MoveBehavior.prototype.playAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Drag);
    };
    __decorate([
        mj.traitEvent("MoveBhv_playAudio")
    ], MoveBehavior.prototype, "playAudio", null);
    return MoveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.MoveBehavior = MoveBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvTW92ZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLDBFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDdEI7SUFBa0MsZ0NBQWlCO0lBQW5EOztJQW1CQSxDQUFDO0lBbEJDLDRCQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsT0FBTzthQUNSO1lBQ0QsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2IsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQVMsR0FBVDtRQUNFLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLHdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUZEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztpREFHbEM7SUFDSCxtQkFBQztDQW5CRCxBQW1CQyxDQW5CaUMscUNBQWlCLEdBbUJsRDtBQW5CWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbnRoaXMgJiYgdGhpcy5fX3ZhbHVlcztcbmV4cG9ydCBjbGFzcyBNb3ZlQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IGUuZGF0YS50aWxlSWQ7XG4gICAgaWYgKHQpIHtcbiAgICAgIHZhciBvID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCkuZ2V0KHQpO1xuICAgICAgaWYgKCFvKSB7XG4gICAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG8uc2VsZWN0ZWQoKTtcbiAgICAgIG8uc2V0UG9zaXRpb25XaXRoRGVsdGEodHJ1ZSwgZS5kYXRhLmRlbHRhKTtcbiAgICAgIGUuZGF0YS5pRmlyc3RNb3ZlICYmIHRoaXMucGxheUF1ZGlvKCk7XG4gICAgfVxuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNb3ZlQmh2X3BsYXlBdWRpb1wiKVxuICBwbGF5QXVkaW8oKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuRHJhZyk7XG4gIH1cbn0iXX0=