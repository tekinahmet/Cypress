describe("what is hook?", () => {
  //before() = bf
  before(() => {
    cy.log("before");
  });
  //after() = af
  after(() => {
    cy.log("after");
  });
  //beforeEach() = bfe
  beforeEach(() => {
    cy.log("beforeEach");
  });

  //afterEach() = afe
  afterEach(() => {
    cy.log("afterEach");
  });

  it("test 1", () => {
    cy.log("test 1");
  });
  it("test 2", () => {
    cy.log("test 1");
  });
  it("test 3", () => {
    cy.log("test 1");
  });
});
