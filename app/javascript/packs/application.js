import Rails from "@rails/ujs"
//import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
//rimport "channels"
import $ from "jquery"
import "stylesheets/application"
import "controllers/market"
import "img"
window.$ = $
Rails.start()
//Turbolinks.start()
ActiveStorage.start()
