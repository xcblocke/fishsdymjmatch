
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2UpdateRevertItemBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4509d8OiGVCi7IsmA5Uvu8+', 'Tile2UpdateRevertItemBehavior');
// Scripts/base/Tile2UpdateRevertItemBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateRevertItemBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2UpdateRevertItemBehavior = /** @class */ (function (_super) {
    __extends(Tile2UpdateRevertItemBehavior, _super);
    function Tile2UpdateRevertItemBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2UpdateRevertItemBehavior.prototype.start = function (e) {
        var t, o = e.data.curNum, n = this.context.gameView;
        null === (t = null == n ? void 0 : n.nodeBottomView) || void 0 === t || t.updateRevertNum(o);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2UpdateRevertItemBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2UpdateRevertItemBehavior = Tile2UpdateRevertItemBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJVcGRhdGVSZXZlcnRJdGVtQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hEO0lBQW1ELGlEQUFpQjtJQUFwRTs7SUFRQSxDQUFDO0lBUEMsNkNBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2pCLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUM1QixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNILG9DQUFDO0FBQUQsQ0FSQSxBQVFDLENBUmtELHFDQUFpQixHQVFuRTtBQVJZLHNFQUE2QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyVXBkYXRlUmV2ZXJ0SXRlbUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvID0gZS5kYXRhLmN1ck51bSxcbiAgICAgIG4gPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXc7XG4gICAgbnVsbCA9PT0gKHQgPSBudWxsID09IG4gPyB2b2lkIDAgOiBuLm5vZGVCb3R0b21WaWV3KSB8fCB2b2lkIDAgPT09IHQgfHwgdC51cGRhdGVSZXZlcnROdW0obyk7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxufSJdfQ==