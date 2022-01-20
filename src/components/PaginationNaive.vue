<template> 
  <!-- from https://www.naiveui.com/en-US/os-theme/components/pagination -->
  <n-pagination
    :page='current'
    :page-count="items / perPage" />

  <n-pagination
    class="naive-pagination-styled"
    :page='current'
    :page-count="items / perPage" />
</template>

<script>
export default {
  name: 'PaginationNaive',
  data() {
    return {
      current: 6,
      perPage: 4,
      items: 100
    }
  }
}
</script>
