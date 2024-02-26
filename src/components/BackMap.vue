<template>
  <div
    class="absolute top--30px left--100px cursor-pointer"
    @click="backHandle"
  >
    {{ '<-' }} Back Map
  </div>
</template>

<script setup>
import { useRouter } from 'vitepress'

const router = useRouter()

const backHandle = () => {
  router.go('/my-dosc/docs/map')
}
</script>

<style lang="scss" scoped>

</style>
