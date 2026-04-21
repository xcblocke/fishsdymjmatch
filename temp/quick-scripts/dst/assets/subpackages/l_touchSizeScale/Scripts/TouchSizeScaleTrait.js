
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_touchSizeScale/Scripts/TouchSizeScaleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '805a2zmdUhEHKj2axYgJxLw', 'TouchSizeScaleTrait');
// subpackages/l_touchSizeScale/Scripts/TouchSizeScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TouchSizeScaleTrait = /** @class */ (function (_super) {
    __extends(TouchSizeScaleTrait, _super);
    function TouchSizeScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchSizeScaleTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TouchSizeScaleTrait.prototype.getTouchSizeOffsets = function (t, e) {
        var r = this._traitData.canTouchScale || 1.2, o = this._traitData.canNotTouchScale || 0.8, i = e.getContentSize();
        if (t.isCardLock(e)) {
            var n, a;
            return [-(n = i.width * (1 - o) / 2), -n, -(a = i.height * (1 - o) / 2), -a];
        }
        return [-(n = i.width * (1 - r) / 2), -n, -(a = i.height * (1 - r) / 2), -a];
    };
    TouchSizeScaleTrait.prototype.onTileMapObj_updTchSz = function (t, e) {
        var r = t.ins, o = t.args[0], i = this.getTouchSizeOffsets(r, o);
        o.updateTouchSizeOffsets(i);
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump
        });
    };
    TouchSizeScaleTrait.prototype.onGameMod_modifyLayout = function (t, e) {
        t.ins.context.getTileMapObject().updateTouchSizeOffsets();
        e();
    };
    TouchSizeScaleTrait.traitKey = "TouchSizeScale";
    TouchSizeScaleTrait = __decorate([
        mj.trait,
        mj.class("TouchSizeScaleTrait")
    ], TouchSizeScaleTrait);
    return TouchSizeScaleTrait;
}(Trait_1.default));
exports.default = TouchSizeScaleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RvdWNoU2l6ZVNjYWxlL1NjcmlwdHMvVG91Y2hTaXplU2NhbGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFpRCx1Q0FBSztJQUF0RDs7SUE2QkEsQ0FBQztJQTNCQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsaURBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFJLEdBQUcsRUFDMUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLElBQUksR0FBRyxFQUMzQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBQ0QsbURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLElBQUk7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG9EQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDMUQsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBM0JNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFEaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQTZCdkM7SUFBRCwwQkFBQztDQTdCRCxBQTZCQyxDQTdCZ0QsZUFBSyxHQTZCckQ7a0JBN0JvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUb3VjaFNpemVTY2FsZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaFNpemVTY2FsZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRvdWNoU2l6ZVNjYWxlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBnZXRUb3VjaFNpemVPZmZzZXRzKHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXMuX3RyYWl0RGF0YS5jYW5Ub3VjaFNjYWxlIHx8IDEuMixcbiAgICAgIG8gPSB0aGlzLl90cmFpdERhdGEuY2FuTm90VG91Y2hTY2FsZSB8fCAwLjgsXG4gICAgICBpID0gZS5nZXRDb250ZW50U2l6ZSgpO1xuICAgIGlmICh0LmlzQ2FyZExvY2soZSkpIHtcbiAgICAgIHZhciBuLCBhO1xuICAgICAgcmV0dXJuIFstKG4gPSBpLndpZHRoICogKDEgLSBvKSAvIDIpLCAtbiwgLShhID0gaS5oZWlnaHQgKiAoMSAtIG8pIC8gMiksIC1hXTtcbiAgICB9XG4gICAgcmV0dXJuIFstKG4gPSBpLndpZHRoICogKDEgLSByKSAvIDIpLCAtbiwgLShhID0gaS5oZWlnaHQgKiAoMSAtIHIpIC8gMiksIC1hXTtcbiAgfVxuICBvblRpbGVNYXBPYmpfdXBkVGNoU3oodCwgZSkge1xuICAgIHZhciByID0gdC5pbnMsXG4gICAgICBvID0gdC5hcmdzWzBdLFxuICAgICAgaSA9IHRoaXMuZ2V0VG91Y2hTaXplT2Zmc2V0cyhyLCBvKTtcbiAgICBvLnVwZGF0ZVRvdWNoU2l6ZU9mZnNldHMoaSk7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgIH0pO1xuICB9XG4gIG9uR2FtZU1vZF9tb2RpZnlMYXlvdXQodCwgZSkge1xuICAgIHQuaW5zLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnVwZGF0ZVRvdWNoU2l6ZU9mZnNldHMoKTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=