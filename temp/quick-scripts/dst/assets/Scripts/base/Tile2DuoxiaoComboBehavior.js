
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2DuoxiaoComboBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0fe7E81vZJxK6xGqCb8yLz', 'Tile2DuoxiaoComboBehavior');
// Scripts/base/Tile2DuoxiaoComboBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DuoxiaoComboBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2DuoxiaoComboBehavior = /** @class */ (function (_super) {
    __extends(Tile2DuoxiaoComboBehavior, _super);
    function Tile2DuoxiaoComboBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DuoxiaoComboBehavior.prototype.start = function (e) {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2DuoxiaoAutoMerge,
            duoxiaoCount: e.data.duoxiaoCount
        });
        this.finish();
    };
    return Tile2DuoxiaoComboBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2DuoxiaoComboBehavior = Tile2DuoxiaoComboBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJEdW94aWFvQ29tYm9CZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFxRTtBQUNyRSxzRUFBcUU7QUFDckUseURBQXdEO0FBQ3hEO0lBQStDLDZDQUFpQjtJQUFoRTs7SUFRQSxDQUFDO0lBUEMseUNBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxpQ0FBZSxDQUFDLEtBQUssQ0FBQztZQUNwQixTQUFTLEVBQUUsOEJBQWMsQ0FBQyxxQkFBcUI7WUFDL0MsWUFBWSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWTtTQUNsQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0FSQSxBQVFDLENBUjhDLHFDQUFpQixHQVEvRDtBQVJZLDhEQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHYW1lSW5wdXRFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUludGVyYWN0aW9uIH0gZnJvbSAnLi4vR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyRHVveGlhb0NvbWJvQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICBHYW1lSW50ZXJhY3Rpb24uaW5wdXQoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5UaWxlMkR1b3hpYW9BdXRvTWVyZ2UsXG4gICAgICBkdW94aWFvQ291bnQ6IGUuZGF0YS5kdW94aWFvQ291bnRcbiAgICB9KTtcbiAgICB0aGlzLmZpbmlzaCgpO1xuICB9XG59Il19