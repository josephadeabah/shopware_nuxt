<template>
  <!-- <pre>{{country}}</pre>  -->
  <div class="d-flex">
    <button
      class="btn btn-primary bg-dark border-0 mx-1"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        class="bi bi-cart"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
    </button>

    <button
      type="button"
      class="btn btn-dark"
      data-bs-toggle="modal"
      data-bs-target="#ModalForm"
    >
      Register
    </button>
    <div
      class="modal fade"
      id="ModalForm"
      tabindex="-1"
      aria-labelledby="ModalFormLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="myform bg-danger">
              <h1 class="text-center">Register</h1>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label"
                      >First Name</label
                    >
                    <input
                      type="text"
                      v-model="firstname"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      v-model="lastname"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      v-model="password"
                      class="form-control"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label"
                      >Email</label
                    >
                    <input type="email" v-model="email" class="form-control" />
                  </div>
                </div>

                <select
                  class="form-control"
                  :required="true"
                  @change="handleChange"
                >
                  <option :selected="true">Choose Province</option>
                  <option v-for="option in country" v-bind:value="option.id">
                    {{ option.name }}
                  </option>
                </select>
              </div>
              <button
                type="submit"
                @click="registerUser"
                class="btn btn-light mt-3"
              >
                Register
              </button>
              <p>Already a member? <a href="#">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      selected: "",
      country: [],
    };
  },
  methods: {
    async getSalutation() {
      const config = useRuntimeConfig();
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "sw-access-key": config.public.apiSecret,
        },
      };
      const salutationObj = await $fetch(
        "http://localhost/store-api/salutation",
        options
      );
      console.log("salutationObj", salutationObj);
    },
    handleChange(event) {
      this.selected = event.target.value;
      console.log("@change", this.selected);
    },

    async getCountry() {
      const config = useRuntimeConfig();
      var optionCountry = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "sw-access-key": config.public.apiSecret,
        },
      };
      const countryObj = await $fetch(
        "http://localhost/store-api/country",
        optionCountry
      );

      this.country = countryObj.elements;

      console.log("countryObj", country);
    },

    async registerUser() {
      const config = useRuntimeConfig();
      let body = {
        salutationId: "ccaca3d6b614461c83de6e3fc90ddc5c",
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        password: this.password,
        storefrontUrl: "http://localhost",
        billingAddress: {
          street: "My Street Adress 234",
          zipcode: "3214",
          city: "Dortmund",
          countryId: "2d1027ae184a40769e9a20dc759dd4c6",
        },
      };

      const result = await $fetch(
        "http://localhost/store-api/account/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "sw-access-key": config.public.apiSecret,
            "sw-context-token": "",
          },
          body,
        }
      );

      console.log("New User Created", result);
    },
  },
  mounted() {
    this.getSalutation();
    this.getCountry();
  },
};
</script>

<style></style>
