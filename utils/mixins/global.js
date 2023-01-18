export default {
  data() {
    return {
      toastOptions: {
        duration: 10000,
        position: "bottom-right",
        className: "toast_alert",
      },
    };
  },
  methods: {
    toast(type, text) {
      if (type === "success") this.$toast.success(text, this.toastOptions);
      if (type === "error") this.$toast.error(text, this.toastOptions);
      if (type === "info") this.$toast.info(text, this.toastOptions);
    },
  },
};
