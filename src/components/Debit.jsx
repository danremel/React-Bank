import React, {Component} from 'react';

class Debit extends Component {
    render(){
        return(
            <div>
                {this.props.credits}
                {this.props.debits}
            </div>
        );
    }
}


export default Debit;