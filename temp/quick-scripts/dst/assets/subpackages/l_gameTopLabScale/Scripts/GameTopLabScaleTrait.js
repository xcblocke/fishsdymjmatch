
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_gameTopLabScale/Scripts/GameTopLabScaleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f67093LcTZPwYvh0/309kG7', 'GameTopLabScaleTrait');
// subpackages/l_gameTopLabScale/Scripts/GameTopLabScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTopLabScaleTrait = /** @class */ (function (_super) {
    __extends(GameTopLabScaleTrait, _super);
    function GameTopLabScaleTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GameTopLabScaleTrait.prototype, "scale", {
        get: function () {
            var e;
            return null !== (e = this._traitData.scale) && void 0 !== e ? e : 1.15;
        },
        enumerable: false,
        configurable: true
    });
    GameTopLabScaleTrait.prototype.onMainGmVw_initLayers = function (e, t) {
        var r = e.ins;
        this.scaleTopLab(r);
        t();
    };
    GameTopLabScaleTrait.prototype.scaleTopLab = function (e) {
        cc.isValid(e) && cc.isValid(e.topRootNode) && this.scaleLabelRecursive(e.topRootNode);
    };
    GameTopLabScaleTrait.prototype.onScoreItem_getBaseScale = function (e, t) {
        var r;
        t({
            returnVal: (null !== (r = e.beforReturnVal) && void 0 !== r ? r : 1) * this.scale
        });
    };
    GameTopLabScaleTrait.prototype.scaleLabelRecursive = function (e) {
        var t, r;
        if (cc.isValid(e)) {
            e.getComponent(cc.Label) && e.setScale(e.scale * this.scale);
            try {
                for (var o = __values(e.children), n = o.next(); !n.done; n = o.next()) {
                    var i = n.value;
                    this.scaleLabelRecursive(i);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
    };
    GameTopLabScaleTrait.traitKey = "GameTopLabScale";
    GameTopLabScaleTrait = __decorate([
        mj.trait,
        mj.class("GameTopLabScaleTrait")
    ], GameTopLabScaleTrait);
    return GameTopLabScaleTrait;
}(Trait_1.default));
exports.default = GameTopLabScaleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2dhbWVUb3BMYWJTY2FsZS9TY3JpcHRzL0dhbWVUb3BMYWJTY2FsZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBMENBLENBQUM7SUF4Q0Msc0JBQUksdUNBQUs7YUFBVDtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3pFLENBQUM7OztPQUFBO0lBQ0Qsb0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELDBDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFDRCx1REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSztTQUNsRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0QsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3QjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxHQUFHO29CQUNGLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7YUFDSDtvQkFBUztnQkFDUixJQUFJO29CQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO3dCQUFTO29CQUNSLElBQUksQ0FBQzt3QkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUF4Q00sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQURqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBMEN4QztJQUFELDJCQUFDO0NBMUNELEFBMENDLENBMUNpRCxlQUFLLEdBMEN0RDtrQkExQ29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkdhbWVUb3BMYWJTY2FsZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVG9wTGFiU2NhbGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJHYW1lVG9wTGFiU2NhbGVcIjtcbiAgZ2V0IHNjYWxlKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IHRoaXMuX3RyYWl0RGF0YS5zY2FsZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDEuMTU7XG4gIH1cbiAgb25NYWluR21Wd19pbml0TGF5ZXJzKGUsIHQpIHtcbiAgICB2YXIgciA9IGUuaW5zO1xuICAgIHRoaXMuc2NhbGVUb3BMYWIocik7XG4gICAgdCgpO1xuICB9XG4gIHNjYWxlVG9wTGFiKGUpIHtcbiAgICBjYy5pc1ZhbGlkKGUpICYmIGNjLmlzVmFsaWQoZS50b3BSb290Tm9kZSkgJiYgdGhpcy5zY2FsZUxhYmVsUmVjdXJzaXZlKGUudG9wUm9vdE5vZGUpO1xuICB9XG4gIG9uU2NvcmVJdGVtX2dldEJhc2VTY2FsZShlLCB0KSB7XG4gICAgdmFyIHI7XG4gICAgdCh7XG4gICAgICByZXR1cm5WYWw6IChudWxsICE9PSAociA9IGUuYmVmb3JSZXR1cm5WYWwpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAxKSAqIHRoaXMuc2NhbGVcbiAgICB9KTtcbiAgfVxuICBzY2FsZUxhYmVsUmVjdXJzaXZlKGUpIHtcbiAgICB2YXIgdCwgcjtcbiAgICBpZiAoY2MuaXNWYWxpZChlKSkge1xuICAgICAgZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpICYmIGUuc2V0U2NhbGUoZS5zY2FsZSAqIHRoaXMuc2NhbGUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgbyA9IF9fdmFsdWVzKGUuY2hpbGRyZW4pLCBuID0gby5uZXh0KCk7ICFuLmRvbmU7IG4gPSBvLm5leHQoKSkge1xuICAgICAgICAgIHZhciBpID0gbi52YWx1ZTtcbiAgICAgICAgICB0aGlzLnNjYWxlTGFiZWxSZWN1cnNpdmUoaSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuICYmICFuLmRvbmUgJiYgKHIgPSBvLnJldHVybikgJiYgci5jYWxsKG8pO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19