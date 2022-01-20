<template>
  <el-pagination
    layout="prev, pager, next"
    v-model:current-page="current"
    :total="items" />

  <el-pagination
    class='element-pagination-styled'
    layout="prev, pager, next"
    v-model:current-page="current"
    :total="items" />
</template>

<script>
export default {
  name: 'PaginationElement',
  data() {
    return {
      current: 6,
      items: 100
    }
  },
}
</script>
