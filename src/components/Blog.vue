<template>
  <b-container fluid="sm">
    <!--
    <button v-on:click="getBlogData">{{getBlogData}}</button>
    <div v-on:load="myJsonData">{{blogDataList}}</div>
   -->
    <!--<div v-for="(item, name) in items" :key="name"></div>-->

    <!--
    <div v-if="myJsonData == 'articles'">
   </div>
   <article v-for="a in myJsonData.articles" :key="a">
   -->
    <div id="articles">
      <article v-for="(item, name) in myJsonData" :key="name">
          <img src="../img/laliga-v-1200x1200.jpg" alt="logo-home.svg" />
          <h1>{{ item.title }}</h1>
          <h2>{{ item.category }}</h2>
          <hr class="line" />
          <p>{{ item.article[0].text }}</p>
        <button type="button" class="btn">Read more</button>
      </article>
    </div>
  </b-container>
</template>
<script>
import json from "@/json/football.json";

export default {
  name: "Blog",
  data() {
    return {
      myJsonData: json,
      blogDataList: [],
    };
  },
  methods: {
    getBlogData() {
      return (this.blogDataList = json);
    },
  },
};
</script>
<!--
<style lang="scss">
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
  background-color: black;
}
</style>
-->

<!--
<style scoped>
article {
  border: 1px solid black;
}
</style>
-->