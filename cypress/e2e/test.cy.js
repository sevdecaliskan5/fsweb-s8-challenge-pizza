describe("Pizza Sipariş Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/");
  });

  it("Formdaki tüm elemanların doğru şekilde yüklendiğini kontrol eder", () => {
    cy.get('[data-cy="isim-soyisim"]').should("be.visible");
    cy.get('[data-cy="pizza-boyut-kucuk"]').should("be.visible");
    cy.get('[data-cy="pizza-boyut-orta"]').should("be.visible");
    cy.get('[data-cy="pizza-boyut-buyuk"]').should("be.visible");
    cy.get('[data-cy="malzemeler"]').should("be.visible");
    cy.get('[data-cy="siparis-ver"]').should("be.visible");
  });

  it("İsim-soyisim 3 karakterden az girildiğinde hata mesajı gösterir", () => {
    cy.get('[data-cy="isim-soyisim"]').type("Ab");
    cy.get('[data-cy="siparis-ver"]').click();
    cy.contains("* İsim en az 3 karakter içermelidir.").should("be.visible");
  });

  it("Boyut seçilmeden form gönderilemediğini kontrol eder", () => {
    cy.get('[data-cy="isim-soyisim"]').type("Ali Veli");
    cy.get('[data-cy="siparis-ver"]').click();
    cy.contains("* Lütfen bir boyut seçin.").should("be.visible");
  });

  it("En fazla 10 malzeme seçilebildiğini doğrular", () => {
    for (let i = 0; i < 11; i++) {
      cy.get(`[name="${malzemeler[i].name}"]`).check({ force: true });
    }
    cy.contains("* En fazla 10 malzeme seçebilirsiniz!").should("be.visible");
  });
});
