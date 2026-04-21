
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tracker/TrackerInterface.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RyYWNrZXIvVHJhY2tlckludGVyZmFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFXLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLE9BQU8sRUFBRSxHQUFHO0lBQ1osUUFBUSxFQUFFLEdBQUc7SUFDYixJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxHQUFHO0lBQ1QsT0FBTyxFQUFFLElBQUk7SUFDYixhQUFhLEVBQUUsR0FBRztJQUNsQixTQUFTLEVBQUUsR0FBRztJQUNkLE9BQU8sRUFBRSxPQUFPO0NBQ2pCLENBQUM7QUFDRixJQUFZLFVBU1g7QUFURCxXQUFZLFVBQVU7SUFDcEIsK0NBQVUsQ0FBQTtJQUNWLDZDQUFTLENBQUE7SUFDVCwyQ0FBUSxDQUFBO0lBQ1IscURBQWEsQ0FBQTtJQUNiLDJDQUFRLENBQUE7SUFDUiw2REFBaUIsQ0FBQTtJQUNqQixpREFBVyxDQUFBO0lBQ1gsK0NBQVUsQ0FBQTtBQUNaLENBQUMsRUFUVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVNyQjtBQUNELElBQVksWUFLWDtBQUxELFdBQVksWUFBWTtJQUN0QixxREFBVyxDQUFBO0lBQ1gsNkRBQWUsQ0FBQTtJQUNmLG1FQUFrQixDQUFBO0lBQ2xCLHlEQUFhLENBQUE7QUFDZixDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEVHYW1lU3RlcENtZCA9IHtcbiAgSW52YWxpZDogXCJuXCIsXG4gIEtpbGxQYWlyOiBcImVcIixcbiAgVW5kbzogXCJ1XCIsXG4gIEhpbnQ6IFwiaFwiLFxuICBTaHVmZmxlOiBcImlzXCIsXG4gIFJldml2ZVNodWZmbGU6IFwic1wiLFxuICBBdXRvTWVyZ2U6IFwiYVwiLFxuICBEZWZhdWx0OiBcImVycm9yXCJcbn07XG5leHBvcnQgZW51bSBFQ2xlYXJUeXBlIHtcbiAgU2luZ2xlID0gMSxcbiAgTXVsdGkgPSAyLFxuICBEcmFnID0gMyxcbiAgQXV0b01lcmdlID0gNCxcbiAgQm9tYiA9IDUsXG4gIEF1dG9NZXJnZUJvbWIgPSA2LFxuICBEdW94aWFvID0gNyxcbiAgRGF4aWFvID0gOCxcbn1cbmV4cG9ydCBlbnVtIEVCbG9ja1N0YXR1cyB7XG4gIE1vdmFibGUgPSAwLFxuICBGdWxsVmlzaWJsZSA9IDEsXG4gIFBhcnRpYWxWaXNpYmxlID0gMixcbiAgSW52aXNpYmxlID0gMyxcbn0iXX0=