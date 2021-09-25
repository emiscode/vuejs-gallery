export default {
    bind(el, binding, vnode) {
        el.addEventListener('click', function() {
            el.style.color = binding.value || 'red'
        })
    }
}