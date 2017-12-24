var catalog_hover = document.querySelector(".main_navigation_item.catalog");
var catalog_open = document.querySelector(".hover_elements .hover_catalog");
var search_hover = document.querySelector(".user_block_search");
var search_open = document.querySelector(".hover_elements .hover_search");
var login_hover = document.querySelector(".user_block_login");
var login_open = document.querySelector(".hover_elements .hover_login");
var cart_hover = document.querySelector(".user_block_cart");
var cart_open = document.querySelector(".hover_elements .hover_cart");
var hover_element_close = document.querySelector(".main_page>*:not(:first-child)");
var body_color_btn_1 = document.querySelector(".slider_controls label[for=btn_1]");
var body_color_btn_2 = document.querySelector(".slider_controls label[for=btn_2]");
var body_color_btn_3 = document.querySelector(".slider_controls label[for=btn_3]");
var body = document.querySelector("body");
var popup_form = document.querySelector(".popup_form");
var popup_form_open = document.querySelector(".contacts .btn");
var popup_form_close = document.querySelector(".popup_form .close_button");
var overlay = document.querySelector(".overlay");
var map_open = document.querySelector(".map");
var map = document.querySelector(".popup_map");
var map_close = document.querySelector(".popup_map .close_button")

map_open.addEventListener("click", function() {
	map.classList.add("popup_map_show");
	overlay.classList.add("overlay_show");
});

map_close.addEventListener("click", function(event) {
	event.preventDefault();
	map.classList.remove("popup_map_show");
	overlay.classList.remove("overlay_show");
});

popup_form_open.addEventListener("click", function(event) {
	event.preventDefault();
	popup_form.classList.add("popup_form_show");
	overlay.classList.add("overlay_show");
});

popup_form_close.addEventListener("click", function() {
	popup_form.classList.remove("popup_form_show");
	overlay.classList.remove("overlay_show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup_form.classList.contains("popup_form_show") || map.classList.contains("popup_map_show")) {
			overlay.classList.remove("overlay_show");
			popup_form.classList.remove("popup_form_show");
			map.classList.remove("popup_map_show");
		}
	}	
});

overlay.addEventListener("click", function() {
	overlay.classList.remove("overlay_show");
	popup_form.classList.remove("popup_form_show");
	map.classList.remove("popup_map_show");
});


body_color_btn_1.addEventListener("click", function() {
	body.classList.add("main_page_style_1");
	body.classList.remove("main_page_style_2");
	body.classList.remove("main_page_style_3");
});
body_color_btn_2.addEventListener("click", function() {
	body.classList.add("main_page_style_2");
	body.classList.remove("main_page_style_1");
	body.classList.remove("main_page_style_3");
});
body_color_btn_3.addEventListener("click", function() {
	body.classList.add("main_page_style_3");
	body.classList.remove("main_page_style_1");
	body.classList.remove("main_page_style_2");
});

catalog_hover.addEventListener("mouseenter", function() {
	catalog_open.classList.add("hover_catalog_show");
	search_open.classList.remove("hover_search_show");
	login_open.classList.remove("hover_login_show");
	cart_open.classList.remove("hover_cart_show");
});
search_hover.addEventListener("mouseenter", function() {
	catalog_open.classList.remove("hover_catalog_show");
	search_open.classList.add("hover_search_show");
	login_open.classList.remove("hover_login_show");
	cart_open.classList.remove("hover_cart_show");
});
login_hover.addEventListener("mouseenter", function() {
	catalog_open.classList.remove("hover_catalog_show");
	search_open.classList.remove("hover_search_show");
	login_open.classList.add("hover_login_show");
	cart_open.classList.remove("hover_cart_show");
});
cart_hover.addEventListener("mouseenter", function() {
	catalog_open.classList.remove("hover_catalog_show");
	search_open.classList.remove("hover_search_show");
	login_open.classList.remove("hover_login_show");
	cart_open.classList.add("hover_cart_show");
}); 
hover_element_close.addEventListener("click", function() {
	catalog_open.classList.remove("hover_catalog_show");
	search_open.classList.remove("hover_search_show");
	login_open.classList.remove("hover_login_show");
	cart_open.classList.remove("hover_cart_show");
}); 
hover_element_close.addEventListener("wheel", function() {
	catalog_open.classList.remove("hover_catalog_show");
	search_open.classList.remove("hover_search_show");
	login_open.classList.remove("hover_login_show");
	cart_open.classList.remove("hover_cart_show");
}); 
hover_element_close.addEventListener("mouseenter", function() {
	catalog_open.classList.remove("hover_catalog_show");
	search_open.classList.remove("hover_search_show");
	login_open.classList.remove("hover_login_show");
	cart_open.classList.remove("hover_cart_show");
}); 