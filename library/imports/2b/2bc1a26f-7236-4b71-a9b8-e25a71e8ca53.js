"use strict";
cc._RF.push(module, '2bc1aJvcjZLcam44lpx6MpT', 'MotivationalWordsEffect');
// Scripts/MotivationalWordsEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MotivationalWordsEffect = void 0;
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var BehaviorsMapping_1 = require("./mapping/BehaviorsMapping");
var BaseEffect_1 = require("./BaseEffect");
var MotivationalWordsEffect = /** @class */ (function (_super) {
    __extends(MotivationalWordsEffect, _super);
    function MotivationalWordsEffect(t) {
        var _this = _super.call(this, t) || this;
        _this._name = BehaviorsMapping_1.BehaviorsMapping.MotivationalWords;
        _this._data = null;
        _this._data = t;
        return _this;
    }
    Object.defineProperty(MotivationalWordsEffect.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    MotivationalWordsEffect.soundNameArr = [GameTypeEnums_1.EAudioID.Good, GameTypeEnums_1.EAudioID.Great, GameTypeEnums_1.EAudioID.Excellent, GameTypeEnums_1.EAudioID.Amazing, GameTypeEnums_1.EAudioID.Unbelievable];
    MotivationalWordsEffect.aniCfg = {
        0: "in_good",
        1: "in_great",
        2: "in_excellent",
        3: "in_amazing",
        4: "in_unbelievable"
    };
    return MotivationalWordsEffect;
}(BaseEffect_1.default));
exports.MotivationalWordsEffect = MotivationalWordsEffect;

cc._RF.pop();