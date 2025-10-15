(function(e){function t(t){for(var a,s,o=t[0],l=t[1],u=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1837:function(e,t,n){},"45db":function(e,t,n){"use strict";n("1837")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=(n("d3b7"),n("bc3a")),i=n.n(r),s={},o=i.a.create(s);o.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=o,window.axios=o,Object.defineProperties(e.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},a["default"].use(Plugin);var l=Plugin,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("index")],1)},c=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{gutter:20}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"demo-basic--circle"},[n("div",{staticClass:"block"},[n("el-avatar",{attrs:{size:150,src:e.avatar}})],1)]),n("h1",[e._v("sora视频在线去水印")]),n("div",{staticClass:"typo"},[n("p",[n("strong",[e._v("本站公告 ")]),e._v("解析失败请找客服"),n("b",[n("a",{attrs:{href:"https://api.yuantoai.com",target:"_blank",rel:"nofollow"}},[e._v(" 留言反馈 ")])]),n("u",[e._v("图集解析仅抖音/快手/微博/皮皮虾/最右/皮皮搞笑可用")])]),n("p",[n("strong",[e._v("目前支持 ")]),e._v("sora/皮皮虾/抖音/微视/快手/6间房/哔哩哔哩/微博/绿洲/度小视/开眼/陌陌/皮皮搞笑/全民k歌/逗拍/虎牙/新片场/哔哩哔哩/Acfun/美拍/西瓜视频/火山小视频/网易云Mlog等众多平台")]),n("p",[n("strong",[e._v("温馨提示 ")]),e._v("粘贴视频地址时"),n("u",[e._v("无需删除文案")]),n("small",[e._v(" 但如果视频链接正确但解析失败请删掉文案后重试")])])]),n("hr"),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main"},[n("div",{staticClass:"grid-content"},[n("el-input",{attrs:{placeholder:"请粘贴分享链接",id:"url",lass:"input-with-select"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[n("el-select",{attrs:{slot:"prepend",placeholder:"视频"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[n("el-option",{attrs:{label:"视频",value:"1"}}),n("el-option",{attrs:{label:"图集",value:"2"}})],1),n("el-button",{attrs:{slot:"append"},on:{click:e.onSubmit},slot:"append"},[e._v("解析")])],1)],1),e.seen?n("div",{staticClass:"download"},[n("h4",[e._v(e._s(e.info.title))]),n("a",{attrs:{href:e.info.cover,target:"_blank"}},[n("el-button",{attrs:{plain:""}},[e._v("下载封面")])],1),n("a",{attrs:{href:e.info.url,target:"_blank"}},[n("el-button",{attrs:{plain:""}},[e._v("下载视频")])],1),e.music?n("a",{attrs:{href:e.info.music.url,target:"_blank"}},[n("el-button",{attrs:{plain:""}},[e._v("下载音乐")])],1):e._e()]):e._e(),e.iseen?n("div",{staticClass:"waterfall"},e._l(e.images_url,(function(t){return n("div",{key:t,staticClass:"item"},[n("el-image",{attrs:{src:t,"preview-src-list":e.images_url}})],1)})),0):e._e()])])],1)},d=[],f=(n("ac1f"),{data:function(){return{info:{},input:"",select:"",music:!1,seen:!1,iseen:!1,loading:!1,avatar:"/favicon.png",images_url:{}}},methods:{onSubmit:function(){var e=this;this.seen=!1,this.iseen=!1,this.loading=!0;var t=/(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.exec(this.input);"1"==this.select||""==this.select?this.axios.get("https://tenapi.cn/v2/video?url="+encodeURIComponent(t[0])).then((function(t){200==t.data.code?(null!=t.data.data.music&&(e.music=!0),e.seen=!0,e.info=t.data.data,e.loading=!1,e.$notify.success({title:"解析成功",message:"请及时下载音视频"})):(e.seen=!1,e.loading=!1,e.$notify.error({title:"解析失败",message:"视频不存在或接口失效"}))})):(this.seen=!1,this.axios.get("https://tenapi.cn/v2/images?url="+encodeURIComponent(t[0])).then((function(t){200==t.data.code?(e.iseen=!0,e.loading=!1,e.images_url=t.data.data.images,e.$notify.success({title:"解析成功",message:"图集暂不支持批量下载，请长按下载或右键另存为"})):(e.iseen=!1,e.loading=!1,e.$notify.error({title:"解析失败",message:"图集不存在或接口失效"})),console.log(e.images_url)})))}}}),v=f,g=(n("45db"),n("2877")),h=Object(g["a"])(v,p,d,!1,null,null,null),m=h.exports,b={name:"app",components:{index:m}},_=b,y=(n("034f"),Object(g["a"])(_,u,c,!1,null,null,null)),x=y.exports,w=n("5c96"),j=n.n(w);n("0fae");a["default"].use(j.a),a["default"].use(l),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,n){}});
(function(){
  try {
    function w(cb){ if (window.axios) cb(); else setTimeout(function(){ w(cb); }, 50); }
    w(function(){
      var B = 'https://api.yuantoai.com/api/dsp/{clientSecretKey}/{clientId}/?url=';
      function isTenVideo(u){ return /^https?:\/\/tenapi\.cn\/v2\/video\?/.test(u); }
      function isTenImages(u){ return /^https?:\/\/tenapi\.cn\/v2\/images\?/.test(u); }
      function qp(u,n){
        var s=(u.split('?')[1]||'').split('&');
        for(var i=0;i<s.length;i++){
          if(s[i].indexOf(n+'=')===0){
            try { return decodeURIComponent(s[i].slice(n.length+1)); } catch(_) { return s[i].slice(n.length+1); }
          }
        }
        return null;
      }

      // 请求拦截：改写 Sora 链接到新接口；任何 images 改写为 video
      window.axios.interceptors.request.use(function(c){
        try{
          if(c && typeof c.url === 'string'){
            // 统一规则：tenapi 的 images 也走新接口
            if (isTenImages(c.url)) {
              var u0 = qp(c.url,'url');
              if (u0) {
                c.__yuanto__ = 1;
                c.url = B + encodeURIComponent(u0);
              }
            }
            // 统一规则：tenapi 的 video 全部走新接口
            else if (isTenVideo(c.url)) {
              var o = qp(c.url,'url');
              if (o) {
                c.__yuanto__ = 1;
                c.url = B + encodeURIComponent(o);
              }
            }
          }
        } catch(_) {}
        return c;
      });

      // 响应拦截：把新接口返回结构映射为现有页面结构
      window.axios.interceptors.response.use(function(r){
        try{
          // 若为新接口，先映射结构
          if (r && r.config && r.config.__yuanto__ && r.data) {
            var d = r.data || {}, x = d.data || {};
            r.data = {
              code: d.code,
              data: {
                title: x.title || '',
                url: x.url || '',
                cover: x.cover || x.photo || x.download_image || '',
                music: null
              }
            };
          }
          // 统一渲染：任何返回 code==200 且有 data.url 的结果，展示标题/封面/播放器
          if (r && r.data && r.data.code === 200 && r.data.data) {
            var info = r.data.data || {};
            var title = info.title || '';
            var url = info.url || '';
            var cover = info.cover || info.photo || info.download_image || '';
            if (url) {
              window.__latestInfo = { title: title, url: url, cover: cover };
              (function renderInline(){
                try{
                  var app = document.getElementById('app');
                  if (!app) return;
                  var cid = 'inline-media-container';
                  var cont = document.getElementById(cid);
                  if (!cont) {
                    cont = document.createElement('div');
                    cont.id = cid;
                    // 直接复用上方卡片样式
                    cont.className = 'el-card box-card';
                    cont.style.width = '100%';
                    cont.style.margin = '16px 0';
                    cont.style.padding = '';
                    cont.style.background = '';
                    cont.style.borderRadius = '8px';
                    // 注入一次全局布局样式（并排）
                    (function ensureStyle(){
                      var sid = 'imc-style';
                      if (!document.getElementById(sid)) {
                        var st = document.createElement('style');
                        st.id = sid;
                        st.textContent =
                          '.imc-row{display:flex;gap:16px;align-items:flex-start;}' +
                          '@media(max-width:768px){.imc-row{flex-direction:column;gap:12px}}' +
                          '.imc-box{flex:1;min-width:0;}';
                        document.head.appendChild(st);
                      }
                    })();
                    // 插入到 #app 内部，继承上方卡片居中与宽度
                    app.appendChild(cont);
                    // 采用与上方相同的居中方式：max-width + margin:auto
                    cont.style.boxSizing = 'border-box';
                  }
                  // 创建与上方一致的卡片内层
                  var body = cont.querySelector('.el-card__body');
                  if (!body) {
                    body = document.createElement('div');
                    body.className = 'el-card__body';
                    cont.appendChild(body);
                  }

                  // 标题区
                  var titleBox = cont.querySelector('#imc-title-box');
                  if (!titleBox) {
                    titleBox = document.createElement('div');
                    titleBox.id = 'imc-title-box';
                    titleBox.style.margin = '8px 0 12px';
                    body.appendChild(titleBox);
                  }
                  var titleLabel = titleBox.querySelector('div.imc-label');
                  if (!titleLabel) {
                    titleLabel = document.createElement('div');
                    titleLabel.className = 'imc-label';
                    titleLabel.textContent = '视频标题';
                    titleLabel.style.fontSize = '14px';
                    titleLabel.style.color = '#409eff';
                    titleLabel.style.marginBottom = '6px';
                    titleBox.appendChild(titleLabel);
                  }
                  var titleText = titleBox.querySelector('div.imc-title');
                  if (!titleText) {
                    titleText = document.createElement('div');
                    titleText.className = 'imc-title';
                    titleText.style.fontSize = '18px';
                    titleText.style.color = '#fff';
                    titleText.style.wordBreak = 'break-all';
                    titleBox.appendChild(titleText);
                  }
                  titleText.textContent = title || '';

                  // 封面区
                  // 行容器（并排布局）
                  var row = cont.querySelector('#imc-row');
                  if (!row) {
                    row = document.createElement('div');
                    row.id = 'imc-row';
                    row.className = 'imc-row';
                    body.appendChild(row);
                  }
                  var coverBox = row.querySelector('#imc-cover-box');
                  if (!coverBox) {
                    coverBox = document.createElement('div');
                    coverBox.id = 'imc-cover-box';
                    coverBox.className = 'imc-box';
                    coverBox.style.margin = '12px 0';
                    row.appendChild(coverBox);
                  }
                  var coverLabel = coverBox.querySelector('div.imc-label');
                  if (!coverLabel) {
                    coverLabel = document.createElement('div');
                    coverLabel.className = 'imc-label';
                    coverLabel.textContent = '封面图片';
                    coverLabel.style.fontSize = '14px';
                    coverLabel.style.color = '#409eff';
                    coverLabel.style.marginBottom = '6px';
                    coverBox.appendChild(coverLabel);
                  }
                  var img = coverBox.querySelector('img#imc-cover');
                  if (!img) {
                    img = document.createElement('img');
                    img.id = 'imc-cover';
                    img.style.maxWidth = '100%';
                    img.style.display = 'block';
                    img.style.margin = '8px auto';
                    img.style.borderRadius = '6px';
                    coverBox.appendChild(img);
                  }
                  if (cover) img.src = cover;
                  var coverBtn = coverBox.querySelector('a#imc-cover-dl');
                  if (!coverBtn) {
                    coverBtn = document.createElement('a');
                    coverBtn.id = 'imc-cover-dl';
                    coverBtn.style.display = 'inline-block';
                    coverBtn.style.marginTop = '8px';
                    coverBtn.style.textDecoration = 'none';
                    coverBtn.setAttribute('target','_blank');
                    // 复刻上方 ElementUI 按钮结构与样式
                    coverBtn.innerHTML = '<button type="button" class="el-button is-plain"><span>下载封面</span></button>';
                    coverBox.appendChild(coverBtn);
                  }
                  coverBtn.href = cover || '#';

                  // 视频区
                  var videoBox = row.querySelector('#imc-video-box');
                  if (!videoBox) {
                    videoBox = document.createElement('div');
                    videoBox.id = 'imc-video-box';
                    videoBox.className = 'imc-box';
                    videoBox.style.margin = '12px 0';
                    row.appendChild(videoBox);
                  }
                  var videoLabel = videoBox.querySelector('div.imc-label');
                  if (!videoLabel) {
                    videoLabel = document.createElement('div');
                    videoLabel.className = 'imc-label';
                    videoLabel.textContent = '解析视频';
                    videoLabel.style.fontSize = '14px';
                    videoLabel.style.color = '#409eff';
                    videoLabel.style.marginBottom = '6px';
                    videoBox.appendChild(videoLabel);
                  }
                  var video = videoBox.querySelector('video#imc-player');
                  if (!video) {
                    video = document.createElement('video');
                    video.id = 'imc-player';
                    video.controls = true;
                    video.style.width = '100%';
                    video.style.maxHeight = '405px';
                    video.style.margin = '8px 0 4px';
                    video.style.borderRadius = '6px';
                    videoBox.appendChild(video);
                  }
                  if (cover) video.setAttribute('poster', cover);
                  if (video.src !== url) video.src = url;
                  var videoBtn = videoBox.querySelector('a#imc-video-dl');
                  if (!videoBtn) {
                    videoBtn = document.createElement('a');
                    videoBtn.id = 'imc-video-dl';
                    videoBtn.style.display = 'inline-block';
                    videoBtn.style.marginTop = '8px';
                    videoBtn.style.textDecoration = 'none';
                    videoBtn.setAttribute('target','_blank');
                    // 复刻上方 ElementUI 按钮结构与样式
                    videoBtn.innerHTML = '<button type="button" class="el-button is-plain"><span>下载视频</span></button>';
                    videoBox.appendChild(videoBtn);
                  }
                  videoBtn.href = url || '#';
                }catch(_){}
              })();
            }
          }
        } catch(_) {}
        return r;
      }, function(e){ return Promise.reject(e); });

      // UI 处理：隐藏“视频/图集”下拉，并强制 select='1'
      function hideSelect(){
        var prepend = document.querySelector('.el-input-group__prepend');
        if (prepend) { prepend.style.display = 'none'; return true; }
        return false;
      }
      function setVueSelect(){
        var root = document.getElementById('app');
        if (root && root.__vue__) {
          try {
            var app = root.__vue__;
            var comp = app && app.$children && app.$children[0];
            if (comp && comp.$data && Object.prototype.hasOwnProperty.call(comp.$data,'select')) {
              comp.select = '1';
              return true;
            }
          } catch(_) {}
        }
        return false;
      }
      function initUI(){
        var a = hideSelect();
        var b = setVueSelect();
        if (!(a && b)) setTimeout(initUI, 200);
      }
      if (document.readyState !== 'loading') initUI();
      else document.addEventListener('DOMContentLoaded', initUI);

      // 关闭 ElementUI 的解析成功/失败提示（避免标题弹窗）
      function silenceNotify(){
        try{
          if (window.Vue && window.Vue.prototype) {
            var noop = function(){};
            var n = window.Vue.prototype.$notify;
            if (n && (typeof n === 'function' || typeof n === 'object')) {
              window.Vue.prototype.$notify = { success: noop, error: noop, warning: noop, info: noop };
              return true;
            }
          }
          var root = document.getElementById('app');
          if (root && root.__vue__) {
            var app = root.__vue__;
            var comp = app && app.$children && app.$children[0];
            if (comp) {
              comp.$notify = { success: function(){}, error: function(){}, warning: function(){}, info: function(){} };
              return true;
            }
          }
        } catch(_) {}
        return false;
      }
      (function trySilence(){
        if (!silenceNotify()) setTimeout(trySilence, 200);
      })();

      // 在“下载”区域渲染内联视频与封面
      function updateMedia(){
        try{
          var root = document.getElementById('app');
          if (!(root && root.__vue__)) return;
          var app = root.__vue__;
          var comp = app && app.$children && app.$children[0];
          if (!(comp && comp.$data && comp.seen && comp.info)) return;

          var info = comp.info || {};
          var url = info.url || '';
          var cover = info.cover || '';

          // 下载区容器
          var download = document.querySelector('.download');
          if (!download) return;

          // 标题已由模板 h4 渲染，这里仅保障存在
          // 封面图
          var img = download.querySelector('#inline-cover');
          if (!img && cover) {
            img = document.createElement('img');
            img.id = 'inline-cover';
            img.style.maxWidth = '100%';
            img.style.display = 'block';
            img.style.margin = '12px auto';
            download.insertBefore(img, download.firstChild.nextSibling); // 紧随标题后
          }
          if (img && cover) img.src = cover;

          // 内联视频
          var video = download.querySelector('#inline-player');
          if (!video && url) {
            video = document.createElement('video');
            video.id = 'inline-player';
            video.controls = true;
            video.style.width = '100%';
            video.style.margin = '12px 0';
            download.appendChild(video);
          }
          if (video) {
            if (cover) video.setAttribute('poster', cover);
            if (url && video.src !== url) {
              video.src = url;
            }
          }
        }catch(_){}
      }

      // 循环刷新，等待数据就绪后渲染
      setInterval(updateMedia, 300);

      // 输入框右侧“解析”按钮文字改为黑色（仅此修改）
      (function tweakParseBtn(){
        try{
          var btn = document.querySelector('.el-input-group__append .el-button');
          if (btn) {
            btn.style.color = '#000';
            var span = btn.querySelector('span');
            if (span) span.style.color = '#000';
            return;
          }
        }catch(_){}
        setTimeout(tweakParseBtn, 200);
      })();

      // 输入框绑定回车键触发解析
      (function setupEnterKey(){
        try{
          var input = document.getElementById('url');
          if (input) {
            // 避免重复绑定
            if (!input.__enterBound) {
              input.__enterBound = true;
              input.addEventListener('keydown', function(e){
                if (e.key === 'Enter' || e.keyCode === 13) {
                  e.preventDefault();
                  var btn = document.querySelector('.el-input-group__append .el-button');
                  if (btn) btn.click();
                }
              });
            }
            return;
          }
        }catch(_){}
        setTimeout(setupEnterKey, 200);
      })();

      // 隐藏上方卡片中的下载/标题板块（仅隐藏输入框下方的小板块）
      (function hideUpperDownload(){
        try{
          var st = document.getElementById('hide-upper-download');
          if (!st) {
            st = document.createElement('style');
            st.id = 'hide-upper-download';
            st.textContent = '.main .download{display:none!important}';
            document.head.appendChild(st);
          }
        }catch(_){}
      })();

    });
  } catch(_) {}
})();
//# sourceMappingURL=app.ba1f30b3.js.map