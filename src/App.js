import { useEffect, useRef, useState } from 'react';
import './App.css';
// import data from './jsonData'
import ModalAdd from './Components/ModalAdd/modalAdd';
import ModalEdit from './Components/ModalEdit/modalEdit';

const initialValues = {
  id: 0,
  name: '',
  email: '',
  phone: ''
}

function App() {
  const [values, setValues] = useState(initialValues);
  const [users, setUsers] = useState([]);
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [idCurrent, setIdCurrent] = useState();
  const [userCurrent,setUserCurrent] = useState();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value })
    console.log(values);
  }
  const handleModalAdd = () => {
    setIsModalAdd(true);
    console.log("ModalAdd")

  }
  const handleModalEdit = () => {
    setIsModalEdit(true);
    console.log("ModalAdd")

  }
  const handleCloseModalAdd = () => {
    setIsModalAdd(false);
  }

  const handleAddUser = (e) => {
    e.preventDefault();
    let newsId = (users.length === 0 ? 0 : users[users.length - 1].id) + 1;
    let newValues = { ...values, id: newsId }
    setUsers([...users, newValues]);

    setValues({ ...values, name: '', email: '', phone: '' })

  }
  const onClickBtnEditUser = (id) => {
    handleModalEdit();
    setIdCurrent(id);
    getUserCurrent(id);
  }
  const handleEditUser =(e)=>{
    e.preventDefault();

    let index = users.findIndex(user => user.id === idCurrent);
    let newUsers = users;
    newUsers[index] = {...values};
    // let newUser = users[index];
    // newUser = [...values]
    console.log(values);
    console.log("newUsers");
    console.log(newUsers);
    setUsers([...newUsers]);
  }
  const handleDeleteUser = (id) => {
    let newUsers = users.filter(user => user.id !== id);
    setUsers([...newUsers]);
  }

  const getUserCurrent = (id)=>{
    let index = users.findIndex(user => user.id === id);
    setUserCurrent(users[index])
  }
  const renderUsers = users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td><span className='btn_edit' onClick={() => onClickBtnEditUser(user.id)}>Edit</span><span className='btn_del' onClick={(id) => handleDeleteUser(user.id)}>Del</span></td>
    </tr>
  ))
  return (
    <div className="App">
      {(isModalAdd || isModalEdit) ? <div className='blur' onClick={handleCloseModalAdd}></div> : null}
      {console.log("render")}
      <button id="add_user" onClick={handleModalAdd}>New User</button>
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
      {isModalAdd ? <ModalAdd values={values} handleInputChange={handleInputChange} handleAddUser={handleAddUser} /> : null}
      {isModalEdit ? <ModalEdit values={values} user={userCurrent}  handleInputChange={handleInputChange} handleEditUser={handleEditUser}/>: null}

    </div>
  );
}

export default App;
