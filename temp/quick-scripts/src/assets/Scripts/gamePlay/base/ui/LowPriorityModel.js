"use strict";
cc._RF.push(module, '38599sTgydCXIshMvK10NU7', 'LowPriorityModel');
// Scripts/gamePlay/base/ui/LowPriorityModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../framework/data/Model");
var LowPriorityModel = /** @class */ (function (_super) {
    __extends(LowPriorityModel, _super);
    function LowPriorityModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowPriorityModel.prototype.saveToLocal = function (e) {
        if (e) {
            this.localData.lowPriorityBundle || (this.localData.lowPriorityBundle = {});
            this.localData.lowPriorityBundle[e] = 1;
            this.localData.lowPriorityBundle = this.localData.lowPriorityBundle;
        }
    };
    LowPriorityModel.prototype.isHasDownloaded = function (e) {
        return !!e && !!this.localData.lowPriorityBundle && 1 === this.localData.lowPriorityBundle[e];
    };
    LowPriorityModel.prototype.removeFromLocal = function (e) {
        if (e && this.localData.lowPriorityBundle) {
            delete this.localData.lowPriorityBundle[e];
            this.localData.lowPriorityBundle = this.localData.lowPriorityBundle;
        }
    };
    LowPriorityModel.prototype.clearAllDownloadedFlags = function () {
        if (this.localData.lowPriorityBundle) {
            this.localData.lowPriorityBundle = {};
            this.localData.lowPriorityBundle = this.localData.lowPriorityBundle;
        }
    };
    LowPriorityModel = __decorate([
        mj.class("LowPriorityModel")
    ], LowPriorityModel);
    return LowPriorityModel;
}(Model_1.default));
exports.default = LowPriorityModel;

cc._RF.pop();