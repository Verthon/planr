<template>
  <div class="table">
    <AddTask show="show" v-if="show"/>
    <div class="column" v-for="(column, columnIndex) in table.columns" v-bind:key="columnIndex">
      <h2 class="column__title">{{column.name}}</h2>
      <nestedDraggable id="column" nestedDraggable=".task" :list="column.tasks">
        <Task
          v-for="(task, taskId) in column.tasks"
          v-bind:key="taskId"
          v-bind:task="task"
          v-bind:type="column.name"
        />
      </nestedDraggable>
        <button
          v-on:click="show = true"
          v-if="column.name === 'oczekujące'"
          class="column__add-task"
        >Add new task</button>
      
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Task from "./Task.vue";
import AddTask from "./AddTask.vue";
import nestedDraggable from "vuedraggable";

export default {
  name: "Table",
  computed: mapState(["table"]),
  data: () => {
    return {
      show: false
    };
  },
  methods: {
    showModal: () => {
      alert("Inside of modal");
    }
  },
  components: {
    Task,
    AddTask,
    nestedDraggable
  }
};
</script>

<style>
.table {
  display: flex;
}
.column {
  margin: 2rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
}
.column__title {
  margin: 1rem 0;
}

.column__add-task {
  cursor: pointer;
}
</style>
