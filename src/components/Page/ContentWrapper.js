import React, {Component} from 'react';

import ContentInner from './ContentInner';

class ContentWrapper extends Component {
    render() {
        return (
            <div id="page-wrapper" className="page-wrapper">
                <ContentInner>{this.props.children}</ContentInner>
            </div>
        );
    }
}

export default ContentWrapper;