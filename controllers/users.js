
import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUser = (req, res)=>{
  
    res.send(users);
};

export const createUser = (req, res)=>{
    const user = req.body;
    
    users.push( { ...user, id:  uuidv4()});
    res.send(`User with name ${user.firstname} added to the Database`);
};

export const selectUser = (req, res)=>{
    
    const { id } = req.params;

    const founduser = users.find((user)=> user.id == id); 
    res.send(founduser);
};

export const deleteUser = (req, res)=>{
    const { id } = req.params;
    users = users.filter((user)=> user.id != id);

    res.send(`User with Id ${id} deleted!!!`);
};

export const updateUser = (req, res)=>{
    const { id } = req.params;
    const {firstname, lastname, age} = req.body;

    const user = users.find(user => user.id == id);

    if(firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;

    res.send(`User with Id ${id} has been updated!!!!`);
    
};