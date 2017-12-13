import { Veams } from './app.veams';
import Lazysizes from 'lazysizes';
import ScrollContainer from './shared/components/scroll-container/scripts/scroll-container';
import ScrollItem from './shared/components/scroll-item/scripts/scroll-item';
import Logo from './shared/components/logo/scripts/logo';
import Navigation from './shared/components/navigation/scripts/navigation';
import Pagination from './shared/components/pagination/scripts/pagination';

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


// @INSERTPOINT :: @ref: js-init-v5, @keep: true //
// @INSERTPOINT :: @ref: js-init-once-v5, @keep: true //
