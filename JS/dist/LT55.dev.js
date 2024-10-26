"use strict";

$(function () {
  'use strict'; // Scroll to next

  $('.header .chevron .chevronIcon').click(function () {
    $('html, body').animate({
      scrollTop: $('.feature').offset().top
    }, 1000);
  }); // Show Hidden Items

  $('.newMarg').click(function () {
    $('.ourWork .items-box .hide').fadeToggle(1000);
  }); // var leftArrow = $('.testimonials .fa-chevron-left');
  // var rightArrow = $('.testimonials .fa-chevron-right');
  // // testimonials chevron 
  // function checkClients() {
  //     $(".client:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();
  //     $(".client:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();
  // }
  // checkClients();
});
Vue.component('app-count', {
  data: function data() {
    return {
      name: 'likes',
      count: 3
    };
  },
  props: ['source', 'url'],
  template: '<span  @click="count++" class="likeSpan"><i class="fa-solid fa-heart likeIcons"></i> {{ count }} {{ name }}</span>'
});
Vue.component('app-count-two', {
  data: function data() {
    return {
      name: 'likes',
      count: 7
    };
  },
  props: ['source', 'url'],
  template: '<span  @click="count++" class="likeSpan"><i class="fa-solid fa-heart likeIcons"></i> {{ count }} {{ name }}</span>'
});
Vue.component('app-count-three', {
  data: function data() {
    return {
      name: 'likes',
      count: 10
    };
  },
  props: ['source', 'url'],
  template: '<span  @click="count++" class="likeSpan"><i class="fa-solid fa-heart likeIcons"></i> {{ count }} {{ name }}</span>'
});
var vm = new Vue({
  el: '#like',
  data: {},
  methods: {},
  computed: {},
  watch: {}
});
var app = new Vue({
  el: '#app',
  data: {
    activeTab: '1'
  },
  methods: {}
});