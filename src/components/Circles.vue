<template lang="en">
    <div class="img-div">
        <img class='circle' src='..\assets\img\circles.png' />
        <img class='phone-circle' src='..\assets\img\circles-phone.png' />
    </div>
</template>

<style>
.img-div {
  width: 100%;
  height: auto;
  position: absolute;
  top: -30px;
  z-index: -99999;
}
.img-div .circle,
.img-div .phone-circle {
  width: 100%;
  height: auto;
}
.img-div .phone-circle {
  display: none;
}
@media (max-width: 575.98px) {
  .img-div {
    top: -5px;
  }
  .img-div .circle {
    display: none;
  }
  .img-div .phone-circle {
    display: block;
  }
}
</style>