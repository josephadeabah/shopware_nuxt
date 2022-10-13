<template>
  <div class="mb-3">
    <TheNavbar />
    <Products/>
  </div>
</template>

<script>
  import Products from './pages/Products.vue';

export default {
  components:{Products},
  data() {
    return {
      products: [],
    };
  },
};
</script>
