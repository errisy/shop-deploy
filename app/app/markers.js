"use strict";var _createClass=function(){function c(d,f){for(var h,g=0;g<f.length;g++)h=f[g],h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(d,h.key,h)}return function(d,f,g){return f&&c(d.prototype,f),g&&c(d,g),d}}();function _possibleConstructorReturn(c,d){if(!c)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&("object"==typeof d||"function"==typeof d)?d:c}function _inherits(c,d){if("function"!=typeof d&&null!==d)throw new TypeError("Super expression must either be null or a function, not "+typeof d);c.prototype=Object.create(d&&d.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(c,d):c.__proto__=d)}function _classCallCheck(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}var __awaiter=function(c,d,f,g){return new(f||(f=Promise))(function(h,j){function k(n){try{m(g.next(n))}catch(o){j(o)}}function l(n){try{m(g["throw"](n))}catch(o){j(o)}}function m(n){n.done?h(n.value):new f(function(o){o(n.value)}).then(k,l)}m((g=g.apply(c,d||[])).next())})};try{require.resolve("errisy-task")&&function(){var c=require("errisy-task");__awaiter=function(d,f,g,h){return new(g||(g=c))(function(j,k,l){l?function(){var m=function(r){try{l.cancelled||o(h.next(r))}catch(s){k(s)}},n=function(r){try{l.cancelled||o(h["throw"](r))}catch(s){k(s)}},o=function(r){l.clear(),r.done?j(r.value):l.append(new g(function(s){s(r.value)})).then(m,n)};o((h=h.apply(d,f||[])).next())}():function(){var m=function(r){try{o(h.next(r))}catch(s){k(s)}},n=function(r){try{o(h["throw"](r))}catch(s){k(s)}},o=function(r){r.done?j(r.value):new g(function(s){s(r.value)}).then(m,n)};o((h=h.apply(d,f||[])).next())}()})}}()}catch(c){}Object.defineProperty(exports,"__esModule",{value:!0});var SKUtil=function(){function c(){_classCallCheck(this,c)}return _createClass(c,null,[{key:"findHoursForToday",value:function(f,g){var h=util.date(),j=util.weekday();return c.findHoursForDay(h,j,f,g)}},{key:"findHoursForDay",value:function(f,g,h,j){var k=h&&h.find(function(l){return l.Day==f});return k?{Day:f,Weekday:g,Closed:!Array.isArray(k.OpeningHour)||0==k.OpeningHour.length,OpeningHour:k.OpeningHour}:j?{Day:f,Weekday:g,Closed:!Array.isArray(j[g])||0==j[g].length,OpeningHour:j[g]}:{Day:f,Weekday:g,Closed:!0,OpeningHour:[]}}},{key:"find7DayHours",value:function(f,g){for(var h=[],j=0;7>j;j++){var k=util.date(j),l=util.weekday(j);h.push(c.findHoursForDay(k,l,f,g))}return h}},{key:"find15DayOpenHours",value:function(f,g){for(var h=[],j=0;15>j;j++){var k=util.date(j),l=util.weekday(j),m=c.findHoursForDay(k,l,f,g);m.Closed||h.push(m)}return h}}]),c}();exports.SKUtil=SKUtil;var util;(function(c){c.toYYYYMMDD=function(j){var k=new Date(j);return k.getFullYear()+"-"+(k.getMonth()+1+"").padLeft(2,"0")+"-"+(k.getDate()+"").padLeft(2,"0")},c.date=function(j){("number"!=typeof j||Number.isNaN(j))&&(j=0);var k=new Date(Date.now()+8.64e7*j);return k.getFullYear()+"-"+(k.getMonth()+1+"").padLeft(2,"0")+"-"+(k.getDate()+"").padLeft(2,"0")};var h=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];c.weekday=function(j){return("number"!=typeof j||Number.isNaN(j))&&(j=0),h[new Date(Date.now()+8.64e7*j).getDay()]}})(util||(util={})),exports.ShopIcon={url:"https://rawgit.com/errisy/deploy/master/svg/shop2.svg",size:new google.maps.Size(48,48),scaledSize:new google.maps.Size(48,48),anchor:new google.maps.Point(24,24)},exports.HouseIcon={url:"https://rawgit.com/errisy/deploy/master/svg/house.svg",size:new google.maps.Size(48,48),scaledSize:new google.maps.Size(48,48),anchor:new google.maps.Point(24,24)};var ShopWindowMarker=function(c){function d(f){_classCallCheck(this,d);var g=_possibleConstructorReturn(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,f));return g.addListener("click",function(){return __awaiter(g,void 0,void 0,regeneratorRuntime.mark(function h(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,this.showInfoWindow();case 2:case"end":return k.stop();}},h,this)}))}),g}return _inherits(d,c),_createClass(d,null,[{key:"setupGoogleMapShopWindowClickHost",value:function(g){window.GoogleMapShopWindowClick=g}}]),_createClass(d,[{key:"BuildShop",value:function(g,h,j,k){this.InfoWindow&&this.InfoWindow.close();var l=0<this.Shop.ServiceAllowedNumberOfEntry?5:3,m=j&&0<j.length?j.split(/\s+/g).filter(function(o){return 0<o.length}).map(function(o){return new RegExp(o,"ig")}):void 0;this.Shop.DisplayedProducts=Array.isArray(this.Shop.Products)?this.Shop.Products.filter(function(o,q){if(q>=l)return!1;if(g&&"All"!=g._id&&(!g.Products||g.Products.every(function(u){return u!=o.Product})))return!1;if(h&&"All"!=h._id&&h._id!=o.Product&&(!h.Secondaries||h.Secondaries.every(function(u){return u!=o.Product})))return!1;var r;if(k){var s=k.find(function(u){return u._id==o.Product});s&&(r=s.Name)}return m&&!m.some(function(u){return u.lastIndex=void 0,!!u.test(o.Description)||r&&(u.lastIndex=void 0,u.test(r))})?!1:!0}):[],this.hasEntries=0<this.Shop.DisplayedProducts.length;var n=this.Shop;this.infoWindowHTML="<div class=\"infowindow-shop\">\n<span class=\"title app-title-btn\" onclick=\"window.GoogleMapShopWindowClick."+d.titleClick+"('"+n._id+"', true);\">"+n.Name+"</span>\n<span class=\"hours\">"+SKUtil.findHoursForToday(n.ScheduledHours,n.OpeningHours).OpeningHour.map(function(o){return o.From+"-"+o.To}).join(" ")+"</span>\n<div class=\"img-list\">"+n.DisplayedProducts.filter(function(o,q){return 3>q}).map(function(o){return"<div class=\"list-item app-border-btn\"  onclick=\"window.GoogleMapShopWindowClick."+d.itemClick+"('"+n._id+"', '"+o._id+"', true);\">\n<div class=\"item-image\" style=\"background-image: url("+o.Images[0]+");\"  title=\"$"+o.Price+"/"+o.Unit+" "+o.Description+"\"></div>\n<span class=\"item-price\">$"+o.Price+"/"+o.Unit+"</span><span class=\"item-des\">"+o.Description+"</span>\n</div>"}).join("")+"</div>\n</div>",this.InfoWindow=new google.maps.InfoWindow({content:this.infoWindowHTML,disableAutoPan:!0})}},{key:"showInfoWindow",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function g(){return regeneratorRuntime.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:this.InfoWindow.getMap()?this.InfoWindow.close():this.InfoWindow.open(this.getMap(),this);case 1:case"end":return j.stop();}},g,this)}))}},{key:"destroy",value:function(){this.InfoWindow&&this.InfoWindow.close(),this.infoWindowHTML=void 0,this.onRequireInfoWindow=void 0,this.setMap(void 0)}}]),d}(google.maps.Marker);exports.ShopWindowMarker=ShopWindowMarker;var RentalWindowMarker=function(c){function d(f){_classCallCheck(this,d);var g=_possibleConstructorReturn(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,f));return g.MapReference=f.map,g.addListener("click",function(){return __awaiter(g,void 0,void 0,regeneratorRuntime.mark(function h(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,this.showInfoWindow();case 2:case"end":return k.stop();}},h,this)}))}),g}return _inherits(d,c),_createClass(d,null,[{key:"setupGoogleMapRentalWindowClickHost",value:function(g){window.GoogleMapRentalWindowClick=g}}]),_createClass(d,[{key:"showInfoWindow",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function g(){return regeneratorRuntime.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:this.InfoWindow.getMap()?this.InfoWindow.close():this.InfoWindow.open(this.getMap(),this);case 1:case"end":return j.stop();}},g,this)}))}},{key:"BuildEntry",value:function(g,h,j){this.InfoWindow&&this.InfoWindow.close();j&&0<j.length?j.split(/\s+/g).filter(function(n){return 0<n.length}).map(function(n){return new RegExp(n,"ig")}):void 0;g&&("All"==g._id||g._id==this.Entry.Category)&&h&&("All"==h._id||h._id==this.Entry.Product)?this.setMap(this.MapReference):this.setMap(void 0);var m=this.Entry;this.infoWindowHTML="<div class=\"infowindow-rental\">\n<div>\n<span class=\"title app-title-btn\" onclick=\"window.GoogleMapRentalWindowClick."+d.titleClick+"('"+m._id+"', true);\">"+m.Category+"</span>\n</div>\n<div>\n<span class=\"hours\">"+m.StreetNumber+", "+m.Street+"</span>\n</div>\n<div class=\"img-list\">"+m.Images.filter(function(n,o){return 3>o}).map(function(n){return"<div class=\"list-item app-border-btn\"  onclick=\"window.GoogleMapRentalWindowClick."+d.titleClick+"('"+m._id+"', true);\">\n<div class=\"item-image\" style=\"background-image: url("+n+");\"></div>\n</div>"}).join("")+"</div>\n<div class=\"field\">\n"+d.buildContent(m)+"\n</div>\n<div>\n<span class=\"available\">Available: "+util.toYYYYMMDD(m.StartTime)+"</span>\n</div>\n<div>\n<span class=\"price\">$"+m.Price+"/Week</span>\n</div>\n</div>",this.InfoWindow=new google.maps.InfoWindow({content:this.infoWindowHTML,disableAutoPan:!0}),this.InfoWindow.open(this.MapReference,this)}},{key:"destroy",value:function(){this.InfoWindow&&this.InfoWindow.close(),this.infoWindowHTML=void 0,this.onRequireInfoWindow=void 0,this.setMap(void 0)}}],[{key:"buildContent",value:function(g){switch(g.Category){case"Room":return"\n"+(g.RentalRoom.CanLock?"<img class=\"unit\" title=\"Key Lock\" src=\"https://rawgit.com/errisy/deploy/master/svg/lock.svg\" />":"")+" \n\n<img class=\"unit\" title=\"Toilet\" src=\"https://rawgit.com/errisy/deploy/master/svg/toilet.svg\" />\n<span class=\"number"+("Private"==g.RentalRoom.Toilet?" private":"")+"\" title=\""+g.RentalRoom.Toilet+"\">"+("Private"==g.RentalRoom.Toilet?"P":"S")+"</span>\n\n<img class=\"unit\" title=\"Bathroom\" src=\"https://rawgit.com/errisy/deploy/master/svg/bathroom.svg\" />\n<span class=\"number"+("Private"==g.RentalRoom.Bathroom?" private":"")+"\" title=\""+g.RentalRoom.Bathroom+"\">"+("Private"==g.RentalRoom.Bathroom?"P":"S")+"</span>\n\n"+(["Private","Shared"].some(function(h){return h==g.RentalRoom.Laundry})?"\n<img class=\"unit\" title=\"Laundry\" src=\"https://rawgit.com/errisy/deploy/master/svg/laundry.svg\" />\n<span class=\"number"+("Private"==g.RentalRoom.Laundry?" private":"")+"\" title=\""+g.RentalRoom.Laundry+"\">"+("Private"==g.RentalRoom.Laundry?"P":"S")+"</span>\n":"")+"\n"+(["Private","Shared"].some(function(h){return h==g.RentalRoom.Kitchen})?"\n<img class=\"unit\" title=\"Kitchen\" src=\"https://rawgit.com/errisy/deploy/master/svg/kitchen.svg\" />\n<span class=\"number"+("Private"==g.RentalRoom.Kitchen?" private":"")+"\" title=\""+g.RentalRoom.Kitchen+"\">"+("Private"==g.RentalRoom.Kitchen?"P":"S")+"</span>\n":"")+"\n";case"Unit":case"Apartment":case"Townhouse":case"House":return"\n<img class=\"unit\" title=\"Number of Stories\" src=\"https://rawgit.com/errisy/deploy/master/svg/stairs.svg\" />\n<span class=\"number\">"+g.Building.NumberOfStories+"</span>\n\n<img class=\"unit\" title=\"Number of Bedrooms\" src=\"https://rawgit.com/errisy/deploy/master/svg/bedroom.svg\" />\n<span class=\"number\">"+g.Building.NumberOfBedrooms+"</span>\n\n<img class=\"unit\" title=\"Number of Bathrooms\" src=\"https://rawgit.com/errisy/deploy/master/svg/bathroom.svg\" />\n<span class=\"number\">"+g.Building.NumberOfBathrooms+"</span>\n\n<img class=\"unit\" title=\"Number of Toilets\" src=\"https://rawgit.com/errisy/deploy/master/svg/toilet.svg\" />\n<span class=\"number\">"+g.Building.NumberOfToilets+"</span>\n";case"Bedroom Share":return"";}}}]),d}(google.maps.Marker);exports.RentalWindowMarker=RentalWindowMarker;var RealEstateWindowMarker=function(c){function d(f){_classCallCheck(this,d);var g=_possibleConstructorReturn(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,f));return g.MapReference=f.map,g.addListener("click",function(){return __awaiter(g,void 0,void 0,regeneratorRuntime.mark(function h(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,this.showInfoWindow();case 2:case"end":return k.stop();}},h,this)}))}),g}return _inherits(d,c),_createClass(d,[{key:"showInfoWindow",value:function(){return __awaiter(this,void 0,void 0,regeneratorRuntime.mark(function g(){return regeneratorRuntime.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:this.InfoWindow.getMap()?this.InfoWindow.close():this.InfoWindow.open(this.getMap(),this);case 1:case"end":return j.stop();}},g,this)}))}},{key:"BuildEntry",value:function(g,h,j){this.InfoWindow&&this.InfoWindow.close();j&&0<j.length?j.split(/\s+/g).filter(function(n){return 0<n.length}).map(function(n){return new RegExp(n,"ig")}):void 0;g&&("All"==g._id||g._id==this.Entry.Category)&&h&&("All"==h._id||h._id==this.Entry.Product)?this.setMap(this.MapReference):this.setMap(void 0);var m=this.Entry;this.infoWindowHTML="<div class=\"infowindow-rental\">\n<div>\n<span class=\"title app-title-btn\" onclick=\"window.GoogleMapRealEstateWindowClick."+d.titleClick+"('"+m._id+"', true);\">"+m.Category+"</span>\n</div>\n<div>\n<span class=\"hours\">"+m.StreetNumber+", "+m.Street+"</span>\n</div>\n<div class=\"img-list\">"+m.Images.filter(function(n,o){return 3>o}).map(function(n){return"<div class=\"list-item app-border-btn\"  onclick=\"window.GoogleMapRealEstateWindowClick."+d.titleClick+"('"+m._id+"', true);\">\n<div class=\"item-image\" style=\"background-image: url("+n+");\"></div>\n</div>"}).join("")+"</div>\n<div class=\"field\">\n"+d.buildContent(m)+"\n</div>\n<div>\n<span class=\"price\">"+d.parsePrice(m)+"</span>\n</div>\n</div>",this.InfoWindow=new google.maps.InfoWindow({content:this.infoWindowHTML,disableAutoPan:!0}),this.InfoWindow.open(this.MapReference,this)}},{key:"destroy",value:function(){this.InfoWindow&&this.InfoWindow.close(),this.infoWindowHTML=void 0,this.onRequireInfoWindow=void 0,this.setMap(void 0)}}],[{key:"setupGoogleMapRealEstateWindowClickHost",value:function(g){window.GoogleMapRealEstateWindowClick=g}},{key:"buildContent",value:function(g){switch(g.Category){case"Land":return"Size: "+g.Land.LandSize+"M<sup>2</sup>";default:return"\n<img class=\"unit\" title=\"Number of Stories\" src=\"https://rawgit.com/errisy/deploy/master/svg/stairs.svg\" />\n<span class=\"number\">"+g.MainBuilding.NumberOfStories+"</span>\n\n<img class=\"unit\" title=\"Number of Bedrooms\" src=\"https://rawgit.com/errisy/deploy/master/svg/bedroom.svg\" />\n<span class=\"number\">"+g.MainBuilding.NumberOfBedrooms+"</span>\n\n<img class=\"unit\" title=\"Number of Bathrooms\" src=\"https://rawgit.com/errisy/deploy/master/svg/bathroom.svg\" />\n<span class=\"number\">"+g.MainBuilding.NumberOfBathrooms+"</span>\n\n<img class=\"unit\" title=\"Number of Toilets\" src=\"https://rawgit.com/errisy/deploy/master/svg/toilet.svg\" />\n<span class=\"number\">"+g.MainBuilding.NumberOfToilets+"</span>\n";}}},{key:"parsePrice",value:function(g){switch(g.PriceStrategy){case"Exact Price":return"$"+g.Price;case"Plus":return"$"+g.Price+" Plus";case"Offers Over":return"Offers over $"+g.Price;case"POA":return"POA";case"Submit Your Offer":return"Submit Your Offer";case"Auction":return"Auction on "+g.AuctionDate;default:return"Negotiation";}}}]),d}(google.maps.Marker);RealEstateWindowMarker.ExplicitPriceStrategies=["Exact Price","Plus","Offers Over"],RealEstateWindowMarker.InexplicitPriceStrategies=["POA","Submit Your Offer","Auction"],exports.RealEstateWindowMarker=RealEstateWindowMarker;var SuburbMarker=function(c){function d(f){_classCallCheck(this,d);var g=_possibleConstructorReturn(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,f));return g.addListener("click",function(){return __awaiter(g,void 0,void 0,regeneratorRuntime.mark(function h(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:d.onSuburbClick&&d.onSuburbClick(this.Suburb._id,this.Suburb.Location.coordinates[1],this.Suburb.Location.coordinates[0]);case 1:case"end":return k.stop();}},h,this)}))}),g}return _inherits(d,c),_createClass(d,[{key:"destroy",value:function(){this.setMap(void 0)}}]),d}(google.maps.Marker);exports.SuburbMarker=SuburbMarker;var RegionMarker=function(c){function d(f){_classCallCheck(this,d);var g=_possibleConstructorReturn(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,f));return g.addListener("click",function(){return __awaiter(g,void 0,void 0,regeneratorRuntime.mark(function h(){return regeneratorRuntime.wrap(function(k){for(;;)switch(k.prev=k.next){case 0:d.onRegionClick&&d.onRegionClick(this.Region._id,this.Region.Location.coordinates[1],this.Region.Location.coordinates[0]);case 1:case"end":return k.stop();}},h,this)}))}),g}return _inherits(d,c),_createClass(d,[{key:"destroy",value:function(){this.setMap(void 0)}}]),d}(google.maps.Marker);exports.RegionMarker=RegionMarker;function IndexSorter(c,d){return"number"==typeof c.Index?"number"==typeof d.Index?Math.sign(c.Index-d.Index):-1:"number"==typeof d.Index?1:0}exports.IndexSorter=IndexSorter;