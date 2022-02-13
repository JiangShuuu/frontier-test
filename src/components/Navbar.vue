<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Meet</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link active"
              aria-current="page"
              href="#"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/favorite" class="nav-link">favorite</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <button
            class="btn btn-outline-dark me-5"
            type="submit"
            @click="returnList()"
          >
            All
          </button>
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="keyword"
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            @click="searchList()"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchList() {
      const keywords = this.keyword.trim().toLowerCase();
      this.$emit("searchKeyword", keywords);
      this.keyword = "";
    },
    returnList() {
      this.$emit("returnList");
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
}
</style>
