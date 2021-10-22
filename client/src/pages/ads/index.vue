<template>
    <div>
        <!-- Start Breadcrumbs -->
    <div class="breadcrumbs">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="breadcrumbs-content">
                        <h1 class="page-title">Ad Listings Grid</h1>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-nav">
                        <li><a href="index.html">Home</a></li>
                        <li>Listings Grid</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Breadcrumbs -->

    <!-- Start Items Listing Grid -->
    <section class="category-page section">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-12">
                    <div class="category-sidebar">
                        <!-- Start Single Widget -->
                        <div class="single-widget search">
                            <h3>Search Ads</h3>
                            <form action="#">
                                <input type="text" placeholder="Search Here...">
                                <button type="submit"><i class="lni lni-search-alt"></i></button>
                            </form>
                        </div>
                        <!-- End Single Widget -->
                        <!-- Start Single Widget -->
                        <div class="single-widget">
                            <h3>All Categories</h3>
                            <ul class="list" v-for="category in getCategories" :key="category._id">
                                <li>
                                    <router-link :to="{name:'Listings', query:{category: category._id}}"><i class="lni lni-dinner"></i> {{category.title}}<span>{{ category.numberOfAds}}</span></router-link>
                                    <!-- <a @click="goToCatAd(category._id)"><i class="lni lni-dinner"></i> {{category.title}}<span>{{ category.numberOfAds}}</span></a> -->
                                </li>
                            
                            </ul>
                        </div>
                        <!-- End Single Widget -->
                        <!-- Start Single Widget -->
                        <div class="single-widget range">
                            <h3>Price Range</h3>
                            <input type="range" class="form-range" name="range" step="1" min="100" max="10000"
                                value="10" onchange="rangePrimary.value=value">
                            <div class="range-inner">
                                <label>$</label>
                                <input type="text" id="rangePrimary" placeholder="100" />
                            </div>
                        </div>
                        <!-- End Single Widget -->
                        <!-- Start Single Widget -->
                        <div class="single-widget condition">
                            <h3>Condition</h3>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1">
                                <label class="form-check-label" for="flexCheckDefault1">
                                    All
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2">
                                <label class="form-check-label" for="flexCheckDefault2">
                                    New
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3">
                                <label class="form-check-label" for="flexCheckDefault3">
                                    Used
                                </label>
                            </div>
                        </div>
                        <!-- End Single Widget -->
                        <!-- Start Single Widget -->
                        <div class="single-widget banner">
                            <h3>Advertisement</h3>
                            <a href="javascript:void(0)">
                                <img src="https://via.placeholder.com/780x1300" alt="#">
                            </a>
                        </div>
                        <!-- End Single Widget -->
                    </div>
                </div>
                <div class="col-lg-9 col-md-8 col-12">
                    <div class="category-grid-list">
                        <div class="row">
                            <div class="col-12">
                                <div class="category-grid-topbar">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <h3 class="title">Showing 1-{{getAds.pagingCounter}} of {{getAds.totalDocs}} ads found</h3>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-12">
                                            <nav>
                                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button class="nav-link active" id="nav-grid-tab"
                                                        data-bs-toggle="tab" data-bs-target="#nav-grid" type="button"
                                                        role="tab" aria-controls="nav-grid" aria-selected="true"><i
                                                            class="lni lni-grid-alt"></i></button>
                                                    <button class="nav-link" id="nav-list-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-list" type="button" role="tab"
                                                        aria-controls="nav-list" aria-selected="false"><i
                                                            class="lni lni-list"></i></button>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-grid" role="tabpanel"
                                        aria-labelledby="nav-grid-tab">
                                        <div class="row">
                                            <div class="col-lg-4 col-md-6 col-12" v-for="ad in getAds.docs" :key="ad.id">
                                                <!-- Start Single Item -->
                                                <div class="single-item-grid">
                                                    <div class="image">
                                                        <img :src="getImages(ad.images)" alt="#">
                                                        
                                                        <i class=" cross-badge lni lni-bolt"></i>
                                                        <span class="flat-badge sale">Sale</span>
                                                    </div>
                                                    <div class="content">
                                                        <a href="javascript:void(0)" class="tag">{{ad.category.title}}</a>
                                                        <h3 class="title">
                                                            <keep-alive>
                                                                <router-link :to="{name: 'Listing-detail', params:{id: ad._id}}">{{ad.title}}</router-link>
                                                            <a href="item-details.html"></a>
                                                                </keep-alive>
                                                        </h3>
                                                       <div v-if="ad.state && ad.lga">
                                                            <p class="location"><a href="javascript:void(0)"><i class="lni lni-map-marker">
                                                                </i>{{ad.lga.lga}}, {{ ad.state.name }}</a></p>

                                                       </div>
                                                        <div v-else>
                                                             <p class="location"><a href="javascript:void(0)"><i class="lni lni-map-marker">
                                                                </i>Not Available</a></p>

                                                        </div>
                                                      
                                                
                                                       
                                                        <ul class="info" v-if="ad.price == 0">
                                                            <li class="price">{{ad.priceType}}</li>
                                                            <li class="like"><a href="javascript:void(0)"><i
                                                                        class="lni lni-heart"></i></a>
                                                            </li>
                                                        </ul>
                                                         <ul class="info" v-else>
                                                            <li class="price">{{ad.price | currency}}</li>
                                                            <li class="like"><a href="javascript:void(0)"><i
                                                                        class="lni lni-heart"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <!-- End Single Item -->
                                            </div>
                                            
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <!-- Pagination -->
                                                <div class="pagination left">
                                                    <ul class="pagination-list">
                                                        <li v-if="getAds.hasPrevPage == true"><a @click="goToNextPage(page -1)"><i class="lni lni-chevron-left" ></i></a></li>
                                                        <li v-for="page in getAds.totalPages" :key="page"><a @click="goToNextPage(page)">{{page}}</a></li>
                                                        <li v-if="getAds.hasNextPage == true"><a  @click="goToNextPage(page +1)"><i class="lni lni-chevron-right"></i></a></li>
                                                    </ul>
                                                </div>
                                                <!--/ End Pagination -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Items Listing Grid -->
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Listings",
    data() {
        return {
            page: 1,
            catId: null,
            condition: null,
            search: null,
            price: null,
            
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
        ...mapGetters(['getAds','getCategories']),


    },
    methods: {
        ...mapActions(['getAllAds', 'getAllCategories']),
        goToNextPage(page){
            if (this.catId && this.catId !==null) {
                this.getAllAds({page: page, catId: this.catId});
           
            }

            this.getAllAds({page: page});

        },
        // goToCatAd(catId){
        //     this.catId = catId;
        //     this.getAllAds({page:this.page, catId:this.catId});
        // },

          getImages(images){
            let image;
            images.forEach((element)=> {
                console.log(element);
                image = element;
                
            });

            return image;

        },
      

        
    },
    watch: {
        catId: function(value) {
             this.getAllAds({page: this.page, catId: value});

        }
    },
   created() {
       if (this.$route.query.category) {
           this.catId = this.$route.query.category;
           
       }
        this.getAllAds({page: this.page});
        this.getAllCategories();
   },
    
}
</script>