<template lang="en">
    <div>
        <div class="container">
            <div class="form">
            <h1 class="title">Sign Up</h1>
            <form>
                <div class="form-element">
                    <label for="fname">First name</label>
                    <input type="text" name="fname" placeholder="Ahmed" class="input">
                </div>

                <div class="form-element">
                    <label for="lname">Last name</label>
                    <input type="text" name="lname" placeholder="Mohamed" class="input">
                </div>
                
                <div class="form-element">
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="ahmed@gmail.com" class="input">
                </div>
                
                <div class="form-element">
                    <label for="pwd">Password</label>
                    <input type="password" name="pwd" placeholder="eg. X0df!dl3SF" class="input">
                </div>
                
                <div class="form-element">
                    <label for="confirmpwd">Confirm Password</label>
                    <input type="password" name="confirmpwd" placeholder="eg. X0df!dl3SF" class="input">
                </div>
                
                <div>
                    <input type="checkbox" name="checkbox" value="check" class="checkbox">
                    <span class="form-terms">I agree to the <a v-b-modal.modal-sm class="form-link">Terms and Conditions</a></span><br>
                <!--Forget Password Modal-->
                <b-modal id="modal-sm" size="md" title="Small Modal">
                    <div class="terms text-center">
                        <p class='display-4'>Coming Soon</p>
                    </div>
                </b-modal>
                <!--*--Forget Password Modal--*-->
                </div>    
                
                <div class="form-element">
                    <input type="submit" name="submit" value="Create Account" class="submit-button input">
                </div>
                    
                <div>
                    <p class="form-end">Have an account? 
                        <router-link :to="{ name: 'login'}" class="form-link">Click here</router-link>
                    </p>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {};
</script>
<style lang="en">
</style>