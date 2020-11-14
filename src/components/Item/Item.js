import React, { Component } from 'react';
import './item.css';
import { FaTrash} from "react-icons/fa";
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
const completeStyle = {
    width: "70%",
}

const iconStyle = {
    cursor: "pointer",
    zIndex: 1,
}

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCompleted: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, checked} = event.target
        this.setState({
            [name]: checked
        })
    }

    render() {
        return (
            <div className="item-box" style={this.state.isCompleted? completeStyle: null}>
                <form>
                    <div className="text-area">
                        <input
                            type="text" 
                            value={this.props.item.text} 
                            style={this.state.isCompleted? completeStyle: null} onChange={(event)=> {
                                this.props.edit(event.target.value, this.props.item.id)
                            }}
                        />                  
                    </div>
                    <div className="status-area" style={this.state.isCompleted? {border: "none"}: null}>
                        <div className="delete-area" style={this.state.isCompleted? {display: "none"}: null}>
                            <FaTrash 
                            onClick={() => this.props.delete(this.props.item.id)} style={{cursor: "pointer"}}
                            />
                        </div>
                        <div className="complete-area">
                            {this.state.isCompleted? <ImCheckboxChecked  />: <ImCheckboxUnchecked style={iconStyle} />}
                            <input 
                                name="isCompleted" 
                                type="checkbox" 
                                checked={this.state.isCompleted} 
                                onChange={this.handleChange} 
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Item;
