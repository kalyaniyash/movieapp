import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => (
  <div className="simple-auth-page">
    <div className="auth-container">
      <div className="auth-card card-animate register-section">
        <div className="form-content">
          <div className="form-section register-form">
            <h2>Create Account</h2>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterPage;