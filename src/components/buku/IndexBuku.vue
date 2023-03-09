<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Buku</h1>
                        </div>          
                    </div>
                </div>
            </div>
 
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card card-primary card-outline">
                                <div class="card-body">
                                    <router-link class="btn btn-info mb-2" to="/buku/tambah">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="width: 10px">ID</th>
                                                <th>Judul buku</th>
                                               
                                                <th>Pengarang</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(buku,index) in result" :key="buku.id_buku">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ buku.judul_buku }}</td>
                                                
                                                <td>{{ buku.pengarang }}</td>
                                                <td>
                                                    <div class="btn-group">
                                                        
                                                        <router-link :to="{path: '/buku/edit'+buku.id_buku}" class="btn btn-primary"> Edit </router-link>
                                                        <button type="button" class="btn btn-danger" @click="remove(buku)"> Hapus </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
    import axios from 'axios';
    
    Vue.use(axios);
    
    
    export default {
        
        data() {
        return{
            result: {},
            buku: {}
        }
    },
    created() {
        this.userLoad();
    },
    methods: {
        userLoad(){
            var page = "http://127.0.0.1:8000/api/getbuku";
            axios.get(page).then(
                ({data})=>{
                    console.log(data);
                    this.result = data;
                }
            );
        },
        remove(buku){
            
                var url = 'http://127.0.0.1:8000/api/deletebuku/'+ buku.id_buku;
                axios.delete(url);
                alert('sukses hapus buku')
                setTimeout(() => {
                        window.location.reload()
                    }, 1300)
           
                this.userLoad;
        },
        save(){
            this.save_data();
        },
        save_data(){
            axios.post('http://127.0.0.1:8000/api/createbuku', this.buku)
            .then(
                ({data}) => {
                    alert('sukses tambah buku')
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                    this.$router.push('/buku');
                    this.buku = data;
                }
            )
        },
        
    }
}
</script>
