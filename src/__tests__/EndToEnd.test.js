import puppeteer from 'puppeteer';

describe('filter events by city', () => {
	let browser;
	let page;

	beforeAll(async () => {
		jest.setTimeout(30000);
		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.event');
	});

	afterAll(async () => {
		browser.close();
	});

	test('When user has not searched for a city, show events in all cities', async () => {
		const eventsLength = await page.$$eval('.event', (element) => element.length);
		expect(eventsLength).toBe(2);
	});

	test('User sees a list of suggestions when searching for a city', async () => {
		await page.type('.city input', 'Berlin', { delay: 100 });
		const cityInputVal = await page.$eval('.city', (el) => (el.value = 'Berlin'));
		const eventsLength = await page.$$eval('.suggestions li', (element) => element.length);
		expect(cityInputVal).toBe('Berlin');
		expect(eventsLength).toBe(2);
	});

	test('User can select a city from the suggested list', async () => {
		await page.type('.city input', 'Berlin', { delay: 100 });
		await page.click('.suggestions li');
		const eventsLength = await page.$$eval('.suggestions li', (element) => element.length);
		expect(eventsLength).toBe(1);
	});
});

describe('show/hide an event details', () => {
	let browser;
	let page;

	beforeAll(async () => {
		jest.setTimeout(30000);
		browser = await puppeteer.launch();
		page = await browser.newPage();
		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.event');
	});

	afterAll(async () => {
		browser.close();
	});

	test('An event details element is collapsed by default', async () => {
		const eventDetails = await page.$('event .event-details');
		expect(eventDetails).toBeNull();
	});

	test('User can expand an event to see its details', async () => {
		await page.click('.event .details-btn');
		const eventDetails = await page.$('event .event-details');
		expect(eventDetails).toBeDefined();
	});

	test('User can hide an events details', async () => {
		await page.click('.event .details-btn');
		const eventDetails = await page.$('event .event-details');
		expect(eventDetails).toBeNull();
	});
});
