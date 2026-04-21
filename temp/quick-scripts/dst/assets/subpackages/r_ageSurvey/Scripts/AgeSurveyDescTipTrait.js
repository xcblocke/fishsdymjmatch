
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyDescTipTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0605c0WGHhKwoi29kanJ55L', 'AgeSurveyDescTipTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyDescTipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AgeSurveyDescTipTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyDescTipTrait, _super);
    function AgeSurveyDescTipTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AgeSurveyDescTipTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    AgeSurveyDescTipTrait.prototype.onAgeSurveyView_onLoad = function (t, e) {
        var r = t.ins;
        if (r && r.node) {
            var o = r.node.getChildByName("content_node");
            if (o) {
                var i = o.getChildByName("desc_tip"), n = o.getChildByName("desc");
                if (i && n) {
                    i.active = true;
                    var a = n.getContentSize(), s = a.height - 42;
                    n.setContentSize(a.width, s);
                }
                e();
            }
            else
                e();
        }
        else
            e();
    };
    AgeSurveyDescTipTrait.traitKey = "AgeSurveyDescTip";
    AgeSurveyDescTipTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyDescTipTrait")
    ], AgeSurveyDescTipTrait);
    return AgeSurveyDescTipTrait;
}(Trait_1.default));
exports.default = AgeSurveyDescTipTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleURlc2NUaXBUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRzNEO0lBQW1ELHlDQUFLO0lBQXhEOztJQXNCQSxDQUFDO0lBcEJDLHNDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUNsQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNWLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQ3hCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCxDQUFDLEVBQUUsQ0FBQzthQUNMOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXBCTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0FzQnpDO0lBQUQsNEJBQUM7Q0F0QkQsQUFzQkMsQ0F0QmtELGVBQUssR0FzQnZEO2tCQXRCb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQWdlU3VydmV5RGVzY1RpcFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ2VTdXJ2ZXlEZXNjVGlwVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQWdlU3VydmV5RGVzY1RpcFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25BZ2VTdXJ2ZXlWaWV3X29uTG9hZCh0LCBlKSB7XG4gICAgdmFyIHIgPSB0LmlucztcbiAgICBpZiAociAmJiByLm5vZGUpIHtcbiAgICAgIHZhciBvID0gci5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudF9ub2RlXCIpO1xuICAgICAgaWYgKG8pIHtcbiAgICAgICAgdmFyIGkgPSBvLmdldENoaWxkQnlOYW1lKFwiZGVzY190aXBcIiksXG4gICAgICAgICAgbiA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJkZXNjXCIpO1xuICAgICAgICBpZiAoaSAmJiBuKSB7XG4gICAgICAgICAgaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHZhciBhID0gbi5nZXRDb250ZW50U2l6ZSgpLFxuICAgICAgICAgICAgcyA9IGEuaGVpZ2h0IC0gNDI7XG4gICAgICAgICAgbi5zZXRDb250ZW50U2l6ZShhLndpZHRoLCBzKTtcbiAgICAgICAgfVxuICAgICAgICBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=