import Vue from 'vue'

Vue.directive('emiscode-transform', {
   bind(el, binding, vnode) {
    let dimension = 0

    el.addEventListener('dblclick', function() {
        if (binding.value) {
            dimension = dimension === 1 ? 0 : dimension
            dimension += binding.value.dimension || 180

            if (binding.value.animation) {
                el.style.transition = 'transform 0.5s'
            }
        } else {
            dimension += 30
        }

        if (binding.modifiers.reverse) {
            dimension = -dimension
        }

        let transform

        switch (binding.arg) {
            case "rotate":
                transform = `rotate(${dimension}deg)`
                break
            case "scale":
                dimension = dimension > 1.2 ? 1 : dimension
                transform = `scale(${dimension})`
                break
            default:
                transform = `rotate(${dimension}deg)`
        }
    
        el.style.transform = transform
    })
   } 
})