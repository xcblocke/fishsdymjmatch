
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputInitView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b82ezyl5BCFY7lozMOilWo', 'InputInitView');
// Scripts/input/InputInitView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var InitViewEffect_1 = require("../InitViewEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputInitView = /** @class */ (function (_super) {
    __extends(InputInitView, _super);
    function InputInitView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputInitView.prototype.excute = function () {
        this.pushInitViewEffect();
    };
    InputInitView.prototype.pushInitViewEffect = function () {
        var e = new InitViewEffect_1.InitViewEffect({
            cardLayoutConfig: this.gameContext.getCardLayoutConfig(),
            cardConfigMap: this.gameContext.getCardConfigMap(),
            tilemapObject: this.gameContext.getTileMapObject(),
            layoutScale: this.gameContext.getLayoutScale()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_InitView, this);
    };
    __decorate([
        mj.traitEvent("IptInitView_exec")
    ], InputInitView.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptInitView_pushEff")
    ], InputInitView.prototype, "pushInitViewEffect", null);
    return InputInitView;
}(InputBase_1.InputBase));
exports.default = InputInitView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0SW5pdFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCw2REFBNkQ7QUFDN0Qsb0RBQW1EO0FBQ25ELG9EQUFtRDtBQUNuRDtJQUEyQyxpQ0FBUztJQUFwRDs7SUFnQkEsQ0FBQztJQWRDLDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSwrQkFBYyxDQUFDO1lBQ3pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUU7WUFDeEQsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEQsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFO1NBQy9DLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQVUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQWJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzsrQ0FHakM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7MkRBVXBDO0lBQ0gsb0JBQUM7Q0FoQkQsQUFnQkMsQ0FoQjBDLHFCQUFTLEdBZ0JuRDtrQkFoQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgSW5pdFZpZXdFZmZlY3QgfSBmcm9tICcuLi9Jbml0Vmlld0VmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0SW5pdFZpZXcgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIklwdEluaXRWaWV3X2V4ZWNcIilcbiAgZXhjdXRlKCkge1xuICAgIHRoaXMucHVzaEluaXRWaWV3RWZmZWN0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRJbml0Vmlld19wdXNoRWZmXCIpXG4gIHB1c2hJbml0Vmlld0VmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBJbml0Vmlld0VmZmVjdCh7XG4gICAgICBjYXJkTGF5b3V0Q29uZmlnOiB0aGlzLmdhbWVDb250ZXh0LmdldENhcmRMYXlvdXRDb25maWcoKSxcbiAgICAgIGNhcmRDb25maWdNYXA6IHRoaXMuZ2FtZUNvbnRleHQuZ2V0Q2FyZENvbmZpZ01hcCgpLFxuICAgICAgdGlsZW1hcE9iamVjdDogdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBsYXlvdXRTY2FsZTogdGhpcy5nYW1lQ29udGV4dC5nZXRMYXlvdXRTY2FsZSgpXG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICAgIG1qLkV2ZW50TWFuYWdlci5lbWl0KEVHYW1lRXZlbnQuRWZmZWN0X0luaXRWaWV3LCB0aGlzKTtcbiAgfVxufSJdfQ==