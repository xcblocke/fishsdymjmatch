
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guideHand/Scripts/GuideHandTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f942cQ9dEdCD4CQEmzJ8Wxg', 'GuideHandTrait');
// subpackages/l_guideHand/Scripts/GuideHandTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GuideHandTrait = /** @class */ (function (_super) {
    __extends(GuideHandTrait, _super);
    function GuideHandTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideHandTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideHandTrait.prototype.onGuideBhv_start = function (t, e) {
        var r = t.args[0];
        if (r && r.data) {
            var n = mj.getClassByName("GuideTrait");
            if (n && n.getInstance() && true === n.getInstance().eventEnabled) {
                if (n.getInstance().guideStep >= this._traitData.hideHandFromStep - 1) {
                    r.data.showHand = false;
                    e();
                    return;
                }
            }
            e();
        }
        else
            e();
    };
    GuideHandTrait.traitKey = "GuideHand";
    GuideHandTrait = __decorate([
        mj.trait,
        mj.class("GuideHandTrait")
    ], GuideHandTrait);
    return GuideHandTrait;
}(Trait_1.default));
exports.default = GuideHandTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlSGFuZC9TY3JpcHRzL0d1aWRlSGFuZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBNEMsa0NBQUs7SUFBakQ7O0lBbUJBLENBQUM7SUFqQkMsK0JBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHlDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksRUFBRTtnQkFDakUsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO29CQUNyRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3hCLENBQUMsRUFBRSxDQUFDO29CQUNKLE9BQU87aUJBQ1I7YUFDRjtZQUNELENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBakJNLHVCQUFRLEdBQUcsV0FBVyxDQUFDO0lBRFgsY0FBYztRQUZsQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDTixjQUFjLENBbUJsQztJQUFELHFCQUFDO0NBbkJELEFBbUJDLENBbkIyQyxlQUFLLEdBbUJoRDtrQkFuQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJHdWlkZUhhbmRUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVIYW5kVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiR3VpZGVIYW5kXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkd1aWRlQmh2X3N0YXJ0KHQsIGUpIHtcbiAgICB2YXIgciA9IHQuYXJnc1swXTtcbiAgICBpZiAociAmJiByLmRhdGEpIHtcbiAgICAgIHZhciBuID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJHdWlkZVRyYWl0XCIpO1xuICAgICAgaWYgKG4gJiYgbi5nZXRJbnN0YW5jZSgpICYmIHRydWUgPT09IG4uZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQpIHtcbiAgICAgICAgaWYgKG4uZ2V0SW5zdGFuY2UoKS5ndWlkZVN0ZXAgPj0gdGhpcy5fdHJhaXREYXRhLmhpZGVIYW5kRnJvbVN0ZXAgLSAxKSB7XG4gICAgICAgICAgci5kYXRhLnNob3dIYW5kID0gZmFsc2U7XG4gICAgICAgICAgZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=