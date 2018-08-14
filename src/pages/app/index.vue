<template lang="html">
  <div id="app">
    <jym-header />
    <jym-nav />
    <transition name="jym-fade"><router-view></router-view></transition>
    <jym-footer />
    <jym-toolbar />
  </div>
</template>

<script>
export default {
  name: 'APP'
}
</script>
