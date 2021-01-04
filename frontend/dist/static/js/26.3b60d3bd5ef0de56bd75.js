webpackJsonp([26],{jdtc:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),i={data:function(){return{todolist:[],newTodo:"",obsoleteTodo:"",filter:"all",editing:null}},methods:{addTodo:function(){this.newTodo&&this.todolist.push({name:this.newTodo,completed:!1}),this.newTodo=""},deleteTodo:function(e){this.todolist=this.todolist.filter(function(t){return t!==e})},deleteCompletedTodo:function(){this.todolist=this.todolist.filter(function(e){return!e.completed})},editTodo:function(e){this.editing=e,this.obsoleteTodo=e.name},doneTodo:function(e){e.name&&(this.editing=null)},cancelEditTodo:function(){this.editing.name=this.obsoleteTodo,this.doneTodo()}},computed:{allDone:{get:function(){return 0===this.remaining},set:function(e){this.todolist.forEach(function(t){t.completed=e})}},remaining:function(){return this.todolist.filter(function(e){return!e.completed}).length},completedTodo:function(){return this.todolist.filter(function(e){return e.completed}).length},filteredTodolist:function(){return"todo"===this.filter?this.todolist.filter(function(e){return!e.completed}):"done"===this.filter?this.todolist.filter(function(e){return e.completed}):this.todolist},hasTodo:function(){return this.todolist.length>0}},directives:{focus:function(e,t){t&&n.default.nextTick(function(t){e.focus()})}}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"todolist"},[o("header",{staticClass:"todolist__header"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],attrs:{type:"text",placeholder:"添加新任务"},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}})]),e._v(" "),o("article",{staticClass:"todolist__main"},[o("div",[o("label",[e._v("完成全部任务"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.allDone,expression:"allDone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allDone)?e._i(e.allDone,null)>-1:e.allDone},on:{change:function(t){var o=e.allDone,n=t.target,i=!!n.checked;if(Array.isArray(o)){var l=e._i(o,null);n.checked?l<0&&(e.allDone=o.concat([null])):l>-1&&(e.allDone=o.slice(0,l).concat(o.slice(l+1)))}else e.allDone=i}}})])]),e._v(" "),o("ul",e._l(e.filteredTodolist,function(t){return o("li",{key:t.id,class:{completed:t.completed,editing:t===e.editing}},[o("label",{on:{dblclick:function(o){return e.editTodo(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var n=t.completed,i=o.target,l=!!i.checked;if(Array.isArray(n)){var d=e._i(n,null);i.checked?d<0&&e.$set(t,"completed",n.concat([null])):d>-1&&e.$set(t,"completed",n.slice(0,d).concat(n.slice(d+1)))}else e.$set(t,"completed",l)}}}),e._v(" "+e._s(t.name))]),e._v(" "),o("button",{on:{click:function(o){return o.preventDefault(),e.deleteTodo(t)}}},[e._v("删除")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"todo.name"},{name:"focus",rawName:"v-focus",value:t===e.editing,expression:"todo === editing"}],attrs:{type:"text"},domProps:{value:t.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancelEditTodo(t)},input:function(o){o.target.composing||e.$set(t,"name",o.target.value)}}})])}),0)]),e._v(" "),o("footer",{directives:[{name:"show",rawName:"v-show",value:e.hasTodo,expression:"hasTodo"}],staticClass:"todolist__footer"},[o("span",[e._v("总共"+e._s(e.remaining)+"个任务")]),e._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:e.completedTodo,expression:"completedTodo"}],on:{click:function(t){return t.preventDefault(),e.deleteCompletedTodo(t)}}},[e._v("删除所有待办任务")]),e._v(" "),o("ul",[o("li",[o("a",{class:{active:"all"===e.filter},attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.filter="all"}}},[e._v("所有")])]),e._v(" "),o("li",[o("a",{class:{active:"todo"===e.filter},attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.filter="todo"}}},[e._v("待办")])]),e._v(" "),o("li",[o("a",{class:{active:"done"===e.filter},attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.filter="done"}}},[e._v("完成")])])])])])},staticRenderFns:[]},d=o("VU/8")(i,l,!1,function(e){o("vgWF")},null,null);t.default=d.exports},vgWF:function(e,t){}});