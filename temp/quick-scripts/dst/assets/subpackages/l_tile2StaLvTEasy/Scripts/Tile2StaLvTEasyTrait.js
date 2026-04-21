
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2StaLvTEasy/Scripts/Tile2StaLvTEasyTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbf15Jmg29A+ot+fA9A42Bv', 'Tile2StaLvTEasyTrait');
// subpackages/l_tile2StaLvTEasy/Scripts/Tile2StaLvTEasyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2StaLvTEasyTrait = /** @class */ (function (_super) {
    __extends(Tile2StaLvTEasyTrait, _super);
    function Tile2StaLvTEasyTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2StaLvTEasyTrait.prototype.isSupportMode = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2StaLvTEasyTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._fileName = this._traitData.fileName || "";
    };
    Tile2StaLvTEasyTrait.prototype.onT2StaLvT_easyFile = function (t, e) {
        if (this.checkGameMode() && this._fileName) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._fileName
            });
        }
        else {
            e();
        }
    };
    Tile2StaLvTEasyTrait.traitKey = "Tile2StaLvTEasy";
    Tile2StaLvTEasyTrait = __decorate([
        mj.trait,
        mj.class("Tile2StaLvTEasyTrait")
    ], Tile2StaLvTEasyTrait);
    return Tile2StaLvTEasyTrait;
}(ExtractTrait_1.default));
exports.default = Tile2StaLvTEasyTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyU3RhTHZURWFzeS9TY3JpcHRzL1RpbGUyU3RhTHZURWFzeVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsd0ZBQW9GO0FBQ3BGLDhFQUF3RjtBQUd4RjtJQUFrRCx3Q0FBWTtJQUE5RDs7SUFvQkEsQ0FBQztJQWxCQyw0Q0FBYSxHQUFiLFVBQWMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxLQUFLLDBCQUFVLENBQUMsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUMsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDMUIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBbEJNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQW9CeEM7SUFBRCwyQkFBQztDQXBCRCxBQW9CQyxDQXBCaUQsc0JBQVksR0FvQjdEO2tCQXBCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJTdGFMdlRFYXN5VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyU3RhTHZURWFzeVRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMlN0YUx2VEVhc3lcIjtcbiAgaXNTdXBwb3J0TW9kZSh0KSB7XG4gICAgcmV0dXJuIHQgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2ZpbGVOYW1lID0gdGhpcy5fdHJhaXREYXRhLmZpbGVOYW1lIHx8IFwiXCI7XG4gIH1cbiAgb25UMlN0YUx2VF9lYXN5RmlsZSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpICYmIHRoaXMuX2ZpbGVOYW1lKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHRoaXMuX2ZpbGVOYW1lXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==