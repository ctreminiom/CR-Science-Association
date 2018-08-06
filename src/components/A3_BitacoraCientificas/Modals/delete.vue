<div class="columns">
                <div class="column is-12">
                    <table class="table is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Experimento</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Usuario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>10000</td>
                                <td>R5</td>
                                <td>Stefan</td>
                                <td>von Schroter</td>
                                <td>svonschroter</td>
                                <td>
                                    <a onclick="executeModalView()" class="button is-link">Ver</a>
                                    <a class="button is-dark">Registrar</a>
                                    <a href=\"delete=".$row['id']."\" class="button is-danger">
                                                Eliminar
                                            </a>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>


            </div>