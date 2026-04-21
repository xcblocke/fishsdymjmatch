
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/user/IUserData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3VzZXIvSVVzZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ25CLHlDQUFRLENBQUE7SUFDUixrREFBYyxDQUFBO0lBQ2QsNENBQVcsQ0FBQTtJQUNYLDRDQUFXLENBQUE7QUFDYixDQUFDLEVBTFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFLcEI7QUFDRCxDQUFDLG1CQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUM1QyxtQkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDM0MsbUJBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQ3hDLG1CQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztBQUM1QixRQUFBLFdBQVcsR0FBRyxtQkFBVyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRUl0ZW1UeXBlIHtcbiAgTm9uZSA9IDAsXG4gIFNodWZmbGUgPSAxMDAxLFxuICBIaW50ID0gMTAwMixcbiAgVW5kbyA9IDEwMDMsXG59XG4oSXRlbVR5cGVLZXkgPSB7fSlbRUl0ZW1UeXBlLk5vbmVdID0gXCJub25lXCI7XG5JdGVtVHlwZUtleVtFSXRlbVR5cGUuU2h1ZmZsZV0gPSBcInNodWZmbGVcIjtcbkl0ZW1UeXBlS2V5W0VJdGVtVHlwZS5IaW50XSA9IFwiaGl0VGlwc1wiO1xuSXRlbVR5cGVLZXlbRUl0ZW1UeXBlLlVuZG9dID0gXCJyZXZlcnRcIjtcbmV4cG9ydCB2YXIgSXRlbVR5cGVLZXkgPSBJdGVtVHlwZUtleTsiXX0=