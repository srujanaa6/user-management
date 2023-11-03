import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    newuser:{    
      username:'',
    fullname:'',
    password:'1234',
      email:'',
    phone:'',
    designation:'',
    userId:''},

    users: [
      {
        username: 'admin',
        password:'123',
        fullname: 'Admin User',
        email: 'admin@gmail.com',
        phone: '9834567890',
        designation: 'admin'
      },
      {
        username: 'user1',
        password:'user1pw',
        fullname: 'srujana prabhu',
        email: 'sprabhu@gmail.com',
        phone: '9876543210',
        designation: 'user',
        userId: 'U001'
      },
      {
        username: 'user2',
        password:'123',
        fullName: 'ram parab',
        email: 'rp@gmail.com',
        phone: '9876543210',
        designation: 'user',
        userId: 'U002'
      }
    ]
  }),  actions: {
   
    setuser(user)
    {
     this.newuser.username=user.username;
     this.newuser.fullname=user.fullname;
     this.newuser.email= user.email;

     this.newuser.phone= user.phoneNumber;
     this.newuser.designation= user.designation;
     this.newuser.userId=user.userId;
     this.users.push(user); 
    }
   
  
    
  
},

});
