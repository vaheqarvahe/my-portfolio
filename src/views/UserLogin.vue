<template>
  <HomeTop />
  <br />
  <div class="container">
    <h1 class="heading">Sign In</h1>
    <Form :validation-schema="schema" @submit="handleSubmit" class="form">
      <div class="form-group">
        <label for="phone" class="label">Phone:</label>
        <Field
          id="phone"
          name="phone"
          type="text"
          placeholder="Enter your phone number"
          class="input"
        />
        <ErrorMessage name="phone" class="error-message" />
      </div>

      <div class="form-group">
        <label for="password" class="label">Password:</label>
        <Field
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          class="input"
        />
        <ErrorMessage name="password" class="error-message" />
      </div>

      <div class="form-actions">
        <button type="submit" class="submit-button">Sign In</button>
        <label class="remember-me">
          <input type="checkbox" class="remember-checkbox" />
          Remember me
        </label>
      </div>
    </Form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Form, Field, ErrorMessage } from 'vee-validate'; 
import * as yup from 'yup'; 
import HomeTop from '@/components/HomeTop.vue';

export default {
  components: {
    HomeTop,
    Form,
    Field,
    ErrorMessage
  },
  computed: {
    schema() {
      return yup.object().shape({
        phone: yup.string()
          .required('Phone number is required')
          .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
        password: yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters long'),
      });
    }
  },
  methods: {
    ...mapActions(['user_login']),
    async handleSubmit(values) {
      try {
        await this.user_login(values);
        this.$router.push({name: "home"})
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style scoped>
/* Container Styling */
.container {
  max-width: 400px;
  margin: auto;
  margin-top: 200px;
  padding: 2rem;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 12px;
  box-shadow: 20px 20px 60px #c8c8c8, -20px -20px 60px #ffffff;
  animation: fadeIn 1s ease-in-out;
}

/* Heading Styling */
.heading {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: slideInFromTop 1s ease-in;
  color:#ff7b00
}

/* Input Field Styling */
.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;
  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
}

.input:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
  transform: scale(1.02);
  background-color: #f0f8ff;
}

.submit-button {
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #ff7700;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.submit-button:hover {
  background-color: #ffbf00;
  transform: scale(1.05);
}


.form-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50% ;
  margin-top: 1rem;

}

.remember-me {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
  padding: 5px;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.remember-me:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

.remember-checkbox {
  margin-right: 0.5rem;
  transform: scale(1.2);
  accent-color: #ff7b00;
}

/* Error Message */
.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
  animation: fadeInError 0.5s forwards;
}

/* Animations */
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
</style>
