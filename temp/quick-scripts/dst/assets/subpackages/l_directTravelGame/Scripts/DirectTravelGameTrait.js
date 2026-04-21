
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_directTravelGame/Scripts/DirectTravelGameTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63573VfNI9GQoMvv2ruXtbC', 'DirectTravelGameTrait');
// subpackages/l_directTravelGame/Scripts/DirectTravelGameTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var DirectTravelGameTrait = /** @class */ (function (_super) {
    __extends(DirectTravelGameTrait, _super);
    function DirectTravelGameTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectTravelGameTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DirectTravelGameTrait.prototype.onTravelVw_gotoTravelMap = function (t, e) {
        var r = t.ins;
        if (JumpManager_1.default.getInstance().jumpToTravelGame({}, function () {
            r && r.delegate && r.delegate.close();
        })) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            e();
        }
    };
    DirectTravelGameTrait.prototype.onTLValVw_gotoTravelMap = function (t, e) {
        var r = t.ins;
        if (JumpManager_1.default.getInstance().jumpToTravelGame({}, function () {
            r && r.delegate && r.delegate.close();
        })) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            e();
        }
    };
    DirectTravelGameTrait.traitKey = "DirectTravelGame";
    DirectTravelGameTrait = __decorate([
        mj.trait,
        mj.class("DirectTravelGameTrait")
    ], DirectTravelGameTrait);
    return DirectTravelGameTrait;
}(Trait_1.default));
exports.default = DirectTravelGameTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpcmVjdFRyYXZlbEdhbWUvU2NyaXB0cy9EaXJlY3RUcmF2ZWxHYW1lVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQW1ELHlDQUFLO0lBQXhEOztJQTZCQSxDQUFDO0lBM0JDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx3REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUkscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUU7WUFDakQsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRTtZQUNGLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsSUFBSTthQUN6QyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFDRCx1REFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUkscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUU7WUFDakQsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsRUFBRTtZQUNGLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsSUFBSTthQUN6QyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUEzQk0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQURsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBNkJ6QztJQUFELDRCQUFDO0NBN0JELEFBNkJDLENBN0JrRCxlQUFLLEdBNkJ2RDtrQkE3Qm9CLHFCQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgSnVtcE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9iYXNlL2p1bXAvSnVtcE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEaXJlY3RUcmF2ZWxHYW1lVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdFRyYXZlbEdhbWVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEaXJlY3RUcmF2ZWxHYW1lXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblRyYXZlbFZ3X2dvdG9UcmF2ZWxNYXAodCwgZSkge1xuICAgIHZhciByID0gdC5pbnM7XG4gICAgaWYgKEp1bXBNYW5hZ2VyLmdldEluc3RhbmNlKCkuanVtcFRvVHJhdmVsR2FtZSh7fSwgZnVuY3Rpb24gKCkge1xuICAgICAgciAmJiByLmRlbGVnYXRlICYmIHIuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICB9KSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uVExWYWxWd19nb3RvVHJhdmVsTWFwKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuaW5zO1xuICAgIGlmIChKdW1wTWFuYWdlci5nZXRJbnN0YW5jZSgpLmp1bXBUb1RyYXZlbEdhbWUoe30sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHIgJiYgci5kZWxlZ2F0ZSAmJiByLmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgfSkpIHtcbiAgICAgIGUoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==