
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyBackHallTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '277d1b/4ANPzLz2yeFurDJh', 'DailyBackHallTrait');
// subpackages/l_daily/Scripts/DailyBackHallTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DailyBackHallTrait = /** @class */ (function (_super) {
    __extends(DailyBackHallTrait, _super);
    function DailyBackHallTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyBackHallTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyBackHallTrait.prototype.onDailyCtrl_closeView = function (t, e) {
        ControllerManager_1.default.getInstance().pushViewByController("HallController", {
            isReplace: true
        });
        e();
    };
    DailyBackHallTrait.traitKey = "DailyBackHall";
    DailyBackHallTrait = __decorate([
        mj.trait,
        mj.class("DailyBackHallTrait")
    ], DailyBackHallTrait);
    return DailyBackHallTrait;
}(Trait_1.default));
exports.default = DailyBackHallTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlCYWNrSGFsbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRkFBcUY7QUFDckYsZ0VBQTJEO0FBRzNEO0lBQWdELHNDQUFLO0lBQXJEOztJQVdBLENBQUM7SUFUQyxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFO1lBQ3JFLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUNILENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQVRNLDJCQUFRLEdBQUcsZUFBZSxDQUFDO0lBRGYsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQVd0QztJQUFELHlCQUFDO0NBWEQsQUFXQyxDQVgrQyxlQUFLLEdBV3BEO2tCQVhvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEYWlseUJhY2tIYWxsVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5QmFja0hhbGxUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEYWlseUJhY2tIYWxsXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkRhaWx5Q3RybF9jbG9zZVZpZXcodCwgZSkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJIYWxsQ29udHJvbGxlclwiLCB7XG4gICAgICBpc1JlcGxhY2U6IHRydWVcbiAgICB9KTtcbiAgICBlKCk7XG4gIH1cbn0iXX0=