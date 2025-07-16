<template>
  <HomeTop />
  <br/>
  <div class="form-container">
    <Form @submit="getInfo" :validation-schema="schema" class="registration-form">
      <h2 class="form-heading">Create an Account</h2>

      <div class="form-field-group">
        <label for="phone_number" class="form-label">Phone Number</label>
        <Field name="phone_number" id="phone_number" placeholder="Enter your phone number" class="form-input" />
        <ErrorMessage name="phone_number" class="form-error-message" />
      </div>

      <div class="form-field-group">
        <label for="city" class="form-label">City</label>
        <Field name="city" id="city" placeholder="Enter your city" class="form-input" />
        <ErrorMessage name="city" class="form-error-message" />
      </div>

      <div class="form-field-group">
        <label for="password" class="form-label">Password</label>
        <Field name="password" id="password" placeholder="Enter your password" type="password" class="form-input" />
        <ErrorMessage name="password" class="form-error-message" />
      </div>

      <div class="form-actions">
        <button type="submit" class="form-button form-button--primary">Register</button>
        <router-link class="form-button form-button--secondary" to="/login">Have an account?</router-link>
      </div>
    </Form>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
import { Form, Field, ErrorMessage } from 'vee-validate'; 
import * as Yup from 'yup';
import HomeTop from '@/components/HomeTop.vue';
import router from '@/router';

export default {
  components: {
    HomeTop,
    Form,
    Field,
    ErrorMessage
  },

  methods: {
    ...mapActions(['user_register']),
    getInfo(formData) {
      console.log(formData);
      this.user_register(formData);
    },
    to_login_page(){
      router.push("/login")
    }
  },

  computed: {
    schema() {
      return Yup.object().shape({
        phone_number: Yup.string()
          .required('Phone number is required')
          .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),

        city: Yup.string()
          .required('City is required')
          .min(2, 'City name must be at least 2 characters long'),

        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters long')
      });
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  margin-top: 200px;
  padding: 2rem;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 12px;
  box-shadow: 20px 20px 60px #c8c8c8, -20px -20px 60px #ffffff;
  position: relative;
  overflow: hidden;
  animation: fadeIn 1s ease-in-out;
}

.form-container::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), transparent);
  transform: rotate(45deg);
  animation: shine 8s infinite linear;
}

/* Heading Animation */
.form-heading {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: slideInFromTop 1s ease-in;
}

/* Input Field Styling and Focus Effect */
.form-input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
  transform: scale(1.02);
  background-color: #f0f8ff; /* Light background on focus */
}

/* Submit Button Styling and Ripple Effect */
.form-button {
  width: 100%;
  padding: 10px;
  margin-top: 1rem;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

/* Primary and Secondary Button Styles */
.form-button--primary {
  background-color: #007bff;
}

.form-button--primary:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.form-button--secondary {
  background-color: #6c757d;
  text-align: center;
  text-decoration: none;
  color: #fff;
  display: inline-block;
}

.form-button--secondary:hover {
  background-color: #5a6268;
  transform: scale(1.05);
}

/* Ripple Effect for Primary Button */
.form-button--primary::after {
  content: '';
  position: absolute;
  width: 300%;
  height: 300%;
  top: 50%;
  left: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s ease-out;
}

.form-button--primary:active::after {
  transform: translate(-50%, -50%) scale(1);
}

/* Error Message Animation */
.form-error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
  opacity: 0;
  animation: fadeInError 0.5s forwards;
}

/* Shake Animation on Invalid Submission */
.registration-form.invalid {
  animation: shake 0.3s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

/* Keyframe Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInFromTop {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeInError {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes shine {
  0% { transform: rotate(45deg) translateX(-50%) translateY(-50%); }
  100% { transform: rotate(405deg) translateX(-50%) translateY(-50%); }
}
</style>
