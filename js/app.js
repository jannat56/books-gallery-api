// Loading the API
const loadBooks = () => {
    const searchField =  document.getElementById('search');
    const searchText = searchField.value;
    searchField.value = '';
    
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then (res => res.json())
    .then (data => displayBooks(data.docs, data.numFound))
    
}


//  Display data 
    const displayBooks = (books,dataNumber) => {
    const booksContainer = document.getElementById('books');

    if(dataNumber === 0)
                        {
        const dataFound = document.getElementById('data-found');
        dataFound.innerHTML = `<p> No results found </p>`;
        booksContainer.textContent='';
    }

 else
     {    

        const dataFound = document.getElementById('data-found');
        dataFound.innerHTML = `<p> About ${dataNumber} results found </p>`;
        booksContainer.textContent='';


        books.forEach(book => {
       
        const imgUrlMedium = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        const title = book.title.slice(0,20);
        const author = book.author_name;
        const publisher = book.publisher;
        const publishedYear = book.first_publish_year;

        const newDiv = document.createElement('div');
        newDiv.classList.add('mx-auto');
        newDiv.classList.add('mb-6');
        
        newDiv.innerHTML = `
        <div class="card w-72" >
        <img src="${imgUrlMedium}" class="card-img-top  object-cover h-72 w-full" alt="...">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <h6 class="author">Author: ${author}</h6>
        <h6 class="publisher">Published by ${ publisher ? publisher: "not found" }</h6>
        <h6 class="publish-year">Published year: ${ publishedYear ? publishedYear: "not found"}</h6>`;

         booksContainer.appendChild(newDiv);
        
    });
        }

    }