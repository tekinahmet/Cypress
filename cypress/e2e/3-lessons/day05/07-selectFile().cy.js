describe("selectFile()", () => {
  it("selectFile()", () => {
    cy.visit("https://www.webdriveruniversity.com/File-Upload/index.html");

    //selectFile() methodu ile dosya yukleme
    //cy.get("#myFile").selectFile("package.json");

    //action: "drag-drop" ile dosya yukleme
    cy.get("#myFile").selectFile("package.json", { action: "drag-drop" });
  });
});
