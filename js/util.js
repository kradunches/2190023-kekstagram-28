import { DESCRIPTIONS, COMMENTS, NAMES } from './data.js';

const randomInteger = function (min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const randomArrayElement = (elements) => elements[randomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: randomInteger(1, 2) }, () =>
    randomArrayElement(COMMENTS));

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${randomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: randomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: randomArrayElement(DESCRIPTIONS),
  likes: randomInteger(15, 200),
  comments: Array.from(
    { length: randomInteger(0, 9) }, createComment
  ),
});

const getPictures = () =>
  Array.from({ length: 25 }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1));

export { getPictures, isEscapeKey };
