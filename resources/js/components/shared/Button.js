import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <button className="btn button-confirm m-2" onClick={() => {this.props.onClick()}}>{this.props.text}</button>
            </div>

        );
    }
}


export default Button;
