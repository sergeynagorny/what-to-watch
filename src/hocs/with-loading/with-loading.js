import React, {PureComponent} from 'react';
import PropTypes from "prop-types";


const withLoading = (Component) => {
  class WithLoading extends PureComponent {
    constructor(props) {
      super(props);

    }

    componentDidMount() {
      this.props.dispatch();
    }


    componentDidUpdate() {

    }

    render() {
      const {isLoading} = this.props;

      if (isLoading !== null) {
        return (
          <Component
            {...this.props}
          />
        );
      } else {
        return ``;
      }
    }
  }

  WithLoading.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isLoading: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.array,
      PropTypes.object,
    ]),
  };

  return WithLoading;
};

export default withLoading;
