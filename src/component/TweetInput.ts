import Vue = require('vue')
import Component from 'vue-class-component'

@Component({
  template: `
    <div>
      <input type="text" />
      <button>Tweet</button>
    </div>
  `
})
export default class TweetInputComponent extends Vue {
}