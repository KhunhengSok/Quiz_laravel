import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <button className="btn button-confirm m-2 no-wrap" onClick={(e) => {this.props.onClick(e)}}>{this.props.text}</button>
            </div>

        );
    }
}


export default Button;
