
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2SetSlotType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45c72NsRKNApJHuRHRUDPN/', 'InputTile2SetSlotType');
// Scripts/input/InputTile2SetSlotType.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2SetSlotType = /** @class */ (function (_super) {
    __extends(InputTile2SetSlotType, _super);
    function InputTile2SetSlotType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2SetSlotType.prototype.excute = function (e) {
        this.gameContext.setTile2SlotType(e.slotType);
    };
    return InputTile2SetSlotType;
}(InputBase_1.InputBase));
exports.default = InputTile2SetSlotType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJTZXRTbG90VHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25EO0lBQW1ELHlDQUFTO0lBQTVEOztJQUlBLENBQUM7SUFIQyxzQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDSCw0QkFBQztBQUFELENBSkEsQUFJQyxDQUprRCxxQkFBUyxHQUkzRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUaWxlMlNldFNsb3RUeXBlIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKGUpIHtcbiAgICB0aGlzLmdhbWVDb250ZXh0LnNldFRpbGUyU2xvdFR5cGUoZS5zbG90VHlwZSk7XG4gIH1cbn0iXX0=