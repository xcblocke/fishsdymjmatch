"use strict";
cc._RF.push(module, 'af746ExqZBNULvaqqhRrO2F', 'TrackerInterface');
// Scripts/tracker/TrackerInterface.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EBlockStatus = exports.EClearType = exports.EGameStepCmd = void 0;
exports.EGameStepCmd = {
    Invalid: "n",
    KillPair: "e",
    Undo: "u",
    Hint: "h",
    Shuffle: "is",
    ReviveShuffle: "s",
    AutoMerge: "a",
    Default: "error"
};
var EClearType;
(function (EClearType) {
    EClearType[EClearType["Single"] = 1] = "Single";
    EClearType[EClearType["Multi"] = 2] = "Multi";
    EClearType[EClearType["Drag"] = 3] = "Drag";
    EClearType[EClearType["AutoMerge"] = 4] = "AutoMerge";
    EClearType[EClearType["Bomb"] = 5] = "Bomb";
    EClearType[EClearType["AutoMergeBomb"] = 6] = "AutoMergeBomb";
    EClearType[EClearType["Duoxiao"] = 7] = "Duoxiao";
    EClearType[EClearType["Daxiao"] = 8] = "Daxiao";
})(EClearType = exports.EClearType || (exports.EClearType = {}));
var EBlockStatus;
(function (EBlockStatus) {
    EBlockStatus[EBlockStatus["Movable"] = 0] = "Movable";
    EBlockStatus[EBlockStatus["FullVisible"] = 1] = "FullVisible";
    EBlockStatus[EBlockStatus["PartialVisible"] = 2] = "PartialVisible";
    EBlockStatus[EBlockStatus["Invisible"] = 3] = "Invisible";
})(EBlockStatus = exports.EBlockStatus || (exports.EBlockStatus = {}));

cc._RF.pop();