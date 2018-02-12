//works with html elements
import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  heroNameToFind(hero: string) {
    element(by.id('search-box')).sendKeys(hero);
    element(by.css('.search-result')).click();
    return element.all(by.tagName('h2'));
  }

  deleteHero(){
    element(by.tagName('my-heroes')).all(by.css('.delete')).first().click()
  }

  updateHeroName(currentHeroName: string, newHeroName: string) {
    element(by.id('search-box')).sendKeys(currentHeroName);
    element(by.css('.search-result')).click();
    element(by.tagName('input')).sendKeys(newHeroName);
    element.all(by.tagName('button')).last().click();
  }

  FindHeroes(hero: string) {
    element(by.id('search-box')).sendKeys(hero);
    return element.all(by.css('.search-result'));
  }

  goToHeroeFromDashboard(){
    element.all(by.css('.col-1-4')).first().click();
    return element.all(by.tagName('h2'));
  }
}
