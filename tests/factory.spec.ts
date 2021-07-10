// Helpers
import { mesaJestAfterEach, mesaJestBeforeEach, AquaJestBeforeEachContext } from '../jest/setup'
import { ETH_ZERO_ADDRESS, SUBGRAPH_SYNC_SECONDS, wait } from './helpers'

// Test block
describe('AquaFactory', function() {
  let mesa: AquaJestBeforeEachContext

  beforeEach(async () => {
    mesa = await mesaJestBeforeEach()
  })

  afterEach(async () => {
    await mesaJestAfterEach()
  })
  test('Should return AquaFactory upon initialization', async () => {
    const { data } = await mesa.fetchFromTheGraph(`{
          mesaFactory (id: "AquaFactory") {
            saleFee
            feeTo
            feeNumerator
            feeManager
            templateLauncher
            templateManager
            templateFee
          }
        }`)
    expect(data.data.mesaFactory.saleFee).toMatch((await mesa.mesaFactory.saleFee()).toString())
    expect(data.data.mesaFactory.feeTo.toLowerCase()).toMatch((await mesa.mesaFactory.feeTo()).toLowerCase())
    expect(data.data.mesaFactory.feeNumerator).toMatch((await mesa.mesaFactory.feeNumerator()).toString())
    expect(data.data.mesaFactory.feeManager.toLowerCase()).toMatch((await mesa.mesaFactory.feeManager()).toLowerCase())
    expect(data.data.mesaFactory.templateLauncher.toLowerCase()).toMatch(
      (await mesa.mesaFactory.templateLauncher()).toLowerCase()
    )
    expect(data.data.mesaFactory.templateManager.toLowerCase()).toMatch(
      (await mesa.mesaFactory.templateManager()).toLowerCase()
    )
    expect(data.data.mesaFactory.templateFee).toMatch((await mesa.mesaFactory.templateFee()).toString())
  })

  test('Should return new saleFee', async () => {
    await (await mesa.mesaFactory.setSaleFee(3)).wait(1)
    await wait(SUBGRAPH_SYNC_SECONDS)
    const { data } = await mesa.fetchFromTheGraph(`{
          mesaFactory (id: "AquaFactory") {
            saleFee
          }
        }`)
    expect(data.data.mesaFactory.saleFee).toMatch((await mesa.mesaFactory.saleFee()).toString())
  })
  test('Should return new feeTo', async () => {
    await (await mesa.mesaFactory.setFeeTo(ETH_ZERO_ADDRESS)).wait(1)
    await wait(SUBGRAPH_SYNC_SECONDS)
    const { data } = await mesa.fetchFromTheGraph(`{
          mesaFactory (id: "AquaFactory") {
            feeTo
          }
        }`)
    expect(data.data.mesaFactory.feeTo.toLowerCase()).toMatch((await mesa.mesaFactory.feeTo()).toLowerCase())
  })
  test('Should return new feeNumerator', async () => {
    await (await mesa.mesaFactory.setFeeNumerator(2)).wait(1)
    await wait(SUBGRAPH_SYNC_SECONDS)
    const { data } = await mesa.fetchFromTheGraph(`{
          mesaFactory (id: "AquaFactory") {
            feeNumerator
          }
        }`)
    expect(data.data.mesaFactory.feeNumerator).toMatch((await mesa.mesaFactory.feeNumerator()).toString())
  })
  test('Should return new feeManager', async () => {
    await (await mesa.mesaFactory.setFeeManager(ETH_ZERO_ADDRESS)).wait(1)
    await wait(SUBGRAPH_SYNC_SECONDS)
    const { data } = await mesa.fetchFromTheGraph(`{
          mesaFactory (id: "AquaFactory") {
            feeManager
          }
        }`)
    expect(data.data.mesaFactory.feeManager.toLowerCase()).toMatch((await mesa.mesaFactory.feeManager()).toLowerCase())
  })
  test('Should return new templateLauncher', async () => {
    await (await mesa.mesaFactory.setTemplateLauncher(ETH_ZERO_ADDRESS)).wait(1)
    await wait(SUBGRAPH_SYNC_SECONDS)

    const { data } = await mesa.fetchFromTheGraph(`{
          mesaFactory (id: "AquaFactory") {
            templateLauncher
          }
        }`)
    expect(data.data.mesaFactory.templateLauncher).toMatch((await mesa.mesaFactory.templateLauncher()).toLowerCase())
  })
  test('Should return new templateManager', async () => {
    await (await mesa.mesaFactory.setTemplateManager(ETH_ZERO_ADDRESS)).wait(1)
    await wait(SUBGRAPH_SYNC_SECONDS)
    const { data } = await mesa.fetchFromTheGraph(`{
          mesaFactory (id: "AquaFactory") {
            templateManager
          }
        }`)
    expect(data.data.mesaFactory.templateManager.toLowerCase()).toMatch(
      (await mesa.mesaFactory.templateManager()).toLowerCase()
    )
  })
  test('Should return new templateFee', async () => {
    await (await mesa.mesaFactory.setTemplateFee(10)).wait(1)
    await wait(SUBGRAPH_SYNC_SECONDS)
    const { data } = await mesa.fetchFromTheGraph(`{
          mesaFactory (id: "AquaFactory") {
            templateFee
          }
        }`)
    expect(data.data.mesaFactory.templateFee).toMatch((await mesa.mesaFactory.templateFee()).toString())
  })
})
