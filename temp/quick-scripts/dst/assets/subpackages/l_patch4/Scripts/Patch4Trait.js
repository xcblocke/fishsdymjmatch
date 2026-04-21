
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_patch4/Scripts/Patch4Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6092VAY31AQrCTx2G3ix7L', 'Patch4Trait');
// subpackages/l_patch4/Scripts/Patch4Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Patch4Trait = /** @class */ (function (_super) {
    __extends(Patch4Trait, _super);
    function Patch4Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Patch4Trait.prototype.onLoad = function () {
        var r, e;
        _super.prototype.onLoad.call(this);
        this._config = {
            isOpen: null === (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.isOpen) || void 0 === e || e
        };
    };
    Patch4Trait.prototype.onExtNormLv_isOpenPatch4 = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.isOpen;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    Patch4Trait.traitKey = "Patch4";
    Patch4Trait = __decorate([
        mj.trait,
        mj.class("Patch4Trait")
    ], Patch4Trait);
    return Patch4Trait;
}(ExtractTrait_1.default));
exports.default = Patch4Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3BhdGNoNC9TY3JpcHRzL1BhdGNoNFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsOEVBQXdGO0FBR3hGO0lBQXlDLCtCQUFZO0lBQXJEOztJQW1CQSxDQUFDO0lBakJDLDRCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixNQUFNLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQy9HLENBQUM7SUFDSixDQUFDO0lBQ0QsOENBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzVCLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFqQk0sb0JBQVEsR0FBRyxRQUFRLENBQUM7SUFEUixXQUFXO1FBRi9CLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7T0FDSCxXQUFXLENBbUIvQjtJQUFELGtCQUFDO0NBbkJELEFBbUJDLENBbkJ3QyxzQkFBWSxHQW1CcEQ7a0JBbkJvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlBhdGNoNFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRjaDRUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUGF0Y2g0XCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgciwgZTtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICBpc09wZW46IG51bGwgPT09IChlID0gbnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuaXNPcGVuKSB8fCB2b2lkIDAgPT09IGUgfHwgZVxuICAgIH07XG4gIH1cbiAgb25FeHROb3JtTHZfaXNPcGVuUGF0Y2g0KHQsIHIpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fY29uZmlnLmlzT3BlbjtcbiAgICAgIHIoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHIoKTtcbiAgfVxufSJdfQ==