<template>
    <div>
       
        <div class="card" style="width: 18rem;">
   <h4 class="head">Admin</h4>
  <div class="q-pa-sm" style="max-width: 400px" >
    <q-form action="" class="q-gutter-md">
            <label>
      Username:
      <q-input outlined type="text" v-model="username"  placeholder="Enter Username"/>
    </label> 
     <label>
      Full name:
      <q-input outlined type="text" v-model="fullname"  placeholder="Enter Full name"/>
    </label>
     <label>
      Email Id
      <q-input outlined type="text" v-model="email"  placeholder="Enter Email Id"/>
    </label>
    <label>
      Phone No :
      <q-input outlined type="text" v-model="phone"  placeholder="Enter Phone no"/></label>
    <label>Designation : </label>
        <select v-model="designation" name="designation" >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
     <div v-if="designation === 'user'">
        <label>User ID : </label>
        <q-input outlined type="text" v-model="userId" placeholder="Enter User Id" />
      </div>
      <br>
      <br>
<div class="btn">
      <q-btn type="submit" color="primary" @click="createUser()" style="margin: 5px auto;">Create user</q-btn>
    </div>
        </q-form>
  </div>
</div>
        
    </div>
 
</template>

<script>
import {useCounterStore} from 'src/stores/example-store';
const store=useCounterStore();

export default {
  data() {
    return {
 
      username: '',
      fullname: '',
      email:'',
      phone:'',
      designation:'',
      userId:'',

      store
    }
  }, methods: {
    createUser() {

      var user = {}
        user.username= this.username,
        user.fullname= this.fullname,
        user.email=this.email,
        user.phone= this.phone,
        user.designation=this.designation,
        user.userId=this.designation === 'user' ? this.userId : null

        this.store.setuser(user)
        console.log(this.store.users)
        this.$router.push({path:"/user-dashboard"});
      }
      
     
    }
  }


</script>

<style>
h3{
  text-align: center;
  font-weight: bold;
}
.card
{
 margin: 20px auto;

  padding: 20px 15px 10px 30px  ;

  text-align: start;
}
label{

  padding: 5px;
}

.input
{
    margin: 20px ; width: 50%;
}

.btn{
  display: flex;
  margin:10px auto;
}

option{
    padding: 6px;
}
.head
{
  text-align: center;
}
</style>