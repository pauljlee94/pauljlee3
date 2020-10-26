import Vue from 'vue'

Vue.directive('scroll', {
  inserted: function(el, binding) {
		let f = function() {
			let topOfEle = el.getBoundingClientRect().top + 100
			let windowHeight = window.innerHeight
      if (topOfEle <= windowHeight) {
				el.classList.add('in-view')
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});