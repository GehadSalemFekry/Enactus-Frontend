<template lang="en">
  <div>
    <!--First Section-->
    <div class="first-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="heading">{{ $t('join.join-title')}}</h1>
            <hr />
          </div>

          <div class="col-sm-6">
            <div class="join-img">
              <img src="../assets/img/join/joinus.png" />
            </div>
          </div>

          <div class="col-sm-6">
            <div class="join-details">
              <div class="join-title">{{ $t('join.apply-title')}}</div>
              <div class="join-hiring">{{ $t('join.hiring')}}</div>
              <div class="join-deadline">{{ $t('join.apply-date')}}</div>
              <hr />
              <div class="join-btn">
                <a href="#sectors">{{ $t('join.apply-btn')}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--*--First Section--*-->

    <div class="container">
      <hr class="dividing" />
    </div>

    <!--Main Section-->
    <div id="sectors" class="container sectors">
      <b-card no-body>
        <b-tabs pills card>
          <!--Human Resources Tab-->
          <b-tab active>

          <template #title>
            {{ $t('join.hr')}}
          </template>

            <b-card-text>
              <div class="first-section">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="join-img">
                        <img src="../assets/img/join/human-resources.png" />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="join-details">
                        <div class="join-title">{{ $t('join.hr-title')}}</div>
                        <div class="join-hiring">
                          {{ $t('join.hr-hiring')}}
                        </div>
                        <div class="join-deadline">
                          {{ $t('join.apply-date')}}
                        </div>
                        <hr />
                        <div class="join-btn">
                          <a href="https://www.google.com/">{{ $t('join.apply-btn')}}</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <h5 class="sector-heading">{{ $t('join.responsibilities')}}</h5>
                    </div>

                    <div class="col-12">
                      <div class="first-branch">
                        <!-- <div class="branch-title">HR</div> -->
                        <div class="branch-details">

                          - {{ $t('join.hr-responsibilities-1')}}<br><br>

                          - {{ $t('join.hr-responsibilities-2')}}<br><br>

                          - {{ $t('join.hr-responsibilities-3')}}<br><br>

                          - {{ $t('join.hr-responsibilities-4')}}<br><br>

                          - {{ $t('join.hr-responsibilities-5')}}<br><br>

                          - {{ $t('join.hr-responsibilities-6')}}<br><br>

                          - {{ $t('join.hr-responsibilities-7')}}<br><br>

                          - {{ $t('join.hr-responsibilities-8')}}<br><br>

                          - {{ $t('join.hr-responsibilities-9')}}<br><br>
                          
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <hr class="w-100" />
                    </div>

                    <div class="col-sm-6">
                      <div class="first-question">
                        <div class="question-title">
                          {{ $t('join.hr-sub')}}
                        </div>
                        <ul class="question-details">
                          <li>{{ $t('join.hr-sub-1')}}</li>
                          <li>{{ $t('join.hr-sub-2')}}</li>
                          <li>{{ $t('join.hr-sub-3')}}</li>
                          <li>{{ $t('join.hr-sub-4')}}</li>
                          <li>{{ $t('join.hr-sub-5')}}</li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="first-question">
                        <div class="question-title">{{ $t('join.hr-learn')}}</div>
                        <ul class="question-details">
                          <li>{{ $t('join.hr-learn-1')}}</li>
                          <li>{{ $t('join.hr-learn-2')}}</li>
                          <li>{{ $t('join.hr-learn-3')}}</li>
                          <li>{{ $t('join.hr-learn-4')}}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <!--*--Human Resources Tab--*-->

          <!--Public Relation Tab-->
          <b-tab>

          <template #title>
            {{ $t('join.public')}}
          </template>

            <b-card-text>
              <div class="first-section">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="join-img">
                        <img src="../assets/img/join/public-relation.png" />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="join-details">
                        <div class="join-title">{{ $t('join.public-title')}}</div>
                        <div class="join-hiring">
                          {{ $t('join.public-hiring')}}
                        </div>
                        <div class="join-deadline">
                          {{ $t('join.apply-date')}}
                        </div>
                        <hr />
                        <div class="join-btn">
                          <a href="https://www.google.com/">{{ $t('join.apply-btn')}}</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <h5 class="sector-heading">{{ $t('join.responsibilities')}}</h5>
                    </div>

                    <div class="col-12">
                      <div class="first-branch">
                        <!-- <div class="branch-title">HR</div> -->
                        <div class="branch-details">

                          - {{ $t('join.public-responsibilities-1')}}<br><br>

                          - {{ $t('join.public-responsibilities-2')}}<br><br>

                          - {{ $t('join.public-responsibilities-3')}}<br><br>

                          - {{ $t('join.public-responsibilities-4')}}<br><br>

                          - {{ $t('join.public-responsibilities-5')}}<br><br>

                          - {{ $t('join.public-responsibilities-6')}}<br><br>

                          - {{ $t('join.public-responsibilities-7')}}<br><br>

                          - {{ $t('join.public-responsibilities-8')}}<br><br>

                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <hr class="w-100" />
                    </div>

                    <div class="col-sm-6">
                      <div class="first-question">
                        <div class="question-title">{{ $t('join.public-sub')}}</div>
                        <ul class="question-details">
                          <li>{{ $t('join.public-sub-1')}}</li>
                          <li>{{ $t('join.public-sub-2')}}</li>
                          <li>{{ $t('join.public-sub-3')}}</li>
                          <li>{{ $t('join.public-sub-4')}}</li>
                          <li>{{ $t('join.public-sub-5')}}</li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="first-question">
                        <div class="question-title">{{ $t('join.public-learn')}}</div>
                        <ul class="question-details">
                          <li>{{ $t('join.public-learn-1')}}</li>
                          <li>{{ $t('join.public-learn-2')}}</li>
                          <li>{{ $t('join.public-learn-3')}}</li>
                          <li>{{ $t('join.public-learn-4')}}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <!--*--Public Relation Tab--*-->

          <!--Project Management Tab-->
          <b-tab>

          <template #title>
            {{ $t('join.project')}}
          </template>

            <b-card-text>
              <div class="first-section">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="join-img">
                        <img src="../assets/img/join/project-management.png" />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="join-details">
                        <div class="join-title">{{ $t('join.project-title')}}</div>
                        <div class="join-hiring">
                          {{ $t('join.project-hiring')}}
                        </div>
                        <div class="join-deadline">
                          {{ $t('join.apply-date')}}
                        </div>
                        <hr />
                        <div class="join-btn">
                          <a href="https://www.google.com/">{{ $t('join.apply-btn')}}</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <h5 class="sector-heading">{{ $t('join.responsibilities')}}</h5>
                    </div>

                    <div class="col-12">
                      <div class="first-branch">
                        <!-- <div class="branch-title">HR</div> -->
                        <div class="branch-details">

                          - {{ $t('join.project-responsibilities-1')}}<br><br>

                          - {{ $t('join.project-responsibilities-2')}}<br><br>

                          - {{ $t('join.project-responsibilities-3')}}<br><br>

                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <hr class="w-100" />
                    </div>

                    <div class="col-sm-6">
                      <div class="first-question">
                        <div class="question-title">
                          {{ $t('join.project-sub')}}
                        </div>
                        <ul class="question-details">
                          <li>{{ $t('join.project-sub-1')}}</li>
                          <li>{{ $t('join.project-sub-2')}}</li>
                          <li>{{ $t('join.project-sub-3')}}</li>
                          <li>{{ $t('join.project-sub-4')}}</li>
                          <li>{{ $t('join.project-sub-5')}}</li>
                          <li>{{ $t('join.project-sub-6')}}</li>
                          <li>{{ $t('join.project-sub-7')}}</li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="first-question">
                        <div class="question-title">{{ $t('join.project-learn')}}</div>
                        <ul class="question-details">
                          <li>{{ $t('join.project-learn-1')}}</li>
                          <li>{{ $t('join.project-learn-2')}}</li>
                          <li>{{ $t('join.project-learn-3')}}</li>
                          <li>{{ $t('join.project-learn-4')}}</li>
                          <li>{{ $t('join.project-learn-5')}}</li>
                          <li>{{ $t('join.project-learn-6')}}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <!--*--Project Management Tab--*-->

          <!--Presentation Tab-->
          <b-tab>

          <template #title>
            {{ $t('join.presentation')}}
          </template>

            <b-card-text>
              <div class="first-section">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="join-img">
                        <img src="../assets/img/join/presentation.png" />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="join-details">
                        <div class="join-title">{{ $t('join.presentation-title')}}</div>
                        <div class="join-hiring">
                          {{ $t('join.presentation-hiring')}}
                        </div>
                        <div class="join-deadline">
                          {{ $t('join.apply-date')}}
                        </div>
                        <hr />
                        <div class="join-btn">
                          <a href="https://www.google.com/">{{ $t('join.apply-btn')}}</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <h5 class="sector-heading">{{ $t('join.responsibilities')}}</h5>
                    </div>

                    <div class="col-12">
                      <div class="first-branch">
                        <!-- <div class="branch-title">HR</div> -->
                        <div class="branch-details">

                          - {{ $t('join.presentation-responsibilities-1')}}<br><br>

                          - {{ $t('join.presentation-responsibilities-2')}}<br><br>

                          - {{ $t('join.presentation-responsibilities-3')}}<br><br>

                          - {{ $t('join.presentation-responsibilities-4')}}<br><br>

                          - {{ $t('join.presentation-responsibilities-5')}}<br><br>

                        </div>
                      </div>
                    </div>  

                    <div class="col-12">
                      <hr class="w-100" />
                    </div>

                    <div class="col-sm-6">
                      <div class="first-question">
                        <div class="question-title">
                          {{ $t('join.presentation-sub')}}
                        </div>
                        <ul class="question-details">
                          <li>{{ $t('join.presentation-sub-1')}}</li>
                          <li>{{ $t('join.presentation-sub-2')}}</li>
                          <li>{{ $t('join.presentation-sub-3')}}</li>
                          <li>{{ $t('join.presentation-sub-4')}}</li>
                          <li>{{ $t('join.presentation-sub-5')}}</li>
                          <li>{{ $t('join.presentation-sub-6')}}</li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="first-question">
                        <div class="question-title">{{ $t('join.presentation-learn')}}</div>
                        <ul class="question-details">
                          <li>{{ $t('join.presentation-learn-1')}}</li>
                          <li>{{ $t('join.presentation-learn-2')}}</li>
                          <li>{{ $t('join.presentation-learn-3')}}</li>
                          <li>{{ $t('join.presentation-learn-4')}}</li>
                          <li>{{ $t('join.presentation-learn-5')}}</li>
                          <li>{{ $t('join.presentation-learn-6')}}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <!--*--Presentation Tab--*-->

          <!--Multi-Media Tab-->
          <b-tab>

          <template #title>
            {{ $t('join.media')}}
          </template>

            <b-card-text>
              <div class="first-section">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="join-img">
                        <img src="../assets/img/join/multi-media.png" />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="join-details">
                        <div class="join-title">{{ $t('join.media-title')}}</div>
                        <div class="join-hiring">
                          {{ $t('join.media-hiring')}}
                        </div>
                        <div class="join-deadline">
                          {{ $t('join.apply-date')}}
                        </div>
                        <hr />
                        <div class="join-btn">
                          <a href="https://www.google.com/">{{ $t('join.apply-btn')}}</a>
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <h5 class="sector-heading">{{ $t('join.responsibilities')}}</h5>
                    </div>

                    <div class="col-sm-6">
                      <div class="first-branch">
                        <div class="branch-title">{{ $t('join.media-responsibilities-designers')}}</div>
                        <div class="branch-details">
                          {{ $t('join.media-responsibilities-designers-details')}}
                        </div>
                      </div>
                      <div class="second-branch">
                        <div class="branch-title">{{ $t('join.media-responsibilities-photographers')}}</div>
                        <div class="branch-details">
                          {{ $t('join.media-responsibilities-photographers-details')}}
                        </div>
                      </div>
                      <div class="third-branch">
                        <div class="branch-title">{{ $t('join.media-responsibilities-marketing')}}</div>
                        <div class="branch-details">
                          {{ $t('join.media-responsibilities-marketing-details')}}.
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="first-branch">
                        <div class="branch-title">{{ $t('join.media-responsibilities-video-editing')}}</div>
                        <div class="branch-details">
                          {{ $t('join.media-responsibilities-video-editing-details')}}
                        </div>
                      </div>
                      <div class="second-branch">
                        <div class="branch-title">{{ $t('join.media-responsibilities-social-media')}}</div>
                        <div class="branch-details">
                          {{ $t('join.media-responsibilities-social-media-details')}}
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <hr class="w-100" />
                    </div>

                    <div class="col-sm-6">
                      <div class="first-question">
                        <div class="question-title">
                          {{ $t('join.media-sub')}}
                        </div>
                        <ul class="question-details">
                          <li>{{ $t('join.media-sub-1')}}</li>
                          <li>{{ $t('join.media-sub-2')}}</li>
                          <li>{{ $t('join.media-sub-3')}}</li>
                          <li>{{ $t('join.media-sub-4')}}</li>
                          <li>{{ $t('join.media-sub-5')}}</li>
                          <li>{{ $t('join.media-sub-6')}}</li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="first-question">
                        <div class="question-title">{{ $t('join.media-learn')}}</div>
                        <ul class="question-details">
                          <li>{{ $t('join.media-learn-1')}}</li>
                          <li>{{ $t('join.media-learn-2')}}</li>
                          <li>{{ $t('join.media-learn-3')}}</li>
                          <li>{{ $t('join.media-learn-4')}}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <!--*--Multi-Media Tab--*-->
        </b-tabs>
      </b-card>
    </div>

    <!--*--Main Section--*-->
  </div>
</template>