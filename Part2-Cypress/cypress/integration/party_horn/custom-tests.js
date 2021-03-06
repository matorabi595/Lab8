describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html')

  });

  it('First Test', () => {
   expect(true).to.equal(true);
  });

it('volume input changes when slider changes', () => {
  cy.get('#volume-slider').invoke('val', 33).trigger('input');
  cy.get('#volume-number').then ($el =>{
    expect($el).to.have.value(33)
  })
});

  it('Slider changes when volume input changes', () => {
    cy.get("#volume-number").clear().type('75')
    cy.get("#volume-slider").then(($el) => {
      expect($el).to.have.value(75)
    });
  });


  it('volume changes when slider input changes', () => {
    cy.get("#volume-slider").invoke('val', 33).trigger('input')
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.prop('volume', 0.33)
    });
  });

  it('image and sound sources change when select party horn', () => {
    cy.get("#radio-party-horn").click();
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3")
    });
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.prop("src", "http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg")
    })
  });


  it('image changes when increasing volumes', () => {
    cy.get("#volume-slider").invoke('val', 33).trigger('input')
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg")
    });

    
    cy.get("#volume-slider").invoke('val', 0).trigger('input')
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg")
    });

     
    cy.get("#volume-slider").invoke('val', 67).trigger('input')
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg")
    });
  
  
    cy.get("#volume-slider").invoke('val', 34).trigger('input')
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.prop("src","http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg")
    });
  });


  it('Honk-button disabled when the input is empty', () => {
    cy.get("#volume-number").clear()
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.prop('disabled')
    });

    cy.get("#volume-number").clear().type("a")
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.prop('disabled')
    });
  });

  it('Error showed when the number is outside range', () => {
    cy.get("#volume-number").clear().type("-1");
    cy.get("#honk-btn").click();
    cy.get("#volume-number:invalid").then(($el) => {
      expect($el).to.exist;
    });
  });

  



});
