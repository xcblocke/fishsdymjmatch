
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_fail/Scripts/FailTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d771UHYi5MSpxVy04I00N1', 'FailTrait');
// subpackages/l_fail/Scripts/FailTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var FailTrait = /** @class */ (function (_super) {
    __extends(FailTrait, _super);
    function FailTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FailTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FailTrait.prototype.onFailBhv_start = function (e, t) {
        var i, o = e.ins, a = null === (i = e.args[0].data) || void 0 === i ? void 0 : i.isGM;
        if (!o || !o.context || a || o.context.getTileMapObject().checkIsDead([])) {
            var n = e.args[0];
            if (n && n.data) {
                var r = n.data.shuffleNum || 0;
                this.showFailView(r);
                t();
            }
            else
                t();
        }
        else
            t();
    };
    FailTrait.prototype.showFailView = function (e) {
        ControllerManager_1.default.getInstance().pushViewByController("FailController", {
            shuffleNum: e
        });
    };
    FailTrait.traitKey = "Fail";
    FailTrait = __decorate([
        mj.trait,
        mj.class("FailTrait")
    ], FailTrait);
    return FailTrait;
}(Trait_1.default));
exports.default = FailTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhaWwvU2NyaXB0cy9GYWlsVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCwwRkFBcUY7QUFHckY7SUFBdUMsNkJBQUs7SUFBNUM7O0lBdUJBLENBQUM7SUFyQkMsMEJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELG1DQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdEUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsQ0FBQyxFQUFFLENBQUM7YUFDTDs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxnQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixFQUFFO1lBQ3JFLFVBQVUsRUFBRSxDQUFDO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXJCTSxrQkFBUSxHQUFHLE1BQU0sQ0FBQztJQUROLFNBQVM7UUFGN0IsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztPQUNELFNBQVMsQ0F1QjdCO0lBQUQsZ0JBQUM7Q0F2QkQsQUF1QkMsQ0F2QnNDLGVBQUssR0F1QjNDO2tCQXZCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZhaWxUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFpbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkZhaWxcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uRmFpbEJodl9zdGFydChlLCB0KSB7XG4gICAgdmFyIGksXG4gICAgICBvID0gZS5pbnMsXG4gICAgICBhID0gbnVsbCA9PT0gKGkgPSBlLmFyZ3NbMF0uZGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5pc0dNO1xuICAgIGlmICghbyB8fCAhby5jb250ZXh0IHx8IGEgfHwgby5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS5jaGVja0lzRGVhZChbXSkpIHtcbiAgICAgIHZhciBuID0gZS5hcmdzWzBdO1xuICAgICAgaWYgKG4gJiYgbi5kYXRhKSB7XG4gICAgICAgIHZhciByID0gbi5kYXRhLnNodWZmbGVOdW0gfHwgMDtcbiAgICAgICAgdGhpcy5zaG93RmFpbFZpZXcocik7XG4gICAgICAgIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBzaG93RmFpbFZpZXcoZSkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJGYWlsQ29udHJvbGxlclwiLCB7XG4gICAgICBzaHVmZmxlTnVtOiBlXG4gICAgfSk7XG4gIH1cbn0iXX0=