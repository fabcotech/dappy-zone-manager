import React from 'react';

const zone = `{
  "origin": "bobby52",
  "ttl": 3600,
  "records": [
    { "name": "@", "type": "TXT", "data": "OWNER=04ea33c48dff95cdff4f4211780a5b151570a9a2fac5e62e5fa545c1aa5be3539c34d426b046f985204815964e10fcd1d87ef88d9bcf43816ad1fa00934cfe4652" },
    {
      "name": "@",
      "type": "A",
      "data": "127.0.0.1"
    },
    {
      "type": "CERT",
      "name": "@",
      "data": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUMzekNDQWNlZ0F3SUJBZ0lVTVdrOFg0L3V1WDJuR21ZbGZBUlBlc0N2aGtFd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0ZERVNNQkFHQTFVRUF3d0piRzlqWVd4b2IzTjBNQ0FYRFRJeU1EWXdOakl3TWpFME1sb1lEekl4TURRdwpOekkyTWpBeU1UUXlXakFVTVJJd0VBWURWUVFEREFsc2IyTmhiR2h2YzNRd2dnRWlNQTBHQ1NxR1NJYjNEUUVCCkFRVUFBNElCRHdBd2dnRUtBb0lCQVFEaHQ2Wi9sdjFublM1WkpMd3EvY2xaZlFHV3Vrc0JhMGx1ZGREOWJMWTgKWFhLZXdUejFqWW5QV01GVE95cnByejV4S2x3Y1JLTElwa2J4VGRsTVhvaHdtdW9xU0wveFpaY09hSzRnUTlucgpwbGNtdU5VSmpZWTJGYWNEM3J1T3VBa1ZyR2F1Q01SdmlFVmpScVdIdEM5OHZNN2hFWnJmdFI3RkVUc0lqNlcwCmFVMWFTY2NYcW1RU0pUL1pCYmcydDczTGJkeWREb1pIR3hVYVl6OHF6WmFNWVRkcS9ZdEo2UkkvaFdCVHdtYjUKc3o5L3ZvY1I3dXNieGRGUG5Qc2RBVVBQbTM4Mllqa2VKWkczRmtzMGxkMWdZMXREckl6S2xCS2hWOTcxMnFzdwoyL2taSDE5ZitmNnFPUVJoYnlsa3ZuaEZpZGFJbU1nNndFNllNcmEzUUN5WEFnTUJBQUdqSnpBbE1DTUdBMVVkCkVRUWNNQnFDQ0dJeVluQnZkMlZ5Z2c1aU1tSndiM2RsY2k1a1lYQndlVEFOQmdrcWhraUc5dzBCQVFzRkFBT0MKQVFFQVM5VmM4OVQ3OHRvSEZFVXJTY24xMXZoMC9hVUFwanVwUXlkbXhmZmlDUkpDNE1aSXBPSDgvNjFGRFZKTAoycjJkNTZKZ0NTNllzVUViN2IxNjZqcUxCb3ROZU9TL0x5UUpUV2JkM0NzdmxscHFjaHlEZkg0eU9zUWtRcTNxCnh6NkowNXJTU2EvVHZ4bmI5OUY4QUZMNGZTSHpGMXhhQ1dGWXJwNzBkR3hvS2lHRXVLdmRGVFVRSk9ZblE0VVMKQit1c2ZtVWM2a2JWRmxLSDUwYzZJNzJmMTV2bmIxUWU5MDhzYlhNODVWNmNHTVIvcjBmNnJxK2huUVQrcy9VUwpoSUFtK2Q4dEJoUmRNM0FuaEgrOTc4dFN6bDA1ejlCa2g4VGJVeVVZay8zdnNEU3BiZFRMWWhmWUZ3NldHVC9oCmdTYWRHL0k3SXphaE9VSFJlNFVvY3JwTFhnPT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQ=="
    }
  ]
}`;

export class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zone: undefined,
    };
  }

  onLoadZone = () => {
    /* this.setState({
      zone: undefined
    }) */
  }

  render() {
    return <div>
      <button onClick={this.onLoadZone}>Load zone</button>
    </div>
  }
}
