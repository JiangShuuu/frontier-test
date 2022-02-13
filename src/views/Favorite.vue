<template>
  <div class="cotain w-100">
    <Navbar />
    <ul class="nav justify-content-end display-switch me-5">
      <li class="nav-item">
        <a
          class="nav-link card-view active"
          id="card-icon"
          href="#"
          @click.stop.prevent="openCard()"
          :class="{ state: !isCard }"
        >
          <i class="fa-solid fa-table-cells-large"></i>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link list-view"
          id="list-icon"
          href="#"
          @click.stop.prevent="openList()"
          :class="{ state: isCard }"
          ><i class="fas fa-bars list-view"></i
        ></a>
      </li>
    </ul>

    <div class="container-fluid people-cards mt-2">
      <div
        class="list-group list-group-horizontal-xl list-group-flush d-flex flex-column align-items-center"
        v-if="!isCard"
      >
        <li
          class="list-group-item"
          v-for="list in favoriteArr"
          :key="list.newId"
        >
          <div class="row align-items-center">
            <div class="col">
              <h5>
                {{ list.name.title }}. {{ list.name.first }}
                {{ list.name.last }}
              </h5>
            </div>
            <div class="col-md-auto">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#personInfoModal"
                @click="openDetail(list.newId)"
              >
                More Info
              </button>
            </div>

            <div
              class="col col-auto"
              @click="removeFavorite(list.login.md5)"
              v-if="list.isFavorite"
            >
              <i class="fa-solid fa-heart" style="user-select: auto"></i>
            </div>
          </div>
        </li>
      </div>

      <div class="cards d-flex flex-wrap justify-content-center" v-if="isCard">
        <div
          class="card p-3 m-1"
          style="width: 15rem"
          v-for="list in favoriteArr"
          :key="list.newId"
        >
          <img :src="list.picture.large" class="rounded-circle" />
          <h3 class="card-title text-center mt-2">{{ list.name.first }}</h3>
          <hr />
          <div class="card-body d-flex justify-content-around">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#personInfoModal"
              @click="openDetail(list.newId)"
            >
              More Info
            </button>
            <button
              type="button"
              class="btn btn-favorite btn-primary"
              @click="addFavorite(list.login.md5)"
              v-if="!list.isFavorite"
            >
              <i class="far fa-heart fa-lg"></i>
            </button>
            <button
              type="button"
              class="btn btn-favorite btn-primary"
              @click="removeFavorite(list.login.md5)"
              v-if="list.isFavorite"
            >
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- modal -->
      <div
        class="modal fade"
        id="personInfoModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" v-if="personDetail">
            <div class="modal-header">
              <h5 class="modal-title" id="modal-name">
                {{ personDetail.name.first }} {{ personDetail.name.last }}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" id="info-modal-body">
              <!--display modal person info-->
              <div class="row">
                <div class="col-sm-8">
                  <div>Email: {{ personDetail.email }}</div>
                  <div>Gender: {{ personDetail.gender }}</div>
                  <div>Age: {{ personDetail.dob.age }}</div>
                  <div>Region: {{ personDetail.location.country }}</div>
                  <div>Phone: {{ personDetail.phone }}</div>
                  <div>Birthday: {{ dateTime(personDetail.dob.date) }}</div>
                  <div>
                    Created_at: {{ dateTime(personDetail.registered.date) }}
                  </div>
                </div>
                <div class="col-sm-4">
                  <img
                    :src="personDetail.picture.large"
                    id="modal-avatar"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import moment from "moment";
import Navbar from "../components/Navbar.vue";

export default {
  name: "favorite",
  components: {
    Navbar,
  },
  data() {
    return {
      personDetail: null,
      isCard: true,
      favoriteArr: JSON.parse(localStorage.getItem("favoriteData")) || [],
    };
  },
  created() {
    setTimeout(() => {
      this.moviefunction();
    }, 500);
  },
  watch: {
    isCard: function () {
      setTimeout(() => {
        this.moviefunction();
      }, 500);
    },
  },
  methods: {
    moviefunction() {
      new BetterScroll(".people-cards", {
        mouseWheel: true, //開啟滑鼠滾動
        disableMouse: false, //關閉滑鼠拖動
        disableTouch: false, //關閉手指觸摸
        scrollX: true, //X軸滾動開啟
        click: true,
      });
    },
    openDetail(id) {
      this.personDetail = this.favoriteArr.find((item) => {
        return item.newId === id;
      });
    },
    dateTime(value) {
      return moment(value).format("YYYY-MM-DD");
    },
    openList() {
      if (this.isCard) {
        this.isCard = !this.isCard;
      } else {
        return;
      }
    },
    openCard() {
      if (this.isCard) {
        return;
      } else {
        this.isCard = !this.isCard;
      }
    },
    removeFavorite(id) {
      const listIndex = this.favoriteArr.findIndex((element) => {
        return element.login.md5 === id;
      });

      this.favoriteArr.forEach((item) => {
        if (item.login.md5 === id) {
          item.isFavorite = false;
          this.favoriteArr.splice(listIndex, 1);
          localStorage.setItem(
            "favoriteData",
            JSON.stringify(this.favoriteArr)
          );
        }
      });
    },
  },
};
</script>

<style scoped>
.list-group-item {
  width: 70%;
}

.fa-table-cells-large {
  font-size: 2rem;
}
.fa-bars {
  font-size: 2rem;
}

.people-cards {
  width: 80%;
  height: 35rem;
  overflow: hidden;
}

.state {
  color: grey;
}
</style>
