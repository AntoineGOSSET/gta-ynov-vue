<template>
    <div calss="salarie_info">
        <h1>Fiche d'identité</h1>
        <b-form v-on:submit.prevent="doSubmit">
    <b-row class="form_row">
        <b-col>
            <b-form-group id="nameInputGroup"
            label-for="nameInput">
                <b-form-input id="nameInput"
                type="text"
                placeholder="Nom"
                v-model="user.lastname">
                </b-form-input>
            </b-form-group>
        </b-col>

        <b-col>
            <b-form-group id="firstnameInputGroup"
            label-for="firstnameInput">
                <b-form-input id="firstnameInput"
                type="text"
                placeholder="Prénom"
                v-model="user.name">
                </b-form-input>
            </b-form-group>
        </b-col>
    </b-row>

    <b-row class="form_row">
        <b-col>
            <b-form-group id="birthdateInputGroup"
            label = "Date de naissance:"
            label-for="birthdateInput">
                <b-form-input id="birthdateInput"
                type="date" v-model="user.birthdate">
                </b-form-input>
            </b-form-group>
        </b-col>

        <b-col>
            <b-form-group id="emailInputGroup"
            label = "Adresse mail:"
            label-for="emailInput">
                <b-form-input id="emailInput"
                type="email"
                v-model="user.mail">
                </b-form-input>
            </b-form-group>
        </b-col>
    </b-row>

    <b-row>
        <b-col cols="1">
            <b-form-group id="numberadressGroup"
            label = "N°"
            label-for="numberadressInput">
                <b-form-input id="numberadressInput"
                type="number"
                v-model="user.adresse.num">
            </b-form-input>
            </b-form-group>
        </b-col>

        <b-col cols="7">
            <b-form-group id="roadadressGroup"
            label = "Nom de la voie"
            label-for="roadadressInput">
                <b-form-input id="roadadressInput"
                type="text"
                v-model="user.adresse.voie">
            </b-form-input>
            </b-form-group>
        </b-col>

        <b-col cols="4">
            <b-form-group id="completadressGroup"
            label = "Complément d'adresse"
            label-for="completadressInput">
                <b-form-input id="completadressInput"
                type="text"
                v-model="user.adresse.comp">
            </b-form-input>
            </b-form-group>
        </b-col>

        <b-col cols="3">
            <b-form-group id="cityadressGroup"
            label = "Ville"
            label-for="cityadressInput">
                <b-form-input id="cityadressInput"
                type="text"
                v-model="user.adresse.ville">
            </b-form-input>
            </b-form-group>
        </b-col>

        <b-col cols="2">
            <b-form-group id="codeadressGroup"
            label = "Code postal"
            label-for="codeadressInput">
                <b-form-input id="codeadressInput"
                type="number"
                v-model="user.adresse.cdp">
            </b-form-input>
            </b-form-group>
        </b-col>

    </b-row>


        <b-button-group>
            <b-button type="submit" variant="primary">Valider</b-button>
            <b-button>Annuler</b-button>
        </b-button-group>
        
        </b-form>
    </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";

export default {
  created: function() {
    this.user = this.$root.getLoggedUser();
  },
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    doSubmit: function() {
      this.$root.saveUser(this.user);
      //this.user = this.$root.getLoggedUser()
      alert("Modification prise en compte");
    }
  }
};
</script>