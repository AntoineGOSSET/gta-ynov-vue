<template>
<div>
  <b-row class="justify-content-center">
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="52" v-model="currentPage"/>
  </b-row>

  <h3 class="mt-4">Semaine {{currentPage}}</h3>
  <b-container>
  <b-form v-on:submit.prevent="doSubmit">
   
      <b-form-group id="day1inputgroup"
                    label="Lundi:"
                    label-for="day1input">
        <b-row class="justify-content-center">
          <b-col cols="4" md="2" >
          
          <b-form-input id="day1input"
                        placeholder="Matin"
                        type="number"
                        v-model="user.planning[currentPage-1].lundi.crenau1"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="4" md="2">
           
          <b-form-input id="day1input2"
                        placeholder="Après-midi"
                        type="number"
                        v-model="user.planning[currentPage-1].lundi.crenau2"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="4" md="1">
          
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[currentPage-1].lundi.pause"
                        required>
          </b-form-input>
          </b-col>

          <b-col cols="12" md="3">
         
              <b-form-radio-group id="btnradios2"
                            buttons
                            button-variant="outline-primary"
                            size="md"
                            v-model="user.planning[currentPage-1].lundi.abscence"
                            :options="options"
                            name="radioBtnOutline" />
          </b-col>

          <b-col>
          
              <p>Heures effectives : {{calculHoraire('lundi')}}</p>
          </b-col>
        </b-row>
      </b-form-group>


      <b-form-group id="day2inputgroup"
                    label="Mardi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input id="day2input"
                      placeholder="Matin"
                      type="number"
                      v-model="user.planning[currentPage-1].mardi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input id="day2input2"
                      placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[currentPage-1].mardi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[currentPage-1].mardi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[currentPage-1].mardi.abscence"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        <b-col>
              <p>Heures effectives : {{calculHoraire('mardi')}}</p>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group id="day3inputgroup"
                    label="Mercredi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input id="day3input"
                      placeholder="Matin"
                      type="number"
                      v-model="user.planning[currentPage-1].mercredi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input id="day3input2"
                      placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[currentPage-1].mercredi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[currentPage-1].mercredi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[currentPage-1].mercredi.abscence"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        <b-col>
              <p>Heures effectives : {{calculHoraire('mercredi')}}</p>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group id="day4inputgroup"
                    label="Jeudi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input id="day4input"
                      placeholder="Matin"
                      type="number"
                      v-model="user.planning[currentPage-1].jeudi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input id="day4input2"
                      placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[currentPage-1].jeudi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[currentPage-1].jeudi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[currentPage-1].jeudi.abscence"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        <b-col>
              <p>Heures effectives : {{calculHoraire('jeudi')}}</p>
          </b-col>
        </b-row>
      </b-form-group>
      <b-form-group id="day4inputgroup"
                    label="Vendredi:"
                    label-for="day1input">
      <b-row class="justify-content-center">
        <b-col cols="4" md="2">
        <b-form-input id="day4input"
                      placeholder="Matin"
                      type="number"
                      v-model="user.planning[currentPage-1].vendredi.crenau1"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="2">
        <b-form-input id="day4input2"
                      placeholder="Après-midi"
                      type="number"
                      v-model="user.planning[currentPage-1].vendredi.crenau2"
                      required>
        </b-form-input>
        </b-col>
        <b-col cols="4" md="1">
          <b-form-input id="day1input2"
                        placeholder="Déjeuner"
                        type="number"
                        v-model="user.planning[currentPage-1].vendredi.pause"
                        required>
          </b-form-input>
          </b-col>
        <b-col cols="12" md="3">
          
            <b-form-radio-group id="btnradios2"
                          buttons
                          button-variant="outline-primary"
                          size="md"
                          v-model="user.planning[currentPage-1].vendredi.abscence"
                          :options="options"
                          name="radioBtnOutline" />
        </b-col>
        <b-col>
          <div>
              <p>Heures effectives : {{calculHoraire('vendredi')}}</p>
          </div>
          </b-col>
        </b-row>
      </b-form-group>              
    <b-button type="submit" variant="primary">Enregistrer</b-button>
  </b-form>

  <b-row class="justify-content-center">
    <b-col>
      <p>Heures semaines : {{calculSemaine()}}</p>   
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
      var dayliste = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];
      dayliste.forEach(function(day) {

        if (
          eval("this.user.planning[this.currentPage-1]." + day + ".abscence") == "present"
        ) {
          heureSemaine += this.calculHoraire(day)
          console.log("PASSE")
        }
      }, this);
      console.log(heureSemaine)
      return heureSemaine
    }
  }
};
</script>