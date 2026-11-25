
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { validationResult } = require("express-validator");
const playlistValidator = require("../modules/playlist/playlistValidator");

async function validateTitle(title) {
    const req = {
        body: {
            title,
            description: ""
        }
    };

    await Promise.all(
        playlistValidator.createPlaylist.map(validation => validation.run(req))
    );

    return validationResult(req);
}

test("deve rejeitar título composto somente por números", async () => {
    const result = await validateTitle("12345");

    assert.equal(result.isEmpty(), false);
    assert.ok(
        result.array().some(error => error.msg === "O título deve conter pelo menos uma letra.")
    );
});

test("deve aceitar título com letras e números", async () => {
    const result = await validateTitle("Rock 2026");

    assert.equal(result.isEmpty(), true);
});

test("deve aceitar título composto por letras", async () => {
    const result = await validateTitle("Minha playlist");

    assert.equal(result.isEmpty(), true);
});
