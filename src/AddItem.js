import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItems = ({ newItem, setNewItem, handleNewItem}) => {

  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleNewItem}>


        <label htmlFor="Add Item">Add Item</label>
        <input 
            autoFocus
            ref= {inputRef}
            type="text" 
            placeholder="Add Item"
            required
            id = 'addItem'
            value = {newItem}
            onChange = {(e) => setNewItem(e.target.value)}
        />
        <button
            type="submit"
            aria-label= 'Add Items'
            onClick= {() => inputRef.current.focus()}>
                <FaPlus />
        </button>
    </form>
  )
}

export default AddItems