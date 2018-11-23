<template>
    <div>
    <b-row class="justify-content-center">
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="52" v-model="currentPage"/>
    </b-row>

    <div v-for="user in manager_salarie" v-bind:key="user.name">
      <b-card :header="user[0].name + ' ' + user[0].lastname">
        <b-row class="justify-content-center" v-for="day in dayList" v-bind:key="day">
          <b-col cols="12" md="2">
            {{day}}
          </b-col>
          <b-col cols ="12" md="2">
            Heure de début : {{user[0].planning[currentPage-1][day].crenau1}}h
          </b-col>
          <b-col cols="12" md="2">
            Heure de fin : {{user[0].planning[currentPage-1][day].crenau2}}h
          </b-col>
          <b-col cols="12" md="2">
            Temps de pause : {{user[0].planning[currentPage-1][day].pause}}h
          </b-col>
          <b-col cols="6" md="2">
            {{user[0].planning[currentPage-1][day].abscence}}
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>


<script>
export default {


  created: function() {
    this.user = this.$root.getLoggedUser();
    this.data = this.$root.getData().users

    this.manager_salarie=  []
    this.user.team.forEach(function(salarie) {
      console.log(this.$root.findUser(salarie, this.data)[0].name)
      this.manager_salarie.push(this.$root.findUser(salarie, this.data));
    }, this);

    console.log(this.manager_salarie);
  },
  data() {
    return {
      manager_salarie: [],
      user: {},
      data: {},
      dayList: ["lundi","mardi","mercredi","jeudi","vendredi"],
      currentPage: 1,
      options: [
        { text: "Présent", value: "present" },
        { text: "CA", value: "CA" },
        { text: "RTT", value: "RTT" }
      ]
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    linkGen(pageNum) {
      return "#manager/" + pageNum;
    },
  }
};
</script>

