"use strict";
cc._RF.push(module, 'cd170eeAnRBu6ZGFFM0eHuO', 'Constant');
// subpackages/l_homeBtnSort/Scripts/Constant.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.POSITION_Y_SPACE = exports.MIN_POSITION_Y = exports.RIGHT_MARGIN = exports.LEFT_MARGIN = exports.POSITION_LIST = exports.POSITION_PAIRS = exports.HallBtnType = void 0;
var e;
(function (e) {
    e[e["Position1"] = 1] = "Position1";
    e[e["Position2"] = 2] = "Position2";
    e[e["Position3"] = 3] = "Position3";
    e[e["Position4"] = 4] = "Position4";
    e[e["Position5"] = 5] = "Position5";
    e[e["Position6"] = 6] = "Position6";
    e[e["Position7"] = 7] = "Position7";
    e[e["Position8"] = 8] = "Position8";
})(e || (e = {}));
exports.HallBtnType = {
    DailyChallenge: "DailyChallenge",
    Task: "Task",
    Rank: "Rank",
    Valentine: "Valentine",
    DailySign: "DailySign",
    Travel: "Travel",
    Normal: "Normal",
    Endless: "Endless"
};
exports.POSITION_PAIRS = [[e.Position1, e.Position2], [e.Position3, e.Position4], [e.Position5, e.Position6], [e.Position7, e.Position8]];
exports.POSITION_LIST = [e.Position1, e.Position2, e.Position3, e.Position4, e.Position5, e.Position6, e.Position7, e.Position8];
exports.LEFT_MARGIN = 31.5;
exports.RIGHT_MARGIN = 31.5;
exports.MIN_POSITION_Y = -157;
exports.POSITION_Y_SPACE = 260;

cc._RF.pop();