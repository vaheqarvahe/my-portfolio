<template>
    <nav class="call-designer">
      <button @click="closeDesigner" class="close-button">×</button>
      <div class="info">
        <h1>Пригласить дизайнера</h1>
        <p>Замеры производятся БЕСПЛАТНО ежедневно с 9.00 до 21.00</p>
        <p>Дизайнер выслушает ваши пожелания, снимет все необходимые замеры и поможет определиться с материалами.</p>
      </div>
      <div class="form-container">
        <Form @submit="submitForm()" :validation-schema="schema" class="form">
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
            <label for="name" class="label">Name:</label>
            <Field
              id="name"
              name="name"
              placeholder="Enter your Name"
              class="input"
            />
            <ErrorMessage name="name" class="error-message" />
          </div>
          <div class="form-group">
            <label for="adres" class="label">Address:</label>
            <Field
              id="adres"
              name="adres"
              placeholder="Enter your Address"
              class="input"
            />
            <ErrorMessage name="adres" class="error-message" />
          </div>
          <div class="form-group">
            <label for="useful data" class="label">Useful Data:</label>
            <Field
              id="useful data"
              name="useful data"
              placeholder="Enter your Useful Data"
              class="input"
            />
            <ErrorMessage name="useful data" class="error-message" />
          </div>
          <button type="submit" class="submit-button">Submit</button>
        </Form>
      </div>
    </nav>
  </template>
  
  <script>
  import { Form, Field, ErrorMessage } from 'vee-validate'; 
  import * as yup from 'yup'; 
  
  export default {
    components: {
      Form,
      Field,
      ErrorMessage
    },
    computed: {
      schema() {
        return yup.object().shape({
          phone: yup.string().required('Phone number is required'),
          name: yup.string().required('Name is required'),
          adres: yup.string().required('Address is required'),
          'useful data': yup.string().required('Useful data is required'),
        });
      }
    },
    methods: {
      closeDesigner() {
        this.$emit('close');
      },
      submitForm() {
        // Handle form submission
      }
    }
  }
  </script>
  
  <style scoped>
  .call-designer {
    font-family: Arial, sans-serif;
    background-color: #ffffff; /* Adjusted for a cleaner look */
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    position: fixed; /* Positioned fixed to overlay the content */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centered */
    z-index: 1000000; /* Ensure it appears above other content */
    max-width: 500px;
    width: 100%;
    box-sizing: border-box; /* Include padding and border in element’s total width and height */
  }
  .close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s;
}
.close-button:hover {
  color: #e74c3c; /* Change color on hover */
}
  
  .info {
    margin-bottom: 20px;
  }
  
  .info h1 {
    font-size: 1.8em;
    margin-bottom: 15px;
    color: #333; /* Changed for better visibility */
  }
  
  .info p {
    font-size: 1em;
    margin-bottom: 15px;
    color: #555; /* Changed for a softer look */
  }
  
  .form-container {
    max-width: 100%;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .error-message {
    color: #e74c3c; /* Adjusted for better visibility */
    font-size: 14px;
    margin-top: 5px;
  }
  
  .submit-button {
    padding: 12px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  