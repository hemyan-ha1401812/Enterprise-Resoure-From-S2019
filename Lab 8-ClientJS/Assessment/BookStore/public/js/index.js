document.addEventListener("DOMContentLoaded",async ()=>{
    await handelLoadBooksByCategories(category);
    await handelLoadBooksByBookTitle(bookTitle)
    await handelLoadBooksByAuthor(Author);
    await handelLoadBooksByISBN(isbn)
    await handelLoadBooksByPageCount(pageCount)

    })

async function handelLoadBooksByCategories(category){

    const books = await getBooksByCategory(category);
    const booksText =books.map(books => `<option>displayBook(${books.categories})</option>`).join('<br>')
        document.querySelector("#contentDiv").innerHTML=`<tabe>
<tr>
${booksText}

${booksText}
</tr>
</tabe>`;

}

async function handelLoadBooksByBookTitle(bookTitle){

    const books = await getBooksByName (bookTitle);
    const booksText =books.map(books => `<option>displayBook(${books.title})</option>`).join('<br>')
    document.querySelector("#contentDiv").innerHTML=`<tabe>
<tr>
${booksText}

${booksText}
</tr>
</tabe>`;

}

async function handelLoadBooksByAuthor(Author){

    const books = await getBooksByAuthor (Author);
    const booksText =books.map(books => `<option>displayBook(${books.author})</option>`).join('<br>')
    document.querySelector("#contentDiv").innerHTML=`<tabe>
<tr>
${booksText}

${booksText}
</tr>
</tabe>`;

}


async function handelLoadBooksByISBN(isbn){

    const books = await getBookByISBN (isbn);
    const booksText =books.map(books => `<option>displayBook(${books.isbn})</option>`).join('<br>')
    document.querySelector("#contentDiv").innerHTML=`<tabe>
<tr>
${booksText}

${booksText}
</tr>
</tabe>`;

}

async function handelLoadBooksByPageCount(pageCount){

    const books = await getBooksByPageCount (pageCount);
    const booksText =books.map(books => `<option>displayBook(${books.pageCount})</option>`).join('<br>')
    document.querySelector("#contentDiv").innerHTML=`<tabe>
<tr>
${booksText}

${booksText}
</tr>
</tabe>`;

}










// to display book element
function displayBook(book){
return`
<td> 
<img src="book.img"> <br>
<h2>book.title</h2> <br>
<p>book.description</p> <br>
<input type="button" color="green" value="DETAILS">
<input type="button" color="purple" value="UPDATE">
<input type="button" color="red" value="DELETE">
</td>
`
}


async function getCategories(category){
    try{
    const url = `/api/books?category=${category}`;
    const data = await fetch(url);
    return data.json();
        }catch(e){
        console.log(e);
    }
}
