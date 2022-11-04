
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw button displays choices', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const draw = await driver.findElement(By.id('draw')).click()
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking Add to Duo displays player-duo', async () => {
    const title = await driver.findElement(By.id('title')).click()
    const displayed = await title.isDisplayed();
    expect(displayed).toBe(true);
})