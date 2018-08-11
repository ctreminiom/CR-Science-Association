<template>
            <div class="box">
                <div class="level">
                    <div class="level-left">
                    <nav class="breadcrumb is-large" aria-label="breadcrumbs">
                        <ul>
                            <li><a href="#">Bulma</a></li>
                            <li><a href="#">Documentation</a></li>
                              <p v-text="$ml.get('myMessage')" />
                            <li><a href="#">Components</a></li>
                            <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
</template>


<script>
import { MLBuilder } from 'vue-multilanguage'

export default {
  data () {
    return { friends: 5 }
  },
  computed: {
    mlmyMessage () {
      return new MLBuilder('aside.module.security')
    }
  }
}
</script>


