import React, { Component } from 'react'
import Table from '../Table/Table';
import InputCheckbox from './InputCheckbox';
  
 class Checkbox extends Component {
    constructor(props)
    {
        super(props);
        this.state={checked: false }
        
    }
   /* checkbox()
    {
        <input type="checkbox"  onChange={()=>{this.handleCheckboxChange}} />
        <Table checkbox={this.checkbox} handleCheckboxChange={this.handleCheckboxChange}
          checked={this.state.checked}
          />
    }*/

    handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
    render() {
        
        return (
            <div>
                <label>
          <InputCheckbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
        </label>

            </div>
        )
    }
}

export default Checkbox