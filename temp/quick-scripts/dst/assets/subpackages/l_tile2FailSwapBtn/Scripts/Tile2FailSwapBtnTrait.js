
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2FailSwapBtn/Scripts/Tile2FailSwapBtnTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88af3WX+BJGuIxkElLjvC4g', 'Tile2FailSwapBtnTrait');
// subpackages/l_tile2FailSwapBtn/Scripts/Tile2FailSwapBtnTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Tile2FailSwapBtnTrait = /** @class */ (function (_super) {
    __extends(Tile2FailSwapBtnTrait, _super);
    function Tile2FailSwapBtnTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2FailSwapBtnTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Tile2FailSwapBtnTrait.prototype.onTile2FailVw_show = function (t, e) {
        var r = t.ins;
        if (r && cc.isValid(r.node)) {
            var o = r.node.getChildByName("content_node");
            if (o) {
                var i = o.getChildByName("btn_use"), n = o.getChildByName("btn_replay");
                if (i && n) {
                    var a = i.getPosition(), c = n.getPosition();
                    i.setPosition(c);
                    n.setPosition(a);
                    e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    Tile2FailSwapBtnTrait.traitKey = "Tile2FailSwapBtn";
    Tile2FailSwapBtnTrait = __decorate([
        mj.trait,
        mj.class("Tile2FailSwapBtnTrait")
    ], Tile2FailSwapBtnTrait);
    return Tile2FailSwapBtnTrait;
}(Trait_1.default));
exports.default = Tile2FailSwapBtnTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyRmFpbFN3YXBCdG4vU2NyaXB0cy9UaWxlMkZhaWxTd2FwQnRuVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFtRCx5Q0FBSztJQUF4RDs7SUFzQkEsQ0FBQztJQXBCQyxzQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUNqQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsQ0FBQyxFQUFFLENBQUM7aUJBQ0w7O29CQUFNLENBQUMsRUFBRSxDQUFDO2FBQ1o7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBcEJNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFEbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQXNCekM7SUFBRCw0QkFBQztDQXRCRCxBQXNCQyxDQXRCa0QsZUFBSyxHQXNCdkQ7a0JBdEJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaWxlMkZhaWxTd2FwQnRuVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyRmFpbFN3YXBCdG5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMkZhaWxTd2FwQnRuXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblRpbGUyRmFpbFZ3X3Nob3codCwgZSkge1xuICAgIHZhciByID0gdC5pbnM7XG4gICAgaWYgKHIgJiYgY2MuaXNWYWxpZChyLm5vZGUpKSB7XG4gICAgICB2YXIgbyA9IHIubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRfbm9kZVwiKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHZhciBpID0gby5nZXRDaGlsZEJ5TmFtZShcImJ0bl91c2VcIiksXG4gICAgICAgICAgbiA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fcmVwbGF5XCIpO1xuICAgICAgICBpZiAoaSAmJiBuKSB7XG4gICAgICAgICAgdmFyIGEgPSBpLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgICBjID0gbi5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgIGkuc2V0UG9zaXRpb24oYyk7XG4gICAgICAgICAgbi5zZXRQb3NpdGlvbihhKTtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH0gZWxzZSBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=