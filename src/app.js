import { Veams } from './app.veams';
import Lazysizes from 'lazysizes';
import ScrollContainer from './shared/components/scroll-container/scripts/scroll-container';
import ScrollItem from './shared/components/scroll-item/scripts/scroll-item';
import Logo from './shared/components/logo/scripts/logo';
import Navigation from './shared/components/navigation/scripts/navigation';
import Pagination from './shared/components/pagination/scripts/pagination';
import CaseContent from './shared/components/case-content/scripts/case-content';

// Initialize modules with Veams

Veams.modules.add('scroll-container', ScrollContainer);

Veams.modules.add('scroll-item', ScrollItem);

Veams.modules.add('logo', Logo);

Veams.modules.add('navigation', Navigation);

Veams.modules.add('pagination', Pagination);


Veams.modules.add('case-content', CaseContent);

// @INSERTPOINT :: @ref: js-init-v5, @keep: true //
// @INSERTPOINT :: @ref: js-init-once-v5, @keep: true //