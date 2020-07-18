<template>
  <div id="app">
    <section>
      <b-field label="Keresés">
        <b-input type="search" v-model="search" maxlength="20"></b-input>
      </b-field>
      <b-menu>
        <b-menu-list label="Találatok">
          <b-menu-item v-for="(substance, index) of filteredSubstances" :key="index" :label="substance.name">
          </b-menu-item>
        </b-menu-list>
      </b-menu>
    </section>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "App",
  data() {
    return {
      substances: [],
      search: "",
    };
  },
  apollo: {
    substances: {
      query: gql`
        query {
          substances(limit: 9999) {
            name
          }
        }
      `,
      manual: true,
      result({ data, loading }) {
        if (!loading) {
          this.substances = data.substances;
          this.filteredSubstances = data.substances;
        }
      },
    },
  },
  components: {},
  computed: {
    filteredSubstances: {
      get() {
        return this.substances.filter(substance => {
          return substance.name.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      set() {}
    }
  }
};
</script>

<style>
section {
  text-align: center;
  width: 50%;
  margin: auto;
}
</style>
