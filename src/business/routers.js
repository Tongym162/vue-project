/**
 * Created by kingdee on 2016/10/28.
 */
import Hello from './components/Hello.vue'
import UserForm from './views/UserForm.vue'
export default {
    "/hello": {
        "name": "hello",
        "component": Hello
    },
    "/add": {
      "name": "add",
      "component": UserForm,
    }
}
