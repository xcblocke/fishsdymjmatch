
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_setCardBrightSatura/Scripts/SetCardBrightSaturaTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcf5a4GeSBIvaWQusVbR/Hx', 'SetCardBrightSaturaTrait');
// subpackages/l_setCardBrightSatura/Scripts/SetCardBrightSaturaTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BrightSaturaContrastUniform_1 = require("../../../Scripts/BrightSaturaContrastUniform");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var SetCardBrightSaturaTrait = /** @class */ (function (_super) {
    __extends(SetCardBrightSaturaTrait, _super);
    function SetCardBrightSaturaTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._s = 0;
        _this._v = -3;
        return _this;
    }
    SetCardBrightSaturaTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        var e = (null === (r = this._traitData) || void 0 === r ? void 0 : r.config) || {};
        this._s = "number" == typeof e.S ? e.S : this._s;
        this._v = "number" == typeof e.V ? e.V : this._v;
    };
    SetCardBrightSaturaTrait.prototype.onBaseTileNode_crtImgCardBg = function (t, r) {
        var e = t.args[0];
        this.directSetHsv(e, this._v, this._s);
        r();
    };
    SetCardBrightSaturaTrait.prototype.onBaseTileNode_crtImgCard = function (t, r) {
        var e = t.args[0];
        this.directSetHsv(e, this._v, this._s);
        r();
    };
    SetCardBrightSaturaTrait.prototype.directSetHsv = function (t, r, e) {
        var o = t.color, i = CommonUtils_1.RGB2HSV(o.r, o.g, o.b), n = i.h, a = i.s, s = i.v, f = GameUtils_1.default.clamp(s + 0.01 * r, 0, 1), p = GameUtils_1.default.clamp(a + 0.01 * e, 0, 1), l = CommonUtils_1.HSV2RGB(n, p, f);
        t.color = new cc.Color(l.r, l.g, l.b, o.a);
    };
    SetCardBrightSaturaTrait.prototype.ensureAndSetBrightSatura = function (t, r, e) {
        if (cc.isValid(t)) {
            var o = t.getComponent(BrightSaturaContrastUniform_1.default);
            o || (o = t.addComponent(BrightSaturaContrastUniform_1.default));
            if (o) {
                o.brightness = r;
                o.saturation = e;
                o.constrast = 1;
            }
        }
    };
    SetCardBrightSaturaTrait.traitKey = "SetCardBrightSatura";
    SetCardBrightSaturaTrait = __decorate([
        mj.trait,
        mj.class("SetCardBrightSaturaTrait")
    ], SetCardBrightSaturaTrait);
    return SetCardBrightSaturaTrait;
}(Trait_1.default));
exports.default = SetCardBrightSaturaTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldENhcmRCcmlnaHRTYXR1cmEvU2NyaXB0cy9TZXRDYXJkQnJpZ2h0U2F0dXJhVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw0RkFBdUY7QUFDdkYsNEVBQWdGO0FBQ2hGLDRFQUF1RTtBQUd2RTtJQUFzRCw0Q0FBSztJQUEzRDtRQUFBLHFFQTJDQztRQTFDQyxRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1AsUUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDOztJQXlDVixDQUFDO0lBdkNDLHlDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkYsSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsOERBQTJCLEdBQTNCLFVBQTRCLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsNERBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsK0NBQVksR0FBWixVQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNiLENBQUMsR0FBRyxxQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzFCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZDLENBQUMsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZDLENBQUMsR0FBRyxxQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCwyREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHFDQUEyQixDQUFDLENBQUM7WUFDcEQsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMscUNBQTJCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxFQUFFO2dCQUNMLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDakI7U0FDRjtJQUNILENBQUM7SUF2Q00saUNBQVEsR0FBRyxxQkFBcUIsQ0FBQztJQUhyQix3QkFBd0I7UUFGNUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDO09BQ2hCLHdCQUF3QixDQTJDNUM7SUFBRCwrQkFBQztDQTNDRCxBQTJDQyxDQTNDcUQsZUFBSyxHQTJDMUQ7a0JBM0NvQix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEJyaWdodFNhdHVyYUNvbnRyYXN0VW5pZm9ybSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0JyaWdodFNhdHVyYUNvbnRyYXN0VW5pZm9ybSc7XG5pbXBvcnQgeyBSR0IySFNWLCBIU1YyUkdCIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdXRpbHMvQ29tbW9uVXRpbHMnO1xuaW1wb3J0IEdhbWVVdGlscyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2V0Q2FyZEJyaWdodFNhdHVyYVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXRDYXJkQnJpZ2h0U2F0dXJhVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9zID0gMDtcbiAgX3YgPSAtMztcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTZXRDYXJkQnJpZ2h0U2F0dXJhXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgcjtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgZSA9IChudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5jb25maWcpIHx8IHt9O1xuICAgIHRoaXMuX3MgPSBcIm51bWJlclwiID09IHR5cGVvZiBlLlMgPyBlLlMgOiB0aGlzLl9zO1xuICAgIHRoaXMuX3YgPSBcIm51bWJlclwiID09IHR5cGVvZiBlLlYgPyBlLlYgOiB0aGlzLl92O1xuICB9XG4gIG9uQmFzZVRpbGVOb2RlX2NydEltZ0NhcmRCZyh0LCByKSB7XG4gICAgdmFyIGUgPSB0LmFyZ3NbMF07XG4gICAgdGhpcy5kaXJlY3RTZXRIc3YoZSwgdGhpcy5fdiwgdGhpcy5fcyk7XG4gICAgcigpO1xuICB9XG4gIG9uQmFzZVRpbGVOb2RlX2NydEltZ0NhcmQodCwgcikge1xuICAgIHZhciBlID0gdC5hcmdzWzBdO1xuICAgIHRoaXMuZGlyZWN0U2V0SHN2KGUsIHRoaXMuX3YsIHRoaXMuX3MpO1xuICAgIHIoKTtcbiAgfVxuICBkaXJlY3RTZXRIc3YodCwgciwgZSkge1xuICAgIHZhciBvID0gdC5jb2xvcixcbiAgICAgIGkgPSBSR0IySFNWKG8uciwgby5nLCBvLmIpLFxuICAgICAgbiA9IGkuaCxcbiAgICAgIGEgPSBpLnMsXG4gICAgICBzID0gaS52LFxuICAgICAgZiA9IEdhbWVVdGlscy5jbGFtcChzICsgMC4wMSAqIHIsIDAsIDEpLFxuICAgICAgcCA9IEdhbWVVdGlscy5jbGFtcChhICsgMC4wMSAqIGUsIDAsIDEpLFxuICAgICAgbCA9IEhTVjJSR0IobiwgcCwgZik7XG4gICAgdC5jb2xvciA9IG5ldyBjYy5Db2xvcihsLnIsIGwuZywgbC5iLCBvLmEpO1xuICB9XG4gIGVuc3VyZUFuZFNldEJyaWdodFNhdHVyYSh0LCByLCBlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIHZhciBvID0gdC5nZXRDb21wb25lbnQoQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtKTtcbiAgICAgIG8gfHwgKG8gPSB0LmFkZENvbXBvbmVudChCcmlnaHRTYXR1cmFDb250cmFzdFVuaWZvcm0pKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIG8uYnJpZ2h0bmVzcyA9IHI7XG4gICAgICAgIG8uc2F0dXJhdGlvbiA9IGU7XG4gICAgICAgIG8uY29uc3RyYXN0ID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=