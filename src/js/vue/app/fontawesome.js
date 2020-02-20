import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faCss3 as fabCss3,
	faFontAwesomeFlag as fabFontAwesomeFlag,
	faHtml5 as fabHtml5,
	faVuejs as fabVuejs,
} from '@fortawesome/free-brands-svg-icons'
import { faSquare as farSquare } from '@fortawesome/free-regular-svg-icons'
import {
	faBold as fasBold,
	faChevronLeft as fasChevronLeft,
	faChevronRight as fasChevronRight,
	faCircle as fasCircle,
	faGlobe as fasGlobe,
	faImage as fasImage,
	faSquare as fasSquare,
	faSync as fasSync,
	faUserSecret as fasUserSecret
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

library.add(fabCss3, fabFontAwesomeFlag, fabHtml5, fabVuejs);
library.add(farSquare);
library.add(fasBold, fasChevronLeft, fasChevronRight, fasCircle, fasGlobe, fasImage, fasSquare, fasSync, fasUserSecret);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

export default library