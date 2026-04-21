
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_removePersonSound/Scripts/RemovePersonSoundTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1abb69SSb5JGapcwiOkCyKt', 'RemovePersonSoundTrait');
// subpackages/l_removePersonSound/Scripts/RemovePersonSoundTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RemovePersonSoundTrait = /** @class */ (function (_super) {
    __extends(RemovePersonSoundTrait, _super);
    function RemovePersonSoundTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemovePersonSoundTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RemovePersonSoundTrait.prototype.onMotivWordsBhv_playSound = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump,
            isBreak: true
        });
    };
    RemovePersonSoundTrait.prototype.onRwdComboBhv_bonusAud = function (t, e) {
        mj.audioManager.pauseBGM();
        var r = t.ins;
        r.context.applauseAudioId = -1;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Applause, true).then(function (t) {
            r.context.applauseAudioId = t;
        });
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    RemovePersonSoundTrait.traitKey = "RemovePersonSound";
    RemovePersonSoundTrait = __decorate([
        mj.trait,
        mj.class("RemovePersonSoundTrait")
    ], RemovePersonSoundTrait);
    return RemovePersonSoundTrait;
}(Trait_1.default));
exports.default = RemovePersonSoundTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JlbW92ZVBlcnNvblNvdW5kL1NjcmlwdHMvUmVtb3ZlUGVyc29uU291bmRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQWtGO0FBQ2xGLGdFQUEyRDtBQUczRDtJQUFvRCwwQ0FBSztJQUF6RDs7SUFzQkEsQ0FBQztJQXBCQyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsMERBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxJQUFJO1lBQ3hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxJQUFJO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFwQk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBc0IxQztJQUFELDZCQUFDO0NBdEJELEFBc0JDLENBdEJtRCxlQUFLLEdBc0J4RDtrQkF0Qm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlJlbW92ZVBlcnNvblNvdW5kVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW92ZVBlcnNvblNvdW5kVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmVtb3ZlUGVyc29uU291bmRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uTW90aXZXb3Jkc0Jodl9wbGF5U291bmQodCwgZSkge1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIGlzQnJlYWs6IHRydWVcbiAgICB9KTtcbiAgfVxuICBvblJ3ZENvbWJvQmh2X2JvbnVzQXVkKHQsIGUpIHtcbiAgICBtai5hdWRpb01hbmFnZXIucGF1c2VCR00oKTtcbiAgICB2YXIgciA9IHQuaW5zO1xuICAgIHIuY29udGV4dC5hcHBsYXVzZUF1ZGlvSWQgPSAtMTtcbiAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5BcHBsYXVzZSwgdHJ1ZSkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgci5jb250ZXh0LmFwcGxhdXNlQXVkaW9JZCA9IHQ7XG4gICAgfSk7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgfSk7XG4gIH1cbn0iXX0=