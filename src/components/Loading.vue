<template lang="en">
    <div class="loading-div">
        <div class="loading"></div>
    </div>
</template>

<style scoped>
.loading-div {
    width: 200px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.loading-div .loading {
    background: url(../assets/img/fixed-logo.png) no-repeat center;
    width: 100%;
    height: 100%;
}

.loading {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

@keyframes loading {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
.loading {
    animation-name: loading;
}
</style>