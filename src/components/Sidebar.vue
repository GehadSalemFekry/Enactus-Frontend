<template> 
  <div>
    <b-button v-b-toggle.sidebar class="sidebar-btn"></b-button>
  
    <b-sidebar id="sidebar" no-header>
          <div class="sidebar-top">
          <div class="logo">
            <router-link :to="{ name: 'home'}" class="side-link">
              <img src='..\assets\img\enactus-logo.png' />
            </router-link>
          </div>
          <div class="sign-btns">
            <router-link :to="{ name: 'signup'}" class="btn-signup">{{ $t('sidebar.signup')}}</router-link>
            <router-link :to="{ name: 'login'}" class="btn-signin">{{ $t('sidebar.login')}}</router-link>
          </div>
        </div>

        <div class="sidebar-content">
          <router-link :to="{ name: 'home'}" class="side-link">{{ $t('sidebar.home')}}</router-link>
          <router-link :to="{ name: 'team'}" class="side-link">{{ $t('sidebar.team')}}</router-link>
          <router-link :to="{ name: 'gallery'}" class="side-link">{{ $t('sidebar.gallery')}}</router-link>
          <router-link :to="{ name: 'products'}" class="side-link">{{ $t('sidebar.products')}}</router-link>
          <router-link :to="{ name: 'blog'}" class="side-link">{{ $t('sidebar.blog')}}</router-link>
          <router-link :to="{ name: 'joinus'}" class="side-link">{{ $t('sidebar.join')}}</router-link>
          <router-link :to="{ name: 'contactus'}" class="side-link">{{ $t('sidebar.contact')}}</router-link>
        </div>

        <div class="sidebar-bottom">
          <div class="social-heading">
            <h5>{{ $t('sidebar.social')}}</h5>
          </div>
          <div class="social-icons">
            <a class="facebook" href="https://www.facebook.com/EnactusAlexandriaUniversity/" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a class="youtube" href="https://www.youtube.com/channel/UCmU_Jav9vR_ho0MwD-xqV_A/featured?view_as=public" target="_blank"><i class="fab fa-youtube"></i></a>
            <a class="instagram" href="https://www.instagram.com/enactus_alex/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a class="linkedin" href="https://www.linkedin.com/company/enactusalexu" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          </div>
      </div>
    </b-sidebar>
  </div>
</template>