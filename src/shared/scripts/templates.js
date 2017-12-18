module.exports = function(Handlebars) {

window["App"] = window["App"] || {};
window["App"]["Templates"] = window["App"]["Templates"] || {};

window["App"]["Templates"]["CASEAPERTO"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseApertoContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseApertoClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.color,depth0,{"name":"color","data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-video"],depth0,{"name":"c-video","data":data,"indent":"\t\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"c-case-aperto"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseApertoContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseApertoClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	 data-css=\"c-case-aperto\">\n	<div class=\"case-aperto__section-wrapper\">\n		<section class=\"case-aperto__wireframes is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n					<h3 class=\"case-aperto__headline\" data-number=\"1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.wireframes : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n				</div>\n				<div class=\"is-col-8\">\n					<p class=\"case-aperto__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.wireframes : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.wireframes : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</section>\n		<section class=\"case-aperto__colors is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n					<h3 class=\"case-aperto__headline\" data-number=\"2\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.colors : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n				</div>\n				<div class=\"is-col-8\">\n					<p class=\"case-aperto__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.colors : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-10 is-offset-1\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.colors : stack1)) != null ? stack1.content : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</section>\n		<section class=\"case-aperto__homepage\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n					<div class=\"case-aperto__homepage-video\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.homepage : stack1),{"name":"with","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n			</div>\n		</section>\n		<section class=\"case-aperto__detail is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-4\">\n					<h3 class=\"case-aperto__subline\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.detail : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n					<p class=\"case-aperto__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.detail : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n				<div class=\"is-col-8\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.detail : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</section>\n		<section class=\"case-aperto__other is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-7\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.other : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n				<div class=\"is-col-5\">\n					<h3 class=\"case-aperto__subline\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.other : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n					<p class=\"case-aperto__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.other : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n		</section>\n		<section class=\"case-aperto__desktop is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-8 is-offset-3\">\n					<p class=\"case-aperto__hint\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.desktop : stack1)) != null ? stack1.hint : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-8\">\n					<div class=\"case-aperto__devices-wrapper\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.desktop : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						<p class=\"case-aperto__caption\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.desktop : stack1)) != null ? stack1.caption : stack1), depth0))
    + "</p>\n					</div>\n				</div>\n			</div>\n		</section>\n		<section class=\"case-aperto__tablet\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-7 is-offset-5\">\n					<div class=\"case-aperto__devices-wrapper\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.tablet : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						<p class=\"case-aperto__caption\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.tablet : stack1)) != null ? stack1.caption : stack1), depth0))
    + "<span>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.tablet : stack1)) != null ? stack1["caption-2"] : stack1), depth0))
    + "</span></p>\n					</div>\n				</div>\n			</div>\n		</section>\n		<section class=\"case-aperto__smartphone\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-7\">\n					<div class=\"case-aperto__devices-wrapper\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.smartphone : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						<p class=\"case-aperto__caption\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.smartphone : stack1)) != null ? stack1.caption : stack1), depth0))
    + "<span>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.smartphone : stack1)) != null ? stack1["caption-2"] : stack1), depth0))
    + "</span></p>\n					</div>\n				</div>\n			</div>\n		</section>\n		<section class=\"case-aperto__magazine\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.magazine : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<div class=\"case-aperto__magazine-content\">\n				<div class=\"is-grid-row\">\n					<div class=\"is-col-12\">\n						<h3 class=\"case-aperto__headline\" data-number=\"5\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.magazine : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n					</div>\n					<div class=\"is-col-8\">\n						<p class=\"case-aperto__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.magazine : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n					</div>\n				</div>\n			</div>\n		</section>\n	</div>\n</div>\n";
},"usePartial":true,"useData":true});

window["App"]["Templates"]["CASEINTRO"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseContentContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseContentClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return "						<p class=\"case-intro__paragraph\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "						<div class=\"case-intro__meta-item\">\n							<h6 class=\"case-intro__meta-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h6>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.icons : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "								<p class=\"case-intro__meta-description\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "								<ul class=\"case-intro__icon-list\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.icons : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "								</ul>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "										<li class=\"case-intro__icon is-"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\"></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"c-case-intro"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseContentContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseContentClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n		 data-css=\"c-case-intro\">\n\n			<div class=\"case-intro__wrapper\">\n				<div class=\"left\">\n					<h3 class=\"case-intro__headline\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.paragraphs : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n				<div class=\"right is-flex-row\">\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.metaList : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n	</div>\n";
},"useData":true});

