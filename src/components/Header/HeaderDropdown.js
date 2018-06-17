import React, {Component} from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown
} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import { impersonateUserAction, logout } from '../../actions/AppActions';
import { toastAlerts } from '../../views/Shared/toast_alert';

const md5 = require('js-md5');


class HeaderDropdown extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.profileLink = this.profileLink.bind(this);

        this.state = {
            dropdownOpen: false,
            activeUserInfo: this.props.userInfo
        };
    }

  profileLink() {
      window.location = '#/profile';
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropAccnt() {

      var gravatar_url = "https://www.gravatar.com/avatar/";
      gravatar_url += md5(this.state.activeUserInfo.email);
      gravatar_url += "?s=240";

    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={gravatar_url} className="img-avatar" alt=""/>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>{this.state.activeUserInfo.username}</strong></DropdownItem>
          <DropdownItem onClick={this.profileLink}><i className="fa fa-user-o text-primary"></i>حساب کاربری</DropdownItem>
          {this.state.activeUserInfo.impersonated ?
            <DropdownItem onClick={() => this.props.dispatch(impersonateUserAction(0, 0, toastAlerts))}>
              <i className="fa fa-power-off text-danger"></i>{'خروج از حالت شخص سوم'}
            </DropdownItem> : ''}
          <DropdownItem onClick={() => this.props.dispatch(logout())}><i className="fa fa-power-off text-danger"></i>خروج</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const {...attributes} = this.props;
    return (
      this.dropAccnt()
    );
  }
}


function mapStateToProps(state) {
    return {
        userInfo: state.userReducer,
    };
}

export default connect(mapStateToProps)(HeaderDropdown);
