<template>
  <nav aria-label="Page navigation ">
    <ul class="pagination">
      <!-- prev -->
      <li class="page-item" v-if="currentPage > 1">
        <a
          @click.stop.prevent="prePage()"
          class="page-link"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <!-- ---- -->
      <li class="page-item addBtn" v-if="currentPage > 2">
        <a @click.stop.prevent="changePage(1)" class="page-link">1</a>
      </li>

      <li class="page-item" v-if="currentPage > 2">
        <a class="page-link">...</a>
      </li>

      <li
        :class="['page-item', { active: currentPage === page }]"
        v-for="page in countpage"
        :key="page"
      >
        <a @click.stop.prevent="changePage(page)" class="page-link" href="#">{{
          page
        }}</a>
      </li>

      <li
        class="page-item"
        v-if="currentPage > 1 && currentPage < totalPage.length"
      >
        <a class="page-link">...</a>
      </li>

      <!-- --- -->

      <li
        class="page-item addBtn"
        v-if="currentPage > 1 && currentPage < totalPage.length"
      >
        <a
          class="page-link"
          @click.stop.prevent="changePage(totalPage.length)"
          >{{ totalPage.length }}</a
        >
      </li>

      <!-- next -->
      <li
        class="page-item"
        v-if="currentPage >= 1 && currentPage < totalPage.length"
      >
        <a
          @click.stop.prevent="nextPage()"
          class="page-link"
          href="#"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ListPagination",
  props: {
    totalPage: {
      type: Array,
      required: true,
    },
    initialCurrentPage: {
      type: Number,
      required: true,
    },
    countpage: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentPage: this.initialCurrentPage,
      groupPage: this.countpage,
    };
  },
  watch: {
    initialCurrentPage: function () {
      this.currentPage = this.initialCurrentPage;
    },
    countpage: function () {
      this.groupPage = this.countpage;
    },
  },

  methods: {
    changePage(page) {
      this.currentPage = page;
      this.$emit("change-page", {
        currentPage: page,
      });
    },
    prePage() {
      this.$emit("pre-page");
    },
    nextPage() {
      this.$emit("next-page");
    },
  },
};
</script>

<style scoped>
nav {
  padding-top: 2rem;
}
.addBtn:hover {
  cursor: pointer;
}
</style>
