#### test template with Gulp

installation:
- `git clone git@github.com:yasell/start-template.git`
- `npm install`

#### Usecases

Start project:
- `npm start`

Summary build:
- `npm run build`

Create svg-sprite:
- `npm run sprite`
- все svg иконки из `app/img/icons` соберутся в спрайтик `sprite.svg` в папкe `sprite`
- в `sass/helpers/` появится файлик со стилями для иконок `_sprite.scss`
- вставляем нужную иконку как
```
<svg class="icon  icon-cross">
  <use xlink:href="img/icons/sprite/sprite.svg#cross"></use>
</svg>
```

Validation html:
- `npm run validation`

Style linting:
-  `npm run csslint`

#### Парадигма

- Нэйминг классов по БЭМ (block__element--modificator).
- Директория разработки `app/` Все файлики по папкам: js, fonts, img, sass (переменные, глобальная стилизация, стили блоков).
- Диспетчер подключений стилей - `app/sass/style.scss`. Все указанные там файлы, компайлятся в один итоговый `style.css`.
- HTML можно собирать из кусков (базовые хедер/футер уже лежат в `app/html/layout` и подключены к стартовой страничке).
- Для стилей: CSS линтер здесь - `stylelint` (использую в Атоме, конфиг есть); минификатор/оптимизатор - `csso`.
- Проверить актуальность и обновить `package.json` и все зависимости можно введя в консоль: `ncu -u`.
