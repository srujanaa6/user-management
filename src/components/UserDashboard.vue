<template>
  <div>
    <h3 class="head">users</h3>
    <q-card flat class="my-card">
       
         <div v-for="user in this.store.users"  class="cards">
          <div v-if="user.username!='admin'">
               <div class="cardcomponent">
               <q-card  bordered class="bg-white-9 my-card">
                 <q-card-section>
                 <div >{{ user.username }}</div>
                 <div >{{ user.fullname }}</div>
                 <div >{{ user.email }}</div>
                 <div >{{ user.phone }}</div>
                 <div>{{ user.userId }}</div>
               </q-card-section>
               </q-card>
               </div>
              </div>
             </div>
 
 
     </q-card>


  </div>
  
</template>

<script>
import {useCounterStore} from 'src/stores/example-store';
const store=useCounterStore();

export default {
  data() {
    return {
    store
    }
  },

}
</script>

<style>


.cardcomponent
{
    font-size: medium;
    padding: 15px;
    margin: 5px auto;
    width: 70%;
}
.input
{
    margin: 20px ; width: 50%;
}

.addinput
{
    display: flex;
    margin: 30px;
}

.btn
{
    margin: 30px;
    
}

.cards
{
    margin:10px 30px;
}

.head{
  text-align: center;
}
</style>