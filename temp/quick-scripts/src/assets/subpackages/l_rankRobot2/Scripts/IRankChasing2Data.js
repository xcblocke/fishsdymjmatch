"use strict";
cc._RF.push(module, '156d8Q6bcBN3ZOoHyB9ODcI', 'IRankChasing2Data');
// subpackages/l_rankRobot2/Scripts/IRankChasing2Data.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultChasing2Config = void 0;
var getDefaultChasing2Config = function () {
    return {
        baseConfig: {
            botsNum: 50,
            gradCoef: 0.018
        },
        activeConfig: {
            expGamesDefault: 11,
            activeDaysCount: 2,
            expGamesActiveBase: 1.8,
            expGamesActiveOffset: 6.5
        },
        jumpConfig: {
            jumpCoef: 0.4,
            jumpOffsetX: 1,
            jumpOffsetY: 0.2
        },
        pointsConfig: {
            initPoints: {
                0: 4,
                2: 3,
                4: 3
            },
            addPointsTop: {
                2: 3,
                3: 2,
                4: 5,
                6: 3,
                8: 1
            },
            stagPoints: {
                0: 1,
                2: 1
            }
        },
        chasingConfig: {
            botChasingCount: 5,
            botChasingInterval: 4,
            chasingBotsMaxPoint: 6
        },
        timeConfig: {
            stagTimeInterval: 3600,
            stagTimeControl: 0.6,
            periodTime: 86400
        }
    };
};
exports.getDefaultChasing2Config = getDefaultChasing2Config;

cc._RF.pop();