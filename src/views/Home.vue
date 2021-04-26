<template>
  <h1 class="home">Home</h1>
  <MessageContainer />
</template>

<script>
import MessageContainer from '@/components/MessageContainer.vue'

export default {
  name: 'Home',
  components: {
    MessageContainer,
  },
}
</script>
