
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2MoveBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0ba6Dy0JhMQJMU+VGkGt/2', 'Tile2MoveBehavior');
// Scripts/base/Tile2MoveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MoveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
this && this.__values;
var Tile2MoveBehavior = /** @class */ (function (_super) {
    __extends(Tile2MoveBehavior, _super);
    function Tile2MoveBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MoveBehavior.prototype.start = function (e) {
        var t = e.data.tileId;
        if (t) {
            var o = this.context.getTileNodeMap().get(t);
            if (!o) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            o.tile2PlayMove(e.data.delta);
            e.data.iFirstMove && this.playAudio();
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2MoveBehavior.prototype.playAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Drag);
    };
    __decorate([
        mj.traitEvent("Tile2MoveBhv_playAudio")
    ], Tile2MoveBehavior.prototype, "playAudio", null);
    return Tile2MoveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2MoveBehavior = Tile2MoveBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJNb3ZlQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUsMEVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RCxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUN0QjtJQUF1QyxxQ0FBaUI7SUFBeEQ7O0lBa0JBLENBQUM7SUFqQkMsaUNBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuQyxPQUFPO2FBQ1I7WUFDRCxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxxQ0FBUyxHQUFUO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3NEQUd2QztJQUNILHdCQUFDO0NBbEJELEFBa0JDLENBbEJzQyxxQ0FBaUIsR0FrQnZEO0FBbEJZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbnRoaXMgJiYgdGhpcy5fX3ZhbHVlcztcbmV4cG9ydCBjbGFzcyBUaWxlMk1vdmVCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gZS5kYXRhLnRpbGVJZDtcbiAgICBpZiAodCkge1xuICAgICAgdmFyIG8gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKS5nZXQodCk7XG4gICAgICBpZiAoIW8pIHtcbiAgICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgby50aWxlMlBsYXlNb3ZlKGUuZGF0YS5kZWx0YSk7XG4gICAgICBlLmRhdGEuaUZpcnN0TW92ZSAmJiB0aGlzLnBsYXlBdWRpbygpO1xuICAgIH1cbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJNb3ZlQmh2X3BsYXlBdWRpb1wiKVxuICBwbGF5QXVkaW8oKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuRHJhZyk7XG4gIH1cbn0iXX0=