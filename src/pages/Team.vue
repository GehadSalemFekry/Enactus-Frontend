<template>
  <div class="team" dir="auto">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="heading">{{ $t('team.team-title')}}</h1>
          <hr />
        </div>

        <div class="col-12">
          <div class='president-card'>
            <div class='president-img'>
              <img src="../assets/img/team/president.jpg" />
            </div>
            <div class='president-content'>
              <h5>{{ $t('team.president-name')}}</h5>
              <p>{{ $t('team.president')}}</p>
            </div>
          </div>
        </div>

        <div class="col-12">
            <b-card no-body>
              <b-tabs pills card>

                <b-tab>

                  <template #title>
                    <div class='sector-card'>
                      <div class='sector-img'>
                        <img src="../assets/img/team/human-resources.png" />
                      </div>
                      <div class='sector-content'>
                        <h5>{{ $t('team.vp-hr-name')}}</h5>
                        <p class="sector-vp">{{ $t('team.vp')}}</p>
                        <p>{{ $t('team.hr')}}</p>
                      </div>
                    </div>
                  </template>

                  <div class="container">
                    <div class="row">

                      <div class="col-4">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/human-resources/ShimaaGamal.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb1-hr-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.rd')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-4">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/human-resources/EmanElwakil.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb2-hr-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.hrm')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-4">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/human-resources/NadeenMohamed.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb3-hr-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.shadows')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </b-tab>

                <b-tab>

                  <template #title>
                    <div class='sector-card'>
                      <div class='sector-img'>
                        <img src="../assets/img/team/multi-media.png" />
                      </div>
                      <div class='sector-content'>
                        <h5>{{ $t('team.vp-media-name')}}</h5>
                        <p class="sector-vp">{{ $t('team.vp')}}</p>
                        <p>{{ $t('team.media')}}</p>
                      </div>
                    </div>
                  </template>

                  <div class="container">
                    <div class="row">

                      <div class="col-3">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/multi-media/SamarSaeed.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb1-media-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.social-media')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-3">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/multi-media/MartinNabil.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb2-media-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.photography')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-3">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/multi-media/GehadSalem.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb3-media-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.it')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-3">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/multi-media/AhmedGamal.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb4-media-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.graphic-design')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </b-tab>

                <b-tab active>

                  <template #title>
                    <div class='sector-card'>
                      <div class='sector-img'>
                      <img src="../assets/img/team/presentation.png" /> 
                      </div>
                      <div class='sector-content'>
                        <h5>{{ $t('team.vp-present-name')}}</h5>
                        <p class="sector-vp">{{ $t('team.presentation')}}</p>
                        <p>{{ $t('team.sector')}}</p>
                      </div>
                    </div>
                  </template>

                  <div class="container">
                    <div class="row">

                      <div class="col-6">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/presentation/HazemEmad.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb1-present-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.presentation')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-6">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/presentation/SalmaAlaaEldin.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb2-present-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.presentation')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </b-tab>

                <b-tab>

                  <template #title>
                    <div class='sector-card'>
                      <div class='sector-img'>
                        <img src="../assets/img/team/project-manger.png" />
                      </div>
                      <div class='sector-content'>
                        
                        <h5>{{ $t('team.vp-project-name')}}</h5>
                        <p class="sector-vp">{{ $t('team.project')}}</p>
                        <p>{{ $t('team.manager')}}</p>
                      </div>
                    </div>
                  </template>

                  <div class="container">
                    <div class="row">

                      <div class="col-4">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/project-manger/BasmaAhmed.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb1-project-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.business')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-4">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/project-manger/MariamKhamis.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb2-project-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.documentation')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-4">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/project-manger/MennaElnashar.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb3-project-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.rd')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">

                      <div class="col-4">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/project-manger/MohamedGewilly.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb4-project-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.operation')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-4">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/project-manger/MustafaHussein.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb5-project-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.operation')}} </p>
                            <p>{{ $t('team.coordinator')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-4">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/project-manger/AhmedAbdElfatah.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb6-project-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.science')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </b-tab>


                <b-tab>

                  <template #title>
                    <div class='sector-card'>
                      <div class='sector-img'>
                        <img src="../assets/img/team/public-relation.png" />
                      </div>
                      <div class='sector-content'>
                        <h5>{{ $t('team.vp-public-name')}}</h5>
                        <p class="sector-vp">{{ $t('team.vp')}}</p>
                        <p>{{ $t('team.public')}}</p>
                      </div>
                    </div>
                  </template>

                  <div class="container">
                    <div class="row">

                      <div class="col-3">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/public-relation/NourMohamed.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb1-public-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.fundraising')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-3">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/public-relation/DinaHaddad.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb2-public-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.sales-marketing')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-3">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/public-relation/MohamedEssam.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb3-public-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.logistics-oc')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                      <div class="col-3">
                        <div class='member-card'>
                          <div class='member-img'>
                            <img src="../assets/img/team/public-relation/MayarRamadan.png" />
                          </div>
                          <div class='member-content'>
                            <h5>{{ $t('team.mb4-public-name')}}</h5>
                            <p class="sector-vp">{{ $t('team.media-relations')}}</p>
                            <p>{{ $t('team.tl')}}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </b-tab>

              </b-tabs>
            </b-card>

        </div>

      </div>
    </div>
  </div>
</template>