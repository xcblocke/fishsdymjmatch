
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_movescaletime/Scripts/MoveScaleTimeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0788Tg0dBA+54ONKLiu+Uf', 'MoveScaleTimeTrait');
// subpackages/l_movescaletime/Scripts/MoveScaleTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var MoveScaleTimeTrait = /** @class */ (function (_super) {
    __extends(MoveScaleTimeTrait, _super);
    function MoveScaleTimeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MoveScaleTimeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MoveScaleTimeTrait.prototype.onMoveStateAni_duration = function (t, e) {
        e({
            returnVal: this._traitData.duration || 0.05,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    MoveScaleTimeTrait.prototype.onScaleStateAni_duration = function (t, e) {
        e({
            returnVal: this._traitData.duration || 0.05,
            returnType: TraitCallbackReturnType.return,
            isBreak: true
        });
    };
    MoveScaleTimeTrait.traitKey = "MoveScaleTime";
    MoveScaleTimeTrait = __decorate([
        mj.trait,
        mj.class("MoveScaleTimeTrait")
    ], MoveScaleTimeTrait);
    return MoveScaleTimeTrait;
}(Trait_1.default));
exports.default = MoveScaleTimeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21vdmVzY2FsZXRpbWUvU2NyaXB0cy9Nb3ZlU2NhbGVUaW1lVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDs7SUFtQkEsQ0FBQztJQWpCQyxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsb0RBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztZQUNBLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxJQUFJO1lBQzNDLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQzFDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLElBQUksSUFBSTtZQUMzQyxVQUFVLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMxQyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQk0sMkJBQVEsR0FBRyxlQUFlLENBQUM7SUFEZixrQkFBa0I7UUFGdEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBbUJ0QztJQUFELHlCQUFDO0NBbkJELEFBbUJDLENBbkIrQyxlQUFLLEdBbUJwRDtrQkFuQm9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1vdmVTY2FsZVRpbWVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZVNjYWxlVGltZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIk1vdmVTY2FsZVRpbWVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uTW92ZVN0YXRlQW5pX2R1cmF0aW9uKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5fdHJhaXREYXRhLmR1cmF0aW9uIHx8IDAuMDUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgb25TY2FsZVN0YXRlQW5pX2R1cmF0aW9uKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblZhbDogdGhpcy5fdHJhaXREYXRhLmR1cmF0aW9uIHx8IDAuMDUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICBpc0JyZWFrOiB0cnVlXG4gICAgfSk7XG4gIH1cbn0iXX0=