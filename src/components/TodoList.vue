<template>
    <div>
        <!--ul>li*3 -->
        <ul>
            <li v-for="(todoItem, index) in  getTodoItems" v-bind:key="index" class="shadow">
                <i class="fas fa-check checkBtn" :class="{checkBtnCompleted: todoItem.completed}" 
                    v-on:click="toggleTodo(todoItem)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" v-on:click="removeTodoItem(todoItem)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters,
//  mapMutations,
  mapActions } from 'vuex'
export default {
    data: function() {
        return {
            // todoItems: []
        }
    },
    mounted() {
      this.$store.dispatch('loadTodoItems');
    },
    computed:{
      // todoItems(){
      //   return this.$store.getters.getTodoItems;
      // }
      ...mapGetters(['getTodoItems'])
    },
    methods: {
        // removeTodo: function(todoItem, index) {
        //   //  this.$emit('removeItemEvent', todoItem, index);
        //   /**
        //    *  this.$store.commit('removeOneItem', {todoItem:todoItem, index:index})
        //    */
        //   this.$store.commit('removeOneItem', {todoItem, index});
        // },
        // toggleComplete: function(todoItem, index) {
        //     // this.$emit('toggleItemEvent', todoItem, index);
        //   this.$store.commit('toggleOneItem', {todoItem, index})
        // }   
        // ...mapMutations({
          // removeTodo:'removeOneItem',
        //   toggleComplete:'toggleOneItem',
        // }),
        toggleTodo(todoItem){
          todoItem.completed = !todoItem.completed;
          this.$store.dispatch('toggleTodoItem', todoItem);
        },
        ...mapActions(['removeTodoItem'])
    },
    
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>
