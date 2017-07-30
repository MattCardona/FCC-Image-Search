Image-Search-Abstraction-Layer
==============================

1.You can pass a value after the /api/imagesearch/. Example search for a yorkie, you will pass this https://image-gcsearch-engine-abstract.herokuapp.com/api/imagesearch/yorkie . It will search for images related to your search, and it will return you a JSON response that will contain a images URLs, snippet, thumbnail, and context for a given search. You are also allowed to pass "?offset=" at the end of the url to paginate through the responses. Example https://image-gcsearch-engine-abstract.herokuapp.com/api/imagesearch/yorkie?offset=2

2.You can also pass /api/latest/imagesearch after the url and get back the 5 last recent searches, the search term and the time they searched.

Example usage:

[https://image-gcsearch-engine-abstract.herokuapp.com/api/imagesearch/yorkie?offset=2](https://image-gcsearch-engine-abstract.herokuapp.com/api/imagesearch/yorkie?offset=2)

[https://image-gcsearch-engine-abstract.herokuapp.com/api/latest/imagesearch](https://image-gcsearch-engine-abstract.herokuapp.com/api/latest/imagesearch)

Example output:

:thumbsup: [
    {
        "url": "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
        "snippet": "Cat Images · Pexels · Free Stock Photos",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1gyfoLrqcuU-k9NLR8njIcjpIqiVxIDWr8M7FZEOCATGgDSQrxX8EFo",
        "context": "https://www.pexels.com/search/cat/"
    },
    {
        "url": "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572720.jpg",
        "snippet": "Cat - Free images on Pixabay",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24dDUovcRNeIUxHSk164w7IK_-vlqfSeac4hWkh8KCv6Zs32kuOFlb6M",
        "context": "https://pixabay.com/en/photos/cat/"
    }
    ]

:thumbsdown: Zero result please type another search.

Example Output for Latest:

:thumbsup:
   [
      {"search":"run","createdAt":"2017-07-30T20:25:10.476Z"},
      {"search":"yorkie","createdAt":"2017-07-30T20:38:29.796Z"}
      ]

Project can be found at: https://image-gcsearch-engine-abstract.herokuapp.com

Created By Matt C. Copyright &copy; 2017