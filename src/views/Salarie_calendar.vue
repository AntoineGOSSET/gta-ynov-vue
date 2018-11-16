<template>
<div>
  <h2 class="mt-4">Planning</h2>
  <b-pagination-nav :link-gen="linkGen" :number-of-pages="52" v-model="currentPage"/>
  <br>

  <div class="mt-4">Semaine {{currentPage}}</div>
  
  <b-form>
   
      <b-form-group id="day1inputgroup"
                    label="Lundi:"
                    label-for="day1input">
      <b-row>
        <b-col cols="5">
        <b-form-input id="day1input"
                      placeholder="Matin"
                      type="text"
                      v-model="user.planning.S45"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="5">
        <b-form-input id="day1input2"
                      placeholder="Après-midi"
                      type="number"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="2">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="selected"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        </b-row>
      </b-form-group>
      <b-form-group id="day2inputgroup"
                    label="Mardi:"
                    label-for="day1input">
      <b-row>
        <b-col cols="5">
        <b-form-input id="day2input"
                      placeholder="Matin"
                      type="number"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="5">
        <b-form-input id="day2input2"
                      placeholder="Après-midi"
                      type="number"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="2">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="selected"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        </b-row>
      </b-form-group>
      <b-form-group id="day3inputgroup"
                    label="Mercredi:"
                    label-for="day1input">
      <b-row>
        <b-col cols="5">
        <b-form-input id="day3input"
                      placeholder="Matin"
                      type="number"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="5">
        <b-form-input id="day3input2"
                      placeholder="Après-midi"
                      type="number"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="2">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="selected"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        </b-row>
      </b-form-group>
      <b-form-group id="day4inputgroup"
                    label="Jeudi:"
                    label-for="day1input">
      <b-row>
        <b-col cols="5">
        <b-form-input id="day4input"
                      placeholder="Matin"
                      type="number"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="5">
        <b-form-input id="day4input2"
                      placeholder="Après-midi"
                      type="number"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="2">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="selected"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        </b-row>
      </b-form-group>
      <b-form-group id="day4inputgroup"
                    label="Vendredi:"
                    label-for="day1input">
      <b-row>
        <b-col cols="5">
        <b-form-input id="day4input"
                      placeholder="Matin"
                      type="number"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="5">
        <b-form-input id="day4input2"
                      placeholder="Après-midi"
                      type="number"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="2">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="lg"
                          v-model="selected"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        </b-row>
      </b-form-group>
    
    <b-button type="submit" variant="primary">Enregistrer</b-button>
  </b-form>
</div>
</template>

<script>
export default {
  created: function() {
    console.log("profil created");
    this.user = this.$root.getLoggedUser();
    console.log(this.user.planning);
  },
  data() {
    return {
      user: {},
      currentPage: 45,

      selected: "present",
      options: [
        { text: "Présent", value: "present" },
        { text: "CA", value: "CA" },
        { text: "RTT", value: "RTT" }
      ]
    };
  },
  methods: {
    linkGen(pageNum) {
      return "#semaine/" + pageNum;
    }
  }
}
</script>

