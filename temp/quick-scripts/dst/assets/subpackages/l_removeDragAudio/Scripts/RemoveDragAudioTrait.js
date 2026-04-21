
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_removeDragAudio/Scripts/RemoveDragAudioTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '431677q0khIjJdXtp16VXyK', 'RemoveDragAudioTrait');
// subpackages/l_removeDragAudio/Scripts/RemoveDragAudioTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RemoveDragAudioTrait = /** @class */ (function (_super) {
    __extends(RemoveDragAudioTrait, _super);
    function RemoveDragAudioTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveDragAudioTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2Event();
    };
    RemoveDragAudioTrait.prototype.registerTile2Event = function () {
        this.registerEvent([{
                event: "Tile2MoveBhv_playAudio",
                type: 0
            }]);
    };
    RemoveDragAudioTrait.prototype.onMoveBhv_playAudio = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    RemoveDragAudioTrait.prototype.onTile2MoveBhv_playAudio = function (t, e) {
        e({
            returnType: TraitCallbackReturnType.jump
        });
    };
    RemoveDragAudioTrait.traitKey = "RemoveDragAudio";
    RemoveDragAudioTrait = __decorate([
        mj.trait,
        mj.class("RemoveDragAudioTrait")
    ], RemoveDragAudioTrait);
    return RemoveDragAudioTrait;
}(Trait_1.default));
exports.default = RemoveDragAudioTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JlbW92ZURyYWdBdWRpby9TY3JpcHRzL1JlbW92ZURyYWdBdWRpb1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBc0JBLENBQUM7SUFwQkMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELGlEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsSUFBSSxFQUFFLENBQUM7YUFDUixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCxrREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1lBQ0EsVUFBVSxFQUFFLHVCQUF1QixDQUFDLElBQUk7U0FDekMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBcEJNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFEakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQXNCeEM7SUFBRCwyQkFBQztDQXRCRCxBQXNCQyxDQXRCaUQsZUFBSyxHQXNCdEQ7a0JBdEJvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSZW1vdmVEcmFnQXVkaW9UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtb3ZlRHJhZ0F1ZGlvVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmVtb3ZlRHJhZ0F1ZGlvXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnJlZ2lzdGVyVGlsZTJFdmVudCgpO1xuICB9XG4gIHJlZ2lzdGVyVGlsZTJFdmVudCgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIlRpbGUyTW92ZUJodl9wbGF5QXVkaW9cIixcbiAgICAgIHR5cGU6IDBcbiAgICB9XSk7XG4gIH1cbiAgb25Nb3ZlQmh2X3BsYXlBdWRpbyh0LCBlKSB7XG4gICAgZSh7XG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wXG4gICAgfSk7XG4gIH1cbiAgb25UaWxlMk1vdmVCaHZfcGxheUF1ZGlvKHQsIGUpIHtcbiAgICBlKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXBcbiAgICB9KTtcbiAgfVxufSJdfQ==