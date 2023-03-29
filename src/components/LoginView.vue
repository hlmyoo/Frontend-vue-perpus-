<template> 
<div class="limiter">
		<div class="container-login100" style="background-image: url('images/bg-01.jpg')">
			<div class="wrap-login100 p-t-30 p-b-50">
				<span class="login100-form-title p-b-41">
					Account Login
				</span>
				<form @submit.prevent="login" class="login100-form validate-form p-b-33 p-t-5">

					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input v-model="email" class="input100" type="text" name="username" placeholder="User name">
						<span class="focus-input100" ></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input v-model="password" class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100" ></span>
					</div>

					<div class="container-login100-form-btn m-t-32">
						<input type="submit" class="login100-form-btn">
					</div>

				</form>
			</div>
		</div>
	</div>
	
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import swal from 'sweetalert'
Vue.use(axios)
export default {
    data() {
        return {
            account: {},
            email: '',
            password: ''
        }
    },
    created() {
        if (this.$store.state.token !== '') {
            this.axios.post('http://localhost:8000/api/checkToken', { header: { 'Authorization': 'bearer' + this.$store.state.token } })
                .then(
                    (response) => {
                        console.log(response)
                        this.$router.push('/')
                    })
                .catch(
                    (err) => {
                        console.log(err)
                        this.$store.commit('clearToken')
                    }
                )
        }
    },
    methods: {
        login() {
            var data = {
                email: this.email,
                password: this.password
            }
            axios.post('http://localhost:8000/api/login', data)
                .then(
                    (response) => {
                            // localStorage.setItem('token', response.data.token)
                            // localStorage.setItem('status', true)
                            // this.$emit('authenticated', true)
                            this.$store.commit('setToken',response.data.token)
                            location.href = '/'
                        
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                        swal('Email atau password salah', {
                            icon: 'error'
                        })
                    }
                )
        }
    },
    mounted() {
        this.$emit('aunthenticated', false)
    }
}
</script>