import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)

export default new MLCreate({
    initial: 'english',
    save: process.env.NODE_ENV === 'production',
    languages: [
        new MLanguage('english').create({
            msg: 'You have',

            aside:{
                module:{
                    security:'Security',
                    administrator:'Administrator',
                    queries:'Queries'
                },
                security:{
                    users:'Users',
                    grants:'Grants',
                    laboratory:'Laboratory Role',
                    job:'Jobs',
                    consecutives:'Consecutives',
                    education:'Education Level'
                },
                administration:{
                    scientific:'Scientific Branches',
                    project: 'Projects',
                    experimental: 'Experimental Logs'
                },
                queries:{
                    activity:'Activities',
                    error: 'Errors',
                    download: 'Download'
                }
            },


            title:'CR-Science-Association',

            module:{
                users:{
                    table:{
                        header:{
                            consecutive:'Consecutive',
                            name:'name',
                            lastname:'Lastname',
                            username: 'username',
                            actions:'Actions'
                        }
                    }
                }
            }



        }),

        new MLanguage('portuguese').create({
            msg: 'Você tem {f} amigos e {l} curtidas',
            aside:{
                module:{
                    security:'Segurança',
                    administrator:'Administrador',
                    queries:'Consultas'
                },
                security:{
                    users:'Usuários',
                    grants:'Grants',
                    laboratory:'Papel de Laboratório',
                    job:'Jobs',
                    consecutives:'Consecutives',
                    education:'Education Level'
                },
                administration:{
                    scientific:'Ramos Científicos',
                    project: 'Projetos',
                    experimental: 'Logs experimentais'
                },
                queries:{
                    activity:'Atividades',
                    error: 'Erros',
                    download: 'Download'
                },


                title:'CR-Science-Association',

                module:{
                    users:{
                        table:{
                            header:{
                                consecutive:'Consecutive',
                                name:'name',
                                lastname:'Lastname',
                                username: 'username',
                                actions:'Actions'
                            }
                        }
                    }
                }
    
            }
        })
    ]
})