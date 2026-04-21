
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_charGenerator/Scripts/CharGenShuffleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ea6d+shIpADpST29+D13Fw', 'CharGenShuffleTrait');
// subpackages/l_charGenerator/Scripts/CharGenShuffleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CharacterGenerator_1 = require("../../../Scripts/CharacterGenerator");
var CharGenShuffleTrait = /** @class */ (function (_super) {
    __extends(CharGenShuffleTrait, _super);
    function CharGenShuffleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._coordSelectionType = CharacterGenerator_1.ECoordSelectionType.Random;
        _this._charSelectionType = CharacterGenerator_1.ECharSelectionType.Random;
        return _this;
    }
    CharGenShuffleTrait.prototype.onLoad = function () {
        var t, r;
        _super.prototype.onLoad.call(this);
        this._coordSelectionType = null !== (t = this._traitData.coordSelectionType) && void 0 !== t ? t : CharacterGenerator_1.ECoordSelectionType.Random;
        this._charSelectionType = null !== (r = this._traitData.charSelectionType) && void 0 !== r ? r : CharacterGenerator_1.ECharSelectionType.Random;
    };
    CharGenShuffleTrait.prototype.getGMSetting = function () {
        try {
            var e = cc.sys.localStorage.getItem("__gmCharGenAlgo__");
            if (e)
                return JSON.parse(e);
        }
        catch (e) { }
        return null;
    };
    CharGenShuffleTrait.prototype.onShuffleMod_assignResIds = function (e, t) {
        var r = e.args[0], o = e.args[1], n = e.ins._context, i = (CharacterGenerator_1.COORD_ALGO_NAMES[this._coordSelectionType], CharacterGenerator_1.CHAR_ALGO_NAMES[this._charSelectionType], CharacterGenerator_1.default.getInstance());
        if (i) {
            var a = i.generateCharacterAssignment(n, r, o, this._coordSelectionType, this._charSelectionType);
            i.applyAssignments(a, n.getTileMapObject());
            t({
                isBreak: true,
                returnType: TraitCallbackReturnType.return
            });
        }
        else
            t();
    };
    CharGenShuffleTrait.traitKey = "CharGenShuffle";
    CharGenShuffleTrait = __decorate([
        mj.trait,
        mj.class("CharGenShuffleTrait")
    ], CharGenShuffleTrait);
    return CharGenShuffleTrait;
}(Trait_1.default));
exports.default = CharGenShuffleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYXJHZW5lcmF0b3IvU2NyaXB0cy9DaGFyR2VuU2h1ZmZsZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsMEVBQXFKO0FBR3JKO0lBQWlELHVDQUFLO0lBQXREO1FBQUEscUVBK0JDO1FBOUJDLHlCQUFtQixHQUFHLHdDQUFtQixDQUFDLE1BQU0sQ0FBQztRQUNqRCx3QkFBa0IsR0FBRyx1Q0FBa0IsQ0FBQyxNQUFNLENBQUM7O0lBNkJqRCxDQUFDO0lBM0JDLG9DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx3Q0FBbUIsQ0FBQyxNQUFNLENBQUM7UUFDOUgsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVDQUFrQixDQUFDLE1BQU0sQ0FBQztJQUM3SCxDQUFDO0lBQ0QsMENBQVksR0FBWjtRQUNFLElBQUk7WUFDRixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtRQUNkLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELHVEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFDbEIsQ0FBQyxHQUFHLENBQUMscUNBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsb0NBQWUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSw0QkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9ILElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNsRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTNCTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBSGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0ErQnZDO0lBQUQsMEJBQUM7Q0EvQkQsQUErQkMsQ0EvQmdELGVBQUssR0ErQnJEO2tCQS9Cb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBDaGFyYWN0ZXJHZW5lcmF0b3IsIHsgRUNvb3JkU2VsZWN0aW9uVHlwZSwgRUNoYXJTZWxlY3Rpb25UeXBlLCBDT09SRF9BTEdPX05BTUVTLCBDSEFSX0FMR09fTkFNRVMgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0NoYXJhY3RlckdlbmVyYXRvcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYXJHZW5TaHVmZmxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJHZW5TaHVmZmxlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jb29yZFNlbGVjdGlvblR5cGUgPSBFQ29vcmRTZWxlY3Rpb25UeXBlLlJhbmRvbTtcbiAgX2NoYXJTZWxlY3Rpb25UeXBlID0gRUNoYXJTZWxlY3Rpb25UeXBlLlJhbmRvbTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDaGFyR2VuU2h1ZmZsZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29vcmRTZWxlY3Rpb25UeXBlID0gbnVsbCAhPT0gKHQgPSB0aGlzLl90cmFpdERhdGEuY29vcmRTZWxlY3Rpb25UeXBlKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogRUNvb3JkU2VsZWN0aW9uVHlwZS5SYW5kb207XG4gICAgdGhpcy5fY2hhclNlbGVjdGlvblR5cGUgPSBudWxsICE9PSAociA9IHRoaXMuX3RyYWl0RGF0YS5jaGFyU2VsZWN0aW9uVHlwZSkgJiYgdm9pZCAwICE9PSByID8gciA6IEVDaGFyU2VsZWN0aW9uVHlwZS5SYW5kb207XG4gIH1cbiAgZ2V0R01TZXR0aW5nKCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl9fZ21DaGFyR2VuQWxnb19fXCIpO1xuICAgICAgaWYgKGUpIHJldHVybiBKU09OLnBhcnNlKGUpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgb25TaHVmZmxlTW9kX2Fzc2lnblJlc0lkcyhlLCB0KSB7XG4gICAgdmFyIHIgPSBlLmFyZ3NbMF0sXG4gICAgICBvID0gZS5hcmdzWzFdLFxuICAgICAgbiA9IGUuaW5zLl9jb250ZXh0LFxuICAgICAgaSA9IChDT09SRF9BTEdPX05BTUVTW3RoaXMuX2Nvb3JkU2VsZWN0aW9uVHlwZV0sIENIQVJfQUxHT19OQU1FU1t0aGlzLl9jaGFyU2VsZWN0aW9uVHlwZV0sIENoYXJhY3RlckdlbmVyYXRvci5nZXRJbnN0YW5jZSgpKTtcbiAgICBpZiAoaSkge1xuICAgICAgdmFyIGEgPSBpLmdlbmVyYXRlQ2hhcmFjdGVyQXNzaWdubWVudChuLCByLCBvLCB0aGlzLl9jb29yZFNlbGVjdGlvblR5cGUsIHRoaXMuX2NoYXJTZWxlY3Rpb25UeXBlKTtcbiAgICAgIGkuYXBwbHlBc3NpZ25tZW50cyhhLCBuLmdldFRpbGVNYXBPYmplY3QoKSk7XG4gICAgICB0KHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19