<template>
  <div class="home">
    <Navbar @search-keyword="searchList" @return-List="returnList" />
    <Cards
      :getlists="lists"
      v-if="lists.length > 0"
      :favorite-data="favoriteData"
      :filter-lists="filterLists"
    />

    <Pagination
      :totalPage="filterPages"
      :initialCurrentPage="listData.currentPage"
      :countpage="listData.countPage"
      @change-page="changePage"
      @pre-page="prePage"
      @next-page="nextPage"
    />
  </div>
</template>

<script>
import axios from "axios";
import Cards from "./../components/Cards.vue";
import Pagination from "../components/CardPagination.vue";
import Navbar from "../components/Navbar.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Home",
  components: {
    Cards,
    Pagination,
    Navbar,
  },
  data() {
    return {
      initialData: [],
      initialTotalPage: [],
      lists: [],
      renderPage: 30,
      initialSearchData: [],
      searchData: [],
      searchPage: [],
      listData: {
        currentPage: 1,
        countPage: [],
      },
      favoriteData: JSON.parse(localStorage.getItem("favoriteData")) || [],
      visibility: "lists",
      visibilityPage: "initialTotalPage",
    };
  },
  created() {
    this.fetchList();
  },
  watch: {
    "listData.currentPage": function (newValue) {
      this.renderData(newValue);
    },
  },
  methods: {
    async fetchList() {
      await axios
        .get("https://randomuser.me/api/?results=3010")
        .then((res) => {
          this.initialData.push(...res.data.results);

          // 加入uuid & isFavorie判斷
          this.initialData = this.initialData.map((item) => ({
            ...item,
            newId: uuidv4(),
            isFavorite: false,
          }));

          // 取總頁數
          const numberOfPage = Math.ceil(
            this.initialData.length / this.renderPage
          );
          for (let i = 1; i <= numberOfPage; i++) {
            this.initialTotalPage.push(i);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.renderData();
      this.getPage(this.listData.currentPage);
    },
    renderData(page = 1) {
      const startIndex = (page - 1) * this.renderPage;

      let render;
      if (this.initialSearchData.length > 0) {
        render = this.initialSearchData.slice(
          startIndex,
          startIndex + this.renderPage
        );
        this.searchData = render.map((item1) => {
          return Object.assign(
            item1,
            this.favoriteData.find((item2) => {
              return item2.login.md5 && item1.login.md5 === item2.login.md5;
            })
          );
        });
      } else {
        render = this.initialData.slice(
          startIndex,
          startIndex + this.renderPage
        );
        this.lists = render.map((item1) => {
          return Object.assign(
            item1,
            this.favoriteData.find((item2) => {
              return item2.login.md5 && item1.login.md5 === item2.login.md5;
            })
          );
        });
      }
    },
    getPage(page) {
      console.log(page);
      this.listData.countPage = this.filterPages.slice(page - 1, page + 4);
    },
    changePage(payload) {
      const { currentPage } = payload;
      this.listData.currentPage = currentPage;
      if (this.listData.currentPage === this.filterPages.length) {
        this.getPage(
          this.listData.currentPage - (this.listData.countPage.length - 1)
        );
      } else if (this.listData.currentPage === 1) {
        this.getPage(1);
      }
    },
    prePage() {
      if (this.listData.currentPage === 5) {
        this.getPage(1);
      } else if (this.listData.currentPage === this.listData.countPage[0]) {
        this.getPage(
          this.listData.currentPage - (this.listData.countPage.length - 1)
        );
      }
      this.listData.currentPage -= 1;
    },
    nextPage() {
      if (this.listData.currentPage === this.listData.countPage[4]) {
        this.getPage(this.listData.currentPage);
      }
      this.listData.currentPage += 1;
    },
    searchList(keywords) {
      this.initialSearchData = this.initialData.filter((item) => {
        return item.name.first.toLowerCase().includes(keywords);
      });

      if (keywords.length === 0) {
        this.visibility = "lists";
        this.visibilityPage = "initialTotalPage";
        this.initialSearchData = [];
        this.searchData = [];
        this.searchPage = [];
        this.getPage(this.listData.currentPage);
        return alert("cannot find person with keyword: " + keywords);
      }
      this.visibility = "searchData";
      this.renderData((this.listData.currentPage = 1));

      const numberOfPage = Math.ceil(
        this.initialSearchData.length / this.renderPage
      );
      for (let i = 1; i <= numberOfPage; i++) {
        this.searchPage.push(i);
      }
      this.searchPage = this.searchPage.filter(function (element, index, arr) {
        return arr.indexOf(element) === index;
      });

      this.visibilityPage = "searchPage";
      this.getPage((this.listData.currentPage = 1));
    },
    returnList() {
      this.initialSearchData = [];
      this.searchData = [];
      this.searchPage = [];
      this.visibility = "lists";
      this.visibilityPage = "initialTotalPage";
      this.getPage(this.listData.currentPage);
    },
  },
  computed: {
    filterLists() {
      return this[this.visibility];
    },
    filterPages() {
      return this[this.visibilityPage];
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
