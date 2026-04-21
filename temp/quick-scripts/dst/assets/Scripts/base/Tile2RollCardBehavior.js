
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2RollCardBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49f6fHZUqlNNrg+xiNMd8tk', 'Tile2RollCardBehavior');
// Scripts/base/Tile2RollCardBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RollCardBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2RollCardBehavior = /** @class */ (function (_super) {
    __extends(Tile2RollCardBehavior, _super);
    function Tile2RollCardBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RollCardBehavior.prototype.start = function (e) {
        var t = this, o = e.data, n = o.tileId, i = o.frontToBack, r = this.context.getTileNodeMap().get(n);
        if (r) {
            i || this.playRevealAudio();
            r.tile2RollCard(function () {
                t.finish(GameInputEnum_1.EBehaviorEnum.Success);
            });
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2RollCardBehavior.prototype.playRevealAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Overturn);
    };
    __decorate([
        mj.traitEvent("T2RollCardBhv_playRvlAud")
    ], Tile2RollCardBehavior.prototype, "playRevealAudio", null);
    return Tile2RollCardBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2RollCardBehavior = Tile2RollCardBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJSb2xsQ2FyZEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLDBFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBMkMseUNBQWlCO0lBQTVEOztJQWtCQSxDQUFDO0lBakJDLHFDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUNaLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUNqQixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO2dFQUd6QztJQUNILDRCQUFDO0NBbEJELEFBa0JDLENBbEIwQyxxQ0FBaUIsR0FrQjNEO0FBbEJZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBUaWxlMlJvbGxDYXJkQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gZS5kYXRhLFxuICAgICAgbiA9IG8udGlsZUlkLFxuICAgICAgaSA9IG8uZnJvbnRUb0JhY2ssXG4gICAgICByID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCkuZ2V0KG4pO1xuICAgIGlmIChyKSB7XG4gICAgICBpIHx8IHRoaXMucGxheVJldmVhbEF1ZGlvKCk7XG4gICAgICByLnRpbGUyUm9sbENhcmQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0LmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMlJvbGxDYXJkQmh2X3BsYXlSdmxBdWRcIilcbiAgcGxheVJldmVhbEF1ZGlvKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KEVBdWRpb0lELlRpbGUyT3ZlcnR1cm4pO1xuICB9XG59Il19