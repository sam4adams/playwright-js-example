const { test, expect } = require("./pages");

test("basic test", async ({ todoPage, page }) => {
    await todoPage.addToDo("something nice");
    await expect(page.getByTestId("todo-title")).toContainText([
        "something nice",
    ])
});