(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=u(n),s=r,m=o["".concat(c,".").concat(s)]||o[s]||d[s]||l;return n?a.a.createElement(m,b(b({ref:t},p),{},{components:n})):a.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=s;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var p=2;p<l;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(108)),c={id:"getting-started",title:"\u5feb\u901f\u5f00\u59cb"},b={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"\u5feb\u901f\u5f00\u59cb",description:"\u8f6f\u4ef6\u8981\u6c42",source:"@site/../docs/GettingStarted.md",slug:"/getting-started",permalink:"/zh/docs/getting-started",editUrl:"https://github.com/mpflutter/mpflutter/edit/master/website/../docs/GettingStarted.md",version:"current"},i=[{value:"\u8f6f\u4ef6\u8981\u6c42",id:"\u8f6f\u4ef6\u8981\u6c42",children:[]},{value:"\u5b89\u88c5 Flutter \u73af\u5883",id:"\u5b89\u88c5-flutter-\u73af\u5883",children:[]},{value:"\u914d\u7f6e pub-cache/bin \u548c dart-sdk/bin \u5230 PATH \u73af\u5883\u53d8\u91cf",id:"\u914d\u7f6e-pub-cachebin-\u548c-dart-sdkbin-\u5230-path-\u73af\u5883\u53d8\u91cf",children:[]},{value:"\u5b89\u88c5 MPFlutter \u73af\u5883",id:"\u5b89\u88c5-mpflutter-\u73af\u5883",children:[]},{value:"\u6784\u5efa Web \u4ea7\u7269",id:"\u6784\u5efa-web-\u4ea7\u7269",children:[]},{value:"\u6784\u5efa\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ea7\u7269",id:"\u6784\u5efa\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ea7\u7269",children:[]}],p={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u8f6f\u4ef6\u8981\u6c42"},"\u8f6f\u4ef6\u8981\u6c42"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"macOS / Windows / Linux \u4efb\u4e00\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883"),Object(l.b)("li",{parentName:"ul"},"VSCode"),Object(l.b)("li",{parentName:"ul"},"Flutter 2.0.2+")),Object(l.b)("h2",{id:"\u5b89\u88c5-flutter-\u73af\u5883"},"\u5b89\u88c5 Flutter \u73af\u5883"),Object(l.b)("p",null,"\u5728\u5f00\u59cb\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"p"},"MPFlutter")," \u524d\uff0c\u4f60\u9700\u8981\u5148\u5b89\u88c5\u597d ",Object(l.b)("inlineCode",{parentName:"p"},"Flutter")," \u73af\u5883\u3002"),Object(l.b)("p",null,"\u8bf7\u53c2\u9605",Object(l.b)("a",{parentName:"p",href:"https://flutter.dev"},"\u5b98\u7f51"),"\u6216",Object(l.b)("a",{parentName:"p",href:"https://flutter-io.cn"},"\u4e2d\u56fd\u975e\u5b98\u65b9\u955c\u50cf"),"\u7f51\u7ad9\u76f8\u5173\u6559\u7a0b\u5b89\u88c5 ",Object(l.b)("inlineCode",{parentName:"p"},"Flutter")," \u73af\u5883\uff0c\u7248\u672c\u8981\u6c42 2.0.2+ \u3002"),Object(l.b)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u8bf7\u5728\u547d\u4ee4\u884c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u89c2\u5bdf\u8f93\u51fa\u662f\u5426\u6b63\u5e38\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"> flutter --version\nFlutter 2.2.0 \u2022 channel stable \u2022 https://github.com/flutter/flutter.git\nFramework \u2022 revision b22742018b (2 weeks ago) \u2022 2021-05-14 19:12:57 -0700\nEngine \u2022 revision a9d88a4d18\nTools \u2022 Dart 2.13.0\n")),Object(l.b)("h2",{id:"\u914d\u7f6e-pub-cachebin-\u548c-dart-sdkbin-\u5230-path-\u73af\u5883\u53d8\u91cf"},"\u914d\u7f6e pub-cache/bin \u548c dart-sdk/bin \u5230 PATH \u73af\u5883\u53d8\u91cf"),Object(l.b)("p",null,"\u4f7f\u7528\u4f60\u559c\u7231\u7684\u6587\u672c\u7f16\u8f91\u5668\uff0c\u7f16\u8f91\u73af\u5883\u53d8\u91cf\u6587\u4ef6\uff08\u5728 macOS \u4e0a\u662f ",Object(l.b)("inlineCode",{parentName:"p"},"~/.bash_profile"),"\uff09\uff0c\u6dfb\u52a0\u4e0b\u9762\u4e00\u884c\uff0c\u4ee5\u4fbf ",Object(l.b)("inlineCode",{parentName:"p"},"pub global")," \u4e2d\u7684\u53ef\u6267\u884c\u6587\u4ef6\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'export PATH="/Users/<username>/.pub-cache/bin:$PATH"\nexport PATH="<flutter_dir>/bin/cache/dart-sdk/bin:$PATH"\n')),Object(l.b)("h2",{id:"\u5b89\u88c5-mpflutter-\u73af\u5883"},"\u5b89\u88c5 MPFlutter \u73af\u5883"),Object(l.b)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"pub global activate --source git https://github.com/mpflutter/mpflutter.git\n")),Object(l.b)("p",null,"\u7136\u540e\u5728\u4efb\u610f\u76ee\u5f55\u4e0b\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"mpflutter create awesome_project\n")),Object(l.b)("p",null,"\u7a0d\u7b49\u7247\u523b\uff0c\u4e00\u4e2a\u5d2d\u65b0\u7684 MPFlutter \u5de5\u7a0b\u5373\u521b\u5efa\u5b8c\u6210\uff0c\u4f7f\u7528 VSCode \u6253\u5f00\u8be5\u76ee\u5f55\uff0c\u5728\u952e\u76d8\u4e0a\u6309 ",Object(l.b)("inlineCode",{parentName:"p"},"F5")," \u5373\u53ef\u5f00\u59cb\u8c03\u8bd5\uff08\u5982\u679c\u8981\u6c42\u9009\u62e9\u8c03\u8bd5\u7a0b\u5e8f\uff0c\u8bf7\u9009\u62e9",Object(l.b)("inlineCode",{parentName:"p"},"Dart/Flutter"),"\uff09\u3002"),Object(l.b)("p",null,"\u6bcb\u9700\u5f00\u542f\u4efb\u4f55\u6a21\u62df\u5668\uff0c\u53ea\u9700\u8981\u5728 Chrome \u6216\u8005 Safari \u6d4f\u89c8\u5668\u4e0a\u6253\u5f00 ",Object(l.b)("a",{parentName:"p",href:"http://0.0.0.0:9898/index.html"},"http://0.0.0.0:9898/index.html")," \u5373\u53ef\u9884\u89c8\u5f53\u524d\u5f00\u53d1\u754c\u9762\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u5efa\u8bae\u4f7f\u7528 Chrome \u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f\uff0c\u5e76\u8bbe\u7f6e\u4e3a\u79fb\u52a8\u8bbe\u5907\u8fdb\u884c\u8c03\u8bd5\u3002")),Object(l.b)("h2",{id:"\u6784\u5efa-web-\u4ea7\u7269"},"\u6784\u5efa Web \u4ea7\u7269"),Object(l.b)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c\u8fdb\u5165\u6784\u5efa\u6700\u7ec8\u4ea7\u7269\u7684\u5de5\u7a0b\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"mpflutter build web\n")),Object(l.b)("p",null,"\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u4ea7\u7269\u4f4d\u4e8e ",Object(l.b)("inlineCode",{parentName:"p"},"./build/web")," \u76ee\u5f55\u4e0b\u3002"),Object(l.b)("h2",{id:"\u6784\u5efa\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ea7\u7269"},"\u6784\u5efa\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ea7\u7269"),Object(l.b)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c\u8fdb\u5165\u6784\u5efa\u6700\u7ec8\u4ea7\u7269\u7684\u5de5\u7a0b\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"mpflutter build weapp\n")),Object(l.b)("p",null,"\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u4ea7\u7269\u4f4d\u4e8e ",Object(l.b)("inlineCode",{parentName:"p"},"./build/weapp")," \u76ee\u5f55\u4e0b\u3002"))}u.isMDXComponent=!0}}]);