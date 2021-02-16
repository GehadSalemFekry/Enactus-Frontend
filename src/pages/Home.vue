<template lang="en">
  <div>
    <div class="img-home">
      <div>
        <img src="../assets/img/home.png" />
      </div>
     
      <div class="img-text">
        <span>{{ $t('home.img-text-1')}}</span>{{ $t('home.img-text-2')}}<br />
        {{ $t('home.img-text-3')}}<span>{{ $t('home.img-text-4')}}</span>
      </div>
    </div>

    <div class="container">
      <div class="about">
        <h1 class="heading">{{ $t('home.heading')}}</h1>
        <hr />
        <p class="heading-details">
          {{ $t('home.heading-details')}}
        </p>

        <div class="row">
          <div class="col-md-4 col-sm-12">
            <div class="icon">
              <img
                class="mx-auto d-block"
                src="../assets/img/icon1-about.png"
              />
            </div>
            <h4 class="text-center">{{ $t('home.heading-icons-title-1')}}</h4>
            <p>
              {{ $t('home.heading-icons-details-1')}}
            </p>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="icon">
              <img
                class="mx-auto d-block"
                src="../assets/img/icon2-about.png"
              />
            </div>
            <h4 class="text-center">{{ $t('home.heading-icons-title-2')}}</h4>
            <p>
              {{ $t('home.heading-icons-details-2')}}
            </p>
          </div>

          <div class="col-md-4 col-sm-12">
            <div class="icon">
              <img
                class="mx-auto d-block"
                src="../assets/img/icon3-about.png"
              />
            </div>
            <h4 class="text-center">{{ $t('home.heading-icons-title-3')}}</h4>
            <p>
              {{ $t('home.heading-icons-details-3')}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="white-section">
      <div class="container">
        <div class="row">


          <div class="col-md-5 col-sm-12">
            <h2 class="text-center font-weight-bolder">{{ $t('home.vision')}}</h2>
            <p class="text-center">
              {{ $t('home.vision-details')}}
            </p>
          </div>

          <div class="col-md-2 col-sm-12">
            <div class="logo">
              <img src="../assets/img/about-logo.png" />
            </div>
          </div>  

          <div class="col-md-5 col-sm-12">
            <h2 class="text-center font-weight-bolder">{{ $t('home.mission')}}</h2>
            <p class="text-center">
              {{ $t('home.mission-details')}}
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>