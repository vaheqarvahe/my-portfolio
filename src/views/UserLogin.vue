<template>

    <HomeTop/>

  <br>
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
        <button type="submit" class="submit-button">Sign In</button>
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
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Container styles */
  .container {
    max-width: 400px; /* Limit the width of the form container */
    margin: 0 auto; /* Center align the form */
    padding: 20px;
    background-color: #ffffff; /* White background for the form */
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Shadow for depth */
    margin-top: 100px;
  }
  
  /* Heading styles */
  .heading {
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
  }
  
  /* Form styles */
  .form {
    display: flex;
    flex-direction: column;
  }
  
  /* Form group styles */
  .form-group {
    margin-bottom: 1rem;
  }
  
  /* Label styles */
  .label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #555;
  }
  
  /* Input styles */
  .input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  /* Error message styles */
  .error-message {
    color: #d9534f;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
  
  /* Button styles */
  .submit-button {
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  
  