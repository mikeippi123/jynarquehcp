export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`cards-${cols.length}-cars`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((card) => {
      const pic = card.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}