window["App"]["Templates"]["CASEMAGINEA"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseMagineAContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseMagineAClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.color,depth0,{"name":"color","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<div class=\"c-case-magine-a"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseMagineAContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseMagineAClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	 data-css=\"c-case-magine-a\">\n\n	<img src=\""
    + alias3((helpers.getUrl || (depth0 && depth0.getUrl) || alias2).call(alias1,"media/images/svg/case-magine-a_bg-top.svg",{"name":"getUrl","hash":{},"data":data}))
    + "\" class=\"case-magine-a__intro-image\"/>\n	<img src=\""
    + alias3((helpers.getUrl || (depth0 && depth0.getUrl) || alias2).call(alias1,"media/images/png/splash.png",{"name":"getUrl","hash":{},"data":data}))
    + "\" class=\"case-magine-a__intro-splash\"/>\n\n	<div class=\"case-magine-a__section-wrapper\">\n		<section class=\"case-magine-a__intro is-grid-row\">\n			<div class=\"is-col-12\">\n				<h3 class=\"case-magine-a__headline is-headline\" data-number=\"1\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.intro : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n			</div>\n			<div class=\"is-col-7\">\n				<p class=\"case-magine-a__paragraph\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.intro : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n			</div>\n		</section>\n		<section class=\"case-magine-a__colors is-section is-grid-row\">\n			<div class=\"is-col-12\">\n				<h3 class=\"case-magine-a__subline is-subline\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.colors : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n			</div>\n			<div class=\"is-col-8\">\n				<p class=\"case-magine-a__paragraph\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.colors : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n			</div>\n			<div class=\"is-col-12\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.colors : stack1)) != null ? stack1.content : stack1),{"name":"with","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</section>\n		<section class=\"case-magine-a__packages is-section is-grid-row\">\n			<div class=\"is-col-12\">\n				<h3 class=\"case-magine-a__subline is-subline\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.packages : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n			</div>\n			<div class=\"is-col-8\">\n				<p class=\"case-magine-a__paragraph\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.packages : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n			</div>\n			<div class=\"is-col-10 is-offset-1\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.packages : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</section>\n		<section class=\"case-magine-a__epg is-section\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.epg : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<div class=\"is-grid-row\">\n				<div class=\"is-col-8 is-offset-2\">\n					<p class=\"case-magine-a__caption\">\n						"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.epg : stack1)) != null ? stack1.caption : stack1), depth0))
    + "\n					</p>\n				</div>\n			</div>\n		</section>\n		<section class=\"case-magine-a__player is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-6\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.player : stack1)) != null ? stack1["image-1"] : stack1),{"name":"with","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n				<div class=\"is-col-6\">\n					<h3 class=\"case-magine-a__subline is-subline\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.player : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n					<p class=\"case-magine-a__paragraph\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.player : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.player : stack1)) != null ? stack1["image-2"] : stack1),{"name":"with","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-6\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.player : stack1)) != null ? stack1["image-3"] : stack1),{"name":"with","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n				<div class=\"is-col-6 is-flex-end\">\n					<p class=\"case-magine-a__caption\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.player : stack1)) != null ? stack1.caption : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n		</section>\n		<section class=\"case-magine-a__web is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n					<h3 class=\"case-magine-a__headline is-headline\" data-number=\"2\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.web : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n				</div>\n				<div class=\"is-col-7\">\n					<p class=\"case-magine-a__paragraph\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.web : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n			<div class=\"is-grid-row\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.web : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-8 is-offset-2\">\n					<p class=\"case-magine-a__caption\">\n						"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.web : stack1)) != null ? stack1.caption : stack1), depth0))
    + "\n					</p>\n				</div>\n			</div>\n		</section>\n		<section class=\"case-magine-a__mediathek is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-8 is-offset-4\">\n					<p class=\"case-magine-a__caption\">\n						"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.mediathek : stack1)) != null ? stack1.caption : stack1), depth0))
    + "\n					</p>\n				</div>\n			</div>\n			<div class=\"is-grid-row\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.mediathek : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</section>\n		<section class=\"case-magine-a__single is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-10 is-offset-1\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.single : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</section>\n		<section class=\"case-magine-a__channel is-section\">\n			<div class=\"is-grid-row\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.channel : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</section>\n		<section class=\"case-magine-a__touch is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n					<h3 class=\"case-magine-a__headline is-headline\" data-number=\"3\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.touch : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n				</div>\n				<div class=\"is-col-7\">\n					<p class=\"case-magine-a__paragraph\">"
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.touch : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.touch : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</section>\n	</div>\n</div>\n\n\n\n";
},"usePartial":true,"useData":true});

