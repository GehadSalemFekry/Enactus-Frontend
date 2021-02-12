<template lang="en">
  <div class="container">
    <div class="logo-div">
        <router-link :to="{ name: 'home'}" class="side-link">
          <img src='..\assets\img\fixed-logo.png' />
        </router-link>
    </div>
  </div>
</template>

<style>
.logo-div {
  position: absolute;
  z-index: 999;
  top: 5%;
}
.logo-div img {
  width: 100%;
  height: 100%;
}
@media (max-width: 575.98px) {
  .logo-div {
    top: 2%;
  }
  .logo-div img {
    width: 50%;
  }
}
</style>