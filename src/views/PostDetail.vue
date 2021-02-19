<template>
  <div>
    <h2>View Post</h2>
    <div v-if="loading">Loading...</div>
    <div v-if="getPost">
      <h3>[ID: {{ getPost.id }}]</h3>
      <div>{{ getPost.text }}</div>
    </div>
  <button @click="deletePost(getPost.id)">삭제</button>
  </div> 
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      loading: true,
    };
  },
  computed:{
      ...mapGetters(['getPost'])
  },
  created() {
     // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    this.fetchData();
  },
   // 라우트가 변경되면 메소드를 다시 호출됩니다.
  watch: { $route: "fetchData" },
  methods: {
    fetchData() {
      this.loading = true;
      this.$store.dispatch('loadPost', {id:this.$route.params.id});
      this.loading = false;
    },
    deletePost(id){
      this.$store.dispatch('removePost',id)
      this.$router.push('/posts')
    }
  },
};
</script>