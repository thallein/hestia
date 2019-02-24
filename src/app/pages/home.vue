<template>
  <div class="full-width">
    <img
      id="thallien-logo"
      src="static/images/thallein-logo.png"
    >
    <WelcomeMessage name="World" />
  </div>
</template>

<script>
import WelcomeMessage from 'components/Home/welcomeMessage'
export default {
  components: {
    WelcomeMessage
  }
}
</script>
