
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2TouchStartBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19682BVNZ9MXrURsTt8JVEn', 'Tile2TouchStartBehavior');
// Scripts/base/Tile2TouchStartBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2TouchStartBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2TouchStartBehavior = /** @class */ (function (_super) {
    __extends(Tile2TouchStartBehavior, _super);
    function Tile2TouchStartBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2TouchStartBehavior.prototype.start = function () {
        this.removeFlipHand();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2TouchStartBehavior.prototype.removeFlipHand = function () {
        var e, t, o, n = null === (o = null === (t = null === (e = this._context) || void 0 === e ? void 0 : e.gameView) || void 0 === t ? void 0 : t.node) || void 0 === o ? void 0 : o.getChildByName("HitTipsFlipHand");
        cc.isValid(n) && n.destroy();
    };
    return Tile2TouchStartBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2TouchStartBehavior = Tile2TouchStartBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJUb3VjaFN0YXJ0QmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hEO0lBQTZDLDJDQUFpQjtJQUE5RDs7SUFZQSxDQUFDO0lBWEMsdUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELGdEQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeE0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FaQSxBQVlDLENBWjRDLHFDQUFpQixHQVk3RDtBQVpZLDBEQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyVG91Y2hTdGFydEJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydCgpIHtcbiAgICB0aGlzLnJlbW92ZUZsaXBIYW5kKCk7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICByZW1vdmVGbGlwSGFuZCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgbiA9IG51bGwgPT09IChvID0gbnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuX2NvbnRleHQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubm9kZSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5nZXRDaGlsZEJ5TmFtZShcIkhpdFRpcHNGbGlwSGFuZFwiKTtcbiAgICBjYy5pc1ZhbGlkKG4pICYmIG4uZGVzdHJveSgpO1xuICB9XG59Il19