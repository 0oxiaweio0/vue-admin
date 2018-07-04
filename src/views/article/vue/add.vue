<template>
  <article-detail :is-edit='false'></article-detail>
</template>

<script>
  import ArticleDetail from './components/ArticleDetail'

  export default {
    name: 'vueAdd',
    components: { ArticleDetail }
  }
</script>
