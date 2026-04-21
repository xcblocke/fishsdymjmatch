"use strict";
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