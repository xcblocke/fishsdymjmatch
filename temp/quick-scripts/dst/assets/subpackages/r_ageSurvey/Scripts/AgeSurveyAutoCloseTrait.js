
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyAutoCloseTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a64dB98r9O4aH64USWqaZ5', 'AgeSurveyAutoCloseTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyAutoCloseTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyAutoCloseTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyAutoCloseTrait, _super);
    function AgeSurveyAutoCloseTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._autoCloseTime = 5;
        return _this;
    }
    AgeSurveyAutoCloseTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._autoCloseTime = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.autoCloseTime) && void 0 !== r ? r : 5;
    };
    AgeSurveyAutoCloseTrait.prototype.onAgeSrvMgr_autoCloseTime = function (t, e) {
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: this._autoCloseTime
        });
    };
    AgeSurveyAutoCloseTrait.traitKey = "AgeSurveyAutoClose";
    AgeSurveyAutoCloseTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyAutoCloseTrait")
    ], AgeSurveyAutoCloseTrait);
    return AgeSurveyAutoCloseTrait;
}(Trait_1.default));
exports.default = AgeSurveyAutoCloseTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleUF1dG9DbG9zZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQXFELDJDQUFLO0lBQTFEO1FBQUEscUVBZUM7UUFkQyxvQkFBYyxHQUFHLENBQUMsQ0FBQzs7SUFjckIsQ0FBQztJQVpDLHdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekksQ0FBQztJQUNELDJEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxPQUFPLEVBQUUsSUFBSTtZQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsY0FBYztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBWk0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQUZwQix1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBZTNDO0lBQUQsOEJBQUM7Q0FmRCxBQWVDLENBZm9ELGVBQUssR0FlekQ7a0JBZm9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkFnZVN1cnZleUF1dG9DbG9zZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ2VTdXJ2ZXlBdXRvQ2xvc2VUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2F1dG9DbG9zZVRpbWUgPSA1O1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkFnZVN1cnZleUF1dG9DbG9zZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fYXV0b0Nsb3NlVGltZSA9IG51bGwgIT09IChyID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuYXV0b0Nsb3NlVGltZSkgJiYgdm9pZCAwICE9PSByID8gciA6IDU7XG4gIH1cbiAgb25BZ2VTcnZNZ3JfYXV0b0Nsb3NlVGltZSh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl9hdXRvQ2xvc2VUaW1lXG4gICAgfSk7XG4gIH1cbn0iXX0=