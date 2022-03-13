const fetchData = async (param) => {
  
  if(param){
    // console.log("ini param", param.query)
  }
  const queryId = () => {
    if(param.query) {
      return param.query
    }
  }
  const query = `
    query ($id: Int, $page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          perPage
        }
        media(id: $id,  type: ANIME, sort: FAVOURITES_DESC) {
          id
          title {
            romaji
            english
            native
          }
          type
          genres
          seasonYear
          episodes
          averageScore
          description
        }
      }
    }
  `;

// Define our query variables and values that will be used in the query request
  let variables = {
    page: 1,
    id :  param.paramId || queryId()
    
  };

  // Define the config we'll need for our Api request

  let url = 'https://graphql.anilist.co',
  options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify({
          query: query,
          variables: variables
      })
  };

  // Make the HTTP Api request
  fetch(url, options).then(handleResponse)
                    .then(handleData)
                    .catch(handleError);

  function handleResponse(response) {
      return response.json().then(function (json) {
          return response.ok ? json : Promise.reject(json);
      });
  }

  function handleData(data) {
    // console.log("tes data",data.data.Page.media);
    param.setData(data.data.Page.media)
  }

  function handleError(error) {
      alert('Error, check console');
      console.error(error);
  }
}

export default fetchData
