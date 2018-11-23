<template>
    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row class="justify-content-center">
        <b-col cols="12" sm="6">
      <b-form-group id="email"
                    label="Email:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="email"
                      required
                      placeholder="Entrer email">
        </b-form-input>
      </b-form-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" sm="6">
      <b-form-group id="password"
                    label="Mot de passe:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="password"
                      v-model="password"
                      required
                      placeholder="Entrer mot de passe">
        </b-form-input>
      </b-form-group>
        </b-col>
      </b-row>
      <b-button type="submit" variant="primary">Se connecter</b-button>
    </b-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      show: true
    };
  },

  methods: {
    onSubmit: function(event) {
      console.log(this.email + "/" + this.password);
      let user = this.$root.login(this.email, this.password);
      if (user == undefined) {
        this.hadLoginError = true;
      } else {
        console.log("user logged");
        console.log(user.name);
        this.$root.user = user;
        this.$root.isLoggin = true;
        this.$router.push("/");
      }
    },
    /* onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },*/
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = "";
      this.form.password = "";
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

