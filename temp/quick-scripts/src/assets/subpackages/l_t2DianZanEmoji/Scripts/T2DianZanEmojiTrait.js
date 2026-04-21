"use strict";
cc._RF.push(module, '57f57dKBppHgoE8Zd27g0ky', 'T2DianZanEmojiTrait');
// subpackages/l_t2DianZanEmoji/Scripts/T2DianZanEmojiTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var c = ["good", "great", "excellent", "amazing"];
var T2DianZanEmojiTrait = /** @class */ (function (_super) {
    __extends(T2DianZanEmojiTrait, _super);
    function T2DianZanEmojiTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    T2DianZanEmojiTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    T2DianZanEmojiTrait.prototype.onTile2DZanBhv_spUrl = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: "spine/tile2Cheer/gameplay_word_face_a"
        });
    };
    T2DianZanEmojiTrait.prototype.onTile2DZanBhv_animName = function (t, r) {
        var e = Math.floor(Math.random() * c.length);
        r({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: c[e]
        });
    };
    T2DianZanEmojiTrait.traitKey = "T2DianZanEmoji";
    T2DianZanEmojiTrait = __decorate([
        mj.trait,
        mj.class("T2DianZanEmojiTrait")
    ], T2DianZanEmojiTrait);
    return T2DianZanEmojiTrait;
}(Trait_1.default));
exports.default = T2DianZanEmojiTrait;

cc._RF.pop();