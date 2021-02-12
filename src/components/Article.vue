<template lang="en">
    <div class="article">
        <h3 class="article-title">{{ en_title }}</h3>
        <p class="article-body">{{ en_body }}</p>
    </div>
</template>
<script>


export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      id: this.article.id,
      en_title: this.article.en_title,
      en_body: this.article.en_body,
    };
  },
};
</script>
<style lang="">
</style>