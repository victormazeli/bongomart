<template>
    <div>
        <!-- Start Breadcrumbs -->
    <div class="breadcrumbs">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="breadcrumbs-content">
                        <h1 class="page-title">Registration</h1>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-nav">
                        <li><a href="index.html">Home</a></li>
                        <li>Registration</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Breadcrumbs -->

    <!-- start Registration section -->
    <section class="login registration section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                    <div class="form-head">
                        <h4 class="title">Registration</h4>
                        <form action="#" @submit.prevent="submit">
                            <div class="socila-login">
                                <ul>
                                    <li><a @click="facebookSignUp" class="facebook"><i class="lni lni-facebook-original"></i>Facebook</a></li>
                                    <li><a @click="googleSignUp" class="google"><i class="lni lni-google"></i>Google Plus</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="alt-option">
                                <span>Or</span>
                            </div>
                            <!-- <div class="form-group">
                                <label>Name</label>
                                <input name="password" type="text" required v-model="form.name">
                            </div> -->
                            <div class="form-group">
                                <label>Email</label>
                                <input name="email" type="email" required v-model="form.email">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input name="password" type="password" required v-model="form.password">
                            </div>
                            <!-- <div class="form-group">
                                <label>Confirm Password</label>
                                <input name="password" type="password">
                            </div> -->
                            <div class="check-and-pass">
                                <div class="row align-items-center">
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input width-auto"
                                                id="exampleCheck1">
                                            <label class="form-check-label">Agree to our <a href="javascript:void(0)">Terms and
                                                    Conditions</a></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button">
                                <button type="submit" class="btn">Registration</button>
                            </div>
                            <p class="outer-link">Already have an account? <router-link to="/login">Login Now</router-link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Registration section -->

    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"

export default {
    name: "Register",
    data() {
        return {
           form: {
               name: "",
               email: "",
               password: ""
           }
            
        }
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        ...mapActions(['facebookSignUp', 'googleSignUp', 'register']),

        submit(){
            let email = this.form.email;
            let password = this.form.password

            this.register({email, password});

        }
       
    },
}
</script>