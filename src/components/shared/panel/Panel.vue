<template>
  <div class="panel">
    <slot class="panel-content"></slot>
    <div class="panel-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>

<style scoped>
.panel {
  margin: 5px;
  width: 190px;
  height: 100%;
  min-height: 310px;
  text-align: center;
  vertical-align: top;
  display: inline-block;
  background: #f1f1f1;
  border: solid 1px #000;
}

.panel-title {
  padding: 0px 10px 0px 10px;
}

.panel-content {
  width: 100%;
}
</style>
