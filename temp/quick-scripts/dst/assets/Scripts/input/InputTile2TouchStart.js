
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2TouchStart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '870723EZ8FIX5iSsGZsKwXW', 'InputTile2TouchStart');
// Scripts/input/InputTile2TouchStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputTile2BaseTouchStart_1 = require("../inputbase/InputTile2BaseTouchStart");
var Tile2TouchStartEffect_1 = require("../Tile2TouchStartEffect");
var InputTile2TouchStart = /** @class */ (function (_super) {
    __extends(InputTile2TouchStart, _super);
    function InputTile2TouchStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2TouchStart.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
        this.pushEffect(new Tile2TouchStartEffect_1.Tile2TouchStartEffect({}));
    };
    __decorate([
        mj.traitEvent("Tile2IptTchSt_exec")
    ], InputTile2TouchStart.prototype, "excute", null);
    return InputTile2TouchStart;
}(InputTile2BaseTouchStart_1.default));
exports.default = InputTile2TouchStart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJUb3VjaFN0YXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRkFBNkU7QUFDN0Usa0VBQWlFO0FBQ2pFO0lBQWtELHdDQUF3QjtJQUExRTs7SUFNQSxDQUFDO0lBSkMscUNBQU0sR0FBTixVQUFPLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksNkNBQXFCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBSEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO3NEQUluQztJQUNILDJCQUFDO0NBTkQsQUFNQyxDQU5pRCxrQ0FBd0IsR0FNekU7a0JBTm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dFRpbGUyQmFzZVRvdWNoU3RhcnQgZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0VGlsZTJCYXNlVG91Y2hTdGFydCc7XG5pbXBvcnQgeyBUaWxlMlRvdWNoU3RhcnRFZmZlY3QgfSBmcm9tICcuLi9UaWxlMlRvdWNoU3RhcnRFZmZlY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUaWxlMlRvdWNoU3RhcnQgZXh0ZW5kcyBJbnB1dFRpbGUyQmFzZVRvdWNoU3RhcnQge1xuICBAbWoudHJhaXRFdmVudChcIlRpbGUySXB0VGNoU3RfZXhlY1wiKVxuICBleGN1dGUodCkge1xuICAgIHN1cGVyLmV4Y3V0ZS5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJUb3VjaFN0YXJ0RWZmZWN0KHt9KSk7XG4gIH1cbn0iXX0=