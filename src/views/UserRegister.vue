<template>
    <HomeTop/>
  <br>
    <div class="registration-form">
      <Form @submit="getInfo" :validation-schema="schema" class="form">
        <h2 class="form-title">Create an Account</h2>
        <div class="form-group">
          <label for="phone_number" class="label">Phone Number</label>
          <Field name="phone_number" id="phone_number" placeholder="Enter your phone number" class="input-field" />
          <ErrorMessage name="phone_number" class="error-message" />
        </div>

        <div class="form-group">
          <label for="city" class="label">City</label>
          <Field name="city" id="city" placeholder="Enter your city" class="input-field" />
          <ErrorMessage name="city" class="error-message" />
        </div>

        <div class="form-group">
          <label for="password" class="label">Password</label>
          <Field name="password" id="password" placeholder="Enter your password" type="password" class="input-field" />
          <ErrorMessage name="password" class="error-message" />
        </div>
<div class="buttons">
  <button type="submit" class="btn-submit">Register</button>
  <router-link class="btn-submit" to="/login" > have account </router-link>
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
.registration-form {
  max-width: 400px; 
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff; 
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 100px;

}

.form-title {
  font-size: 1.8em;
  text-align: center;
  margin-bottom: 20px;
}

.label {
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

.error-message {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}

.btn-submit {
  background-color: #007bff; 
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
  text-decoration: none;
}

.btn-submit:hover {
  background-color: #0056b3; 
}

.buttons{
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  max-width: 400px;
}

</style>
