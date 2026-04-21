
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2NoHintTipsBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2787coMY+FKSZxlShmoL7Fv', 'Tile2NoHintTipsBehavior');
// Scripts/base/Tile2NoHintTipsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NoHintTipsBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var Tile2NoHintTipsBehavior = /** @class */ (function (_super) {
    __extends(Tile2NoHintTipsBehavior, _super);
    function Tile2NoHintTipsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NoHintTipsBehavior.prototype.start = function () {
        this.showNoHintTips();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2NoHintTipsBehavior.prototype.showNoHintTips = function () {
        var e = I18NStrings_1.default.get("Tile4_tip_tool_cannot_use", "Try using other props to solve this challenge");
        mj.EventManager.emit("SHOWTILE2TIPS", e);
    };
    return Tile2NoHintTipsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2NoHintTipsBehavior = Tile2NoHintTipsBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJOb0hpbnRUaXBzQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUseURBQXdEO0FBQ3hELDZEQUF3RDtBQUN4RDtJQUE2QywyQ0FBaUI7SUFBOUQ7O0lBU0EsQ0FBQztJQVJDLHVDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxnREFBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEdBQUcscUJBQVcsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsK0NBQStDLENBQUMsQ0FBQztRQUN0RyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FUQSxBQVNDLENBVDRDLHFDQUFpQixHQVM3RDtBQVRZLDBEQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uL2ZyYW1ld29yay9kYXRhL0kxOE5TdHJpbmdzJztcbmV4cG9ydCBjbGFzcyBUaWxlMk5vSGludFRpcHNCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5zaG93Tm9IaW50VGlwcygpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgc2hvd05vSGludFRpcHMoKSB7XG4gICAgdmFyIGUgPSBJMThOU3RyaW5ncy5nZXQoXCJUaWxlNF90aXBfdG9vbF9jYW5ub3RfdXNlXCIsIFwiVHJ5IHVzaW5nIG90aGVyIHByb3BzIHRvIHNvbHZlIHRoaXMgY2hhbGxlbmdlXCIpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KFwiU0hPV1RJTEUyVElQU1wiLCBlKTtcbiAgfVxufSJdfQ==