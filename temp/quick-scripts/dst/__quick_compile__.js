
(function () {
var scripts = [{"deps":{"./assets/ExportLibs/ExportHttpUtils":4,"./assets/ExportLibs/ExportUtils":10,"./assets/ExportLibs/AutoScroll":9,"./assets/ExportLibs/View/FinishGameUI":14,"./assets/ExportLibs/View/FriendGameUI":8,"./assets/ExportLibs/View/FullGameUI":15,"./assets/ExportLibs/View/RecommendUI":11,"./assets/ExportLibs/View/ScrollUI":2,"./assets/ExportLibs/View/DrawUI":12,"./assets/ExportLibs/ExportCrl":16,"./assets/Scripts/Crl/Sharp":5,"./assets/Scripts/Crl/GameLogic":17,"./assets/Scripts/Crl/Level/Level10":44,"./assets/Scripts/Crl/Level/Level2":3,"./assets/Scripts/Crl/Level/Level3":19,"./assets/Scripts/Crl/Level/Level4":37,"./assets/Scripts/Crl/Level/Level5":20,"./assets/Scripts/Crl/Level/Level6":18,"./assets/Scripts/Crl/Level/Level7":41,"./assets/Scripts/Crl/Level/Level8":42,"./assets/Scripts/Crl/Level/Level9":43,"./assets/Scripts/Crl/Level/LevelBase":21,"./assets/Scripts/Crl/Level/Level1":22,"./assets/Scripts/Crl/Prop/Meat":25,"./assets/Scripts/Crl/Prop/Needle":23,"./assets/Scripts/Crl/Prop/Poison":6,"./assets/Scripts/Crl/Prop/RotateNeedle":24,"./assets/Scripts/Crl/Prop/Stone":32,"./assets/Scripts/Crl/Prop/HeadNode":31,"./assets/Scripts/Libs/ScaleLoop":27,"./assets/Scripts/Libs/TimeCountMgr":26,"./assets/Scripts/Libs/WxApi":1,"./assets/Scripts/Libs/PlayerDataMgr":28,"./assets/Scripts/Mod/HttpMgr":13,"./assets/Scripts/Mod/ShareMgr":29,"./assets/Scripts/Mod/SoundMgr":30,"./assets/Scripts/Mod/Utility":39,"./assets/Scripts/Mod/AdMgr":38,"./assets/Scripts/UI/LoadingUI":34,"./assets/Scripts/UI/StartUI":7,"./assets/Scripts/UI/WeChatUI":33,"./assets/Scripts/UI/FinishUI":35,"./assets/Scripts/Crl/Player":36},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../ExportLibs/ExportUtils":10,"./PlayerDataMgr":28,"../Mod/AdMgr":38},"path":"preview-scripts/assets/Scripts/Libs/WxApi.js"},{"deps":{"../ExportUtils":10,"../../Scripts/Libs/WxApi":1,"../../Scripts/Mod/AdMgr":38},"path":"preview-scripts/assets/ExportLibs/View/ScrollUI.js"},{"deps":{"./LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Level/Level2.js"},{"deps":{},"path":"preview-scripts/assets/ExportLibs/ExportHttpUtils.js"},{"deps":{"../Mod/Utility":39,"./Level/LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Sharp.js"},{"deps":{"../../Mod/Utility":39,"../Level/LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Prop/Poison.js"},{"deps":{"../Libs/PlayerDataMgr":28,"../Libs/TimeCountMgr":26},"path":"preview-scripts/assets/Scripts/UI/StartUI.js"},{"deps":{"../ExportUtils":10,"../../Scripts/Libs/WxApi":1,"../../Scripts/Mod/AdMgr":38},"path":"preview-scripts/assets/ExportLibs/View/FriendGameUI.js"},{"deps":{},"path":"preview-scripts/assets/ExportLibs/AutoScroll.js"},{"deps":{"./ExportHttpUtils":4,"./ExportCrl":16,"../Scripts/Libs/WxApi":1},"path":"preview-scripts/assets/ExportLibs/ExportUtils.js"},{"deps":{"../ExportUtils":10,"../../Scripts/Libs/WxApi":1,"../../Scripts/Mod/AdMgr":38,"../../Scripts/Libs/PlayerDataMgr":28},"path":"preview-scripts/assets/ExportLibs/View/RecommendUI.js"},{"deps":{"../ExportUtils":10,"../../Scripts/Libs/WxApi":1,"../../Scripts/Mod/AdMgr":38},"path":"preview-scripts/assets/ExportLibs/View/DrawUI.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Mod/HttpMgr.js"},{"deps":{"../../Scripts/Libs/WxApi":1,"../../Scripts/Mod/AdMgr":38,"../../Scripts/Mod/Utility":39,"../ExportUtils":10},"path":"preview-scripts/assets/ExportLibs/View/FinishGameUI.js"},{"deps":{"../ExportUtils":10,"../../Scripts/Mod/Utility":39,"../../Scripts/Libs/WxApi":1,"../../Scripts/Mod/AdMgr":38,"../../Scripts/Libs/PlayerDataMgr":28},"path":"preview-scripts/assets/ExportLibs/View/FullGameUI.js"},{"deps":{},"path":"preview-scripts/assets/ExportLibs/ExportCrl.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Crl/GameLogic.js"},{"deps":{"./LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Level/Level6.js"},{"deps":{"./LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Level/Level3.js"},{"deps":{"../Prop/Stone":32,"./LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Level/Level5.js"},{"deps":{"../GameLogic":17,"../Player":36,"../Sharp":5,"../../Libs/PlayerDataMgr":28,"../../Mod/Utility":39,"../Prop/Needle":23,"../Prop/Meat":25},"path":"preview-scripts/assets/Scripts/Crl/Level/LevelBase.js"},{"deps":{"./LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Level/Level1.js"},{"deps":{"../Level/LevelBase":21,"../../Mod/Utility":39},"path":"preview-scripts/assets/Scripts/Crl/Prop/Needle.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Crl/Prop/RotateNeedle.js"},{"deps":{"../../Mod/Utility":39,"../Level/LevelBase":21,"../Player":36},"path":"preview-scripts/assets/Scripts/Crl/Prop/Meat.js"},{"deps":{"./PlayerDataMgr":28},"path":"preview-scripts/assets/Scripts/Libs/TimeCountMgr.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Libs/ScaleLoop.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Libs/PlayerDataMgr.js"},{"deps":{"../Libs/WxApi":1,"../../ExportLibs/ExportUtils":10},"path":"preview-scripts/assets/Scripts/Mod/ShareMgr.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Mod/SoundMgr.js"},{"deps":{"../../Mod/Utility":39,"../Level/LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Prop/HeadNode.js"},{"deps":{"../Level/LevelBase":21,"../../Mod/Utility":39},"path":"preview-scripts/assets/Scripts/Crl/Prop/Stone.js"},{"deps":{"../Mod/Utility":39,"../../ExportLibs/ExportUtils":10,"../Libs/WxApi":1},"path":"preview-scripts/assets/Scripts/UI/WeChatUI.js"},{"deps":{"../Libs/WxApi":1,"../Libs/PlayerDataMgr":28},"path":"preview-scripts/assets/Scripts/UI/LoadingUI.js"},{"deps":{"../Libs/PlayerDataMgr":28},"path":"preview-scripts/assets/Scripts/UI/FinishUI.js"},{"deps":{"./Level/LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Player.js"},{"deps":{"./LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Level/Level4.js"},{"deps":{"../Libs/WxApi":1,"./ShareMgr":29,"../../ExportLibs/ExportUtils":10},"path":"preview-scripts/assets/Scripts/Mod/AdMgr.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Mod/Utility.js"},{"deps":{},"path":"preview-scripts/assets/Scripts/Crl/Level/NewScript.js"},{"deps":{"./LevelBase":21,"../Prop/Stone":32},"path":"preview-scripts/assets/Scripts/Crl/Level/Level7.js"},{"deps":{"./LevelBase":21,"../../Mod/Utility":39,"../Prop/Stone":32},"path":"preview-scripts/assets/Scripts/Crl/Level/Level8.js"},{"deps":{"./LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Level/Level9.js"},{"deps":{"./LevelBase":21},"path":"preview-scripts/assets/Scripts/Crl/Level/Level10.js"}];
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
    