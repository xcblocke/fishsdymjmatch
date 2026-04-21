"use strict";
cc._RF.push(module, 'fa8d9yvkxNBQbuQD0qzXrML', 'LevelThresholdNTrait');
// subpackages/l_levelThresholdN/Scripts/LevelThresholdNTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LevelThresholdNTrait = /** @class */ (function (_super) {
    __extends(LevelThresholdNTrait, _super);
    function LevelThresholdNTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._threshold = 74;
        _this._coefficient = 0.9;
        return _this;
    }
    LevelThresholdNTrait.prototype.onLoad = function () {
        var t, r;
        _super.prototype.onLoad.call(this);
        this._threshold = null !== (t = this._traitData.threshold) && void 0 !== t ? t : 74;
        this._coefficient = null !== (r = this._traitData.coefficient) && void 0 !== r ? r : 0.9;
    };
    LevelThresholdNTrait.prototype.onExtNormLv_getAdNengRU = function (e, t) {
        if (this.checkGameMode()) {
            if (null != e.args[0]) {
                var r = UserModel_1.default.getInstance(), o = r.getCurrentGameType(), i = r.getGameDataByGameType(o);
                if ((i ? i.getCurrentLevelId() : 0) <= this._threshold)
                    t();
                else {
                    var n = this._coefficient, a = e.args.length >= 2 ? e.args[1] : null;
                    if (a && Array.isArray(a)) {
                        a.push(n);
                        t();
                    }
                    else {
                        e.args[1] = [n];
                        t();
                    }
                }
            }
            else
                t();
        }
        else
            t();
    };
    LevelThresholdNTrait.traitKey = "LevelThresholdN";
    LevelThresholdNTrait = __decorate([
        mj.trait,
        mj.class("LevelThresholdNTrait")
    ], LevelThresholdNTrait);
    return LevelThresholdNTrait;
}(ExtractTrait_1.default));
exports.default = LevelThresholdNTrait;

cc._RF.pop();