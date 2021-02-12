<template>
  <div>
    <Sidebar />
    <Logo />
    <Language />
    <Up />
    <Circles />
    <router-view />
  </div>
</template>

<script>
import Language from "./components/Language";
import Sidebar from "./components/Sidebar";
import Up from "./components/Up";
import Circles from "./components/Circles.vue";
import Logo from "./components/Logo.vue";

export default {
  components: {
    Language: Language,
    Sidebar: Sidebar,
    Up: Up,
    Circles: Circles,
    Logo: Logo,
  },
};
</script>