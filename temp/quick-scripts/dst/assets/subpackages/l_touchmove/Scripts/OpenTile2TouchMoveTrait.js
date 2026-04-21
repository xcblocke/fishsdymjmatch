
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_touchmove/Scripts/OpenTile2TouchMoveTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e0e41jMsJJkqJk7pph6yAj', 'OpenTile2TouchMoveTrait');
// subpackages/l_touchmove/Scripts/OpenTile2TouchMoveTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var OpenTile2TouchMoveTrait = /** @class */ (function (_super) {
    __extends(OpenTile2TouchMoveTrait, _super);
    function OpenTile2TouchMoveTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenTile2TouchMoveTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    OpenTile2TouchMoveTrait.prototype.onCltm_IsIgnoreTile2 = function (t, e) {
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.jump,
            returnVal: true
        });
    };
    OpenTile2TouchMoveTrait.traitKey = "OpenTile2TouchMove";
    OpenTile2TouchMoveTrait = __decorate([
        mj.trait,
        mj.class("OpenTile2TouchMoveTrait")
    ], OpenTile2TouchMoveTrait);
    return OpenTile2TouchMoveTrait;
}(Trait_1.default));
exports.default = OpenTile2TouchMoveTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RvdWNobW92ZS9TY3JpcHRzL09wZW5UaWxlMlRvdWNoTW92ZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQXFELDJDQUFLO0lBQTFEOztJQVlBLENBQUM7SUFWQyx3Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLElBQUk7WUFDeEMsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVZNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFEcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQVkzQztJQUFELDhCQUFDO0NBWkQsQUFZQyxDQVpvRCxlQUFLLEdBWXpEO2tCQVpvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJPcGVuVGlsZTJUb3VjaE1vdmVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlblRpbGUyVG91Y2hNb3ZlVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiT3BlblRpbGUyVG91Y2hNb3ZlXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkNsdG1fSXNJZ25vcmVUaWxlMih0LCBlKSB7XG4gICAgZSh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgIH0pO1xuICB9XG59Il19