this.custom=this.custom||{},this.custom.templates=this.custom.templates||{},this.custom.templates.faicons=Handlebars.template({1:function(n,e,l,t,a){var o,s=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,c="function",u=n.escapeExpression,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'    <div class="flex-col fa-helper faindex-'+u(typeof(o=null!=(o=r(l,"index")||a&&r(a,"index"))?o:i)===c?o.call(s,{name:"index",hash:{},data:a,loc:{start:{line:2,column:43},end:{line:2,column:53}}}):o)+' mg-b-sm">\n        <div class="h2 text-white text-center pd-sm rounded-full line-height-0"><i class="fab fa-'+u(typeof(o=null!=(o=r(l,"name")||(null!=e?r(e,"name"):e))?o:i)===c?o.call(s,{name:"name",hash:{},data:a,loc:{start:{line:3,column:97},end:{line:3,column:105}}}):o)+'"></i></div>\n    </div>\n'},compiler:[8,">= 4.3.0"],main:function(n,e,l,t,a){var o,s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(o=s(l,"each").call(null!=e?e:n.nullContext||{},null!=e?s(e,"icons"):e,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:0},end:{line:5,column:9}}}))?o:""},useData:!0});