import { showBigPicture } from './big-picture.js';

const miniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createMiniature = ({ comments, description, likes, url, id }) => {
  const miniature = miniaturesTemplate.cloneNode(true);

  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__img').alt = description;
  miniature.querySelector('.picture__comments').textContent = comments.length;
  miniature.querySelector('.picture__likes').textContent = likes;
  miniature.dataset.miniatureId = id;

  return miniature;
};

const renderMiniatures = (pictures) => {
  container.addEventListener('click', (e) => {
    const miniature = e.target.closest('[data-miniature-id]');
    if (!miniature) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +miniature.dataset.miniatureId
    );
    showBigPicture(picture);
  });
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const miniature = createMiniature(picture);
    fragment.append(miniature);
  });

  container.append(fragment);
};

export { renderMiniatures };
