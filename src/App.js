import { useEffect, useRef, useState } from 'react';
import './App.css';
// import data from './jsonData'
import Modal from './Components/ModalAdd/modalAdd';

const initialValues = {
  id: 0,
  name: '',
  email: '',
  phone: ''
}

function App() {
  console.log('render');
  const [values, setValues] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [isModal, setIsModal] = useState(false);
  console.log(values)
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value })
    console.log(values);
  }
  const handleModal = () => {
    setIsModal(true);
  }
  const handleCloseModal = ()=>{
    setIsModal(false);
  }
  const renderUsers = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td><span className='btn_edit'>Edit</span><span className='btn_del' onClick={(id)=>handleDeleteUser(user.id)}>Del</span></td>
    </tr>
  ))
  const handleAddUser = (e) => {
    e.preventDefault();
    let newsId = (users.length === 0 ? 0 : users[users.length - 1].id) + 1;
    let newValues = { ...values, id: newsId }
    setUsers([...users, newValues]);

    setValues({...values,name:'',email:'',phone:''})

  }
  const handleDeleteUser = (id)=>{
    let newUsers = users.filter(user => user.id !== id);
    setUsers([...newUsers]);
  }
  return (
    <div className="App">
      {isModal ? <div className='blur' onClick={handleCloseModal}></div> : null}

      <button id="add_user" onClick={handleModal}>New User</button>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {renderUsers}

        </tbody>
      </table>
      {isModal ? <Modal values={values} handleInputChange={handleInputChange} handleAddUser={handleAddUser} /> : null}
     

    </div>
  );
}

export default App;
