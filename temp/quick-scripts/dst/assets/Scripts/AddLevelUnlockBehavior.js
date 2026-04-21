
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AddLevelUnlockBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bac28AHStAkbr8zd8xqWxM', 'AddLevelUnlockBehavior');
// Scripts/AddLevelUnlockBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelUnlockBehavior = void 0;
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var AddLevelUnlockBehavior = /** @class */ (function (_super) {
    __extends(AddLevelUnlockBehavior, _super);
    function AddLevelUnlockBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddLevelUnlockBehavior.prototype.start = function () {
        this.finish();
    };
    return AddLevelUnlockBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddLevelUnlockBehavior = AddLevelUnlockBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FkZExldmVsVW5sb2NrQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBNkQ7QUFDN0Q7SUFBNEMsMENBQWlCO0lBQTdEOztJQUlBLENBQUM7SUFIQyxzQ0FBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDSCw2QkFBQztBQUFELENBSkEsQUFJQyxDQUoyQyxxQ0FBaUIsR0FJNUQ7QUFKWSx3REFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vYmFzZS9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgQWRkTGV2ZWxVbmxvY2tCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5maW5pc2goKTtcbiAgfVxufSJdfQ==