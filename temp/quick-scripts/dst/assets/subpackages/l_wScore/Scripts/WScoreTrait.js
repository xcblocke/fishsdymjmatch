
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_wScore/Scripts/WScoreTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '86cd7Eny/VLp6ZqV2eB3mku', 'WScoreTrait');
// subpackages/l_wScore/Scripts/WScoreTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var WScoreTrait = /** @class */ (function (_super) {
    __extends(WScoreTrait, _super);
    function WScoreTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WScoreTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var r = this._traitData.timeRate;
        this._config = {
            timeRate: Array.isArray(r) && r.length >= 2 ? [r[0], r[1]] : [0.5, 2],
            wRate: void 0 !== this._traitData.wRate ? this._traitData.wRate : 1
        };
    };
    WScoreTrait.prototype.onScoreMod_setlmTmRt = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: {
                minRatio: this._config.timeRate[0],
                maxRatio: this._config.timeRate[1]
            }
        });
    };
    WScoreTrait.prototype.onScoreMod_setlmWRt = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.wRate
        });
    };
    WScoreTrait.traitKey = "WScore";
    WScoreTrait = __decorate([
        mj.trait,
        mj.class("WScoreTrait")
    ], WScoreTrait);
    return WScoreTrait;
}(Trait_1.default));
exports.default = WScoreTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dTY29yZS9TY3JpcHRzL1dTY29yZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQXlDLCtCQUFLO0lBQTlDOztJQTJCQSxDQUFDO0lBekJDLDRCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNyRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFLENBQUM7SUFDSixDQUFDO0lBQ0QsMENBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFO2dCQUNULFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbkM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QseUNBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBekJNLG9CQUFRLEdBQUcsUUFBUSxDQUFDO0lBRFIsV0FBVztRQUYvQixFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO09BQ0gsV0FBVyxDQTJCL0I7SUFBRCxrQkFBQztDQTNCRCxBQTJCQyxDQTNCd0MsZUFBSyxHQTJCN0M7a0JBM0JvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiV1Njb3JlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdTY29yZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIldTY29yZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIHIgPSB0aGlzLl90cmFpdERhdGEudGltZVJhdGU7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgdGltZVJhdGU6IEFycmF5LmlzQXJyYXkocikgJiYgci5sZW5ndGggPj0gMiA/IFtyWzBdLCByWzFdXSA6IFswLjUsIDJdLFxuICAgICAgd1JhdGU6IHZvaWQgMCAhPT0gdGhpcy5fdHJhaXREYXRhLndSYXRlID8gdGhpcy5fdHJhaXREYXRhLndSYXRlIDogMVxuICAgIH07XG4gIH1cbiAgb25TY29yZU1vZF9zZXRsbVRtUnQodCwgcikge1xuICAgIHIoe1xuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIHJldHVyblZhbDoge1xuICAgICAgICBtaW5SYXRpbzogdGhpcy5fY29uZmlnLnRpbWVSYXRlWzBdLFxuICAgICAgICBtYXhSYXRpbzogdGhpcy5fY29uZmlnLnRpbWVSYXRlWzFdXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgb25TY29yZU1vZF9zZXRsbVdSdCh0LCByKSB7XG4gICAgcih7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl9jb25maWcud1JhdGVcbiAgICB9KTtcbiAgfVxufSJdfQ==