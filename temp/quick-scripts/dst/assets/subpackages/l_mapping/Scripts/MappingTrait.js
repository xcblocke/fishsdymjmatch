
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mapping/Scripts/MappingTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92b46m4DQxIGIcDkEgGbGd+', 'MappingTrait');
// subpackages/l_mapping/Scripts/MappingTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var MappingTrait = /** @class */ (function (_super) {
    __extends(MappingTrait, _super);
    function MappingTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MappingTrait.prototype, "strategies", {
        get: function () {
            return this.traitData.strategies;
        },
        enumerable: false,
        configurable: true
    });
    MappingTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MappingTrait.prototype.onDCMgr_setMapSgy = function (t, e) {
        if (this.strategies) {
            t.args[0] = this.strategies;
            e({
                isBreak: true
            });
        }
        else
            e();
    };
    MappingTrait.traitKey = "Mapping";
    MappingTrait = __decorate([
        mj.trait,
        mj.class("MappingTrait")
    ], MappingTrait);
    return MappingTrait;
}(Trait_1.default));
exports.default = MappingTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hcHBpbmcvU2NyaXB0cy9NYXBwaW5nVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUEwQyxnQ0FBSztJQUEvQzs7SUFnQkEsQ0FBQztJQWRDLHNCQUFJLG9DQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBQ0QsNkJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHdDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzVCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWRNLHFCQUFRLEdBQUcsU0FBUyxDQUFDO0lBRFQsWUFBWTtRQUZoQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO09BQ0osWUFBWSxDQWdCaEM7SUFBRCxtQkFBQztDQWhCRCxBQWdCQyxDQWhCeUMsZUFBSyxHQWdCOUM7a0JBaEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTWFwcGluZ1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBwaW5nVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTWFwcGluZ1wiO1xuICBnZXQgc3RyYXRlZ2llcygpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuc3RyYXRlZ2llcztcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25EQ01ncl9zZXRNYXBTZ3kodCwgZSkge1xuICAgIGlmICh0aGlzLnN0cmF0ZWdpZXMpIHtcbiAgICAgIHQuYXJnc1swXSA9IHRoaXMuc3RyYXRlZ2llcztcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19