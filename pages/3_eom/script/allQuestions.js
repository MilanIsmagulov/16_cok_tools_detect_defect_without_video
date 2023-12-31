// Массив с вопросами. Не Зашифрован :)

let themeName = "Диагностические приборы и оборудование";
let testFlag = true;

let allQuestions = [
    {
        type: 1,    // Тип вопроса с несколькими верными ответами
        price: 100, // Цена вопроса
        text: 'К измерительным прибором относятся:',  // Текст вопроса
        answers: ['Манометры', 'Интеграторы', 'Счетчики', 'Тахометры', 'Гальванометры'],  // Варианты ответов
        correctAnswer: [0,3,4], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 0,    // Тип вопроса с одним верным ответом
        price: 100, // Цена вопроса
        text: 'Какой прибор позволяет изменять величину определенного параметра в соответствии с заранее заданной программой?',    // Текст вопроса
        answers: ['Измерительный', 'Счетный', 'Контрольный', 'Управляющий'], // Варианты ответов
        correctAnswer: [3], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 1,    // Тип вопроса с несколькими верными ответами
        price: 100, // Цена вопроса
        text: 'К методам магнитного контроля относятся:', // Текст вопроса
        answers: ['термоэлектрический', 'магнитнопорошковый', 'индукционный', 'емкостный', 'феррозондовый'], // Варианты ответов
        correctAnswer: [1,2,4], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 2,    // Тип вопроса с заполнением пропусков
        price: 150, // Цена вопроса
        text: 'Вставьте пропущенное слово',  // Текст вопроса
        textDd: "| - измерительный прибор, позволяющий с высокой точностью измерить толщину материала или слоя покрытия материала.",
        answers: [["толщиномер", "глубиномер", "длиномер"]],  // Варианты ответов
        correctAnswer: [0], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 2,    // Тип вопроса с заполнением пропусков
        price: 150, // Цена вопроса
        text: 'Вставьте пропущенное слово',    // Текст вопроса
        textDd: "Виды технического контроля: | и неразрущающий.",
        answers: [["разрущающий", "механический", "визуальный"]], // Варианты ответов
        correctAnswer: [0], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 2,    // Тип вопроса с заполнением пропусков
        price: 150, // Цена вопроса
        text: 'Вставьте пропущенное слово', // Текст вопроса
        textDd: "| - каждое отдельное несоответствие продукции требованиям.",
        answers: [["дефект", "недостаток", "изъян"]], // Варианты ответов
        correctAnswer: [0], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 5,    // Тип вопроса - распределение элементов в соответствии с предложенной последовательностью
        price: 200, // Цена вопроса
        text: 'Расположите в последовательности основные функциональные элементы прибора.',  // Текст вопроса
        answers: ["Передаточные элементы", "Источник информации", "Чувствительные элементы", "Средства отображения информации"], // Элементы для распределения
        correctAnswer: [1,2,0,3],    // Последовательность верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 0,    // Тип вопроса - закрытый вопрос с одним верным ответом
        price: 200, // Цена вопроса
        text: 'При какой глубине применяют вихретоковую дефектоскопию для обнаружения поверхностных дефектов на металлических изделиях?',  // Текст вопроса
        answers: ["более 0,1 мм", "более 1 мм", "менее 0,1 мм", "более 5 м"], // Варианты ответов
        correctAnswer: [0],    // Индекс верного ответа в массиве ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 0,    // Тип вопроса - закрытый вопрос с одним верным ответом
        price: 200, // Цена вопроса (примерно, вы можете корректировать)
        text: 'Какой контроль осуществляется при помощи данной установки?',  // Текст вопроса
        image: true, // Указывает на наличие изображения у вопроса
        answers: [
            "Ультразвуковой", 
            "Рентгеновский", 
            "Вихретоковый", 
            "Магнитопорошковый", 
            "Тепловизионный"
        ], // Варианты ответов
        correctAnswer: [0],    // Индекс верного ответа в массиве ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
	{
        type: 3, 
        price: 250,
        text: 'Соотнесите названия приборов с их изображениями ',
        image: true, 
        answers: ["Тепловизор","Толщиномер","Видеоэндоскоп"],
        correctAnswer: [2,0,1],
        answered: null,
    },
	{
        type: 3, 
        price: 250,
        text: 'Соотнесите элементы структуры прибора с их назначением',
        image: true, 
        answers: ["Передаточные","Чувствительные","Средства отображения"],
        correctAnswer: [0,2,1],
        answered: null,
    },
	{
        type: 3, 
        price: 250,
        text: 'Соотнесите вид прибора с его изображением',
        image: true, 
        answers: ["Измерительный прибор","Контрольный прибор","Регулирующий прибор"],
        correctAnswer: [1,2,0],
        answered: null,
    },
	{
		type: 5,    // Тип вопроса - распределение элементов в соответствии с предложенной последовательностью
		price: 300, // Цена вопроса
		text: 'Расположите в правильном порядке ваши действия, если нулевая отметка на барабане микрометрического инструмента не совпадает с соответствующим делением шкалы на стрежне.',  // Текст вопроса
		answers: [
			"Установить барабан в необходимое положение",
			"Снять барабан, потянув его по направлению к скобе",
			"Вернуть головку в исходное положение и зафиксировать",
			"Головку устройства отвернуть на 1 – 2 оборота"
		], // Элементы для распределения
		correctAnswer: [3, 1, 0, 2],    // Последовательность верных ответов
		answered: null, // Флаг, ответили ли на этот вопрос
	},
	{
		type: 0,    // Тип вопроса - закрытый вопрос с одним верным ответом
		price: 300, // Цена вопроса (примерно, вы можете корректировать, если потребуется)
		text: 'Как называется эта группа диагностических инструментов?',  // Текст вопроса
		image: true, // Указывает на наличие изображения у вопроса
		answers: [ 
			"Калибры", 
			"Глубиномеры", 
			"Манометры", 
			"Рулетки",
			"Толщиномеры",
		], // Варианты ответов
		correctAnswer: [4],    // Индекс верного ответа в массиве ответов
		answered: null, // Флаг, ответили ли на этот вопрос
	},
	{
		type: 5,    // Тип вопроса - распределение элементов в соответствии с предложенной последовательностью
		price: 300, // Цена вопроса
		text: 'Расположите в правильном порядке ваши действия при проведении магнитопорошкового контроля.',  // Текст вопроса
		answers: [
			"Нанесение на деталь магнитного порошка или суспензии",
			"Подготовка детали к контролю",
			"Осмотр детали",
			"Намагничивание детали",
			"Размагничивание",
			"Разбраковка"
		], // Элементы для распределения
		correctAnswer: [1,3,0,2,5,4],    // Последовательность верных ответов
		answered: null, // Флаг, ответили ли на этот вопрос
	}
];

