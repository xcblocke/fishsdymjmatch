"use strict";
cc._RF.push(module, 'bd32aY/LzZNNb9wId6sVopi', 'IUserData');
// Scripts/user/IUserData.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemTypeKey = exports.EItemType = void 0;
var EItemType;
(function (EItemType) {
    EItemType[EItemType["None"] = 0] = "None";
    EItemType[EItemType["Shuffle"] = 1001] = "Shuffle";
    EItemType[EItemType["Hint"] = 1002] = "Hint";
    EItemType[EItemType["Undo"] = 1003] = "Undo";
})(EItemType = exports.EItemType || (exports.EItemType = {}));
(exports.ItemTypeKey = {})[EItemType.None] = "none";
exports.ItemTypeKey[EItemType.Shuffle] = "shuffle";
exports.ItemTypeKey[EItemType.Hint] = "hitTips";
exports.ItemTypeKey[EItemType.Undo] = "revert";
exports.ItemTypeKey = exports.ItemTypeKey;

cc._RF.pop();