window["App"]["Templates"]["CASEMAGINEB"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseMagineBContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseMagineBClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.color,depth0,{"name":"color","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"c-case-magine-b"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseMagineBContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseMagineBClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	 data-css=\"c-case-magine-b\">\n	<div class=\"case-magine-b__section-wrapper\">\n		<section class=\"case-magine-b__colors is-grid-row is-section\">\n			<div class=\"is-col-12\">\n				<h3 class=\"case-magine-b__headline\" data-number=\"1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.colors : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n			</div>\n			<div class=\"is-col-8\">\n				<p class=\"case-magine-b__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.colors : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n			</div>\n			<div class=\"is-col-8 is-offset-2\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.colors : stack1)) != null ? stack1.content : stack1),{"name":"with","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</section>\n		<section class=\"case-magine-b__website is-grid-row is-section\">\n			<div class=\"is-col-12\">\n				<h3 class=\"case-magine-b__headline\" data-number=\"2\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.website : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n			</div>\n			<div class=\"is-col-8\">\n				<p class=\"case-magine-b__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.website : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n			</div>\n		</section>\n		<section class=\"case-magine-b__pages is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-6\">\n					<h3 class=\"case-magine-b__subline\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pages : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n					<p class=\"case-magine-b__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pages : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pages : stack1)) != null ? stack1["image-1"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n				<div class=\"is-col-6\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pages : stack1)) != null ? stack1["image-2"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pages : stack1)) != null ? stack1["image-3"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-10\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pages : stack1)) != null ? stack1["image-4"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-5 is-offset-7\">\n					<p class=\"case-magine-b__paragraph is-arrow\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pages : stack1)) != null ? stack1.caption : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n		</section>\n		<section class=\"case-magine-b__modules is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n					<h3 class=\"case-magine-b__subline\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.module : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n				</div>\n				<div class=\"is-col-8\">\n					<p class=\"case-magine-b__paragraph is-arrow\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.module : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n			<div class=\"is-grid-row\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.module : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</section>\n		<section class=\"case-magine-b__signup is-section\">\n			<div class=\"is-grid-row\">\n				<h3 class=\"case-magine-b__subline\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.signup : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n			</div>\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.signup : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<div class=\"is-grid-row\">\n				<div class=\"is-col-8 is-offset-2\">\n					<p class=\"case-magine-b__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.signup : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n		</section>\n		<section class=\"case-magine-b__pricing is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n					<h3 class=\"case-magine-b__subline\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pricing : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n				</div>\n				<div class=\"is-col-8\">\n					<p class=\"case-magine-b__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pricing : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-10 is-offset-1\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pricing : stack1)) != null ? stack1["image-1"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-10 is-offset-1\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pricing : stack1)) != null ? stack1["image-2"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</section>\n		<section class=\"case-magine-b__marketing is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n					<h3 class=\"case-magine-b__headline\" data-number=\"3\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.marketing : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n				</div>\n				<div class=\"is-col-8\">\n					<p class=\"case-magine-b__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.marketing : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-11\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.marketing : stack1)) != null ? stack1["image-1"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-7 is-offset-5\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.marketing : stack1)) != null ? stack1["image-2"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</section>\n\n		<section class=\"case-magine-b__marketing2\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-10\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.marketing : stack1)) != null ? stack1["image-3"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-8 is-offset-4\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.marketing : stack1)) != null ? stack1["image-4"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n		</section>\n	</div>\n</div>\n";
},"usePartial":true,"useData":true});

