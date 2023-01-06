import { Component } from 'react';
import Logo from '../../img/logo.png';

import { FaAngleRight } from 'react-icons/fa';

export default class Header extends Component {
  render() {
    return (
      <header className="shadow-lg">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="logo">
            <img className="w-32" src={Logo} alt="" />
          </div>
          <div className="header-right flex flex-col">
            <div className="header-top w-14 bg-red-700 capitalize">
              <FaAngleRight /> About us
            </div>
            <div className="header-bottom">
              <nav>
                <ul>
                  <li>
                    <a href="#">home</a>
                  </li>
                  <li>
                    <a href="#">elements</a>
                  </li>
                  <li>
                    <a href="#">features</a>
                  </li>
                  <li>
                    <a href="#">pages</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                  <li>
                    <a href="#">portfolio</a>
                  </li>
                  <li>
                    <a href="#">buy photo!</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
