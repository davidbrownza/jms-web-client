import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class PageHeading extends Component {
    render() {
        return (     
            <div>
                <h2>
                    <FontAwesomeIcon icon={this.props.icon}/> {this.props.text}
                </h2>
                <hr/>
            </div>           
        );
      }
}

export default PageHeading;