import React, {PureComponent} from 'react';


const withShowMoreButton = (Component) => {
  class WithShowMoreButton extends PureComponent {
    render() {
      return (
        <Component
          {...this.props}
          renderShowMoreButton={(callback) => {
            return (
              <div className="catalog__more">
                <button className="catalog__button" type="button"
                  onClick={() => {
                    callback();
                  }}
                >
                Show more
                </button>
              </div>
            );
          }}
        />
      );
    }

  }

  return WithShowMoreButton;
};

export default withShowMoreButton;
