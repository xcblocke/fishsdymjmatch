
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_shuffleCharTile2/Scripts/ShuffleCharTile2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28f21lvslhFSJ1/MPy6TZf5', 'ShuffleCharTile2Trait');
// subpackages/l_shuffleCharTile2/Scripts/ShuffleCharTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HolderPriorityShuffler_1 = require("../../../Scripts/HolderPriorityShuffler");
var CharacterGenerator_1 = require("../../../Scripts/CharacterGenerator");
var CharacterGeneratorTile2_1 = require("../../../Scripts/helpers/CharacterGeneratorTile2");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var ShuffleCharTile2Trait = /** @class */ (function (_super) {
    __extends(ShuffleCharTile2Trait, _super);
    function ShuffleCharTile2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._coordSelectionType = CharacterGenerator_1.ECoordSelectionType.Random;
        _this._charSelectionType = CharacterGenerator_1.ECharSelectionType.Random;
        _this._holderPickMode = "eachOne";
        _this._includeBack = false;
        return _this;
    }
    ShuffleCharTile2Trait.prototype.onLoad = function () {
        var t, r, o, i;
        _super.prototype.onLoad.call(this);
        this._coordSelectionType = null !== (t = this._traitData.coordSelectionType) && void 0 !== t ? t : CharacterGenerator_1.ECoordSelectionType.Random;
        this._charSelectionType = null !== (r = this._traitData.charSelectionType) && void 0 !== r ? r : CharacterGenerator_1.ECharSelectionType.Random;
        this._holderPickMode = null !== (o = this._traitData.holderPickMode) && void 0 !== o ? o : "eachOne";
        this._includeBack = null !== (i = this._traitData.includeBack) && void 0 !== i && i;
    };
    ShuffleCharTile2Trait.prototype.onTile2ShuffleMod_compute = function (e, t) {
        var r, o, i = e.ins._context, n = i.getGameData(), c = i.getTileMapObject(), s = new Set(n.slotBarIds || []), p = [];
        c.tileObjectMap().forEach(function (e) {
            e.isValid && !s.has(e.saveKey()) && p.push(e);
        });
        if (p.length < 2)
            t();
        else {
            var f = new Map();
            try {
                for (var d = __values(p), y = d.next(); !y.done; y = d.next()) {
                    var _ = y.value;
                    f.has(_.cardId) || f.set(_.cardId, []);
                    f.get(_.cardId).push(_);
                }
            }
            catch (e) {
                r = {
                    error: e
                };
            }
            finally {
                try {
                    y && !y.done && (o = d.return) && o.call(d);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            var T = [];
            f.forEach(function (e, t) {
                for (var r = 0; r + 1 < e.length; r += 2)
                    T.push([{
                            resId: t,
                            type: TileTypeEnum_1.ETileType.Normal
                        }, {
                            resId: t,
                            type: TileTypeEnum_1.ETileType.Normal
                        }]);
            });
            if (0 !== T.length) {
                var v = CharacterGeneratorTile2_1.default.getInstance(), m = v.generateCharacterAssignment(i, p, T, this._coordSelectionType, this._charSelectionType);
                0 === m.length || v.applyAssignments(m, c);
                (n.slotBarIds || []).length > 0 && new HolderPriorityShuffler_1.HolderPriorityShuffler(i).apply({
                    holderPickMode: this._holderPickMode,
                    includeBack: this._includeBack
                });
                t({
                    isBreak: true,
                    returnType: TraitCallbackReturnType.return
                });
            }
            else
                t();
        }
    };
    ShuffleCharTile2Trait.traitKey = "ShuffleCharTile2";
    ShuffleCharTile2Trait = __decorate([
        mj.trait,
        mj.class("ShuffleCharTile2Trait")
    ], ShuffleCharTile2Trait);
    return ShuffleCharTile2Trait;
}(Trait_1.default));
exports.default = ShuffleCharTile2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NodWZmbGVDaGFyVGlsZTIvU2NyaXB0cy9TaHVmZmxlQ2hhclRpbGUyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxrRkFBaUY7QUFDakYsMEVBQThGO0FBQzlGLDRGQUF1RjtBQUN2RixpRkFBNkU7QUFHN0U7SUFBbUQseUNBQUs7SUFBeEQ7UUFBQSxxRUFxRUM7UUFwRUMseUJBQW1CLEdBQUcsd0NBQW1CLENBQUMsTUFBTSxDQUFDO1FBQ2pELHdCQUFrQixHQUFHLHVDQUFrQixDQUFDLE1BQU0sQ0FBQztRQUMvQyxxQkFBZSxHQUFHLFNBQVMsQ0FBQztRQUM1QixrQkFBWSxHQUFHLEtBQUssQ0FBQzs7SUFpRXZCLENBQUM7SUEvREMsc0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2YsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsd0NBQW1CLENBQUMsTUFBTSxDQUFDO1FBQzlILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1Q0FBa0IsQ0FBQyxNQUFNLENBQUM7UUFDM0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FB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WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNsQixJQUFJLENBQUMsR0FBRyxpQ0FBdUIsQ0FBQyxXQUFXLEVBQUUsRUFDM0MsQ0FBQyxHQUFHLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2hHLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksK0NBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNyRSxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWU7b0JBQ3BDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWTtpQkFDL0IsQ0FBQyxDQUFDO2dCQUNILENBQUMsQ0FBQztvQkFDQSxPQUFPLEVBQUUsSUFBSTtvQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDM0MsQ0FBQyxDQUFDO2FBQ0o7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7SUFDSCxDQUFDO0lBL0RNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFMbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQXFFekM7SUFBRCw0QkFBQztDQXJFRCxBQXFFQyxDQXJFa0QsZUFBSyxHQXFFdkQ7a0JBckVvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgSG9sZGVyUHJpb3JpdHlTaHVmZmxlciB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvSG9sZGVyUHJpb3JpdHlTaHVmZmxlcic7XG5pbXBvcnQgeyBFQ29vcmRTZWxlY3Rpb25UeXBlLCBFQ2hhclNlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0NoYXJhY3RlckdlbmVyYXRvcic7XG5pbXBvcnQgQ2hhcmFjdGVyR2VuZXJhdG9yVGlsZTIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9oZWxwZXJzL0NoYXJhY3RlckdlbmVyYXRvclRpbGUyJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlNodWZmbGVDaGFyVGlsZTJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2h1ZmZsZUNoYXJUaWxlMlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY29vcmRTZWxlY3Rpb25UeXBlID0gRUNvb3JkU2VsZWN0aW9uVHlwZS5SYW5kb207XG4gIF9jaGFyU2VsZWN0aW9uVHlwZSA9IEVDaGFyU2VsZWN0aW9uVHlwZS5SYW5kb207XG4gIF9ob2xkZXJQaWNrTW9kZSA9IFwiZWFjaE9uZVwiO1xuICBfaW5jbHVkZUJhY2sgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTaHVmZmxlQ2hhclRpbGUyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgdCwgciwgbywgaTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb29yZFNlbGVjdGlvblR5cGUgPSBudWxsICE9PSAodCA9IHRoaXMuX3RyYWl0RGF0YS5jb29yZFNlbGVjdGlvblR5cGUpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiBFQ29vcmRTZWxlY3Rpb25UeXBlLlJhbmRvbTtcbiAgICB0aGlzLl9jaGFyU2VsZWN0aW9uVHlwZSA9IG51bGwgIT09IChyID0gdGhpcy5fdHJhaXREYXRhLmNoYXJTZWxlY3Rpb25UeXBlKSAmJiB2b2lkIDAgIT09IHIgPyByIDogRUNoYXJTZWxlY3Rpb25UeXBlLlJhbmRvbTtcbiAgICB0aGlzLl9ob2xkZXJQaWNrTW9kZSA9IG51bGwgIT09IChvID0gdGhpcy5fdHJhaXREYXRhLmhvbGRlclBpY2tNb2RlKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogXCJlYWNoT25lXCI7XG4gICAgdGhpcy5faW5jbHVkZUJhY2sgPSBudWxsICE9PSAoaSA9IHRoaXMuX3RyYWl0RGF0YS5pbmNsdWRlQmFjaykgJiYgdm9pZCAwICE9PSBpICYmIGk7XG4gIH1cbiAgb25UaWxlMlNodWZmbGVNb2RfY29tcHV0ZShlLCB0KSB7XG4gICAgdmFyIHIsXG4gICAgICBvLFxuICAgICAgaSA9IGUuaW5zLl9jb250ZXh0LFxuICAgICAgbiA9IGkuZ2V0R2FtZURhdGEoKSxcbiAgICAgIGMgPSBpLmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIHMgPSBuZXcgU2V0KG4uc2xvdEJhcklkcyB8fCBbXSksXG4gICAgICBwID0gW107XG4gICAgYy50aWxlT2JqZWN0TWFwKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZS5pc1ZhbGlkICYmICFzLmhhcyhlLnNhdmVLZXkoKSkgJiYgcC5wdXNoKGUpO1xuICAgIH0pO1xuICAgIGlmIChwLmxlbmd0aCA8IDIpIHQoKTtlbHNlIHtcbiAgICAgIHZhciBmID0gbmV3IE1hcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgZCA9IF9fdmFsdWVzKHApLCB5ID0gZC5uZXh0KCk7ICF5LmRvbmU7IHkgPSBkLm5leHQoKSkge1xuICAgICAgICAgIHZhciBfID0geS52YWx1ZTtcbiAgICAgICAgICBmLmhhcyhfLmNhcmRJZCkgfHwgZi5zZXQoXy5jYXJkSWQsIFtdKTtcbiAgICAgICAgICBmLmdldChfLmNhcmRJZCkucHVzaChfKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByID0ge1xuICAgICAgICAgIGVycm9yOiBlXG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHkgJiYgIXkuZG9uZSAmJiAobyA9IGQucmV0dXJuKSAmJiBvLmNhbGwoZCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBUID0gW107XG4gICAgICBmLmZvckVhY2goZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgKyAxIDwgZS5sZW5ndGg7IHIgKz0gMikgVC5wdXNoKFt7XG4gICAgICAgICAgcmVzSWQ6IHQsXG4gICAgICAgICAgdHlwZTogRVRpbGVUeXBlLk5vcm1hbFxuICAgICAgICB9LCB7XG4gICAgICAgICAgcmVzSWQ6IHQsXG4gICAgICAgICAgdHlwZTogRVRpbGVUeXBlLk5vcm1hbFxuICAgICAgICB9XSk7XG4gICAgICB9KTtcbiAgICAgIGlmICgwICE9PSBULmxlbmd0aCkge1xuICAgICAgICB2YXIgdiA9IENoYXJhY3RlckdlbmVyYXRvclRpbGUyLmdldEluc3RhbmNlKCksXG4gICAgICAgICAgbSA9IHYuZ2VuZXJhdGVDaGFyYWN0ZXJBc3NpZ25tZW50KGksIHAsIFQsIHRoaXMuX2Nvb3JkU2VsZWN0aW9uVHlwZSwgdGhpcy5fY2hhclNlbGVjdGlvblR5cGUpO1xuICAgICAgICAwID09PSBtLmxlbmd0aCB8fCB2LmFwcGx5QXNzaWdubWVudHMobSwgYyk7XG4gICAgICAgIChuLnNsb3RCYXJJZHMgfHwgW10pLmxlbmd0aCA+IDAgJiYgbmV3IEhvbGRlclByaW9yaXR5U2h1ZmZsZXIoaSkuYXBwbHkoe1xuICAgICAgICAgIGhvbGRlclBpY2tNb2RlOiB0aGlzLl9ob2xkZXJQaWNrTW9kZSxcbiAgICAgICAgICBpbmNsdWRlQmFjazogdGhpcy5faW5jbHVkZUJhY2tcbiAgICAgICAgfSk7XG4gICAgICAgIHQoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9XG4gIH1cbn0iXX0=