import React, {Component} from 'react';
import Debit from './Debit';
import {Link} from 'react-router-dom';

class DebitsList extends Component {
    render(){
        return(
            <div>
                <div>
                    Test
                </div>
                <Debit debits={this.props.debits}/> 
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default DebitsList;