<template>
  <button @click="emitAction()" class="btn" :class="btnStyle" :type="type">
    {{ label }}
  </button>
</template>

<script>
export default {
  
  props: {
    type: {
      required: true,
      type: String
    },

    label: {
      required: true,
      type: String
    },
    confirm: {
      required: false,
      type: Boolean
    },
    styleType: {
      required: false,
      type: String
    }
  },

  methods: {
    emitAction() {
      if (this.confirm && confirm('Confirm operation?')) {
        this.$emit("btnClicked");
      }

      return    
    },
  },

  computed: {
    btnStyle() {
      if (this.styleType) return `btn-${this.styleType}`
      
      return 'btn-default'
    }
  }
};
</script>

<style scoped>
.btn {
  margin: 10px;
  border: none;
  padding: 5px;
  color: #333;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
}

.btn-danger {
  background: lightcoral;
}

.btn-default {
  background: yellowgreen;
}
</style>
