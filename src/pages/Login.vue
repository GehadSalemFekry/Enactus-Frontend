<template>
    <div dir="auto">
        <div class="container">
            <div class="form">
            <h1 class="title">{{ $t('forms.login-title')}}</h1>
            <form>
                <div class="form-element">
                    <label for="email">{{ $t('forms.email')}}</label>
                    <input type="email" name="email" placeholder="ahmed@gmail.com" class="input">
                </div>
                
                <div class="form-element">
                    <label for="pwd">{{ $t('forms.password')}}</label>
                    <input type="password" name="pwd" placeholder="eg. X0df!dl3SF" class="input">
                </div>
                
                <a href="#" class="form-link form-forget" v-b-modal.modal-sm>{{ $t('forms.forget-password')}}</a>

                <!--Forget Password Modal-->
                <!-- value = "{{ $t('forms.reset-password')}}" -->
                <b-modal id="modal-sm" size="md" title="Reset Password">
                    <div class="form-element">
                        <label for="email">{{ $t('forms.email')}}</label>
                        <input type="email" name="email" placeholder="ahmed@gmail.com" class="input">
                    </div>
                </b-modal>
                <!--*--Forget Password Modal--*-->

                <div class="form-element">

                    <!-- value = "{{ $t('forms.login-btn')}}" -->
                    <input type="submit" name="submit" value="Log In" class="submit-button input">

                </div>
                <p class="form-end">{{ $t('forms.have-not-acc')}}
                    <router-link :to="{ name: 'signup'}" class="form-link">{{ $t('forms.signup-link')}}</router-link>
                </p>   
            </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
  text-align: start;
}
</style>