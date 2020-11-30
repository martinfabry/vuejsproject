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
    <div id="articles-hockey">
      <article class="haluz" v-for="(item, name) in myJsonData.hockey.NHL" :key="name">
          <h1>{{ item.title }}</h1>
          <h2>Hokej</h2>
        <button type="button" class="btn">Read more</button>
      </article>
    </div>
<!--
    <img :src="require('@/img/barcelona.jpg')" alt class="icon" />

    -->
  </b-container>
</template>

<script>
import json from "@/json/hockey.json";

export default {
  name: "Hockey",
  data() {
    return {
      myJsonData: json
    };
  },
  methods: {
    getImageBySrc: function() {
      var x = document.createElement("IMG");
  x.setAttribute("src", '@/img/barcelona.jpg');
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.container.appendChild(x);
  console.log("ideto");
    },

    getImage: function(source) {
      return source.toString();
    },

    getImgUrl(pet) {
    var images = require.context('../img/', false, /\.jpg$/)
    return images('./' + pet + ".img")
  }
  }
};
  //"v-onload=getImageBySrc(item.article[0].url)

</script>