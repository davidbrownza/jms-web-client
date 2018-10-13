import React, {Component} from 'react';

import {Row} from 'reactstrap';

class ContentInner extends Component {
    render() {
        return (
            <div id="page-inner" className="page-inner">
                <Row>{this.props.children}</Row>
            </div>
        );
    }
}

export default ContentInner;