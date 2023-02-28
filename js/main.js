const DESCRIPTIONS = [
  'интересная фотография',
  'смешная фотокарточка',
  'забавный перфоманс',
  'потешная картинка',
  'классный снимок',
];

const COMMENTS = [
  'просто нет слов, когда я зашел на ваш сайт я так сильно обрадовался что просто нет слов',
  'просто великолепный сайт, я порекомендовал его всем своим друзьям',
  'сказать что этот сайт просто чудо, это ничего не сказать',
  'создатели этого сайта, дай Бог вам здоровья, спасибо большое',
  'после пяти минут на вашем сайте я просто не могу сидеть на других сайтах, невероятный сайт',
  'как я раньше жил без вашего сайта, теперь моя жизнь стала намного прекрасней',
];

const NAMES = [
  'Саша',
  'Артём',
  'Никита',
  'Иван',
  'Пётр',
  'Никифор',
  'Тихон',
];

const randomInteger = function (min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const randomArrayElement = (elements) => elements[randomInteger(0, elements.length - 1)];

const createDescription = () => ({
  id: randomInteger(1, 25),
  url: `photos/${randomInteger(1, 25)}.jpg`,
  description: randomArrayElement(DESCRIPTIONS),
  likes: randomInteger(15, 200),
  comments:
  {
    id: randomInteger(1, 2500),
    avatar: `img/avatar/${randomInteger(1, 6)}.svg`,
    message: randomArrayElement(COMMENTS),
    name: randomArrayElement(NAMES)
  }
});

const descriptions = Array.from({ length: 4 }, createDescription);

console.log(descriptions);
