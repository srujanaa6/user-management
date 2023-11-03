<template>
<div class="card" style="width: 18rem;">
 
  <h4 style="font-weight: 600px;">Login Form</h4>

  <div class="card-body form-group" >
  <q-form @submit.prevent="login">
    <label>
      Username
    </label>
         <q-input filled type="text" v-model="username" placeholder="Enter Username"/>
<br>
    <label>
      Password
    </label>
          <q-input filled type="password" v-model="password" placeholder="Enter password"/>
    <br>
    <div class="btn">
        <q-btn label="Submit" type="submit" color="primary" style="display: flex; margin: 5px auto;" @click="login"/>
     <!-- <button class="btn btn-primary" @click="login">submit</button> -->
    </div>
  </q-form>
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
      password: '',store
    }
  },computed:
  {
   
  },
  methods: {
    login() {

            
        store.users.forEach((user)=>
        {
          if(this.username===user.username)
          {
            if(user.username==='admin')
            {
              if(this.password===user.password){
                    alert('Welcome '+this.username+"!!")
                    this.$router.push( { path:"/admin-dashboard" } );
                  }
                  else{
                    alert('wrong password!!');
                    this.password='';
                  }
        
            }
            else
            {
              if(this.password===user.password)
              {
                alert('Welcome '+this.username+"!!")
          this.$router.push({name:"userDashboard"});
              }else{
                alert('wrong password!!');
                    this.password='';
              }
            }
            return true;
            
          }
        
        else{
     
          return false;
         
        }
        })
    }
  }
}
</script>

<style>
h4{
  text-align: center;
  font-weight: bold;
}
.card
{
 
  margin: auto;
  padding: 40px;
  width: 70%;
  text-align: start;
}
label{

  padding: 5px;
}
input{
  
  padding: 5px;
  margin-bottom: 15px;
}

</style>