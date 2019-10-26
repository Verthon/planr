<template>
  <div :class=this.setClass($attrs.task.type) draggable="true">{{$attrs.task.description}}</div>
</template>

<script>
export default {
  name: "Task",
  methods: {
    setClass: (name) => 'task task--' + name
  }
};
</script>

<style>
.task {
  display: flex;
  background: #f2f2f2;
  cursor: pointer;
  margin: .25rem;
  padding: 0.5rem;
  max-width: 300px;
  text-align: left;
}
.task--default {
  background: #f2f2f2;
}
.task--bugfix {
  background: #990000;
  color: #ffffff;
}
.task--feature {
  background: #7fffd4;
}
</style>