window["App"]["Templates"]["CASESIEMENS"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseSiemensContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseSiemensClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"c-case-siemens"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseSiemensContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.caseSiemensClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	 data-css=\"c-case-siemens\">\n	<div class=\"case-siemens__section-wrapper\">\n		<section class=\"case-siemens__brand is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n					<h3 class=\"case-siemens__headline\" data-number=\"1\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.brand : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n				</div>\n				<div class=\"is-col-8\">\n					<p class=\"case-siemens__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.brand : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n				<div class=\"is-col-12\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.brand : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.brand : stack1)) != null ? stack1["image-2"] : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</section>\n		<section class=\"case-siemens__pages is-section is-grid-row\">\n			<div class=\"is-col-12\">\n				<h3 class=\"case-siemens__headline\" data-number=\"2\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pages : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n			</div>\n			<div class=\"is-col-8\">\n				<p class=\"case-siemens__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.pages : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n			</div>\n		</section>\n		<section class=\"case-siemens__homepage is-section is-grid-row\">\n			<h3 class=\"case-siemens__subline\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.homepage : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n			<div class=\"case-siemens__homepage-wrapper is-col-11 is-offset-1\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.homepage : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<p class=\"case-siemens__caption\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.homepage : stack1)) != null ? stack1.caption : stack1), depth0))
    + "</p>\n			</div>\n		</section>\n		<section class=\"case-siemens_productlist is-section is-grid-row\">\n			<div class=\"is-col-12\">\n				<h3 class=\"case-siemens__subline\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.productlist : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n			</div>\n			<div class=\"is-col-8\">\n				<p class=\"case-siemens__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.productlist : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n			</div>\n			<div class=\"case-siemens__productlist-wrapper\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.productlist : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				<p class=\"case-siemens__caption\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.productlist : stack1)) != null ? stack1.caption : stack1), depth0))
    + "</p>\n			</div>\n		</section>\n		<section class=\"case-siemens__productdetail is-section is-grid-row\">\n			<div class=\"is-col-12\">\n				<h3 class=\"case-siemens__subline\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.productdetail : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</h3>\n			</div>\n			<div class=\"is-col-8\">\n				<p class=\"case-siemens__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.productdetail : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n			</div>\n			<div class=\"case-siemens__productdetail-wrapper is-col-12\">\n				<div class=\"is-col-8 is-offset-1\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.productdetail : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n				<p class=\"case-siemens__caption\"><span>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.productdetail : stack1)) != null ? stack1["caption-1"] : stack1), depth0))
    + "</span></p>\n				<p class=\"case-siemens__caption\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.productdetail : stack1)) != null ? stack1["caption-2"] : stack1), depth0))
    + "</p>\n			</div>\n		</section>\n		<section class=\"case-siemens__store is-section\">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-12\">\n					<h3 class=\"case-siemens__headline\" data-number=\"3\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.store : stack1)) != null ? stack1.headline : stack1), depth0))
    + "</h3>\n				</div>\n				<div class=\"is-col-8\">\n					<p class=\"case-siemens__paragraph\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.store : stack1)) != null ? stack1.text : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.store : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</section>\n		<section class=\"case-siemens__landingpage is-section \">\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-10 is-offset-2\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.landingpage : stack1)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n			<div class=\"is-grid-row\">\n				<div class=\"is-col-6 is-offset-6\">\n					<p class=\"case-siemens__caption\">"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.landingpage : stack1)) != null ? stack1.caption : stack1), depth0))
    + "</p>\n				</div>\n			</div>\n		</section>\n	</div>\n</div>\n";
},"usePartial":true,"useData":true});

