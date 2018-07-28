<template>

    <div>
            <div class="row">
                <div class="card">
                    <div>
                        <nav class="breadcrumb" aria-label="breadcrumbs">
                            <ul>
                                <li>
                                    <a>Seguridad</a>
                                </li>
                                <li>
                                    <a href="#">Crear Consecutivos</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
                        <br>


            <div class="columns">

                <div class="column is-2">
                    <a class="button is-dark is-fullwidth">Agregar</a>
                </div>

                <div class="column is-9">
                    <div class="field">
                        <div class="field">
                            <p class="control">
                                <input id="test" class="input" placeholder="Find a repository" type="text">
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="columns">

                <div class="column is-12">

                    <table class="table is-hoverable is-fullwidth">

                        <thead>
                            <tr>
                                <th>Codigo ID</th>
                                <th>Consecutivo</th>
                                <th>Nombre</th>
                                <th>Prefijo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody v-for="item in data" :key="item.ID">

                            <tr>

                                <td>{{item.ID}}</td>
                                <td>{{item.Consecutive}}</td>
                                <td>{{item.Type}}</td>
                                <td>{{item.Prefix}}</td>

                                <td>
                                    <a class="button is-link">Ver/ Editar</a>
                                    <a class="button is-danger">Eliminar</a>
                                </td>

                            </tr>

                        </tbody>

                    </table>
                </div>

            </div>



    </div>

</template>



<script>
export default {
    data() {
        return {
            data: null
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