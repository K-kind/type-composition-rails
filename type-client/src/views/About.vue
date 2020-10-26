<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="mt-10">aaaaaaaaaaaa</div>
    <my-button>マイボタン</my-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import MyButton from '@/components/MyButton.vue'

export default defineComponent({
  components: {
    MyButton
  }
})
</script>
