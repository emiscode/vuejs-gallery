import Vue from 'vue'

Vue.directive('emiscode-rotate', {
   bind(el, binding, vnode) {
    let rotation = 0

    el.addEventListener('dblclick', function() {
        if (binding.value) {
            rotation += binding.value.rotation || 180

            if (binding.value.animation) {
                el.style.transition = 'transform 0.5s'
            }
        } else {
            rotation += 30
        }

        if (binding.modifiers.reverse) {
            rotation = -rotation
        }
    
        el.style.transform = `rotate(${rotation}deg)`
    })
   } 
})