window["App"]["Templates"]["COLOR"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.colorContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.colorClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"color__item\">\n			<p class=\"color__headline\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</p>\n			<div class=\"color__imagewrapper "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isGroup : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "is-group";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "					<div class=\"color__group\">\n						<div class=\"color__image "
    + alias4(((helper = (helper = helpers.colorClass || (depth0 != null ? depth0.colorClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"colorClass","hash":{},"data":data}) : helper)))
    + "\"></div>\n						<p class=\"color__code\">"
    + alias4(((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"code","hash":{},"data":data}) : helper)))
    + "</p>\n					</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"c-color"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.colorContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.colorClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-color\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colorItems : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n";
},"useData":true});

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
    + "</picture>\n";
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
    var stack1;

  return "					<h2 class=\"scroll-item__headline\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.headline : stack1), depth0)) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.subline : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h2>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n						<span> "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.subline : stack1), depth0))
    + "</span>";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<ul class=\"scroll-item__keywords\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.keywords : stack1),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					</ul>\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "							<li class=\"scroll-item__keywords-item\">\n								"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\n							</li>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					<p class=\"scroll-item__text\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.text : stack1), depth0))
    + "</p>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "					<div class=\"scroll-item__cta-wrapper\">\n						<button class=\"scroll-item__cta is-view\" data-js-item=\"open-case\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.cta : stack1)) != null ? stack1.view : stack1), depth0))
    + "</button>\n						<button class=\"scroll-item__cta is-hide is-faded-out\" data-js-item=\"close-case\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.cta : stack1)) != null ? stack1.hide : stack1), depth0))
    + "</button>\n					</div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "					<div class=\"scroll-item__metawrapper\">\n						<p class=\"scroll-item__subline\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.meta : stack1)) != null ? stack1.mail : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</p>\n						<a href=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.meta : stack1)) != null ? stack1.mail : stack1)) != null ? stack1.link : stack1)) != null ? stack1.href : stack1), depth0))
    + "\"\n						   class=\"scroll-item__mail\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.meta : stack1)) != null ? stack1.mail : stack1)) != null ? stack1.link : stack1)) != null ? stack1.text : stack1), depth0))
    + "</a>\n						<p class=\"scroll-item__subline\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.meta : stack1)) != null ? stack1.links : stack1)) != null ? stack1.subline : stack1), depth0))
    + "</p>\n						<ul class=\"scroll-item__links\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.meta : stack1)) != null ? stack1.links : stack1)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "						</ul>\n					</div>\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "								<li class=\"scroll-item__linkitem\">\n									<a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\" class=\"scroll-item__linkitem-link is-"
    + alias4(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></a>\n								</li>\n";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"scroll-item__imagewrapper\">\n"
    + ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.image : stack1),{"name":"with","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["c-picture"],depth0,{"name":"c-picture","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"scroll-item__case-wrapper\">\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.intro : stack1),{"name":"with","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1["case"] : stack1),{"name":"with","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["case-intro"],depth0,{"name":"case-intro","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"magine-a",{"name":"compare","hash":{"operator":"==="},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"magine-b",{"name":"compare","hash":{"operator":"==="},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"siemens",{"name":"compare","hash":{"operator":"==="},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.compare || (depth0 && depth0.compare) || alias2).call(alias1,(depth0 != null ? depth0.type : depth0),"aperto",{"name":"compare","hash":{"operator":"==="},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["case-magine-a"],depth0,{"name":"case-magine-a","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["case-magine-b"],depth0,{"name":"case-magine-b","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"33":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["case-siemens"],depth0,{"name":"case-siemens","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["case-aperto"],depth0,{"name":"case-aperto","data":data,"indent":"\t\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
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
    + ">\n\n	<div class=\"scroll-item__header\">\n		<div class=\"scroll-item__bg\">\n			<div class=\"scroll-item__bg-overlay\"></div>\n		</div>\n\n		<div class=\"scroll-item__textouter\">\n			<div class=\"scroll-item__textinner\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.headline : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.keywords : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.text : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.cta : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.meta : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.image : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1["case"] : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

window["App"]["Templates"]["CVIDEO"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.videoContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.videoClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<source src=\""
    + container.escapeExpression((helpers.getUrl || (depth0 && depth0.getUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.videoMp4 : stack1),{"name":"getUrl","hash":{},"data":data}))
    + "\" type='video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"'/>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<source src=\""
    + container.escapeExpression((helpers.getUrl || (depth0 && depth0.getUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.videoWebm : stack1),{"name":"getUrl","hash":{},"data":data}))
    + "\" type='video/webm; codecs=\"vp8, vorbis\"'/>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression, alias2=container.lambda;

  return "		<track src=\""
    + alias1((helpers.getUrl || (depth0 && depth0.getUrl) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.trackSrc : stack1),{"name":"getUrl","hash":{},"data":data}))
    + "\" kind=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.trackSubtitle : stack1), depth0))
    + "\" srclang=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.trackLang : stack1), depth0))
    + "\"\n			   label=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.trackLabel : stack1), depth0))
    + "\"/>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "<video class=\"c-video"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.videoContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.videoClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n	   data-css=\"c-video\"\n	   data-js-module=\"video\"\n	   poster=\""
    + alias2((helpers.getUrl || (depth0 && depth0.getUrl) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.videoPoster : stack1),{"name":"getUrl","hash":{},"data":data}))
    + "\" "
    + alias2(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.videoOptions : stack1), depth0))
    + "\n	   tabindex=\"0\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.videoMp4 : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.videoWebm : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.content : depth0)) != null ? stack1.videoTrack : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</video>\n";
},"useData":true});

return window["App"]["Templates"];

};