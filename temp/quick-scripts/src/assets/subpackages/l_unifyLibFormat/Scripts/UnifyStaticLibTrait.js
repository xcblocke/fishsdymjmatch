"use strict";
cc._RF.push(module, '7fd0aeTSMRCZrRIeXGobIBH', 'UnifyStaticLibTrait');
// subpackages/l_unifyLibFormat/Scripts/UnifyStaticLibTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UnifyBaseTrait_1 = require("./UnifyBaseTrait");
var UnifyUtils_1 = require("./UnifyUtils");
var UnifyStaticLibTrait = /** @class */ (function (_super) {
    __extends(UnifyStaticLibTrait, _super);
    function UnifyStaticLibTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelData = [];
        _this.initSuccess = false;
        _this.libEnabled = false;
        return _this;
    }
    UnifyStaticLibTrait.prototype.getPath = function () {
        var t, e;
        return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.path) && void 0 !== e ? e : [["config/static001", "l_unifyLibFormat", -1], ["config/static001", "r_unifyLibFormat", 100]];
    };
    UnifyStaticLibTrait.prototype.isLoaded = function () {
        return this.levelData && this.levelData.length > 0;
    };
    UnifyStaticLibTrait.prototype.onLoginM_enterGame = function (t, e) {
        this.initData();
        e();
    };
    UnifyStaticLibTrait.prototype.onExtractTool_initOther = function (t, e) {
        this.initData();
        e();
    };
    UnifyStaticLibTrait.prototype.initData = function () {
        var t = this;
        this.initSuccess || this.loadLevelData().then(function (e) {
            t.initSuccess = e;
        });
    };
    UnifyStaticLibTrait.prototype.loadLevelData = function () {
        var t = this, e = this.getPath();
        return new Promise(function (r) {
            UnifyUtils_1.default.loadLibraries(e.map(function (t) {
                return {
                    path: t[0],
                    bundle: t[1],
                    timeout: t[2]
                };
            })).then(function (e) {
                var n = e.allData, i = e.failCount;
                if (n) {
                    var a = UnifyUtils_1.default.parseLevelData(n);
                    if (a.length > t.levelData.length) {
                        t.setLevelCaches("static", a);
                        t.levelData = a.map(function (t) {
                            return t.content;
                        });
                    }
                }
                r(0 === i);
            }).catch(function () {
                r(false);
            });
        });
    };
    UnifyStaticLibTrait.prototype.onExtractTool_canUseStatic = function (t, e) {
        if (this.checkGameMode()) {
            if (this.isLoaded()) {
                this.libEnabled || (this.libEnabled = true);
                e({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
            else
                e();
        }
        else
            e();
    };
    UnifyStaticLibTrait.prototype.onExtractStatic_getLvData = function (t, e) {
        if (this.checkGameMode() && this.isLoaded() && this.libEnabled) {
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.levelData
            });
        }
        else {
            e();
        }
    };
    UnifyStaticLibTrait.prototype.onExtractStatic_getMaxLvs = function (t, e) {
        if (this.checkGameMode() && this.isLoaded() && this.libEnabled) {
            e({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.levelData.length
            });
        }
        else {
            e();
        }
    };
    UnifyStaticLibTrait.prototype.onExtractStatic_setCurLvDt = function (t, e) {
        if (this.checkGameMode()) {
            if (this.isLoaded()) {
                if (this.libEnabled) {
                    var r = t.args[0];
                    if (null != r) {
                        var n = this.getLevelByArrayIndex("static", r);
                        if (n) {
                            var i = ExtractTool_1.default.getCurrentGameType(), a = UserModel_1.default.getInstance().getGameDataByGameType(i).getLevelId();
                            this.cacheCurLvData(i, a, n);
                        }
                    }
                    e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    UnifyStaticLibTrait.traitKey = "UnifyStaticLib";
    UnifyStaticLibTrait = __decorate([
        mj.trait,
        mj.class("UnifyStaticLibTrait")
    ], UnifyStaticLibTrait);
    return UnifyStaticLibTrait;
}(UnifyBaseTrait_1.default));
exports.default = UnifyStaticLibTrait;

cc._RF.pop();