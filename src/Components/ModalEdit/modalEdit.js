import { render } from "@testing-library/react";
import './modalEdit.css'

function ModalEdit({ user,values, handleInputChange, handleEditUser }) {
  return (<form className='container_edit' onSubmit={handleEditUser}>
    <div className='title_edit'>Edit User</div>
    <div className='wrap_edit_input'>
      <label className='label_edit'>Name</label>
      <input type="text" value={values?.name || user?.name}  onChange={handleInputChange} name="name" className='edit_input' required />

    </div>
    <div className='wrap_edit_input'>
      <label className='label_edit'>Email</label>
      <input type="text" value={values?.email || user?.email} onChange={handleInputChange} name="email" className='edit_input' />
    </div>
    <div className='wrap_edit_input'>
      <label className='label_edit'>SĐT</label>
      <input type="text" value={values?.phone || user?.phone}  onChange={handleInputChange} name="phone" className='edit_input' />
    </div>
    <button type='submit' className='submit_edit' >Submit</button>
  </form>)
}
export default ModalEdit;