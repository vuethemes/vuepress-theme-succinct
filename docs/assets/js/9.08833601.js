(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{235:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img.shields.io/badge/vuepress-1.2.0-blue.svg",alt:"Vuepress 1.2.0"}}),t._v(" "),e("img",{attrs:{src:"https://img.shields.io/npm/v/vuepress-theme-succinct",alt:"npm"}}),t._v(" "),e("a",{attrs:{href:"./LICENSE"}},[e("img",{attrs:{src:"https://img.shields.io/badge/license-MIT-green.svg",alt:"License"}})])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Microflash/vuepress-theme-succinct",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress-theme-succinct"),e("OutboundLink")],1),t._v(" uses "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",target:"_blank",rel:"noopener noreferrer"}},[t._v("prefers-color-scheme"),e("OutboundLink")],1),t._v(" media query and "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS variables"),e("OutboundLink")],1),t._v(" to generate dark and light themes.")]),t._v(" "),e("h2",{attrs:{id:"get-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[t._v("#")]),t._v(" Get Started")]),t._v(" "),e("p",[t._v("Add the dependency to your existing Vuepress project via Yarn or NPM.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress-theme-succinct\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D vuepress-theme-succinct\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Refer to "),e("a",{attrs:{href:"https://vuepress.vuejs.org/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started Guide"),e("OutboundLink")],1),t._v(" to create a Vuepress project.")])]),t._v(" "),e("p",[t._v("Update "),e("code",[t._v(".vuepress/config.js")]),t._v(" as follows.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress > config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-theme-succinct'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  globalUIComponents"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ThemeManager'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("code",[t._v("ThemeManager")]),t._v(" provides theme-switching functionality across the app.")]),t._v(" "),e("p",[t._v("Note that you can also use the shorthand name for the theme.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress > config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'succinct'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  globalUIComponents"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ThemeManager'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);