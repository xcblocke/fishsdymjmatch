
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputGameActive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37569DPAxVMQY1qdzN9egEp', 'InputGameActive');
// Scripts/input/InputGameActive.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputGameActive = /** @class */ (function (_super) {
    __extends(InputGameActive, _super);
    function InputGameActive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputGameActive.prototype.excute = function () {
        this.doGameTiles();
    };
    InputGameActive.prototype.doGameTiles = function () { };
    __decorate([
        mj.traitEvent("IptGameAct_doGTiles")
    ], InputGameActive.prototype, "doGameTiles", null);
    return InputGameActive;
}(InputBase_1.InputBase));
exports.default = InputGameActive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0R2FtZUFjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25EO0lBQTZDLG1DQUFTO0lBQXREOztJQU1BLENBQUM7SUFMQyxnQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBVyxHQUFYLGNBQWUsQ0FBQztJQUFoQjtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7c0RBQ3JCO0lBQ2xCLHNCQUFDO0NBTkQsQUFNQyxDQU40QyxxQkFBUyxHQU1yRDtrQkFOb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRHYW1lQWN0aXZlIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKCkge1xuICAgIHRoaXMuZG9HYW1lVGlsZXMoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklwdEdhbWVBY3RfZG9HVGlsZXNcIilcbiAgZG9HYW1lVGlsZXMoKSB7fVxufSJdfQ==