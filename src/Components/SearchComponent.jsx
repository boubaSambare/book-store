import React, { Component } from 'react';
import {Input} from 'reactstrap'

class SearchComponent extends Component {
    render() {
        let {onChange, placeholder, value} = this.props
        return (
            <div className="my-2">
                <Input type="search" onChange={onChange} placeholder={placeholder} value={value}></Input>
            </div>
        );
    }
}

export default SearchComponent;