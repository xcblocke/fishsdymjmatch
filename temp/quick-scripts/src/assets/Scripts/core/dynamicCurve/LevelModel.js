"use strict";
cc._RF.push(module, 'f941eAfng5G4JgbNWEBQEmm', 'LevelModel');
// Scripts/core/dynamicCurve/LevelModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelModel = void 0;
var Model_1 = require("../../framework/data/Model");
var Common_1 = require("../../types/Common");
var LevelModel = /** @class */ (function (_super) {
    __extends(LevelModel, _super);
    function LevelModel() {
        var _this = _super.call(this) || this;
        _this.initDefaultData();
        return _this;
    }
    LevelModel.prototype.initDefaultData = function () {
        this.isLocalEmpty(this.localData.customKeys) && (this.localData.customKeys = []);
    };
    LevelModel.prototype.isLocalEmpty = function (e) {
        return null == e || "" === e;
    };
    LevelModel.prototype.cacheData = function (e, t) {
        this.localData[e] = t;
        var o = this.localData.customKeys;
        if (!o.includes(e)) {
            o.push(e);
            this.localData.customKeys = o;
        }
    };
    LevelModel.prototype.getCachedData = function (e, t) {
        return this.localData[e] ? this.localData[e] : t;
    };
    LevelModel.prototype.clearLevelValues = function () {
        var e, t, o = this.localData.customKeys, n = [];
        try {
            for (var i = __values(o), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                if (l.startsWith(Common_1.PrefixLevelValue)) {
                    this.localData[l] = [];
                }
                else {
                    n.push(l);
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                r && !r.done && (t = i.return) && t.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.localData.customKeys = n;
        this.logInfo("清除关卡值数据: " + JSON.stringify(this.localData.customKeys));
    };
    LevelModel.prototype.logInfo = function (e, t) {
        if (t === void 0) { t = Common_1.EDCColor.LEVEL_MODEL; }
    };
    LevelModel = __decorate([
        mj.class("LevelModel")
    ], LevelModel);
    return LevelModel;
}(Model_1.default));
exports.LevelModel = LevelModel;

cc._RF.pop();