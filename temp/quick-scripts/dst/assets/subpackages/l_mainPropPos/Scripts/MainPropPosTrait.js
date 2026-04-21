
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mainPropPos/Scripts/MainPropPosTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e49f1A2LfhAKbMYnD4uKczK', 'MainPropPosTrait');
// subpackages/l_mainPropPos/Scripts/MainPropPosTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var MainPropPosTrait = /** @class */ (function (_super) {
    __extends(MainPropPosTrait, _super);
    function MainPropPosTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainPropPosTrait.prototype.onMainGmVw_calcAreaSz = function (t, e) {
        var r, o = t.ins;
        if (o.gameType !== GameTypeEnums_1.MjGameType.Classic) {
            var i = null === (r = t.ins) || void 0 === r ? void 0 : r._bottomRootNode;
            if (cc.isValid(i)) {
                if (!i.getChildByName("nodePropBg")) {
                    var n = new cc.Node("nodePropBg");
                    n.setAnchorPoint(0.5, 1);
                    n.height = 640;
                    i.addChild(n);
                    n.setSiblingIndex(0);
                    var c = n.addComponent(cc.Widget);
                    c.isAlignLeft = c.isAlignRight = true;
                    c.isAlignTop = true;
                    c.left = c.right = 0;
                    c.top = 55;
                    c.target = i;
                    n.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
                    BaseSprite_1.default.refreshWithNode(n, "texture/journeyMap/01/journey_bg_dn", false, true);
                    this.createNodePropBg(o, n);
                }
                e();
            }
            else
                e();
        }
        else
            e();
    };
    MainPropPosTrait.prototype.createNodePropBg = function () { };
    MainPropPosTrait.traitKey = "MainPropPos";
    __decorate([
        mj.traitEvent("MainPrPosTrait_crtNoPrBg")
    ], MainPropPosTrait.prototype, "createNodePropBg", null);
    MainPropPosTrait = __decorate([
        mj.trait,
        mj.class("MainPropPosTrait")
    ], MainPropPosTrait);
    return MainPropPosTrait;
}(Trait_1.default));
exports.default = MainPropPosTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21haW5Qcm9wUG9zL1NjcmlwdHMvTWFpblByb3BQb3NUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCwyRUFBc0U7QUFHdEU7SUFBOEMsb0NBQUs7SUFBbkQ7O0lBOEJBLENBQUM7SUE1QkMsZ0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1osSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztZQUMxRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNuQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDZixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNkLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNsQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN0QyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDcEIsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDL0Qsb0JBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLHFDQUFxQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDN0I7Z0JBQ0QsQ0FBQyxFQUFFLENBQUM7YUFDTDs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEIsY0FBb0IsQ0FBQztJQTVCZCx5QkFBUSxHQUFHLGFBQWEsQ0FBQztJQTRCaEM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDOzREQUNyQjtJQTdCRixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBOEJwQztJQUFELHVCQUFDO0NBOUJELEFBOEJDLENBOUI2QyxlQUFLLEdBOEJsRDtrQkE5Qm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWFpblByb3BQb3NUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblByb3BQb3NUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYWluUHJvcFBvc1wiO1xuICBvbk1haW5HbVZ3X2NhbGNBcmVhU3oodCwgZSkge1xuICAgIHZhciByLFxuICAgICAgbyA9IHQuaW5zO1xuICAgIGlmIChvLmdhbWVUeXBlICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHZhciBpID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5fYm90dG9tUm9vdE5vZGU7XG4gICAgICBpZiAoY2MuaXNWYWxpZChpKSkge1xuICAgICAgICBpZiAoIWkuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlUHJvcEJnXCIpKSB7XG4gICAgICAgICAgdmFyIG4gPSBuZXcgY2MuTm9kZShcIm5vZGVQcm9wQmdcIik7XG4gICAgICAgICAgbi5zZXRBbmNob3JQb2ludCgwLjUsIDEpO1xuICAgICAgICAgIG4uaGVpZ2h0ID0gNjQwO1xuICAgICAgICAgIGkuYWRkQ2hpbGQobik7XG4gICAgICAgICAgbi5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgICAgICAgdmFyIGMgPSBuLmFkZENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICAgIGMuaXNBbGlnbkxlZnQgPSBjLmlzQWxpZ25SaWdodCA9IHRydWU7XG4gICAgICAgICAgYy5pc0FsaWduVG9wID0gdHJ1ZTtcbiAgICAgICAgICBjLmxlZnQgPSBjLnJpZ2h0ID0gMDtcbiAgICAgICAgICBjLnRvcCA9IDU1O1xuICAgICAgICAgIGMudGFyZ2V0ID0gaTtcbiAgICAgICAgICBuLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgICAgICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShuLCBcInRleHR1cmUvam91cm5leU1hcC8wMS9qb3VybmV5X2JnX2RuXCIsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGVQcm9wQmcobywgbik7XG4gICAgICAgIH1cbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTWFpblByUG9zVHJhaXRfY3J0Tm9QckJnXCIpXG4gIGNyZWF0ZU5vZGVQcm9wQmcoKSB7fVxufSJdfQ==