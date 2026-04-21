"use strict";
cc._RF.push(module, '805a2zmdUhEHKj2axYgJxLw', 'TouchSizeScaleTrait');
// subpackages/l_touchSizeScale/Scripts/TouchSizeScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TouchSizeScaleTrait = /** @class */ (function (_super) {
    __extends(TouchSizeScaleTrait, _super);
    function TouchSizeScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchSizeScaleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TouchSizeScaleTrait.prototype.getTouchSizeOffsets = function (t, e) {
        var r = this._traitData.canTouchScale || 1.2, o = this._traitData.canNotTouchScale || 0.8, i = e.getContentSize();
        if (t.isCardLock(e)) {
            var n, a;
            return [-(n = i.width * (1 - o) / 2), -n, -(a = i.height * (1 - o) / 2), -a];
        }
        return [-(n = i.width * (1 - r) / 2), -n, -(a = i.height * (1 - r) / 2), -a];
    };
    TouchSizeScaleTrait.prototype.onTileMapObj_updTchSz = function (t, e) {
        var r = t.ins, o = t.args[0], i = this.getTouchSizeOffsets(r, o);
        o.updateTouchSizeOffsets(i);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump
        });
    };
    TouchSizeScaleTrait.prototype.onGameMod_modifyLayout = function (t, e) {
        t.ins.context.getTileMapObject().updateTouchSizeOffsets();
        e();
    };
    TouchSizeScaleTrait.traitKey = "TouchSizeScale";
    TouchSizeScaleTrait = __decorate([
        mj.trait,
        mj.class("TouchSizeScaleTrait")
    ], TouchSizeScaleTrait);
    return TouchSizeScaleTrait;
}(Trait_1.default));
exports.default = TouchSizeScaleTrait;

cc._RF.pop();