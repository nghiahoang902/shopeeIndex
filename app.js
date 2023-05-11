$ = document.querySelector.bind(document);

const navbar_mobile = $('.header-navbar__mobile-icon');
const search_mobile = $('.header-search__mobile');
const search_mobile_checkbox = $('.header-search__mobile--checkbox');
const side_bar = $('.header-side-bar');
const headerSearch = $('.header-search-2');
// sự kiện click vào navbar
navbar_mobile.onclick = function() {
        side_bar.classList.toggle('close');
};

search_mobile.onclick = function() {
        headerSearch.classList.toggle('block');       
}