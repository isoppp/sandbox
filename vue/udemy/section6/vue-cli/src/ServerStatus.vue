<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        status: 'critical'
      }
    },
    methods: {
      changeStatus() {
        this.status = 'normal';
      }
    }
  }
</script>

<style></style>
