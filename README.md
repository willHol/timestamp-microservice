# timestamp-microservice
A services which parses and transforms *UNIX or Natural Language dates*.



## Requests

The _API_ can be provided either a **natural language date** in the form: 

`December 7, 1998`

_Alternatively_, you may chose to provide the date as a **UNIX timestamp**:

`912988800`

___

**Requests** may be made as follows:

`https://timestamp-ms.herokuapp.com/December%207,%201998`

`https://timestamp-ms.herokuapp.com/912988800`

The *API* will return the following **JSON response** in both cases:

```json
{
  "unix": 912988800,
  "natural": "December 7, 1998"
}
```


## Testing

To run unit tests type:

`npm test`
