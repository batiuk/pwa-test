(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{420:function(t,n,l){var content=l(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(20).default)("4ff1d690",content,!0,{sourceMap:!1})},427:function(t,n,l){"use strict";l(420)},428:function(t,n,l){var e=l(19)(!1);e.push([t.i,".wallet[data-v-30051971]{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);grid-gap:20px;padding:20px;width:100%;height:100%;color:#2c2d32}.block[data-v-30051971]{width:auto;height:auto;background:#fff;display:flex;flex-direction:column;align-items:flex-start;padding:20px;border-radius:5px}.block .label[data-v-30051971]{font-weight:700;font-size:24px;margin-bottom:20px}.block.balance[data-v-30051971]{grid-column:1/2;grid-row:1/2}.block.balance .content[data-v-30051971]{width:100%}.block.balance .content .general-info[data-v-30051971],.block.balance .content .table-columns[data-v-30051971],.block.balance .content .wallet-info[data-v-30051971]{width:100%;display:grid;grid-template-columns:1.75fr repeat(3,1fr);grid-template-rows:repeat(2,auto);grid-column-gap:20px;grid-row-gap:3px}.block.balance .content .general-info .fund[data-v-30051971],.block.balance .content .table-columns .fund[data-v-30051971],.block.balance .content .wallet-info .fund[data-v-30051971]{display:flex}.block.balance .content .general-info[data-v-30051971]{margin-top:10px}.block.add-transaction[data-v-30051971]{grid-column:2/3;grid-row:1/2}.block.transactions[data-v-30051971]{grid-column:3/4;grid-row:1/4}.block.balance-graph[data-v-30051971]{grid-column:1/3;grid-row:2/4}",""]),t.exports=e},434:function(t,n,l){"use strict";l.r(n);var e;l(4),l(259);!function(t){t.CASH="Cash",t.SAVINGS="Savings",t.PB_UNIVERSAL="PB Universal",t.PB_FOR_PAYMENTS="PB For Payments",t.PB_BUSINESS="PB Business",t.MB="MonoBank"}(e||(e={}));var c=[{account:e.SAVINGS,funds:{UAH:6500,USD:100,EUR:0}},{account:e.CASH,funds:{UAH:5500,USD:0,EUR:0}},{account:e.PB_BUSINESS,funds:{UAH:98,USD:0,EUR:0}},{account:e.PB_UNIVERSAL,funds:{UAH:-4362,USD:0,EUR:0}},{account:e.PB_FOR_PAYMENTS,funds:{UAH:1010,USD:0,EUR:1}},{account:e.MB,funds:{UAH:-3e4,USD:0,EUR:0}}],o=1,r=27,d=30,v={name:"WalletPage",data:function(){return{selectedCurrency:"UAH",wallets:c}},computed:{TotalWallet:function(){return this.wallets.reduce((function(t,n){var l=n.funds;return{UAH:t.UAH+l.UAH,USD:t.USD+l.USD,EUR:t.EUR+l.EUR}}),{UAH:0,USD:0,EUR:0})},TotalBalance:function(){var t=this.TotalWallet,n=t.UAH,l=t.USD,e=t.EUR,c=n*(o/r)+l*(r/r)+e*(d/r),v=n*(o/d)+l*(r/d)+e*(d/d);return{UAH:(n*(o/o)+l*(r/o)+e*(d/o)).toFixed(2),USD:c.toFixed(2),EUR:v.toFixed(2)}}}},f=(l(427),l(87)),U=l(121),_=l.n(U),C=l(431),S=l(432),component=Object(f.a)(v,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("v-row",[l("v-col",[l("div",{staticClass:"wallet"},[l("div",{staticClass:"block balance"},[l("span",{staticClass:"label"},[t._v("Balance "+t._s(t.TotalBalance[t.selectedCurrency])+t._s(t.selectedCurrency))]),t._v(" "),l("div",{staticClass:"content"},[l("div",{staticClass:"table-columns"},[l("span",{staticClass:"account-name"}),t._v(" "),l("span",{staticClass:"account-name"},[t._v("UAH")]),t._v(" "),l("span",{staticClass:"account-name"},[t._v("USD")]),t._v(" "),l("span",{staticClass:"account-name"},[t._v("EUR")])]),t._v(" "),t._l(t.wallets,(function(n){var e=n.account,c=n.funds;return l("div",{key:e,staticClass:"wallet-info"},[l("span",{staticClass:"account-name"},[t._v(t._s(e))]),t._v(" "),t._l(Object.entries(c),(function(n){var e=n[0],c=n[1];return l("span",{key:e,staticClass:"fund"},[l("span",{staticClass:"value"},[t._v(t._s(c))])])}))],2)})),t._v(" "),l("div",{staticClass:"general-info"},[l("span",{staticClass:"account-name"},[t._v("Total")]),t._v(" "),t._l(Object.entries(t.TotalWallet),(function(n){var e=n[0],c=n[1];return l("span",{key:e,staticClass:"fund"},[l("span",{staticClass:"value"},[t._v(t._s(c))])])}))],2)],2)]),t._v(" "),l("div",{staticClass:"block add-transaction"},[l("span",{staticClass:"label"},[t._v("Add transaction")])]),t._v(" "),l("div",{staticClass:"block transactions"},[l("span",{staticClass:"label"},[t._v("Transactions")])]),t._v(" "),l("div",{staticClass:"block balance-graph"},[l("span",{staticClass:"label"},[t._v("Graph")])])])])],1)}),[],!1,null,"30051971",null);n.default=component.exports;_()(component,{VCol:C.a,VRow:S.a})}}]);