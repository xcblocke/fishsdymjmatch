
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/allClear/AllClearModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f35adRJzvpM45Z4+eeJDzWX', 'AllClearModifier');
// Scripts/process/allClear/AllClearModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AllClearModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var CollectInterfact_1 = require("../../constant/CollectInterfact");
var AllClearModifier = /** @class */ (function (_super) {
    __extends(AllClearModifier, _super);
    function AllClearModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllClearModifier.prototype.changeAllClear = function (e, t) {
        var o = this.context.getGameData();
        o && o.setHasTriggeredAllClear(true);
        var n = this.context.getTileMapObject();
        1 != e && n && (null == t || t.forEach(function (e) {
            n.clearTile(e, CollectInterfact_1.ECollectFrom.FromAllClear);
            null == o || o.addAutoCollectTilesNum(1);
        }));
    };
    return AllClearModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.AllClearModifier = AllClearModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvYWxsQ2xlYXIvQWxsQ2xlYXJNb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCxvRUFBK0Q7QUFDL0Q7SUFBc0Msb0NBQWM7SUFBcEQ7O0lBVUEsQ0FBQztJQVRDLHlDQUFjLEdBQWQsVUFBZSxDQUFDLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLENBQUMsSUFBSSxDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNoRCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSwrQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWcUMsK0JBQWMsR0FVbkQ7QUFWWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCB7IEVDb2xsZWN0RnJvbSB9IGZyb20gJy4uLy4uL2NvbnN0YW50L0NvbGxlY3RJbnRlcmZhY3QnO1xuZXhwb3J0IGNsYXNzIEFsbENsZWFyTW9kaWZpZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIGNoYW5nZUFsbENsZWFyKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpO1xuICAgIG8gJiYgby5zZXRIYXNUcmlnZ2VyZWRBbGxDbGVhcih0cnVlKTtcbiAgICB2YXIgbiA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgMSAhPSBlICYmIG4gJiYgKG51bGwgPT0gdCB8fCB0LmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIG4uY2xlYXJUaWxlKGUsIEVDb2xsZWN0RnJvbS5Gcm9tQWxsQ2xlYXIpO1xuICAgICAgbnVsbCA9PSBvIHx8IG8uYWRkQXV0b0NvbGxlY3RUaWxlc051bSgxKTtcbiAgICB9KSk7XG4gIH1cbn0iXX0=