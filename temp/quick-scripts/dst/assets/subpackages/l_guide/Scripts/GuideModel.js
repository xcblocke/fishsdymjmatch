
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guide/Scripts/GuideModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8423fzNn1RDno2VEbXSIFjc', 'GuideModel');
// subpackages/l_guide/Scripts/GuideModel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("../../../Scripts/framework/data/Model");
var GuideModel = /** @class */ (function (_super) {
    __extends(GuideModel, _super);
    function GuideModel() {
        var _this = _super.call(this) || this;
        _this.localData.inGuide = false;
        _this.localData.guideStep = 0;
        return _this;
    }
    GuideModel = __decorate([
        mj.class("GuideModel")
    ], GuideModel);
    return GuideModel;
}(Model_1.default));
exports.default = GuideModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlL1NjcmlwdHMvR3VpZGVNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBRTFEO0lBQXdDLDhCQUFLO0lBQzNDO1FBQUEsWUFDRSxpQkFBTyxTQUdSO1FBRkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQy9CLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzs7SUFDL0IsQ0FBQztJQUxrQixVQUFVO1FBRDlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO09BQ0YsVUFBVSxDQU05QjtJQUFELGlCQUFDO0NBTkQsQUFNQyxDQU51QyxlQUFLLEdBTTVDO2tCQU5vQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvTW9kZWwnO1xuQG1qLmNsYXNzKFwiR3VpZGVNb2RlbFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5pbkd1aWRlID0gZmFsc2U7XG4gICAgdGhpcy5sb2NhbERhdGEuZ3VpZGVTdGVwID0gMDtcbiAgfVxufSJdfQ==