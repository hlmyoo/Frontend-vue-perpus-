<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Tambah Peminjaman</h1>
                        </div>          
                    </div>
                </div>
            </div>
 
            <div class="content">
            <div class="container-fluid">
            <div class="card card-primary card-outline">
            <div class="card-body">
                <form @submit.prevent="save">
                            <label for="nama_siswa" class="form-label">Nama:</label>
                            <select v-model="peminjaman.id_siswa" id="nama_siswa" class="form-control">
                            <option v-for="s in siswa" :key="s.id_siswa" :value="s.id_siswa">{{ s.nama_siswa }}</option>
                            </select>
                            
                            <label for="alamat" class="form-label">Alamat: </label>
                            <select v-model="peminjaman.id_kelas" class="form-control">
                                <option v-for="s in kelas" :key="s.id_kelas" :value="s.id_kelas">{{ s.nama_kelas }}</option>
                            </select>
                            

                            <label for="buku" class="form-label">Buku</label>
                            <select v-model="peminjaman.id_buku" id="buku" class="form-control">
                                <option v-for="b in buku" :key="b.id_buku" :value="b.id_buku">{{ b.judul_buku }}</option>
                            </select>

                            <input type="submit" class="btn btn-primary mt-3">
                        </form>
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
import swal from 'sweetalert';

Vue.use(axios);

export default {
    
    data() {
        return {
            peminjaman: {},
            siswa: {},
            kelas: {},
            buku: {},
        }
    },
    created() {
        this.getsiswa()
        this.getkelas()
        this.getbuku()
    },
    methods: {
        getsiswa() {
            axios.get('http://localhost:8000/api/getsiswa')
                .then(
                    ({ data }) => {
                        this.siswa = data
                    }
                )
        },
        getkelas() {
            axios.get('http://localhost:8000/api/getkelas')
                .then(
                    ({ data }) => {
                        this.kelas = data
                    }
                )
        },
        getbuku() {
            axios.get('http://localhost:8000/api/getbuku')
                .then(
                    ({ data }) => {
                        this.buku = data
                    }
                )
        },
        save() {
            this.save_data()
        },
        save_data() {
            axios.post('http://localhost:8000/api/createpeminjaman', this.peminjaman)
                .then(
                    ({ data }) => {
                    //    alert('sukses tambah peminjaman')
                       swal({
                        title :"sukses",
                        icon : "success"
                       })
                        this.$router.push('/peminjaman')
                        this.peminjaman = data
                    }
                )
        },
    },

}
</script>
