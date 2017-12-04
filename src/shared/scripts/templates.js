module.exports = function(Handlebars) {

window["App"] = window["App"] || {};
window["App"]["Templates"] = window["App"]["Templates"] || {};

window["App"]["Templates"]["HEADER"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.headerContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.headerClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.logo,depth0,{"name":"logo","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.navigation,depth0,{"name":"navigation","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"c-header"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.headerContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.headerClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	 data-css=\"c-header\">\n\n	<div class=\"header__content\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.logo : depth0)) != null ? stack1.variations : stack1)) != null ? stack1["default"] : stack1),{"name":"with","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.navigation : depth0)) != null ? stack1.variations : stack1)) != null ? stack1["default"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"usePartial":true,"useData":true});

window["App"]["Templates"]["LOGO"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.logoContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.logoClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n     data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.logoJsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n\n<button class=\"c-logo"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.logoContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.logoClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-logo\"\n     data-js-module=\"logo\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.logoJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n\n</button>\n";
},"useData":true});

window["App"]["Templates"]["NAVIGATION"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.navigationContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.navigationClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n     data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.navigationJsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li class=\"navigation__list-item "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isActive : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["class"] : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-js-item=\"navigation-item\">\n				<a href=\"#"
    + alias4(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data}) : helper)))
    + "\" data-js-item=\"navigation-link\" class=\"navigation__list-link\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n			</li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "is-active";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"class","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n\n<div class=\"c-navigation"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.navigationContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.navigationClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-navigation\"\n     data-js-module=\"navigation\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.navigationJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n\n     <ul class=\"navigation__list\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	 </ul>\n\n</div>\n";
},"useData":true});

window["App"]["Templates"]["PAGINATION__ITEM"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<li class=\"pagination__list-item\">\n	<button data-js-item=\"pagination-item\" class=\"pagination__btn\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</button>\n</li>\n";
},"useData":true});

window["App"]["Templates"]["PAGINATION"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.paginationContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.paginationClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n	 data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.paginationJsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"c-pagination"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.paginationContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.paginationClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	 data-css=\"c-pagination\"\n	 data-js-module=\"pagination\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.paginationJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n\n	<ul class=\"pagination__list\">\n		"
    + ((stack1 = ((helper = (helper = helpers["yield"] || (depth0 != null ? depth0["yield"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"yield","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n	</ul>\n\n</div>\n";
},"useData":true});

window["App"]["Templates"]["SCROLLCONTAINER"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollContainerContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollContainerClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n     data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollContainerJsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n\n<div class=\"c-scroll-container"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollContainerContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollContainerClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-scroll-container\"\n     data-js-module=\"scroll-container\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollContainerJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n\n	"
    + ((stack1 = ((helper = (helper = helpers["yield"] || (depth0 != null ? depth0["yield"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"yield","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n";
},"useData":true});

window["App"]["Templates"]["SCROLLITEM"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollItemContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollItemClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n	 data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollItemJsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "			<div class=\"scroll-item__imagewrapper\">\n				<img class=\"scroll-item__image\" src=\""
    + alias1((helpers.getUrl || (depth0 && depth0.getUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.img : stack1)) != null ? stack1.src : stack1),{"name":"getUrl","hash":{},"data":data}))
    + "\" alt=\""
    + alias1(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.img : stack1)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n			</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "				<h2 class=\"scroll-item__headline\"></h2>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<ul class=\"scroll-item__keywords\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.keywords : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</ul>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "						<li class=\"scroll-item__keywords-item\">\n							"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n						</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"c-scroll-item"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollItemContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " section"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollItemClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	 id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollItemID : stack1), depth0))
    + "\"\n	 data-css=\"c-scroll-item\"\n	 data-js-item=\"scroll-item\"\n	 data-js-module=\"scroll-item\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.scrollItemJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n\n	<div class=\"scroll-item__bg\"></div>\n\n	<div class=\"scroll-item__header\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.img : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<div class=\"scroll-item__textwrapper\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.headline : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.keywords : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n\n</div>\n";
},"useData":true});

return window["App"]["Templates"];

};