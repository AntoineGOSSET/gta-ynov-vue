<template>
<div>
  <b-row class="justify-content-center">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="52" v-model="currentPage"/>
  </b-row>

  <h3 class="mt-4">Semaine {{currentPage}}</h3>
  <b-container>
  <b-form v-on:submit.prevent="doSubmit">
   <div v-for="day in dayList" v-bind:key="day">
      <b-form-group>
        <label>{{day}}</label>
        <b-row class="justify-content-center">
          <b-col cols="4" md="2" >
          
          <b-form-input id="day1input"
                        placeholder="Matin"
                        v-b-popover.hover="'Heure de début'"
                        type="number"
                        v-model="user.planning[currentPage-1][day].crenau1"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="4" md="2">
           
          <b-form-input id="day1input2"
                        placeholder="Après-midi"
                        v-b-popover.hover="'Heure de fin'"
                        type="number"
                        v-model="user.planning[currentPage-1][day].crenau2"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="4" md="1">
          
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        v-b-popover.hover="'Temps de pause'"
                        type="number"
                        v-model="user.planning[currentPage-1][day].pause"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="12" md="3">
         
              <b-form-radio-group id="btnradios2"
                            buttons
                            button-variant="outline-primary"
                            size="md"
                            v-model="user.planning[currentPage-1][day].abscence"
                            :options="options"
                            name="radioBtnOutline" />
          </b-col>

          <b-col>
              <p v-if="user.planning[currentPage-1][day].abscence == 'present'">Heures effectives : {{calculHoraire(day)}}</p>
              <p v-else> Absent </p>
          </b-col>
        </b-row>
      </b-form-group>
   </div>


    <b-button type="submit" variant="primary">Enregistrer</b-button>
  </b-form>

  <b-row class="justify-content-center">
    <b-col>
      <p>Heures semaines : {{calculSemaine()}} / {{user.tauxhoraire}}</p>   
    </b-col>
  </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  created: function() {
    this.user = this.$root.getLoggedUser();
  },
  data() {
    return {
      user: {},
      currentPage: 1,
      dayList: ["lundi", "mardi", "mercredi", "jeudi", "vendredi"],
      options: [
        { text: "Présent", value: "present" },
        { text: "CA", value: "CA" },
        { text: "RTT", value: "RTT" }
      ]
    };
  },
  methods: {
    doSubmit: function() {
      this.$root.saveUser(this.user);
      //this.user = this.$root.getLoggedUser()
      alert("Modification prise en compte");
    },
    linkGen(pageNum) {
      return "#semaine/" + pageNum;
    },
    calculHoraire(day) {
      return eval(
        "this.user.planning[this.currentPage-1]." +
          day +".crenau2 - this.user.planning[this.currentPage-1]." +
          day +".crenau1 - this.user.planning[this.currentPage-1]." +
          day +".pause"
      );
    },
    calculSemaine() {
      var heureSemaine = 0;
      
      this.dayList.forEach(function(day) {

        if (
          eval("this.user.planning[this.currentPage-1]." + day + ".abscence") == "present"
        ) {
          heureSemaine += this.calculHoraire(day)
        }
      }, this);
      return heureSemaine
    }
  }
};
</script>