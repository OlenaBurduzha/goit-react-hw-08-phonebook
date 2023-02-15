(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[531],{1531:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return q}});var r=n(4270),a=n(9439),s=n(2791),o=n(3402),c=function(t){return t.contacts.contacts.filter((function(e){return e.name.toLowerCase().includes(t.contacts.query)}))},u=function(t){return t.contacts.contacts},i=function(t){return t.contacts.isLoading},l=n(9434),f=n(9608),h="CreateContact_form__7VGfr",d="CreateContact_label__gy2x-",p="CreateContact_input__voVK3",m="CreateContact_btn__1aUL8",x=n(3329),_=n(6429);function g(){var t=(0,s.useState)(""),e=(0,a.Z)(t,2),n=e[0],r=e[1],c=(0,s.useState)(""),i=(0,a.Z)(c,2),g=i[0],v=i[1],b=(0,l.I0)(),w=(0,l.v9)(u),C=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":v(a);break;default:return}},j=function(){r(""),v("")};return(0,x.jsxs)("form",{className:h,onSubmit:function(t){t.preventDefault();var e={id:_.generate(),name:n,number:g},r=e.name.toLowerCase(),a=w.find((function(t){return t.name.toLowerCase()===r}));a?o.ZP.success("".concat(e.name," is already in contacts")):b((0,f.el)(e)),j()},children:[(0,x.jsx)("h3",{className:d,children:"Phonebook"}),(0,x.jsx)("input",{className:p,text:"text",name:"name",placeholder:"Name",value:n,onChange:C,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,x.jsx)("input",{className:p,placeholder:"Number ",type:"tel",value:g,onChange:C,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,x.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})}var v="ContactList_list__3DsEX",b="ContactList_item__i5sst",w="ContactList_text__gmWSH",C="ContactList_btn__wDIy8",j=function(){var t=(0,l.v9)(c),e=(0,l.I0)(),n=function(t){e((0,f._f)(t.target.dataset.id))};return(0,x.jsx)("ul",{className:v,children:t.map((function(t){var e=t.id,r=t.name,a=t.number;return(0,x.jsxs)("li",{className:b,children:[(0,x.jsx)("p",{className:w,children:"".concat(r," : ").concat(a)}),(0,x.jsx)("button",{className:C,onClick:n,type:"button","data-id":e,children:"Delete contact"})]},e)}))})},y=n(3034),N="Filter_form__wVnxJ",k="Filter_label__vEd1E",L="Filter_input__N7T3z",V=function(){var t=(0,l.I0)();return(0,x.jsxs)("div",{className:N,children:[(0,x.jsx)("p",{className:k,children:"Contacts"}),(0,x.jsx)("h4",{className:k,children:"Find your contact by name"}),(0,x.jsx)("input",{type:"text",className:L,name:"filter",placeholder:"Search",onChange:function(e){return n=e.target.value,void t((0,y._)(n));var n}})]})},q=function(){var t=(0,l.I0)(),e=(0,l.v9)(i);return(0,s.useEffect)((function(){t((0,f.yF)())}),[t]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.q,{children:(0,x.jsx)("title",{children:"Phonebook"})}),(0,x.jsx)(g,{}),(0,x.jsx)(V,{}),(0,x.jsx)("div",{children:e&&"Request in progress..."}),(0,x.jsx)(j,{})]})}},6429:function(t,e,n){"use strict";t.exports=n(5274)},8857:function(t,e,n){"use strict";var r,a,s,o=n(5408),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){s=!1}function i(t){if(t){if(t!==r){if(t.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,n){return e!==n.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,u()}}else r!==c&&(r=c,u())}function l(){return s||(s=function(){r||i(c);for(var t,e=r.split(""),n=[],a=o.nextValue();e.length>0;)a=o.nextValue(),t=Math.floor(a*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||c},characters:function(t){return i(t),r},seed:function(t){o.seed(t),a!==t&&(u(),a=t)},lookup:function(t){return l()[t]},shuffled:l}},7098:function(t,e,n){"use strict";var r,a,s=n(2226);n(8857);t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),e+=s(7),e+=s(t),r>0&&(e+=s(r)),e+=s(n)}},2226:function(t,e,n){"use strict";var r=n(8857),a=n(9139),s=n(2483);t.exports=function(t){for(var e,n=0,o="";!e;)o+=s(a,r.get(),1),e=t<Math.pow(16,n+1),n++;return o}},5274:function(t,e,n){"use strict";var r=n(8857),a=n(7098),s=n(6046),o=n(5347)||0;function c(){return a(o)}t.exports=c,t.exports.generate=c,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return o=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=s},6046:function(t,e,n){"use strict";var r=n(8857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},9139:function(t){"use strict";var e,n="object"===typeof window&&(window.crypto||window.msCrypto);e=n&&n.getRandomValues?function(t){return n.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=e},5408:function(t){"use strict";var e=1;t.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(t){e=t}}},5347:function(t){"use strict";t.exports=0},2483:function(t){t.exports=function(t,e,n){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,a=-~(1.6*r*n/e.length),s="";;)for(var o=t(a),c=a;c--;)if((s+=e[o[c]&r]||"").length===+n)return s}}}]);
//# sourceMappingURL=531.2da48453.chunk.js.map