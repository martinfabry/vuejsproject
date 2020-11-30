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
      <article v-for="(item, name) in myJsonData.football.laliga" :key="name">
          <img src="../img/laliga-v-1200x1200.jpg" alt="logo-home.svg" />
          <h1>{{ item.title }}</h1>
          <h2>Futbal</h2>
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
  name: "Football",
  data() {
    return {
      myJsonData: json
    };
  }
};
</script>