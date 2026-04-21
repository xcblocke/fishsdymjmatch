
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_vibrate/Scripts/VibrateTraitAndroid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a91a1LRF8RCxKqwshJ1pHoM', 'VibrateTraitAndroid');
// subpackages/l_vibrate/Scripts/VibrateTraitAndroid.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var VibrateTraitAndroid = /** @class */ (function (_super) {
    __extends(VibrateTraitAndroid, _super);
    function VibrateTraitAndroid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._androidConfigMap = new Map();
        return _this;
    }
    VibrateTraitAndroid.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initAndroidConfigs();
    };
    VibrateTraitAndroid.prototype.initAndroidConfigs = function () {
        this._config = {
            btnClick: this._traitData.btnClickAndroid || VibrateManager_1.EVibrateStrength.Light,
            tileSelectSuccess: this._traitData.tileSelectSuccessAndroid || VibrateManager_1.EVibrateStrength.Medium,
            tileDragStart: this._traitData.tileDragStartAndroid || VibrateManager_1.EVibrateStrength.Medium,
            tileClear: this._traitData.tileClearAndroid || VibrateManager_1.EVibrateStrength.Strong,
            chestOpen: this._traitData.chestOpenAndroid || VibrateManager_1.EVibrateStrength.StrongShort,
            travelCollect: this._traitData.travelCollectAndroid || VibrateManager_1.EVibrateStrength.StrongShort,
            dailyChallengeCollect: this._traitData.dailyChallengeCollectAndroid || VibrateManager_1.EVibrateStrength.StrongShort,
            tileSelectFail: this._traitData.tileSelectFailAndroid || VibrateManager_1.EVibrateStrength.Multiple
        };
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Light, "1");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Medium, "2");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Strong, "3");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.StrongShort, "4");
        this._androidConfigMap.set(VibrateManager_1.EVibrateStrength.Multiple, "5");
    };
    VibrateTraitAndroid.prototype.getAndroidConfig = function (t) {
        return this._androidConfigMap.get(t) || "1";
    };
    VibrateTraitAndroid.prototype.triggerVibrate = function (t) {
        VibrateManager_1.default.getInstance().triggerVibrateByType(this.getAndroidConfig(t));
    };
    VibrateTraitAndroid.prototype.onBaseUI_btnClick = function (t, e) {
        this._traitData.btnClickEnabled && this.triggerVibrate(this._config.btnClick);
        e();
    };
    VibrateTraitAndroid.prototype.onIptTchEnd_Success = function (t, e) {
        var i, r, a;
        this._traitData.tileSelectSuccessEnabled && ((null === (a = null === (r = null === (i = null == t ? void 0 : t.args) || void 0 === i ? void 0 : i[0]) || void 0 === r ? void 0 : r._data) || void 0 === a ? void 0 : a.isCancel) || this.triggerVibrate(this._config.tileSelectSuccess));
        e();
    };
    VibrateTraitAndroid.prototype.onIptBase_pushClrEff = function (t, e) {
        this._traitData.tileSelectSuccessEnabled && this.triggerVibrate(this._config.tileSelectSuccess);
        e();
    };
    VibrateTraitAndroid.prototype.onIptTchMove_startMove = function (t, e) {
        this._traitData.tileDragStartEnabled && this.triggerVibrate(this._config.tileDragStart);
        e();
    };
    VibrateTraitAndroid.prototype.onClearBhv_collision = function (t, e) {
        this._traitData.tileClearEnabled && this.triggerVibrate(this._config.tileClear);
        e();
    };
    VibrateTraitAndroid.prototype.onBoxOpenUI_onOpenFin = function (t, e) {
        this._traitData.chestOpenEnabled && this.triggerVibrate(this._config.chestOpen);
        e();
    };
    VibrateTraitAndroid.prototype.triggerTravelCollectVibrate = function () {
        this._traitData.travelCollectEnabled && this.triggerVibrate(this._config.travelCollect);
    };
    VibrateTraitAndroid.prototype.triggerDailyChallengeCollectVibrate = function () {
        this._traitData.dailyChallengeCollectEnabled && this.triggerVibrate(this._config.dailyChallengeCollect);
    };
    VibrateTraitAndroid.prototype.onIptTchStart_Lock = function (t, e) {
        this._traitData.tileSelectFailEnabled && this.triggerVibrate(this._config.tileSelectFail);
        e();
    };
    VibrateTraitAndroid.traitKey = "VibrateAndroid";
    VibrateTraitAndroid = __decorate([
        mj.trait,
        mj.class("VibrateTraitAndroid")
    ], VibrateTraitAndroid);
    return VibrateTraitAndroid;
}(Trait_1.default));
exports.default = VibrateTraitAndroid;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3ZpYnJhdGUvU2NyaXB0cy9WaWJyYXRlVHJhaXRBbmRyb2lkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsd0ZBQXlHO0FBR3pHO0lBQWlELHVDQUFLO0lBQXREO1FBQUEscUVBaUVDO1FBaEVDLHVCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0lBZ0VoQyxDQUFDO0lBOURDLG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxnREFBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxJQUFJLGlDQUFnQixDQUFDLEtBQUs7WUFDbkUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsSUFBSSxpQ0FBZ0IsQ0FBQyxNQUFNO1lBQ3RGLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixJQUFJLGlDQUFnQixDQUFDLE1BQU07WUFDOUUsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLElBQUksaUNBQWdCLENBQUMsTUFBTTtZQUN0RSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsSUFBSSxpQ0FBZ0IsQ0FBQyxXQUFXO1lBQzNFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixJQUFJLGlDQUFnQixDQUFDLFdBQVc7WUFDbkYscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsSUFBSSxpQ0FBZ0IsQ0FBQyxXQUFXO1lBQ25HLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixJQUFJLGlDQUFnQixDQUFDLFFBQVE7U0FDbkYsQ0FBQztRQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsaUNBQWdCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsaUNBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsaUNBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsaUNBQWdCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsaUNBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO0lBQzlDLENBQUM7SUFDRCw0Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNkLHdCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELCtDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUUsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsaURBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUN6UixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxrREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRyxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxvREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEYsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsa0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELG1EQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx5REFBMkIsR0FBM0I7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0QsaUVBQW1DLEdBQW5DO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBQ0QsZ0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFGLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQTlETSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRmhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0FpRXZDO0lBQUQsMEJBQUM7Q0FqRUQsQUFpRUMsQ0FqRWdELGVBQUssR0FpRXJEO2tCQWpFb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBWaWJyYXRlTWFuYWdlciwgeyBFVmlicmF0ZVN0cmVuZ3RoIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3ZpYnJhdGUvVmlicmF0ZU1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJWaWJyYXRlVHJhaXRBbmRyb2lkXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWJyYXRlVHJhaXRBbmRyb2lkIGV4dGVuZHMgVHJhaXQge1xuICBfYW5kcm9pZENvbmZpZ01hcCA9IG5ldyBNYXAoKTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJWaWJyYXRlQW5kcm9pZFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0QW5kcm9pZENvbmZpZ3MoKTtcbiAgfVxuICBpbml0QW5kcm9pZENvbmZpZ3MoKSB7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgYnRuQ2xpY2s6IHRoaXMuX3RyYWl0RGF0YS5idG5DbGlja0FuZHJvaWQgfHwgRVZpYnJhdGVTdHJlbmd0aC5MaWdodCxcbiAgICAgIHRpbGVTZWxlY3RTdWNjZXNzOiB0aGlzLl90cmFpdERhdGEudGlsZVNlbGVjdFN1Y2Nlc3NBbmRyb2lkIHx8IEVWaWJyYXRlU3RyZW5ndGguTWVkaXVtLFxuICAgICAgdGlsZURyYWdTdGFydDogdGhpcy5fdHJhaXREYXRhLnRpbGVEcmFnU3RhcnRBbmRyb2lkIHx8IEVWaWJyYXRlU3RyZW5ndGguTWVkaXVtLFxuICAgICAgdGlsZUNsZWFyOiB0aGlzLl90cmFpdERhdGEudGlsZUNsZWFyQW5kcm9pZCB8fCBFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZyxcbiAgICAgIGNoZXN0T3BlbjogdGhpcy5fdHJhaXREYXRhLmNoZXN0T3BlbkFuZHJvaWQgfHwgRVZpYnJhdGVTdHJlbmd0aC5TdHJvbmdTaG9ydCxcbiAgICAgIHRyYXZlbENvbGxlY3Q6IHRoaXMuX3RyYWl0RGF0YS50cmF2ZWxDb2xsZWN0QW5kcm9pZCB8fCBFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZ1Nob3J0LFxuICAgICAgZGFpbHlDaGFsbGVuZ2VDb2xsZWN0OiB0aGlzLl90cmFpdERhdGEuZGFpbHlDaGFsbGVuZ2VDb2xsZWN0QW5kcm9pZCB8fCBFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZ1Nob3J0LFxuICAgICAgdGlsZVNlbGVjdEZhaWw6IHRoaXMuX3RyYWl0RGF0YS50aWxlU2VsZWN0RmFpbEFuZHJvaWQgfHwgRVZpYnJhdGVTdHJlbmd0aC5NdWx0aXBsZVxuICAgIH07XG4gICAgdGhpcy5fYW5kcm9pZENvbmZpZ01hcC5zZXQoRVZpYnJhdGVTdHJlbmd0aC5MaWdodCwgXCIxXCIpO1xuICAgIHRoaXMuX2FuZHJvaWRDb25maWdNYXAuc2V0KEVWaWJyYXRlU3RyZW5ndGguTWVkaXVtLCBcIjJcIik7XG4gICAgdGhpcy5fYW5kcm9pZENvbmZpZ01hcC5zZXQoRVZpYnJhdGVTdHJlbmd0aC5TdHJvbmcsIFwiM1wiKTtcbiAgICB0aGlzLl9hbmRyb2lkQ29uZmlnTWFwLnNldChFVmlicmF0ZVN0cmVuZ3RoLlN0cm9uZ1Nob3J0LCBcIjRcIik7XG4gICAgdGhpcy5fYW5kcm9pZENvbmZpZ01hcC5zZXQoRVZpYnJhdGVTdHJlbmd0aC5NdWx0aXBsZSwgXCI1XCIpO1xuICB9XG4gIGdldEFuZHJvaWRDb25maWcodCkge1xuICAgIHJldHVybiB0aGlzLl9hbmRyb2lkQ29uZmlnTWFwLmdldCh0KSB8fCBcIjFcIjtcbiAgfVxuICB0cmlnZ2VyVmlicmF0ZSh0KSB7XG4gICAgVmlicmF0ZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS50cmlnZ2VyVmlicmF0ZUJ5VHlwZSh0aGlzLmdldEFuZHJvaWRDb25maWcodCkpO1xuICB9XG4gIG9uQmFzZVVJX2J0bkNsaWNrKHQsIGUpIHtcbiAgICB0aGlzLl90cmFpdERhdGEuYnRuQ2xpY2tFbmFibGVkICYmIHRoaXMudHJpZ2dlclZpYnJhdGUodGhpcy5fY29uZmlnLmJ0bkNsaWNrKTtcbiAgICBlKCk7XG4gIH1cbiAgb25JcHRUY2hFbmRfU3VjY2Vzcyh0LCBlKSB7XG4gICAgdmFyIGksIHIsIGE7XG4gICAgdGhpcy5fdHJhaXREYXRhLnRpbGVTZWxlY3RTdWNjZXNzRW5hYmxlZCAmJiAoKG51bGwgPT09IChhID0gbnVsbCA9PT0gKHIgPSBudWxsID09PSAoaSA9IG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuYXJncykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaVswXSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5fZGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5pc0NhbmNlbCkgfHwgdGhpcy50cmlnZ2VyVmlicmF0ZSh0aGlzLl9jb25maWcudGlsZVNlbGVjdFN1Y2Nlc3MpKTtcbiAgICBlKCk7XG4gIH1cbiAgb25JcHRCYXNlX3B1c2hDbHJFZmYodCwgZSkge1xuICAgIHRoaXMuX3RyYWl0RGF0YS50aWxlU2VsZWN0U3VjY2Vzc0VuYWJsZWQgJiYgdGhpcy50cmlnZ2VyVmlicmF0ZSh0aGlzLl9jb25maWcudGlsZVNlbGVjdFN1Y2Nlc3MpO1xuICAgIGUoKTtcbiAgfVxuICBvbklwdFRjaE1vdmVfc3RhcnRNb3ZlKHQsIGUpIHtcbiAgICB0aGlzLl90cmFpdERhdGEudGlsZURyYWdTdGFydEVuYWJsZWQgJiYgdGhpcy50cmlnZ2VyVmlicmF0ZSh0aGlzLl9jb25maWcudGlsZURyYWdTdGFydCk7XG4gICAgZSgpO1xuICB9XG4gIG9uQ2xlYXJCaHZfY29sbGlzaW9uKHQsIGUpIHtcbiAgICB0aGlzLl90cmFpdERhdGEudGlsZUNsZWFyRW5hYmxlZCAmJiB0aGlzLnRyaWdnZXJWaWJyYXRlKHRoaXMuX2NvbmZpZy50aWxlQ2xlYXIpO1xuICAgIGUoKTtcbiAgfVxuICBvbkJveE9wZW5VSV9vbk9wZW5GaW4odCwgZSkge1xuICAgIHRoaXMuX3RyYWl0RGF0YS5jaGVzdE9wZW5FbmFibGVkICYmIHRoaXMudHJpZ2dlclZpYnJhdGUodGhpcy5fY29uZmlnLmNoZXN0T3Blbik7XG4gICAgZSgpO1xuICB9XG4gIHRyaWdnZXJUcmF2ZWxDb2xsZWN0VmlicmF0ZSgpIHtcbiAgICB0aGlzLl90cmFpdERhdGEudHJhdmVsQ29sbGVjdEVuYWJsZWQgJiYgdGhpcy50cmlnZ2VyVmlicmF0ZSh0aGlzLl9jb25maWcudHJhdmVsQ29sbGVjdCk7XG4gIH1cbiAgdHJpZ2dlckRhaWx5Q2hhbGxlbmdlQ29sbGVjdFZpYnJhdGUoKSB7XG4gICAgdGhpcy5fdHJhaXREYXRhLmRhaWx5Q2hhbGxlbmdlQ29sbGVjdEVuYWJsZWQgJiYgdGhpcy50cmlnZ2VyVmlicmF0ZSh0aGlzLl9jb25maWcuZGFpbHlDaGFsbGVuZ2VDb2xsZWN0KTtcbiAgfVxuICBvbklwdFRjaFN0YXJ0X0xvY2sodCwgZSkge1xuICAgIHRoaXMuX3RyYWl0RGF0YS50aWxlU2VsZWN0RmFpbEVuYWJsZWQgJiYgdGhpcy50cmlnZ2VyVmlicmF0ZSh0aGlzLl9jb25maWcudGlsZVNlbGVjdEZhaWwpO1xuICAgIGUoKTtcbiAgfVxufSJdfQ==