import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import SignInForm from "../../components/sign-in-form/sign-in-form";


const withSignInForm = (Component) => {
  class WithSignInForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        emailValue: ``,
        passwordValue: ``,
      };

      this._formRef = createRef();

      this._onFormSubmit = this._onFormSubmit.bind(this);
      this._onInputEmailChange = this._onInputEmailChange.bind(this);
      this._onInputPasswordChange = this._onInputPasswordChange.bind(this);
    }

    componentDidMount() {
      this._formRef.current[0].focus();
    }

    _onFormSubmit(evt) {
      const {onSubmit} = this.props;
      const {emailValue, passwordValue} = this.state;
      const {history} = this.props;

      evt.preventDefault();

      onSubmit({
        login: emailValue,
        password: passwordValue,
      }, history.goBack);
    }

    _onInputEmailChange(evt) {
      this.setState({
        emailValue: evt.target.value
      });
    }

    _onInputPasswordChange(evt) {
      this.setState({
        passwordValue: evt.target.value,
      });
    }

    render() {

      return (
        <Component
          {...this.props}
        >
          <SignInForm
            onFormSubmit={this._onFormSubmit}
            onInputEmailChange={this._onInputEmailChange}
            onInputPasswordChange={this._onInputPasswordChange}
            ref={this._formRef}
          />
        </Component>
      );
    }
  }

  WithSignInForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  };

  return WithSignInForm;
};

export default withSignInForm;
