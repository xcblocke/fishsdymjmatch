
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyAgeDataTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ff4dUMm8JCHqAFLTfSH8Oq', 'AgeSurveyAgeDataTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyAgeDataTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyAgeDataTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyAgeDataTrait, _super);
    function AgeSurveyAgeDataTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._ageConfigs = [];
        return _this;
    }
    AgeSurveyAgeDataTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._ageConfigs = (null === (e = this._traitData) || void 0 === e ? void 0 : e.ageConfigs) || [];
    };
    AgeSurveyAgeDataTrait.prototype.onAgeSrvMgr_getAgeRanges = function (t, e) {
        var r, o, i = null !== (o = null === (r = t.args) || void 0 === r ? void 0 : r[0]) && void 0 !== o ? o : 0;
        if (this._ageConfigs && 0 !== this._ageConfigs.length) {
            var n = this._ageConfigs.find(function (t) {
                return t.surveyIndex === i;
            });
            if (n) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: n.ageRanges
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    AgeSurveyAgeDataTrait.traitKey = "AgeSurveyAgeData";
    AgeSurveyAgeDataTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyAgeDataTrait")
    ], AgeSurveyAgeDataTrait);
    return AgeSurveyAgeDataTrait;
}(Trait_1.default));
exports.default = AgeSurveyAgeDataTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleUFnZURhdGFUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFtRCx5Q0FBSztJQUF4RDtRQUFBLHFFQTJCQztRQTFCQyxpQkFBVyxHQUFHLEVBQUUsQ0FBQzs7SUEwQm5CLENBQUM7SUF4QkMsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BHLENBQUM7SUFDRCx3REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25HLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDckQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN2QyxPQUFPLENBQUMsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDO29CQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO29CQUMxQyxPQUFPLEVBQUUsSUFBSTtvQkFDYixTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVM7aUJBQ3ZCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLENBQUMsRUFBRSxDQUFDO2FBQ0w7U0FDRjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUF4Qk0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQUZsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBMkJ6QztJQUFELDRCQUFDO0NBM0JELEFBMkJDLENBM0JrRCxlQUFLLEdBMkJ2RDtrQkEzQm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkFnZVN1cnZleUFnZURhdGFUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlU3VydmV5QWdlRGF0YVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfYWdlQ29uZmlncyA9IFtdO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkFnZVN1cnZleUFnZURhdGFcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2FnZUNvbmZpZ3MgPSAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuYWdlQ29uZmlncykgfHwgW107XG4gIH1cbiAgb25BZ2VTcnZNZ3JfZ2V0QWdlUmFuZ2VzKHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG8sXG4gICAgICBpID0gbnVsbCAhPT0gKG8gPSBudWxsID09PSAociA9IHQuYXJncykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogclswXSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDA7XG4gICAgaWYgKHRoaXMuX2FnZUNvbmZpZ3MgJiYgMCAhPT0gdGhpcy5fYWdlQ29uZmlncy5sZW5ndGgpIHtcbiAgICAgIHZhciBuID0gdGhpcy5fYWdlQ29uZmlncy5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0LnN1cnZleUluZGV4ID09PSBpO1xuICAgICAgfSk7XG4gICAgICBpZiAobikge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IG4uYWdlUmFuZ2VzXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=