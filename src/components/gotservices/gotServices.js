export default class GotServices {
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
    async getAllCharacters() {//10 персонажей
        const res = await this.getResource("/characters?page=6&pageSize=10");
        return res.map(this._transformCharacter)
    }
    async getCharacters(id){//персонаж по id
        const char = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(char);
    }
    //Books
    async getAllBooks() {//10 книг
        return this.getResource("/books");
    }
    async getBooks(id){//книга по id
        return this.getResource(`/books/${id}`);
    }
    //Houses
    async getAllHouses() {//10 домов
        return this.getResource("/houses");
    }
    async getHouses(id){//дома по id
        return this.getResource(`/houses/${id}`);
    }

    _transformCharacter(char){
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestraWeapons: house.ancestraWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }

}
