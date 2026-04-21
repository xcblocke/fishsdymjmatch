
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rollCard/Scripts/RollCardVisTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca0e42MQBNFIoKrq5xxHOPm', 'RollCardVisTrait');
// subpackages/l_rollCard/Scripts/RollCardVisTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var RollCardVisTrait = /** @class */ (function (_super) {
    __extends(RollCardVisTrait, _super);
    function RollCardVisTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._minLayer = -1;
        return _this;
    }
    RollCardVisTrait.prototype.onLoad = function () {
        var t, r;
        _super.prototype.onLoad.call(this);
        this._minLayer = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.minLayer) && void 0 !== r ? r : -1;
    };
    RollCardVisTrait.prototype.onRollCardType_modify = function (e, t) {
        var r, o;
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var i = e.args[0];
            if (i) {
                var n = i.getTileMapObject();
                try {
                    for (var c = __values(n.aliveTiles()), p = c.next(); !p.done; p = c.next()) {
                        var f = p.value;
                        f.layer >= this._minLayer && n.isHasVisible(f, true) === TileTypeEnum_1.ETileVisible.None && n.setTileType(f.id, TileTypeEnum_1.ETileType.RollCard);
                    }
                }
                catch (e) {
                    r = {
                        error: e
                    };
                }
                finally {
                    try {
                        p && !p.done && (o = c.return) && o.call(c);
                    }
                    finally {
                        if (r)
                            throw r.error;
                    }
                }
                t({
                    returnType: TraitCallbackReturnType.return,
                    isBreak: true
                });
            }
            else
                t();
        }
        else
            t();
    };
    RollCardVisTrait.traitKey = "RollCardVis";
    RollCardVisTrait = __decorate([
        mj.trait,
        mj.class("RollCardVisTrait")
    ], RollCardVisTrait);
    return RollCardVisTrait;
}(Trait_1.default));
exports.default = RollCardVisTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JvbGxDYXJkL1NjcmlwdHMvUm9sbENhcmRWaXNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGlGQUEyRjtBQUMzRixnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBR2pFO0lBQThDLG9DQUFLO0lBQW5EO1FBQUEscUVBcUNDO1FBcENDLGVBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFvQ2pCLENBQUM7SUFsQ0MsaUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hJLENBQUM7SUFDRCxnREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxXQUFXLEVBQUU7WUFDM0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDN0IsSUFBSTtvQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUMxRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNoQixDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssMkJBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLHdCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3ZIO2lCQUNGO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLENBQUMsR0FBRzt3QkFDRixLQUFLLEVBQUUsQ0FBQztxQkFDVCxDQUFDO2lCQUNIO3dCQUFTO29CQUNSLElBQUk7d0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDN0M7NEJBQVM7d0JBQ1IsSUFBSSxDQUFDOzRCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztxQkFDdEI7aUJBQ0Y7Z0JBQ0QsQ0FBQyxDQUFDO29CQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMxQyxPQUFPLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQUM7YUFDSjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFsQ00seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFGYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBcUNwQztJQUFELHVCQUFDO0NBckNELEFBcUNDLENBckM2QyxlQUFLLEdBcUNsRDtrQkFyQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVWaXNpYmxlLCBFVGlsZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJvbGxDYXJkVmlzVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvbGxDYXJkVmlzVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9taW5MYXllciA9IC0xO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJvbGxDYXJkVmlzXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdCwgcjtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9taW5MYXllciA9IG51bGwgIT09IChyID0gbnVsbCA9PT0gKHQgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQubWluTGF5ZXIpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAtMTtcbiAgfVxuICBvblJvbGxDYXJkVHlwZV9tb2RpZnkoZSwgdCkge1xuICAgIHZhciByLCBvO1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgdmFyIGkgPSBlLmFyZ3NbMF07XG4gICAgICBpZiAoaSkge1xuICAgICAgICB2YXIgbiA9IGkuZ2V0VGlsZU1hcE9iamVjdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZvciAodmFyIGMgPSBfX3ZhbHVlcyhuLmFsaXZlVGlsZXMoKSksIHAgPSBjLm5leHQoKTsgIXAuZG9uZTsgcCA9IGMubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgZiA9IHAudmFsdWU7XG4gICAgICAgICAgICBmLmxheWVyID49IHRoaXMuX21pbkxheWVyICYmIG4uaXNIYXNWaXNpYmxlKGYsIHRydWUpID09PSBFVGlsZVZpc2libGUuTm9uZSAmJiBuLnNldFRpbGVUeXBlKGYuaWQsIEVUaWxlVHlwZS5Sb2xsQ2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgciA9IHtcbiAgICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcCAmJiAhcC5kb25lICYmIChvID0gYy5yZXR1cm4pICYmIG8uY2FsbChjKTtcbiAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHQoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19