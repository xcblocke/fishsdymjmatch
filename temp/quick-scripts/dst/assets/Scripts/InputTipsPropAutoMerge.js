
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InputTipsPropAutoMerge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5b3d7JlQ1Ae62INPhE9YXl', 'InputTipsPropAutoMerge');
// Scripts/InputTipsPropAutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var ClearHelper_1 = require("./ClearHelper");
var InputTipsPropAutoMerge = /** @class */ (function (_super) {
    __extends(InputTipsPropAutoMerge, _super);
    function InputTipsPropAutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTipsPropAutoMerge.prototype.excute = function (e) {
        this.gameContext.getTileMapObject().selcectTileId(e.tileId1, true);
        this.gameContext.getTileMapObject().selcectTileId(e.tileId2, true);
        if (this.gameContext.clearChecker.checkCanClear2()) {
            ClearHelper_1.default.runClear(this.gameContext, e, this);
        }
        else {
            this.gameContext.getTileMapObject().unselectAllTileIds();
        }
    };
    return InputTipsPropAutoMerge;
}(InputBase_1.InputBase));
exports.default = InputTipsPropAutoMerge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lucHV0VGlwc1Byb3BBdXRvTWVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUNsRCw2Q0FBd0M7QUFDeEM7SUFBb0QsMENBQVM7SUFBN0Q7O0lBVUEsQ0FBQztJQVRDLHVDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ2xELHFCQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMxRDtJQUNILENBQUM7SUFDSCw2QkFBQztBQUFELENBVkEsQUFVQyxDQVZtRCxxQkFBUyxHQVU1RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5pbXBvcnQgQ2xlYXJIZWxwZXIgZnJvbSAnLi9DbGVhckhlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRpcHNQcm9wQXV0b01lcmdlIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICB0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5zZWxjZWN0VGlsZUlkKGUudGlsZUlkMSwgdHJ1ZSk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuc2VsY2VjdFRpbGVJZChlLnRpbGVJZDIsIHRydWUpO1xuICAgIGlmICh0aGlzLmdhbWVDb250ZXh0LmNsZWFyQ2hlY2tlci5jaGVja0NhbkNsZWFyMigpKSB7XG4gICAgICBDbGVhckhlbHBlci5ydW5DbGVhcih0aGlzLmdhbWVDb250ZXh0LCBlLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudW5zZWxlY3RBbGxUaWxlSWRzKCk7XG4gICAgfVxuICB9XG59Il19