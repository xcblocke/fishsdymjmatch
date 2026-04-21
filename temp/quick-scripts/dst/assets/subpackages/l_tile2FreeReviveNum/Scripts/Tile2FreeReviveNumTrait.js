
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2FreeReviveNum/Scripts/Tile2FreeReviveNumTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f5f7zlG0BDqLhthGuLxUm/', 'Tile2FreeReviveNumTrait');
// subpackages/l_tile2FreeReviveNum/Scripts/Tile2FreeReviveNumTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2FreeReviveNumTrait = /** @class */ (function (_super) {
    __extends(Tile2FreeReviveNumTrait, _super);
    function Tile2FreeReviveNumTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FreeReviveNumTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2FreeReviveNumTrait.prototype.onT2GD_getFrRvInitCnt = function (t, e) {
        var r;
        if (void 0 === (null === (r = this.traitData) || void 0 === r ? void 0 : r.freeCount))
            e();
        else {
            var i = Number(this.traitData.freeCount);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: i
            });
        }
    };
    Tile2FreeReviveNumTrait.traitKey = "Tile2FreeReviveNum";
    Tile2FreeReviveNumTrait = __decorate([
        mj.trait,
        mj.class("Tile2FreeReviveNumTrait")
    ], Tile2FreeReviveNumTrait);
    return Tile2FreeReviveNumTrait;
}(Trait_1.default));
exports.default = Tile2FreeReviveNumTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyRnJlZVJldml2ZU51bS9TY3JpcHRzL1RpbGUyRnJlZVJldml2ZU51bVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQXFELDJDQUFLO0lBQTFEOztJQWdCQSxDQUFDO0lBZEMsd0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHVEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFBRSxDQUFDLEVBQUUsQ0FBQzthQUFLO1lBQzlGLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFkTSxnQ0FBUSxHQUFHLG9CQUFvQixDQUFDO0lBRHBCLHVCQUF1QjtRQUYzQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7T0FDZix1QkFBdUIsQ0FnQjNDO0lBQUQsOEJBQUM7Q0FoQkQsQUFnQkMsQ0FoQm9ELGVBQUssR0FnQnpEO2tCQWhCb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGlsZTJGcmVlUmV2aXZlTnVtVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyRnJlZVJldml2ZU51bVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyRnJlZVJldml2ZU51bVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25UMkdEX2dldEZyUnZJbml0Q250KHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICBpZiAodm9pZCAwID09PSAobnVsbCA9PT0gKHIgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5mcmVlQ291bnQpKSBlKCk7ZWxzZSB7XG4gICAgICB2YXIgaSA9IE51bWJlcih0aGlzLnRyYWl0RGF0YS5mcmVlQ291bnQpO1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=