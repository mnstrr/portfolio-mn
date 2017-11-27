import { Veams } from './app.veams';
import ScrollContainer from './shared/components/scroll-container/scripts/scroll-container';
import ScrollItem from './shared/components/scroll-item/scripts/scroll-item';

// Initialize modules with Veams

Veams.modules.add('scroll-container', ScrollContainer);


Veams.modules.add('scroll-item', ScrollItem);

// @INSERTPOINT :: @ref: js-init-v5, @keep: true //
// @INSERTPOINT :: @ref: js-init-once-v5, @keep: true //
