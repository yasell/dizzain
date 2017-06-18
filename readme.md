#### test template with Gulp

installation:
- `git clone git@github.com:yasell/start-template.git`
- `npm install`

#### Usecases

Start project:
- `npm start`

Final build:
- `npm run build`

Validation html:
- `npm run validation`

Style linting:
-  `npm run csslint`

#### Парадигма

- Нэйминг классов по БЭМ (block__element--modificator).
- Директория разработки `app/` Все файлики интуитивно по папкам: js, img, sass (переменные, глобальная стилизация, стили блоков).
- Диспетчер подключений стилей - `app/sass/style.scss`. Все указанные там файлы, компайлятся в один итоговый `style.css`.
- Итоговый HTML собирается из кусочков (лежат в `app/html/_includes` и подключены на индекс страничке).
- Каждому блоку на страничке соответствует одноименный файл `html` и `scss`.
- Для стилей: CSS линтер здесь - `stylelint` (использую в Атоме, конфиг есть); минификатор/оптимизатор - `csso`.
- Слайдеры/Галерея у меня - это [swiper](http://idangero.us/swiper/api/#.WUbdK2iLTIU). Только галерея оказалась сильно глючной, не стал с ней разбираться; в любом другом случае подключал бы что-нибудь другое...
- Дата-пикер календарь у меня - "тяжеловесный" [w2ui](http://w2ui.com/web/demo/form). Можно было бы что-нибудь попроще...из jquery-ui например...
