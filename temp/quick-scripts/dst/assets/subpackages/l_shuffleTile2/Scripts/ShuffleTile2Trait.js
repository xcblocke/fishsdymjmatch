
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_shuffleTile2/Scripts/ShuffleTile2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2868c8Lu9tHL4zkeK2EdUFp', 'ShuffleTile2Trait');
// subpackages/l_shuffleTile2/Scripts/ShuffleTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var HolderPriorityShuffler_1 = require("../../../Scripts/HolderPriorityShuffler");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ShuffleTile2Trait = /** @class */ (function (_super) {
    __extends(ShuffleTile2Trait, _super);
    function ShuffleTile2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._options = {
            holderPickMode: "all",
            includeBack: false
        };
        return _this;
    }
    Object.defineProperty(ShuffleTile2Trait.prototype, "_cfg", {
        get: function () {
            var t;
            return null !== (t = this._traitData) && void 0 !== t ? t : {};
        },
        enumerable: false,
        configurable: true
    });
    ShuffleTile2Trait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._options = {
            holderPickMode: null !== (e = this._cfg.holderPickMode) && void 0 !== e ? e : "all",
            includeBack: null !== (r = this._cfg.includeBack) && void 0 !== r && r
        };
    };
    ShuffleTile2Trait.prototype.onTile2ShuffleMod_compute = function (t, e) {
        var r = t.ins;
        new HolderPriorityShuffler_1.HolderPriorityShuffler(r._context).apply(this._options);
        e();
    };
    ShuffleTile2Trait.traitKey = "ShuffleTile2";
    ShuffleTile2Trait = __decorate([
        mj.trait,
        mj.class("ShuffleTile2Trait")
    ], ShuffleTile2Trait);
    return ShuffleTile2Trait;
}(Trait_1.default));
exports.default = ShuffleTile2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NodWZmbGVUaWxlMi9TY3JpcHRzL1NodWZmbGVUaWxlMlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRkFBaUY7QUFDakYsZ0VBQTJEO0FBRzNEO0lBQStDLHFDQUFLO0lBQXBEO1FBQUEscUVBdUJDO1FBdEJDLGNBQVEsR0FBRztZQUNULGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUM7O0lBbUJKLENBQUM7SUFqQkMsc0JBQUksbUNBQUk7YUFBUjtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakUsQ0FBQzs7O09BQUE7SUFDRCxrQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsY0FBYyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ25GLFdBQVcsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztTQUN2RSxDQUFDO0lBQ0osQ0FBQztJQUNELHFEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSwrQ0FBc0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFqQk0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFMZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBdUJyQztJQUFELHdCQUFDO0NBdkJELEFBdUJDLENBdkI4QyxlQUFLLEdBdUJuRDtrQkF2Qm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbGRlclByaW9yaXR5U2h1ZmZsZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0hvbGRlclByaW9yaXR5U2h1ZmZsZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2h1ZmZsZVRpbGUyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNodWZmbGVUaWxlMlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfb3B0aW9ucyA9IHtcbiAgICBob2xkZXJQaWNrTW9kZTogXCJhbGxcIixcbiAgICBpbmNsdWRlQmFjazogZmFsc2VcbiAgfTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTaHVmZmxlVGlsZTJcIjtcbiAgZ2V0IF9jZmcoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSAmJiB2b2lkIDAgIT09IHQgPyB0IDoge307XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX29wdGlvbnMgPSB7XG4gICAgICBob2xkZXJQaWNrTW9kZTogbnVsbCAhPT0gKGUgPSB0aGlzLl9jZmcuaG9sZGVyUGlja01vZGUpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiBcImFsbFwiLFxuICAgICAgaW5jbHVkZUJhY2s6IG51bGwgIT09IChyID0gdGhpcy5fY2ZnLmluY2x1ZGVCYWNrKSAmJiB2b2lkIDAgIT09IHIgJiYgclxuICAgIH07XG4gIH1cbiAgb25UaWxlMlNodWZmbGVNb2RfY29tcHV0ZSh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmlucztcbiAgICBuZXcgSG9sZGVyUHJpb3JpdHlTaHVmZmxlcihyLl9jb250ZXh0KS5hcHBseSh0aGlzLl9vcHRpb25zKTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=