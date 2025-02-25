describe("Pizza Sipariş Sayfası Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/siparis-olustur");
  });

  it("Sayfa düzgün yükleniyor", () => {
    cy.contains("Position Absolute Acı Pizza").should("exist");
  });

  it("Zorunlu alanlar boş bırakıldığında hata mesajları gösteriliyor", () => {
    cy.get("button[type='submit']").click();
    cy.contains("* Lütfen bir boyut seçin.").should("be.visible");
    cy.contains("* Lütfen hamur kalınlığı seçin.").should("be.visible");
    cy.contains("* İsim en az 3 karakter içermelidir.").should("be.visible");
  });

  it("Sipariş başarılı şekilde tamamlanıyor", () => {
    cy.get("input[name='boyut'][value='M']").check();
    cy.get("select[name='hamur']").select("Orta");
    cy.get("input[name='isimSoyisim']").type("Sevde Çalışkan");
    cy.get("button[type='submit']").click();
    cy.url().should("include", "/siparis-alindi");
  });

  it("Malzeme seçim limiti çalışıyor", () => {
    cy.get("input[type='checkbox']").each(($el, index) => {
      if (index < 11) {
        cy.wrap($el).check();
      }
    });
    cy.contains("* En fazla 10 malzeme seçebilirsiniz!").should("be.visible");
  });

  it("Adet değiştirme butonları çalışıyor", () => {
    cy.get("button").contains("+").click().click();
    cy.contains("3").should("be.visible");
    cy.get("button").contains("-").click();
    cy.contains("2").should("be.visible");
  });
});
