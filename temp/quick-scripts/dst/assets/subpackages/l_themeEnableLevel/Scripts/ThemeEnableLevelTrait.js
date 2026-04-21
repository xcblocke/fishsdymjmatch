
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_themeEnableLevel/Scripts/ThemeEnableLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d98e8r2i9LsIu9xuekfOvu', 'ThemeEnableLevelTrait');
// subpackages/l_themeEnableLevel/Scripts/ThemeEnableLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ThemeEnableLevelTrait = /** @class */ (function (_super) {
    __extends(ThemeEnableLevelTrait, _super);
    function ThemeEnableLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._minLevel = 30;
        return _this;
    }
    ThemeEnableLevelTrait.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        var r = null === (t = this._traitData) || void 0 === t ? void 0 : t.minLevel;
        "number" == typeof r && !Number.isNaN(r) && r > 0 && (this._minLevel = r);
    };
    ThemeEnableLevelTrait.prototype.onFlowerCS_getMinLvEnable = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._minLevel,
            isBreak: true
        });
    };
    ThemeEnableLevelTrait.prototype.onBaseCardSkin_getStartLv = function (e, t) {
        t({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._minLevel,
            isBreak: true
        });
    };
    ThemeEnableLevelTrait.traitKey = "ThemeEnableLevel";
    ThemeEnableLevelTrait = __decorate([
        mj.trait,
        mj.class("ThemeEnableLevelTrait")
    ], ThemeEnableLevelTrait);
    return ThemeEnableLevelTrait;
}(Trait_1.default));
exports.default = ThemeEnableLevelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RoZW1lRW5hYmxlTGV2ZWwvU2NyaXB0cy9UaGVtZUVuYWJsZUxldmVsVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUF1QkM7UUF0QkMsZUFBUyxHQUFHLEVBQUUsQ0FBQzs7SUFzQmpCLENBQUM7SUFwQkMsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDN0UsUUFBUSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QseURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCx5REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXBCTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRmxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0F1QnpDO0lBQUQsNEJBQUM7Q0F2QkQsQUF1QkMsQ0F2QmtELGVBQUssR0F1QnZEO2tCQXZCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGhlbWVFbmFibGVMZXZlbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZUVuYWJsZUxldmVsVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9taW5MZXZlbCA9IDMwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRoZW1lRW5hYmxlTGV2ZWxcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciB0O1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciByID0gbnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubWluTGV2ZWw7XG4gICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgciAmJiAhTnVtYmVyLmlzTmFOKHIpICYmIHIgPiAwICYmICh0aGlzLl9taW5MZXZlbCA9IHIpO1xuICB9XG4gIG9uRmxvd2VyQ1NfZ2V0TWluTHZFbmFibGUoZSwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl9taW5MZXZlbCxcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxuICBvbkJhc2VDYXJkU2tpbl9nZXRTdGFydEx2KGUsIHQpIHtcbiAgICB0KHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDogdGhpcy5fbWluTGV2ZWwsXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iXX0=