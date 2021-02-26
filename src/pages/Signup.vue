<template>
    <div dir="auto">
        <div class="container">
            <div class="form">
            <h1 class="title">{{ $t('forms.signup-title')}}</h1>
            <form>
                <div class="form-element">
                    <label for="fname">{{ $t('forms.f-name')}}</label>
                    <input type="text" name="fname" placeholder="Ahmed" class="input">
                </div>

                <div class="form-element">
                    <label for="lname">{{ $t('forms.l-name')}}</label>
                    <input type="text" name="lname" placeholder="Mohamed" class="input">
                </div>
                
                <div class="form-element">
                    <label for="email">{{ $t('forms.email')}}</label>
                    <input type="email" name="email" placeholder="ahmed@gmail.com" class="input">
                </div>
                
                <div class="form-element">
                    <label for="pwd">{{ $t('forms.password')}}</label>
                    <input type="password" name="pwd" placeholder="eg. X0df!dl3SF" class="input">
                </div>
                
                <div class="form-element">
                    <label for="confirmpwd">{{ $t('forms.c-password')}}</label>
                    <input type="password" name="confirmpwd" placeholder="eg. X0df!dl3SF" class="input">
                </div>
                
                <div>
                    <input type="checkbox" name="checkbox" value="check" class="checkbox">
                    <span class="form-terms">{{ $t('forms.agree')}} <a v-b-modal.modal-sm class="form-link">{{ $t('forms.terms')}}</a></span><br>
                <!--Forget Password Modal-->
                <!-- value= "{{ $t('forms.terms')}}"" -->
                <b-modal id="modal-sm" size="md" title="Terms and Conditions">
                    <div class="terms text-center">
                        <p class='display-4'>{{ $t('forms.terms-details')}}</p>
                    </div>
                </b-modal>
                <!--*--Forget Password Modal--*-->
                </div>    
                
                <div class="form-element">
                    <!-- value= "{{ $t('forms.login-btn')}}"" -->
                    <input type="submit" name="submit" value="Create Account" class="submit-button input">
                </div>
                    
                <div>
                    <p class="form-end">{{ $t('forms.have-acc')}}
                        <router-link :to="{ name: 'login'}" class="form-link">{{ $t('forms.login-link')}}</router-link>
                    </p>
                </div>
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