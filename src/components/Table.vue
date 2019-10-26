<template>
  <div class="table">
    <div class="column" v-for="(column, columnIndex) in table.columns" v-bind:key="columnIndex">
      <h2 class="column__title">{{column.name}}</h2>
      <Task v-for="(task, taskId) in column.tasks" v-bind:key="taskId" v-bind:task="task" v-bind:type="column.name"/>
      <button class="column__add-task">Add new task</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Task from './Task.vue'

export default {
  name: "Table",
  computed: mapState(['table']),
  components: {
    Task
  }
};
</script>

<style>
.table {
  display: flex;
}
.column {
  margin: 2rem;
  display: flex;
  flex-direction: column;
}
.column__title {
}

.column__add-task {
  cursor: pointer;
}
</style>
