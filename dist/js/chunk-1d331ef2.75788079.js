(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d331ef2"],{1681:function(e,t,a){},"2bfd":function(e,t,a){},"4bd4":function(e,t,a){"use strict";a("4de4"),a("7db0"),a("4160"),a("caad"),a("07ac"),a("2532"),a("159b");var i=a("5530"),n=a("58df"),s=a("7e2b"),o=a("3206");t["a"]=Object(n["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,a=function(e){return e.$watch("hasError",(function(a){t.$set(t.errorBag,e._uid,a)}),{immediate:!0})},i={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(e._uid)||(i.valid=a(e)))})):i.valid=a(e),i},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var a=this.watchers.find((function(e){return e._uid===t._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},a844:function(e,t,a){"use strict";a("a9e3");var i=a("5530"),n=(a("1681"),a("8654")),s=a("58df"),o=Object(s["a"])(n["a"]);t["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(i["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"}},genInput:function(){var e=n["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){n["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},c6a6:function(e,t,a){"use strict";a("4de4"),a("7db0"),a("c975"),a("d81d"),a("45fc"),a("498a");var i=a("5530"),n=(a("2bfd"),a("b974")),s=a("8654"),o=a("d9f7"),l=a("80d2"),c=Object(i["a"])(Object(i["a"])({},n["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t["a"]=n["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,a){return a.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n["a"].options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var a=Object(l["q"])(t,e.itemText),i=null!=a?String(a):"";return e.filter(t,String(e.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=n["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(i["a"])(Object(i["a"])({},c),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=n["a"].options.computed.listData.call(this);return e.props=Object(i["a"])(Object(i["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var a=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){a.internalSearch&&(1===e.length||a.autoSelectFirst)&&(a.$refs.menu.getTiles(),a.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===l["w"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===l["w"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==l["w"].backspace&&e!==l["w"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var a=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===a){var i=this.selectedItems.length,n=e!==i-1?e:e-1,s=this.selectedItems[n];s?this.selectItem(t):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n}else this.selectedIndex=a}},clearableCallback:function(){this.internalSearch=void 0,n["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=s["a"].options.methods.genInput.call(this);return e.data=Object(o["a"])(e.data,{attrs:{"aria-activedescendant":Object(l["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(l["o"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=n["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?n["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,a=t.value;t.value&&this.activateMenu(),this.internalSearch=a,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;n["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){n["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){n["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){n["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){if(-1!==this.selectedIndex){var t=this.selectedItems[this.selectedIndex],a=this.getText(t);e.clipboardData.setData("text/plain",a),e.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",a),e.preventDefault()}}}})},d377:function(e,t,a){"use strict";a.r(t);var i,n,s,o,l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-main",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("PlacesList")],1)],1)],1)],1)},c=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.places,loading:e.placesDataTableLoading,search:e.search,"sort-by":"domain"},on:{"click:row":e.rowClicked},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v("Places")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-switch",{staticClass:"mt-5",attrs:{row:"",color:"input",label:"Show Only Mine"},model:{value:e.showOnlyMineStore,callback:function(t){e.showOnlyMineStore=t},expression:"showOnlyMineStore"}}),a("v-spacer"),a("v-text-field",{staticClass:"mt-7 mx-2",attrs:{solo:"",label:"Search",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"primary",small:"",fab:""},on:{click:function(t){return e.showAddPlaceDialog()}}},"v-btn",n,!1),i),[a("v-icon",[e._v(" mdi-map-marker-plus ")])],1)]}}])},[a("span",[e._v("Create Place")])]),a("v-dialog",{attrs:{width:"500",color:"primary"},model:{value:e.placeDialogShow,callback:function(t){e.placeDialogShow=t},expression:"placeDialogShow"}},[a("v-card",[a("v-card-title",[e._v(" "+e._s(e.placeDialog.name)+" "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "+e._s(e.placeDialog.domainUsers)+" users "),a("v-spacer"),a("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"primary",small:"",fab:"",disabled:!e.canEditPlace(e.placeDialog.accountID)},on:{click:e.togglePlaceEditMode}},"v-btn",n,!1),i),[a("v-icon",{domProps:{textContent:e._s(e.placeEditMode?"mdi-image-text":"mdi-home-edit")}})],1)]}}])},[a("span",{domProps:{textContent:e._s(e.placeEditMode?"View":"Edit")}})])],1),a("v-scroll-x-transition",{attrs:{"hide-on-leave":!0}},[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!e.placeEditMode,expression:"!placeEditMode"}],staticClass:"text-left",attrs:{transition:"scroll-x-transition"}},[a("v-list",{staticClass:"transparent"},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v(" Place Name ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.name)+" ")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v(" Description ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.description)+" ")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v(" Address ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.address)+" ")])],1)],1),a("v-list-item",[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:e._u([{key:"actions",fn:function(){return[a("v-icon",{attrs:{color:"primary"}},[e._v("mdi-information-variant")])]},proxy:!0}])},[e._v(" Domain ")]),a("v-expansion-panel-content",[a("v-list",[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v(" Domain ID ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.domainID)+" ")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v(" Domain Name ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.domainName)+" ")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v(" Domain Network Address ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.domainNetworkAddress)+" ")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v(" Domain Ice Server ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.domainID)+" ")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[e._v(" Domain Last Checked In ")]),a("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.domainLastSeen)+" ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("v-scroll-x-reverse-transition",{attrs:{"hide-on-leave":!0}},[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.placeEditMode,expression:"placeEditMode"}],staticClass:"text-left"},[a("v-form",{ref:"editPlace.name"},[a("v-text-field",{attrs:{label:"Place Name",name:"editPlace.name","prepend-icon":"mdi-rename-box","append-icon":"mdi-content-save-outline",type:"text",rules:e.editPlace.nameRules,loading:e.editPlace.nameLoading,color:"input"},on:{"click:append":function(t){return e.postUpdatePlace(e.placeDialog.placeID,"name",e.editPlace.name)}},model:{value:e.editPlace.name,callback:function(t){e.$set(e.editPlace,"name",t)},expression:"editPlace.name"}})],1),a("v-form",{ref:"editPlace.description"},[a("v-textarea",{attrs:{label:"Description",name:"editPlace.description","prepend-icon":"mdi-image-text","append-icon":"mdi-content-save-outline",type:"text",rules:e.editPlace.descriptionRules,loading:e.editPlace.descriptionLoading,color:"input"},on:{"click:append":function(t){return e.postUpdatePlace(e.placeDialog.placeID,"description",e.editPlace.description)}},model:{value:e.editPlace.description,callback:function(t){e.$set(e.editPlace,"description",t)},expression:"editPlace.description"}})],1),a("v-form",{ref:"editPlace.address"},[a("v-text-field",{attrs:{label:"Address ( /x,y,z/x,y,z,w )",name:"editPlace.address","prepend-icon":"mdi-compass-outline","append-icon":"mdi-content-save-outline",type:"text",rules:e.editPlace.addressRules,loading:e.editPlace.addressLoading,color:"input"},on:{"click:append":function(t){return e.postUpdatePlace(e.placeDialog.placeID,"address",e.editPlace.address)}},model:{value:e.editPlace.address,callback:function(t){e.$set(e.editPlace,"address",t)},expression:"editPlace.address"}})],1)],1)],1)],1)],1),a("v-dialog",{attrs:{width:"500",color:"primary"},model:{value:e.addPlaceDialogShow,callback:function(t){e.addPlaceDialogShow=t},expression:"addPlaceDialogShow"}},[a("v-card",[a("v-card-title",[e._v(" Add Place ")]),a("v-card-text",[a("v-form",{ref:"addPlaceForm"},[a("v-text-field",{attrs:{label:"Place Name",name:"name","prepend-icon":"mdi-rename-box",type:"text",rules:e.addPlaceDialog.nameRules,color:"input"},model:{value:e.addPlaceDialog.name,callback:function(t){e.$set(e.addPlaceDialog,"name",t)},expression:"addPlaceDialog.name"}}),a("v-textarea",{attrs:{label:"Description",name:"description","prepend-icon":"mdi-image-text",type:"text",rules:e.addPlaceDialog.descriptionRules,color:"input"},model:{value:e.addPlaceDialog.description,callback:function(t){e.$set(e.addPlaceDialog,"description",t)},expression:"addPlaceDialog.description"}}),a("v-text-field",{attrs:{label:"Location & Orientation ( /x,y,z/x,y,z,w )",placeholder:"/0,0,0/0,0,0,1",name:"address","prepend-icon":"mdi-compass-outline",type:"text",rules:e.addPlaceDialog.addressRules,color:"input"},model:{value:e.addPlaceDialog.address,callback:function(t){e.$set(e.addPlaceDialog,"address",t)},expression:"addPlaceDialog.address"}}),a("v-autocomplete",{attrs:{"prepend-icon":"mdi-earth",items:e.domains,filled:"",chips:"",label:"Assign to Domain","item-text":"name","item-value":"domainID",filter:e.placeDialogFilter,rules:e.addPlaceDialog.domainIDRules,color:"input"},scopedSlots:e._u([{key:"item",fn:function(t){return[[a("v-list-item-content",[""!==t.item.name?a("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}}):a("v-list-item-title",[e._v(" Unknown ")]),a("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.item.domainID)}}),a("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.item.created)}})],1)]]}},{key:"selection",fn:function(t){return[a("v-chip",e._b({attrs:{"input-value":t.selected}},"v-chip",t.attrs,!1),[""!==t.item.name?a("span",[e._v(e._s(t.item.name))]):a("span",[e._v(e._s(t.item.domainID))])])]}}]),model:{value:e.addPlaceDialog.domainID,callback:function(t){e.$set(e.addPlaceDialog,"domainID",t)},expression:"addPlaceDialog.domainID"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:e.postAddPlace}},[e._v(" Create ")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[a("v-icon",e._g(e._b({attrs:{small:"",color:"red",disabled:!e.canEditPlace(i.accountID)},on:{click:function(t){return t.stopPropagation(),e.deletePlace(i.placeID,i.name)}}},"v-icon",s,!1),n),[e._v(" mdi-delete-alert ")])]}}],null,!0)},[a("span",[e._v("Delete Place")])])]}},{key:"item.images",fn:function(e){var t=e.item;return[a("v-avatar",[a("img",{attrs:{src:t.images.thumbnail}})])]}}])}),a("v-snackbar",{attrs:{timeout:e.snackbarSuccessTimeout,color:"success"},scopedSlots:e._u([{key:"action",fn:function(t){var i=t.attrs;return[a("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(t){e.snackbarSuccessShow=!1}}},"v-btn",i,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbarSuccessShow,callback:function(t){e.snackbarSuccessShow=t},expression:"snackbarSuccessShow"}},[e._v(" "+e._s(e.snackbarSuccessText)+" ")])],1)},d=[],u=(a("a4d3"),a("e01a"),a("4160"),a("c975"),a("b0c0"),a("159b"),a("ade3")),p=a("8552"),h=(i={name:"PlacesList",props:{source:String},data:function(){return{dialog:!1,headers:[{text:"Place Name",align:"start",sortable:!0,value:"name"},{text:"Users",value:"domainUsers"},{text:"Actions",value:"actions",sortable:!1}],search:null,placesDataTableLoading:!1,placeDialogShow:!1,placeDialog:{name:null,placeID:null,address:null,description:null,accountID:null,thumbnail:null,images:null,domainID:null,domainName:null,domainNetworkAddress:null,domainIceServer:null,domainLastSeen:null,domainUsers:null},placeEditMode:!1,editPlace:{name:"",nameRules:[function(e){return!!e||"A place name is required."}],nameLoading:!1,address:"",addressRules:[function(e){return!!e||"A place address is required."}],addressLoading:!1,description:"",descriptionRules:[function(e){return!!e||"A place description is required."}],descriptionLoading:!1},addPlaceDialogShow:!1,addPlaceDialog:{name:null,nameRules:[function(e){return!!e||"A place name is required."}],description:null,descriptionRules:[function(e){return!!e||"A description is required."}],address:"/0,0,0/0,0,0,0",addressRules:[function(e){return!!e||"An address is required."}],domainID:null,domainIDRules:[function(e){return!!e||"A domain to assign this place to is required."}]},editingPlace:null,places:[],domains:[],snackbarSuccessShow:!1,snackbarSuccessText:"Success.",snackbarSuccessTimeout:6e3}},computed:{},watch:{showOnlyMineStore:{handler:function(){this.retrievePlacesList(o)}}},created:function(){n=this,s=this.$store.state,o=s.metaverseConfig.server,this.initialize()}},Object(u["a"])(i,"computed",{showOnlyMineStore:{get:function(){return this.$store.state.places.showOnlyMine},set:function(e){this.$store.commit("mutate",{update:!0,property:"places",with:{showOnlyMine:e}})}}}),Object(u["a"])(i,"methods",{sendEvent:function(e,t){p["a"].$emit(e,t)},initialize:function(){this.retrievePlacesList(o)},showAddPlaceDialog:function(){this.addPlaceDialogShow=!0,this.retrieveDomainList(o)},togglePlaceEditMode:function(){this.placeEditMode=!this.placeEditMode,!0===this.placeEditMode&&(this.editPlace.name=this.placeDialog.name,this.editPlace.description=this.placeDialog.description,this.editPlace.address=this.placeDialog.address)},placeDialogFilter:function(e,t){var a=e.name.toLowerCase(),i=e.domainID,n=t.toLowerCase();return a.indexOf(n)>-1||i.indexOf(n)>-1},rowClicked:function(e){this.placeEditMode=!1,this.placeDialogShow=!0,this.placeDialog.name=e.name,this.placeDialog.placeID=e.placeID,this.placeDialog.address=e.address,this.placeDialog.description=e.description,this.placeDialog.accountID=e.accountID,this.placeDialog.thumbanil=e.thumbanil,this.placeDialog.images=e.images,this.placeDialog.domainID=e.domainID,this.placeDialog.domainName=e.domainName,this.placeDialog.domainNetworkAddress=e.domainNetworkAddress,this.placeDialog.domainIceServer=e.domainIceServer,this.placeDialog.domainLastSeen=e.domainLastSeen,this.placeDialog.domainUsers=e.domainUsers},canEditPlace:function(e){return s.account.useAsAdmin||s.account.accountId===e},beginEditingPlace:function(e){this.editingPlace=e},deletePlace:function(e,t){confirm("Are you sure you want to delete "+t+"?")&&this.postDeletePlace(e)},retrievePlacesList:function(e){var t=window.$.param({asAdmin:s.account.useAsAdmin});t="?"+t,this.placesDataTableLoading=!0;var a="/api/v1/places";this.showOnlyMineStore&&(a="/api/v1/user/places"),window.$.ajax({type:"GET",url:e+a+t,contentType:"application/json"}).done((function(e){n.placesDataTableLoading=!1,n.places=[],e.data.places.forEach((function(e,t){var a={name:e.name,placeID:e.placeId,address:e.address,description:e.description,thumbnail:e.thumbanil,images:e.images};e.domain&&(a.domainID=e.domain.id,a.domainName=e.domain.name,a.domainNetworkAddress=e.domain.network_address,a.domainIceServer=e.domain.ice_server_address,a.domainLastSeen=e.domain.time_of_last_heartbeat,a.domainUsers=e.domain.num_users,a.accountID=e.domain.sponsorAccountId),n.places.push(a)}))})).fail((function(e){n.placesDataTableLoading=!1,console.info("Failed to retrieve places list: ",e),n.$store.commit("mutate",{property:"error",with:{title:"Failed to retrieve places list.",code:"2",full:e.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))},retrieveDomainList:function(e){var t=window.$.param({asAdmin:s.account.useAsAdmin});t="?"+t,window.$.ajax({type:"GET",url:e+"/api/v1/domains"+t,contentType:"application/json"}).done((function(e){n.domains=[],e.data.domains.forEach((function(e,t){n.domains.push({name:e.name,domainID:e.domainId,created:e.when_domain_entry_created})}))})).fail((function(e){console.info("Failed to retrieve domain list: ",e)}))},postAddPlace:function(){if(this.$refs.addPlaceForm.validate()){this.addPlaceDialogShow=!1;var e={place:{name:n.addPlaceDialog.name,description:n.addPlaceDialog.description,address:n.addPlaceDialog.address,domainId:n.addPlaceDialog.domainID}},t=window.$.param({asAdmin:s.account.useAsAdmin});t="?"+t,window.$.ajax({type:"POST",url:o+"/api/v1/user/places"+t,contentType:"application/json",data:JSON.stringify(e)}).done((function(e){console.info("Add place successful."),n.snackbarSuccessText="Successfully created place.",n.snackbarSuccessShow=!0,n.$refs.addPlaceForm.reset(),n.retrievePlacesList(o)})).fail((function(e){console.info("Failed to add place:",e),n.$store.commit("mutate",{property:"error",with:{title:"Failed to add place "+n.addPlaceDialog.name,code:"3",full:e.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),n.retrievePlacesList(o)}))}},postUpdatePlace:function(e,t,a){var i=window.$.param({asAdmin:s.account.useAsAdmin});i="?"+i;var l={set:a};this.editPlace[t+"Loading"]=!0,window.$.ajax({type:"POST",url:o+"/api/v1/places/"+e+"/field/"+t+i,contentType:"application/json",data:JSON.stringify(l)}).done((function(i){console.info("Successfully updated place:",e),n.editPlace[t+"Loading"]=!1,n.placeDialog[t]=a,n.snackbarSuccessText="Successfully updated place.",n.snackbarSuccessShow=!0,n.retrievePlacesList(o)})).fail((function(a){console.info("Failed to update place:",e),n.editPlace[t+"Loading"]=!1,n.$store.commit("mutate",{property:"error",with:{title:"Failed to update place:"+e,code:"3",full:a.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),n.retrievePlacesList(o)}))},postDeletePlace:function(e){var t=window.$.param({asAdmin:s.account.useAsAdmin});t="?"+t,window.$.ajax({type:"DELETE",url:o+"/api/v1/user/places/"+e+t}).done((function(t){console.info("Successfully deleted place:",e),n.snackbarSuccessText="Successfully deleted place.",n.snackbarSuccessShow=!0,n.retrievePlacesList(o)})).fail((function(t){console.info("Failed to delete place:",e),n.$store.commit("mutate",{property:"error",with:{title:"Failed to delete place:"+e,code:"3",full:t.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),n.retrievePlacesList(o)}))}}),i),m=h,v=a("2877"),f=a("6544"),g=a.n(f),D=a("c6a6"),b=a("8212"),w=a("8336"),I=a("b0af"),S=a("99d9"),x=a("cc20"),P=a("8fea"),y=a("169a"),_=a("ce7e"),k=a("cd55"),V=a("49e2"),A=a("c865"),L=a("0393"),T=a("4bd4"),$=a("132d"),C=a("8860"),O=a("da13"),E=a("5d23"),M=a("0789"),F=a("2db4"),N=a("2fa4"),j=a("b73d"),z=a("8654"),R=a("a844"),B=a("71d9"),H=a("2a7f"),U=a("3a2f"),G=Object(v["a"])(m,r,d,!1,null,null,null),q=G.exports;g()(G,{VAutocomplete:D["a"],VAvatar:b["a"],VBtn:w["a"],VCard:I["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VChip:x["a"],VDataTable:P["a"],VDialog:y["a"],VDivider:_["a"],VExpansionPanel:k["a"],VExpansionPanelContent:V["a"],VExpansionPanelHeader:A["a"],VExpansionPanels:L["a"],VForm:T["a"],VIcon:$["a"],VList:C["a"],VListItem:O["a"],VListItemContent:E["a"],VListItemSubtitle:E["b"],VListItemTitle:E["c"],VScrollXReverseTransition:M["e"],VScrollXTransition:M["f"],VSnackbar:F["a"],VSpacer:N["a"],VSwitch:j["a"],VTextField:z["a"],VTextarea:R["a"],VToolbar:B["a"],VToolbarTitle:H["a"],VTooltip:U["a"]});var J={name:"Places",props:{source:String},components:{PlacesList:q}},K=J,X=a("7496"),Y=a("a523"),Q=a("f6c4"),W=a("0fd9"),Z=Object(v["a"])(K,l,c,!1,null,null,null);t["default"]=Z.exports;g()(Z,{VApp:X["a"],VContainer:Y["a"],VMain:Q["a"],VRow:W["a"]})}}]);
//# sourceMappingURL=chunk-1d331ef2.75788079.js.map