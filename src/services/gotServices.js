export default class GotService {
    constructor() {
        this._apiBase ="https://www.anapioficeandfire.com/api"
    }

    getResource = async (url) => {//асинхр функция
        const res = await fetch(`${this._apiBase}${url}`);//await - ждем когда выполнится действие
        if(!res.ok) { //если неОк, выводим собственную ошибку
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        const some = await res.json();
        return some;
    }
    //Characters
    getAllCharacters() {//10 персонажей
        return this.getResource("/characters?page=6&pageSize=10");
    }
    getCharacters(id){//персонаж по id
        return this.getResource(`/characters/${id}`);
    }
    //Books
    getAllBooks() {//10 книг
        return this.getResource("/books");
    }
    getBooks(id){//книга по id
        return this.getResource(`/books/${id}`);
    }
    //Houses
    getAllHouses() {//10 домов
        return this.getResource("/houses");
    }
    getHouses(id){//дома по id
        return this.getResource(`/houses/${id}`);
    }
}
