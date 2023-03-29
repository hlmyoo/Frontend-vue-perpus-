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
import LoginView from '../components/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user',
    name: 'IndexSiswa',
    component: IndexSiswa,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user/tambah',
    name: 'TambahSiswa',
    component: TambahSiswa,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user/edit:id',
    name: 'EditSiswa',
    component: EditSiswa,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/kelas',
    name: 'IndexKelas',
    component: IndexKelas,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/kelas/tambah',
    name: 'TambahKelas',
    component: TambahKelas,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/kelas/edit:id',
    name: 'EditKelas',
    component: EditKelas,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/buku',
    name: 'IndexBuku',
    component: IndexBuku,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/buku/tambah',
    name: 'TambahBuku',
    component: TambahBuku,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/buku/edit:id',
    name: 'EditBuku',
    component: EditBuku,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/peminjaman',
    name: 'PeminjamanView',
    component: PeminjamanView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/peminjaman/tambah',
    name: 'TambahPeminjaman',
    component: TambahPeminjaman,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('auth')) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})

export default router
