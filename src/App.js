import React from 'react';
import './App.css';
import ItemList from './components/ItemList/ItemList';

// App Component
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      itemList: [],
      currentItem: {
        text: '',
        id: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.editItem = this.editItem.bind(this)
  }

  handleChange(event) {
    this.setState({
      currentItem: {
        text: event.target.value,
        id: Date.now()
      }
    })
  }

  handleSubmit(event) {

    event.preventDefault()
    let newItem = this.state.currentItem
    let newList = [...this.state.itemList, newItem]
    let currentList = this.state.itemList
    
    if(newItem.text !== '' ) {
      if(!currentList.includes(newItem)) {
        this.setState({
          itemList: newList
        })
      } else {
        alert("Task is already on list")
      }
    } else {
      alert("Please enter a new task")
    }
  }
  editItem(text, key) {

      const items = this.state.itemList
      items.map((item) => {
        if(item.id === key) {
          item.text = text
        }
        return items
      })
      this.setState(()=> {
        return {
          itemList: items
        }
      })

  }

  deleteItem(key) {

    const prevList = this.state.itemList
    const updatedList = prevList.filter(item => item.id !== key )
    this.setState({
      itemList: updatedList
    })

  }

  render() {

    return (
      <>
        <section className="form-area">
          <form onSubmit={this.handleSubmit}>
            <div className="input-area">
              <input 
                type="text" 
                placeholder="Add task...."
                name="text"
                value={this.state.currentItem.text}
                onChange={this.handleChange}
              />
              <button type="submit">Add</button>
            </div>
          </form>
          <div className="list-area">
            <ItemList
              items={this.state.itemList}
              delete={this.deleteItem} 
              edit={this.editItem}
            />
        </div>
        </section>
      </>
    )
  }
}

export default App;
