import JsConfuser from "../../src/index";

it("should result in the same order", async () => {
  var code = `
    var TEST_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    input(TEST_ARRAY);
  `;

  var output = await JsConfuser(code, {
    target: "browser",
    shuffle: true,
  });

  var value;
  function input(valueIn) {
    value = valueIn;
  }

  eval(output);

  expect(value).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
it("should properly shuffle arrays within expressions", async () => {
  var code = `
    input([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  `;

  var output = await JsConfuser(code, {
    target: "browser",
    shuffle: true,
  });

  var value;
  function input(valueIn) {
    value = valueIn;
  }

  eval(output);

  expect(value).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});