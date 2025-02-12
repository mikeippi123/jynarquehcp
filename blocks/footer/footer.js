import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

  //test
  footer.className = 'desktop-footer';
  // footer.className = 'layout-footer-left';
  // footer.className = 'layout-footer-right';
  // footer.className = 'logo';
  // footer.className = 'div';
  // footer.className = 'div-wrapper';
  // footer.className = 'flexcontainer';
  // footer.className = 'text-i';
  // footer.className = 'text-wrapper';
  // footer.className = 'navigation';
  // footer.className = 'div-2';
  // footer.className = 'nav-item-level';
  // footer.className = 'horizontal-nav-item';
  // footer.className = 'wrapper';
  // footer.className = 'text';
  // footer.className = 'arrow';
  // footer.className = 'text-2';
  // footer.className = 'horizontal-nav-item-2';
  // footer.className = 'nav-item';
  // footer.className = 'text-3';
  // footer.className = 'text-wrapper-2';
  // footer.className = 'text-4';

}
