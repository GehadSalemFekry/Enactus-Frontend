<template lang="ar">
    <div class="article">
        <h3 class="article-title">{{ ar_title }}</h3>
        <p class="article-body">{{ ar_body }}</p>
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
      ar_title: this.article.ar_title,
      ar_body: this.article.ar_body,
    };
  },
};
</script>
<style lang="">
</style>