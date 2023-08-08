<template>
  <nav class="navbar">
    <div class="nav-logo">
      <!-- Your logo here -->
    </div>
    <div class="bars" @click="toggleNavItems">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div class="nav-menu" :class="{ active: navItemsActive }">
      <router-link to="/" class="home">Home</router-link>
      <div class="login-register" v-if="!$store.state.isLoggedIn">
        <router-link to="/login" class="button">Login</router-link>
        <router-link to="/signup" class="button">Register</router-link>
      </div>
      <div v-else>
        <router-link to="/create-post" class="button">Create Post</router-link>
        <div class="menu-toggle"></div>
        <div class="profile" @click="toggleProfileMenu">
          <div class="user">
            <h3>Katherine Cooper</h3>
            <p>@probablykat66</p>
          </div>
          <div class="img-box">
            <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" alt="some user image">
          </div>
          <div class="profile-dropdown" v-if="profileMenuActive">
            <router-link :to="'/settings/' + userId">Settings</router-link>
            <router-link to="/profile">Profile</router-link>
            <router-link to="/logout" class="button">Logout</router-link>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="searchPosts" class="search">
      <input v-model="searchInput" type="text" placeholder="Search..." class="search-input">
      <span class="icon"> 
        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </span>
    </form>
  </nav>
</template>
  
<script>
export default {
  data() {
    return {
      searchInput: '',
      navItemsActive: false,
      profileMenuActive: false,
    };
  },
  methods: {
    searchPosts() {
      this.$router.push({
        path: '/search-results',
        query: { q: this.searchInput },
      });
    },
    toggleNavItems() {
      this.navItemsActive = !this.navItemsActive;
    },
    toggleProfileMenu() {
      this.profileMenuActive = !this.profileMenuActive;
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    userId() {
      return this.$store.state.userId;
    },
  },
  watch: {
    $route(to, from) {
      if (to.path !== '/search-results' && from.path === '/search-results') {
        this.searchInput = '';
      }
    },
    '$store.state.userId'(newUserId) {
    console.log("NavBar - Watched userId:", newUserId);
  },
  },
};
</script>
  
<style scoped>

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
  }
  
.nav-menu {
    display: flex;
    align-items: center;
    gap: 3rem;
    list-style: none;
  }
  
.nav-menu a {
    color: #DAFFFB;
    padding: 10px;
    text-transform: uppercase;
    transition: 0.2s;
    text-decoration: none;
    -webkit-transition: 0.2s;
    -moz-transition: 0.2s;
    -ms-transition: 0.2s;
    -o-transition: 0.2s;
  }

.nav-menu::after {
    content: '';
    display: block;
    border-top: 2px solid #DAFFFB;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    -moz-transform: scaleX(0);
    -ms-transform: scaleX(0);
    -o-transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    -webkit-transition: transform 250ms ease-in-out;
    -moz-transition: transform 250ms ease-in-out;
    -ms-transition: transform 250ms ease-in-out;
    -o-transition: transform 250ms ease-in-out;
}

.nav-menu:hover::after {
    transform: scaleX(0.8);
    -webkit-transform: scaleX(0.8);
    -moz-transform: scaleX(0.8);
    -ms-transform: scaleX(0.8);
    -o-transform: scaleX(0.8);
}

.nav-menu .home:hover {
  border-bottom: 2px solid #DAFFFB;
}

.home {
  margin-left: 50px;
}

  
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    width: 100%;
    height: 70px;
    background: #176B87;
    color: #DAFFFB;
    position: fixed;
    top: 0;
}

.login-register {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.button {
    color: #DAFFFB;
    border: 2px solid #DAFFFB;
    padding: 5px 20px;
    text-transform: uppercase;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    transition: all ease-in 0.3s;
    -webkit-transition: all ease-in 0.3s;
    -moz-transition: all ease-in 0.3s;
    -ms-transition: all ease-in 0.3s;
    -o-transition: all ease-in 0.3s;
}

.button:hover {
    background: #DAFFFB;
    color: #176B87;
    transition: 1s;
}

.menu-toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: not-allowed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    text-align: end;
    right: -1100px;
    top: -27px;
}

.profile h3 {
    text-align: end;
    line-height: 1;
    margin-bottom: 4px;
    font-weight: 600;
}

.profile p {
    line-height: 1;
    font-size: 14px;
    opacity: .6;
}

.profile .img-box {
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
}

.profile .img-box img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.search {
  width: 220px;
  position: relative;
  margin-right: 1000px;
}

.icon {
  position: absolute;
  right: 10px;
  top: calc(50% + 5px);
  transform: translateY(calc(-50% - 5px));
}
.search-input {
  width: 100%;
  height: 40px;
  padding: 10px;
  transition: .2s linear;
  border: 2.5px solid black;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.search-input:focus {
  outline: none;
  border: 0.5px solid black;
  box-shadow: -5px -5px 0px black;
}

.search:hover > .icon {
  animation: anim 1s linear infinite;
}

@keyframes anim {
  0%,
  100% {
    transform: translateY(calc(-50% - 5px)) scale(1);
  }

  50% {
    transform: translateY(calc(-50% - 5px)) scale(1.1);
  }
}

@media(max-width: 1000px) {
    .navbar {
        padding: 0 1rem;
    }

    .navbar .nav-menu {
        gap: 0.1rem;
    }

    .navbar .nav-menu a,
    .navbar .nav-menu .login-register .button {
        font-size: 0.9rem;
    }
}

@media(max-width: 700px) {
    .navbar .nav-menu {
        flex-direction: column;
        position: fixed;
        top: 70px;
        right: -100%;
        width: 100vw;
        height: 100vh;
        padding: 1rem 0;
        z-index: 99;
        background: #2590B5;
        transition: 0.2s ease-in;
        -webkit-transition: 0.2s ease-in;
        -moz-transition: 0.2s ease-in;
        -ms-transition: 0.2s ease-in;
        -o-transition: 0.2s ease-in;
    }

    .bars {
        width: 22px;
        height: auto;
        cursor: pointer;
    }

    .bars .bar {
        width: 100%;
        height: 2px;
        background: #DAFFFB;
        margin: 5px;
    }

    .navbar .nav-menu {
        gap: 3rem;
    }

    .navbar .nav-menu .login-register {
        width: 50%;
        text-align: center;
        flex-direction: column;
        gap: 2rem;
    }

    .navbar .nav-menu .login-register .button {
        padding: 1rem 0;
    }

}

.navbar .nav-menu.active {
    right: 0;
}

</style>
