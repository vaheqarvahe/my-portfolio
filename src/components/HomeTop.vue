<template>
  <div class="main">
    <header class="header">
      <div class="header-top">
        <p class="phone-number">Phone number</p>
        <div class="login-container">
          <router-link class="login-button" to="/register">
            <img src="../images/person-fill.svg" class="login-icon" alt="Login Icon">
          </router-link>
          <p>Ежедневно с 9:00 до 22:00</p>
        </div>
      </div>
      <nav :class="['nav', { 'change-color': scrollPosition > 50 }]">
        <ul class="navlist">
          <li v-for="(link, index) in navLinks" :key="index">
            <a :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>


<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      navLinks: [
        { text: 'техника', href: '/tech' },
        { text: 'купить', href: '#' },
        { text: 'Доставка и сборка', href: '#' },
        { text: 'Контакты', href: '#' }
      ]
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
  },
  watch: {
    scrollPosition(newPosition) {
      if (newPosition > 50) {
        document.querySelector('.nav').classList.add('change_color');
      } else {
        document.querySelector('.nav').classList.remove('change_color');
      }
    }
  }
};
</script>

<style scoped>
.main {
  font-family: Arial, sans-serif;
  margin: 0 auto;
  width: 100%;
  z-index: 10;
}

.header {
  background-color: #f0f0f0;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.phone-number {
  font-weight: bold;
  margin: 0;
}

.login-container {
  display: flex;
  align-items: center;
}

.login-button {
  text-decoration: none;
  color: inherit;
}

.login-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.nav {
  background-color: #ffffff;
  padding: 10px 0;
  transition: background-color 0.3s ease;
}

.navlist {
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.navlist li {
  margin: 0 10px;
}

.navlist a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 10px 15px;
}

.change-color {
  background-color: #f0f0f0; /* Change to a different color when scrolled */
}
</style>
