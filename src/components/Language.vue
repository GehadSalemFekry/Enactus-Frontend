<template>
  <div>
    <b-dropdown text="Lang" class="lang">
      <b-dropdown-item href="#" @click.prevent="setLocale('en')">English</b-dropdown-item>
      <b-dropdown-item href="#" @click.prevent="setLocale('ar')">Arabic</b-dropdown-item>
    </b-dropdown>
  </div>
</template>


<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale,
      this.$router.push({
        params: { lang: locale}
      })
    }
  },
}
</script>

<style scoped>
.lang {
  position: fixed;
  right: 0px;
  top: 8%;
  background: #fcc200;
  padding: 5px 10px;
  font-size: 15px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0px 3px 5px #00000020;
  z-index: 99999999;
}
@media (max-width: 575.98px) {
  .lang {
    /* padding: 6px 12px; */
    font-size: 12px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
}
</style>