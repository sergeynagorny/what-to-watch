import React, {PureComponent, createRef} from "react";


const withAddReviewForm = (Component) => {
  class WithAddReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this._formRef = createRef();

      this.state = {
        rating: `3`,
        review: ``,
      };

      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(evt) {
      const target = evt.target;
      const value = target.type === `checkbox` ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }


    render() {
      const formData = this.state;

      return (
        <Component
          {...this.props}
          ref={this._formRef}
          handleInputChange={this._handleInputChange}
          onFormSubmit={this._onFormSubmit}
          formData={formData}
        />
      );
    }
  }

  return WithAddReviewForm;
};

export default withAddReviewForm;


