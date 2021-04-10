(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45dda80c"],{"0212":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"border-primary",staticStyle:{"border-radius":"20px"}},[i("v-flex",{staticClass:"d-flex flex-row align-center justify-center",staticStyle:{position:"relative"}},[i("v-icon",{staticClass:"cursor-pointer",staticStyle:{position:"absolute",left:"5px",top:"10px"},attrs:{color:"primary",size:"20"},on:{click:e.onClose}},[e._v(" fas fa-arrow-left ")]),i("p",{staticClass:"my-1 text-h5",staticStyle:{"font-family":"'Kaushan Script', sans-serif !important"}},[e._v("Connect Wallet")])],1),e.onConnecting?i("div",[i("v-flex",{staticClass:"d-flex justify-center align-center my-6"},[i("p",{staticClass:"text-subtitle-1"},[e._v("Please confirm pending connecting request")])]),i("v-flex",{staticClass:"d-flex justify-center align-center my-6"},[i("v-progress-circular",{attrs:{size:50,width:5,color:"primary",indeterminate:""}})],1)],1):i("div",{staticClass:"px-2"},[e.termsOfUseAccepted?e._e():i("v-flex",{staticClass:"d-flex justify-center align-center"},[i("v-checkbox",{attrs:{color:"green",dark:"",dense:"","hide-details":""},model:{value:e.termOfUse,callback:function(t){e.termOfUse=t},expression:"termOfUse"}},[i("div",{style:"color: "+e.termOfUseColor,attrs:{slot:"label"},slot:"label"},[e._v(" Please accept our "),i("span",{staticClass:"term-of-use-text color-primary",on:{click:function(){return e.handleOpenTermsModal()}}},[e._v("terms of use")])])])],1),e.$vuetify.breakpoint.width>600?i("v-sheet",{directives:[{name:"ripple",rawName:"v-ripple"}],class:"v-sheet-provider border-primary my-4",attrs:{elevation:"2",rounded:"xl",width:"100%","min-height":"70"}},[i("v-row",{staticClass:"wallet-provider-container cursor-pointer",on:{click:function(t){return e.handleConnection({connectionType:"binance"})}}},[i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"9"}},[i("span",{staticClass:"ml-3"},[e._v("Binance Smart Chain")])]),i("v-col",{staticClass:"d-flex align-center justify-center",attrs:{cols:"3"}},[i("img",{staticClass:"mr-2",attrs:{src:s("7b78"),width:"48",alt:"binance smart chain"}})])],1)],1):e._e(),i("v-sheet",{directives:[{name:"ripple",rawName:"v-ripple"}],class:"v-sheet-provider border-primary my-4",attrs:{elevation:"2",rounded:"xl",width:"100%","min-height":"70"}},[i("v-row",{staticClass:"wallet-provider-container cursor-pointer",on:{click:function(t){return e.handleConnection({connectionType:"metamask"})}}},[i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"9"}},[i("span",{staticClass:"ml-3"},[e._v(e._s(e.$vuetify.breakpoint.width>600?"Metamask":"Wallet Browsers"))])]),i("v-col",{staticClass:"d-flex align-center justify-center",attrs:{cols:"3"}},[i("img",{staticClass:"mr-2",attrs:{src:s("d6c5"),width:"48",alt:"metamask"}})])],1)],1),i("v-sheet",{directives:[{name:"ripple",rawName:"v-ripple"}],class:"v-sheet-provider border-primary "+(e.$vuetify.breakpoint.width<=600?"my-4":"mb-2"),attrs:{elevation:"2",rounded:"xl",width:"100%","min-height":"70"}},[i("v-row",{staticClass:"wallet-provider-container cursor-pointer",on:{click:function(t){return e.handleConnection({connectionType:"wallet-connect"})}}},[i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"9"}},[i("span",{staticClass:"ml-3"},[e._v("WalletConnect")])]),i("v-col",{staticClass:"d-flex align-center justify-center",attrs:{cols:"3"}},[i("img",{staticClass:"mr-2",attrs:{src:s("7053"),width:e.$vuetify.breakpoint.width<=600?"38":"48",alt:"wallet-connect"}})])],1)],1)],1),i("TermsModal",{attrs:{isVisible:e.isOpenTermsModal,onClose:e.handleCloseTermsModal}})],1)},a=[],n=s("2f62"),r={name:"Providermodal",components:{TermsModal:()=>s.e("chunk-2d208896").then(s.bind(null,"a4e2"))},props:{onClose:{type:Function,required:!0}},computed:{...Object(n["c"])({web3:e=>e.web3.items,onConnecting:e=>e.app.onConnecting,termsOfUseAccepted:e=>e.app.termsOfUseAccepted})},data(){return{termOfUse:!1,termOfUseColor:"white",isOpenTermsModal:!1}},methods:{handleConnection({connectionType:e}){const{dispatch:t,commit:s}=this.$store,{web3:i,termOfUse:a}=this,n="metamask"===e?window.ethereum:"binance"!==e||window.BinanceChain,r="metamask"===e?"getMetamaskAccount":"binance"===e?"getBinanceAccount":"getWalletConnectAccount";a?n?("binance"!==e&&s("app/setOnConnecting",{onConnecting:!0}),t("web3/getWeb3",{userProvider:e}).then(()=>{t("user/"+r,{web3:i}).then(()=>{this.handleAcceptTermOfUse(),t("user/getMetamaskIcon"),t("user/getTransactions"),s("app/setOnConnecting",{onConnecting:!1})}).catch(e=>{s("app/setOnConnecting",{onConnecting:!1}),s("app/setSnackBar",{text:e.message}),t("web3/getWeb3",{userProvider:"url"})})})):s("app/setSnackBar",{text:`You haven't ${e} wallet extension.`}):(this.termOfUseColor="red",setTimeout(()=>{this.termOfUseColor="white"},3e3))},handleAcceptTermOfUse(){localStorage.setItem("term-of-use","1"),this.$store.commit("app/setTermsOfUseAccepted",{termsOfUseAccepted:!0})},handleOpenTermsModal(){this.isOpenTermsModal=!0},handleCloseTermsModal(){this.isOpenTermsModal=!1}},watch:{termsOfUseAccepted:{handler(e){this.termOfUse=e},immediate:!0},termOfUse:{handler(e){e&&(this.termOfUseColor="white")}}}},l=r,o=(s("c793"),s("2877")),h=s("6544"),c=s.n(h),u=(s("6ca7"),s("ec29"),s("9d26")),d=(s("d191"),s("1b2c"),s("a9ad")),p=s("7560"),m=s("58df"),g=s("80d2"),v=Object(m["a"])(p["a"]).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(e,t){const{children:s,listeners:i,props:a}=t,n={staticClass:"v-label",class:{"v-label--active":a.value,"v-label--is-disabled":a.disabled,...Object(p["b"])(t)},attrs:{for:a.for,"aria-hidden":!a.for},on:i,style:{left:Object(g["f"])(a.left),right:Object(g["f"])(a.right),position:a.absolute?"absolute":"relative"},ref:"label"};return e("label",d["a"].options.methods.setTextColor(a.focused&&a.color,n),s)}}),f=v,b=(s("8ff2"),Object(m["a"])(d["a"],p["a"]).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(e,t){return this.$createElement("div",{staticClass:"v-messages__message",key:t},Object(g["l"])(this,"default",{message:e,key:t})||[e])}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}})),y=b,C=s("7e2b"),k=s("3206"),x=s("d9bd");const S=Object(m["a"])(d["a"],Object(k["a"])("form"),p["a"]);var w=S.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",e)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(e,t){Object(g["h"])(e,t)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(e){e||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout(()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()},0)},hasError(e){this.shouldValidate&&this.$emit("update:error",e)},value(e){this.lazyValue=e}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(e){return e?Array.isArray(e)?e:[e]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:void 0},resetValidation(){this.isResetting=!0},validate(e=!1,t){const s=[];t=t||this.internalValue,e&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const e=this.rules[i],a="function"===typeof e?e(t):e;!1===a||"string"===typeof a?s.push(a||""):"boolean"!==typeof a&&Object(x["b"])(`Rules should return a string or boolean, received '${typeof a}' instead`,this)}return this.errorBucket=s,this.valid=0===s.length,this.valid}}}),O=s("d9f7");const V=Object(m["a"])(C["a"],w);var M=V.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,...this.themeClasses}},computedId(){return this.id||"input-"+this._uid},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map(e=>{if("string"===typeof e)return e;const t=e(this.internalValue);return"string"===typeof t?t:""}).filter(e=>""!==e):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(e){this.lazyValue=e}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(e,t,s={}){const i=this[e+"Icon"],a="click:"+Object(g["o"])(e),n=!(!this.listeners$[a]&&!t),r=Object(O["a"])({attrs:{"aria-label":n?Object(g["o"])(e).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:n?{click:e=>{e.preventDefault(),e.stopPropagation(),this.$emit(a,e),t&&t(e)},mouseup:e=>{e.preventDefault(),e.stopPropagation()}}:void 0},s);return this.$createElement("div",{staticClass:"v-input__icon",class:e?"v-input__icon--"+Object(g["o"])(e):void 0},[this.$createElement(u["a"],r,i)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(g["f"])(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(f,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(y,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:e=>Object(g["l"])(this,"message",e)}}):null},genSlot(e,t,s){if(!s.length)return null;const i=`${e}-${t}`;return this.$createElement("div",{staticClass:"v-input__"+i,ref:i},s)},genPrependSlot(){const e=[];return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick(e){this.$emit("click",e)},onMouseDown(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),$=M,I=s("5607"),D=s("2b0e"),A=D["a"].extend({name:"rippleable",directives:{ripple:I["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),B=D["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:g["h"]}}});function T(e){e.preventDefault()}var _=Object(m["a"])($,A,B).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some(t=>this.valueComparator(t,e)):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=$.options.methods.genLabel.call(this);return e?(e.data.on={click:T},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:T},ref:"input"})},onBlur(){this.isFocused=!1},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const s=t.length;t=t.filter(t=>!this.valueComparator(t,e)),t.length===s&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(){this.isFocused=!0},onKeydown(e){}}}),j=_.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...$.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick(()=>this.inputIndeterminate=e)},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(u["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),E=s("62ad"),U=s("a523"),F=s("0e8f"),P=s("132d"),R=s("490a"),z=s("0fd9"),L=s("8dd9"),N=s("269a"),W=s.n(N),H=Object(o["a"])(l,i,a,!1,null,null,null);t["default"]=H.exports;c()(H,{VCheckbox:j,VCol:E["a"],VContainer:U["a"],VFlex:F["a"],VIcon:P["a"],VProgressCircular:R["a"],VRow:z["a"],VSheet:L["a"]}),W()(H,{Ripple:I["a"]})},"1b2c":function(e,t,s){},"269a":function(e,t){e.exports=function(e,t){var s="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var i in"function"===typeof e.exports&&(s.directives=e.exports.options.directives),s.directives=s.directives||{},t)s.directives[i]=s.directives[i]||t[i]}},5542:function(e,t,s){},"6ca7":function(e,t,s){},7053:function(e,t,s){e.exports=s.p+"img/wallet-connect.37f2bc6e.svg"},"7b78":function(e,t,s){e.exports=s.p+"img/binance.37a0b3d3.png"},"8ff2":function(e,t,s){},"9d26":function(e,t,s){"use strict";var i=s("132d");t["a"]=i["a"]},a523:function(e,t,s){"use strict";s("20f68"),s("4b85");var i=s("e8f2"),a=s("d9f7");t["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:s,children:i}){let n;const{attrs:r}=s;return r&&(s.attrs={},n=Object.keys(r).filter(e=>{if("slot"===e)return!1;const t=r[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(s.domProps=s.domProps||{},s.domProps.id=t.id),e(t.tag,Object(a["a"])(s,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(n||[])}),i)}})},c793:function(e,t,s){"use strict";s("5542")},d191:function(e,t,s){},d6c5:function(e,t,s){e.exports=s.p+"img/metamask.c06f3a3e.svg"},ec29:function(e,t,s){}}]);