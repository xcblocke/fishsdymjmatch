"use strict";
cc._RF.push(module, '28d92Vy7+5Ht5D0RSpHKSrH', 'ChangeBoardDataTrait');
// subpackages/l_cbad/Scripts/ChangeBoardDataTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ChangeBoardDataTrait = /** @class */ (function (_super) {
    __extends(ChangeBoardDataTrait, _super);
    function ChangeBoardDataTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.configPath = null;
        _this.offsetPath = null;
        _this.levelDataPath = null;
        _this.jsonPath = null;
        _this.bundleName = "";
        _this.traitFolder = "";
        _this._pathExistsCache = new Map();
        return _this;
    }
    ChangeBoardDataTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.bundleName = this._traitData.bundleName || "mainRes";
        this.traitFolder = this._traitData.traitFolder || "trait1";
        this.configPath = ["byteData/" + this.traitFolder + "/level_file_config", this.bundleName];
        this.offsetPath = ["byteData/" + this.traitFolder + "/level_data_offsets", this.bundleName];
        this.levelDataPath = ["byteData/" + this.traitFolder + "/level_data", this.bundleName];
        this.jsonPath = ["config/boards/" + this.traitFolder + "/", this.bundleName];
    };
    ChangeBoardDataTrait.prototype.onExtNormLv_getConfigPath = function (t, e) {
        if (this.checkGameMode() && this.getIsExists("byteData/" + this.traitFolder + "/level_file_config")) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.configPath
            });
        }
        else {
            e();
        }
    };
    ChangeBoardDataTrait.prototype.onExtNormLv_getOffsetPath = function (t, e) {
        if (this.checkGameMode() && this.getIsExists("byteData/" + this.traitFolder + "/level_data_offsets")) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.offsetPath
            });
        }
        else {
            e();
        }
    };
    ChangeBoardDataTrait.prototype.onExtNormLv_getLevDataPath = function (t, e) {
        if (this.checkGameMode() && this.getIsExists("byteData/" + this.traitFolder + "/level_data")) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.levelDataPath
            });
        }
        else {
            e();
        }
    };
    ChangeBoardDataTrait.prototype.onExtNormLv_getJsonPath = function (t, e) {
        var r;
        if (this.checkGameMode()) {
            var a = null === (r = t.args) || void 0 === r ? void 0 : r[0];
            if (a) {
                var i = "config/boards/" + this.traitFolder + "/" + a;
                if (!this.getIsExists(i)) {
                    e();
                    return;
                }
            }
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this.jsonPath
            });
        }
        else
            e();
    };
    ChangeBoardDataTrait.prototype.getIsExists = function (t) {
        this._pathExistsCache.has(t) || this._pathExistsCache.set(t, this.checkFileExists(t));
        return this._pathExistsCache.get(t);
    };
    ChangeBoardDataTrait.prototype.checkFileExists = function (t) {
        var e = cc.assetManager.getBundle(this.bundleName);
        return !(!e || !e.getInfoWithPath(t));
    };
    ChangeBoardDataTrait.traitKey = "ChangeBoardData";
    ChangeBoardDataTrait = __decorate([
        mj.trait,
        mj.class("ChangeBoardDataTrait")
    ], ChangeBoardDataTrait);
    return ChangeBoardDataTrait;
}(ExtractTrait_1.default));
exports.default = ChangeBoardDataTrait;

cc._RF.pop();