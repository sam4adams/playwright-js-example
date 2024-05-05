const base = require("@playwright/test");
const { TodoPage } = require ("./todo-page");

exports.test = base.test.extend({
    todoPage: async ({ page }, use) => {
        // Set up the fixture
        const todoPage = new TodoPage(page);
        await todoPage.goto();
        await todoPage.addToDo("item1");
        await todoPage.addToDo("item2");

        //use the fixture value in the test
        await use(todoPage);

        //Clean up the fixture
        await todoPage.removeAll();

    },
});
exports.expect = base.expect;