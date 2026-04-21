"use strict";
cc._RF.push(module, 'a2183/cWFVDR5ciLhExUMJn', 'AnimationEnums');
// Scripts/enums/AnimationEnums.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EAnimationConfigName = exports.EFadeInAnimationType = exports.EScreenFadeType = void 0;
var EScreenFadeType;
(function (EScreenFadeType) {
    EScreenFadeType[EScreenFadeType["LEFT_TOP"] = 0] = "LEFT_TOP";
    EScreenFadeType[EScreenFadeType["RIGHT_TOP"] = 1] = "RIGHT_TOP";
    EScreenFadeType[EScreenFadeType["RIGHT_BOTTOM"] = 2] = "RIGHT_BOTTOM";
    EScreenFadeType[EScreenFadeType["LEFT_BOTTOM"] = 3] = "LEFT_BOTTOM";
    EScreenFadeType[EScreenFadeType["LEFT"] = 4] = "LEFT";
    EScreenFadeType[EScreenFadeType["RIGHT"] = 5] = "RIGHT";
})(EScreenFadeType = exports.EScreenFadeType || (exports.EScreenFadeType = {}));
var EFadeInAnimationType;
(function (EFadeInAnimationType) {
    EFadeInAnimationType[EFadeInAnimationType["TWO_PARTS"] = 0] = "TWO_PARTS";
    EFadeInAnimationType[EFadeInAnimationType["FOUR_PARTS"] = 1] = "FOUR_PARTS";
})(EFadeInAnimationType = exports.EFadeInAnimationType || (exports.EFadeInAnimationType = {}));
exports.EAnimationConfigName = {
    ZIPPER: "zipper",
    DOOR_CLOSE: "door_close",
    INTERLACE: "interlace"
};

cc._RF.pop();