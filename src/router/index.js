import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '../components/DashboardView.vue'
import IndexSiswa from '../components/siswa/IndexSiswa.vue'
import TambahSiswa from '../components/siswa/TambahSiswa.vue'
import EditSiswa from '../components/siswa/EditSiswa.vue'
import IndexKelas from '../components/kelas/IndexKelas.vue'
import TambahKelas from '../components/kelas/TambahKelas.vue'
import EditKelas from '../components/kelas/EditKelas.vue'
import IndexBuku from '../components/buku/IndexBuku.vue'
import TambahBuku from '../components/buku/TambahBuku.vue'
import EditBuku from '../components/buku/EditBuku.vue'
import PeminjamanView from '../components/transaksi/PeminjamanView.vue'
import TambahPeminjaman from '../components/transaksi/TambahPeminjaman.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/user',
    name: 'IndexSiswa',
    component: IndexSiswa
  },
  {
    path: '/user/tambah',
    name: 'TambahSiswa',
    component: TambahSiswa
  },
  {
    path: '/user/edit:id',
    name: 'EditSiswa',
    component: EditSiswa
  },
  {
    path: '/kelas',
    name: 'IndexKelas',
    component: IndexKelas
  },
  {
    path: '/kelas/tambah',
    name: 'TambahKelas',
    component: TambahKelas
  },
  {
    path: '/kelas/edit:id',
    name: 'EditKelas',
    component: EditKelas
  },
  {
    path: '/buku',
    name: 'IndexBuku',
    component: IndexBuku
  },
  {
    path: '/buku/tambah',
    name: 'TambahBuku',
    component: TambahBuku
  },
  {
    path: '/buku/edit:id',
    name: 'EditBuku',
    component: EditBuku
  },
  {
    path: '/peminjaman',
    name: 'PeminjamanView',
    component: PeminjamanView
  },
  {
    path: '/peminjaman/tambah',
    name: 'TambahPeminjaman',
    component: TambahPeminjaman
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
