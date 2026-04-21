
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2InitTop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88e20vbLkxNnIreECpfPeuo', 'InputTile2InitTop');
// Scripts/input/InputTile2InitTop.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var Tile2InitTopEffect_1 = require("../Tile2InitTopEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2InitTop = /** @class */ (function (_super) {
    __extends(InputTile2InitTop, _super);
    function InputTile2InitTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2InitTop.prototype.excute = function () {
        var e = this.gameContext.getGameData(), t = e.getLevelId(), o = this.gameContext.getTileMapObject().getCanMatchCardPairNum(), n = e.getScore(), i = this.gameContext.tile2ComboChecker.checkIsComboState(e.getComboNum());
        this.pushEffect(new Tile2InitTopEffect_1.Tile2InitTopEffect({
            level: t,
            matchNum: o,
            score: n,
            isCombo: i
        }), BehaviorsEnum_1.EInsertType.Root);
    };
    return InputTile2InitTop;
}(InputBase_1.InputBase));
exports.default = InputTile2InitTop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJJbml0VG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFDeEQsNERBQTJEO0FBQzNELG9EQUFtRDtBQUNuRDtJQUErQyxxQ0FBUztJQUF4RDs7SUFjQSxDQUFDO0lBYkMsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQ3BDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQ2xCLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsc0JBQXNCLEVBQUUsRUFDaEUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDaEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLHVDQUFrQixDQUFDO1lBQ3JDLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FkQSxBQWNDLENBZDhDLHFCQUFTLEdBY3ZEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi9jb25zdGFudC9CZWhhdmlvcnNFbnVtJztcbmltcG9ydCB7IFRpbGUySW5pdFRvcEVmZmVjdCB9IGZyb20gJy4uL1RpbGUySW5pdFRvcEVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJJbml0VG9wIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKCkge1xuICAgIHZhciBlID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgdCA9IGUuZ2V0TGV2ZWxJZCgpLFxuICAgICAgbyA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldENhbk1hdGNoQ2FyZFBhaXJOdW0oKSxcbiAgICAgIG4gPSBlLmdldFNjb3JlKCksXG4gICAgICBpID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMkNvbWJvQ2hlY2tlci5jaGVja0lzQ29tYm9TdGF0ZShlLmdldENvbWJvTnVtKCkpO1xuICAgIHRoaXMucHVzaEVmZmVjdChuZXcgVGlsZTJJbml0VG9wRWZmZWN0KHtcbiAgICAgIGxldmVsOiB0LFxuICAgICAgbWF0Y2hOdW06IG8sXG4gICAgICBzY29yZTogbixcbiAgICAgIGlzQ29tYm86IGlcbiAgICB9KSwgRUluc2VydFR5cGUuUm9vdCk7XG4gIH1cbn0iXX0=