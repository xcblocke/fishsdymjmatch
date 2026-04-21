
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputChooseLayoutClassic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7696R9j3FI4ILeHb8wgTmW', 'InputChooseLayoutClassic');
// Scripts/input/InputChooseLayoutClassic.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputChooseLayoutClassic = /** @class */ (function (_super) {
    __extends(InputChooseLayoutClassic, _super);
    function InputChooseLayoutClassic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputChooseLayoutClassic.prototype.excute = function (e) {
        this.gameContext.setContentSize(e.contentSize);
        var t = this.gameContext.layoutSelector.chooseLayoutForClassic({
            contentSize: e.contentSize,
            maxRow: e.maxRow,
            maxCol: e.maxCol
        });
        this.gameContext.gameModifier.modifyLayout(t.config, t.scale);
    };
    return InputChooseLayoutClassic;
}(InputBase_1.InputBase));
exports.default = InputChooseLayoutClassic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0Q2hvb3NlTGF5b3V0Q2xhc3NpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25EO0lBQXNELDRDQUFTO0lBQS9EOztJQVVBLENBQUM7SUFUQyx5Q0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQztZQUM3RCxXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVc7WUFDMUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO1lBQ2hCLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTTtTQUNqQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNILCtCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVnFELHFCQUFTLEdBVTlEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dENob29zZUxheW91dENsYXNzaWMgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUoZSkge1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuc2V0Q29udGVudFNpemUoZS5jb250ZW50U2l6ZSk7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LmxheW91dFNlbGVjdG9yLmNob29zZUxheW91dEZvckNsYXNzaWMoe1xuICAgICAgY29udGVudFNpemU6IGUuY29udGVudFNpemUsXG4gICAgICBtYXhSb3c6IGUubWF4Um93LFxuICAgICAgbWF4Q29sOiBlLm1heENvbFxuICAgIH0pO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLm1vZGlmeUxheW91dCh0LmNvbmZpZywgdC5zY2FsZSk7XG4gIH1cbn0iXX0=