
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_initCapRU/Scripts/InitCapRUTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b5beeMI31OypFyCO064HzE', 'InitCapRUTrait');
// subpackages/l_initCapRU/Scripts/InitCapRUTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var InitCapRUTrait = /** @class */ (function (_super) {
    __extends(InitCapRUTrait, _super);
    function InitCapRUTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InitCapRUTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    InitCapRUTrait.prototype.onExtNormLv_getInitCapRU = function (t, r) {
        var e;
        if (this.checkGameMode()) {
            var i = Math.floor(t.args[0] / 2), n = t.args[1], o = this._traitData.capabilityValues;
            if (null != o) {
                var a = -1 === o ? (null === (e = n.CapabilityDimensionMedian) || void 0 === e ? void 0 : e[i]) || n.MinDiffulty : o;
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: a
                });
            }
            else
                r();
        }
        else
            r();
    };
    InitCapRUTrait.traitKey = "InitCapRU";
    InitCapRUTrait = __decorate([
        mj.trait,
        mj.class("InitCapRUTrait")
    ], InitCapRUTrait);
    return InitCapRUTrait;
}(ExtractTrait_1.default));
exports.default = InitCapRUTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2luaXRDYXBSVS9TY3JpcHRzL0luaXRDYXBSVVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsOEVBQXdGO0FBR3hGO0lBQTRDLGtDQUFZO0lBQXhEOztJQXFCQSxDQUFDO0lBbkJDLCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxpREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQy9CLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckgsQ0FBQyxDQUFDO29CQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO29CQUMxQyxPQUFPLEVBQUUsSUFBSTtvQkFDYixTQUFTLEVBQUUsQ0FBQztpQkFDYixDQUFDLENBQUM7YUFDSjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFuQk0sdUJBQVEsR0FBRyxXQUFXLENBQUM7SUFEWCxjQUFjO1FBRmxDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0FxQmxDO0lBQUQscUJBQUM7Q0FyQkQsQUFxQkMsQ0FyQjJDLHNCQUFZLEdBcUJ2RDtrQkFyQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSW5pdENhcFJVVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRDYXBSVVRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJJbml0Q2FwUlVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uRXh0Tm9ybUx2X2dldEluaXRDYXBSVSh0LCByKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgaSA9IE1hdGguZmxvb3IodC5hcmdzWzBdIC8gMiksXG4gICAgICAgIG4gPSB0LmFyZ3NbMV0sXG4gICAgICAgIG8gPSB0aGlzLl90cmFpdERhdGEuY2FwYWJpbGl0eVZhbHVlcztcbiAgICAgIGlmIChudWxsICE9IG8pIHtcbiAgICAgICAgdmFyIGEgPSAtMSA9PT0gbyA/IChudWxsID09PSAoZSA9IG4uQ2FwYWJpbGl0eURpbWVuc2lvbk1lZGlhbikgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZVtpXSkgfHwgbi5NaW5EaWZmdWx0eSA6IG87XG4gICAgICAgIHIoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDogYVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByKCk7XG4gICAgfSBlbHNlIHIoKTtcbiAgfVxufSJdfQ==