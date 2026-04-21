
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '128a5zAt8VFrpQN1mNyOUxF', 'AgeSurveyTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AgeSurveyManager_1 = require("./AgeSurveyManager");
var AgeSurveyTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyTrait, _super);
    function AgeSurveyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AgeSurveyTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        var o = (null === (e = this._traitData) || void 0 === e ? void 0 : e.configs) || [], i = (null === (r = this._traitData) || void 0 === r ? void 0 : r.descI18nIds) || [];
        AgeSurveyManager_1.default.getInstance().setConfigs(o, i);
    };
    AgeSurveyTrait.prototype.onGuideBhv_start = function (t, e) {
        this.showOnGuideStart();
        e();
    };
    AgeSurveyTrait.prototype.onTile2GuideBhv_start = function (t, e) {
        this.showOnGuideStart();
        e();
    };
    AgeSurveyTrait.prototype.showOnGuideStart = function () {
        AgeSurveyManager_1.default.getInstance().tryShowNextSurvey(0);
    };
    AgeSurveyTrait.prototype.onLoginM_showLoad = function (t, e) {
        e();
        this.showOnLoading();
    };
    AgeSurveyTrait.prototype.showOnLoading = function () {
        AgeSurveyManager_1.default.getInstance().tryShowNextSurvey(1);
    };
    AgeSurveyTrait.traitKey = "AgeSurvey";
    __decorate([
        mj.traitEvent("AgeSurvey_showOnGuide")
    ], AgeSurveyTrait.prototype, "showOnGuideStart", null);
    __decorate([
        mj.traitEvent("AgeSurvey_showOnLoading")
    ], AgeSurveyTrait.prototype, "showOnLoading", null);
    AgeSurveyTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyTrait")
    ], AgeSurveyTrait);
    return AgeSurveyTrait;
}(Trait_1.default));
exports.default = AgeSurveyTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsdURBQWtEO0FBR2xEO0lBQTRDLGtDQUFLO0lBQWpEOztJQTZCQSxDQUFDO0lBM0JDLCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUNqRixDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEYsMEJBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QseUNBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDhDQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEI7UUFDRSwwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsMENBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsMEJBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQTNCTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQWlCOUI7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzBEQUd0QztJQU1EO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQzt1REFHeEM7SUE1QmtCLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQTZCbEM7SUFBRCxxQkFBQztDQTdCRCxBQTZCQyxDQTdCMkMsZUFBSyxHQTZCaEQ7a0JBN0JvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBBZ2VTdXJ2ZXlNYW5hZ2VyIGZyb20gJy4vQWdlU3VydmV5TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkFnZVN1cnZleVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ2VTdXJ2ZXlUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJBZ2VTdXJ2ZXlcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHZhciBvID0gKG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNvbmZpZ3MpIHx8IFtdLFxuICAgICAgaSA9IChudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5kZXNjSTE4bklkcykgfHwgW107XG4gICAgQWdlU3VydmV5TWFuYWdlci5nZXRJbnN0YW5jZSgpLnNldENvbmZpZ3MobywgaSk7XG4gIH1cbiAgb25HdWlkZUJodl9zdGFydCh0LCBlKSB7XG4gICAgdGhpcy5zaG93T25HdWlkZVN0YXJ0KCk7XG4gICAgZSgpO1xuICB9XG4gIG9uVGlsZTJHdWlkZUJodl9zdGFydCh0LCBlKSB7XG4gICAgdGhpcy5zaG93T25HdWlkZVN0YXJ0KCk7XG4gICAgZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQWdlU3VydmV5X3Nob3dPbkd1aWRlXCIpXG4gIHNob3dPbkd1aWRlU3RhcnQoKSB7XG4gICAgQWdlU3VydmV5TWFuYWdlci5nZXRJbnN0YW5jZSgpLnRyeVNob3dOZXh0U3VydmV5KDApO1xuICB9XG4gIG9uTG9naW5NX3Nob3dMb2FkKHQsIGUpIHtcbiAgICBlKCk7XG4gICAgdGhpcy5zaG93T25Mb2FkaW5nKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZ2VTdXJ2ZXlfc2hvd09uTG9hZGluZ1wiKVxuICBzaG93T25Mb2FkaW5nKCkge1xuICAgIEFnZVN1cnZleU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cnlTaG93TmV4dFN1cnZleSgxKTtcbiAgfVxufSJdfQ==