3 components:
Client <-> Resource <-> API.

## Verbs/methods

-   GET: Read
-   POST: Create
-   PUT: Edit (replace)
-   PATCH: Edit (modify)
-   DELETE: Delete

## HTTP status codes

-   1xx: Informational
    -   100: Continue
-   2xx: Success

    -   200: OK
    -   201: Accepted
    -   202: Created

    -   204: No Content

-   3xx: Redirection
    -   301: Moved permanently
    -   304: Not Modified
    -
-   4xx: Client error
    -   400: Bad Request
    -   401: Unauthorized
    -   403: Forbidden
    -   404: Not Found
    -   405: Method Not Allowed
    -   409: Conflict
-   5xx: Server error
    -   500: Internal Server Error
    -   502: Bad Gateway
    -   503: Service Unavailable
