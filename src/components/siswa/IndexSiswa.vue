<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Anggota</h1>
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
                                    <router-link class="btn btn-info mb-2" to="/user/tambah">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style="width: 10px">#</th>
                                                    <th>Nama Lengkap</th>
                                                    <th>Kelas</th>
                                                    <th>Gender</th>
                                                    <th>Alamat</th>
                                                    <th>Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(siswa , index) in result" :key="siswa.id_siswa">
                                                    <td>{{ index + 1 }}</td>
                                                    <td>{{ siswa.nama_siswa }}</td>
                                                    <td>{{ siswa.nama_kelas }}</td>
                                                    <td>{{ siswa.gender }}</td>
                                                    <td>{{ siswa.alamat }}</td>
                                                    <td>
                                                        <div class="btn-group">
                                                           
                                                            <!-- <button type="button" @click="showDetail()" class="btn btn-success" >Detail</button> -->
                                                            <router-link :to="{path : '/user/edit' + siswa.id_siswa}" class="btn btn-primary">Edit</router-link>
                                                            <!-- <a href="" @click.prevent="ShowEdit" class="btn btn-primary">Edit</a> -->
                                                            <button type="button" class="btn btn-danger" @click="remove(siswa)"> Hapus </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table><br>
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
                result: [],
                siswa: {},
                datakelas: {},
                    id_siswa: "",
                    id_kelas: "",
                    nama_siswa: "",
                    tanggal_lahir: "",
                    gender: "",
                    alamat: "",
               
            }
        },
        mounted(){
            
            
        },
        created() {
            this.GetSiswa()
            // this.getDetail()
            this.getkelas()
        },
        methods: {
            
            GetSiswa(){
                var page = "http://127.0.0.1:8000/api/getsiswa";
                axios.get(page).then(
                    ({data})=>{ 
                        console.log(data);
                        this.result = data;
                    }
                );
            },
            getkelas(){
                axios.get('http://127.0.0.1:8000/api/getkelas')
                .then(
                    ({data}) => {
                        console.log(data);
                        this.datakelas = data;
                    }
                )
            },
            save(){
                this.save_data();
            },
            save_data(){
                axios.post('http://127.0.0.1:8000/api/createsiswa', this.siswa,this.kelas)
                .then(
                ({data}) => {
                   alert('sukses tambah siswa')
                    setTimeout(() => {
                        window.location.reload()
                    }, 1200)
                    this.siswa = data;
                })
            },
            remove(siswa){
              
                var url = 'http://127.0.0.1:8000/api/deletesiswa/'+ siswa.id_siswa;
                axios.delete(url);
                alert('sukses hapus siswa')
                setTimeout(() => {
                        window.location.reload()
                    }, 1300)
           
                this.userLoad;
                    
            },
            
            
        },
       
        getDetail(siswa){
            this.axios.get('http://localhost:8000/api/getsiswa/' + siswa.id_siswa)
            .then((response) => {
                    console.log(response.data[0])
                    this.id_siswa = response.data[0].id_siswa
                    this.id_kelas = response.data[0].id_kelas
                    this.nama_siswa = response.data[0].nama_siswa
                    this.tanggal_lahir = response.data[0].tanggal_lahir
                    this.gender = response.data[0].gender
                    this.alamat = response.data[0].alamat
                }
            )
        }
       
        
    }
</script>
