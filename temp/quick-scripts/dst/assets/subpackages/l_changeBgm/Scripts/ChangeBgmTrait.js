
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeBgm/Scripts/ChangeBgmTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89b34RNLoNPno8mn//W/d/t', 'ChangeBgmTrait');
// subpackages/l_changeBgm/Scripts/ChangeBgmTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EChangeBgmType = exports.EChangeBgmId = void 0;
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var EChangeBgmId;
(function (EChangeBgmId) {
    EChangeBgmId[EChangeBgmId["WhiteNoise"] = 55] = "WhiteNoise";
    EChangeBgmId[EChangeBgmId["OldBlock"] = 56] = "OldBlock";
})(EChangeBgmId = exports.EChangeBgmId || (exports.EChangeBgmId = {}));
var EChangeBgmType;
(function (EChangeBgmType) {
    EChangeBgmType[EChangeBgmType["WhiteNoise"] = 1] = "WhiteNoise";
    EChangeBgmType[EChangeBgmType["OldBlock"] = 2] = "OldBlock";
})(EChangeBgmType = exports.EChangeBgmType || (exports.EChangeBgmType = {}));
var ChangeBgmTrait = /** @class */ (function (_super) {
    __extends(ChangeBgmTrait, _super);
    function ChangeBgmTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._type = 0;
        return _this;
    }
    ChangeBgmTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._type = this.traitData.type;
    };
    ChangeBgmTrait.prototype.onAudioMgr_playBGM = function (t, e) {
        if (t.args && 0 !== t.args.length) {
            var r = t.args[0];
            if (r === GameTypeEnums_1.EAudioID.Bgm) {
                if (this._type === EChangeBgmType.WhiteNoise) {
                    r = EChangeBgmId.WhiteNoise;
                }
                else {
                    this._type === EChangeBgmType.OldBlock && (r = EChangeBgmId.OldBlock);
                }
                t.args[0] = r;
                e();
            }
            else
                e();
        }
        else
            e();
    };
    ChangeBgmTrait.traitKey = "ChangeBgm";
    ChangeBgmTrait = __decorate([
        mj.trait,
        mj.class("ChangeBgmTrait")
    ], ChangeBgmTrait);
    return ChangeBgmTrait;
}(Trait_1.default));
exports.default = ChangeBgmTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZUJnbS9TY3JpcHRzL0NoYW5nZUJnbVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUFrRjtBQUNsRixJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsNERBQWUsQ0FBQTtJQUNmLHdEQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFHdkI7QUFDRCxJQUFZLGNBR1g7QUFIRCxXQUFZLGNBQWM7SUFDeEIsK0RBQWMsQ0FBQTtJQUNkLDJEQUFZLENBQUE7QUFDZCxDQUFDLEVBSFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFHekI7QUFHRDtJQUE0QyxrQ0FBSztJQUFqRDtRQUFBLHFFQXFCQztRQXBCQyxXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQW9CWixDQUFDO0lBbEJDLCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUNELDJDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssd0JBQVEsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxjQUFjLENBQUMsVUFBVSxFQUFFO29CQUM1QyxDQUFDLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztpQkFDN0I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssS0FBSyxjQUFjLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdkU7Z0JBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxFQUFFLENBQUM7YUFDTDs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFsQk0sdUJBQVEsR0FBRyxXQUFXLENBQUM7SUFGWCxjQUFjO1FBRmxDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0FxQmxDO0lBQUQscUJBQUM7Q0FyQkQsQUFxQkMsQ0FyQjJDLGVBQUssR0FxQmhEO2tCQXJCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5leHBvcnQgZW51bSBFQ2hhbmdlQmdtSWQge1xuICBXaGl0ZU5vaXNlID0gNTUsXG4gIE9sZEJsb2NrID0gNTYsXG59XG5leHBvcnQgZW51bSBFQ2hhbmdlQmdtVHlwZSB7XG4gIFdoaXRlTm9pc2UgPSAxLFxuICBPbGRCbG9jayA9IDIsXG59XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNoYW5nZUJnbVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VCZ21UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3R5cGUgPSAwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNoYW5nZUJnbVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fdHlwZSA9IHRoaXMudHJhaXREYXRhLnR5cGU7XG4gIH1cbiAgb25BdWRpb01ncl9wbGF5QkdNKHQsIGUpIHtcbiAgICBpZiAodC5hcmdzICYmIDAgIT09IHQuYXJncy5sZW5ndGgpIHtcbiAgICAgIHZhciByID0gdC5hcmdzWzBdO1xuICAgICAgaWYgKHIgPT09IEVBdWRpb0lELkJnbSkge1xuICAgICAgICBpZiAodGhpcy5fdHlwZSA9PT0gRUNoYW5nZUJnbVR5cGUuV2hpdGVOb2lzZSkge1xuICAgICAgICAgIHIgPSBFQ2hhbmdlQmdtSWQuV2hpdGVOb2lzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl90eXBlID09PSBFQ2hhbmdlQmdtVHlwZS5PbGRCbG9jayAmJiAociA9IEVDaGFuZ2VCZ21JZC5PbGRCbG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgdC5hcmdzWzBdID0gcjtcbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19