<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-3 fw-light">2021, sunday</span>
    </div>
    <div class="">
        <button class="btn btn-danger mx-2">
            Delete 
            <i class="fa fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary mx-2">
            image
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea name="" id="" cols="30" rows="10" placeholder="what happened today?"></textarea>
  </div>
  <Fab :icon="'fa-floppy-disk'" />
  <img 
    class="img-thumbnail"
    alt="entry-picture" 
    src="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg">
</template> 

<script>
import { defineAsyncComponent } from 'vue'
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        Fab: defineAsyncComponent( () => import('../components/FabComponent') )
    }
}
</script>

<style lang="scss" scoped >
    textarea {
        font-size: 20px;
        border: none;
        height: 100%;
        &:focus{
            outline: none;
        }
    }
    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>