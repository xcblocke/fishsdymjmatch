
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2LevelType/Scripts/Tile2LevelTypeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b626dCqrk1HHLFQIQXnPFnR', 'Tile2LevelTypeTrait');
// subpackages/l_tile2LevelType/Scripts/Tile2LevelTypeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var a;
(function (a) {
    a[a["None"] = 0] = "None";
    a[a["Normal"] = 1] = "Normal";
    a[a["Medium"] = 2] = "Medium";
    a[a["Hard"] = 3] = "Hard";
    a[a["Expert"] = 4] = "Expert";
})(a || (a = {}));
var Tile2LevelTypeTrait = /** @class */ (function (_super) {
    __extends(Tile2LevelTypeTrait, _super);
    function Tile2LevelTypeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2LevelTypeTrait.prototype.isSupportMode = function (e) {
        return e === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2LevelTypeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            levelTypePattern: this._traitData.levelTypePattern || []
        };
    };
    Tile2LevelTypeTrait.prototype.getLevelType = function (e) {
        var t = this._config.levelTypePattern;
        return t && 0 !== t.length && t[(e - 1) % t.length] || a.Normal;
    };
    Tile2LevelTypeTrait.prototype.onExtractTool_isHardUI = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], o = this.getLevelType(r) == a.Hard;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            t();
    };
    Tile2LevelTypeTrait.prototype.onExtractTool_isExpertUI = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], o = this.getLevelType(r) == a.Expert;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            t();
    };
    Tile2LevelTypeTrait.prototype.onT2HarStr_isHard = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], o = this.getLevelType(r), n = o == a.Hard || o == a.Expert;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            t();
    };
    Tile2LevelTypeTrait.prototype.onExtractTool_getLvType = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], o = this.getLevelType(r);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: o
            });
        }
        else
            t();
    };
    Tile2LevelTypeTrait.traitKey = "Tile2LevelType";
    Tile2LevelTypeTrait = __decorate([
        mj.trait,
        mj.class("Tile2LevelTypeTrait")
    ], Tile2LevelTypeTrait);
    return Tile2LevelTypeTrait;
}(ExtractTrait_1.default));
exports.default = Tile2LevelTypeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyTGV2ZWxUeXBlL1NjcmlwdHMvVGlsZTJMZXZlbFR5cGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELHdGQUFvRjtBQUNwRiw4RUFBd0Y7QUFDeEYsSUFBSyxDQU1KO0FBTkQsV0FBSyxDQUFDO0lBQ0oseUJBQVEsQ0FBQTtJQUNSLDZCQUFVLENBQUE7SUFDViw2QkFBVSxDQUFBO0lBQ1YseUJBQVEsQ0FBQTtJQUNSLDZCQUFVLENBQUE7QUFDWixDQUFDLEVBTkksQ0FBQyxLQUFELENBQUMsUUFNTDtBQUdEO0lBQWlELHVDQUFZO0lBQTdEOztJQTREQSxDQUFDO0lBMURDLDJDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsT0FBTyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUNELG9DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixJQUFJLEVBQUU7U0FDekQsQ0FBQztJQUNKLENBQUM7SUFDRCwwQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2xFLENBQUM7SUFDRCxvREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JDLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxzREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwrQ0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ25DLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxxREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBMURNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFEaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQTREdkM7SUFBRCwwQkFBQztDQTVERCxBQTREQyxDQTVEZ0Qsc0JBQVksR0E0RDVEO2tCQTVEb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmVudW0gYSB7XG4gIE5vbmUgPSAwLFxuICBOb3JtYWwgPSAxLFxuICBNZWRpdW0gPSAyLFxuICBIYXJkID0gMyxcbiAgRXhwZXJ0ID0gNCxcbn1cbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJMZXZlbFR5cGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJMZXZlbFR5cGVUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVGlsZTJMZXZlbFR5cGVcIjtcbiAgaXNTdXBwb3J0TW9kZShlKSB7XG4gICAgcmV0dXJuIGUgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGxldmVsVHlwZVBhdHRlcm46IHRoaXMuX3RyYWl0RGF0YS5sZXZlbFR5cGVQYXR0ZXJuIHx8IFtdXG4gICAgfTtcbiAgfVxuICBnZXRMZXZlbFR5cGUoZSkge1xuICAgIHZhciB0ID0gdGhpcy5fY29uZmlnLmxldmVsVHlwZVBhdHRlcm47XG4gICAgcmV0dXJuIHQgJiYgMCAhPT0gdC5sZW5ndGggJiYgdFsoZSAtIDEpICUgdC5sZW5ndGhdIHx8IGEuTm9ybWFsO1xuICB9XG4gIG9uRXh0cmFjdFRvb2xfaXNIYXJkVUkoZSwgdCkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSBlLmFyZ3NbMF0sXG4gICAgICAgIG8gPSB0aGlzLmdldExldmVsVHlwZShyKSA9PSBhLkhhcmQ7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IG9cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9pc0V4cGVydFVJKGUsIHQpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gZS5hcmdzWzBdLFxuICAgICAgICBvID0gdGhpcy5nZXRMZXZlbFR5cGUocikgPT0gYS5FeHBlcnQ7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IG9cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25UMkhhclN0cl9pc0hhcmQoZSwgdCkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSBlLmFyZ3NbMF0sXG4gICAgICAgIG8gPSB0aGlzLmdldExldmVsVHlwZShyKSxcbiAgICAgICAgbiA9IG8gPT0gYS5IYXJkIHx8IG8gPT0gYS5FeHBlcnQ7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IG5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9nZXRMdlR5cGUoZSwgdCkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSBlLmFyZ3NbMF0sXG4gICAgICAgIG8gPSB0aGlzLmdldExldmVsVHlwZShyKTtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogb1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxufSJdfQ==