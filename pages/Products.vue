<script>
import ApiBase from "../api/index";
import ShoppingCart from "../components/ShoppingCart.vue";

export default {
  components: { ShoppingCart },
  data() {
    return {
      products: [],
    };
  },
  watch: {},
  methods: {
    async fetchProducts() {
      const data = await ApiBase.getAllProducts("product");
      this.products = data?.elements;
      console.log("Data", data?.elements);
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<template>
  <div class="col-md-12 backgroundC">
    <div class="uk-section uk-section-muted uk-preserve-color">
      <div class="uk-container">
        <div class="uk-panel uk-dark uk-margin-medium">
          <h3>Section Primary with cards</h3>
        </div>

        <div class="uk-grid-match uk-child-width-expand@m" uk-grid>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div>
            <div class="uk-card uk-card-default uk-card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-11 p-2 mx-auto">
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="'product-' + index"
          class="col-md-3"
        >
          <div class="mb-3 bg-white">
            <img :src="product.cover.media.url" class="card-img-top img-size" />
            <div class="card-body">
              <h5 class="card-title col-12 text-truncate">
                {{ product.name }}
              </h5>
              <p class="card-text col-12 text-truncate">
                {{ product.description }}
              </p>
              <div class="d-grid">
                <button
                  @click="addToCart(product)"
                  class="btn btn-outline-secondary"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ShoppingCart />
  </div>
</template>

<script></script>

<style></style>
