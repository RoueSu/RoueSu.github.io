<template>
  <div id="app">
    <clock/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {},
    components: {},
    mounted() {
    }
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0
  }

  html, body ,#app{
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden
  }

  #clock {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000
  }

  .label {
    display: inline-block;
    color: #4d4d4d;
    text-align: center;
    padding: 0 5px;
    font-size: 10px;
    transition: left 1s, top 1s;
    transform-origin: 0% 0%
  }
</style>
