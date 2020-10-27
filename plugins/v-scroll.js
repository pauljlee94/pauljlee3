import Vue from 'vue'

Vue.directive('scroll', {
  inserted: function(el, binding, vnode) {
    let checkScrollPosition = function() {
      let topOfEle = el.getBoundingClientRect().top + 100
      let windowHeight = window.innerHeight
      if (topOfEle <= windowHeight) {
        if(binding.value) {
          binding.value()
        } else {
          el.classList.add('in-view')
        }
        window.removeEventListener('scroll', f);
      }
    };

    window.addEventListener('scroll', checkScrollPosition)    
  },
});