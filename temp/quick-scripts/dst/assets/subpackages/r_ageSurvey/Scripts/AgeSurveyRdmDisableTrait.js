
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyRdmDisableTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6662foEUN1Lv7SzyPz6jmtM', 'AgeSurveyRdmDisableTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyRdmDisableTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyRdmDisableTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyRdmDisableTrait, _super);
    function AgeSurveyRdmDisableTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AgeSurveyRdmDisableTrait.prototype.onAgeSrvMgr_isShuffle = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: false
        });
    };
    AgeSurveyRdmDisableTrait.traitKey = "AgeSurveyRdmDisable";
    AgeSurveyRdmDisableTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyRdmDisableTrait")
    ], AgeSurveyRdmDisableTrait);
    return AgeSurveyRdmDisableTrait;
}(Trait_1.default));
exports.default = AgeSurveyRdmDisableTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleVJkbURpc2FibGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFzRCw0Q0FBSztJQUEzRDs7SUFTQSxDQUFDO0lBUEMsd0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1lBQ2IsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVBNLGlDQUFRLEdBQUcscUJBQXFCLENBQUM7SUFEckIsd0JBQXdCO1FBRjVDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztPQUNoQix3QkFBd0IsQ0FTNUM7SUFBRCwrQkFBQztDQVRELEFBU0MsQ0FUcUQsZUFBSyxHQVMxRDtrQkFUb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQWdlU3VydmV5UmRtRGlzYWJsZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ2VTdXJ2ZXlSZG1EaXNhYmxlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQWdlU3VydmV5UmRtRGlzYWJsZVwiO1xuICBvbkFnZVNydk1ncl9pc1NodWZmbGUodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICB9KTtcbiAgfVxufSJdfQ==