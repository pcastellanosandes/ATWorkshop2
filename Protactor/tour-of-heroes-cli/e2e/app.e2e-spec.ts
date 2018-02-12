import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('2.4.4 Go to hero from dashboard', () => {
    page.navigateTo();
    const heroDetail = page.goToHeroFromDashboard();
    expect(heroDetail.first().getText()).toBe('Mr. Nice details!');
  });

  it('2.4.6 Go to hero from search control', () => {
    page.navigateTo();
    const heroFound = page.heroNameToFind('Bombasto');
    expect(heroFound.count()).toBe(1);
    expect(heroFound.first().getText()).toBe('Bombasto details!');
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should add a new hero', () => {
    page.navigateToHeroes();
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

  it('2.4.1 should find a hero Zero', () => {
    page.navigateTo();
    const heroFound = page.FindHeroes('D');
    expect(heroFound.count()).toBe(3);
  });

  it('2.4.3 should edit hero Narco', () => {
    page.navigateTo();
    page.updateHeroName('Narco', ' Update');
    const heroFound = page.heroNameToFind('Narco Update');
    expect(heroFound.count()).toBe(1);
    expect(heroFound.first().getText()).toBe('Narco Update details!');
  });

  it('2.4.5 navigate to Hero from heroes page', () => {
    page.navigateToHeroes();
    const heroFound = page.goToHeroFromHeroesPage();
    expect(heroFound.count()).toBe(1);
    expect(heroFound.first().getText()).toBe('Zero details!');
  });

  it('2.4.2 should delete fisrt hero', () => {
    page.navigateToHeroes();
    const expectedHeroes = page.getAllHeroes().count();
    page.deleteHero();
    expect(page.getAllHeroes().count()).toBe(expectedHeroes.then(n => n - 1));
  });
});
