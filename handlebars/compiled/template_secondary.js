this["custom"] = this["custom"] || {};
this["custom"]["templates"] = this["custom"]["templates"] || {};

this["custom"]["templates"]["template_secondary"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li class=\"rounded-sm mg-b-sm bg-c-gray-light pd-sm\">\n                <h4>Index: "
    + alias3(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":27},"end":{"line":5,"column":37}}}) : helper)))
    + "</h4>\n                <p>Hi, my name is <strong>"
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"properties") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</strong> and I am "
    + alias3((lookupProperty(helpers,"article")||(depth0 && lookupProperty(depth0,"article"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"properties") : depth0)) != null ? lookupProperty(stack1,"occupation") : stack1),{"name":"article","hash":{},"data":data,"loc":{"start":{"line":6,"column":80},"end":{"line":6,"column":113}}}))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? lookupProperty(depth0,"properties") : depth0)) != null ? lookupProperty(stack1,"occupation") : stack1), depth0))
    + ". I know "
    + alias3((lookupProperty(helpers,"listJoin")||(depth0 && lookupProperty(depth0,"listJoin"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"properties") : depth0)) != null ? lookupProperty(stack1,"skills") : stack1),{"name":"listJoin","hash":{},"data":data,"loc":{"start":{"line":6,"column":148},"end":{"line":6,"column":178}}}))
    + ".</p>\n            </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n   <ul class=\"list-unstyled\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"persons") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":8,"column":17}}})) != null ? stack1 : "")
    + "   </ul>";
},"useData":true});