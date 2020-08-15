import { waitForReact } from 'testcafe-react-selectors';

fixture`App tests`.page('http://localhost:3000').beforeEach(async () => {
  await waitForReact();
});

test('Run a game of blackjack where you immediately "stick".', async (t) => {
  await t.click('#start');

  await waitForReact();

  await t.click('#stick');

  await waitForReact();

  await t.expect('#reset').ok();
});
