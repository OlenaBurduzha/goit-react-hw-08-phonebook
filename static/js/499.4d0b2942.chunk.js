"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[499],{499:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var a=n(2791),r=n(9434),c=n(3634),s=function(t){return t.contacts.loading},o=function(t){return t.contacts.items},i=n(4270),u=n(9439),l="ContactEditor_form__U4ufl",d="ContactEditor_label__EWAJt",m="ContactEditor_input__Nbns0",h="ContactEditor_btn__PzOHe",f=n(3329),_=function(){var t=(0,a.useState)(""),e=(0,u.Z)(t,2),n=e[0],s=e[1],i=(0,a.useState)(""),_=(0,u.Z)(i,2),p=_[0],b=_[1],x=(0,r.v9)(o),v=(0,r.I0)(),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":s(a);break;case"number":b(a);break;default:return}},C=function(){s(""),b("")};return(0,f.jsxs)("form",{className:l,onSubmit:function(t){t.preventDefault(),function(t,e){null!==x&&void 0!==x&&x.find((function(e){return e.name===t}))?alert("".concat(t," is already in your contacts")):v((0,c.el)({name:t,number:e}))}(n,p),C()},children:[(0,f.jsx)("h3",{className:d,children:"Phonebook"}),(0,f.jsx)("input",{className:m,text:"text",name:"name",placeholder:"Enter name of contact",value:n,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,f.jsx)("input",{className:m,placeholder:"Enter contact number ",type:"tel",value:p,onChange:j,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,f.jsx)("button",{className:h,type:"submit",children:"Add contact"})]})},p="ContactList_list__csErn",b="ContactList_text__+NWAW",x=function(){var t=(0,r.v9)(o);return(0,f.jsx)("ul",{className:p,children:t.map((function(t){var e=t.id,n=t.name,a=t.number;return(0,f.jsx)("li",{children:(0,f.jsx)("p",{className:b,children:"".concat(n," : ").concat(a)})},e)}))})};function v(){var t=(0,r.I0)(),e=(0,r.v9)(s);return(0,a.useEffect)((function(){t((0,c.yF)())}),[t]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.q,{children:(0,f.jsx)("title",{children:"Your contacts"})}),(0,f.jsx)(_,{}),(0,f.jsx)("div",{children:e&&"Request in progress..."}),(0,f.jsx)(x,{})]})}}}]);
//# sourceMappingURL=499.4d0b2942.chunk.js.map