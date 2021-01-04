webpackJsonp([55],{E24t:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Dd8w"),n=a.n(o),s=a("g4PW"),i=a.n(s),r=a("fZjL"),m=a.n(r),c=a("+6Bu"),l=a.n(c),d={labelCol:{span:3},wrapperCol:{span:18}},u={name:"MenuEdit",components:{Icons:a("gInO").default},props:{menuEditVisiable:{default:!1}},data:function(){return{loading:!1,formItemLayout:d,form:this.$form.createForm(this),menuTreeKey:+new Date,menu:{icon:""},checkedKeys:[],expandedKeys:[],menuTreeData:[],defaultCheckedKeys:[],iconChooseVisible:!1}},methods:{reset:function(){this.loading=!1,this.menuTreeKey=+new Date,this.expandedKeys=this.checkedKeys=this.defaultCheckedKeys=[],this.menu={},this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleCheck:function(e){this.checkedKeys=e},expandAll:function(){this.expandedKeys=this.allTreeKeys},closeAll:function(){this.expandedKeys=[]},handleExpand:function(e){this.expandedKeys=e},chooseIcons:function(){this.iconChooseVisible=!0},handleIconCancel:function(){this.iconChooseVisible=!1},handleIconChoose:function(e){this.menu.icon=e,this.iconChooseVisible=!1},deleteIcons:function(){this.menu.icon=""},setFormValues:function(e){var t=this,a=l()(e,[]),o=["path","component","icon"];m()(a).forEach(function(e){if(-1!==o.indexOf(e)){t.form.getFieldDecorator(e);var n={};n[e]=a[e],t.form.setFieldsValue(n)}}),this.form.getFieldDecorator("menuName"),this.form.setFieldsValue({menuName:a.text}),this.form.getFieldDecorator("perms"),this.form.setFieldsValue({perms:a.permission}),this.form.getFieldDecorator("orderNum"),this.form.setFieldsValue({orderNum:a.order}),this.menu.icon=a.icon,"0"!==a.parentId&&(this.defaultCheckedKeys.push(a.parentId),this.checkedKeys=this.defaultCheckedKeys,this.expandedKeys=this.checkedKeys),this.menu.menuId=a.id,this.menuTreeKey=+new Date},handleSubmit:function(){var e=this,t=i()(this.checkedKeys.checked,void 0)?this.checkedKeys:this.checkedKeys.checked;return t.length>1?void this.$message.error("最多只能选择一个上级菜单，请修改"):t[0]===this.menu.menuId?void this.$message.error("不能选择自己作为上级菜单，请修改"):void this.form.validateFields(function(a,o){if(!a){e.loading=!0;var s=e.menu.icon,i=e.form.getFieldsValue();i.icon=s,i.menuId=e.menu.menuId,t.length?i.parentId=t[0]:i.parentId="",i.type="0",e.$put("menu",n()({},i)).then(function(){e.reset(),e.$emit("success")}).catch(function(){e.loading=!1})}})}},watch:{menuEditVisiable:function(){var e=this;this.menuEditVisiable&&this.$get("menu",{type:"0"}).then(function(t){e.menuTreeData=t.data.rows.children,e.allTreeKeys=t.data.ids,e.menuTreeKey=+new Date})}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:"修改菜单",maskClosable:!1,width:"650",placement:"right",closable:!1,visible:e.menuEditVisiable},on:{close:e.onClose}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",e._b({attrs:{label:"菜单名称"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["menuName",{rules:[{required:!0,message:"菜单名称不能为空"},{max:10,message:"长度不能超过10个字符"}]}],expression:"['menuName',\n                 {rules: [\n                  { required: true, message: '菜单名称不能为空'},\n                  { max: 10, message: '长度不能超过10个字符'}\n                ]}]"}]})],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"菜单URL"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["path",{rules:[{required:!0,message:"菜单URL不能为空"},{max:50,message:"长度不能超过50个字符"}]}],expression:"['path',\n               {rules: [\n                { required: true, message: '菜单URL不能为空'},\n                { max: 50, message: '长度不能超过50个字符'}\n              ]}]"}]})],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"组件地址"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["component",{rules:[{required:!0,message:"组件地址不能为空"},{max:100,message:"长度不能超过100个字符"}]}],expression:"['component',\n               {rules: [\n                { required: true, message: '组件地址不能为空'},\n                { max: 100, message: '长度不能超过100个字符'}\n              ]}]"}]})],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"相关权限"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["perms",{rules:[{max:50,message:"长度不能超过50个字符"}]}],expression:"['perms',\n                 {rules: [\n                  { max: 50, message: '长度不能超过50个字符'}\n                ]}]"}]})],1),e._v(" "),a("a-form-item",e._b({directives:[{name:"decorator",rawName:"v-decorator",value:["icon"],expression:"['icon']"}],attrs:{label:"菜单图标"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{attrs:{placeholder:"点击右侧按钮选择图标"},model:{value:e.menu.icon,callback:function(t){e.$set(e.menu,"icon",t)},expression:"menu.icon"}},[e.menu.icon?a("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:e.deleteIcons},slot:"suffix"}):e._e(),e._v(" "),a("a-icon",{staticStyle:{cursor:"pointer"},attrs:{slot:"addonAfter",type:"setting"},on:{click:e.chooseIcons},slot:"addonAfter"})],1)],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"菜单排序"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderNum"],expression:"['orderNum']"}],staticStyle:{width:"100%"}})],1),e._v(" "),a("a-form-item",e._b({staticStyle:{"margin-bottom":"2rem"},attrs:{label:"上级菜单"}},"a-form-item",e.formItemLayout,!1),[a("a-tree",{key:e.menuTreeKey,ref:"menuTree",attrs:{checkable:!0,checkStrictly:!0,expandedKeys:e.expandedKeys,defaultCheckedKeys:e.defaultCheckedKeys,treeData:e.menuTreeData},on:{check:e.handleCheck,expand:e.handleExpand}})],1)],1),e._v(" "),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.expandAll}},[e._v("展开所有")]),e._v(" "),a("a-menu-item",{key:"2",on:{click:e.closeAll}},[e._v("合并所有")])],1),e._v(" "),a("a-button",[e._v("\n        树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),e._v(" "),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.onClose}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),e._v(" "),a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("提交")])],1),e._v(" "),a("icons",{attrs:{iconChooseVisible:e.iconChooseVisible},on:{choose:e.handleIconChoose,close:e.handleIconCancel}})],1)},staticRenderFns:[]},f=a("VU/8")(u,h,!1,null,null,null);t.default=f.exports}});