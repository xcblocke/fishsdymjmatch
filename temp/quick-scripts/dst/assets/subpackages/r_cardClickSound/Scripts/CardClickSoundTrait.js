
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_cardClickSound/Scripts/CardClickSoundTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98539ks2PhAAY8qRrlWZVDU', 'CardClickSoundTrait');
// subpackages/r_cardClickSound/Scripts/CardClickSoundTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var CardClickSoundTrait = /** @class */ (function (_super) {
    __extends(CardClickSoundTrait, _super);
    function CardClickSoundTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardClickSoundTrait_1 = CardClickSoundTrait;
    CardClickSoundTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    CardClickSoundTrait.prototype.onAudioMgr_playEff = function (t, r) {
        var o = t.args[0];
        o !== GameTypeEnums_1.EAudioID.Check1 && o !== GameTypeEnums_1.EAudioID.Uncheck || (t.args[0] = CardClickSoundTrait_1.REPLACEMENT_AUDIO_ID);
        r();
    };
    var CardClickSoundTrait_1;
    CardClickSoundTrait.traitKey = "CardClickSound";
    CardClickSoundTrait.REPLACEMENT_AUDIO_ID = 75;
    CardClickSoundTrait = CardClickSoundTrait_1 = __decorate([
        mj.trait,
        mj.class("CardClickSoundTrait")
    ], CardClickSoundTrait);
    return CardClickSoundTrait;
}(Trait_1.default));
exports.default = CardClickSoundTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NhcmRDbGlja1NvdW5kL1NjcmlwdHMvQ2FyZENsaWNrU291bmRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUFrRjtBQUdsRjtJQUFpRCx1Q0FBSztJQUF0RDs7SUFXQSxDQUFDOzRCQVhvQixtQkFBbUI7SUFHdEMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGdEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsS0FBSyx3QkFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssd0JBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLHFCQUFtQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDMUcsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDOztJQVRNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFDNUIsd0NBQW9CLEdBQUcsRUFBRSxDQUFDO0lBRmQsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQVd2QztJQUFELDBCQUFDO0NBWEQsQUFXQyxDQVhnRCxlQUFLLEdBV3JEO2tCQVhvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDYXJkQ2xpY2tTb3VuZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkQ2xpY2tTb3VuZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNhcmRDbGlja1NvdW5kXCI7XG4gIHN0YXRpYyBSRVBMQUNFTUVOVF9BVURJT19JRCA9IDc1O1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25BdWRpb01ncl9wbGF5RWZmKHQsIHIpIHtcbiAgICB2YXIgbyA9IHQuYXJnc1swXTtcbiAgICBvICE9PSBFQXVkaW9JRC5DaGVjazEgJiYgbyAhPT0gRUF1ZGlvSUQuVW5jaGVjayB8fCAodC5hcmdzWzBdID0gQ2FyZENsaWNrU291bmRUcmFpdC5SRVBMQUNFTUVOVF9BVURJT19JRCk7XG4gICAgcigpO1xuICB9XG59Il19