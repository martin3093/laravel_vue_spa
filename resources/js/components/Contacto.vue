<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col text-center">
                <h1>Clientes<span class="badge bg-secondary">Clientes</span></h1>

            </div>

        </div>

            <div class="col-12">
        <div class="table-resposive">
            <table class="table table-bordered">
                <thead class="bg-secondary text-white">
                    <tr>
                        <th>Clientes</th>
                        <th>Sucursal</th>
                        <th>IP</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="blog in blogs" :key="blog.id">
                    <td>{{ blog.id }}</td>
                    <td>{{ blog.titulo }}</td>
                    <td>{{ blog.contenido }}</td>
                    <td>
                        <router-link :to='{name:"editarBlog",params:{id:blog.id}}' class="btn btn-info"><i class="fa-solid fa-pen-to-square"></i></router-link>
                        <a type="button" @click="borrarBlog(blog.id)" class="btn btn-danger"><i class="fa-regular fa-trash-can"></i></a>
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
    name:"blogs",
        data(){
            return{
                blogs:[]
            }
        },
        mounted(){
            this.mostrarBlogs()
        },
        methods:{
          async  mostrarBlogs(){
               await this.axios.get('/api/blog').then(response=>{
                    this.blogs = response.data
                }).catch(error=>{
                    this.blog= []
                })


            },
            borrarBlog(id){
             if (confirm("¿Confirmar eliminar el registro?")){
                 this.axios.delete(`/api/blog/${id}`).then(response=>{
                    this.mostrarBlogs()
                }).catch(error=>{
                    console
                })

            }
            }
        }
}
</script>
