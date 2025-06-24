export default function decorate(block) {
  [...block.children].forEach((row) => {
    if (block.className.includes('fifty-fifty')) row.className = 'fifty-fifty';
    if (block.className.includes('forty-sixty')) row.className = 'forty-sixty';
    if (block.className.includes('sixty-forty')) row.className = 'sixty-forty';
    const imgoverlay = document.createElement('div');
    imgoverlay.classList.add('image-overlay');
    [...row.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'teaser-image';
      else imgoverlay.append(div);
    });
    row.append(imgoverlay);
  });
}
