
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2NoValidTilesBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d820fZmhZPv6fsvHthwR+e', 'Tile2NoValidTilesBehavior');
// Scripts/base/Tile2NoValidTilesBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NoValidTilesBehavior = void 0;
var I18NStrings_1 = require("../framework/data/I18NStrings");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2NoValidTilesBehavior = /** @class */ (function (_super) {
    __extends(Tile2NoValidTilesBehavior, _super);
    function Tile2NoValidTilesBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NoValidTilesBehavior.prototype.start = function () {
        var e = I18NStrings_1.default.get("Tile4_back_tool_cannot_use", "No valid tiles");
        mj.EventManager.emit("SHOWTILE2TIPS", e);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2NoValidTilesBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2NoValidTilesBehavior = Tile2NoValidTilesBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJOb1ZhbGlkVGlsZXNCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUN4RCxxRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hEO0lBQStDLDZDQUFpQjtJQUFoRTs7SUFNQSxDQUFDO0lBTEMseUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxHQUFHLHFCQUFXLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDeEUsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQU5BLEFBTUMsQ0FOOEMscUNBQWlCLEdBTS9EO0FBTlksOERBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyTm9WYWxpZFRpbGVzQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KCkge1xuICAgIHZhciBlID0gSTE4TlN0cmluZ3MuZ2V0KFwiVGlsZTRfYmFja190b29sX2Nhbm5vdF91c2VcIiwgXCJObyB2YWxpZCB0aWxlc1wiKTtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChcIlNIT1dUSUxFMlRJUFNcIiwgZSk7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxufSJdfQ==