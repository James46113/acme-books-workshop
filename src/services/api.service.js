const serverLatency = 0;
import allTheBooks from "@/../data/books.json"

export function getBooks () {
    return new Promise((resolve) => {
        resolve(allTheBooks.data);
    });
}