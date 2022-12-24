<template>
  <div class="notfound">
    <h1>Page Not Found!</h1>
    <p>Oops! 😖 The requested URL was not found on this server.</p>
    <el-button class="btn" type="primary" @click="router.push('/')"
      >Back to home</el-button
    >
    <div class="img">
      <img :src="NotFoundImg" />
    </div>
  </div>
</template>

<script setup>
import NotFoundImg from "../assets/404.png";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<style lang="scss">
.notfound {
  height: 100%;
  text-align: center;
  margin-top: 50px;
  .btn {
    margin-top: 20px;
  }
  .img {
    margin-top: 20px;
    img {
      width: 200px;
      height: auto;
      margin: 0 auto;
    }
  }
}
</style>
