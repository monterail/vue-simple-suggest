var VueSimpleSuggest=function(){"use strict";var t={selectionUp:[38],selectionDown:[40],select:[13],hideList:[27],autocomplete:[32,13]},e={input:String,select:Object};function n(t,e){if(t.length<=0)return!1;var n=function(t){return t.some(function(t){return t===e.keyCode})};return Array.isArray(t[0])?t.some(function(t){return n(t)}):n(t)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function o(t,e){try{var n=t()}catch(t){return e()}return n&&n.then?n.then(e,e):e()}function r(t,e){try{var n=t()}catch(t){return e(t)}return n&&n.then?n.then(void 0,e):n}function u(t,e,n){return n?e?e(t):t:(t=Promise.resolve(t),e?t.then(e):t)}var l=function(){try{if(isNaN.apply(null,{}))return function(t){return function(){try{return Promise.resolve(t.apply(this,arguments))}catch(t){return Promise.reject(t)}}}}catch(t){}return function(t){return function(){try{return Promise.resolve(t.apply(this,Array.prototype.slice.call(arguments)))}catch(t){return Promise.reject(t)}}}}();function c(t,e){var n=t();return n&&n.then?n.then(e):e(n)}function h(){}var a="input",f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-simple-suggest",class:[t.styles.vueSimpleSuggest,{designed:!t.destyled,focus:t.isInFocus}],on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"tab",9,e.key,"Tab"))return null;t.isTabbed=!0}}},[n("div",{ref:"inputSlot",staticClass:"input-wrapper",class:t.styles.inputWrapper},[t._t("default",[n("input",t._b({staticClass:"default-input",class:t.styles.defaultInput,domProps:{value:t.text||""}},"input",t.$attrs,!1))])],2),t._v(" "),n("transition",{attrs:{name:"vue-simple-suggest"}},[t.listShown&&!t.removeList?n("div",{staticClass:"suggestions",class:t.styles.suggestions,on:{mouseenter:function(e){t.hoverList(!0)},mouseleave:function(e){t.hoverList(!1)}}},[t._t("misc-item-above",null,{suggestions:t.suggestions,query:t.text}),t._v(" "),t._l(t.suggestions,function(e,i){return n("div",{key:t.isPlainSuggestion?"suggestion-"+i:t.valueProperty(e),staticClass:"suggest-item",class:[t.styles.suggestItem,{selected:t.selected&&t.valueProperty(e)==t.valueProperty(t.selected),hover:t.hovered&&t.valueProperty(t.hovered)==t.valueProperty(e)}],on:{mouseenter:function(n){t.hover(e,n.target)},mouseleave:function(e){t.hover(null,e.target)},click:function(n){t.suggestionClick(e,n)}}},[t._t("suggestion-item",[n("span",[t._v(t._s(t.displayProperty(e)))])],{autocomplete:function(){return t.autocompleteText(t.displayProperty(e))},suggestion:e,query:t.text})],2)}),t._v(" "),t._t("misc-item-below",null,{suggestions:t.suggestions,query:t.text})],2):t._e()])],1)},staticRenderFns:[],name:"vue-simple-suggest",model:{prop:"value",get event(){return a}},props:{styles:{type:Object,default:function(){return{}}},controls:{type:Object,default:function(){return t}},minLength:{type:Number,default:1},maxSuggestions:{type:Number,default:10},displayAttribute:{type:String,default:"title"},valueAttribute:{type:String,default:"id"},list:{type:[Function,Array],default:function(){return[]}},removeList:{type:Boolean,default:!1},destyled:{type:Boolean,default:!1},preventSubmit:{type:Boolean,default:!0},filterByQuery:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e){return!e||~this.displayProperty(t).toLowerCase().indexOf(e.toLowerCase())}},debounce:{type:Number,default:0},value:{},mode:{type:String,default:a,validator:function(t){return!!~Object.keys(e).indexOf(t.toLowerCase())}},onConfirm:Function},watch:{mode:{handler:function(t,e){a=t},immediate:!0},value:{handler:function(t){this.text=t},immediate:!0}},data:function(){return{selected:null,hovered:null,suggestions:[],listShown:!1,inputElement:null,canSend:!0,timeoutInstance:null,text:this.value,isPlainSuggestion:!1,isClicking:!1,isOverList:!1,isInFocus:!1,isFalseFocus:!1,isTabbed:!1,controlScheme:{}}},computed:{listIsRequest:function(){return"function"==typeof this.list},inputIsComponent:function(){return this.$slots.default&&this.$slots.default.length>0&&!!this.$slots.default[0].componentInstance},input:function(){return this.inputIsComponent?this.$slots.default[0].componentInstance:this.inputElement},on:function(){return this.inputIsComponent?"$on":"addEventListener"},off:function(){return this.inputIsComponent?"$off":"removeEventListener"},hoveredIndex:function(){var t=this;return this.suggestions.findIndex(function(e){return t.hovered&&t.valueProperty(t.hovered)==t.valueProperty(e)})},textLength:function(){return this.text&&this.text.length||this.inputElement.value.length||0}},created:function(){this.controlScheme=s({},t,this.controls)},mounted:function(){this.inputElement=this.$refs.inputSlot.querySelector("input"),this.prepareEventHandlers(!0)},beforeDestroy:function(){this.prepareEventHandlers(!1)},methods:{onSubmit:function(t){this.preventSubmit&&"Enter"===t.key&&(t.stopPropagation(),t.preventDefault())},prepareEventHandlers:function(t){var e=this,n=this[t?"on":"off"],i={click:this.showSuggestions,keydown:function(t){return e.moveSelection(t),e.onAutocomplete(t)},keyup:this.onListKeyUp},o=s({blur:this.onBlur,focus:this.onFocus,input:this.onInput},i);for(var r in o)this.input[n](r,o[r]);var u=t?"addEventListener":"removeEventListener";for(var l in i)this.inputElement[u](l,i[l]);if(!0===this.preventSubmit){var c=this.$el.closest("form");c&&c[u]("keydown",this.onSubmit)}},isScopedSlotEmpty:function(t){if(t){var e=t(this);return!(Array.isArray(e)||e&&(e.tag||e.context||e.text||e.children))}return!0},miscSlotsAreEmpty:function(){var t=this,e=["misc-item-above","misc-item-below"].map(function(e){return t.$scopedSlots[e]});if(e.every(function(t){return!!t}))return e.every(this.isScopedSlotEmpty.bind(this));var n=e.find(function(t){return!!t});return this.isScopedSlotEmpty.call(this,n)},getPropertyByAttribute:function(t,e){return this.isPlainSuggestion?t:void 0!==(void 0===t?"undefined":i(t))?function(t,e){return e.split(".").reduce(function(t,e){return t===Object(t)?t[e]:t},t)}(t,e):t},displayProperty:function(t){return String(this.getPropertyByAttribute(t,this.displayAttribute))},valueProperty:function(t){return this.getPropertyByAttribute(t,this.valueAttribute)},autocompleteText:function(t){this.$emit("input",t),this.inputElement.value=t,this.text=t},select:function(t){this.hovered=null,this.selected=t,this.$emit("select",t),this.autocompleteText(this.displayProperty(t))},hover:function(t,e){this.hovered=t,null!=this.hovered&&this.$emit("hover",t,e)},hoverList:function(t){this.isOverList=t},hideList:function(){this.listShown&&(this.listShown=!1,this.$emit("hide-list"))},showList:function(){this.listShown||this.textLength>=this.minLength&&(this.suggestions.length>0||!this.miscSlotsAreEmpty())&&(this.listShown=!0,this.$emit("show-list"))},showSuggestions:l(function(){var t=this;return c(function(){if(0===t.suggestions.length&&t.minLength===t.textLength)return function(t,e){if(!e)return Promise.resolve(t).then(h)}(t.research())},function(){t.showList()})}),moveSelection:function(t){if(n([this.controlScheme.selectionUp,this.controlScheme.selectionDown],t)){t.preventDefault(),this.showSuggestions();var e=n(this.controlScheme.selectionDown,t),i=2*e-1,s=e?0:this.suggestions.length-1,o=e?this.hoveredIndex<this.suggestions.length-1:this.hoveredIndex>0,r=null;r=this.hovered?o?this.suggestions[this.hoveredIndex+i]:this.suggestions[s]:this.selected||this.suggestions[s],this.hover(r)}},onListKeyUp:function(t){var e=this.controlScheme.select;n([e,this.controlScheme.hideList],t)&&(t.preventDefault(),this.listShown?(n(e,t)&&this.hovered&&this.select(this.hovered),this.hideList()):n(e,t)&&(this.onConfirm||this.research)())},onAutocomplete:function(t){n(this.controlScheme.autocomplete,t)&&(t.ctrlKey||t.shiftKey)&&this.suggestions.length>0&&this.suggestions[0]&&this.listShown&&(t.preventDefault(),this.hover(this.suggestions[0]),this.autocompleteText(this.displayProperty(this.suggestions[0])))},suggestionClick:function(t,e){this.$emit("suggestion-click",t,e),this.select(t),this.hideList(),this.isClicking=this.isOverList=!1},onBlur:function(t){var e=this;this.isInFocus?(this.isClicking=this.isOverList&&!this.isTabbed,this.isClicking?t&&t.isTrusted&&!this.isTabbed&&(this.isFalseFocus=!0,this.$nextTick(function(){e.inputElement.focus()})):(this.isInFocus=!1,this.hideList(),this.$emit("blur",t))):(this.inputElement.blur(),console.error("This should never happen!\n          If you encouneterd this error, please report at https://github.com/KazanExpress/vue-simple-suggest/issues")),this.isTabbed=!1},onFocus:function(t){this.isInFocus=!0,t&&!this.isFalseFocus&&this.$emit("focus",t),this.isFalseFocus=!1,this.isClicking||this.showSuggestions()},onInput:function(t){var e=t.target?t.target.value:t;this.text!==e&&(this.text=e,this.$emit("input",this.text),this.selected&&(this.selected=null,this.$emit("select",null)),this.debounce?(clearTimeout(this.timeoutInstance),this.timeoutInstance=setTimeout(this.research,this.debounce)):this.research())},research:l(function(){var t=this;return o(function(){return r(function(){return function(t){var e=t();if(e&&e.then)return e.then(h)}(function(){if(t.canSend){t.canSend=!1;var e=t.$set;return u(t.getSuggestions(t.text),function(n){e.call(t,t,"suggestions",n)})}})},function(e){throw t.clearSuggestions(),e})},function(){return t.canSend=!0,0===t.suggestions.length&&t.miscSlotsAreEmpty()?t.hideList():t.showList(),t.suggestions})}),getSuggestions:l(function(t){var e=this;if((t=t||"").length<e.minLength)return e.listShown?(e.hideList(),[]):e.suggestions;e.selected=null,e.listIsRequest&&(e.$emit("request-start",t),(e.suggestions.length>0||!e.miscSlotsAreEmpty())&&e.showList());var n=[];return o(function(){return r(function(){return c(function(){if(e.listIsRequest)return u(e.list(t),function(t){n=t||[]});n=e.list},function(){Array.isArray(n)||(n=[n]),e.isPlainSuggestion="object"!==i(n[0])||Array.isArray(n[0]),e.filterByQuery&&(n=n.filter(function(n){return e.filter(n,t)})),e.listIsRequest&&e.$emit("request-done",n)})},function(t){if(!e.listIsRequest)throw t;e.$emit("request-failed",t)})},function(){return e.maxSuggestions&&n.splice(e.maxSuggestions),n})}),clearSuggestions:function(){this.suggestions.splice(0)}}};return(Vue||window&&window.Vue)&&(Vue||window.Vue).component("vue-simple-suggest",f),f}();