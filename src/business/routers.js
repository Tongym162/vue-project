/**
 * Created by kingdee on 2016/10/28.
 */
import Menu from './views/Menu.vue'
import UserForm from './views/UserForm.vue'
import TestVues from './views/TestVues.vue'
export default {
    "/menu": {
        "name": "menu",
        "component": Menu
    },
    "/add": {
      "name": "add",
      "component": UserForm,
    },
    "/vuex": {
      "name": "vuex",
      "component": TestVues,
    }
}
