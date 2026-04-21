
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InputAutoMerge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17279ytnblGfqcIZvFZo+KD', 'InputAutoMerge');
// Scripts/InputAutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var InputAutoMerge = /** @class */ (function (_super) {
    __extends(InputAutoMerge, _super);
    function InputAutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputAutoMerge.prototype.excute = function (e) {
        this.gameContext.getTileMapObject().selcectTileId(e.tileId1, true);
        this.gameContext.getTileMapObject().selcectTileId(e.tileId2, true);
        if (this.gameContext.clearChecker.checkCanClear2()) {
            ClearHelper_1.default.runClear(this.gameContext, e, this);
        }
        else {
            this.gameContext.getTileMapObject().unselectAllTileIds();
        }
    };
    return InputAutoMerge;
}(InputBase_1.InputBase));
exports.default = InputAutoMerge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lucHV0QXV0b01lcmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQsNkNBQXdDO0FBQ3hDO0lBQTRDLGtDQUFTO0lBQXJEOztJQVVBLENBQUM7SUFUQywrQkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUNsRCxxQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDMUQ7SUFDSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQVZBLEFBVUMsQ0FWMkMscUJBQVMsR0FVcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuaW1wb3J0IENsZWFySGVscGVyIGZyb20gJy4vQ2xlYXJIZWxwZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRBdXRvTWVyZ2UgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUoZSkge1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnNlbGNlY3RUaWxlSWQoZS50aWxlSWQxLCB0cnVlKTtcbiAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZWxjZWN0VGlsZUlkKGUudGlsZUlkMiwgdHJ1ZSk7XG4gICAgaWYgKHRoaXMuZ2FtZUNvbnRleHQuY2xlYXJDaGVja2VyLmNoZWNrQ2FuQ2xlYXIyKCkpIHtcbiAgICAgIENsZWFySGVscGVyLnJ1bkNsZWFyKHRoaXMuZ2FtZUNvbnRleHQsIGUsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS51bnNlbGVjdEFsbFRpbGVJZHMoKTtcbiAgICB9XG4gIH1cbn0iXX0=