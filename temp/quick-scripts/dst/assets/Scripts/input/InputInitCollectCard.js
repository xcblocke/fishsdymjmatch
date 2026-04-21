
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputInitCollectCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b981crfKNLAJ0zST2xBufn', 'InputInitCollectCard');
// Scripts/input/InputInitCollectCard.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.InputInitCollectCard = void 0;
var InputBase_1 = require("../inputbase/InputBase");
var InputInitCollectCard = /** @class */ (function (_super) {
    __extends(InputInitCollectCard, _super);
    function InputInitCollectCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputInitCollectCard.prototype.excute = function () {
        var e = this.gameContext.getTileMapObject().initCollectSystem();
        if (e) {
            var t = this.gameContext.getGameData().getTileTypes(), o = this.changeTileTypes(t);
            e.setCollectTargetTypes(o);
            var n = this.gameContext.getGameData().getCollectData();
            e.recordCollectTargetIds(n);
        }
    };
    InputInitCollectCard.prototype.changeTileTypes = function (e) {
        return e;
    };
    __decorate([
        mj.traitEvent("IptInCollectCd_cTileTypes")
    ], InputInitCollectCard.prototype, "changeTileTypes", null);
    return InputInitCollectCard;
}(InputBase_1.InputBase));
exports.InputInitCollectCard = InputInitCollectCard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0SW5pdENvbGxlY3RDYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25EO0lBQTBDLHdDQUFTO0lBQW5EOztJQWVBLENBQUM7SUFkQyxxQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUNuRCxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4RCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsOENBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDOytEQUcxQztJQUNILDJCQUFDO0NBZkQsQUFlQyxDQWZ5QyxxQkFBUyxHQWVsRDtBQWZZLG9EQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGNsYXNzIElucHV0SW5pdENvbGxlY3RDYXJkIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKCkge1xuICAgIHZhciBlID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuaW5pdENvbGxlY3RTeXN0ZW0oKTtcbiAgICBpZiAoZSkge1xuICAgICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0VGlsZVR5cGVzKCksXG4gICAgICAgIG8gPSB0aGlzLmNoYW5nZVRpbGVUeXBlcyh0KTtcbiAgICAgIGUuc2V0Q29sbGVjdFRhcmdldFR5cGVzKG8pO1xuICAgICAgdmFyIG4gPSB0aGlzLmdhbWVDb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Q29sbGVjdERhdGEoKTtcbiAgICAgIGUucmVjb3JkQ29sbGVjdFRhcmdldElkcyhuKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRJbkNvbGxlY3RDZF9jVGlsZVR5cGVzXCIpXG4gIGNoYW5nZVRpbGVUeXBlcyhlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cbn0iXX0=