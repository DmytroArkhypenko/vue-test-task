(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2727936c"],{"3fe4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"new-employee-form"},[t.isFormOpened?t._e():n("div",[n("p",[t._v("Press button to open the form to fill your contact book")]),n("button",{on:{click:t.openForm}},[t._v(" Open ")])]),t.isFormOpened?n("div",[n("form",{on:{submit:function(e){return e.preventDefault(),t.addContact(e)}}},[n("div",[n("label",{attrs:{for:"first-name"}},[t._v("Type first name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{name:"first-name",required:""},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),n("label",{attrs:{for:"last-name"}},[t._v("Type the last name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{name:"last-name",required:""},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}})]),n("div",[n("button",{attrs:{type:"button"},on:{click:t.closeForm}},[t._v("Exit adding mode ")]),n("button",{attrs:{type:"submit"}},[t._v("Add Contact")])])])]):t._e()]),n("div",[t.contacts.length?n("table",[t._m(0),n("tbody",t._l(t.contacts,(function(e,a){return n("tr",{key:e.id},[n("td",[t._v(t._s(a+1))]),n("td",[t._v(t._s(e.firstName))]),n("td",[t._v(t._s(e.lastName))]),n("td",[n("router-link",{attrs:{tag:"button",to:"/contact/"+e.id}},[t._v(" Open details ")])],1),n("td",[n("button",{on:{click:function(n){return t.deleteContact(e.id,e.firstName,e.lastName)}}},[t._v("Remove")])])])})),0)]):n("p",[t._v("Your contact book is empty now")])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("#")]),n("th",[t._v("First Name")]),n("th",[t._v("Last name")]),n("th",[t._v("Open")]),n("th",[t._v("Remove")])])])}],s={data:function(){return{isFormOpened:!1,firstName:"",lastName:""}},methods:{openForm:function(){this.isFormOpened=!0},closeForm:function(){this.isFormOpened=!1},addContact:function(){this.$store.dispatch("addContact",{firstName:this.firstName,lastName:this.lastName}),this.firstName="",this.lastName=""},deleteContact:function(t,e,n){var a=confirm("Are you sure to delete the contact ".concat(e+n,"?"));a&&this.$store.dispatch("deleteContact",{id:t})}},computed:{contacts:function(){return this.$store.state.contacts}}},i=s,r=(n("8b23"),n("2877")),c=Object(r["a"])(i,a,o,!1,null,null,null);e["default"]=c.exports},"8b23":function(t,e,n){"use strict";n("d6a9")},d6a9:function(t,e,n){}}]);
//# sourceMappingURL=chunk-2727936c.76eef023.js.map