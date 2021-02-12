<template lang="en">
    <div class="two-circles-rotated-div">
        <img src='..\assets\img\two-circles.png' />
    </div>
</template>

<style>
.two-circles-rotated-div {
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -99999;
  transform: rotate(-180deg);
}
.two-circles-rotated-div img {
  width: 100%;
  height: auto;
}
</style>