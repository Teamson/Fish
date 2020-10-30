
(function () {
var scripts = [{"deps":{"./assets/ExportLibs/ExportCrl":7,"./assets/ExportLibs/ExportUtils":19,"./assets/ExportLibs/AutoScroll":18,"./assets/ExportLibs/View/FinishGameUI":4,"./assets/ExportLibs/View/FriendGameUI":15,"./assets/ExportLibs/View/FullGameUI":13,"./assets/ExportLibs/View/RecommendUI":20,"./assets/ExportLibs/View/ScrollUI":17,"./assets/ExportLibs/View/DrawUI":21,"./assets/ExportLibs/ExportHttpUtils":14,"./assets/Scripts/Crl/Player":8,"./assets/Scripts/Crl/PlayerAni":16,"./assets/Scripts/Crl/Sharp":22,"./assets/Scripts/Crl/SharpAni":23,"./assets/Scripts/Crl/GameLogic":25,"./assets/Scripts/Crl/Level/Level10":59,"./assets/Scripts/Crl/Level/Level11":9,"./assets/Scripts/Crl/Level/Level12":58,"./assets/Scripts/Crl/Level/Level13":60,"./assets/Scripts/Crl/Level/Level14":62,"./assets/Scripts/Crl/Level/Level15":63,"./assets/Scripts/Crl/Level/Level16":61,"./assets/Scripts/Crl/Level/Level17":64,"./assets/Scripts/Crl/Level/Level18":65,"./assets/Scripts/Crl/Level/Level19":10,"./assets/Scripts/Crl/Level/Level2":24,"./assets/Scripts/Crl/Level/Level20":1,"./assets/Scripts/Crl/Level/Level3":26,"./assets/Scripts/Crl/Level/Level4":5,"./assets/Scripts/Crl/Level/Level5":27,"./assets/Scripts/Crl/Level/Level6":28,"./assets/Scripts/Crl/Level/Level8":30,"./assets/Scripts/Crl/Level/Level7":6,"./assets/Scripts/Crl/Level/Level9":29,"./assets/Scripts/Crl/Level/LevelBase":34,"./assets/Scripts/Crl/Level/Level1":32,"./assets/Scripts/Crl/Prop/HeadNode":31,"./assets/Scripts/Crl/Prop/Meat":11,"./assets/Scripts/Crl/Prop/Needle":36,"./assets/Scripts/Crl/Prop/Poison":37,"./assets/Scripts/Crl/Prop/RotateNeedle":33,"./assets/Scripts/Crl/Prop/SlideNeedle":38,"./assets/Scripts/Crl/Prop/ThreeNeedle":39,"./assets/Scripts/Crl/Prop/Stone":42,"./assets/Scripts/Crl/Prop/Fan":40,"./assets/Scripts/Libs/ScaleLoop":35,"./assets/Scripts/Libs/TimeCountMgr":41,"./assets/Scripts/Libs/WxApi":2,"./assets/Scripts/Libs/PlayerDataMgr":43,"./assets/Scripts/Mod/HttpMgr":44,"./assets/Scripts/Mod/ShareMgr":12,"./assets/Scripts/Mod/SoundMgr":46,"./assets/Scripts/Mod/Utility":45,"./assets/Scripts/Mod/AdMgr":47,"./assets/Scripts/UI/FinishUI":49,"./assets/Scripts/UI/GameUI":48,"./assets/Scripts/UI/GetPowerUI":50,"./assets/Scripts/UI/GetFishUI":51,"./assets/Scripts/UI/GetTipsUI":52,"./assets/Scripts/UI/LoadingUI":55,"./assets/Scripts/UI/MadUI":54,"./assets/Scripts/UI/StartUI":3,"./assets/Scripts/UI/WeChatUI":56,"./assets/Scripts/UI/DefeatUI":57,"./assets/Scripts/Crl/GuideFinger":53},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Mod/Utility":45,"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level20.js"},{"deps":{"./PlayerDataMgr":43,"../../ExportLibs/ExportUtils":19,"../Mod/AdMgr":47},"path":"preview-scripts/assets/Scripts/Libs/WxApi.js"},{"deps":{"./MadUI":54,"../../ExportLibs/ExportUtils":19,"../Libs/TimeCountMgr":41,"../Libs/WxApi":2,"../Libs/PlayerDataMgr":43,"../Mod/AdMgr":47,"../Mod/Utility":45,"../Mod/ShareMgr":12},"path":"preview-scripts/assets/Scripts/UI/StartUI.js"},{"deps":{"../ExportUtils":19,"../../Scripts/Mod/AdMgr":47,"../../Scripts/Mod/Utility":45,"../../Scripts/Libs/WxApi":2},"path":"preview-scripts/assets/ExportLibs/View/FinishGameUI.js"},{"deps":{"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level4.js"},{"deps":{"../Prop/Stone":42,"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level7.js"},{"deps":{},"path":"preview-scripts/assets/ExportLibs/ExportCrl.js"},{"deps":{"./Level/LevelBase":34,"./PlayerAni":16},"path":"preview-scripts/assets/Scripts/Crl/Player.js"},{"deps":{"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level11.js"},{"deps":{"../Sharp":22,"../../Mod/Utility":45,"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level19.js"},{"deps":{"../../Mod/Utility":45,"../Level/LevelBase":34,"../Player":8},"path":"preview-scripts/assets/Scripts/Crl/Prop/Meat.js"},{"deps":{"../Libs/WxApi":2,"../../ExportLibs/ExportUtils":19},"path":"preview-scripts/assets/Scripts/Mod/ShareMgr.js"},{"deps":{"../ExportUtils":19,"../../Scripts/Mod/Utility":45,"../../Scripts/Libs/WxApi":2,"../../Scripts/Mod/AdMgr":47,"../../Scripts/Libs/PlayerDataMgr":43},"path":"preview-scripts/assets/ExportLibs/View/FullGameUI.js"},{"deps":{},"path":"preview-scripts/assets/ExportLibs/ExportHttpUtils.js"},{"deps":{"../ExportUtils":19,"../../Scripts/Libs/WxApi":2,"../../Scripts/Mod/AdMgr":47},"path":"preview-scripts/assets/ExportLibs/View/FriendGameUI.js"},{"deps":{"../Libs/PlayerDataMgr":43},"path":"preview-scripts/assets/Scripts/Crl/PlayerAni.js"},{"deps":{"../ExportUtils":19,"../../Scripts/Libs/WxApi":2,"../../Scripts/Mod/AdMgr":47},"path":"preview-scripts/assets/ExportLibs/View/ScrollUI.js"},{"deps":{},"path":"preview-scripts/assets/ExportLibs/AutoScroll.js"},{"deps":{"./ExportHttpUtils":14,"./ExportCrl":7,"../Scripts/Libs/WxApi":2},"path":"preview-scripts/assets/ExportLibs/ExportUtils.js"},{"deps":{"../ExportUtils":19,"../../Scripts/Libs/WxApi":2,"../../Scripts/Mod/AdMgr":47,"../../Scripts/Libs/PlayerDataMgr":43},"path":"preview-scripts/assets/ExportLibs/View/RecommendUI.js"},{"deps":{"../ExportUtils":19,"../../Scripts/Libs/WxApi":2,"../../Scripts/Mod/AdMgr":47},"path":"preview-scripts/assets/ExportLibs/View/DrawUI.js"},{"deps":{"../Mod/Utility":45,"./Level/LevelBase":34,"./SharpAni":23},"path":"preview-scripts/assets/Scripts/Crl/Sharp.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Crl/SharpAni.js"},{"deps":{"../GuideFinger":53,"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level2.js"},{"deps":{"../Libs/WxApi":2,"../Libs/PlayerDataMgr":43},"path":"preview-scripts/assets/Scripts/Crl/GameLogic.js"},{"deps":{"../../Mod/Utility":45,"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level3.js"},{"deps":{"../GuideFinger":53,"./LevelBase":34,"../Prop/Stone":42},"path":"preview-scripts/assets/Scripts/Crl/Level/Level5.js"},{"deps":{"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level6.js"},{"deps":{"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level9.js"},{"deps":{"../../Mod/Utility":45,"./LevelBase":34,"../Prop/Stone":42},"path":"preview-scripts/assets/Scripts/Crl/Level/Level8.js"},{"deps":{"../../Mod/Utility":45,"../Level/LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Prop/HeadNode.js"},{"deps":{"../GuideFinger":53,"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level1.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Crl/Prop/RotateNeedle.js"},{"deps":{"../../Libs/PlayerDataMgr":43,"../../Mod/Utility":45,"../GameLogic":25,"../Player":8,"../Prop/Meat":11,"../Prop/Needle":36,"../Sharp":22},"path":"preview-scripts/assets/Scripts/Crl/Level/LevelBase.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Libs/ScaleLoop.js"},{"deps":{"../../Mod/Utility":45,"../Level/LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Prop/Needle.js"},{"deps":{"../../Mod/Utility":45,"../Level/LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Prop/Poison.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Crl/Prop/SlideNeedle.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Crl/Prop/ThreeNeedle.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Crl/Prop/Fan.js"},{"deps":{"./PlayerDataMgr":43},"path":"preview-scripts/assets/Scripts/Libs/TimeCountMgr.js"},{"deps":{"../../Mod/Utility":45,"../Level/LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Prop/Stone.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Libs/PlayerDataMgr.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Mod/HttpMgr.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Mod/Utility.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Mod/SoundMgr.js"},{"deps":{"./ShareMgr":12,"../Libs/WxApi":2,"../../ExportLibs/ExportUtils":19},"path":"preview-scripts/assets/Scripts/Mod/AdMgr.js"},{"deps":{"../../ExportLibs/ExportUtils":19,"../Crl/Level/LevelBase":34,"../Crl/PlayerAni":16,"../Libs/PlayerDataMgr":43,"../Libs/TimeCountMgr":41,"../Libs/WxApi":2,"../Mod/AdMgr":47,"../Mod/ShareMgr":12},"path":"preview-scripts/assets/Scripts/UI/GameUI.js"},{"deps":{"../../ExportLibs/ExportUtils":19,"../Mod/AdMgr":47,"../Libs/TimeCountMgr":41,"../Libs/WxApi":2,"../Libs/PlayerDataMgr":43},"path":"preview-scripts/assets/Scripts/UI/FinishUI.js"},{"deps":{"../Libs/PlayerDataMgr":43,"../Mod/Utility":45,"../Mod/ShareMgr":12},"path":"preview-scripts/assets/Scripts/UI/GetPowerUI.js"},{"deps":{"../Crl/PlayerAni":16,"../Libs/PlayerDataMgr":43,"../Mod/Utility":45},"path":"preview-scripts/assets/Scripts/UI/GetFishUI.js"},{"deps":{"../Mod/Utility":45},"path":"preview-scripts/assets/Scripts/UI/GetTipsUI.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Crl/GuideFinger.js"},{"deps":{"../../ExportLibs/ExportUtils":19,"../Libs/WxApi":2,"../Libs/PlayerDataMgr":43,"../Mod/Utility":45,"../Mod/AdMgr":47},"path":"preview-scripts/assets/Scripts/UI/MadUI.js"},{"deps":{"../Mod/ShareMgr":12,"../Libs/WxApi":2,"../Libs/PlayerDataMgr":43,"../../ExportLibs/ExportUtils":19},"path":"preview-scripts/assets/Scripts/UI/LoadingUI.js"},{"deps":{"../Mod/Utility":45,"../../ExportLibs/ExportUtils":19,"../Libs/WxApi":2},"path":"preview-scripts/assets/Scripts/UI/WeChatUI.js"},{"deps":{"../../ExportLibs/ExportUtils":19,"../Libs/WxApi":2,"../Libs/TimeCountMgr":41,"../Libs/PlayerDataMgr":43,"../Mod/ShareMgr":12,"../Mod/Utility":45,"../Mod/AdMgr":47},"path":"preview-scripts/assets/Scripts/UI/DefeatUI.js"},{"deps":{"./LevelBase":34,"../Sharp":22},"path":"preview-scripts/assets/Scripts/Crl/Level/Level12.js"},{"deps":{"./LevelBase":34,"../Prop/ThreeNeedle":39,"../Prop/SlideNeedle":38,"../../Mod/Utility":45},"path":"preview-scripts/assets/Scripts/Crl/Level/Level10.js"},{"deps":{"../../Mod/Utility":45,"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level13.js"},{"deps":{"./LevelBase":34,"../../Mod/Utility":45},"path":"preview-scripts/assets/Scripts/Crl/Level/Level16.js"},{"deps":{"../Sharp":22,"../../Mod/Utility":45,"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level14.js"},{"deps":{"./LevelBase":34,"../../Mod/Utility":45},"path":"preview-scripts/assets/Scripts/Crl/Level/Level15.js"},{"deps":{"../Prop/SlideNeedle":38,"../../Mod/Utility":45,"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level17.js"},{"deps":{"../../Mod/Utility":45,"../Sharp":22,"./LevelBase":34},"path":"preview-scripts/assets/Scripts/Crl/Level/Level18.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }
                console.time && console.time('eval __quick_compile_project__');
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd('eval __quick_compile_project__');
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    