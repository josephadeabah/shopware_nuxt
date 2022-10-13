<script>
import Register from "../components/Register.vue"

  export default{
    components:{Register},
    data(){
      return{

      }
    }
  }
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark  bg-danger mb-5">
      <div class="container-fluid ">
        <NuxtLink to="/" class="navbar-brand"> ELEGANCY </NuxtLink>

        <button
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" active-class="active">
                <!-- Home -->
              </NuxtLink>
            </li>
          </ul>
          <Register/>
        </div>
      </div>
    </nav>
  </div>
</template>



<style>
  .container-fluid{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

</style>
