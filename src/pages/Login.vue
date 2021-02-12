<template lang="en">
    <div>
        <div class="container">
            <div class="form">
            <h1 class="title">Log In</h1>
            <form>
                <div class="form-element">
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="ahmed@gmail.com" class="input">
                </div>
                
                <div class="form-element">
                    <label for="pwd">Password</label>
                    <input type="password" name="pwd" placeholder="eg. X0df!dl3SF" class="input">
                </div>
                
                <a href="#" class="form-link form-forget" v-b-modal.modal-sm>Forgot Password?</a>

                <!--Forget Password Modal-->
                <b-modal id="modal-sm" size="md" title="Reset Password">
                    <div class="form-element">
                        <label for="email">Enter Your Email</label>
                        <input type="email" name="email" placeholder="ahmed@gmail.com" class="input">
                    </div>
                </b-modal>
                <!--*--Forget Password Modal--*-->

                <div class="form-element">
                    <input type="submit" name="submit" value="Login now" class="submit-button input">
                </div>
                <p class="form-end">Don't have an account? 
                    <router-link :to="{ name: 'signup'}" class="form-link">Sign Up</router-link>
                </p>   
            </form>
            </div>
        </div>
    </div>
</template>