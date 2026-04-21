
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputRestart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67cea9BeAdCWYYPOec36s8a', 'InputRestart');
// Scripts/input/InputRestart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2RestartEffect_1 = require("../Tile2RestartEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputRestart = /** @class */ (function (_super) {
    __extends(InputRestart, _super);
    function InputRestart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputRestart.prototype.excute = function (e) {
        var t = this.gameContext.getGameData();
        if ("setting" === e.callFrom) {
            this.gameContext.gameModifier.settingRelay();
        }
        else {
            this.gameContext.gameModifier.failRelay();
        }
        if (this.gameContext.gameType === GameTypeEnums_1.MjGameType.Tile2Normal) {
            0 == e.dieResult && t.setDieResult(0);
            var o = this.pushNewRootEffect(e, "Tile2RestartEffect"), n = new Tile2RestartEffect_1.Tile2RestartEffect({});
            this.pushEffect(n, BehaviorsEnum_1.EInsertType.Parallel, o.newEffectId, false);
        }
    };
    __decorate([
        mj.traitEvent("IptRestart_excute")
    ], InputRestart.prototype, "excute", null);
    return InputRestart;
}(InputBase_1.InputBase));
exports.default = InputRestart;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0UmVzdGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBQ3hELDBFQUFzRTtBQUN0RSw0REFBMkQ7QUFDM0Qsb0RBQW1EO0FBQ25EO0lBQTBDLGdDQUFTO0lBQW5EOztJQWdCQSxDQUFDO0lBZEMsNkJBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDOUM7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsS0FBSywwQkFBVSxDQUFDLFdBQVcsRUFBRTtZQUN4RCxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsRUFDckQsQ0FBQyxHQUFHLElBQUksdUNBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFiRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7OENBY2xDO0lBQ0gsbUJBQUM7Q0FoQkQsQUFnQkMsQ0FoQnlDLHFCQUFTLEdBZ0JsRDtrQkFoQm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgVGlsZTJSZXN0YXJ0RWZmZWN0IH0gZnJvbSAnLi4vVGlsZTJSZXN0YXJ0RWZmZWN0JztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRSZXN0YXJ0IGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRSZXN0YXJ0X2V4Y3V0ZVwiKVxuICBleGN1dGUoZSkge1xuICAgIHZhciB0ID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpO1xuICAgIGlmIChcInNldHRpbmdcIiA9PT0gZS5jYWxsRnJvbSkge1xuICAgICAgdGhpcy5nYW1lQ29udGV4dC5nYW1lTW9kaWZpZXIuc2V0dGluZ1JlbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLmZhaWxSZWxheSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nYW1lQ29udGV4dC5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgMCA9PSBlLmRpZVJlc3VsdCAmJiB0LnNldERpZVJlc3VsdCgwKTtcbiAgICAgIHZhciBvID0gdGhpcy5wdXNoTmV3Um9vdEVmZmVjdChlLCBcIlRpbGUyUmVzdGFydEVmZmVjdFwiKSxcbiAgICAgICAgbiA9IG5ldyBUaWxlMlJlc3RhcnRFZmZlY3Qoe30pO1xuICAgICAgdGhpcy5wdXNoRWZmZWN0KG4sIEVJbnNlcnRUeXBlLlBhcmFsbGVsLCBvLm5ld0VmZmVjdElkLCBmYWxzZSk7XG4gICAgfVxuICB9XG59Il19