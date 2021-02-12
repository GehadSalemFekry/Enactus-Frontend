<template lang="en">
    <div>
        <div class="container">
            <div class="form">
            <h1 class="title">Contact Us</h1>
            <form>
                <div class="form-element">
                    <label for="name">Name:</label>
                    <input type="text" name="name" placeholder="Ahmed Mohamed Ali" class="input">
                </div>

                <div class="form-element">
                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="ahmed@gmail.com" class="input">
                </div>

                <div class="form-element">
                    <label for="message">Message:</label>
                    <textarea name = "message" rows="5" class="input" placeholder="Enter your message here..."></textarea>
                </div>
        
                <div class="form-element">
                    <input type="submit" name="submit" value="Send" class="submit-button input">
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="en">
    
</style>
