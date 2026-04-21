
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/ShowLockMaskBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18781BC+wVBQpv/TWgwEWVs', 'ShowLockMaskBehavior');
// Scripts/base/ShowLockMaskBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowLockMaskBehavior = void 0;
var LockMaskNodeStateAni_1 = require("../tilenodes/fsm/ani/LockMaskNodeStateAni");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ShowLockMaskBehavior = /** @class */ (function (_super) {
    __extends(ShowLockMaskBehavior, _super);
    function ShowLockMaskBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShowLockMaskBehavior.prototype.start = function (e) {
        var t, o = this.context.getTileNodeMap(), n = e.data.tileId, i = null !== (t = e.data.delay) && void 0 !== t ? t : 0.7, a = o.get(n);
        if (a) {
            var l = new LockMaskNodeStateAni_1.LockMaskNodeStateAni(a.tileNode, a, i);
            a.attachNodeStateAnis([l]);
            a.playAttachEnterAni(null, function () { });
            this.finish();
        }
        else
            this.finish();
    };
    return ShowLockMaskBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.ShowLockMaskBehavior = ShowLockMaskBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvU2hvd0xvY2tNYXNrQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRkFBaUY7QUFDakYseURBQXdEO0FBQ3hEO0lBQTBDLHdDQUFpQjtJQUEzRDs7SUFjQSxDQUFDO0lBYkMsb0NBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFDakMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNqQixDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFDekQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksMkNBQW9CLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLGNBQWEsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7O1lBQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCwyQkFBQztBQUFELENBZEEsQUFjQyxDQWR5QyxxQ0FBaUIsR0FjMUQ7QUFkWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NrTWFza05vZGVTdGF0ZUFuaSB9IGZyb20gJy4uL3RpbGVub2Rlcy9mc20vYW5pL0xvY2tNYXNrTm9kZVN0YXRlQW5pJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgU2hvd0xvY2tNYXNrQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKSxcbiAgICAgIG4gPSBlLmRhdGEudGlsZUlkLFxuICAgICAgaSA9IG51bGwgIT09ICh0ID0gZS5kYXRhLmRlbGF5KSAmJiB2b2lkIDAgIT09IHQgPyB0IDogMC43LFxuICAgICAgYSA9IG8uZ2V0KG4pO1xuICAgIGlmIChhKSB7XG4gICAgICB2YXIgbCA9IG5ldyBMb2NrTWFza05vZGVTdGF0ZUFuaShhLnRpbGVOb2RlLCBhLCBpKTtcbiAgICAgIGEuYXR0YWNoTm9kZVN0YXRlQW5pcyhbbF0pO1xuICAgICAgYS5wbGF5QXR0YWNoRW50ZXJBbmkobnVsbCwgZnVuY3Rpb24gKCkge30pO1xuICAgICAgdGhpcy5maW5pc2goKTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goKTtcbiAgfVxufSJdfQ==