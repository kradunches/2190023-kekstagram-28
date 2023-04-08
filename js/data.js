import {getRandomInteger} from './utils.js';

const NAMES = [
  'Саша',
  'Артём',
  'Никита',
  'Иван',
  'Пётр',
  'Никифор',
  'Тихон'
];

const DESCRIPTIONS = [
  'интересная фотография',
  'смешная фотокарточка',
  'забавный перфоманс',
  'потешная картинка',
  'классный снимок',
  'прикольный кадр'
];

const MESSAGES = [
  'просто нет слов, когда я зашел на ваш сайт я так сильно обрадовался что просто нет слов',
  'просто великолепный сайт, я порекомендовал его всем своим друзьям',
  'сказать что этот сайт просто чудо, это ничего не сказать',
  'создатели этого сайта, дай Бог вам здоровья, спасибо большое',
  'после пяти минут на вашем сайте я просто не могу сидеть на других сайтах, невероятный сайт',
  'как я раньше жил без вашего сайта, теперь моя жизнь стала намного прекрасней',
  'смотря на эти ихображения душа радуется',
  'каждый раз открывая комментарии узнаю что то новое для себя',
  'какое смешное фото, мне очень понравилось',
  'очень мило, хочу также'
];

const POSTS_COUNT = 25;

let postId = 1;
let commentId = 1;

const createMessage = (messages) => {
  const message = Array.from({length: getRandomInteger(1, 2)}, () => messages[getRandomInteger(0, messages.length - 1)]);

  return [...new Set(message)].join(' ');
};

const createCommentData = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: createMessage(MESSAGES),
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };

  commentId++;

  return comment;
};

const createPostData = () => {
  const post = {
    id: postId,
    url: `photos/${postId}.jpg`,
    description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(3, 11)}, createCommentData)
  };

  postId++;

  return post;
};

const createPostsDataset = () => Array.from({length: POSTS_COUNT}, createPostData);

export {createPostsDataset};
