import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const TIMEOUT_DELAY = 1000;

const withHover = (Component) => {
  class WithHover extends PureComponent {
    constructor(props) {
      super(props);

      this.itemMouseEnterHandler = this.itemMouseEnterHandler.bind(this);
      this.itemMouseLeaveHandler = this.itemMouseLeaveHandler.bind(this);

      this.state = {
        timeout: null,
      };
    }

    itemMouseLeaveHandler() {
      clearTimeout(this.timeout);
      this.props.itemClickHandler(-1);
    }

    itemMouseEnterHandler(currentItem) {
      this.timeout = setTimeout(() => {
        this.props.itemClickHandler(currentItem);
      }, TIMEOUT_DELAY);
    }

    render() {
      return (
        <Component
          {...this.props}
          onCatalogCardMouseEnter={this.itemMouseEnterHandler}
          onCatalogCardMouseLeave={this.itemMouseLeaveHandler}
        >
        </Component>
      );
    }
  }

  WithHover.propTypes = {
    itemClickHandler: PropTypes.func.isRequired,
  };

  return WithHover;
};

export default withHover;
