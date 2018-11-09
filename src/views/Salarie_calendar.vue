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
        <b-col>
        <b-form-input id="day1input"
                      type="text"
                      required>
        </b-form-input>
        </b-col>
        <b-col>
        <b-form-input id="day1input2"
                      type="text"
                      required>
        </b-form-input>
        </b-col>
        </b-row>
      </b-form-group>
    
    <b-form-group id="day2inputgroup"
                  label="Mardi:"
                  label-for="day2input">
      <b-form-input id="exampleInput2"
                    type="text"
                    required>
      </b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Se connecter</b-button>
  </b-form>

</div>
</template>

<script>
export default {

  data () {
    return {
      currentPage: 45
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#semaine/' + pageNum
    }
  }
}
</script>

