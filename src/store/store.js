import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
axios.defaults.baseURL = 'http://enactus-alexu.local/api'


export const store = new Vuex.Store({
    state: {
        articles: []
    },

    mutations: {
        addArticle(state, article) {
            state.articles.push({
                id: article.id,
                en_title: article.en_title,
                en_body: article.en_body,
                ar_title: article.ar_title,
                ar_body: article.ar_body,
                editing: false,
            })
        },

        updateArticle(state, article) {
            const index = state.articles.findIndex(item => item.id == article.id)
            state.articles.splice(index, 1, {
                'id': article.id,
                'en_title': article.en_title,
                'en_body': article.en_body,
                'ar_title': article.ar_title,
                'ar_body': article.ar_body,
                'editing': article.editing,
            })
        },

        deleteArticle(state, id) {
            const index = state.articles.findIndex(item => item.id == id)
            state.articles.splice(index, 1)
        },

        retrieveArticles(state, articles) {
            state.articles = articles
        }
    },

    actions: {
        retrieveArticles(context) {
            axios.get('/articles')
                .then(response => {
                    context.commit('retrieveArticles', response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },

        addArticle(context, article) {
            axios.post('/articles', {
                en_title: article.en_title,
                en_body: article.en_body,
                ar_title: article.ar_title,
                ar_body: article.ar_body,
            })
                .then(response => {
                    context.commit('addArticle', response.data)
                })
                .catch(error => {
                    console.log(error);
                })
        },

        updateArticle(context, article) {
            axios.patch('/articles/' + article.id, {
                en_title: article.en_title,
                en_body: article.en_body,
                ar_title: article.ar_title,
                ar_body: article.ar_body,
                title: article.title,
            })
              .then(response => {
                context.commit('updateArticle', response.data)
              })
              .catch(error => {
                console.log(error)
              })
          },

        deleteArticle(context, id) {
          axios.delete('/articles/' + id)
            .then(() => {
              context.commit('deleteArticle', id)
            })
            .catch(error => {
              console.log(error)
            })
        },
    }
})