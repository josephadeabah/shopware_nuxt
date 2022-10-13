<script>
import ApiBase from "../api/index"


export default {
  data() {
    return {
      products: [],
    };
  },
  watch: {},
  methods: {
    async fetchProducts() {
      const data = await ApiBase.getAllProducts("product");
      this.products = data?.elements
      console.log("Data",  data?.elements);
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>


    
    <template>
        <div class="container">
            <div class="row">
                <div v-for="(product, index) in products" :key="'product-' + index" class="col-md-4">
                    <div class="card mb-3">
                        <img :src="product.cover.media.url" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ product.name }}
                            </h5>
                            <p class="card-text">
                                {{ product.description }}
                            </p>
                            <div class="d-grid">
                                <button @click="addToCart(product)" class="btn btn-outline-primary">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <ShoppingCart v-model="shoppingCart"/>
        </div>
    </template>
    
    <!-- <script>
    export default {
        data() {
            return {
                shoppingCart: []
            }
        },
        mounted() {
            this.shoppingCart = JSON.parse(localStorage.getItem('shoppingCart') || "[]")    
        },
        watch: {
            shoppingCart: {
                handler(newValue) {
                    localStorage.setItem('shoppingCart', JSON.stringify(newValue));
                }, deep: true
            }
        },
        methods: {
            addToCart(product) {
                let exists = false;
                
                for (const cartItem of this.shoppingCart) {
                    if (cartItem.uuid === product.uuid) {
                        cartItem.amount = cartItem.amount + 1;
                        exists = true;
                        break;
                    }
                }
    
                if (!exists) {
                    this.shoppingCart.push({
                        ...product,
                        amount: 1,
                    })
                }
            },
        }
    }
    </script> -->

<!-- 
    <div class="row">
        <div
          class="col-md-4 p-1"
          v-for="product in products"
          :key="product._uniqueIdentifier"
        >
          <img
            :src="product.cover.media.url"
            :alt="product._uniqueIdentifier"
            class="card-img-top"
            :style="{ cursor: 'pointer' }"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <button class="btn btn-warning border-radius-0 w-100">
              Add To Cart
            </button>
            <p class="card-text">{{ product.description }}</p>
          </div>
        </div>
      </div> -->
    
