
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hallSetting/Scripts/HallSettingTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a086SmqatFuoGu7j7NyGnh', 'HallSettingTrait');
// subpackages/l_hallSetting/Scripts/HallSettingTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HallSettingBtn_1 = require("./HallSettingBtn");
var HallSettingTrait = /** @class */ (function (_super) {
    __extends(HallSettingTrait, _super);
    function HallSettingTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallSettingTrait_1 = HallSettingTrait;
    HallSettingTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    HallSettingTrait.prototype.onHallVw_initBtns = function (t, e) {
        var n;
        this.createHallButton(null === (n = t.ins) || void 0 === n ? void 0 : n.node);
        e();
    };
    HallSettingTrait.prototype.onHallVw_updateUI = function (t, e) {
        e();
    };
    HallSettingTrait.prototype.createHallButton = function (t) {
        cc.isValid(t) && HallSettingBtn_1.default.createUI().then(function (e) {
            cc.isValid(e) && cc.isValid(t) && t.addChild(e);
        }).catch(function (t) {
            console.error("[" + HallSettingTrait_1.traitKey + "] 游戏内创建按钮失败:" + ((null == t ? void 0 : t.message) || "HallSettingBtn按钮加载失败"));
        });
    };
    var HallSettingTrait_1;
    HallSettingTrait.traitKey = "HallSetting";
    HallSettingTrait = HallSettingTrait_1 = __decorate([
        mj.trait,
        mj.class("HallSettingTrait")
    ], HallSettingTrait);
    return HallSettingTrait;
}(Trait_1.default));
exports.default = HallSettingTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhbGxTZXR0aW5nL1NjcmlwdHMvSGFsbFNldHRpbmdUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELG1EQUE4QztBQUc5QztJQUE4QyxvQ0FBSztJQUFuRDs7SUFvQkEsQ0FBQzt5QkFwQm9CLGdCQUFnQjtJQUVuQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNENBQWlCLEdBQWpCLFVBQWtCLENBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlFLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDRDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLHdCQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN6RCxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLGtCQUFnQixDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ2pJLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7SUFsQk0seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFEYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBb0JwQztJQUFELHVCQUFDO0NBcEJELEFBb0JDLENBcEI2QyxlQUFLLEdBb0JsRDtrQkFwQm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgSGFsbFNldHRpbmdCdG4gZnJvbSAnLi9IYWxsU2V0dGluZ0J0bic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhhbGxTZXR0aW5nVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbGxTZXR0aW5nVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSGFsbFNldHRpbmdcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uSGFsbFZ3X2luaXRCdG5zKHQsIGUpIHtcbiAgICB2YXIgbjtcbiAgICB0aGlzLmNyZWF0ZUhhbGxCdXR0b24obnVsbCA9PT0gKG4gPSB0LmlucykgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5ub2RlKTtcbiAgICBlKCk7XG4gIH1cbiAgb25IYWxsVndfdXBkYXRlVUkodCwgZSkge1xuICAgIGUoKTtcbiAgfVxuICBjcmVhdGVIYWxsQnV0dG9uKHQpIHtcbiAgICBjYy5pc1ZhbGlkKHQpICYmIEhhbGxTZXR0aW5nQnRuLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgY2MuaXNWYWxpZChlKSAmJiBjYy5pc1ZhbGlkKHQpICYmIHQuYWRkQ2hpbGQoZSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBIYWxsU2V0dGluZ1RyYWl0LnRyYWl0S2V5ICsgXCJdIOa4uOaIj+WGheWIm+W7uuaMiemSruWksei0pTpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIkhhbGxTZXR0aW5nQnRu5oyJ6ZKu5Yqg6L295aSx6LSlXCIpKTtcbiAgICB9KTtcbiAgfVxufSJdfQ==