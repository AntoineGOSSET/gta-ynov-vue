<template>
    <div calss="salarie_info">
        <h1>Fiche d'identité</h1>
        <b-form>
        <UserForm/>

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
  name: "salarie_info",
  components: {
    UserForm
  }
};

</script>