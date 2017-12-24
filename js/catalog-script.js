var catalog_hover = document.querySelector(".main_navigation_item.catalog");
var catalog_open = document.querySelector(".hover_elements .hover_catalog");
var search_hover = document.querySelector(".user_block_search");
var search_open = document.querySelector(".hover_elements .hover_search");
var login_hover = document.querySelector(".user_block_login");
var login_open = document.querySelector(".hover_elements .hover_login");
var cart_hover = document.querySelector(".user_block_cart");
var cart_open = document.querySelector(".hover_elements .hover_cart");
var hover_element_close = document.querySelector(".catalog_page>*:not(:first-child)");




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