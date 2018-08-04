<template>

 <div class="column is-12">

                    <table class="table is-hoverable is-fullwidth">

                        <thead>
                            <tr>
                                <th>Descargas</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>

                        <tbody v-for="item in data" :key="item.Downloads">

                            <tr>

                                <td>{{item.Downloads}}</td>
                                <td>{{item.Date}}</td>

                            </tr>

                        </tbody>

                    </table>
                </div>

</template>



<script>



export default {
    data() {
        return {
            add_active: ""
        }
    },

    computed: {

        data() {
            return this.$store.getters.downloads
        }

    },

  created() {

      this.$store.dispatch('downloads').then(response => {
            this.data = this.$store.getters.downloads
        }, error => {
            alert("ERROR MOSTRANDO LOS ERRORES")
        })
  },

  methods: {
    open() {
            this.add_active = "is-active"
        },
        close() {this.add_active = ""},

        removeUser(id) {
            alert(id)
        }

    }
    
    
}

</script>


<style scoped>
ul,
li {
  margin-top: 8px;
}

td,
a {
  margin: 2px;
}

div[class="card"] {
  margin-top: 20px;
  margin-right: 10px;
  padding-left: 20px;
  padding-bottom: 15px;
}
</style>