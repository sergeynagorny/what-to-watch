import React, {forwardRef} from "react";
import PropTypes from "prop-types";


const SignInForm = forwardRef((props, ref) => {
  const {onFormSubmit, onInputEmailChange, onInputPasswordChange} = props;

  return (
    <form action="#" className="sign-in__form"
      ref={ref}
      onSubmit={onFormSubmit}
    >
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"
            onChange={onInputEmailChange}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"
            onChange={onInputPasswordChange}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
});

SignInForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputEmailChange: PropTypes.func.isRequired,
  onInputPasswordChange: PropTypes.func.isRequired,
};

SignInForm.displayName = `SignInForm`;

export default SignInForm;
