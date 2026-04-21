
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2StaticLevel/Scripts/Tile2StaticTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a714htet5FrYMCkOXOgQO5', 'Tile2StaticTrait');
// subpackages/l_tile2StaticLevel/Scripts/Tile2StaticTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2StaticTrait = /** @class */ (function (_super) {
    __extends(Tile2StaticTrait, _super);
    function Tile2StaticTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2StaticTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._priority = null !== (r = this._traitData.priority) && void 0 !== r ? r : 20;
        var e = this._traitData.libName || "tile2_static1";
        this._dataPath = "tile2LevelData/static/" + e;
        this._bundleName = this._traitData.bundleName || "mainRes";
    };
    Tile2StaticTrait.prototype.onT2StaStr_priority = function (t, r) {
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: this._priority
        });
    };
    Tile2StaticTrait.prototype.onT2StaStr_dataPath = function (t, r) {
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: [this._dataPath, this._bundleName]
        });
    };
    Tile2StaticTrait.traitKey = "Tile2Static";
    Tile2StaticTrait = __decorate([
        mj.trait,
        mj.class("Tile2StaticTrait")
    ], Tile2StaticTrait);
    return Tile2StaticTrait;
}(Trait_1.default));
exports.default = Tile2StaticTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyU3RhdGljTGV2ZWwvU2NyaXB0cy9UaWxlMlN0YXRpY1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQThDLG9DQUFLO0lBQW5EOztJQXdCQSxDQUFDO0lBdEJDLGlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xGLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLGVBQWUsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLHdCQUF3QixHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsOENBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1lBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw4Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsT0FBTyxFQUFFLElBQUk7WUFDYixTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDOUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXRCTSx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQURiLGdCQUFnQjtRQUZwQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7T0FDUixnQkFBZ0IsQ0F3QnBDO0lBQUQsdUJBQUM7Q0F4QkQsQUF3QkMsQ0F4QjZDLGVBQUssR0F3QmxEO2tCQXhCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJTdGF0aWNUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJTdGF0aWNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMlN0YXRpY1wiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBudWxsICE9PSAociA9IHRoaXMuX3RyYWl0RGF0YS5wcmlvcml0eSkgJiYgdm9pZCAwICE9PSByID8gciA6IDIwO1xuICAgIHZhciBlID0gdGhpcy5fdHJhaXREYXRhLmxpYk5hbWUgfHwgXCJ0aWxlMl9zdGF0aWMxXCI7XG4gICAgdGhpcy5fZGF0YVBhdGggPSBcInRpbGUyTGV2ZWxEYXRhL3N0YXRpYy9cIiArIGU7XG4gICAgdGhpcy5fYnVuZGxlTmFtZSA9IHRoaXMuX3RyYWl0RGF0YS5idW5kbGVOYW1lIHx8IFwibWFpblJlc1wiO1xuICB9XG4gIG9uVDJTdGFTdHJfcHJpb3JpdHkodCwgcikge1xuICAgIHIoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblZhbDogdGhpcy5fcHJpb3JpdHlcbiAgICB9KTtcbiAgfVxuICBvblQyU3RhU3RyX2RhdGFQYXRoKHQsIHIpIHtcbiAgICByKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IFt0aGlzLl9kYXRhUGF0aCwgdGhpcy5fYnVuZGxlTmFtZV1cbiAgICB9KTtcbiAgfVxufSJdfQ==