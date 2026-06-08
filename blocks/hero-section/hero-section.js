/**
 * loads and decorates the hero-section block
 * @param {Element} block The block element
 */
export default async function decorate(block) {
  block.closest('.section').classList.add('hero-section');
}
