import React, {Component} from 'react';
import DebitsList from './DebitsList';
class AccountBalance extends Component {
  render() {
    return (
        <div>
          {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;