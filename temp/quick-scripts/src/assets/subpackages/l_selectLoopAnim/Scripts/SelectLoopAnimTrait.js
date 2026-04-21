"use strict";
cc._RF.push(module, 'c7ced4GUH9P34iigpzpRmyV', 'SelectLoopAnimTrait');
// subpackages/l_selectLoopAnim/Scripts/SelectLoopAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var SelectLoopAnimTrait = /** @class */ (function (_super) {
    __extends(SelectLoopAnimTrait, _super);
    function SelectLoopAnimTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {
            moveUpOffset: 8,
            upDuration: 0.66,
            downDuration: 0.66
        };
        return _this;
    }
    SelectLoopAnimTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SelectLoopAnimTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[GameEvent_1.EGameEvent.TileNode_SelectedFinish] = this.onTileNodeSelectedFinish.bind(this);
        _t[GameEvent_1.EGameEvent.TileNode_BeginUnSelected] = this.onTileNodeBeginUnSelected.bind(this);
        return _t;
    };
    SelectLoopAnimTrait.prototype.onTileNodeSelectedFinish = function (t) {
        t && cc.isValid(t.cardNode) && t.playSelectLoopAnimation(this._config);
    };
    SelectLoopAnimTrait.prototype.onTileNodeBeginUnSelected = function (t) {
        t && cc.isValid(t.cardNode) && t.stopSelectLoopAnimation();
    };
    SelectLoopAnimTrait.traitKey = "SelectLoopAnim";
    SelectLoopAnimTrait = __decorate([
        mj.trait,
        mj.class("SelectLoopAnimTrait")
    ], SelectLoopAnimTrait);
    return SelectLoopAnimTrait;
}(Trait_1.default));
exports.default = SelectLoopAnimTrait;

cc._RF.pop();