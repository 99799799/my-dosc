<template>
  <div class="flex-column">
    <!-- <el-image
      v-for="(item,index) in imgList"
      :key="index"
      class="w-100% border-rd-8px"
      style="border: 1px solid #eeeeee;"
      :src="item"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      lazy
      hide-on-click-modal
      :initial-index="index"
      :preview-src-list="imgList"
      fit="cover"
    /> -->
    <div v-for="(item, index) in imgList" :key="index" class="w-100% border-rd-8px" style="border: 1px solid #eeeeee;">
      <img :src="item" alt="" class="img-box" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgList: {
    type: Array,
    default: () => ([])
  }
})

</script>

<style lang="scss" scoped>
.flex-colmn {
  display: flex;
  flex-direction: column;
}

.img-box {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}
</style>
