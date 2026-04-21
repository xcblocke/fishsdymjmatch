"use strict";
cc._RF.push(module, 'bd40cOwjlVBYZhMW4zSOZPZ', 'DyeingConfig');
// Scripts/DyeingConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DyeingConfig = void 0;
var CharacterGenerator_1 = require("./CharacterGenerator");
var IClassicExtractTypes_1 = require("./IClassicExtractTypes");
var a = new Map([[IClassicExtractTypes_1.EDifficultyType.Simple, {
            coordSelectionType: CharacterGenerator_1.ECoordSelectionType.SymmetricShuffle,
            charSelectionType: CharacterGenerator_1.ECharSelectionType.Random
        }], [IClassicExtractTypes_1.EDifficultyType.Medium, {
            coordSelectionType: CharacterGenerator_1.ECoordSelectionType.LongDistance,
            charSelectionType: CharacterGenerator_1.ECharSelectionType.PredCoord
        }], [IClassicExtractTypes_1.EDifficultyType.Difficult, {
            coordSelectionType: CharacterGenerator_1.ECoordSelectionType.AntiIntuitive,
            charSelectionType: CharacterGenerator_1.ECharSelectionType.PredTrigger
        }], [IClassicExtractTypes_1.EDifficultyType.Reward, {
            coordSelectionType: CharacterGenerator_1.ECoordSelectionType.Symmetric,
            charSelectionType: CharacterGenerator_1.ECharSelectionType.Random
        }]]);
var DyeingConfig = /** @class */ (function () {
    function DyeingConfig() {
    }
    DyeingConfig_1 = DyeingConfig;
    DyeingConfig.getInstance = function () {
        DyeingConfig_1._instance || (DyeingConfig_1._instance = new DyeingConfig_1());
        return DyeingConfig_1._instance;
    };
    DyeingConfig.prototype.getDyeingConfig = function (e) {
        return a.get(e) || a.get(IClassicExtractTypes_1.EDifficultyType.Medium);
    };
    var DyeingConfig_1;
    DyeingConfig = DyeingConfig_1 = __decorate([
        mj.class("DyeingConfig")
    ], DyeingConfig);
    return DyeingConfig;
}());
exports.DyeingConfig = DyeingConfig;

cc._RF.pop();