define({
  "urlBase": "/Foo/Bar",
  "root": {
    "el": "alpha",
    "default": 11,
    "type": "primary",
    "child": {
      "el": "bravo",
      "default": 21,
      "type": "secondary",
      "child": {
        "el": "charlie",
        "default": 31,
        "type": "tertiary",
              "child": {
        "el": "delta",
        "default": 41,
        "type": "quadruary",
            "child": {
              "el": "echo",
              "default": null,
              "type": "quinary"
              }
        }
      }
    }
  }
});