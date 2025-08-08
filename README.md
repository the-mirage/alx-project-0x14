# alx-project-0x14

API Documentation of [MoviesDatabase API](https://rapidapi.com/SAdrian/api/moviesdatabase)

## API Overview

The [MoviesDatabase API](https://rapidapi.com/SAdrian/api/moviesdatabase) provides access to a comprehensive and regularly updated database containing information on over 9 million titles (movies, series, and episodes) and 11 million actors, crew, and cast members. It includes details such as YouTube trailer URLs, awards, full biographies, IMDb details, Metascore ratings, poster images, and more. This API is ideal for developers building applications that require detailed movie, TV show, and actor-related data, such as movie search platforms, streaming guides, or entertainment apps. The API is hosted on RapidAPI, offering a robust interface for querying this extensive dataset.


## API Version

The MoviesDatabase API is actively maintained with up-to-date data, meaning its Version 1 is the most current and stable production version.

## Available Endpoints

The MoviesDatabase API provides several endpoints to query movie, series, episode, and actor data. Below are the key endpoints based on available information:

### Titles

1. **Titles - Multiple**
- **Path**: `/titles`
- **Description**: Returns an array of titles (movies, series, or episodes) based on filters and sorting query parameters provided.
- **Query Parameters**:
  - `list`: Unique query parameter that sets the collection to query (e.g., popular, upcoming, top-rated). Available options are provided by the "Utils - Titles Lists" endpoint.
  - Additional optional parameters for filtering/sorting are supported (see Description of Optional Query Parameters in the API documentation).
- **Model**: `title`
- **Example**: `GET /titles?list=popular` retrieves a list of popular titles.

2. **Titles - By List of IDs**
- **Path**: `/x/titles-by-ids`
- **Description**: Returns an array of titles based on a provided list of title IDs.
- **Query Parameters**:
  - `info`: Optional parameter to specify the level of detail in the response.
  - `list`: Unique query parameter that sets the collection to query. Options are available in the "Utils - Titles Lists" endpoint.
  - `idsList`: Required array of title IDs (must be strings, e.g., `["tt1234567", "tt7654321"]`).
- **Model**: `title`
- **Example**: `GET /x/titles-by-ids?idsList=["tt1234567"]` retrieves details for the specified title IDs.

3. **Title**
- **Path**: `/titles/{id}`
- **Path Parameter (Required)**:
  - `id`: IMDb ID of the title (e.g., `tt1234567`).
- **Description**: Returns details of a specific title based on filters and sorting query parameters provided.
- **Query Parameters**:
  - `info`: Optional parameter to specify the level of detail in the response.
- **Model**: `title`
- **Example**: `GET /titles/tt1234567?info=base_info` retrieves details for a specific title.

4. **Title Rating**
- **Path**: `/titles/{id}/ratings`
- **Path Parameter (Required)**:
  - `id`: IMDb ID of the title (e.g., `tt1234567`).
- **Description**: Returns the rating and number of votes for a specific title.
- **Query Parameters**: None
- **Model**: `rating`
- **Example**: `GET /titles/tt1234567/ratings` retrieves the rating and vote count for the specified title.

5. **Seasons and Episodes**
- **Path**: `/titles/series/{id}`
- **Path Parameter (Required)**:
  - `id`: IMDb ID of the series (e.g., `tt0944947`).
- **Description**: Returns an array of episodes for a series, including only episode ID, episode number, and season number, sorted in ascending order.
- **Query Parameters**: None
- **Model**: `light episode`
- **Example**: `GET /titles/series/tt0944947` retrieves episode details for the specified series.

6. **Seasons Number**
- **Path**: `/titles/seasons/{id}`
- **Path Parameter (Required)**:
  - `id`: IMDb ID of the series (e.g., `tt0944947`).
- **Description**: Returns the number of seasons for the specified series as an integer.
- **Query Parameters**: None
- **Model**: `Integer`
- **Example**: `GET /titles/seasons/tt0944947` returns the total number of seasons for the series.

7. **Episodes IDs By Series ID and Season**
- **Path**: `/titles/series/{id}/{season}`
- **Path Parameters (Required)**:
  - `id`: IMDb ID of the series (e.g., `tt0944947`).
  - `season`: Season number (e.g., `1`).
- **Description**: Returns an array of episodes for the specified season of a series, including only episode ID, season number, and episode number.
- **Query Parameters**: None
- **Model**: `light episode`
- **Example**: `GET /titles/series/tt0944947/1` retrieves episode details for season 1 of the specified series.

8. **Episode**
- **Path**: `/titles/episode/{id}`
- **Path Parameter (Required)**:
  - `id`: IMDb ID of the episode (e.g., `tt0951234`).
- **Description**: Returns details of a specific episode based on filters and sorting query parameters provided.
- **Query Parameters**:
  - `info`: Optional parameter to specify the level of detail in the response.
- **Model**: `title`
- **Example**: `GET /titles/episode/tt0951234?info=base_info` retrieves details for a specific episode.

9. **Upcoming Titles**
- **Path**: `/titles/x/upcoming`
- **Description**: Returns an array of upcoming titles based on filters and sorting query parameters provided.
- **Query Parameters**: Multiple optional parameters for filtering/sorting (see Description of Optional Query Parameters in the API documentation).
- **Model**: `title`
- **Example**: `GET /titles/x/upcoming` retrieves a list of upcoming titles.

### Search

1. **Titles by Keyword**
- **Path**: `/titles/search/keyword/{keyword}`
- **Path Parameter (Required)**:
  - `keyword`: Keyword to search for in titles.
- **Description**: Returns an array of titles based on the provided keyword and additional filters/sorting query parameters.
- **Query Parameters**: Multiple optional parameters for filtering/sorting (see Description of Optional Query Parameters in the API documentation).
- **Model**: `title`
- **Example**: `GET /titles/search/keyword/inception` retrieves titles related to the keyword "inception".

2. **Titles by Title**
- **Path**: `/titles/search/title/{title}`
- **Path Parameter (Required)**:
  - `title`: A title or part of a title to search for.
- **Description**: Returns an array of titles based on the provided title (or partial title) and additional filters/sorting query parameters.
- **Query Parameters**:
  - `exact`: Unique query parameter to specify if the search should match the title exactly (default: `false`).
  - Multiple optional parameters for filtering/sorting (see Description of Optional Query Parameters in the API documentation).
- **Model**: `title`
- **Example**: `GET /titles/search/title/inception?exact=true` retrieves titles exactly matching "inception".

3. **Titles by AKA**
- **Path**: `/titles/search/akas/{aka}`
- **Path Parameter (Required)**:
  - `aka`: An alias (AKA) of a title (exact match only, case-sensitive).
- **Description**: Returns an array of titles based on the provided AKA and additional filters/sorting query parameters. Works only for exact matches.
- **Query Parameters**: Multiple optional parameters for filtering/sorting (see Description of Optional Query Parameters in the API documentation).
- **Model**: `title`
- **Example**: `GET /titles/search/akas/The Dark Knight` retrieves titles with the exact AKA "The Dark Knight".

### Actors

1. **Actors**
- **Path**: `/actors`
- **Description**: Returns an array of actors based on the provided filters.
- **Query Parameters**:
  - `limit`: Specifies the maximum number of actors to return.
  - `page`: Specifies the page number for paginated results.
- **Model**: `actor`
- **Example**: `GET /actors?limit=20&page=1` retrieves a list of up to 20 actors on the first page.

2. **Actor By ID**
- **Path**: `/actors/{id}`
- **Path Parameter (Required)**:
  - `id`: IMDb ID of the actor (e.g., `nm0000138`).
- **Description**: Returns detailed information about a specific actor.
- **Query Parameters**: None
- **Model**: `actor`
- **Example**: `GET /actors/nm0000138` retrieves details for the actor with the specified IMDb ID.

### Utils

1. **Title Type**
- **Path**: `/title/utils/titleType`
- **Description**: Returns an array of available title types (e.g., movie, series, episode).
- **Query Parameters**: None
- **Model**: Array of strings
- **Example**: `GET /title/utils/titleType` retrieves a list of title types.

2. **Genres**
- **Path**: `/title/utils/genres`
- **Description**: Returns an array of available genres (e.g., Action, Drama, Comedy).
- **Query Parameters**: None
- **Model**: Array of strings
- **Example**: `GET /title/utils/genres` retrieves a list of genres.

3. **Titles Lists**
- **Path**: `/title/utils/lists`
- **Description**: Returns an array of available lists for the `list` query parameter used in other endpoints (e.g., popular, top-rated).
- **Query Parameters**: None
- **Model**: Array of strings
- **Example**: `GET /title/utils/lists` retrieves a list of available collections for querying titles.












## Request and Response Format

### Request Format:

* **HTTP Method**: GET
* **Base URL**: `https://moviesdatabase.p.rapidapi.com`
* **Query Parameters**: All query parameters are optional and vary by endpoint. For example, the `/titles` endpoint supports filters like `list`, while `/x/titles-by-ids` requires `idsList`. Parameters are passed as URL query strings.
* **Headers**:
    * `X-RapidAPI-Key`: Your unique API key for authentication.
    * `X-RapidAPI-Host`: `moviesdatabase.p.rapidapi.com`

**Example Request:**

```bash
curl --request GET \
     --url 'https://moviesdatabase.p.rapidapi.com/titles?list=popular' \
     --header 'X-RapidAPI-Key: YOUR_API_KEY' \
     --header 'X-RapidAPI-Host: moviesdatabase.p.rapidapi.com'
```
### Response Format:

* **Content-Type:** JSON
* **Structure:** Every endpoint returns a JSON object with a results key containing the primary data (e.g., an array of titles or actor details). For paginated endpoints, additional keys include:
    * `page`: Current page number.
    * `next`: URL or indicator for the next page (if available).
    * `entries`: Total number of entries in the response.

**Example Response** (for `/titles`):

```json
{
  "results": [
    {
      "id": "tt1234567",
      "title": "Example Movie",
      "year": 2023,
      "type": "movie",
      "poster": "https://example.com/poster.jpg",
      "trailer": "https://youtube.com/watch?v=abc123",
      "awards": "Nominated for 2 Oscars",
      "metascore": 85
    },
    ...
  ],
  "page": 1,
  "next": "/titles?list=popular&page=2",
  "entries": 20
}
```


## Authentication

The MoviesDatabase API uses API key-based authentication via RapidAPI. To access the API:
1. Sign Up: Create an account on RapidAPI to obtain a free API key.
2. Include API Key in Requests: Add the X-RapidAPI-Key header with your API key in every request.
3. Host Header: Include the X-RapidAPI-Host header set to moviesdatabase.p.rapidapi.com.

**Example Headers:**
```http
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```
Requests return `401 Unauthorized` error when you use an invalid API key. 
*Note*: Ensure your API key is kept secure and not shared publicly.


## Error Handling

The API follows standard HTTP status codes for error handling. Common error scenarios include:
* 400 Bad Request: Invalid or missing query parameters (e.g., incorrect `idsList` format in `/x/titles-by-ids`).
* 401 Unauthorized: Missing or invalid `X-RapidAPI-Key`.
* 429 Too Many Requests: Exceeded the usage limit for your subscription plan.
* 500 Internal Server Error: Server-side issues (rare, but possible).

**Example Error Response:**
```json
{
  "error": {
    "code": 401,
    "message": "Invalid API key"
  }
} 
```

## Usage Limits and Best Practices

### Usage Limits:

* The MoviesDatabase API is subject to RapidAPI’s subscription-based quotas. The free plan typically includes a limited number of requests per day. Paid plans offer higher quotas.
* Exceeding the quota results in a 429 Too Many Requests error.

### Best Practices

* Cache Responses: Cache frequently accessed data (e.g., popular titles) to reduce API calls and improve performance, as the data is relatively stable.
* Optimize Queries: Use specific filters (e.g., list or idsList) to retrieve only the data you need, minimizing payload size.
* Handle Pagination: For endpoints like /titles, use the page and next keys to navigate large datasets efficiently.
* Rate Limiting: Implement exponential backoff for retries if you receive a 429 error to avoid overwhelming the server.
* Secure API Key: Store your API key securely (e.g., in environment variables) and avoid exposing it in client-side code.
* Monitor Usage: Regularly check your RapidAPI dashboard to track request usage and avoid hitting quota limits.

For additional details or to explore the API interactively, visit https://rapidapi.com/SAdrian/api/moviesdatabase/.

