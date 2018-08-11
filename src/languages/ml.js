import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'english',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('english').create({

            aside: {
                module: {
                    security: "Security",
                    administration: "Administration",
                    queries: "Queries",
                },

                security: {
                    users: "Users",
                    consecutives: "Consecutives",
                    grades: "Grades",
                    laboratory: "Laboratory Roles",
                    job: "Jobs",
                    roles: "Roles",
                    grants: "Grants",
                },

                administration: {
                    scientificBranch: "Scientifics Branches",
                    project: "Projects",
                    scientificLog: "Scientifics Logs"
                },

                queries: {
                    activities: "Activities",
                    download: "Downloads",
                    error: "Errors",
                },



                content: {
                    users: {
                        table: {
                            id: "ID",
                            consecutive: "Consecutive",
                            name: "Name",
                            lastName: "Last Name",
                            username: "Username",
                            actions: {
                                row: "Actions",
                                button: {
                                    view: "View",
                                    Password: "Password",
                                    Delete: "Delete",
                                }
                            }
                        },

                        breadCrumb: {
                            dashboard: "Dashboard",
                            user: "User"
                        },


                    }
                }




            },

            msg: 'You have'
        }),

        new MLanguage('portuguese').create({
            title: 'Oi {0}!',
            msg: 'Você tem {f} amigos e {l} curtidas'
        })
    ]
})