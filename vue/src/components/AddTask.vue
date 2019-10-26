
<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" @load="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Add new task</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-textarea label="Task description*" required v-model="description" @change="handleInput"></v-textarea>
            <v-autocomplete
              :items="['feature', 'bugfix', 'default']"
              label="Task type*"
              v-model="type"
              @change="handleInput"
            ></v-autocomplete>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="sendData">Add new task</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
//import uuid from 'uuid/v4'
/*eslint no-console: ["error", { allow: ["warn", "log"] }] */
export default {
  props: {
    show: Boolean
  },
  watch: {
    
  },
  data: () => {
    return {
      dialog: false
    };
  },
  methods: {
    sendData: (e) => {
      console.log(e)
    },
    handleInput: (e) => {
      console.log(e)
      this.$set(this.description, e)
    }
  },
  name: "AddTask"
};
</script>
