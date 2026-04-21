
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mainGameBackIcon/Scripts/MainGameBackIconTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7212bptOdN0rFSu/zNzR9T', 'MainGameBackIconTrait');
// subpackages/l_mainGameBackIcon/Scripts/MainGameBackIconTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var MainGameBackIconTrait = /** @class */ (function (_super) {
    __extends(MainGameBackIconTrait, _super);
    function MainGameBackIconTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameBackIconTrait_1 = MainGameBackIconTrait;
    MainGameBackIconTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameBackIconTrait.prototype.getIconPath = function () {
        var t;
        return (null === (t = this._traitData) || void 0 === t ? void 0 : t.iconPath) || MainGameBackIconTrait_1.DEFAULT_ICON_PATH;
    };
    MainGameBackIconTrait.prototype.isMatchGameType = function (t) {
        var e;
        return !((null === (e = this._traitData) || void 0 === e ? void 0 : e.gameTypes) && Array.isArray(this._traitData.gameTypes)) || this._traitData.gameTypes.includes(t);
    };
    MainGameBackIconTrait.prototype.onMainGRTop_applyTSCfg = function (t, e) {
        var r, o = null === (r = t.args) || void 0 === r ? void 0 : r[0];
        if (o && this.isMatchGameType(o.gameType)) {
            var a = cc.find("btnBack/Background/icon", o.topRootNode), i = this.getIconPath();
            BaseSprite_1.default.refreshWithNode(a, i, false, false, "mainRes");
            a.setPosition(1, 4);
            e();
        }
        else
            e();
    };
    var MainGameBackIconTrait_1;
    MainGameBackIconTrait.traitKey = "MainGameBackIcon";
    MainGameBackIconTrait.DEFAULT_ICON_PATH = "texture/gamePlayTop/gameplay_img_home";
    MainGameBackIconTrait = MainGameBackIconTrait_1 = __decorate([
        mj.trait,
        mj.class("MainGameBackIconTrait")
    ], MainGameBackIconTrait);
    return MainGameBackIconTrait;
}(Trait_1.default));
exports.default = MainGameBackIconTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21haW5HYW1lQmFja0ljb24vU2NyaXB0cy9NYWluR2FtZUJhY2tJY29uVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCwyRUFBc0U7QUFHdEU7SUFBbUQseUNBQUs7SUFBeEQ7O0lBeUJBLENBQUM7OEJBekJvQixxQkFBcUI7SUFHeEMsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQztJQUMzSCxDQUFDO0lBQ0QsK0NBQWUsR0FBZixVQUFnQixDQUFDO1FBQ2YsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6SyxDQUFDO0lBQ0Qsc0RBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFDdkQsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6QixvQkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7O0lBdkJNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFDOUIsdUNBQWlCLEdBQUcsdUNBQXVDLENBQUM7SUFGaEQscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQXlCekM7SUFBRCw0QkFBQztDQXpCRCxBQXlCQyxDQXpCa0QsZUFBSyxHQXlCdkQ7a0JBekJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNYWluR2FtZUJhY2tJY29uVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5HYW1lQmFja0ljb25UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYWluR2FtZUJhY2tJY29uXCI7XG4gIHN0YXRpYyBERUZBVUxUX0lDT05fUEFUSCA9IFwidGV4dHVyZS9nYW1lUGxheVRvcC9nYW1lcGxheV9pbWdfaG9tZVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgZ2V0SWNvblBhdGgoKSB7XG4gICAgdmFyIHQ7XG4gICAgcmV0dXJuIChudWxsID09PSAodCA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5pY29uUGF0aCkgfHwgTWFpbkdhbWVCYWNrSWNvblRyYWl0LkRFRkFVTFRfSUNPTl9QQVRIO1xuICB9XG4gIGlzTWF0Y2hHYW1lVHlwZSh0KSB7XG4gICAgdmFyIGU7XG4gICAgcmV0dXJuICEoKG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdhbWVUeXBlcykgJiYgQXJyYXkuaXNBcnJheSh0aGlzLl90cmFpdERhdGEuZ2FtZVR5cGVzKSkgfHwgdGhpcy5fdHJhaXREYXRhLmdhbWVUeXBlcy5pbmNsdWRlcyh0KTtcbiAgfVxuICBvbk1haW5HUlRvcF9hcHBseVRTQ2ZnKHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG8gPSBudWxsID09PSAociA9IHQuYXJncykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogclswXTtcbiAgICBpZiAobyAmJiB0aGlzLmlzTWF0Y2hHYW1lVHlwZShvLmdhbWVUeXBlKSkge1xuICAgICAgdmFyIGEgPSBjYy5maW5kKFwiYnRuQmFjay9CYWNrZ3JvdW5kL2ljb25cIiwgby50b3BSb290Tm9kZSksXG4gICAgICAgIGkgPSB0aGlzLmdldEljb25QYXRoKCk7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZShhLCBpLCBmYWxzZSwgZmFsc2UsIFwibWFpblJlc1wiKTtcbiAgICAgIGEuc2V0UG9zaXRpb24oMSwgNCk7XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==