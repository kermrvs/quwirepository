<template>
  <div class="login__layout__content">
    <LoginForm
      @submit="submit"
      :errorMessage="errorMessage"
    />
  </div>
</template>

<script>
import LoginForm from "~/components/auth/LoginForm";
import { LOGIN_ERROR_MESSAGE } from '~/constants/';

export default {
  name: 'LoginPage',
  layout: 'login',
  auth: 'guest',
  components: { LoginForm },
  data() {
    return {
      errorMessage: ''
    }
  },
  methods: {
    async submit(credentials) {
      try {
        this.errorMessage = ''
        await this.$auth.loginWith('local', { data: credentials })
      } catch(e) {
        if (e.response?.data?.first_errors?.email || e.response?.data?.first_errors?.password) {
          this.errorMessage = e.response?.data?.first_errors?.email || e.response?.data?.first_errors?.password
        } else {
          this.errorMessage = LOGIN_ERROR_MESSAGE
        }
      }
    }
  },
}
</script>
