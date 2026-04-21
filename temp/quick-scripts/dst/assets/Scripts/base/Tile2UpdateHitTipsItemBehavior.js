
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2UpdateHitTipsItemBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8efc7F4ryhJf6p1cIuqBjS9', 'Tile2UpdateHitTipsItemBehavior');
// Scripts/base/Tile2UpdateHitTipsItemBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateHitTipsItemBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2UpdateHitTipsItemBehavior = /** @class */ (function (_super) {
    __extends(Tile2UpdateHitTipsItemBehavior, _super);
    function Tile2UpdateHitTipsItemBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2UpdateHitTipsItemBehavior.prototype.start = function (e) {
        var t, o = e.data.curNum, n = this.context.gameView;
        null === (t = null == n ? void 0 : n.nodeBottomView) || void 0 === t || t.updateHitTipsNum(o);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2UpdateHitTipsItemBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2UpdateHitTipsItemBehavior = Tile2UpdateHitTipsItemBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJVcGRhdGVIaXRUaXBzSXRlbUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RDtJQUFvRCxrREFBaUI7SUFBckU7O0lBUUEsQ0FBQztJQVBDLDhDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNqQixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNILHFDQUFDO0FBQUQsQ0FSQSxBQVFDLENBUm1ELHFDQUFpQixHQVFwRTtBQVJZLHdFQUE4QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyVXBkYXRlSGl0VGlwc0l0ZW1CZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyA9IGUuZGF0YS5jdXJOdW0sXG4gICAgICBuID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3O1xuICAgIG51bGwgPT09ICh0ID0gbnVsbCA9PSBuID8gdm9pZCAwIDogbi5ub2RlQm90dG9tVmlldykgfHwgdm9pZCAwID09PSB0IHx8IHQudXBkYXRlSGl0VGlwc051bShvKTtcbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19