<template lang="en">
  <div class="new-article">
    <div class="container">
      <div class="row">
          <div class="col-12">
              <h1 class="heading">Create Article</h1>
                <hr />
            </div>
          </div>

        <div>
          <input type="text" placeholder="New En Title" v-model="newEnTitle">
          <textarea rows="10" cols="100" v-model="newEnArticle">New En Article</textarea>
        </div>
        
        <div>
          <input type="text" placeholder="New Ar Title" v-model="newArTitle">
          <textarea rows="10" cols="100" v-model="newArArticle">New Ar Article</textarea>
        </div>
        
        <div>
           <input type="submit" value="Create new Article" @click="addArticle">
        </div>

        <div>
            <ArticleEdit v-for="(article, index) in this.$store.state.articles" 
            :key="article.id" :article="article" :index="index"></ArticleEdit>
        </div>
        
    </div>
  </div>

</template>

<script>
import ArticleEdit from "../components/ArticleEdit";
import ArticleAr from "../components/ArticleAr";

export default {
  components: {
    ArticleEdit,
    ArticleAr,
  },
  data() {
    return {
      newEnTitle: "",
      newEnArticle: "",
      newArTitle: "",
      newArArticle: "",
      // idForArticle: 1,
      enTitlebeforeEditCache: "",
      enBodybeforeEditCache: "",
    };
  },

  created() {
    this.$store.dispatch("retrieveArticles");
  },

  methods: {
    addArticle() {
      if (
        this.newEnTitle.trim().length == 0 ||
        this.newEnArticle.trim().length == 0
      ) {
        return;
      }

      this.$store.dispatch("addArticle", {
        //id: this.idForArticle,
        en_title: this.newEnTitle,
        en_body: this.newEnArticle,
        ar_title: this.newArTitle,
        ar_body: this.newArArticle,
      });

      this.newEnTitle = "";
      this.newEnArticle = "";
      this.newArTitle = "";
      this.newArArticle = "";
      //this.idForArticle++
    },
  },
};
</script>

<style lang="en">
</style>