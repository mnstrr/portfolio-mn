import { Veams } from './app.veams';
import 'lazysizes';
import ScrollContainer from './shared/components/scroll-container/scripts/scroll-container';
import ScrollItem from './shared/components/scroll-item/scripts/scroll-item';
import Logo from './shared/components/logo/scripts/logo';
import Navigation from './shared/components/navigation/scripts/navigation';
import Pagination from './shared/components/pagination/scripts/pagination';
import Video from './shared/components/video/scripts/video';
import DeviceHint from './shared/components/device-hint/scripts/device-hint';


Veams.detections = Veams.detections || {};
Veams.detections.mobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i.test(navigator.userAgent);
Veams.detections.touch = Veams.helpers.isTouch();

// Initialize modules with Veams

Veams.modules.add({
	namespace: 'scroll-container',
	module: ScrollContainer
});

Veams.modules.add({
	namespace: 'scroll-item',
	module: ScrollItem
});

Veams.modules.add({
	namespace: 'logo',
	module: Logo
});

Veams.modules.add({
	namespace: 'navigation',
	module: Navigation
});

Veams.modules.add({
	namespace: 'pagination',
	module: Pagination
});

Veams.modules.add({
	namespace: 'video',
	module: Video
});

Veams.modules.add({
	namespace: 'device-hint',
	module: DeviceHint
});

// @INSERTPOINT :: @ref: js-init-v5, @keep: true //
// @INSERTPOINT :: @ref: js-init-once-v5, @keep: true //
