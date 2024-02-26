import { computed, ref } from 'vue'

export const homeBgUrlList = [
  'https://file.moyublog.com/free_wallpapers_files/fb5t0w3r5j3.jpg',
]
export const homeBgIndex = ref(
  Math.floor(Math.random() * homeBgUrlList.length)
)

export const homeBgUrl = computed(() => homeBgUrlList[homeBgIndex.value])

export function toggleBgIndex () {
  homeBgIndex.value = Math.floor(Math.random() * homeBgUrlList.length)
}
