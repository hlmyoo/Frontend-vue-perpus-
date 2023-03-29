<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>      
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <button @click="logout" class="btn btn-sm btn-danger"><i class="fas fa-sign-out-alt"></i> Logout</button>
            </li>
        </ul>
    </nav>
</template>

<script>
import swal from 'sweetalert'
export default {    
    methods : {
        logout(){
            swal({
                title: "Ingin logout?",
                icon : "warning",
                dangerMode : true,
                buttons : true
            }).then(
                (res) => {
                    if(res){
                        this.$store.commit('clearToken')
                        location.href='/login'
                    }
                }
            )
        }
    }
}
</script>
