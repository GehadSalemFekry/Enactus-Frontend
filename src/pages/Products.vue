<template lang="en">
    <div class="product">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="heading">{{ $t('products.products-title')}}</h1>
            <hr />
          </div>

          <div class="col-sm-6">
            <div class="wood">
              <img src="../assets/img/wood-product.png" />
              <div class="product-name">{{ $t('products.wood-project')}}</div>
              <div class="product-details">
                <router-link :to="{ name: 'woodProject'}">{{ $t('products.details')}}</router-link>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="limpio">
              <img src="../assets/img/limpio-product.png" />
              <div class="product-name">{{ $t('products.limpio-project')}}</div>
              <div class="product-details">
                <router-link :to="{ name: 'limpioProject'}">{{ $t('products.details')}}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
