"use strict";
cc._RF.push(module, '88affN7ns9BQ7hFcosbXgAL', 'Tile2CheerChecker');
// Scripts/process/cheer/Tile2CheerChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2CheerChecker = void 0;
var UserModel_1 = require("../../gamePlay/user/UserModel");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2CheerChecker = /** @class */ (function (_super) {
    __extends(Tile2CheerChecker, _super);
    function Tile2CheerChecker(t) {
        return _super.call(this, t) || this;
    }
    Tile2CheerChecker.prototype.getThresholds = function () {
        return [[5, 0], [10, 1], [15, 2], [20, 3], [30, 4], [40, 4], [50, 4]];
    };
    Tile2CheerChecker.prototype.canShowCheer = function (e) {
        var t, o;
        if (!UserModel_1.default.getInstance().isGuideFinished())
            return {
                isShow: false,
                index: 0
            };
        var n = this.getThresholds();
        try {
            for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                var c = __read(r.value, 2), u = c[0], p = c[1];
                if (e === u)
                    return {
                        isShow: true,
                        index: p
                    };
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return {
            isShow: false,
            index: 0
        };
    };
    Tile2CheerChecker.prototype.getStepThresholds = function () {
        return [[5, 4], [4, 3], [3, 2], [2, 1], [1, 0]];
    };
    Tile2CheerChecker.prototype.canShowCheerByStep = function (e) {
        var t, o;
        if (!UserModel_1.default.getInstance().isGuideFinished())
            return {
                isShow: false,
                index: 0
            };
        var n = this.getStepThresholds();
        try {
            for (var i = __values(n), r = i.next(); !r.done; r = i.next()) {
                var c = __read(r.value, 2), u = c[0], p = c[1];
                if (e >= u)
                    return {
                        isShow: true,
                        index: p
                    };
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return {
            isShow: false,
            index: 0
        };
    };
    __decorate([
        mj.traitEvent("T2CheerChk_thresholds")
    ], Tile2CheerChecker.prototype, "getThresholds", null);
    __decorate([
        mj.traitEvent("T2CheerChk_canShow")
    ], Tile2CheerChecker.prototype, "canShowCheer", null);
    __decorate([
        mj.traitEvent("T2CheerChk_stepThresholds")
    ], Tile2CheerChecker.prototype, "getStepThresholds", null);
    __decorate([
        mj.traitEvent("T2CheerChk_canShowByStep")
    ], Tile2CheerChecker.prototype, "canShowCheerByStep", null);
    return Tile2CheerChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2CheerChecker = Tile2CheerChecker;

cc._RF.pop();