const Home=()=> import('./components/Home.vue')
const Contacto=()=> import('./components/Contacto.vue')

//importar los componentes para el blog
const Mostrar=()=> import('./components/blog/Mostrar.vue')
const Editar=()=> import('./components/blog/Editar.vue')
const Crear=()=> import('./components/blog/Crear.vue')


const MostrarCliente=()=> import('./components/cliente/Mostrar.vue')
const EditarCliente=()=> import('./components/cliente/Editar.vue')
const CrearCliente=()=> import('./components/cliente/Crear.vue')

export const routes= [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'contacto',
        path:'/contacto',
        component:Contacto
    },
    {
        name:'mostrarBlogs',
        path:'/blogs',
        component:Mostrar
    },


    {
        name:'crearBlog',
        path:'/crear',
        component:Crear
    },

    {
        name:'editarBlog',
        path:'/editar/:id',
        component:Editar
    },

    // clientes




]
