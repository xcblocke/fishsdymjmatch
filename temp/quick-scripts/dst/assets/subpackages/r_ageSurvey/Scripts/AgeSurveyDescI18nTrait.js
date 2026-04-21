
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyDescI18nTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f8555mfTVGDJKkegX/SW9F', 'AgeSurveyDescI18nTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyDescI18nTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyDescI18nTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyDescI18nTrait, _super);
    function AgeSurveyDescI18nTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._descI18nIds = [];
        return _this;
    }
    AgeSurveyDescI18nTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._descI18nIds = (null === (e = this._traitData) || void 0 === e ? void 0 : e.descI18nIds) || [];
    };
    AgeSurveyDescI18nTrait.prototype.onAgeSrvMgr_descI18nIds = function (t, e) {
        if (!this._descI18nIds || "string" == typeof this._descI18nIds && !this._descI18nIds || Array.isArray(this._descI18nIds) && 0 === this._descI18nIds.length) {
            e();
        }
        else {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._descI18nIds
            });
        }
    };
    AgeSurveyDescI18nTrait.traitKey = "AgeSurveyDescI18n";
    AgeSurveyDescI18nTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyDescI18nTrait")
    ], AgeSurveyDescI18nTrait);
    return AgeSurveyDescI18nTrait;
}(Trait_1.default));
exports.default = AgeSurveyDescI18nTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleURlc2NJMThuVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBb0QsMENBQUs7SUFBekQ7UUFBQSxxRUFtQkM7UUFsQkMsa0JBQVksR0FBRyxFQUFFLENBQUM7O0lBa0JwQixDQUFDO0lBaEJDLHVDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0RyxDQUFDO0lBQ0Qsd0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLFFBQVEsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUMxSixDQUFDLEVBQUUsQ0FBQztTQUNMO2FBQU07WUFDTCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWTthQUM3QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFoQk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUZuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBbUIxQztJQUFELDZCQUFDO0NBbkJELEFBbUJDLENBbkJtRCxlQUFLLEdBbUJ4RDtrQkFuQm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkFnZVN1cnZleURlc2NJMThuVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFnZVN1cnZleURlc2NJMThuVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9kZXNjSTE4bklkcyA9IFtdO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkFnZVN1cnZleURlc2NJMThuXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9kZXNjSTE4bklkcyA9IChudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5kZXNjSTE4bklkcykgfHwgW107XG4gIH1cbiAgb25BZ2VTcnZNZ3JfZGVzY0kxOG5JZHModCwgZSkge1xuICAgIGlmICghdGhpcy5fZGVzY0kxOG5JZHMgfHwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgdGhpcy5fZGVzY0kxOG5JZHMgJiYgIXRoaXMuX2Rlc2NJMThuSWRzIHx8IEFycmF5LmlzQXJyYXkodGhpcy5fZGVzY0kxOG5JZHMpICYmIDAgPT09IHRoaXMuX2Rlc2NJMThuSWRzLmxlbmd0aCkge1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuX2Rlc2NJMThuSWRzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=