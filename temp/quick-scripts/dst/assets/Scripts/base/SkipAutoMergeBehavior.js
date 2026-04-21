
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/SkipAutoMergeBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db642eMbqFCgZB7y7txo+Dg', 'SkipAutoMergeBehavior');
// Scripts/base/SkipAutoMergeBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipAutoMergeBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var SkipAutoMergeBehavior = /** @class */ (function (_super) {
    __extends(SkipAutoMergeBehavior, _super);
    function SkipAutoMergeBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkipAutoMergeBehavior.prototype.start = function () {
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return SkipAutoMergeBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.SkipAutoMergeBehavior = SkipAutoMergeBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvU2tpcEF1dG9NZXJnZUJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RDtJQUEyQyx5Q0FBaUI7SUFBNUQ7O0lBSUEsQ0FBQztJQUhDLHFDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSjBDLHFDQUFpQixHQUkzRDtBQUpZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFNraXBBdXRvTWVyZ2VCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxufSJdfQ==