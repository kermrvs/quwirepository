<template>
  <div class="flex-column h-100">
    <header class="header">
      <div class="header__content">
        <img
          src="/logo.png"
          alt="logo"
          width="30"
          height="30"
        >
        <div class="header__links">
          <a
            class="link text-uppercase"
            href="https://quwi.com/login"
            target="_blank"
          >
            projects
          </a>
          <button
            class="link btn-clear text-uppercase"
            @click="logout"
          >
            logout
          </button>
        </div>
      </div>
    </header>
    <main class="content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { TOAST_ERROR } from '~/constants';

export default {
  name: 'default',
  methods: {
    async logout() {
      try {
        await this.$auth.logout();
        await this.$router.push({ path: 'login' })
      }
      catch(e) {
        this.toast('error', e.response?.data?.message ? e.response.data.message : TOAST_ERROR)
        console.log(e)
      }
    }
  }
}
</script>
