import Rails from "@rails/ujs"
//import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
//rimport "channels"

import 'stylesheets/landingpage.scss'
import "@popperjs/core"
import "bootstrap"
import "aos"
import "glightbox"
import "isotope-layout"
import Swiper from "swiper";
import "controllers/home"

window.Swiper = Swiper;


Rails.start()
//Turbolinks.start()
ActiveStorage.start()