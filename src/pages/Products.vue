<template lang="en">
    <div class="product">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="heading">Projects</h1>
            <hr />
          </div>

          <div class="col-sm-6">
            <div class="wood">
              <img src="../assets/img/wood-product.png" />
              <div class="product-name">Wood Project</div>
              <div class="product-details">
                <router-link :to="{ name: 'woodProject'}">Details</router-link>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="limpio">
              <img src="../assets/img/limpio-product.png" />
              <div class="product-name">Limpio Project</div>
              <div class="product-details">
                <router-link :to="{ name: 'limpioProject'}">Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
