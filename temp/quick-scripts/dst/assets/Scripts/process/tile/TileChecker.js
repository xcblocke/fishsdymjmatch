
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/tile/TileChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d32doIMkNO4bzU9vQM/Vah', 'TileChecker');
// Scripts/process/tile/TileChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var TileChecker = /** @class */ (function (_super) {
    __extends(TileChecker, _super);
    function TileChecker(t) {
        return _super.call(this, t) || this;
    }
    TileChecker.prototype.checkIsLock = function (e) {
        var t = this.context.getTileMapObject(), o = this.context.getTileMapObject().getTileObject(e);
        return !!o && 0 != t.isCardLock(o);
    };
    return TileChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.TileChecker = TileChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvdGlsZS9UaWxlQ2hlY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RDtJQUFpQywrQkFBYztJQUM3QyxxQkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELGlDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUNyQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FUQSxBQVNDLENBVGdDLCtCQUFjLEdBUzlDO0FBVFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmV4cG9ydCBjbGFzcyBUaWxlQ2hlY2tlciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIGNoZWNrSXNMb2NrKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBvID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5nZXRUaWxlT2JqZWN0KGUpO1xuICAgIHJldHVybiAhIW8gJiYgMCAhPSB0LmlzQ2FyZExvY2sobyk7XG4gIH1cbn0iXX0=