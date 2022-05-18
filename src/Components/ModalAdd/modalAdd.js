import { render } from "@testing-library/react";
import './modalAdd.css'

function Modal({ values, handleInputChange, handleAddUser }) {
  return (<form className='container_edit' onSubmit={handleAddUser }>
    <div className='title_edit'>Add User</div>
    <div className='wrap_edit_input'>
      <label className='label_edit'>Name</label>
      <input type="text" value={values.name} onChange={handleInputChange} name="name" className='edit_input' required />
      
    </div>
    <div className='wrap_edit_input'>
      <label className='label_edit'>Email</label>
      <input type="text" value={values.email} onChange={handleInputChange} name="email" className='edit_input' />
    </div>
    <div className='wrap_edit_input'>
      <label className='label_edit'>SĐT</label>
      <input type="text" value={values.phone} onChange={handleInputChange} name="phone" className='edit_input' />
    </div>
    <button type='submit' className='submit_edit' >Submit</button>
  </form>)
}
export default Modal;