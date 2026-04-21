
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_task/Scripts/TaskFirstRandomTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cadbcStYYpNYZnDjjuL5DeK', 'TaskFirstRandomTrait');
// subpackages/l_task/Scripts/TaskFirstRandomTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskFirstRandomTrait = /** @class */ (function (_super) {
    __extends(TaskFirstRandomTrait, _super);
    function TaskFirstRandomTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    TaskFirstRandomTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = this._traitData || {};
    };
    TaskFirstRandomTrait.prototype.onTaskTrait_getFstRndFlg = function (t, e) {
        if (void 0 === this._config.firstRandomFlag) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: this._config.firstRandomFlag
            });
        }
    };
    TaskFirstRandomTrait.traitKey = "TaskFirstRandom";
    TaskFirstRandomTrait = __decorate([
        mj.trait,
        mj.class("TaskFirstRandomTrait")
    ], TaskFirstRandomTrait);
    return TaskFirstRandomTrait;
}(Trait_1.default));
exports.default = TaskFirstRandomTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2svU2NyaXB0cy9UYXNrRmlyc3RSYW5kb21UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFrRCx3Q0FBSztJQUF2RDtRQUFBLHFFQWtCQztRQWpCQyxhQUFPLEdBQUcsRUFBRSxDQUFDOztJQWlCZixDQUFDO0lBZkMscUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsdURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7WUFDM0MsQ0FBQyxFQUFFLENBQUM7U0FDTDthQUFNO1lBQ0wsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlO2FBQ3hDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQWZNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFGakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQWtCeEM7SUFBRCwyQkFBQztDQWxCRCxBQWtCQyxDQWxCaUQsZUFBSyxHQWtCdEQ7a0JBbEJvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUYXNrRmlyc3RSYW5kb21UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0ZpcnN0UmFuZG9tVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9jb25maWcgPSB7fTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUYXNrRmlyc3RSYW5kb21cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX3RyYWl0RGF0YSB8fCB7fTtcbiAgfVxuICBvblRhc2tUcmFpdF9nZXRGc3RSbmRGbGcodCwgZSkge1xuICAgIGlmICh2b2lkIDAgPT09IHRoaXMuX2NvbmZpZy5maXJzdFJhbmRvbUZsYWcpIHtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl9jb25maWcuZmlyc3RSYW5kb21GbGFnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=