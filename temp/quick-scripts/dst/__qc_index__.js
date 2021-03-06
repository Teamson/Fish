
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/ExportLibs/AutoScroll');
require('./assets/ExportLibs/ExportCrl');
require('./assets/ExportLibs/ExportHttpUtils');
require('./assets/ExportLibs/ExportUtils');
require('./assets/ExportLibs/View/DrawUI');
require('./assets/ExportLibs/View/FinishGameUI');
require('./assets/ExportLibs/View/FriendGameUI');
require('./assets/ExportLibs/View/FullGameUI');
require('./assets/ExportLibs/View/RecommendUI');
require('./assets/ExportLibs/View/ScrollUI');
require('./assets/Scripts/Crl/GameLogic');
require('./assets/Scripts/Crl/GuideFinger');
require('./assets/Scripts/Crl/Level/Level1');
require('./assets/Scripts/Crl/Level/Level10');
require('./assets/Scripts/Crl/Level/Level11');
require('./assets/Scripts/Crl/Level/Level12');
require('./assets/Scripts/Crl/Level/Level13');
require('./assets/Scripts/Crl/Level/Level14');
require('./assets/Scripts/Crl/Level/Level15');
require('./assets/Scripts/Crl/Level/Level16');
require('./assets/Scripts/Crl/Level/Level17');
require('./assets/Scripts/Crl/Level/Level18');
require('./assets/Scripts/Crl/Level/Level19');
require('./assets/Scripts/Crl/Level/Level2');
require('./assets/Scripts/Crl/Level/Level20');
require('./assets/Scripts/Crl/Level/Level3');
require('./assets/Scripts/Crl/Level/Level4');
require('./assets/Scripts/Crl/Level/Level5');
require('./assets/Scripts/Crl/Level/Level6');
require('./assets/Scripts/Crl/Level/Level7');
require('./assets/Scripts/Crl/Level/Level8');
require('./assets/Scripts/Crl/Level/Level9');
require('./assets/Scripts/Crl/Level/LevelBase');
require('./assets/Scripts/Crl/Player');
require('./assets/Scripts/Crl/PlayerAni');
require('./assets/Scripts/Crl/Prop/Fan');
require('./assets/Scripts/Crl/Prop/HeadNode');
require('./assets/Scripts/Crl/Prop/Meat');
require('./assets/Scripts/Crl/Prop/Needle');
require('./assets/Scripts/Crl/Prop/Poison');
require('./assets/Scripts/Crl/Prop/RotateNeedle');
require('./assets/Scripts/Crl/Prop/SlideNeedle');
require('./assets/Scripts/Crl/Prop/Stone');
require('./assets/Scripts/Crl/Prop/ThreeNeedle');
require('./assets/Scripts/Crl/Sharp');
require('./assets/Scripts/Crl/SharpAni');
require('./assets/Scripts/Libs/PlayerDataMgr');
require('./assets/Scripts/Libs/ScaleLoop');
require('./assets/Scripts/Libs/TimeCountMgr');
require('./assets/Scripts/Libs/WxApi');
require('./assets/Scripts/Mod/AdMgr');
require('./assets/Scripts/Mod/HttpMgr');
require('./assets/Scripts/Mod/ShareMgr');
require('./assets/Scripts/Mod/SoundMgr');
require('./assets/Scripts/Mod/Utility');
require('./assets/Scripts/UI/DefeatUI');
require('./assets/Scripts/UI/FinishUI');
require('./assets/Scripts/UI/GameUI');
require('./assets/Scripts/UI/GetFishUI');
require('./assets/Scripts/UI/GetPowerUI');
require('./assets/Scripts/UI/GetTipsUI');
require('./assets/Scripts/UI/LoadingUI');
require('./assets/Scripts/UI/MadUI');
require('./assets/Scripts/UI/StartUI');
require('./assets/Scripts/UI/WeChatUI');

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