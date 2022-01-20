<template>
  <!-- from https://oruga.io/components/Pagination.html#examples -->
  <div class='oruga-pagination-container container'>
    <o-pagination
      :total="items"
      :perPage="perPage"
      :isSimple="true"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      v-model:current="current"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </o-pagination>
  </div>

  <div class='oruga-pagination-container container'>
    <o-pagination
      class="oruga-styled"
      :total="items"
      :perPage="perPage"
      :isSimple="true"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      v-model:current="current"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </o-pagination>
  </div>
</template>

<script>
export default {
  name: 'PaginationOruga',
  data() {
    return {
      current: 6,
      perPage: 4,
      rangeBefore: 2,
      rangeAfter: 1,
      items: 100
    }
  }
}
</script>
