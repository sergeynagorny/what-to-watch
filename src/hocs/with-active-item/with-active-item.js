import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.itemClickHandler = this.itemClickHandler.bind(this);

      this.state = {
        activeItem: this.props.activeItem,
      };
    }

    itemClickHandler(currentItem) {
      this.setState({activeItem: currentItem});
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          itemClickHandler={this.itemClickHandler}
        >
        </Component>
      );
    }
  }

  WithActiveItem.defaultProps = {
    activeItem: -1,
  };

  WithActiveItem.propTypes = {
    activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  return WithActiveItem;
};

export default withActiveItem;
