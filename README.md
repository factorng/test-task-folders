# Li@iL тестовое задание JS-разработчик
## Построить и вывести в виде web-страницы дерева n-ой вложенности:
- Состав строк: название (стоимость)
- Данные: Приходит по rest api стек данных в формате json.
- Описание состава данных:
```
{
    "services": [
        {
            "id": int,
            "head": int,
            "name": str,
            "node": int,
            "price": float,
            "sorthead": int
        }
    ]
}
```
- head = id вышележащего узла (null означает, что услуга находится в корневом узле)
- node = флаг “узел дерева” (1-узел, 0-лист)
- В рамках одного слоя нужно выводить строки в порядке возрастания показателя sorthead.
