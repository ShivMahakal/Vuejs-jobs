<!-- option Api -->
<script>
export default {
  data(){
    return {
      name:"Shivam Kumar",
      status:"pending",
      tasks:["One,Two,Three,Four,Five"],
      link:"http://google.com/"
    }
   
  },
  methods:{
      toggleStatus(){
        if(this.status === "active"){
          this.status = "pending"
        }else if(this.status === "pending"){
           this.status = "inactive"
        }else {
           this.status = "active"
        }
      }
    }
}
</script>

<template>
 <h1 class="text-2xl"> {{name}}</h1>
 <p v-if="status === 'active'">User is active</p>
 <p v-else-if="status === 'pending'">User is pending</p>
 <p v-else>User is inactive</p>


  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a v-bind:href="link">Click to Google</a>
  <br/>
<button v-on:click="toggleStatus">Change Status</button>

</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>


<script>

// composition api
import { ref } from 'vue';

export default {
setup() {
const name = ref("Shivam Kumar")
const status = ref("active");
const tasks = ref(["One", "Two", "Three", "Four", "Five"]);

const toggleStatus = () => {
  if(status.value === "active"){
    status.value = "pending"
        }else if(status.value === "pending"){
          status.value = "inactive"
        }else {
          status.value = "active"
        }
}
return {
  name, status, tasks, toggleStatus
}
}
}
</script>

<template>
 <h1 class="text-2xl"> {{name}}</h1>
 <p v-if="status === 'active'">User is active</p>
 <p v-else-if="status === 'pending'">User is pending</p>
 <p v-else>User is inactive</p>


  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a v-bind:href="link">Click to Google</a>
  <br/>
<button @click="toggleStatus">Change Status</button>

</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>


<!-- composition api shorter form -->
<script setup>
import { ref } from 'vue';
const name = ref("Shivam Kumar")
const status = ref("active");
const tasks = ref(["One", "Two", "Three", "Four", "Five"]);

const toggleStatus = () => {
  if(status.value === "active"){
    status.value = "pending"
        }else if(status.value === "pending"){
          status.value = "inactive"
        }else {
          status.value = "active"
        }
}

</script>

<template>
 <h1 class="text-2xl"> {{name}}</h1>
 <p v-if="status === 'active'">User is active</p>
 <p v-else-if="status === 'pending'">User is pending</p>
 <p v-else>User is inactive</p>


  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a v-bind:href="link">Click to Google</a>
  <br/>
<button @click="toggleStatus">Change Status</button>



</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>



<script setup>
import { ref } from 'vue';
const newTask = ref("")
const tasks = ref([])

const addTask = () => {
if(newTask.value.trim !== ""){
  tasks.value.push(newTask.value)
  newTask.value =""
}

}

const removeTask = (task) => {
 tasks.value = tasks.value?.filter(t => t !== task)
//  todos.value = todos.value?.filter((t) => t !== todo)

}

</script>

<template>
  <form @submit.prevent="addTask">
    <label for="Task">
 </label>
 <input v-model="newTask" type="text" name="task" placeholder="Add new Task"/>
  <button type="submit" name="Add Task">Add Task</button>
  </form>
 <p v-for="task in tasks" :key="task">
  
  <span>{{ task }}</span>
  <button @click="removeTask(task)">X</button>
  </p>
</template>

<style scoped>

</style>
