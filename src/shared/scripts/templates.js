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

window["App"]["Templates"]["CPICTURE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pictureContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pictureClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return " lazyload";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<source "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depths[1] != null ? depths[1].settings : depths[1])) != null ? stack1.lazyload : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "srcset=\""
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.srcset : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	        "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.sizes : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.media : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " />\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "data-";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers.unless.call(alias1,(data && data.first),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + container.escapeExpression((helpers.getUrl || (depth0 && depth0.getUrl) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.src : depth0),{"name":"getUrl","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.imageWidth : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return ", ";
},"15":function(container,depth0,helpers,partials,data) {
    var helper;

  return " "
    + container.escapeExpression(((helper = (helper = helpers.imageWidth || (depth0 != null ? depth0.imageWidth : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"imageWidth","hash":{},"data":data}) : helper)));
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " sizes=\""
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sizes : depth0),{"name":"each","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers.unless.call(alias1,(data && data.first),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.screenWidth || (depth0 != null ? depth0.screenWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screenWidth","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.imageWidth || (depth0 != null ? depth0.imageWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageWidth","hash":{},"data":data}) : helper)));
},"20":function(container,depth0,helpers,partials,data) {
    var helper;

  return " media=\""
    + container.escapeExpression(((helper = (helper = helpers.media || (depth0 != null ? depth0.media : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"media","hash":{},"data":data}) : helper)))
    + "\"";
},"22":function(container,depth0,helpers,partials,data) {
    var helper;

  return " type=\""
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data}) : helper)))
    + "\"";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "		<img class=\"picture__image"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.lazyload : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" src=\""
    + alias2((helpers.getUrl || (depth0 && depth0.getUrl) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.fallbackSrc : stack1),{"name":"getUrl","hash":{},"data":data}))
    + "\" alt=\""
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "		<h3 style=\"color: red; font-weight: bold;\">Define a fallback picture!</h3>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<picture class=\"c-picture"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pictureContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n	"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.pictureClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.lazyload : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-css=\"c-picture\">\n\n	<!--[if IE 9]><audio><![endif]-->\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<!--[if IE 9]></audio><![endif]-->\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.fallbackSrc : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.program(26, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</picture>";
},"useData":true,"useDepths":true});

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
    var stack1;

  return "					<h2 class=\"scroll-item__headline\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.headline : stack1), depth0)) != null ? stack1 : "")
    + "</h2>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<ul class=\"scroll-item__keywords\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.keywords : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</ul>\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "							<li class=\"scroll-item__keywords-item\">\n								"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n							</li>\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "			<div class=\"scroll-item__cta-wrapper\">\n				<button class=\"scroll-item__cta is-view\" data-js-item=\"open-case\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.cta : stack1)) != null ? stack1.view : stack1), depth0))
    + "</button>\n				<button class=\"scroll-item__cta is-hide\" data-js-item=\"close-case\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.cta : stack1)) != null ? stack1.hide : stack1), depth0))
    + "</button>\n			</div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"scroll-item__case\">\n		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\n		Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n\n		Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n\n		Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n\n		Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.\n\n		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n\n		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n\n		Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\n\n		Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.\n\n		Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n\n		Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.\n\n		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n	</div>\n";
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
    + ">\n\n	<div class=\"scroll-item__header\">\n		<div class=\"scroll-item__bg\">\n			<div class=\"scroll-item__bg-overlay\"></div>\n		</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.img : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n		<div class=\"scroll-item__textouter\">\n			<div class=\"scroll-item__textinner\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.headline : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.keywords : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.cta : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1["case"] : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});

return window["App"]["Templates"];

};