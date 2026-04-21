
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2InitView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa310KkTG9ITpUDI1sZMDaw', 'InputTile2InitView');
// Scripts/input/InputTile2InitView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var InitViewEffect_1 = require("../InitViewEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2InitView = /** @class */ (function (_super) {
    __extends(InputTile2InitView, _super);
    function InputTile2InitView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2InitView.prototype.excute = function () {
        this.pushInitViewEffect();
    };
    InputTile2InitView.prototype.pushInitViewEffect = function () {
        var e = new InitViewEffect_1.InitViewEffect({
            cardLayoutConfig: this.gameContext.getCardLayoutConfig(),
            cardConfigMap: this.gameContext.getCardConfigMap(),
            tilemapObject: this.gameContext.getTileMapObject(),
            layoutScale: this.gameContext.getLayoutScale()
        });
        this.gameContext.tile2NormalBackModifier.modifyStatus();
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_InitView, this);
    };
    __decorate([
        mj.traitEvent("IptTile2InitVw_pushEff")
    ], InputTile2InitView.prototype, "pushInitViewEffect", null);
    return InputTile2InitView;
}(InputBase_1.InputBase));
exports.default = InputTile2InitView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJJbml0Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBQ3hELDZEQUE2RDtBQUM3RCxvREFBbUQ7QUFDbkQsb0RBQW1EO0FBQ25EO0lBQWdELHNDQUFTO0lBQXpEOztJQWdCQSxDQUFDO0lBZkMsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCwrQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLCtCQUFjLENBQUM7WUFDekIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRTtZQUN4RCxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNsRCxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNsRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUU7U0FDL0MsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHNCQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFWRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7Z0VBV3ZDO0lBQ0gseUJBQUM7Q0FoQkQsQUFnQkMsQ0FoQitDLHFCQUFTLEdBZ0J4RDtrQkFoQm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBFR2FtZUV2ZW50IH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBJbml0Vmlld0VmZmVjdCB9IGZyb20gJy4uL0luaXRWaWV3RWZmZWN0JztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRUaWxlMkluaXRWaWV3IGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgZXhjdXRlKCkge1xuICAgIHRoaXMucHVzaEluaXRWaWV3RWZmZWN0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHRUaWxlMkluaXRWd19wdXNoRWZmXCIpXG4gIHB1c2hJbml0Vmlld0VmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBJbml0Vmlld0VmZmVjdCh7XG4gICAgICBjYXJkTGF5b3V0Q29uZmlnOiB0aGlzLmdhbWVDb250ZXh0LmdldENhcmRMYXlvdXRDb25maWcoKSxcbiAgICAgIGNhcmRDb25maWdNYXA6IHRoaXMuZ2FtZUNvbnRleHQuZ2V0Q2FyZENvbmZpZ01hcCgpLFxuICAgICAgdGlsZW1hcE9iamVjdDogdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICBsYXlvdXRTY2FsZTogdGhpcy5nYW1lQ29udGV4dC5nZXRMYXlvdXRTY2FsZSgpXG4gICAgfSk7XG4gICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMk5vcm1hbEJhY2tNb2RpZmllci5tb2RpZnlTdGF0dXMoKTtcbiAgICB0aGlzLnB1c2hFZmZlY3QoZSwgRUluc2VydFR5cGUuUm9vdCk7XG4gICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5FZmZlY3RfSW5pdFZpZXcsIHRoaXMpO1xuICB9XG59Il19