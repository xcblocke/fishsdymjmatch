
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputChooseLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '371e21giuhCxpyMaZGQ4htq', 'InputChooseLayout');
// Scripts/input/InputChooseLayout.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var InputChooseLayout = /** @class */ (function (_super) {
    __extends(InputChooseLayout, _super);
    function InputChooseLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputChooseLayout.prototype.excute = function (e) {
        this.gameContext.setContentSize(e.contentSize);
        var t = this.gameContext.layoutSelector.chooseLayout({
            contentSize: e.contentSize
        });
        this.gameContext.gameModifier.modifyLayout(t.config, t.scale);
    };
    return InputChooseLayout;
}(InputBase_1.InputBase));
exports.default = InputChooseLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0Q2hvb3NlTGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUFDbkQ7SUFBK0MscUNBQVM7SUFBeEQ7O0lBUUEsQ0FBQztJQVBDLGtDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztZQUNuRCxXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVc7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDSCx3QkFBQztBQUFELENBUkEsQUFRQyxDQVI4QyxxQkFBUyxHQVF2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRDaG9vc2VMYXlvdXQgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUoZSkge1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuc2V0Q29udGVudFNpemUoZS5jb250ZW50U2l6ZSk7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LmxheW91dFNlbGVjdG9yLmNob29zZUxheW91dCh7XG4gICAgICBjb250ZW50U2l6ZTogZS5jb250ZW50U2l6ZVxuICAgIH0pO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2FtZU1vZGlmaWVyLm1vZGlmeUxheW91dCh0LmNvbmZpZywgdC5zY2FsZSk7XG4gIH1cbn0iXX0=