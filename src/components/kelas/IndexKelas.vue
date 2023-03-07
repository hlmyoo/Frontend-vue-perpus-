<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Kelas</h1>
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
                                    <router-link class="btn btn-info mb-2" to="/kelas/tambah">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="width: 10px">ID</th>
                                                <th>Nama kelas</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(kelas,index) in result" :key="kelas.id_kelas">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ kelas.nama_kelas }}</td>
                                                
                                                
                                                <td>
                                                    <div class="btn-group">
                                                        
                                                        <router-link :to="{path: '/kelas/edit'+kelas.id_kelas}" class="btn btn-primary"> Edit </router-link>
                                                        <button type="button" class="btn btn-danger" @click="remove(kelas)"> Hapus </button>
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
            kelas: {}
        }
    },
    created() {
        this.userLoad();
    },
    methods: {
        userLoad(){
            var page = "http://127.0.0.1:8000/api/getkelas";
            axios.get(page).then(
                ({data})=>{
                    console.log(data);
                    this.result = data;
                }
            );
        },
        remove(kelas){
            
                var url = 'http://127.0.0.1:8000/api/deletekelas/'+ kelas.id_kelas;
                axios.delete(url);
                alert('sukses hapus kelas')
                setTimeout(() => {
                        window.location.reload()
                    }, 1300)
           
                this.userLoad;
        },
        save(){
            this.save_data();
        },
        save_data(){
            axios.post('http://127.0.0.1:8000/api/createkelas', this.kelas)
            .then(
                ({data}) => {
                    alert('sukses tambah kelas')
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000)
                    this.$router.push('/kelas');
                    this.buku = data;
                }
            )
        },
        
    }
}
</script>
