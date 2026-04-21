
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_setBgBrightSatura/Scripts/SetBgBrightSaturaTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f7614kYXRNcJPMeAT81wnS', 'SetBgBrightSaturaTrait');
// subpackages/l_setBgBrightSatura/Scripts/SetBgBrightSaturaTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BrightSaturaContrastUniform_1 = require("../../../Scripts/BrightSaturaContrastUniform");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var SetBgBrightSaturaTrait = /** @class */ (function (_super) {
    __extends(SetBgBrightSaturaTrait, _super);
    function SetBgBrightSaturaTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._s = 0;
        _this._v = -10;
        return _this;
    }
    SetBgBrightSaturaTrait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        var e = (null === (r = this._traitData) || void 0 === r ? void 0 : r.config) || {};
        this._s = "number" == typeof e.S ? e.S : this._s;
        this._v = "number" == typeof e.V ? e.V : this._v;
    };
    SetBgBrightSaturaTrait.prototype.onMainGmVw_initLayers = function (t, r) {
        var e = t.ins.node.getChildByName("bg");
        this.directSetHsv(e, this._v, this._s);
        r();
    };
    SetBgBrightSaturaTrait.prototype.onTile2GmVw_initLayers = function (t, r) {
        var e = t.ins.node.getChildByName("bg");
        this.directSetHsv(e, this._v, this._s);
        r();
    };
    SetBgBrightSaturaTrait.prototype.directSetHsv = function (t, r, e) {
        var o = t.color, i = CommonUtils_1.RGB2HSV(o.r, o.g, o.b), n = i.h, a = i.s, s = i.v, f = GameUtils_1.default.clamp(s + 0.01 * r, 0, 1), p = GameUtils_1.default.clamp(a + 0.01 * e, 0, 1), l = CommonUtils_1.HSV2RGB(n, p, f);
        t.color = new cc.Color(l.r, l.g, l.b, o.a);
    };
    SetBgBrightSaturaTrait.prototype.ensureAndSetBrightSatura = function (t, r, e) {
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
    SetBgBrightSaturaTrait.traitKey = "SetBgBrightSatura";
    SetBgBrightSaturaTrait = __decorate([
        mj.trait,
        mj.class("SetBgBrightSaturaTrait")
    ], SetBgBrightSaturaTrait);
    return SetBgBrightSaturaTrait;
}(Trait_1.default));
exports.default = SetBgBrightSaturaTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldEJnQnJpZ2h0U2F0dXJhL1NjcmlwdHMvU2V0QmdCcmlnaHRTYXR1cmFUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDRGQUF1RjtBQUN2Riw0RUFBZ0Y7QUFDaEYsNEVBQXVFO0FBR3ZFO0lBQW9ELDBDQUFLO0lBQXpEO1FBQUEscUVBMkNDO1FBMUNDLFFBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxRQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7O0lBeUNYLENBQUM7SUF2Q0MsdUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFDRCxzREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELHVEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsNkNBQVksR0FBWixVQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNiLENBQUMsR0FBRyxxQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzFCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNQLENBQUMsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZDLENBQUMsR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZDLENBQUMsR0FBRyxxQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCx5REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHFDQUEyQixDQUFDLENBQUM7WUFDcEQsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMscUNBQTJCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxFQUFFO2dCQUNMLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDakIsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDakI7U0FDRjtJQUNILENBQUM7SUF2Q00sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUhuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBMkMxQztJQUFELDZCQUFDO0NBM0NELEFBMkNDLENBM0NtRCxlQUFLLEdBMkN4RDtrQkEzQ29CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtJztcbmltcG9ydCB7IFJHQjJIU1YsIEhTVjJSR0IgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJTZXRCZ0JyaWdodFNhdHVyYVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXRCZ0JyaWdodFNhdHVyYVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfcyA9IDA7XG4gIF92ID0gLTEwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlNldEJnQnJpZ2h0U2F0dXJhXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgcjtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB2YXIgZSA9IChudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5jb25maWcpIHx8IHt9O1xuICAgIHRoaXMuX3MgPSBcIm51bWJlclwiID09IHR5cGVvZiBlLlMgPyBlLlMgOiB0aGlzLl9zO1xuICAgIHRoaXMuX3YgPSBcIm51bWJlclwiID09IHR5cGVvZiBlLlYgPyBlLlYgOiB0aGlzLl92O1xuICB9XG4gIG9uTWFpbkdtVndfaW5pdExheWVycyh0LCByKSB7XG4gICAgdmFyIGUgPSB0Lmlucy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XG4gICAgdGhpcy5kaXJlY3RTZXRIc3YoZSwgdGhpcy5fdiwgdGhpcy5fcyk7XG4gICAgcigpO1xuICB9XG4gIG9uVGlsZTJHbVZ3X2luaXRMYXllcnModCwgcikge1xuICAgIHZhciBlID0gdC5pbnMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xuICAgIHRoaXMuZGlyZWN0U2V0SHN2KGUsIHRoaXMuX3YsIHRoaXMuX3MpO1xuICAgIHIoKTtcbiAgfVxuICBkaXJlY3RTZXRIc3YodCwgciwgZSkge1xuICAgIHZhciBvID0gdC5jb2xvcixcbiAgICAgIGkgPSBSR0IySFNWKG8uciwgby5nLCBvLmIpLFxuICAgICAgbiA9IGkuaCxcbiAgICAgIGEgPSBpLnMsXG4gICAgICBzID0gaS52LFxuICAgICAgZiA9IEdhbWVVdGlscy5jbGFtcChzICsgMC4wMSAqIHIsIDAsIDEpLFxuICAgICAgcCA9IEdhbWVVdGlscy5jbGFtcChhICsgMC4wMSAqIGUsIDAsIDEpLFxuICAgICAgbCA9IEhTVjJSR0IobiwgcCwgZik7XG4gICAgdC5jb2xvciA9IG5ldyBjYy5Db2xvcihsLnIsIGwuZywgbC5iLCBvLmEpO1xuICB9XG4gIGVuc3VyZUFuZFNldEJyaWdodFNhdHVyYSh0LCByLCBlKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodCkpIHtcbiAgICAgIHZhciBvID0gdC5nZXRDb21wb25lbnQoQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtKTtcbiAgICAgIG8gfHwgKG8gPSB0LmFkZENvbXBvbmVudChCcmlnaHRTYXR1cmFDb250cmFzdFVuaWZvcm0pKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIG8uYnJpZ2h0bmVzcyA9IHI7XG4gICAgICAgIG8uc2F0dXJhdGlvbiA9IGU7XG4gICAgICAgIG8uY29uc3RyYXN0ID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=