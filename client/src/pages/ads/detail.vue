<template>
    <div>
         <!-- Start Breadcrumbs -->
    <div class="breadcrumbs">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="breadcrumbs-content">
                        <h1 class="page-title">Ad Details</h1>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-nav">
                        <li><a href="index.html">Home</a></li>
                        <li>Ad Details</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Breadcrumbs -->

    <!-- Start Item Details -->
    <section class="item-details section">
        <div class="container">
            <div class="top-area">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-12">
                        <div class="product-images">
                            <main id="gallery">
                                <div class="main-img" v-if="getAdDetail.images">
                                    <img :src="getAdDetail.images[0]" id="current" alt="#">
                                </div>
                                <div class="images">
                                    <img src="https://via.placeholder.com/1200x900" class="img" alt="#">
                                    <img src="https://via.placeholder.com/1200x900" class="img" alt="#">
                                    <img src="https://via.placeholder.com/1200x900" class="img" alt="#">
                                    <img src="https://via.placeholder.com/1200x900" class="img" alt="#">
                                    <img src="https://via.placeholder.com/1200x900" class="img" alt="#">
                                </div>
                            </main>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                        <div class="product-info">
                            <h2 class="title">{{getAdDetail.title}}</h2>
                            <div v-if="getAdDetail.lga && getAdDetail.state">
                                <p class="location" ><i class="lni lni-map-marker"></i><a href="javascript:void(0)">{{getAdDetail.lga.lga}}, {{getAdDetail.state.name}}</a></p>
                            </div>
                            <h3 class="price">{{getAdDetail.price | currency }}</h3>
                            <!-- <div class="list-info">
                                <h4>Informations</h4>
                                <ul>
                                    <li><span>Condition:</span> {{getAdDetail.condition}}</li>
                                    <li><span>Brand:</span> Apple</li>
                                    <li><span>Model:</span> Mackbook Pro</li>
                                </ul>
                            </div> -->
                            <div class="contact-info">
                                <ul>
                                    <li>
                                        <a href="tel:+002562352589" class="call">
                                            <i class="lni lni-phone-set"></i>
                                            +00 256 235 2589
                                            <span>Call & Get more info</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a :href="mailAddress" class="mail">
                                            <i class="lni lni-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- <div class="social-share">
                                <h4>Share Ad</h4>
                                <ul>
                                    <li><a href="javascript:void(0)" class="facebook"><i class="lni lni-facebook-filled"></i></a></li>
                                    <li><a href="javascript:void(0)" class="twitter"><i class="lni lni-twitter-original"></i></a></li>
                                    <li><a href="javascript:void(0)" class="google"><i class="lni lni-google"></i></a></li>
                                    <li><a href="javascript:void(0)" class="linkedin"><i class="lni lni-linkedin-original"></i></a></li>
                                    <li><a href="javascript:void(0)" class="pinterest"><i class="lni lni-pinterest"></i></a></li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-details-blocks">
                <div class="row">
                    <div class="col-lg-8 col-md-7 col-12">
                        <!-- Start Single Block -->
                        <div class="single-block description">
                            <h3>Description</h3>
                            <p>
                                {{getAdDetail.description}}
                            </p>
                            <!-- <ul>
                                <li>Model: Apple MacBook Pro 13.3-Inch MYDA2</li>
                                <li>Apple M1 chip with 8-core CPU and 8-core GPU</li>
                                <li>8GB RAM</li>
                                <li>256GB SSD</li>
                                <li>13.3-inch 2560x1600 LED-backlit Retina Display</li>
                            </ul>
                            <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                                non-characteristic words etc.</p> -->
                        </div>
                        <!-- End Single Block -->
                        <!-- Start Single Block -->
                        <div class="single-block tags" v-if="getAdDetail.tags">
                            <h3>Tags</h3>
                            <ul>
                                <li v-for="tag in getAdDetail.tags" :key="tag"><a href="javascript:void(0)">{{tag}}</a></li>
                                <!-- <li><a href="javascript:void(0)">Services</a></li>
                                <li><a href="javascript:void(0)">Brand</a></li>
                                <li><a href="javascript:void(0)">Popular</a></li> -->
                            </ul>
                        </div>
                        <!-- End Single Block -->
                        <!-- Start Single Block -->
                        <div class="single-block comments">
                            <h3>Comments</h3>
                            <!-- Start Single Comment -->
                            <div class="single-comment">
                                <img src="https://via.placeholder.com/300x300" alt="#">
                                <div class="content">
                                    <h4>Luis Havens</h4>
                                    <span>25 Feb, 2023</span>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable.
                                    </p>
                                    <a href="javascript:void(0)" class="reply"><i class="lni lni-reply"></i> Reply</a>
                                </div>
                            </div>
                            <!-- End Single Comment -->
                        </div>
                        <!-- End Single Block -->
                        <!-- Start Single Block -->
                        <div class="single-block comment-form">
                            <h3>Post a comment</h3>
                            <form action="#" method="POST">
                                <div class="row">
                                    <div class="col-lg-6 col-12">
                                        <div class="form-box form-group">
                                            <input type="text" name="name" class="form-control form-control-custom"
                                                placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-12">
                                        <div class="form-box form-group">
                                            <input type="email" name="email" class="form-control form-control-custom"
                                                placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-box form-group">
                                            <textarea name="#" class="form-control form-control-custom"
                                                placeholder="Your Comments"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="button">
                                            <button type="submit" class="btn">Post Comment</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- End Single Block -->
                    </div>
                    <div class="col-lg-4 col-md-5 col-12">
                        <div class="item-details-sidebar">
                            <!-- Start Single Block -->
                            <div class="single-block author">
                                <h3>Author</h3>
                                <div class="content">
                                    <img src="https://via.placeholder.com/200x200" alt="#">
                                    <h4>Miliya Jessy</h4>
                                    <span>Member Since May 15,2023</span>
                                    <a href="javascript:void(0)" class="see-all">See All Ads</a>
                                </div>
                            </div>
                            <!-- End Single Block -->
                            <!-- Start Single Block -->
                            <div class="single-block contant-seller comment-form ">
                                <h3>Contact Seller</h3>
                                <form action="#" method="POST">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-box form-group">
                                                <input type="text" name="name" class="form-control form-control-custom"
                                                    placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-box form-group">
                                                <input type="email" name="email"
                                                    class="form-control form-control-custom" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-box form-group">
                                                <textarea name="#" class="form-control form-control-custom"
                                                    placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="button">
                                                <button type="submit" class="btn">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <!-- End Single Block -->
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Item Details -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Listing-detail",
    data() {
        return {
            
        }
    },
        filters: {
        currency: (amount ) => {
            let formatter = new Intl.NumberFormat('NGN', {
                style: 'currency', 
                currency: 'NGN', 
                minimumFractionDigits: 2 
                });
            return formatter.format(amount);
        }
    },
    computed: {
        ...mapGetters(['getAdDetail']),
        mailAddress(){
            let email;
            if (this.getAdDetail.owner) {
                const prefix = "mailto:";
                const mail = this.getAdDetail.owner.email;
                email = prefix + mail;
            }

            return email;
        
        }


    },
    methods: {
        ...mapActions(['getDetailAds']),
        

        
    },
    created() {
        const id = this.$route.params.id;
        this.getDetailAds(id);
        
        
    },
}
</script>