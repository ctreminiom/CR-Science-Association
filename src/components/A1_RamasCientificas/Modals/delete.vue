 <div class="columns">
                <div class="column is-12">
                    <table class="table is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Caja de Codigo</th>
                                <th>Nombre</th>
                                <th>Prefijo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>99</td>
                                <td>Proyecto</td>
                                <td>PRO</td>
                                <td>
                                    <div class="field is-grouped">
                                        <p class="control">
                                            <a onclick="executeModalEdit()" class="button is-link">Editar/Guardar</a>
                                            
                                        </p>
                                        <p class="control">
                                            <a href=\"delete=".$row['id']."\" class="button is-danger">
                                                Eliminar
                                            </a>
                                        </p>
                                    </div>
                                </td>
                              
                            </tr>

                        </tbody>
                    </table>
                </div>


            </div>