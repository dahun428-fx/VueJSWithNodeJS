<template>
  <div id="home">
    <TodoHeader></TodoHeader>
    <TodoInput ></TodoInput>
    <TodoList ></TodoList>
    <TodoFooter ></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader.vue'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import TodoFooter from '../components/TodoFooter.vue'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
 
  // methods:{
      // addOneItem: function(todoItem) {
      //   var obj = {completed: false, item: todoItem};
      //   localStorage.setItem(todoItem,JSON.stringify(obj));
      //   this.todoItems.push(obj);
      // },
      // removeOneItem(todoItem, index){
      //   localStorage.removeItem(todoItem);
      //   this.todoItems.splice(index, 1);
      // },
      // toggleOneItem(todoItem, index){
      //       this.todoItems[index].completed = !this.todoItems[index].completed;
      //       //localStorage에 updateItem 메서드가 없어서 removeItem하고 setItem 한다.
      //       localStorage.removeItem(todoItem.item);
      //       localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      // },
      // removeAllItems(){
      //   localStorage.clear();
      //   this.todoItems = [];
      // }
  // },
  /* life cycle method */
    // created: function() {
    //     if(localStorage.length > 0){
    //         for(var i=0; i < localStorage.length; i++) {
    //             if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
    //                 //console.log(typeof localStorage.getItem(localStorage.key(i)));
    //                 //console.log( JSON.parse(localStorage.getItem(localStorage.key(i))) );
    //                 //JSON.parse()는 json string을 object로 변환
    //                 const todoObj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    //                 this.todoItems.push(todoObj);
    //             }
    //         }
    //     }
    // }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style: groove;
    width:200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
