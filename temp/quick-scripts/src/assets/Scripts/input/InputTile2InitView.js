"use strict";
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