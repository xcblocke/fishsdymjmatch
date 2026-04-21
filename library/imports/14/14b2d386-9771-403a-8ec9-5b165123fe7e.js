"use strict";
cc._RF.push(module, '14b2dOGl3FAOo7JWxZRI/5+', 'SettingRedDotModel');
// subpackages/l_settingRedDot/Scripts/SettingRedDotModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../Scripts/framework/data/Model");
var SettingRedDotModel = /** @class */ (function (_super) {
    __extends(SettingRedDotModel, _super);
    function SettingRedDotModel() {
        var _this = _super.call(this) || this;
        _this._modelName = "SettingRedDot";
        _this.localData.redDotTypes || (_this.localData.redDotTypes = []);
        return _this;
    }
    SettingRedDotModel.prototype.addRedDot = function (t) {
        var e = this.localData.redDotTypes;
        -1 === e.indexOf(t) && e.push(t);
        this.localData.redDotTypes = e;
    };
    SettingRedDotModel.prototype.removeRedDot = function (t) {
        var e = this.localData.redDotTypes, o = e.indexOf(t);
        if (-1 !== o) {
            e.splice(o, 1);
            this.localData.redDotTypes = e;
        }
    };
    SettingRedDotModel.prototype.getRedDotCount = function (t) {
        var e;
        return -1 !== (null === (e = this.localData) || void 0 === e ? void 0 : e.redDotTypes.indexOf(t)) ? 1 : 0;
    };
    SettingRedDotModel.prototype.getTotalRedDotCount = function () {
        var t;
        return (null === (t = this.localData) || void 0 === t ? void 0 : t.redDotTypes.length) || 0;
    };
    SettingRedDotModel.prototype.hasRedDot = function () {
        return this.getTotalRedDotCount() > 0;
    };
    SettingRedDotModel.prototype.clearAllRedDots = function () {
        this.localData.redDotTypes = [];
    };
    SettingRedDotModel = __decorate([
        mj.class("SettingRedDotModel")
    ], SettingRedDotModel);
    return SettingRedDotModel;
}(Model_1.default));
exports.default = SettingRedDotModel;

cc._RF.pop();