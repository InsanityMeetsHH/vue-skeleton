define(["exports"],(function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={methods:{initCssuaMonitor:function(){var t;""===(t=jQuery)(".cssua-monitor").text()&&(t.each(cssua.ua,(function(e,s){t(".cssua-monitor").append(e+": "+s+"<br>")})),t(".cssua-monitor").append("html tag classes: "+t("html").attr("class")+"<br>"))}}};t.default=e}));